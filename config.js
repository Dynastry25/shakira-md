//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "basanzietech@gmail.com";
global.location = "Goba,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://dynastry_user:2Qovyjbimr380zhxcrQYPGD1V7OZ9zhV@dpg-cqilqq2j1k6c739h410g-a.oregon-postgres.render.com/dynastry";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/basanzietech/shakira-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e11bafaedba6aebcd9410.jpg";
global.devs = "255657779003";
global.sudo = process.env.SUDO || "255753266350";
global.owner = process.env.OWNER_NUMBER || "255753266350";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://shakira-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09peE1kei9NWU8zTVVzdjZGNjhIeXJWZ1VvRWNYd2FoQys4OE1QZmNVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHN4OG9sMmw3TytPSnJmL05oZmczTzJ3d0grUkxiMUNkS0pPME1SaUxnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQkhyR2N1MUZoajdnZWJ5dWluYUE2bFQ0ZUFWMVdaNXFsRUswS2RqcUdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZDdTcUVwMkxyYUkxZVZOcmQ3UGVSdnp0VmhmcnBmQnAvZi9aU2Q2R0VJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKeDQ5SDBFRkl5TzBZS0EyNHBrY2tZUkNhdG13Y2RpVzRHcTZxejhCVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpLVjk2ak00R3RYVURXbTlCeEgvYUIvLzJRUnN0bm1NWG5nemZzVmJNZ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU0yeG1DakFYcTE5ODNwaXdhMExEVlk2WU03eUhhWlhQektUMHZzN2JWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTFUdnZPQ3d2dUhPKzNYbFo0RDJtTXlNbFNyQzN0REFtVC9BMDNqLytqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPOUllU0hVaHliZUxHaWE4SVVpOUdlOHc1cCtoWnMwZnAydURVM1hUWFJ0ME9BZk8ycWVPVDJZZGV1a3orUjNGVjdnOE5hYndjM3ZWeWdMOHVrNmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6InlDWFd2UzFpSjRsWTBOQnVkVXczem1rWVBSc2VTeWNOTmtHZkRDcmYzeEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzUzMjY2MzUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEwNEJFRTY1NDlDQkUwNUIyQ0Q4OUZGQTkwMDhDMzYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIxODI4MjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJCSzczNHZzUlcyYTY3QmUzcnY2U2ciLCJwaG9uZUlkIjoiZjBiOGEwNGYtZGQ2Ny00YjY4LWJjZTMtNTU0OWU4ODcyNzM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk5ekJ3R0xlZzNoVDUyazNXblh2VmFxOG8vWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZlZZTWRCT2JpNjB1amdCek42VU1vblJxSFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjNXWjJFNTUiLCJtZSI6eyJpZCI6IjI1NTc1MzI2NjM1MDoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEeW5hc3RyeSBCdXNpbmVzcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2VWamJ3Q0VKclptYlVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUkJ6bWtjZ253Q1RDRFArc3JGN0h1WlVOYm5mQS80a2xCcis5aVFFTFNXTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSUdIWmgyTEV0amtEQTlyTVBjTU0rRWtFaFVIZTJvM0plS3pNamNBN3Fyb2l0MCtoZmExVjBTSnVsbzlDenFJV3Y3Tk9UMUkzWXNESG1FbDlSOUlaQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Inc4RHovMjlKTG9DR3ZQWDV2ckVaSnJRczBtdjN5d1EzVlNvbS9WbStuTFBuSjAraE5kUVNzZ2pOS1k0eHpWeE1RTTcvRzBScjZXKyt1bWNvUnA2dmpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzUzMjY2MzUwOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVRYzVwSElKOEFrd2d6L3JLeGV4N21WRFc1M3dQK0pKUWEvdllrQkMwbGoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxODI4MjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3B5In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "💻basanzietech | shakira-md❤️",
  author: process.env.PACK_AUTHER || "basanzietech",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Dynastry-md",
  ownername: process.env.OWNER_NAME || "DYNASTRY BUSINESS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "SHAKIRA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
