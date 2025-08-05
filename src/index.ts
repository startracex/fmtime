import { format } from "./format.ts";
import { createKeyCharMap } from "./key-char.ts";

export function fmtime(fmt: string, date: Date = new Date(), escape: string = "%"): string | undefined {
  if (!fmt) {
    return fmt;
  }
  if (isNaN(date.getTime())) {
    return undefined;
  }
  return format(fmt, createKeyCharMap(date), escape);
}

export default fmtime;
