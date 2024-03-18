export const makeNoteContent = (resultEmojis: [string, string, string]) => {
  const resultText = resultEmojis.join("")
  return [
    resultText,
    "",
    "#souhaitガチャ",
    "#souhaitガチャ単発",
    `https://v1.souhait.me/play/souhaito-gacha`,
  ].join("\n")
}
