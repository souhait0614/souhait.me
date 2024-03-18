export const makeNoteContent = (resultEmojis: [string, string, string][]) => {
  const resultText = resultEmojis.map((result) => result.join("")).join("\n")
  return [
    resultText,
    "",
    "#souhaitガチャ",
    "#souhaitガチャ10連",
    `https://v1.souhait.me/play/souhaito-gacha-ten`,
  ].join("\n")
}
