# fmtime

A way to format time.

Z: Time Zone\
Y: Year\
M: Month\
D: Day\
h: Hour\
m: Minute\
s: Second\
S: Millisecond\
%: Escape

```js
import fmtime from "fmtime";

fmtime("YYYY-MM-DD hh:mm:ss"); // 2024-02-25 05:39:06
fmtime("hh:mm:ss DD/MM/YYYY"); // 05:39:06 25/02/2024
```
