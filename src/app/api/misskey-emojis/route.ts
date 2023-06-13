import { NextResponse } from "next/server"

import type { RequestBody } from "@/types/api/misskey-emojis"
import type { NextRequest } from "next/server"
import type { CustomEmoji, LiteInstanceMetadata } from "misskey-js/built/entities"

const filterCustomEmojis = (emojis: CustomEmoji[], emojiNames: string[]) => {
  const filteredEmojis = emojis.filter(({ name }) => emojiNames.includes(`:${name}:`))
  const res = filteredEmojis.map<Pick<CustomEmoji, "name" | "url">>(({ name, url }) => ({
    name,
    url,
  }))
  return res
}

export const POST = async (req: NextRequest) => {
  const { serverHost, emojiNames }: RequestBody = await req.json()
  const filteredEmojiNames = emojiNames.filter((name) => /^:.+:$/.test(name))
  const server = new URL(`https://${serverHost}`)

  const meta: LiteInstanceMetadata = await fetch(`${server.origin}/api/meta`, {
    method: "POST",
    body: JSON.stringify({
      detail: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
  const { version, emojis } = meta

  const majorVersion = version.match(/^(0|[1-9]\d*)/g)?.[0]
  const majorVersionNumber = majorVersion ? parseInt(majorVersion, 10) : 13
  if (majorVersionNumber >= 13) {
    const { emojis: v13emojis }: Pick<LiteInstanceMetadata, "emojis"> = await fetch(
      `${server.origin}/api/emojis`,
      {
        method: "POST",
        body: JSON.stringify({}),
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
      },
    ).then((res) => res.json())
    const res = filterCustomEmojis(v13emojis, filteredEmojiNames)
    return NextResponse.json(res)
  } else {
    const res = filterCustomEmojis(emojis, filteredEmojiNames)
    return NextResponse.json(res)
  }
}
