function calculeazaFrecventeRelative(text) {
  if (!text || typeof text !== "string") {
    return {};
  }

    const letterCounts = {};
    for (const char of text) {
       
        letterCounts[char] = (letterCounts[char] || 0) + 1;
    }

    const totalLetters = text.length;

    if (totalLetters === 0) {
        return {};
    }

    const frecventeRelative = {};
    for (const letter in letterCounts) {
        const count = letterCounts[letter];

        frecventeRelative[letter] = Math.round((count / totalLetters) * 10000) / 100;
    }

    return frecventeRelative;
}