# fmtime

Format time.

Z: Time Zone\
Y: Year\
M: Month\
D: Day\
h: Hour\
m: Minute\
s: Second\
S: Milli second\
%: Default escape

```js
import fmtime from "fmtime";

fmtime("YYYY-MM-DD hh:mm:ss UTC Z"); // 2024-02-25 05:39:06 UTC +8
fmtime("hh:mm:ss DD/MM/YYYY"); // 05:39:06 25/02/2024

fmtime("Year: YYYY"); // Year: 2024
fmtime("Year: YYYY", new Date("2023")); // Year: 2023
fmtime("YYYY Year"); // ❗ Y202 4ear
fmtime("YYYY %Year"); // 2024 Year
fmtime("YYYY &Year", undefined, "&"); // 2024 Year
```

The third parameter requires that **other characters are not matched** in the **regex**.

```js
fmtime("YYYY AAYear", undefined, "AA"); // ✅
fmtime("YYYY A$Year", undefined, "A$"); // ❎
```
