const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffmpeg = require('fluent-ffmpeg');
// ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const googleImage = require('g-i-s')
const yts = require('yt-search')
const zee = require('api-alphabot')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText, fetchJson } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { pinterest } = require('./lib/pinterest')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')

//══════════[ Leveling and Rpg ]══════════//

let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance } = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//══════════[ Setting ]══════════//

self = setting.self
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
icon1 = setting.icon1
icon2 = setting.icon2
const fakeimage = fs.readFileSync('./media/dogepic1.jpg')
const thumb = fs.readFileSync('./media/dogetb.jpg')

//══════════[ Developer Number ]══════════//

developerNo = '919734192003'
developerName = 'Ayush Biswas'

//══════════[ Apikeys ]══════════//
//----credit goes to all the respected owner---//

dhakey = apikey.dhakey
KingOfBearKey = apikey.BearKey
Leyscoders = apikey.Leyscoders
Lolhuman = apikey.Lolhuman
Lolhumanbykur = apikey.Lolhuman2
lolkey = apikey.lolkey1
viokey = apikey.violetics

//══════════[ Sticker WM ]══════════//

//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))

//══════════[ TIME ]══════════//



// Anime variables //

let animename, animeResponse, animeList, animeReply




const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
if (time2 < "23:59:00") {
	var ucapanWaktu = 'Good night 🌌'
}
if (time2 < "19:00:00") {
	var ucapanWaktu = 'Good afternoon 🌆'
}
if (time2 < "18:00:00") {
	var ucapanWaktu = 'Good afternoon 🌇'
}
if (time2 < "15:00:00") {
	var ucapanWaktu = 'Good afternoon 🏞'
}
if (time2 < "11:00:00") {
	var ucapanWaktu = 'Good morning 🌅'
}
if (time2 < "05:00:00") {
	var ucapanWaktu = 'Good night 🏙'
}

//══════════[ Module Export ]══════════//

module.exports = DogeXeonOP = async (WAapi, mek, _welkom) => {
	try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const myTimezone = moment.tz('Asia/Kolkata').format('dddd') + ', ' + moment.tz('Asia/Kolkata').format('LL')
		const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Kolkata').format("HH:mm:ss");
		const timeJay = moment().tz('Asia/Kolkata').format("HH:mm:ss");
		const type = Object.keys(mek.message)[0]
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = WAapi.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `916909137213@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? WAapi.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await WAapi.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		m = simple.smsg(WAapi, mek)
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? WAapi.user.jid : WAapi.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		const pushname = mek.key.fromMe ? WAapi.user.name : conts.notify || conts.vname || conts.name || '-'

		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await WAapi.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
		}
		try {
			pporang = await WAapi.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		} catch {
			pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
		const ofrply = await getBuffer(pporang)

		//══════════[ Send file from url ]══════════//

		const sendFileFromUrl = async (link, type, options) => {
			hasil = await getBuffer(link)
			WAapi.sendMessage(from, hasil, type, options).catch(e => {
				fetch(link).then((hasil) => {
					WAapi.sendMessage(from, hasil, type, options).catch(e => {
						WAapi.sendMessage(from, { url: link }, type, options).catch(e => {
							reply
							console.log(e)
						})
					})
				})
			})
		}

		//══════════[ Send message from url ]══════════//

		// sticker meme
		const sendStickerFromUrl = async (to, url) => {
			var names = Date.now() / 10000;
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri)
						.pipe(fs.createWriteStream(filename))
						.on("close", callback);
				});
			};
			download(url, "./stik" + names + ".png", async function () {
				console.log("finished");
				let filess = "./stik" + names + ".png";
				let asw = "./stik" + names + ".webp";
				exec(
					`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
					(err) => {
						let media = fs.readFileSync(asw);
						WAapi.sendMessage(to, media, MessageType.sticker, { quoted: mek });
						fs.unlinkSync(filess);
						fs.unlinkSync(asw);
					}
				);
			});
		};

		//══════════[ sendWebp ]══════════//

		const sendWebp = async (from, url) => {
			var names = Date.now() / 10000;
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, './temp' + names + '.png', async function () {
				console.log('Done');
				let ajg = './temp' + names + '.png'
				let palak = './temp' + names + '.webp'
				exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
					let media = fs.readFileSync(palak)
					WAapi.sendMessage(from, media, MessageType.sticker, { quoted: mek })
					fs.unlinkSync(ajg)
					fs.unlinkSync(palak)
				});
			});
		}

		//══════════[ Mess Dll ]══════════//

		mess = {
			wait: 'In process...',
			eror: 'Sorry an error occurred!!',
			success: 'Done✓',
			error: {
				stick: 'Thats not a sticker bro !!',
				Iv: 'Link invalid !!'
			},
			only: {
				nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
				group: 'This feature is only for group!!',
				owner: 'This feature is only for owner!!',
				admin: 'This feature is onlu for admin!!',
				Badmin: 'Please give adminship to the bot first!!'
			}
		}

		const math = (teks) => {
			return Math.floor(teks)
		}
		const runtime = function (seconds) {
			seconds = Number(seconds);
			var d = Math.floor(seconds / (3600 * 24));
			var h = Math.floor((seconds % (3600 * 24)) / 3600);
			var m = Math.floor((seconds % 3600) / 60);
			var s = Math.floor(seconds % 60);
			var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
			var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
			var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
			var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
			return dDisplay + hDisplay + mDisplay + sDisplay;
		};

		//══════════[ BUTTON ]══════════//

		const sendButton = async (from, context, fortext, but, mek) => {
			buttonMessages = {
				contentText: context,
				footerText: fortext,
				buttons: but,
				headerType: 1
			}
			WAapi.sendMessage(from, buttonMessages, buttonsMessage, {
				quoted: mek
			})
		}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
			const buttonMessage = {
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 1
			}
			WAapi.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
		}
		const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
			kma = gam1
			mhan = await WAapi.prepareMessage(from, kma, image)
			const buttonMessages = {
				imageMessage: mhan.message.imageMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 4
			}
			WAapi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}
		const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {
			kma = vid1
			mhan = await WAapi.prepareMessage(from, kma, video)
			const buttonMessages = {
				videoMessage: mhan.message.videoMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 5
			}
			WAapi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}
		const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
			kma = gam1
			mhan = await WAapi.prepareMessage(from, kma, location)
			const buttonMessages = {
				locationMessage: mhan.message.locationMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 6
			}
			WAapi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		//══════════[ Fake ]══════════//

		const listmsg = (from, title, desc, list) => {
			let po = WAapi.prepareMessageFromContent(from, { "listMessage": { "title": title, "description": desc, "buttonText": "𝗠𝗘𝗡𝗨", "footerText": `${myTimezone}`, "listType": "SINGLE_SELECT", "sections": list } }, {})
			return WAapi.relayWAMessage(po, { waitForAck: true })
		}
		const reply = (teks) => {
			WAapi.sendMessage(from, teks, text, { quoted: mek })
		}
		const sendMess = (hehe, teks) => {
			WAapi.sendMessage(hehe, teks, text)
		}
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? WAapi.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : WAapi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const costum = (pesan, tipe, target, target2) => {
			WAapi.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		// const ftrol = { key: { participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 5555, status: 1, surface: 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' } } }
		// const floc = { key: { participant: '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb } } }
		// const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb } } }
		// const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype": "audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" } } }
		const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb } } }
		const textImg = (teks) => { return WAapi.sendMessage(from, teks, text, { quoted: fgi, thumbnail: fs.readFileSync('./media/dogetb.jpg') }) }
		// const fakeitem = (teks) => { WAapi.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}) }, message: { "orderMessage": { "orderId": "174238614569481", "thumbnail": fs.readFileSync("./media/dogetb.jpg"), "itemCount": 9999999999, "status": "INQUIRY", "surface": "CATALOG", "message": `${ucapanWaktu} ${pushname}`, "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" } } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }) }

		//══════════[ Storage ]══════════//

		const sendMediaURL = async (to, url, text = "", mids = []) => {
			if (mids.length > 0) {
				text = normalizeMention(to, text, mids)
			}
			const fn = Date.now() / 10000;
			const filename = fn.toString()
			let mime = ""
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					mime = res.headers['content-type']
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, filename, async function () {
				console.log('done');
				let media = fs.readFileSync(filename)
				let type = mime.split("/")[0] + "Message"
				if (mime === "image/gif") {
					type = MessageType.video
					mime = Mimetype.gif
				}
				if (mime.split("/")[0] === "audio") {
					mime = Mimetype.mp4Audio
				}
				WAapi.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text, contextInfo: { "mentionedJid": mids } })

				fs.unlinkSync(filename)
			});
		}

		const createSerial = (size) => {
			return crypto.randomBytes(size).toString('hex').slice(0, size)
		}

		//══════════[ Grup ]══════════//

		const hideTag = async function (from, text) {
			let anugroupsend = await WAapi.groupMetadata(from)
			let members = anugroupsend.participants
			let ane = []
			for (let i of members) {
				ane.push(i.jid)
			}
			WAapi.sendMessage(from, { text: text, jpegThumbnail: fs.readFileSync('media/dogepic1.jpg') }, 'extendedTextMessage', { contextInfo: { "mentionedJid": ane } })
		}
		const hideTagKontak = async function (from, nomor, nama) {
			let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
			let anuvcardoke = await WAapi.groupMetadata(from)
			let members = anuvcardoke.participants
			let ane = []
			for (let i of members) {
				ane.push(i.jid)
			}
			WAapi.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact, { contextInfo: { "mentionedJid": ane } })
		}
		const sendKontak = (from, nomor, nama) => {
			const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
			WAapi.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true } })
		}

		//══════════[ Automatic Reply ]══════════//

		for (let anji of setik) {
			if (budy === anji) {
				result = fs.readFileSync(`./media/sticker/${anji}.webp`)
				WAapi.sendMessage(from, result, sticker, { quoted: mek })
			}
		}
		for (let anju of vien) {
			if (budy === anju) {
				result = fs.readFileSync(`./media/vn/${anju}.mp3`)
				WAapi.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
			}
		}
		for (let anjh of imagi) {
			if (budy === anjh) {
				result = fs.readFileSync(`./media/image/${anjh}.jpg`)
				WAapi.sendMessage(from, result, image, { quoted: mek })
			}
		}

		//══════════[ Antilink & Antivirtex ]══════════//

		if (budy.includes("https://chat.whatsapp.com/")) {
			if (!isGroup) return
			if (!isAntiLink) return
			if (isGroupAdmins) return
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			reply(` *「 GROUP LINK DETECTED 」*\nYou sent the group chat link, sorry you will be kicked from the group`)
			setTimeout(() => {
				WAapi.groupRemove(from, [kic]).catch((e) => { reply(`BOTS MUST BE ADMIN`) })
			}, 0)
		}

		if (budy.length > 3500) {
			if (!isGroup) return
			if (!isAntiVirtex) return
			if (isGroupAdmins) return
			reply('Mark as read\n'.repeat(300))
			reply(`「 *VIRUS DETECTED* 」\n\nYou sent a virtex, sorry you will be kicked from the group`)
			console.log(color('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
			WAapi.groupRemove(from, [sender])
		}

		//══════════[ Dll ]══════════//

		if (autoread) {
			WAapi.chatRead(from, "read")
		} else if (autoketik) {
			WAapi.updatePresence(from, Presence.composing)
		} else if (autovn) {
			WAapi.updatePresence(from, Presence.recording)
		}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIVATE \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && !isOwner && self === true) return
		switch (command) {

			//══════════[ MENU FEATURES ]══════════//

			case 'menu':
			case 'help':

				timestampe = speed();
				latensie = speed() - timestampe
				const { wa_version, os_version } = WAapi.user.phone
				pemilik = `${owner}@s.whatsapp.net`
				menu =
					`*_${ucapanWaktu} @${senderr.split('@')[0]}_*

❏「 TIME 」
${icon1} *Date* : ${myTimezone}
${icon1} *Time* : ${time}

❏「 INFO BOT 」
${icon1} *Speed* : ${latensie.toFixed(4)} Second
${icon1} *Runtime* : ${runtime(process.uptime())}
${icon1} *Bot Name* : ${botname}
${icon1} *Owner Name* : ${ownername}
${icon1} *Owner Number* : @${pemilik.split('@')[0]}
${icon1} *Host Name :* ${os.hostname()}
${icon1} *Platform :* ${os.platform()}
${icon1} *Wa Version :* ${WAapi.user.phone.wa_version}
${icon1} *Mode :* ${self ? "Self" : "Public"}
${icon1} *Autoread* : ${autoread ? "Active" : "Off"}
${icon1} *Autotype* : ${autoketik ? "Active" : "Off"}
${icon1} *Autovn* : ${autovn ? "Active" : "Off"}

❏「 USER INFO 」
${icon1} *Name* : ${pushname}
${icon1} *Bio* : ${bio_user}
${icon1} *Number* : @${senderr.split('@')[0]}
${icon1} *Status* : ${isOwner ? 'Owner' : 'User'}`
				teks =
					`_Please Select Button Below_
_If You Are A Mod User_
_Please Type ${prefix}command_`
				WAapi.sendMessage(from, { contentText: `${teks}`, footerText: `${menu}`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU 🗃️' }, type: 1 }, { buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT 📝' }, type: 1 }, { buttonId: `${prefix}developer`, buttonText: { displayText: 'DEVELOPER 👨🏼‍💻' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [senderr, pemilik] } } }, 'buttonsMessage')
				break
			case 'command':

				listMsg = {
					buttonText: 'MENU 📃',
					footerText: `*${botname}*`,
					description: `Hi Friend @${senderr.split('@')[0]}, Please select the menu here`,
					sections: [
						{
							"title": `${myTimezone} - ${time}`,
							rows: [
								{
									"title": "GROUP MENU",
									"description": `Display A List Of Group Features`,
									"rowId": `${prefix}grupmenu`
								},
								{
									"title": "DOWNLOAD MENU",
									"description": `Display A List Of Features To Download`,
									"rowId": `${prefix}downloadmenu`
								},
								{
									"title": "MAKER MENU",
									"description": `Display A List Of Features To Create Logo`,
									"rowId": `${prefix}makermenu`
								},
								{
									"title": "ANIME MENU",
									"description": `Display A List Of Anime Features`,
									"rowId": `${prefix}animemenu`
								},
								{
									"title": "STICKER MENU",
									"description": `Display A List Of Sticker Features`,
									"rowId": `${prefix}stickermenu`
								},
								{
									"title": "FUN MENU",
									"description": `Display A List Of Fun Features`,
									"rowId": `${prefix}funmenu`
								},
								{
									"title": "SOUND MENU",
									"description": `Display A List Of Sounds`,
									"rowId": `${prefix}soundmenu`
								},
								{
									"title": "OCR MENU",
									"description": `Display A List Of Ocr Features`,
									"rowId": `${prefix}ocrmenu`
								},
								{
									"title": "CONVERTER MENU",
									"description": `Display A List Of Convert Features`,
									"rowId": `${prefix}convertmenu`
								},
								{
									"title": "SEARCH MENU",
									"description": `Display A List Of Searching Features`,
									"rowId": `${prefix}searchmenu`
								},
								{
									"title": "APK MENU",
									"description": `Display A List Of Apk Features`,
									"rowId": `${prefix}apkmenu`
								},
								{
									"title": "OTHER MENU",
									"description": `Display A List Of Other Features`,
									"rowId": `${prefix}othermenu`
								},
								{
									"title": "OWNER MENU",
									"description": `Display A List Of Owner Features`,
									"rowId": `${prefix}ownermenu`
								}
							]
						}],
					listType: 1
				}
				WAapi.sendMessage(from, listMsg, MessageType.listMessage, { contextInfo: { mentionedJid: [senderr] }, quoted: fgi })
				break
			case 'allmenu':

				reply(`*_Sorry Features ${prefix + command} Not Available Please Type ${prefix}command_*`)
				break
			case 'grupmenu':
			case 'groupmenu':

				menu =
					`*「 GROUP MENU 」*

${icon2} ${prefix}antilink _on / off_
${icon2} ${prefix}antivirtex _on / off_
${icon2} ${prefix}welcome _on / off_
${icon2} ${prefix}group _open / closed_
${icon2} ${prefix}promote _@tag / reply_
${icon2} ${prefix}demote _@tag / reply_
${icon2} ${prefix}add _916xx_
${icon2} ${prefix}kick _@tag / reply_
${icon2} ${prefix}getdesc
${icon2} ${prefix}setpp _reply_
${icon2} ${prefix}setdesc _text_
${icon2} ${prefix}setname _text_
${icon2} ${prefix}getbio _reply target_
${icon2} ${prefix}getdp _tag_
${icon2} ${prefix}getname _reply target_
${icon2} ${prefix}tagall
${icon2} ${prefix}hidetag _text_
${icon2} ${prefix}contact _916x|Name_
${icon2} ${prefix}contag _@tag|Name_
${icon2} ${prefix}sticktag _Reply Sticker_
${icon2} ${prefix}totag _Reply Image_
${icon2} ${prefix}creategroup _Name|tag_
${icon2} ${prefix}promoteall
${icon2} ${prefix}demoteall
${icon2} ${prefix}listadmin
${icon2} ${prefix}leave
${icon2} ${prefix}grupowner
${icon2} ${prefix}groupinfo
${icon2} ${prefix}grouplink
${icon2} ${prefix}onlinelist
${icon2} ${prefix}resetgrouplink`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'downloadmenu':

				menu =
					`*「 DOWNLOAD MENU 」*

${icon2} ${prefix}mediafire _Link_
${icon2} ${prefix}soundcloud _Link_
${icon2} ${prefix}telegramsticker _Link_
${icon2} ${prefix}spotify _Link_
${icon2} ${prefix}tiktok _Link_
${icon2} ${prefix}tiktoknowm _Link_
${icon2} ${prefix}tiktokwm _Link_
${icon2} ${prefix}tiktokmp3 _Link_
${icon2} ${prefix}ytmp3 _Link_
${icon2} ${prefix}ytmp4 _Link_
${icon2} ${prefix}play _song name_
${icon2} ${prefix}instagram _video link_
${icon2} ${prefix}herodetail _hero name_
${icon2} ${prefix}herolist
${icon2} ${prefix}lyrics _song name_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'makermenu':

				menu =
					`*「 MAKER MENU 」*

