export const makeNoteContent = (resultEmojis: [string, string, string]) => {
  const resultText = resultEmojis.join("")
  return [resultText, "", "#souhaitガチャ", `https://souhait.me/play/souhaito-gacha`].join("\n")
}
