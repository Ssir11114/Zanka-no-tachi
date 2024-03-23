const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/DBCxJk1.mp4",
  "https://i.imgur.com/0ZbGV3n.mp4",
  "https://i.imgur.com/uo5khKQ.mp4",
  "https://i.imgur.com/11YPxVG.mp4",
  "https://i.imgur.com/njbPrdi.mp4",
  "https://i.imgur.com/5yOZaUh.mp4",
  "https://i.imgur.com/Y6UBzal.mp4",
  "https://i.imgur.com/FXfc8hm.mp4",
  "https://i.imgur.com/5QyRowg.mp4",
  "https://i.imgur.com/H5kWKLb.mp4",
  "https://i.imgur.com/Tyi4VK1.mp4",
  "https://i.imgur.com/QH3AWQS.mp4",
  "https://i.imgur.com/gfbjgtP.mp4",
  "https://i.imgur.com/lmfiBRp.mp4",
  "https://i.imgur.com/DBCxJk1.mp4",
  "https://i.imgur.com/DBCxJk1.mp4",
  "https://i.imgur.com/BQOw4V2.mp4",
  "https://i.imgur.com/DBCxJk1.mp4",
  "https://i.imgur.com/FkB05ez.mp4",
  "https://i.imgur.com/DBCxJk1.mp4"
];

module.exports.config = {
  name: "😒",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "😒",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.startsWith("😒")) {
    const rahad = [
      "_ওই দিকে কি দেখো এ দিকে দেখো..!🫂😍",
      " উম্মম্মমমমমমহহহ..বেবি ওই দিকে কি 😒"
    
    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["😒"] === "undefined" || data["😒"]) data["😒"] = false;
  else data["😒"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["😒"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
