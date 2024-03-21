module.exports.config = {
	name: "Owner",
    version: "1.0.1",
    permission: 0,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
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
var link = ["https://i.imgur.com/Xk2ZvfW.mp4",
            "https://i.imgur.com/Yh9sWFV.jpg",
            "https://i.imgur.com/9ew79FI.mp4",
            "https://i.imgur.com/FTCwdnd.mp4",

"https://i.imgur.com/PY7XfDO.mp4"];var callback = () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍-𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿

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
\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n╰┈►রোবট ওয়ার্নার কে কন্টাক করুন★\n\n╰┈►𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍-𝙇𝙄𝙉𝙆★\n\n╰┈►m.mem100072881080249\n\n╰┈►𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆-𝙇𝙄𝙉𝙆★\n\nhttps://www.facebook.com/100072881080249\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
