import { avatar, icon } from "@/images"

import type { Metadata } from "next"

export const baseMetadata: Metadata = {
  icons: icon,
  metadataBase: new URL("https://v1.souhait.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    siteName: "souhait.me",
    type: "website",
    images: avatar,
  },
  twitter: {
    images: avatar,
    card: "summary",
  },
}
