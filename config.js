//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "256788028745";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURKR1A1bHpaTDNDeWNmUDNVMlZhbmVPV0hOak5BRkpjSnJXRUJOcXFWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWJ1ZFJTQWkrR3E3bXorS1lUM0xIb0djUGRBY2xjSitNWUxJTUdrYnZBcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR21ZeGZ0T3R1a05sNjRkckVnNHJjR0FkaXNGVi91RzNZbDdYanFQRkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxejVTRkpFb1RCTTVSSS9hZk1LOWliU2FoZ1VqaFFaUHY4R2NzV1h2QVM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOQWJxZU9Yb3RiM2kyNThKVlVtVXZ6RnB0bGkyVjZJTXkzM1RTNnNKMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtVK25naCtJZFJZRGxueU55aHVYREtRLzczV1ByU21PWFVFQ3BhU1NZVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNjbEhwMGpyYWNZc0tvU01iQUlOVmZpb0FaYVdLNDRreGd2a2tzZGgwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVFkNjAyZ3hOejgraWtzbXdPT0lDckNiZnZzcytuRHR6YWJLREFIdlNDUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhEOVZnOURoM1A4ZnRNU0tUZVFZZFdiSmtxZTR0Q0pOOEVnM3FPRCtvbVdvRTBZejN2SWdWVDhtVVlvWUV4OG5ueDZJdEJ0MXppeitrOW5TcGN3NUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJkeFhaY2xmK2FDaFBqWk05S3c0Mnp5NnFWRWtKemdPUnlySUhZMS9lQ0IwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQOW9wdmRUT1EzbXMwS3JBVUpMQlB3IiwicGhvbmVJZCI6Ijg3NTUxZmMwLTNmYTEtNGExYS04N2Q5LTI4ZWMwMDhkZTZiMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNenlSQVZQYWNmTEpnSFh6ZUdMZmd4Z0hzdlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3lZcTBCem14ZmsxU2VJRVlBWkJVcmw3ekVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhBOFdKODlIIiwibWUiOnsiaWQiOiIyNTY3ODgwMjg3NDU6NzFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08yYmx0Z0RFUHlYZzdjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1sV3ZyYnVGUlptSnJoZ0NaUENleExneXZEK2thUncwY0s5b0d3Nzh6M1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNpeW83U2dzSnJ1WGtCVE1vbSswV3BRSUlDT2NyWWRadmhJenA4dmFNL1d2UGJYRWZsNlZXdktCYjFZUVF0WUc2TXdPMWNUaTNDNVpSVUFsOURwWUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwc0lSNnE0T2tDNGpMNDJPRjRaRUdhQ3hwMndnUk90NVU2RGRNcTlZa1RsQThGR3V5Q0pXWmtFbnFBdC9Zczd6RFVvZjJoajk2Y0ZHTExpRDZidytBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc4ODAyODc0NTo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSlZyNjI3aFVXWmlhNFlBbVR3bnNTNE1ydy9wR2tjTkhDdmFCc08vTTkxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MDA4MzI5fQ=="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
