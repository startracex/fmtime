function formatNumber(n: number, max = 2) {
  return n.toString().padStart(max, "0").split("");
}

export function format(
  fmt: string,
  time = new Date(),
  escape = "%"
): string | undefined {
  if (isNaN(time.getTime())) {
    return undefined;
  }
  const replaced = `${escape}${escape}`;
  const rest: string[] = [];
  fmt = fmt.replace(
    new RegExp(`${escape}([ZYMDhms${escape}])`, "g"),
    (_, p1) => {
      rest.push(p1);
      return replaced;
    }
  );
  const z = time.getTimezoneOffset() / -60;
  const switcher = {
    Z: [z >= 0 ? "+" + z.toString() : z.toString()],
    Y: time.getFullYear().toString().split(""),
    M: formatNumber(time.getMonth() + 1),
    D: formatNumber(time.getDate()),
    h: formatNumber(time.getHours()),
    m: formatNumber(time.getMinutes()),
    s: formatNumber(time.getSeconds()),
    S: formatNumber(time.getMilliseconds(), 3),
  };
  const result: string[] = [];
  for (const f of fmt.split("").reverse()) {
    const s = switcher[f]?.pop();
    if (s) {
      result.push(s);
    } else {
      result.push(f);
    }
  }
  return result
    .reverse()
    .join("")
    .replace(new RegExp(replaced, "g"), () => rest.shift());
}

export default format;
