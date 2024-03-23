module.exports.config = {
    name: "owner",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
◢◥▂▂▂▂⭕▂▂▂▂◤◣
   ☘️আমার🌺পরিচয়🌿
◥◢▔▔▔▔⭕▔▔▔▔◣◤    


╰┈►আমি           :🌺EASIR IQBAL MAHI (⁠+⁠_⁠+⁠)🌺↙️
╰┈►ডাক নাম     :🍀🌺AIZEN JR 🌺
╰┈►ধর্ম              :🍀ইসলাম🕌🌺
╰┈►বাড়ি            :🍀 RAJSHAHI 🌍☘️
╰┈►থানার নাম   :🌺BAGHA🏟️☘️
╰┈►গ্রামের নাম  :🍀EHH KOMUNA 🏞️🌺
╰┈►পেশা           :🌺 MUSTERBATE AND BOT CHURI🚜🍀
╰┈►বয়স            :🍀16+ চলছে✅🌺
╰┈►উচ্চতা         :🌺 MEASURE KORTE HOBE🚻🍀
╰┈►ওজন          : 🍀DEKHTE HOBE🚷🌺
╰┈►রক্ত             :☘️AMMU KE JIGGESH KORTE HOBE🚹🌺
╰┈►গায়ের রং    :🌺KOMUNA WATCH LORD AIZEN ♨️🍀
╰┈►ধূমপান        :🌺HARAM 🌚🤲🚭🍀
╰┈►বেয়াদবি      :🍀Amr Cheye Boro Kew Nai♨️🌺
╰┈►ধন সম্পদ    :🌺জাতীয় ফকির⚠️🍀
╰┈►ভালোবাসা   :☘️ONK GULA BOU ACHE 🙂 🙃 🙂👍 ♨️🍁
\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n╰┈►রোবট ওয়ার্নার কে কন্টাক করুন★\n\n╰┈►𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍-𝙇𝙄𝙉𝙆★\n\n╰┈►m.mem100072881080249\n\n╰┈►𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆-𝙇𝙄𝙉𝙆★\n\nhttps://www.facebook.com/100072881080249\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•var callback = () => api.sendMessage({body:`
`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100072881080249/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
