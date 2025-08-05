export function format(fmt: string, km: Record<string, string[]>, escape: string): string {
  const escapeReplacement = escape + escape;
  const rest: string[] = [];
  const fmtLen = fmt.length;
  const fmtChars = Array.from(fmt);

  for (let i = 0; i < fmtLen; i++) {
    if (fmtChars[i] === escape) {
      const nextChar = fmtChars[i + 1];
      if (nextChar && (nextChar === escape || nextChar in km)) {
        rest.push(nextChar);
        fmtChars[i] = escapeReplacement[0];
        fmtChars[i + 1] = escapeReplacement[1];
        i++;
      }
    }
  }

  const finalChars: string[] = new Array(fmtLen);
  for (let i = fmtLen - 1; i >= 0; i--) {
    const fmtChar = fmtChars[i];
    finalChars[i] = km[fmtChar]?.pop() ?? fmtChar;
  }

  let restIndex = 0;
  const output: string[] = new Array(fmtLen);

  for (let i = 0; i < fmtLen; i++) {
    if (finalChars[i] === escape && finalChars[i + 1] === escape) {
      output[i] = rest[restIndex];
      restIndex++;
      i++;
    } else {
      output[i] = finalChars[i];
    }
  }

  return output.join("");
}