${icon2} ${prefix}freefire _text_
${icon2} ${prefix}silverplaybutton _text_
${icon2} ${prefix}goldplaybutton _text_
${icon2} ${prefix}blackpink _text_
${icon2} ${prefix}halloween _text_
${icon2} ${prefix}halloween2 _text_
${icon2} ${prefix}3dgradient _text_
${icon2} ${prefix}naturalleaves _text_
${icon2} ${prefix}dropwater _text_
${icon2} ${prefix}blood _text_
${icon2} ${prefix}blood2 _text_
${icon2} ${prefix}snow _text_
${icon2} ${prefix}cloud _text_
${icon2} ${prefix}neondevil _text_
${icon2} ${prefix}neon _text_
${icon2} ${prefix}glowingneonlight _text_
${icon2} ${prefix}neonlight _text_
${icon2} ${prefix}neonlight2 _text_
${icon2} ${prefix}neonlight3 _text_
${icon2} ${prefix}greenneon _text_
${icon2} ${prefix}toxic _text_
${icon2} ${prefix}matrix _text_
${icon2} ${prefix}thunder _text_
${icon2} ${prefix}thunder2 _text_
${icon2} ${prefix}bokeh _text_
${icon2} ${prefix}carbontext _text_
${icon2} ${prefix}christmas _text_
${icon2} ${prefix}breakwall _text_
${icon2} ${prefix}roadwarning _text_
${icon2} ${prefix}engraved3d _text_
${icon2} ${prefix}embossed _text_
${icon2} ${prefix}3dstone _text_
${icon2} ${prefix}futuristic _text_
${icon2} ${prefix}sketch _text_
${icon2} ${prefix}bluecircuit _text_
${icon2} ${prefix}space _text_
${icon2} ${prefix}magmahot _text_
${icon2} ${prefix}artpapercut _text_
${icon2} ${prefix}3dluxurygold _text_
${icon2} ${prefix}robotr2d2 _text_
${icon2} ${prefix}harrypotter _text_
${icon2} ${prefix}glitch3 _text_
${icon2} ${prefix}greenhorror _text_
${icon2} ${prefix}horrorgift _text_
${icon2} ${prefix}erodedmetal _text_
${icon2} ${prefix}3dglowingmetal _text_
${icon2} ${prefix}blackmetal _text_
${icon2} ${prefix}bluemetal _text_
${icon2} ${prefix}shynimetal _text_
${icon2} ${prefix}rustymetal _text_
${icon2} ${prefix}metalpurple _text_
${icon2} ${prefix}metalrainbow _text_
${icon2} ${prefix}metaldarkgold _text_
${icon2} ${prefix}colorfullluxurymetal _text_
${icon2} ${prefix}glossybluemetal _text_
${icon2} ${prefix}3dglossymetal _text_
${icon2} ${prefix}3ddeepseametal _text_
${icon2} ${prefix}leddisplayscreen _text_
${icon2} ${prefix}metallic _text_
${icon2} ${prefix}glossymetallic _text_
${icon2} ${prefix}christmastree _text_
${icon2} ${prefix}sparklesmerrychristmas _text_
${icon2} ${prefix}countryflag3d _text_
${icon2} ${prefix}americanflag3d _text_
${icon2} ${prefix}3dscfi _text_
${icon2} ${prefix}3drainbow _text_
${icon2} ${prefix}3dwaterpipe _text_
${icon2} ${prefix}3dchrome _text_
${icon2} ${prefix}bluegem _text_
${icon2} ${prefix}purplegem _text_
${icon2} ${prefix}pinkcandy _text_
${icon2} ${prefix}transformer _text_
${icon2} ${prefix}berry _text_
${icon2} ${prefix}brokenglass _text_
${icon2} ${prefix}3drealistic _text_
${icon2} ${prefix}3dunderwater _text_
${icon2} ${prefix}writeinsandsummerbeach _text_
${icon2} ${prefix}sandwriting _text_
${icon2} ${prefix}foilballoon _text_
${icon2} ${prefix}3dglue _text_
${icon2} ${prefix}1917 _text_
${icon2} ${prefix}minion _text_
${icon2} ${prefix}doubleexposure _text_
${icon2} ${prefix}holographic3d _text_
${icon2} ${prefix}deluxegold _text_
${icon2} ${prefix}deluxesilver _text_
${icon2} ${prefix}glossycarbon _text_
${icon2} ${prefix}fabric _text_
${icon2} ${prefix}xmascards3d _text_
${icon2} ${prefix}wicker _text_
${icon2} ${prefix}fireworksparkle _text_
${icon2} ${prefix}skeleton _text_
${icon2} ${prefix}ultragloss _text_
${icon2} ${prefix}denim _text_
${icon2} ${prefix}decorategreen _text_
${icon2} ${prefix}peridot _text_
${icon2} ${prefix}rock _text_
${icon2} ${prefix}lava _text_
${icon2} ${prefix}rainbowequalizer _text_
${icon2} ${prefix}purpleglass _text_
${icon2} ${prefix}decorativeglass _text_
${icon2} ${prefix}chocolatecake _text_
${icon2} ${prefix}strawberry _text_
${icon2} ${prefix}koifish _text_
${icon2} ${prefix}bread _text_
${icon2} ${prefix}3dbox _text_
${icon2} ${prefix}freeadvancedglow _text_
${icon2} ${prefix}honey _text_
${icon2} ${prefix}marble _text_
${icon2} ${prefix}marbleslabs _text_
${icon2} ${prefix}icecold _text_
${icon2} ${prefix}fruitjuice _text_
${icon2} ${prefix}abstragold _text_
${icon2} ${prefix}biscuit _text_
${icon2} ${prefix}bagel _text_
${icon2} ${prefix}wood _text_
${icon2} ${prefix}hexagolden _text_
${icon2} ${prefix}wonderfulgraffitiart _text_
${icon2} ${prefix}8bit _Text1&Text2_
${icon2} ${prefix}pornhub _Text1&Text2_
${icon2} ${prefix}glitch _Text1&Text2_
${icon2} ${prefix}glitch2 _Text1&Text2_
${icon2} ${prefix}layered _Text1&Text2_
${icon2} ${prefix}3dsteel _Text1&Text2_
${icon2} ${prefix}realistic _Text1&Text2_
${icon2} ${prefix}lionlogo _Text1&Text2_
${icon2} ${prefix}ninjalogo _Text1&Text2_
${icon2} ${prefix}wolf _Text1&Text2_
${icon2} ${prefix}wolf2 _Text1&Text2_
${icon2} ${prefix}halloween3 _Text1&Text2_
${icon2} ${prefix}marvel _Text1&Text2_
${icon2} ${prefix}marvel2 _Text1&Text2_
${icon2} ${prefix}cinematichorror _Text1&Text2_
${icon2} ${prefix}avengers _Text1&Text2_
${icon2} ${prefix}graffiti3 _Text1&Text2_
${icon2} ${prefix}captainamerica _Text1&Text2_
${icon2} ${prefix}girlneko _Text1&Text2_
${icon2} ${prefix}sadboy _Text1&Text2_
${icon2} ${prefix}makerkaneki _Text1&Text2_
${icon2} ${prefix}rem _Text1&Text2_
${icon2} ${prefix}lolimaker _Text1&Text2_
${icon2} ${prefix}gura _Text1&Text2_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			
	
			case 'animemenu':

				menu =
					`*「 ANIME 」*

${icon2} ${prefix}anibatch _Text_
${icon2} ${prefix}gogoanime _Text_
${icon2} ${prefix}anime-planet _Text_

`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'stickermenu':

				menu =
					`*「 STICKER MENU 」*

${icon2} ${prefix}stickerwm _Author|Package_
${icon2} ${prefix}take _Author|Package_
${icon2} ${prefix}sticker _Reply_
${icon2} ${prefix}attp _Text_
${icon2} ${prefix}ttp _Text_
${icon2} ${prefix}ttp2 _Text_
${icon2} ${prefix}ttp3 _Text_
${icon2} ${prefix}tt4 _Text_
${icon2} ${prefix}semoji _Emoji_
${icon2} ${prefix}stcmemepic _Up Txt|Down Txt_
${icon2} ${prefix}stcmeme _Up Txt|Down Txt_
${icon2} ${prefix}memegenerator _Text_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'funmenu':

				menu =
					`*「 FUN MENU 」*

