const fs = require("fs");
const fetch = require("node-fetch");

//Config:
const first = 1, last = 50, path = "./images/", link = "https://www.silicone-forum.com";

let success = 0;

async function download(i) {
  
  const number = i.toString();

  const response = await fetch(
    i >= 1000 ?
      `${link}/data/avatars/o/${number.substring(0, number.length - 3)}/${i}.jpg`
      : `${link}/data/avatars/o/0/${i}.jpg`

  );

  if (response.status === 200) {
    success++;
    console.log(i, "is success.");
    return fs.writeFileSync(`${path + i}.jpg`, await response.buffer());

  } else
    return console.error(i, "is not success.");

}

async function main() {
  console.time("Finished in");

  for (i = first; i <= last; i++)
    await download(i);

  console.timeEnd("Finished in");
  console.log("Success image count:", success);
}

main();
