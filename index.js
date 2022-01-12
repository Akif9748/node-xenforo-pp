//Minimum value is 1 for first.
const first = 116,
  last = 116,
  path = `./images/`,
  link = "https://www.silicone-forum.com";

const download = require("./download.js");

for (var i = first; i <= last; i++) {
  download(i);
}