${icon2} ${prefix}ship _tag/tag_
${icon2} ${prefix}rate _reply_
${icon2} ${prefix}can _question_
${icon2} ${prefix}is _question_
${icon2} ${prefix}when _question_
${icon2} ${prefix}stupid
${icon2} ${prefix}foolish
${icon2} ${prefix}smart
${icon2} ${prefix}ape
${icon2} ${prefix}noob
${icon2} ${prefix}great
${icon2} ${prefix}horny
${icon2} ${prefix}asshole
${icon2} ${prefix}beautiful
${icon2} ${prefix}handsome
${icon2} ${prefix}couple
${icon2} ${prefix}girl
${icon2} ${prefix}boy
${icon2} ${prefix}handsomecheck [tag]
${icon2} ${prefix}beautycheck [tag]
${icon2} ${prefix}gaycheck [tag]
${icon2} ${prefix}lesbiancheck [tag]
${icon2} ${prefix}charactercheck [tag]`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'soundmenu':

				menu =
					`*「 SOUND MENU 」*
${icon2} ${prefix}sound1
${icon2} ${prefix}sound2
${icon2} ${prefix}sound3
${icon2} ${prefix}sound4
${icon2} ${prefix}sound5
${icon2} ${prefix}sound6
${icon2} ${prefix}sound7
${icon2} ${prefix}sound8
${icon2} ${prefix}sound9
${icon2} ${prefix}sound10
${icon2} ${prefix}sound11
${icon2} ${prefix}sound12
${icon2} ${prefix}sound13
${icon2} ${prefix}sound14
${icon2} ${prefix}sound15
${icon2} ${prefix}sound16
${icon2} ${prefix}sound17
${icon2} ${prefix}sound18
${icon2} ${prefix}sound19
${icon2} ${prefix}sound20
${icon2} ${prefix}sound21
${icon2} ${prefix}sound22
${icon2} ${prefix}sound23
${icon2} ${prefix}sound24
${icon2} ${prefix}sound25
${icon2} ${prefix}sound26
${icon2} ${prefix}sound27
${icon2} ${prefix}sound28
${icon2} ${prefix}sound29
${icon2} ${prefix}sound30
${icon2} ${prefix}sound31
${icon2} ${prefix}sound32
${icon2} ${prefix}sound33
${icon2} ${prefix}sound34
${icon2} ${prefix}sound35
${icon2} ${prefix}sound36
${icon2} ${prefix}sound37
${icon2} ${prefix}sound38
${icon2} ${prefix}sound39
${icon2} ${prefix}sound40
${icon2} ${prefix}sound41
${icon2} ${prefix}sound42
${icon2} ${prefix}sound43
${icon2} ${prefix}sound44
${icon2} ${prefix}sound45
${icon2} ${prefix}sound46
${icon2} ${prefix}sound47
${icon2} ${prefix}sound48
${icon2} ${prefix}sound49
${icon2} ${prefix}sound50
${icon2} ${prefix}sound51
${icon2} ${prefix}sound52
${icon2} ${prefix}sound53
${icon2} ${prefix}sound54
${icon2} ${prefix}sound55
${icon2} ${prefix}sound56
${icon2} ${prefix}sound57
${icon2} ${prefix}sound58
${icon2} ${prefix}sound59
${icon2} ${prefix}sound60
${icon2} ${prefix}sound61
${icon2} ${prefix}sound62
${icon2} ${prefix}sound63
${icon2} ${prefix}sound64
${icon2} ${prefix}sound65
${icon2} ${prefix}sound66
${icon2} ${prefix}sound67
${icon2} ${prefix}sound68
${icon2} ${prefix}sound69
${icon2} ${prefix}sound70
${icon2} ${prefix}sound71
${icon2} ${prefix}sound72
${icon2} ${prefix}sound73
${icon2} ${prefix}sound74`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'ocrmenu':

				menu =
					`*「 OCR MENU 」*

${icon2} ${prefix}ninjaname _Name_
${icon2} ${prefix}stylishcoolname
${icon2} ${prefix}ssweb _URL_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'convertmenu':

				menu =
					`*「 CONVERT MENU 」*

${icon2} ${prefix}cutesound _reply audio/vn_
${icon2} ${prefix}blub _reply audio/vn_
${icon2} ${prefix}ghost _reply audio/vn_
${icon2} ${prefix}squirrel _reply audio/vn_
${icon2} ${prefix}slow _reply audio/vn_
${icon2} ${prefix}fast _reply audio/vn_
${icon2} ${prefix}vibra _reply audio/vn_
${icon2} ${prefix}nightcore _reply audio/vn_
${icon2} ${prefix}bass _reply audio/vn_
${icon2} ${prefix}robot _reply audio/vn_
${icon2} ${prefix}reverse _reply audio/vn_
${icon2} ${prefix}fat _reply audio/vn_
${icon2} ${prefix}vnsec _reply audio with number_
${icon2} ${prefix}vidsec _reply video with number_
${icon2} ${prefix}tomp3 _reply video_
${icon2} ${prefix}toimg _reply sticker_
${icon2} ${prefix}tourl _reply image/vid_
${icon2} ${prefix}tts _code text_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'searchmenu':

				menu =
					`*「 SEARCH MENU 」*

${icon2} ${prefix}playstore _Query_
${icon2} ${prefix}ytsearch _Query_
${icon2} ${prefix}pinterest _Query_
${icon2} ${prefix}googleimg _Query_
${icon2} ${prefix}google _Query_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'apkmenu':

				menu =
					`*「 APK MENU 」*

${icon2} ${prefix}apkdone _Apk Name_
${icon2} ${prefix}apkgoogle _Apk Name_
${icon2} ${prefix}hostapk _Apk Name_
${icon2} ${prefix}revdl _Apk Name_
${icon2} ${prefix}toraccino _Apk Name_
${icon2} ${prefix}uapkpro _Apk Name_
${icon2} ${prefix}apkmody _Apk Name_
${icon2} ${prefix}apkshub _Apk Name_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'othermenu':

				menu =
					`*「 OTHER MENU 」*

${icon2} ${prefix}runtime
${icon2} ${prefix}speed
${icon2} ${prefix}rentbot
${icon2} ${prefix}payment
${icon2} ${prefix}owner
${icon2} ${prefix}developer
${icon2} ${prefix}script
${icon2} ${prefix}delete _Reply to bot messages_`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break
			case 'ownermenu':

				menu =
					`*「 OWNER MENU 」*

${icon2} ${prefix}spam _text|amount_
${icon2} ${prefix}tospam _reply with amount_
${icon2} ${prefix}bc _text_
${icon2} ${prefix}bc2 _text_
${icon2} ${prefix}bcgc _text_
${icon2} ${prefix}setbotname _text_
${icon2} ${prefix}setbotbio _text_
${icon2} ${prefix}setbotpp _Reply Image_
${icon2} ${prefix}autoread _On / Off_
${icon2} ${prefix}autotype _On / Off_
${icon2} ${prefix}autorecord _On / Off_
${icon2} ${prefix}addvn _Reply audio with caption_
${icon2} ${prefix}delvn _vn name_
${icon2} ${prefix}listvn
${icon2} ${prefix}addsticker _Reply sticker with caption_
${icon2} ${prefix}delsticker _sticker name_
${icon2} ${prefix}liststicker
${icon2} ${prefix}addimage _Reply image with caption_
${icon2} ${prefix}delimage_image name_
${icon2} ${prefix}listimage
${icon2} ${prefix}clearall
${icon2} ${prefix}leaveall
${icon2} ${prefix}public
${icon2} ${prefix}self`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
				break

			//══════════[ RENT DLL ]══════════//

			case 'rentbot':
				menu =
					`*${ucapanWaktu} @${senderr.split('@')[0]}*

