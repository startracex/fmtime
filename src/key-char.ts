function padNumberArray(n: number, padLen = 2): string[] {
  return n.toString().padStart(padLen, "0").split("");
}

type SNumber = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type KeyCharMap = Record<"Y" | "M" | "D" | "h" | "m" | "s" | "S", SNumber[]> &
  Record<"Z", (`${"-" | "+"}${Exclude<SNumber, "0"> | "10" | "11" | "12"}` | "0")[]>;

/**
 * Z: Time Zone\
 * Y: Year\
 * M: Month\
 * D: Day\
 * h: Hour\
 * m: Minute\
 * s: Second\
 * S: Millisecond\
 */
export function createKeyCharMap(date: Date): KeyCharMap {
  const z = date.getTimezoneOffset() / -60;
  return {
    Z: [z === 0 ? "0" : z > 0 ? `+${z}` : `-${z}`],
    Y: padNumberArray(date.getFullYear()),
    M: padNumberArray(date.getMonth() + 1),
    D: padNumberArray(date.getDate()),
    h: padNumberArray(date.getHours()),
    m: padNumberArray(date.getMinutes()),
    s: padNumberArray(date.getSeconds()),
    S: padNumberArray(date.getMilliseconds(), 3),
  } as KeyCharMap;
}
