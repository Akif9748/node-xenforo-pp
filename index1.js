//Minimum value is 1 for first.

const first = 115,
  last = 117,
  path = `./images/`, link = "https://www.silicone-forum.com"

const fs = require("fs");
const axios = require("axios");


for (var i = first; i <= last; i++) {
  download(i)

}



function download(i) {

  if (i > 999) {
    const number = i.toString()
    var url = `${link}/data/avatars/o/${number.substring(0, number.length - 3)}/${number}.jpg`
  } else {
    var url = `${link}/data/avatars/o/0/${i}.jpg`
  }

  axios.get(url, {
    responseType: 'arraybuffer'
  })
    .then(function (response) {
      // handle success
      const buffer = Buffer.from(response.data, 'base64');
      fs.writeFileSync(`${path + i}.jpg`, buffer)
      console.log(`${i} is success.`, response.status);


    })
    .catch(function (error) {
      // handle error
      return console.error(`${i} is not success.`, "Cant found image.");

    })
}