\`\`\`OPEN FOR RENT :\`\`\`
➪ *1 Week :* _100INR_
➪ *1 Month :* _200INR_
➪ *Permanent :* _550INR_

\`\`\`OPEN FOR STUDENTS :\`\`\`
➪ *Ordinary student :* _500INR_
➪ *Premium student :* _1000INR_

\`\`\`OPEN FOR SC :\`\`\`
➪ *Wanna buy this script? :* _Price: ₹250 (India)_

For those who want to buy script or interested in any of the above
Can request, if interested please contact the developer`
				WAapi.sendMessage(from, { contentText: `${menu}`, footerText: `*_${myTimezone} - ${time}_*`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'PAYMENT 💸' }, type: 1 }, { buttonId: `${prefix}developer`, buttonText: { displayText: 'DEVELOPER 👨🏼‍💻' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: { mentionedJid: [senderr] } } }, 'buttonsMessage')
				break
			case 'bayar':
			case 'payment':

				gambar = fs.readFileSync('./media/doged.jpg')
				menunya = `*「 PAYMENT 」*

• Note: Talk to the owner before payment
• FamPay : _Please scan the qr above_`
				but = [
					{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 🗃️' }, type: 1 },
					{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }
				]
				sendButImage(from, menunya, `*_${myTimezone} - ${time}_*`, gambar, but)
				break

			//══════════[ DOWNLOAD FEATURES ]══════════//
			/*Help case ?
			give credit too / add in at tqtq
			--> Xeon*/

			case 'mediafire':
				if (args.length < 1) return reply('Where is the link? ')
				if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
				reply(mess.wait)
				teks = args.join(' ')
				res = await mediafireDl(teks)
				result = `Media Fire Downloader

Name : ${res[0].nama}
Size : ${res[0].size}
Link : ${res[0].link}

Please Choose Whether Document, Audio or Video Below`
				sendButMessage(from, result, `*Doge Bot*`, [
					{
						buttonId: `${prefix}fire ${teks}`,
						buttonText: {
							displayText: `🖨️ Document/Other`,
						},
						type: 1,
					},
					{
						buttonId: `${prefix}fire1 ${teks}`,
						buttonText: {
							displayText: `🖨️ Video`,
						},
						type: 1,
					},
					{
						buttonId: `${prefix}fire2 ${teks}`,
						buttonText: {
							displayText: `🖨️ Audio`,
						},
						type: 1,
					},
				]);
				break;
			case 'fire':
				if (args.length < 1) return reply('Where is the link? ')
				if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
				teks = args.join(' ')
				res = await mediafireDl(teks)
				result = `In process...`
				reply(result)
				sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: mek })
				break
			case 'fire1':
				if (args.length < 1) return reply('Where is the link? ')
				if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
				teks = args.join(' ')
				res = await mediafireDl(teks)
				result = `In process...`
				reply(result)
				sendFileFromUrl(res[0].link, video, { quoted: mek, mimetype: 'video/mp4', filename: res[0].output })
				break
			case 'fire2':
				if (args.length < 1) return reply('Where is the link? ')
				if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
				teks = args.join(' ')
				res = await mediafireDl(teks)
				result = `Media Fire Downloader
  Wait for the Process of Sending Media......`
				reply(result)
				sendFileFromUrl(res[0].link, audio, { quoted: mek, mimetype: 'video/mp3', filename: res[0].output })
				break
			case 'spotify': {
				if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
				url = args[0]
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
				get_result = get_result.result
				ini_txt = `Title : ${get_result.title}\n`
				ini_txt += `Artists : ${get_result.artists}\n`
				ini_txt += `Duration : ${get_result.duration}\n`
				ini_txt += `Popularity : ${get_result.popularity}\n`
				ini_txt += `Preview : ${get_result.preview_url}\n`
				thumbnail = await getBuffer(get_result.thumbnail)
				await WAapi.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
				get_audio = await getBuffer(get_result.link)
				await WAapi.sendMessage(from, get_audio, audio, { mimetype: 'audio/mpeg', filename: `${get_result.title}.mp3`, quoted: mek })
			}
				break
			case 'soundcloud':
				if (!q) return reply(`Example : ${prefix + command} sound cloud link`)
				if (!q.includes('m.soundcloud.com')) return reply('Thats not a SoundCloud link')
				await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
					let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
					txt += `*• Title :* ${data.title}\n`
					txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
					txt += `*• Size :* ${data.medias[0].formattedSize}\n`
					txt += `*• Url  :* ${data.url}\n\n`
					txt += `*Please wait a moment, in the process of delivery...*`
					sendFileFromUrl(from, data.thumbnail, txt, mek)
					WAapi.sendMessage(from, await getBuffer(data.medias[0].url), audio, { quoted: mek, mimetype: 'audio/mp4' })
				})
				break
			case 'telesticker': case 'telegramsticker': case 'tstiker': {
				if (!q) return reply(`Example: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
				if (!q.includes('t.me')) return reply('This is not a telegram sticker link')
				var telestc = await zee.Telesticker(`${q}`)
				await reply(mess.wait)
				for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
					WAapi.sendMessage(from, await getBuffer(telestc[i].url), sticker, { mimetype: 'image/webp', quoted: mek })
				}
			}
				break
			case 'tiktoknowm':
			case 'tiktok':
				if (!q) return reply('The link?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
				reply(mess.wait)
				let nowem = q
				zee.Ttdownloader(nowem)
					.then(result => {
						const { wm, nowm, audio } = result
						axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
							.then(async (a) => {
								me = `*Link* : ${a.data}`
								noweem = await getBuffer(nowm)
								WAapi.sendMessage(from, noweem, MessageType.video, { mimetype: 'video/mp4', quoted: mek })
							})
					}).catch((err) => reply(`Invalid link`))

				break
			case 'tiktokwm':
				if (!q) return reply('The link?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
				reply(mess.wait)
				let wem = args.join(' ')
				zee.Ttdownloader(wem)
					.then(result => {
						const { wm, nowm, audio } = result
						axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
							.then(async (a) => {
								me = `*Link* : ${a.data}`
								weem = await getBuffer(wm)
								WAapi.sendMessage(from, weem, MessageType.video, { mimetype: 'video/mp4', quoted: mek })
							})
					}).catch((err) => reply(`Invalid link`))

				break
			case 'tiktokmusic':
			case 'tiktokaudio':
			case 'tiktokmp3':
				if (!q) return reply('The link?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
				reply(mess.wait)
				let audi = q
				zee.Ttdownloader(audi)
					.then(result => {
						const { wm, nowm, audio } = result
						axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
							.then(async (a) => {
								audnha = await getBuffer(audio)
								WAapi.sendMessage(from, audnha, MessageType.document, { mimetype: 'audio/mp4', filename: `Tiktok Music.mp3`, quoted: mek })
							})
					}).catch((err) => reply(`Invalid link`))

				break
			case 'ig':
			case 'igdl':
			case 'instagram':
				if (!c) return reply('The link?')
				var { igDownloader } = require('./lib/igdown')
				res = await igDownloader(`${c}`).catch(e => {
					reply(mess.error.api)
				})
				console.log(res)
				sendMediaURL(from, `${res.result.link}`, `${res.result.desc}`)
				break
			case 'lyrics':
				reply(mess.wait)
				if (args.length < 1) return reply('What is the name of the song?')
				teks = body.slice(7)
				lirikLagu(teks).then((res) => {
					let lirik = `${res[0].result}`
					reply(lirik)
				})
				break
			case 'herolist':
				await herolist().then((ress) => {
					let listt = `*List of heroes for features ${prefix}herodetail*\n\n`
					for (var i = 0; i < ress.hero.length; i++) {
						listt += '-  ' + ress.hero[i] + '\n'
					}
					reply(listt)
				})
				break
			case 'herodetail':
				res = await herodetails(body.slice(12))
				her = `*Hero Details ${body.slice(12)}*

*Name* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Hero Features* : ${res.hero_feature}
*Special* : ${res.speciality}
*Recommended Lane* : ${res.laning_recommendation}
*Price* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Release* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
				reply(her)
				break
			case 'play':
				if (args.length == 0) return reply('Whats the title of the song?')
				bo = args.join(" ")
				reply(mess.wait)
				ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=KingOfBear`)
				thmb = await getBuffer(ini.thumb)
				ply1 = `*Title:* ${ini.title}\n*Channel:* ${ini.channel}\n*View:* ${ini.views}\n*Publish Time:* ${ini.published}`
				ply2 = `Please Select Media Below`
				but = [
					{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: 'MUSIC 🎵' }, type: 1 },
					{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'VIDEO 📽️' }, type: 1 }
				]
				sendButLocation(from, ply1, ply2, thmb, but)
				break
			case 'mp4':
				reply(mess.wait)
				bo = args.join(" ")
				ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=${KingOfBearKey}`)
				mp4 = await getBuffer(ini.url)
				WAapi.sendMessage(from, mp4, video, { quoted: mek, caption: `Here is your video🐶` })
				break
			case 'mp3':
				reply(mess.wait)
				bo = args.join(" ")
				ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=${KingOfBearKey}`)
				mp3 = await getBuffer(ini.url)
				WAapi.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
				break
			case 'ytmp3':

				if (args.length < 1) return reply("Where is the link?")
				url = args.join(' ')
				anump3 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
				ytmp3 = await getBuffer(anump3.result.url)
				reply(`_Audio is being processed, please wait a while longer_`)
				WAapi.sendMessage(from, ytmp3, audio, { mimetype: "audio/mp4", quoted: mek })
				break
			case 'ytmp4':

				if (args.length < 1) return reply("Where is the link?")
				url = args.join(' ')
				anump4 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
				ytmp4 = await getBuffer(anump4.result.url)
				reply(`_The video is being processed, please wait a few more moments_`)
				WAapi.sendMessage(from, ytmp4, video, { caption: `Done✓`, thumbnail: Buffer.alloc(0), quoted: mek })
				break

			//══════════[ INTAKE FEATURES ]══════════//
			/*Help case ?
			just give credit / add in tqtq
			--> Xeon*/

			case 'asupan':
			case 'asupanloli':
			case 'bocil':
			case 'rikagusriani':
			case 'santuy':
			case 'ukhty':
			case 'gheayubi':
			case 'nantalia':

				reply(mess.wait)
				buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
				Teks = `Click Next To Go To Next ${command} `
				sendButVideo(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break
			case 'hijaber':

				reply(mess.wait)
				buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
				Teks = `Click Next To Go to Next ${command}`
				sendButImage(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break

			//══════════[ RANDOM GIRL FEATURES ]══════════//
			/*Help case ?
			just give credit / add in tqtq
			--> Xeon*/

			case 'cecan':
			case 'cogan':
			case 'cecan2':
			case 'cogan2':
			case 'jeni':
			case 'jiso':
			case 'justina':
			case 'lisa':
			case 'rose':
			case 'ryujin':
			case 'indonesia':
			case 'vietnam':
			case 'thailand':
			case 'korea':
			case 'china':
			case 'japan':
			case 'malaysia':

				reply(mess.wait)
				buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
				Teks = `Click Next To Go To Next ${command}`
				sendButImage(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break

			//══════════[ RANDOM TEXT ]══════════//
			/*Help case ?
			just give credit / add in tqtq
			--> Xeon*/

			case 'pantun2':
			case 'puisi':
			case 'faktaunik':
			case 'katabijak':
			case 'katailham':
			case 'katasindiran':
			case 'katabucin':
			case 'katabucin2':
			case 'kataml':
			case 'katagalau':
			case 'katagombal':
			case 'quotesislami':
			case 'quotesanime':
			case 'quotesdilan':
			case 'quotesff':
			case 'quotespubg':
			case 'quoteshacker':

				oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=${dhakey}`)
				dhani = (oke.result)
				sendButMessage(from, dhani, `Click To Go To Next ${command}`, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},]);
				break;
			case 'quotes':

				anuquotes = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=${dhakey}`)
				dhani = (anuquotes.result.quotes)
				sendButMessage(from, dhani, `Click To Go To The Next Quotes`, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},]);
				break;
			case 'quoteskanye':

				anuq = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes/kanye?apikey=${dhakey}`)
				dhani = (anuq.result.text_id)
				sendButMessage(from, dhani, `Click To Go To The Next Quotes`, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},]);
				break;

			//══════════[ RANDOM IMAGE FEATURES ]══════════//
			/*Help case ?
			just give credit / add in tqtq
			--> Xeon*/

			case 'bts':
			case 'exo':
				reply(mess.wait)
				getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
					WAapi.sendMessage(from, gambar, image, { quoted: mek })
				})
				break
			case 'fox':
				anufox = await fetchJson(`https://some-random-api.ml/img/fox`)
				anu1 = await getBuffer(anufox.link)
				WAapi.sendMessage(from, anu1, image, { caption: `Here you go!`, quoted: mek })
				break
			case 'dog':
				anudog = await fetchJson(`https://some-random-api.ml/img/dog`)
				anu1 = await getBuffer(anudog.link)
				WAapi.sendMessage(from, anu1, image, { caption: `Here you go!`, quoted: mek })
				break
			case 'cat':
				anucat = await fetchJson(`https://some-random-api.ml/img/cat`)
				anu1 = await getBuffer(anucat.link)
				WAapi.sendMessage(from, anu1, image, { caption: `Here you go!`, quoted: mek })
				break
			case 'panda':
				anupanda = await fetchJson(`https://some-random-api.ml/img/panda`)
				anu1 = await getBuffer(anupanda.link)
				WAapi.sendMessage(from, anu1, image, { caption: `Here you go!`, quoted: mek })
				break
			case 'panda1':
				anupandao = await fetchJson(`https://some-random-api.ml/img/red_panda`)
				anu1 = await getBuffer(anupandao.link)
				WAapi.sendMessage(from, anu1, image, { caption: `Here you go!`, quoted: mek })
				break
			case 'bird':
				anubird = await fetchJson(`https://some-random-api.ml/img/birb`)
				anu1 = await getBuffer(anubird.link)
				WAapi.sendMessage(from, anu1, image, { caption: `Here you go!`, quoted: mek })
				break
			case 'koala':
				anukoala = await fetchJson(`https://some-random-api.ml/img/koala`)
				anu1 = await getBuffer(anukoala.link)
				WAapi.sendMessage(from, anu1, image, { caption: `Here you go!`, quoted: mek })
				break
			case 'ppcp':
			case 'ppcouple':

				anucpp = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=${dhakey}`)
				cowo = await getBuffer(anucpp.result.male)
				Cowok = `_This is the boy_`
				sendButImage(from, Cowok, `*_${myTimezone} - ${time}_*`, cowo, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				cewe = await getBuffer(anu.result.female)
				Cewek = `_This is the girl_`
				sendButImage(from, Cewek, `*_${myTimezone} - ${time}_*`, cewe, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break
			case 'meme':

				reply(mess.wait)
				anumeme = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/meme?apikey=${dhakey}`)
				buffer = await getBuffer(anumeme.result.url)
				Teks = `Click Next To Go The Next ${command}`
				sendButImage(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break
			case 'wallpaperhacker':
			case 'wallpaperhacker2':
			case 'wallpaperharley':
			case 'wallpaperjoker':
			case 'wallpaperpubg':
			case 'wallpaperhp':
			case 'wallpaperhp2':
			case 'wallpaperkpop':
			case 'wallpaperblackpink':
			case 'wallpapergame':

				reply(mess.wait)
				buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
				Teks = `Click Next To Go To The Next ${command}`
				sendButImage(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break
			case 'quotesimage':
			case 'katakataimage':
			case 'renungan':
			case 'memeindo':
			case 'aesthetic':
			case 'yulibocil':
			case 'doraemon':
			case 'pokemon':
			case 'pentol':
			case 'tatasurya':
			case 'kartun':
			case 'anjing':
			case 'kucing':
			case 'satanic':
			case 'boneka':
			case 'mobil':
			case 'motor':

				reply(mess.wait)
				buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
				Teks = `Click Next To Go To Next ${command}`
				sendButImage(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break
			case 'darkjoker':
			case 'darkjokes':
			case 'darkjokesindo':
			case 'darkjokers':

				reply(mess.wait)
				buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/darkjokes?apikey=${dhakey}`)
				Teks = `Click Next To Go To Next ${command}`
				sendButImage(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break

			case "anibatch":
			case "gogoanime":
			case "anime-planet":
				reply(mess.wait)
				if (args.length == 0) return reply('What are you searching?')
				animename = args.join(" ")

				animeResponse = await fetchJson(`https://violetics.pw/api/anime/${command}?apikey=${viokey}&manga=${encodeURIComponent(animename)}`)
				animeList = animeResponse.result
				animeReply = ``
				
				for (let i of animeList) {
					if (i.name) animeReply += `*Name* : ${i.name}\n`
					if (i.title) animeReply += `*Title* : ${i.title}\n`;
					if (i.url) animeReply += `*Link* : ${i.url}\n`;
					if (i.rate) animeReply += `*Rating* : ${i.rate}`;
					if (i.released) animeReply += `*Release Date* : ${i.released}`;
					animeList += `\n`
				}
				reply(animeReply)
				break
	
			//══════════[ RANDOM VIDEO ]══════════//

			case 'beatvn':
			case 'jedagjedugff':
			case 'jedagjedugml':
			case 'jedagjedugpubg':
			case 'storyanime':
			case 'storywa':
			case 'storygalau':
			case 'storytruk':
			case 'storybus':

				reply(mess.wait)
				buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=${dhakey}`)
				Teks = `Click Next To Go To Next ${command}`
				sendButVideo(from, Teks, `*_${myTimezone} - ${time}_*`, buffer, [
					{
						buttonId: `${prefix + command}`,
						buttonText: {
							displayText: `NEXT ➡️`,
						},
						type: 1,
					},
				]);
				break

			//══════════[ MAKER FEATURES ]══════════//
			/*Help case ?
			just give credit / add in tqtq
			--> Xeon*/

			//----> 1 TEXT <----//
			case 'goldplaybutton':
			case 'silverplaybutton':
			case 'freefire':
				if (args.length == 0) return reply(`Example: ${prefix + command} Xeon`)
				ini_txt = args.join(" ")
				getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
					WAapi.sendMessage(from, gambar, image, { thumbnail: Buffer.alloc(0), caption: `Here you go!`, quoted: mek })
				})
				break
			case 'blackpink':
			case 'halloween':
			case 'halloween2':
			case '3dgradient':
			case 'naturalleaves':
			case 'dropwater':
			case 'blood':
			case 'blood2':
			case 'snow':
			case 'cloud':
			case 'neondevil':
			case 'neon':
			case 'glowingneonlight':
			case 'neonlight':
			case 'neonlight2':
			case 'neonlight3':
			case 'greenneon':
			case 'toxic':
			case 'matrix':
			case 'thunder':
			case 'thunder2':
			case 'bokeh':
			case 'carbontext':
			case 'christmas':
			case 'breakwall':
			case 'roadwarning':
			case 'engraved3d':
			case 'embossed':
			case '3dstone':
			case 'futuristic':
			case 'sketch':
			case 'bluecircuit':
			case 'space':
			case 'magmahot':
			case 'artpapercut':
			case '3dluxurygold':
			case 'robotr2d2':
			case 'harrypotter':
			case 'glitch3':
			case 'greenhorror':
			case 'horrorgift':
			case 'hotmetal':
			case 'erodedmetal':
			case '3dglowingmetal':
			case 'blackmetal':
			case 'bluemetal':
			case 'shynimetal':
			case 'rustymetal':
			case 'metalpurple':
			case 'metalrainbow':
			case 'metaldarkgold':
			case 'colorfullluxurymetal':
			case 'glossybluemetal':
			case '3dglossymetal':
			case 'metallic':
			case 'glossymetallic':
			case 'christmastree':
			case 'sparklesmerrychristmas':
			case 'countryflag3d':
			case 'americanflag3d':
			case '3dscfi':
			case '3drainbow':
			case '3dwaterpipe':
			case '3dchrome':
			case 'bluegem':
			case 'purplegem':
			case 'pinkcandy':
			case 'transformer':
			case 'berry':
			case 'brokenglass':
			case '3drealistic':
			case '3dunderwater':
			case 'writeinsandsummerbeach':
			case 'sandwriting':
			case 'foilballoon':
			case '3dglue':
			case '1917':
			case 'minion':
			case 'doubleexposure':
			case 'holographic3d':
			case 'deluxegold':
			case 'deluxesilver':
			case 'glossycarbon':
			case 'fabric':
			case 'xmascards3d':
			case 'wicker':
			case 'fireworksparkle':
			case 'skeleton':
			case 'ultragloss':
			case 'denim':
			case 'decorategreen':
			case 'peridot':
			case 'rock':
			case 'lava':
			case 'rainbowequalizer':
			case 'purpleglass':
			case 'decorativeglass':
			case 'chocolatecake':
			case 'strawberry':
			case 'koifish':
			case 'bread':
			case '3dbox':
			case 'freeadvancedglow':
			case 'honey':
			case 'marble':
			case 'marbleslabs':
			case 'icecold':
			case 'fruitjuice':
			case 'abstragold':
			case 'biscuit':
			case 'bagel':
			case 'wood':
			case 'hexagolden':
			case '3ddeepseametal':
			case 'leddisplayscreen':
			case 'wonderfulgraffitiart':

				if (args.length < 1) return reply(`*Where is the text?*\n_Example : ${prefix + command} your name_`)
				teks = args.join(" ")
				reply(mess.wait)
				anuapidhani = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
				oke = await getBuffer(anuapidhani.result)
				WAapi.sendMessage(from, oke, image, { quoted: mek, caption: 'Here u go!😛' })
				break
			case 'hartatahta':

				if (args.length < 1) return reply(`*Wher is the text?*\n_Example : ${prefix + command} your name_`)
				teks = args.join(" ")
				reply(mess.wait)
				harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
				WAapi.sendMessage(from, harta, image, { quoted: mek, caption: 'Here u go!😛' })
				break

			//----> 2 TEXT <----//

			case '8bit':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(5)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anubit = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anubit.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'pornhub':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(8)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anuphub = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anuphub.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'glitch':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(7)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anuglitch = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anuglitch.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'glitch2':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(8)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anug2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anug2.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'layered':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(8)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anulayered = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anulayered.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case '3dsteel':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(8)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anu3dstl = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anu3dstl.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'realistic':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(10)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anurlstc = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anurlstc.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'lionlogo':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(9)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anullo = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anullo.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'ninjalogo':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(10)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anunlogo = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anunlogo.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'wolf':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(5)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anuwolf = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anuwolf.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'wolf2':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(6)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anuw2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anuw2.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'halloween3':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(11)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anuh3 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anuh3.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'marvel':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(7)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anumvl = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anumvl.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'marvel2':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(8)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anumvl2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anumvl2.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'cinematichorror':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(16)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anucmcr = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anucmcr.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'avengers':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(8)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anuavgr = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anuavgr.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'graffiti3':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(10)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anugrf3 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anugrf3.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'captainamerica':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(15)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				anucaptainca = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
				pornhub = await getBuffer(anucaptainca.result)
				WAapi.sendMessage(from, pornhub, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'girlneko':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(9)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
				WAapi.sendMessage(from, girlneko, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'sadboy':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(7)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				girlneko2 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
				WAapi.sendMessage(from, girlneko2, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'makerkaneki':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(12)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				girlneko8383 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
				WAapi.sendMessage(from, girlneko8383, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'rem':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(4)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				girlneko11111 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
				WAapi.sendMessage(from, girlneko11111, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'lolimaker':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(9)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				girlnekojkjk = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
				WAapi.sendMessage(from, girlnekojkjk, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'gura':

				if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
				var F = body.slice(5)
				var F1 = F.split("&")[0];
				var F2 = F.split("&")[1];
				reply(mess.wait)
				girlnekoooo = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
				WAapi.sendMessage(from, girlnekoooo, image, { caption: `Here u go!😛`, quoted: mek })
				break
			case 'wolf3':

				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
				F = body.slice(6)
				reply(mess.wait)
				anuwolf3 = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
				WAapi.sendMessage(from, anuwolf3, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it?`, quoted: mek })
				break
			case 't3d':

				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
				F = body.slice(5)
				reply(mess.wait)
				anut3d = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
				WAapi.sendMessage(from, anut3d, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it? `, quoted: mek })
				break
			case 'logoa':

				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
				var F = body.slice(7)
				var F1 = F.split("|")[0];
				var F2 = F.split("|")[1];
				reply(mess.wait)
				anulogoa = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
				WAapi.sendMessage(from, anulogoa, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it? `, quoted: mek })
				break
			case 'phlogo':

				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
				var F = body.slice(9)
				var F1 = F.split("|")[0];
				var F2 = F.split("|")[1];
				reply(mess.wait)
				anuphlogo = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
				WAapi.sendMessage(from, anuphlogo, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it? `, quoted: mek })
				break
			case 'marvel3':

				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
				var F = body.slice(8)
				var F1 = F.split("|")[0];
				var F2 = F.split("|")[1];
				reply(mess.wait)
				anumrvl3 = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
				WAapi.sendMessage(from, anumrvl3, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it? `, quoted: mek })
				break
			case 'leavest':
				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
				F = body.slice(9)
				reply(mess.wait)
				anulvst = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
				WAapi.sendMessage(from, anulvst, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it? `, quoted: mek })
				break
			case 'notewrite':
				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
				F = body.slice(7)
				reply(mess.wait)
				anunw = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
				WAapi.sendMessage(from, anunw, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it? `, quoted: mek })
				break
			case 'neon2':
				if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
				F = body.slice(7)
				reply(mess.wait)
				anunion2 = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
				WAapi.sendMessage(from, anunion2, image, { thumbnail: Buffer.alloc(0), caption: `OK it's done\n\nHow is it? `, quoted: mek })
				break

			//══════════[ OTHER FEATURES ]══════════//
			case 'owner':

				members_ids = []
				for (let mem of groupMembers) {
					members_ids.push(mem.jid)
				}
				vcard2 = 'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n'
					+ `FN:${ownername}\n`
					+ `ORG: Owner Of Doge Bot ;\n`
					+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
					+ 'END:VCARD'.trim()
				WAapi.sendMessage(from, { displayName: `The owner ${botname}`, vcard: vcard2 }, contact,
					{
						quoted: fgi,
					})
				reply(`_The above contact is my owner 🐶🦄_`)
				break
			case 'developer':

				members_ids = []
				for (let mem of groupMembers) {
					members_ids.push(mem.jid)
				}
				vcard2 = 'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n'
					+ `FN:${developerName}\n`
					+ `ORG: Developer Of Doge Bot ;\n`
					+ `TEL;type=CELL;type=VOICE;waid=${developerNo}:${developerNo}\n`
					+ 'END:VCARD'.trim()
				WAapi.sendMessage(from, { displayName: `The owner ${botname}`, vcard: vcard2 }, contact,
					{
						quoted: fgi,
					})
				const devsound = fs.readFileSync('./media/botdev.mp3')
				WAapi.sendMessage(from, devsound, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
				break
			case 'sc':
			case 'script':
			case 'sourcode':

				scpic = fs.readFileSync('./media/scpic.jpg')
				scsell = `*🐶𝗗𝗼𝗴𝗲 𝗕𝗼𝘁 𝗩𝟯 𝗦𝗰𝗿𝗶𝗽𝘁🐶*\n\n_• 𝒀𝒐𝒖𝑻𝒖𝒃𝒆: https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A_\n_• 𝑮𝒊𝒕𝑯𝒖𝒃: https://github.com/DGXeon/DogeBot3_\n\n_𝙄𝙛 𝙮𝙤𝙪 𝙬𝙞𝙨𝙝 𝙩𝙤 𝙗𝙪𝙮 𝙪𝙣𝙚𝙣𝙘𝙧𝙮𝙥𝙩𝙚𝙙 𝙨𝙘𝙧𝙞𝙥𝙩 𝙘𝙡𝙞𝙘𝙠 𝙤𝙣 𝙩𝙝𝙚 𝙗𝙪𝙮 𝙨𝙘𝙧𝙞𝙥𝙩 𝙗𝙪𝙩𝙩𝙤𝙣 𝙗𝙚𝙡𝙤𝙬._`
				but = [
					{ buttonId: `${prefix}rentbot`, buttonText: { displayText: 'BUY SCRIPT 💵' }, type: 1 },
					{ buttonId: `${prefix}developer`, buttonText: { displayText: 'DEVELOPER 👨🏼‍💻' }, type: 1 }
				]
				sendButImage(from, scsell, `*_${myTimezone} - ${time}_*`, scpic, but)
				break
			case 'runtime':

				textImg(`Bot Active Since ${runtime(process.uptime())}`)
				break
			case 'ping':
			case 'speed':

				timestampe = speed();
				latensie = speed() - timestampe
				textImg(`「 *𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧* 」\nRespond in ${latensie.toFixed(4)} Sec 💬`)
				break
			case 'd':
			case 'del':
			case 'delete':

				WAapi.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break

			//══════════[ SEARCH FEATURES ]══════════//

			case 'playstore':
				if (!c) return reply('what are you looking for?')
				let play = await hx.playstore(`${c}`)
				let store = '❉─────────────────────❉\n'
				for (let i of play) {
					store += `\n*「 *PLAY lSTORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
				}
				reply(store)
				break
			case 'ytsearch':
				if (args.length < 1) return reply('Where is the text?')
				teks = args.join(' ')
				reply(mess.wait)
				res = await yts(`${teks}`)
				kant = ``
				for (let i of res.videos) {
					kant += (`❒「  YtSearch  」\n• Title : ${i.title}\n• Views : ${i.views}\n• Uploaded On : ${i.ago}\n• Duration : ${i.timestamp}\n• Channel : ${i.author.name}\n• Video Link : ${i.url}\n\n\n`)
				}
				var akhir = kant.trim()
				sendFileFromUrl(res.all[0].image, image, { quoted: mek, caption: akhir })
				break
			case 'pinterest':
				if (!c) return reply('what are you looking for?')
				pinterest(`${c}`).then(data => {
					const amsulah = data.result
					const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
					sendMediaURL(from, pimterest, `Pinterest : ${c}`)
				})
				break
			case 'google':
			case 'googlesearch':
			case 'ggs':
				if (args.length < 1) return reply('What are you looking for??')
				teks = args.join(' ')
				reply(mess.wait)
				res = await ggs({ 'query': `${teks}` })
				kant = ``
				for (let i of res) {
					kant += `*Title* : ${i.title}
*Link* : ${i.link}
*Description* : ${i.snippet}`
				}
				var akhir = kant.trim()
				reply(akhir)
				break
			case 'gimage':
			case 'googleimage':
			case 'googleimg':
				if (args.length < 1) return reply('What do you want to search?')
				reply(mess.wait)
				teks = args.join(' ')
				res = await googleImage(teks, google)
				function google(error, result) {
					if (error) { return reply('_[ ! ] Api Error Or Result Not Found_') }
					else {
						var gugIm = result
						var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
						sendFileFromUrl(random, image, { quoted: mek, caption: `*Search Result :* ${teks}` })
					}
				}
				break

			//══════════[ APK FEATURES ]══════════//

			case 'uapkpro':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Search for applications on the steamkpro.org platform and provide the result data 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `Tag : ${x.apps_tag}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'toraccino':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `Tag : ${x.apps_tag}\n`
					ini_txt += `Upload : ${x.apps_upload}\n`
					ini_txt += `Author : ${x.apps_author}\n`
					ini_txt += `Desc : ${x.apps_desc}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'revdl':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'hostapk':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Search for applications on the hostapk.com website and provide data from the search results 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `Released : ${x.apps_released}\n`
					ini_txt += `Author : ${x.apps_author}\n`
					ini_txt += `Desc : ${x.apps_desc}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'apkshub':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkshub.com platform and provide the result data 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `Views :${x.apps_views}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'apkmody':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkmody.io platform and provide the result data 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Desc :${x.apps_desc}\n`
					ini_txt += `Link : ${x.apps_linkdl}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'apkgoogle':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkgoogle.org platform and provide the result data 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `Tag : ${x.apps_tag}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'apkdone':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkdone.com website and provide data from the search results 」\n\n'
				for (var x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `Version : ${x.apps_version}\n`
					ini_txt += `Rate : ${x.apps_rate}\n`
					ini_txt += `Tag : ${x.apps_tag}\n\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break

			//══════════[ SOUND FEATURES ]══════════//
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
				ini_buffer = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
				await WAapi.sendMessage(from, ini_buffer, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
				break

			//══════════[ OCR FEATURES ]══════════//

			case 'ninjaname':
				if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)
				F = body.slice(11)
				anunname = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
				anu189 = `🐶 *NAME* : ${anunname.your_name}\n`
				anu000 = `🐶 *NINJA* : ${anu189.result}\n`
				reply(anu000)
				break
			case 'stylishcoolname':
				anuscn = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
				reply(`*🐶HERE IS YOUR RANDOM STYLISH NAME🐶*\n\n${anuscn.result}`)
				break
			case 'ssweb':
			case 'ss':
				if (args.length < 1) return reply('Where is the url?')
				teks = q
				anussweb = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
				buff = await getBuffer(anussweb.screenshot)
				WAapi.sendMessage(from, buff, image, { quoted: mek, caption: teks })
				break

			//══════════[ CONVERT FEATURES ]══════════//

			case 'squirrel':
				encmedia012 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WAapi.downloadAndSaveMediaMessage(encmedia012)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'blub':
				if (!isQuotedAudio) return reply('Reply audio ')
				encmediakekek = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WAapi.downloadAndSaveMediaMessage(encmediakekek)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'ghost':
				encmedia777 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WAapi.downloadAndSaveMediaMessage(encmedia777)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'cutesound':
				encmedia100 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WAapi.downloadAndSaveMediaMessage(encmedia100)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					riu = fs.readFileSync(ran)
					WAapi.sendMessage(from, riu, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'slowmo': case 'slow': {
				try {
					encmedia22 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await WAapi.downloadAndSaveMediaMessage(encmedia22)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						uhh = fs.readFileSync(ran)
						WAapi.sendMessage(from, uhh, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
				} catch (e) {
					reply('Error!')
				}
			}
				break
			case 'fast': {
				try {
					encmedia11 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await WAapi.downloadAndSaveMediaMessage(encmedia11)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
				} catch (e) {
					reply('Error!')
				}
			}
				break
			case 'vibra': case 'vibrato': {
				encmedia33 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WAapi.downloadAndSaveMediaMessage(encmedia33)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				})
			}
				break
			case 'nightcore':
				if (!isQuotedAudio) return reply('Reply Audionya')
				night = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				core = await WAapi.downloadAndSaveMediaMessage(night)
				ran = getRandom('.mp3')
				reply(mess.wait)
				exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(core)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: false, quoted: mek, ptt: true })
					fs.unlinkSync(ran)
				})
				break
			case 'vnsec':
				encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediam = await WAapi.downloadAndSaveMediaMessage(encmediam)
				cokmatane = Number(args[0])
				hah = fs.readFileSync(mediam)
				WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: mek })
				fs.unlinkSync(mediam)
				break
			case 'vidsec':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				median = await WAapi.downloadAndSaveMediaMessage(encmedian)
				cokmatane = Number(args[0])
				hah = fs.readFileSync(median)
				WAapi.sendMessage(from, hah, video, { mimetype: 'video/mp4', duration: cokmatane, quoted: mek })
				fs.unlinkSync(median)
				break
			case 'robot':
				encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				medial = await WAapi.downloadAndSaveMediaMessage(encmedial)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(medial)
					if (err) return reply(mess.error.api)
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'fat':
				encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediaz = await WAapi.downloadAndSaveMediaMessage(encmediaz)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediaz)
					if (err) return ephe('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'reverse':
				encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediau = await WAapi.downloadAndSaveMediaMessage(encmediau)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediau)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'bass':
				encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediao = await WAapi.downloadAndSaveMediaMessage(encmediao)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediao)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WAapi.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'tomp3':
				WAapi.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('Reply to the video')
				reply(mess.wait)
				encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediad = await WAapi.downloadAndSaveMediaMessage(encmediad)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
					fs.unlinkSync(mediad)
					if (err) return reply(mess.error.api)
					mhee = fs.readFileSync(ran)
					WAapi.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				})
				break
			case 'toimg':

				if (!isQuotedSticker) return reply('reply sticker')
				encmediatoimg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WAapi.downloadAndSaveMediaMessage(encmediatoimg)
				ran = getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Failed, when converting sticker to image')
					buffer = fs.readFileSync(ran)
					WAapi.sendMessage(from, buffer, image, { quoted: mek, caption: 'Here' })
					fs.unlinkSync(ran)
				})
				break
			case 'tts':
				try {
					if (args.length > 1) {
						const gtts = require('./lib/gtts')(args[0])
						if (args.length < 2) return WAapi.sendMessage(from, 'Where is the text bro??', text, { quoted: mek })
						ngab = budy.slice(7)
						ranm = getRandom('.mp3')
						rano = getRandom('.ogg')
						ngab.length > 600
							? reply('The text is too much bro, max words 600')
							: gtts.save(ranm, ngab, function () {
								exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
									fs.unlinkSync(ranm)
									buff = fs.readFileSync(rano)
									if (err) return reply('Failed bro:(')
									WAapi.sendMessage(from, buff, audio, { quoted: mek, ptt: true })
									fs.unlinkSync(rano)
								})
							})
					} else if (args.length === 1) {
						ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						const gtts = require('./lib/gtts')(args[0])
						ranm = getRandom('.mp3')
						rano = getRandom('.ogg')
						gtts.save(ranm, ngab, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(mess.error.api)
								WAapi.sendMessage(from, buff, audio, { quoted: mek, ptt: true })
								fs.unlinkSync(rano)
							})
						})
					}
				} catch (e) {
					reply(mess.error.api)
				}
				break
			case 'tourl':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo) && args.length == 0) {
					boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					owgi = await WAapi.downloadMediaMessage(boij)
					res = await upload(owgi)
					reply(res)
				} else {
					reply('send/reply pictures/videos')
				}
				break

			//══════════[ LEVELING FEATURES ]══════════//

			case 'level':
				if (!isGroup) return reply(mess.group)
				const userLevel = getLevelingLevel(sender)
				const userXp = getLevelingXp(sender)
				if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
				const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
				resul = `◪ *ʟᴇᴠᴇʟ*\n  ├─ ► 𝗡𝗮𝗺𝗲 : ${pushname}\n  ├─ ► 𝗥𝗮𝗻𝗸 : ${role}\n  ├─ ► 𝗫𝗣 : ${userXp}/${requiredXp}\n  └─ ► 𝗟𝗲𝘃𝗲𝗹 : ${userLevel}\n`
				WAapi.sendMessage(from, resul, text, { quoted: mek })
					.catch(async (err) => {
						console.error(err)
						await reply(`Error!\n${err}`)
					})
				break
			case 'profile':
				if (!isGroup) return reply(mess.group)
				let anuprofileoke = await WAapi.groupMetadata(from)
				const thu = await WAapi.getStatus(anuprofileoke.participants[0], MessageType.text)
				WAapi.updatePresence(from, Presence.composing)
				try {
					ppimg = await WAapi.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				profile = `╭─「 *💖ʏᴏᴜʀ ᴘʀᴏꜰɪʟᴇ💖* 」\n│• 𝗡𝗮𝗺𝗲 : ${pushname}\n│• 𝗡𝘂𝗺𝗯𝗲𝗿 : ${sender.split("@")[0]}\n│• 𝗕𝗶𝗼 : ${bio_user}\n│• 𝗫𝗣 : ${getLevelingXp(sender)}\n│• 𝗟𝗲𝘃𝗲𝗹 : ${getLevelingLevel(sender)}\n│• 𝗥𝗮𝗻𝗸 : ${role}\n│• 𝗣𝗠 : wa.me/${sender.split("@")[0]}\n╰──────────────────`
				buffer = await getBuffer(ppimg)
				WAapi.sendMessage(from, buffer, image, { quoted: mek, caption: profile })
				break

			//══════════[ STICKER FEATURES ]══════════//

			case 'ttp4':
			case 'ttp2':
			case 'ttp3':
			case 'ttp':
			case 'attp':

				if (!c) return reply(`Where is the text bro?\nExample :\n${prefix}attp DogeBot`)
				atetepe12 = await getBuffer(`https://violetics.pw/api/canvas/attp?apikey=${viokey}&text=${encodeURIComponent(c)}`)
				if (!atetepe12) return reply("There's an error.");
				WAapi.sendMessage(from, atetepe12, sticker, { quoted: mek })
				break
			case 'memegenerator': case 'memegen': {
				if (args.length < 1) return reply(`Reply to sticker with up and down text for example *${prefix + command}* top text|bottom text`)
				if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
				try {
					if (!isQuotedImage) return reply(`Reply To An Image!`)
					reply(mess.wait)
					var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
					var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
					var enmediaokekek = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					var mediiia = await WAapi.downloadMediaMessage(enmediaokekek)
					var njay = await uploadImages(mediiia)
					var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
					WAapi.sendMessage(from, resu, image, { caption: '.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek })
					fs.unlinkSync(mediiia)
				} catch (e) {
					reply(mess.eror)
					console.log(e)
				}
			}
				break
			case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme': {
				if (args.length < 1) return reply(`Send orders *${prefix + command}* DogeBot`)
				if (q.includes('|')) return reply(`Reply to an image with a caption, For Example *${prefix + command}* Xeon`)
				try {
					if (!isQuotedImage) return reply(`Reply to an image!`)
					reply(mess.wait)
					var teks2 = args.join(' ')
					var enmedialel = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					var mediia = await WAapi.downloadMediaMessage(enmedialel)
					var njay = await uploadImages(mediia)
					var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
					sendStickerFromUrl(from, `${resu}`)
				} catch (e) {
					reply(mess.eror)
					console.log(e)
				}
			}
				break
			case 'takestick':
			case 'takesticker':
			case 'take':
				if (!isQuotedSticker) return reply(`Reply sticker with caption *${prefix}takestick name|author*`)
				ppp = `${args.join(' ')}`
				const encmediaoo1 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const media2 = await WAapi.downloadAndSaveMediaMessage(encmediaoo1, `./sticker/${sender}`)
				const packname = ppp.split('|')[0]
				const author = ppp.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply(mess.error.api)
					WAapi.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: mek })
					fs.unlinkSync(media2)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
			case 'stickerwm':
			case 'swm':
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					ppp = `${args.join(' ')}`
					const encmedia9191 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await WAapi.downloadAndSaveMediaMessage(encmedia9191, `./sticker/${sender}`)
					const packname1 = ppp.split('|')[0]
					const author1 = ppp.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
						.input(media)
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							reply(mess.error.api)
						})
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(mess.error.api)
								WAapi.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: mek })
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					wmsti = body.slice(11)
					if (!wmsti.includes('|')) return reply(`Send a picture or reply to an image with a caption *${prefix}stickerwm nama|author*`)
					const encmediaokekak = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await WAapi.downloadAndSaveMediaMessage(encmediaokekak, `./sticker/${sender}`)
					const packname1 = wmsti.split('|')[0]
					const author1 = wmsti.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					sticWait(from)
					await ffmpeg(`${media}`)
						.inputFormat(media.split('.')[4])
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply(mess.error.api)
						})
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(mess.error.api)
								WAapi.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: ftex })
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else {
					reply(`Send picture/video with caption ${prefix}stickerwm name|author or image/video tags that have been sent\nNote : Maximum video duration is 10 seconds`)
				}
				break
			case 'semoji':
				if (args === 0) return reply('Where is the emoji?')
				aku4 = args.join(' ')
				emoji.get(`${aku4}`).then(emoji => {
					link = `${emoji.images[10].url}`
					sendWebp(from, `${link}`).catch(() => reply('fail'))
				})
				break
			case 'gifstiker':
			case 's':
			case 'stickergif':
			case 'sticker':
			case 'stiker':

				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedialoli = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await WAapi.downloadAndSaveMediaMessage(encmedialoli)
					ran = '666.webp'
					await ffmpeg(`./${media}`)
						.input(media)
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							reply('error')
						})
						.on('end', function () {
							console.log('Finish')
							WAapi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedialoli22 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await WAapi.downloadAndSaveMediaMessage(encmedialoli22)
					ran = '999.webp'
					reply(mess.wait)
					await ffmpeg(`./${media}`)
						.inputFormat(media.split('.')[1])
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
						})
						.on('end', function () {
							console.log('Finish')
							WAapi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(ran)
				} else {
					reply(`Send a picture with a caption ${prefix}sticker\nVideo Sticker Duration 1-9 Seconds`)
				}
				break
			case 'stcmemepic': case 'stickermemepic':

				if (args.length < 1) return reply(`Send orders *${prefix + command}* top text|bottom text`)
				if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
				try {
					if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY PICTURE OR STICKER!!`)
					reply(mess.wait)
					var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
					var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
					var imgbb = require('imgbb-uploader')
					var enmediahe1 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					var media = await WAapi.downloadAndSaveMediaMessage(enmediahe1)
					var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
					var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
					WAapi.sendMessage(from, resu, image, { quoted: mek })
					fs.unlinkSync(media)
				} catch (e) {
					return reply(`${e}`)
					console.log(e)
				}
				break

			//══════════[ FUN FEATURES ]══════════//
			case 'rate':
			case 'ship':
				rate = body.slice(1)
				const ra = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				WAapi.sendMessage(from, 'Question : *' + rate + '*\n\nAnswer : ' + te + '%', text, { quoted: mek })
				break
			case 'can':
				bisakah = body.slice(1)
				const bisa = ['Can', 'Cant', 'Try again', 'Are you dreaming?', 'Are you sure you can?']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				WAapi.sendMessage(from, 'Question : *' + bisakah + '*\n\nAnswer : ' + keh, text, { quoted: mek })
				break
			case 'when':
				kapankah = body.slice(1)
				const kapan = ['Tomorrow', 'The day after tomorrow', 'Earlier', '4 Days', '5 Days', '6 Days', '1 Week Again', '2 Weeks Again', '3 Weeks Again', '1 Month Again', '2 Months', '3 Months', '4 Months', '5 Months', '6 Months Again']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				WAapi.sendMessage(from, 'Question : *' + kapankah + '*\n\nAnswer : ' + koh, text, { quoted: mek })
				break
			case 'is':
				apakah = body.slice(1)
				const apa = ['Yes', 'No', 'Could be', 'I dont know lmao', 'Ask the Chicken']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				WAapi.sendMessage(from, 'Question : *' + apakah + '*\n\nAnswer : ' + kah, text, { quoted: mek })
				break
			case 'stupid':
			case 'foolish':
			case 'smart':
			case 'ape':
			case 'noob':
			case 'great':
			case 'horny':
			case 'asshole':
			case 'handsome':
			case 'beautiful':
			case 'cute':
			case 'kind':
			case 'ugly':
			case 'pretty':
			case 'chutiya':
			case 'nibba':
			case 'nibbi':
			case 'bhosdiwala':
			case 'randibaaz':
			case 'topibaaz':
			case 'nerd':
			case 'hot':
			// case 'sexy':
				if (!isGroup) return reply(mess.only.group)
				membr = []
				const pff = groupMembers
				const go = groupMembers
				const goo = pff[Math.floor(Math.random() * pff.length)]
				const oe = go[Math.floor(Math.random() * go.length)]
				teks = `*The most ${command} here is:* @${goo.jid.split('@')[0]}`
				membr.push(goo.jid)
				mentions(teks, membr, true, { quoted: mek })
				break
			case "couple":
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. whats happening here @${akuu.jid.split('@')[0]} ♥️👀 @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true)
				break
			case 'handsomecheck':
				ganteng = body.slice(1)
				const gan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				WAapi.sendMessage(from, 'Question : *' + ganteng + '*\n\nAnswer : ' + teng + '%', text, { quoted: mek })
				break
			case 'beautycheck':
				cantik = body.slice(1)
				const can = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
				const tik = can[Math.floor(Math.random() * can.length)]
				WAapi.sendMessage(from, 'Question : *' + cantik + '*\n\nAnswer : ' + tik + '%', text, { quoted: mek })
				break
			case 'charactercheck':
				watak = body.slice(1)
				const wa = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'patient', 'UwU', 'top, anyway', 'Helpful', 'chutiya', 'topibaaz', 'pro-comder', 'dassi', 'panji', 'bhakt']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				WAapi.sendMessage(from, 'Question : *' + watak + '*\n\nAnswer : ' + tak, text, { quoted: mek })
				break

			case "girl":
				if (!isGroup) return reply(mess.only.group)
				const proff = groupMembers
				// const go = groupMembers
				const foo = proff[Math.floor(Math.random() * proff.length)]
				membr = []
				teks = `*Ask  @${foo.jid.split('@')[0]} if she is ready for you....*`
				membr.push(foo.jid)
				mentions(teks, membr, true, { quoted: mek })
				break
			case "boy":
				if (!isGroup) return reply(mess.only.group)
				const joff = groupMembers
				// const go = groupMembers
				const khoo = joff[Math.floor(Math.random() * joff.length)]
				membr = []
				teks = `*Ask  @${khoo.jid.split('@')[0]} if he is ready for you....*`
				membr.push(khoo.jid)
				mentions(teks, membr, true, { quoted: mek })
				break

			//══════════[ OWNER FEATURES ]══════════//

			case 'bc':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Where is the text?')
				anu100 = await WAapi.chats.all()
				if (isMedia && !WAapi.message.videoMessage || isQuotedImage) {
					const encmediaboomb = isQuotedImage ? JSON.parse(JSON.stringify(WAapi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : WAapi
					bc100 = await WAapi.downloadMediaMessage(encmediaboomb)
					for (let _ of anu100) {
						WAapi.sendMessage(_.jid, bc100, image, { quoted: fgi, caption: `*「 Doge Bot Broadcast 」*\n\n${body.slice(4)}` })
					}
					reply('Broadcast success')
				} else {
					for (let _ of anu100) {
						WAapi.sendMessage(_.jid,
							{
								"contentText": `*「 DOGE BOT BROADCASTING MESSAGE 」*\n\n${body.slice(4)}`,
								"footerText": `${myTimezone}`,
								"buttons": [
									{
										"buttonId": `${prefix}menu`,
										"buttonText": {
											"displayText": "MENU 🗃️"
										}, "type": "RESPONSE"
									}
								], "headerType": 'LOCATION',
								locationMessage: {
									degreesLatitude: '',
									degreesLongitude: '',
									jpegThumbnail: fakeimage,
								}
							}, MessageType.buttonsMessage)
					}
					reply('Broadcast success')
				}
				break
			case 'bc2':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('The text?')
				anubc2 = await WAapi.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia12345 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await WAapi.downloadMediaMessage(encmedia12345)
					for (let _ of anubc2) {
						WAapi.sendMessage(_.jid, buff, image, { viewOnce: true, caption: `${body.slice(4)}` })
					}
					reply(`Broadcast success ${body.slice(4)}`)
				} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmediaki = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await WAapi.downloadMediaMessage(encmediaki)
					for (let _ of anubc2) {
						WAapi.sendMessage(_.jid, buff, video, { viewOnce: true, caption: `${body.slice(4)}` })
					}
					reply(`Broadcast success ${body.slice(4)}`)
				} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmediadirk = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await WAapi.downloadMediaMessage(encmediadirk)
					for (let _ of anubc2) {
						WAapi.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true }, caption: `${body.slice(4)}` })
					}
					reply(`Broadcast success ${body.slice(4)}`)
				} else {
					for (let _ of anubc2) {
						sendMess(_.jid, `Bot Broadcast\n\n${body.slice(4)}`)
					}
					reply(`Broadcast Success`)
				}
				break
			case 'bcgc':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Where is the text? ?')
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmediabcgc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					bcgc = await WAapi.downloadMediaMessage(encmediabcgc)
					for (let _ of groupMembers) {
						WAapi.sendMessage(_.jid, bcgc, image, { caption: `*「 DOGE BOT BROADCAST 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
					}
					reply('')
				} else {
					for (let _ of groupMembers) {
						sendMess(_.jid, `*「 DOGE BOT BROADCAST 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
					}
					reply('Success broadcast group')
				}
				break
			case 'clearall':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				anuclearall = await WAapi.chats.all()
				WAapi.setMaxListeners(25)
				for (let _ of anuclearall) {
					WAapi.deleteChat(_.jid)
				}
				textImg('Successfully deleted all chat')
				break
			case 'setbotpp':
			case 'setppbot':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (!isQuotedImage) return reply(`Send a picture with a caption ${prefix}setppbot or tag images that have already been sent`)
				enmediaheheh = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WAapi.downloadAndSaveMediaMessage(enmediaheheh, './database/sampah/media_user')
				await WAapi.updateProfilePicture(botNumber, media)
				reply('Thank you for the new profile photo, my dear owner 😚')
				break
			case 'setbotbio':
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('The text?')
				iyek = body.slice(8)
				WAapi.setStatus(`${iyek}`)
				reply(`Success changing bio to ${body.slice(8)}`)
				break
			case 'setbotname':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
				anuoke112 = body.slice(11)
				WAapi.updateProfileName(anuoke112)
				reply(`Success in changing the name of the bot to ${body.slice(11)}`)
				break
			case 'public':
				if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
				if (self === false) return
				self = false
				reply(`\`\`\`MODE - PUBLIC\`\`\``)
				break
			case 'self':
				if (!mek.key.fromMe && !isOwner) return reply('Who the hell is it bro ?')
				if (self === true) return
				self = true
				reply(`\`\`\`MODE - SELF\`\`\``)
				break
			case 'autoread':
				if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
				if (args[0] == 'on') {
					autoread = true
					reply('Success..')
				} else if (args[0] == 'off') {
					autoread = false
					reply('Success..')
				}
				break
			case 'autotype':
				if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
				if (args[0] == 'on') {
					autoketik = true
					reply('Success..')
					reply('Remember if autovn is on, please turn it off first')
				} else if (args[0] == 'off') {
					autoketik = false
					reply('Success..')
				}
				break
			case 'autorecord':
				if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
				if (args[0] == 'on') {
					autovn = true
					reply('Succes..')
					reply('Remember if autotype is on, please turn it off first')
				} else if (args[0] == 'off') {
					autovn = false
					reply('Success..')
				}
				break
				break
			case 'tospam':
				if (!isOwner && !mek.key.fromMe) return reply('Only Owner Can Use This Feature.')
				if (!arg) return reply(`Reply to sticker, contact, doc, or media with ${prefix}tospam amount in number`)
				if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
					teks = body.slice(8)
					oi1 = teks.split('|')[0]
					oi2 = teks.split('|')[1]
					if (Number(oi2) >= 50) return reply('Max 50!')
					if (!Number(oi2)) return reply('The number must be a number!')
					for (let i = 0; i < oi2; i++) {
						WAapi.sendMessage(from, `${oi1}`, MessageType.text)
					}
				} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
					teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					if (!Number(args[0])) return reply('Amount must be a number!')
					if (Number(args[0]) >= 50) return reply('Max 50!')
					for (let i = 0; i < args[0]; i++) {
						WAapi.sendMessage(from, teks, MessageType.text)
					}
				} else if (isQuotedSticker) {
					encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					median = await WAapi.downloadAndSaveMediaMessage(encmedian)
					anutospem = fs.readFileSync(median)
					if (!Number(args[0])) return reply('Amount must be a number!')
					if (Number(args[0]) >= 50) return reply('Max 50!')
					for (let i = 0; i < args[0]; i++) {
						WAapi.sendMessage(from, anutospem, sticker)
					}
				} else if (isQuotedAudio) {
					encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediat = await WAapi.downloadAndSaveMediaMessage(encmediat)
					anutospem2 = fs.readFileSync(mediat)
					if (!Number(args[0])) return reply('Amount must be a number!')
					if (Number(args[0]) >= 50) return reply('Max 50!')
					for (let i = 0; i < args[0]; i++) {
						WAapi.sendMessage(from, anu2spem2, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true })
					}
				} else if (isQuotedImage) {
					boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					delb = await WAapi.downloadMediaMessage(boij)
					teks = body.slice(6)
					oi1 = teks.split('|')[0]
					oi2 = teks.split('|')[1]
					if (Number(oi2) >= 50) return reply('Max 50!')
					if (!Number(oi2)) return reply('Amount must be a number!')
					for (let i = 0; i < oi2; i++) {
						WAapi.sendMessage(from, delb, MessageType.image, { caption: oi1 })
					}
				}
				break
			case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				if (!arg) return reply(`Use ${prefix}spam text|amount`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Use ${prefix}spam text|amount`)
				if (Number(argzi[1]) >= 50) return reply('Max 50!')
				if (isNaN(argzi[1])) return reply(`must be a number`)
				for (let i = 0; i < argzi[1]; i++) {
					WAapi.sendMessage(from, argzi[0], MessageType.text)
				}
				break
			case 'leaveall':
				if (!isOwner) return reply(mess.only.owner)
				let totalgroup = WAapi.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
				for (let id of totalgroup) {
					sendMess(id, 'byee!', null)
					WAapi.groupLeave(id)
				}
				break
			case 'addvn':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				if (!isQuotedAudio) return reply('Reply audio')
				nm = body.slice(7)
				if (!nm) return reply('Whats the vn name??')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await WAapi.downloadMediaMessage(boij)
				vien.push(`${nm}`)
				fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
				fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
				WAapi.sendMessage(from, `Success, please check with *${prefix}vnlist*`, MessageType.text, { quoted: mek })
				break
			case 'delvn':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				try {
					nmm = body.slice(7)
					wanudelvn = vien.indexOf(nmm)
					vien.splice(wanudelvn, 1)
					fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Successfully deleted vn ${body.slice(7)}`)
				} catch (err) {
					console.log(err)
					reply(mess.error.api)
				}
				break
			case 'vnlist':
			case 'listvn':
				teks = '*VN List :*\n\n'
				for (let awokwkwk of vien) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${vien.length}*\n\n_To retrieve the vn, please reply to this message with the caption of the vn name_`
				WAapi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
				break
			case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				if (!isQuotedImage) return reply('Reply image')
				nm = body.slice(10)
				if (!nm) return reply('Whats the name of the image??')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await WAapi.downloadMediaMessage(boij)
				imagi.push(`${nm}`)
				fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
				fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
				WAapi.sendMessage(from, `Success, please check with *${prefix}imglist*`, MessageType.text, { quoted: mek })
				break
			case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				try {
					nmm = body.slice(10)
					wanudelimg = imagi.indexOf(nmm)
					imagi.splice(wanudelimg, 1)
					fs.unlinkSync(`./media/image/${nmm}.jpg`)
					reply(`Successfully deleted image ${body.slice(10)}`)
				} catch (err) {
					console.log(err)
					reply(mess.error.api)
				}
				break
			case 'imagelist':
			case 'listimage':
				teks = '*IMAGE List :*\n\n'
				for (let awokwkwk of imagi) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagi.length}*\n\n_To take a picture, please reply to this message with the caption of the image name_`
				WAapi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
				break
			case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				if (!isQuotedSticker) return reply('Reply sticker')
				nm = body.slice(12)
				if (!nm) return reply('What is the name of the sticker??')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await WAapi.downloadMediaMessage(boij)
				setik.push(`${nm}`)
				fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
				fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
				WAapi.sendMessage(from, `Success, please check with *${prefix}liststicker*`, MessageType.text, { quoted: mek })
				break
			case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				try {
					nmm = body.slice(12)
					wanudelstick = setik.indexOf(nmm)
					setik.splice(wanudelstick, 1)
					fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					reply(`Successfully deleted the sticker ${body.slice(12)}`)
				} catch (err) {
					console.log(err)
					reply(mess.error.api)
				}
				break
			case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setik) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setik.length}*\n\n_To take a sticker, please reply to this message with the caption of the sticker name_`
				WAapi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
				break
				break

			//══════════[ GROUP FEATURES ]══════════//

			case 'creategroup':
			case 'creategrup':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Use ${prefix}creategrup group name|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined) {
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					for (let i = 0; i < mentioned.length; i++) {
						anucgc = []
						anucgc.push(mentioned[i])
					}
					WAapi.groupCreate(argz[0], anucgc)
					reply(`Success in creating a group ${argz[0]}`)
				}
				break
			case 'getbio':
				var yy = mek.message.extendedTextMessage.contextInfo.participant
				var p = await WAapi.getStatus(`${yy}`, MessageType.text)
				reply(p.status)
				if (p.status == 401) {
					reply(mess.error.api)
				}
				break
			case 'getpict':
			case 'getpp':
			case 'getdp':
			case 'getpic':
				if (!isGroup) return reply(mess.only.group)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				pictt = await WAapi.getProfilePicture(mentioned)
				pict = await getBuffer(pictt)
				WAapi.sendMessage(from, pict, image, { quoted: mek })
				break
			case 'getname':
				var ambl = mek.message.extendedTextMessage.contextInfo.participant
				const sname = WAapi.contacts[ambl] != undefined ? WAapi.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : WAapi.contacts[ambl].notify || WAapi.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
				reply(sname)
				break
			case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (isGroupAdmins || isOwner) {
					WAapi.groupLeave(from)
				} else {
					reply(mess.only.admin)
				}
				break
			case 'getdescgc':
			case 'getdesc':

				if (!isGroup) return reply(mess.only.group)
				anugetdescgc = from
				metadete = await WAapi.groupMetadata(anugetdescgc)
				WAapi.sendMessage(from, metadete.desc, text, { quoted: mek })
				break
			case 'welcome':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (args.length < 1) return reply(`Type :\n${prefix}welcome on to activate\n${prefix}welcome off to disable`)
				if ((args[0]) === 'on') {
					if (isWelkom) return reply('*welcome is active !!*')
					_welkom.push(from)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
					reply(`\`\`\`Success ✅, Activating the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
				} else if ((args[0]) === 'off') {
					if (!isWelkom) return reply('*welcome has been off before !!*')
					_welkom.splice(from, 1)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
					reply(`\`\`\`Success ✅, Disabling the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
				} else {
					reply('*on to enable, off to disable*')
				}
				break
			case 'antilink':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!q) return reply(`Choose on or off`)
				if (args[0].toLowerCase() === 'on') {
					if (isAntiLink) return reply(`Already active`)
					_antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
					reply(`\`\`\`Success ✅, Activating the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
				} else if (args[0].toLowerCase() === 'off') {
					let anuantilink = _antilink.indexOf(from)
					_antilink.splice(anuantilink, 1)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
					reply(`\`\`\`Success ✅, Disabling the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
				} else {
					reply(`_Choose on or off_`)
				}
				break
			case 'antivirtex':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!q) return reply(`Choose on or off`)
				if (args[0].toLowerCase() === 'on') {
					if (isAntiVirtex) return reply(`Already active`)
					_antivirtex.push(from)
					fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
					reply(`\`\`\`Success ✅, Activating the antivirtex feature in the group\`\`\` *${groupMetadata.subject}*`)
				} else if (args[0].toLowerCase() === 'off') {
					let anuantivtex = _antivirtex.indexOf(from)
					_antivirtex.splice(anuantivtex, 1)
					fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
					reply(`\`\`\`Success ✅, Disabling the antivirus feature in the group\`\`\` *${groupMetadata.subject}*`)
				} else {
					reply(`_Choose on or off_`)
				}
				break
			case 'gc': case 'group':
				buttonss = [{ buttonId: `${prefix}opengc`, buttonText: { displayText: 'OPEN ⚙️' }, type: 1 }, { buttonId: `${prefix}closegc`, buttonText: { displayText: 'CLOSE ⚙️' }, type: 1 }]
				const bMess = {
					contentText: 'OPEN/CLOSE\n\nGroup',
					footerText: 'Please choose one',
					buttons: buttonss,
					headerType: 1
				}
				await WAapi.sendMessage(from, bMess, MessageType.buttonsMessage, { quoted: mek })
				break
			case 'opengc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.group)
				if (!isBotGroupAdmins) return sticNotAdmin(from)
				reply(`Successful opening group ${groupName}`)
				WAapi.groupSettingChange(from, GroupSettingChange.messageSend, false)
				break
			case 'closegc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return sticNotAdmin(from)
				reply(`Successfully closing the group ${groupName}`)
				WAapi.groupSettingChange(from, GroupSettingChange.messageSend, true)
				break
			case 'grouplink':
			case 'gruplink':
			case 'gclink':
			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':

				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				linkgc = await WAapi.groupInviteCode(from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\n*${groupName}* group link`
				WAapi.sendMessage(from, yeh, text, { quoted: fgi })
				break
			case 'promote':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target who wants to be an admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Order received, you became an admin :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					WAapi.groupMakeAdmin(from, mentioned)
				} else {
					mentions(`Order received, Promoted : @${mentioned[0].split('@')[0]} to an admin in *${groupMetadata.subject}*`, mentioned, true)
					WAapi.groupMakeAdmin(from, mentioned)
				}
				break
			case 'demote':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the admin you want to demote!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Order received, you are not an admin anymore :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					WAapi.groupDemoteAdmin(from, mentioned)
				} else {
					mentions(`Order received, Demoted : @${mentioned[0].split('@')[0]} to a member`, mentioned, true)
					WAapi.groupDemoteAdmin(from, mentioned)
				}
				break
			case 'demoteall':
				let myJid1 = "919734192003@s.whatsapp.net"
				let myJid2 = "919460908375@s.whatsapp.net"
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
				members_id = members_id.filter(function(value, index, arr){ 
					return value != myJid2 && value != myJid1;
				});
				WAapi.groupDemoteAdmin(from, members_id)
				break
			case 'promoteall':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
				WAapi.groupMakeAdmin(from, members_id)
				break
			case 'add':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Who wants to be added??')
				if (args[0].startsWith('08')) return reply('Use country code bro')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					WAapi.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					reply('Failed to add target, maybe because in private')
				}
				break
			case "kick":

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (
					mek.message.extendedTextMessage === undefined ||
					mek.message.extendedTextMessage === null
				)
					return reply("Tag the target you want to kick!");
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
				if (mentioned.length > 1) {
					WAapi.groupRemove(from, mentioned);
					reply(mess.success);
				} else if (mentioned.length < 1) {
					anukick = mek.message.extendedTextMessage.contextInfo.participant;
					WAapi.groupRemove(from, [anukick]);
					reply(mess.success);
				} else {
					WAapi.groupRemove(from, mentioned);
					reply(mess.success);
				}
				break;
			case 'tagall':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isGroupAdmins) return reply(mess.only.admin)
				members_id = []
				teks = (args.length > 1) ? args.join(' ').trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
					teks += `• @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
			case 'setname':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				WAapi.groupUpdateSubject(from, `${body.slice(9)}`)
				WAapi.sendMessage(from, `\`\`\`Success ✅, Renamed the group to\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
				break
			case 'setdesc':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				WAapi.groupUpdateDescription(from, `${body.slice(9)}`)
				WAapi.sendMessage(from, `\`\`\`Success ✅, Changing group description\`\`\` *${groupMetadata.subject}* Became: *${body.slice(9)}*`, text, { quoted: fgi })
				break
			case 'setgrouppp':
			case 'setgruppp':
			case 'setpp':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (isQuotedImage) {
					let encmediasetppgc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let media = await WAapi.downloadMediaMessage(encmediasetppgc)
					WAapi.updateProfilePicture(from, media)
						.then((res) => reply(jsonformat(res)))
						.catch((err) => reply(jsonformat(err)))
				} else {
					reply(`Send or tag an image with a caption ${prefix}setppgrup`)
				}
				break
			case 'hidetag':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
				try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					hideTag(from, `${quotedText}`)
				} catch {
					hideTag(from, `${q}`)
				}
				break
			case 'infogc':
			case 'infogrup':
			case 'infogrouup':
			case 'grupinfo':
			case 'groupinfo':
			case 'gcinfo':

				if (!isGroup) return reply(mess.only.group)
				try {
					var pic = await WAapi.getProfilePicture(from)
				} catch {
					var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
				}
				let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*Group ID :* ${from}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner :* @${groupMetadata.owner.split('@')[0]}\n*Number of Admins :* ${groupAdmins.length}\n*Number of participants :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
				WAapi.sendMessage(from, await getBuffer(pic), image, { quoted: mek, caption: ingfo, contextInfo: { "mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')] } })
				break
			case 'resetlinkgc':
			case 'resetlinkgroup':
			case 'resetlinkgrup':
			case 'revoke':
			case 'resetlink':
			case 'resetgrouplink':
			case 'resetgclink':
			case 'resetgruplink':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				json = ['action', 'inviteReset', from]
				WAapi.query({ json, expect200: true })
				reply('Successfully Reset Group Link')
				break
			case 'online':
			case 'onlinelist':
			case 'listonline':
			case 'here':
				if (!isGroup) return reply(`Only group`)
				try {
					let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
					let online = [...Object.keys(WAapi.chats.get(ido).presences), WAapi.user.jid]
					WAapi.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek, contextInfo: { mentionedJid: online } })
				} catch (e) {
					reply(`${e}`)
				}
				break
			case 'tagall':
			case 'tag':
				if (!isGroup) return reply(mess.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin and bot owner can use this feature')
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
					teks += `🐶 @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
			case 'totag':
			case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin and bot owner can use this feature')
				if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
					encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WAapi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group = await WAapi.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						contextInfo: { mentionedJid: mem },
						quoted: mek
					}
					ini_buffer = fs.readFileSync(file)
					WAapi.sendMessage(from, ini_buffer, sticker, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WAapi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group = await WAapi.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						contextInfo: { mentionedJid: mem },
						quoted: mek
					}
					ini_buffer = fs.readFileSync(file)
					WAapi.sendMessage(from, ini_buffer, image, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
					encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WAapi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group = await WAapi.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'audio/mp4', duration: 359996400,
						ptt: true,
						contextInfo: { mentionedJid: mem },
						quoted: mek
					}
					ini_buffer = fs.readFileSync(file)
					WAapi.sendMessage(from, ini_buffer, audio, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
					encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WAapi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group = await WAapi.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'video/gif',
						contextInfo: { mentionedJid: mem },
						quoted: mek
					}
					ini_buffer = fs.readFileSync(file)
					WAapi.sendMessage(from, ini_buffer, video, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
					encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WAapi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group = await WAapi.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'text/plain',
						contextInfo: { mentionedJid: mem },
						quoted: mek
					}
					ini_buffer = fs.readFileSync(file)
					WAapi.sendMessage(from, ini_buffer, document, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
					encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WAapi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group = await WAapi.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'video/mp4', duration: 359996400,
						contextInfo: { mentionedJid: mem },
						quoted: mek
					}
					ini_buffer = fs.readFileSync(file)
					WAapi.sendMessage(from, ini_buffer, video, options)
					fs.unlinkSync(file)
				} else {
					reply(`reply image/document/gif/sticker/audio/video with caption ${prefix}totag`)
				}
				break
			case 'listadmin':
			case 'adminlist':

				if (!isGroup) return reply(mess.only.group)
				teks = `Admin list of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
					no += 1
					teks += `${no.toString()}. @${admon.split('@')[0]}\n`
				}
				mentions(teks, groupAdmins, true)
				break
			case 'ownergrup':
			case 'ownergroup':

				if (!isGroup) return reply(mess.only.group)
				options = {
					text: `Here is the group owner : https://wa.me/${from.split("-")[0]}`,
					contextInfo: { mentionedJid: [from] }
				}
				WAapi.sendMessage(from, options, text, { quoted: mek })
				break
			case 'contag':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				argzi = arg.split('|')
				if (!argzi) return reply(`Use ${prefix}kontag @tag|name`)
				if (mek.message.extendedTextMessage != undefined) {
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
			case 'contact':

				if (!isGroup) return reply(mess.only.group)
				argzu = arg.split('|')
				if (!argzu) return reply(`Use ${prefix}contact @tag|name`)
				if (mek.message.extendedTextMessage != undefined) {
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
			case "hi":
				reply("*Hi, how's your day goin!*")
			case "bot":
				WAapi.sendMessage(from, "*_I'm the bot. How can I help you._^_^*", text, {quoted : mek})

			//━━━━━━━━━━━━━━━[ THE END OF ALL FEATURES ]━━━━━━━━━━━━━━━━━//

			default:
				if (isOwner) {
					if (budy.startsWith('$')) {
						if (!mek.key.fromMe && !isOwner) return
						qur = budy.slice(2)
						exec(qur, (err, stdout) => {
							if (err) return reply(`${err}`)
							if (stdout) {
								reply(stdout)
							}
						})
					}
					if (isOwner) {
						if (budy.startsWith('>')) {
							console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
							try {
								let evaled = await eval(budy.slice(2))
								if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
								reply(`${evaled}`)
							} catch (err) {
								reply(`${err}`)
							}
						}
					}
				}
		}
	} catch (e) {
		e = String(e)
		if (!e.includes("this.isZero") && !e.includes("jid")) {
			console.log('Error : %s', color(e, 'red'))
			WAapi.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Dream Guy Xeon", body: "Dont forget to subscribe Xeon", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/dogepic1.jpg'), sourceUrl: "https://wa.me/916909137213" } } })
		}
		// console.log(e)
	}
}




