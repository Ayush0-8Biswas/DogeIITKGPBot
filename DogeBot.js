const
	{
		MessageType,
		Presence,
		Mimetype,
		GroupSettingChange,
	} = require("@adiwajshing/baileys")

const fs = require("fs")
// const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
require('util');
const crypto = require('crypto')
const request = require('request')
const { exec} = require('child_process')
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
//══════════[ Lib ]══════════//

const {fetchJson } = require('./lib/fetcher')
const { color} = require('./lib/color')
const {getBuffer, getGroupAdmins, getRandom} = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { heroList } = require('./lib/herolist.js')
const { pinterest } = require('./lib/pinterest')
const {upload } = require('./lib/uploadimg')
const templates = require('./lib/templates.js')
const { uploadImages } = require('./lib/uploadimage')
// const { mediafireDl } = require('./lib/mediafire.js')
// const { herodetails } = require('./lib/herodetail.js')

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
const fakeImage = fs.readFileSync('./media/dogepic1.jpg')
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
// const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
// const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
// const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))

// Anime variables //
let animeName, animeResponse, animeList, animeReply

//══════════[ TIME ]══════════//
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
let timeString;
if (time2 < "23:59:00") {
	timeString = 'Good night 🌌';
}
if (time2 < "19:00:00") {
	timeString = 'Good afternoon 🌆';
}
if (time2 < "18:00:00") {
	timeString = 'Good afternoon 🌇';
}
if (time2 < "15:00:00") {
	timeString = 'Good afternoon 🏞';
}
if (time2 < "11:00:00") {
	timeString = 'Good morning 🌅';
}
if (time2 < "05:00:00") {
	timeString = 'Good night 🏙';
}

//══════════[ Module Export ]══════════//

module.exports = DogeBotOP = async (WhatsappAPI, mek, _welkom) => {
	let options, mem, member, group, buttonList, vcard2, members_id;
	let myText1, myText2, media, resultImage, resultFile, ownerJid, imageBuffer, bio_user;
	let pporang, mess, textReply, m, mentioned, listMessage;
	let audioBuffer;
	let myJid1 = "919734192003@s.whatsapp.net";
	let myJid2 = "919460908375@s.whatsapp.net";
	try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, image, video, sticker, document, audio} = MessageType
		const myTimezone = moment.tz('Asia/Kolkata').format('dddd') + ', ' + moment.tz('Asia/Kolkata').format('LL')
		const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Kolkata').format("HH:mm:ss");
		const timeJay = moment().tz('Asia/Kolkata').format("HH:mm:ss");
		const type = Object.keys(mek.message)[0]
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
		let body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		let body2 = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const arg = body2.slice(command.length + 2, body2.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = WhatsappAPI.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `916909137213@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let sender2 = mek.key.fromMe ? WhatsappAPI.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await WhatsappAPI.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		m = simple.smsg(WhatsappAPI, mek)
		let pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : '';
		pes.slice(0).trim().split(/ +/).shift().toLowerCase();
		const conts = mek.key.fromMe ? WhatsappAPI.user.jid : WhatsappAPI.contacts[sender] || {notify: jid.replace(/@.+/, '')}
		const pushname = mek.key.fromMe ? WhatsappAPI.user.name : conts.notify || conts.vname || conts.name || '-'
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		let bio_nya = await WhatsappAPI.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
		}
		try {
			pporang = await WhatsappAPI.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		} catch {
			pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
		await getBuffer(pporang);

		//══════════[ Send file from url ]══════════//

		const sendFileFromUrl = async (link, type, options) => {
			resultFile = await getBuffer(link)
			WhatsappAPI.sendMessage(from, resultFile, type, options).catch(e => {
				fetch(link).then((resultFile) => {
					WhatsappAPI.sendMessage(from, resultFile, type, options).catch(e => {
						WhatsappAPI.sendMessage(from, {url: link}, type, options).catch(e => {
							console.log(e)
						})
						console.log(e)
					})
					console.log(e)
				})
			})
		}

		//══════════[ Send message from url ]══════════//

		// sticker meme
		const sendStickerFromUrl = async (to, url) => {
			const names = Date.now() / 10000;
			const download = function (uri, filename, callback) {
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
						WhatsappAPI.sendMessage(to, media, MessageType.sticker, {quoted: mek});
						fs.unlinkSync(filess);
						fs.unlinkSync(asw);
					}
				);
			});
		};

		//══════════[ sendWebp ]══════════//

		const sendWebp = async (from, url) => {
			const names = Date.now() / 10000;
			const download = function (uri, filename, callback) {
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
					WhatsappAPI.sendMessage(from, media, MessageType.sticker, {quoted: mek})
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
				group: 'This feature is only for group!!',
				owner: 'This feature is only for owner!!',
				admin: 'This feature is onlu for admin!!',
				BotAdmin: 'Please give adminship to the bot first!!'
			}
		}

		const math = (teks) => {
			return Math.floor(teks)
		}
		const runtime = function (seconds) {
			seconds = Number(seconds);
			const d = Math.floor(seconds / (3600 * 24));
			const h = Math.floor((seconds % (3600 * 24)) / 3600);
			const m = Math.floor((seconds % 3600) / 60);
			const s = Math.floor(seconds % 60);
			const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
			const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
			const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
			const sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
			return dDisplay + hDisplay + mDisplay + sDisplay;
		};

		//══════════[ BUTTON ]══════════//
		let preparedMessage;
		const sendButton = async (from, context, fortext, but, mek) => {
			await WhatsappAPI.sendMessage(from, {
				contentText: context,
				footerText: fortext,
				buttons: but,
				headerType: 1
			}, MessageType.buttonsMessage, {
				quoted: mek
			})
		}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
			WhatsappAPI.sendMessage(id, {
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 1
			}, MessageType.buttonsMessage, options)
		}
		const sendButImage = async (id, text1, desc1, myImage, but = [], options = {}) => {
			preparedMessage = await WhatsappAPI.prepareMessage(from, myImage, MessageType.image)
			await WhatsappAPI.sendMessage(id, {
				imageMessage: preparedMessage.message.imageMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 4
			}, MessageType.buttonsMessage, options)
		}
		const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {
			preparedMessage = await WhatsappAPI.prepareMessage(from, vid1, video)
			await WhatsappAPI.sendMessage(id, {
				videoMessage: preparedMessage.message.videoMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 5
			}, MessageType.buttonsMessage, options)
		}
		const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
			preparedMessage = await WhatsappAPI.prepareMessage(from, gam1, location)
			await WhatsappAPI.sendMessage(id, {
				locationMessage: preparedMessage.message.locationMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 6
			}, MessageType.buttonsMessage, options)
		}

		//══════════[ Fake ]══════════//

		const listmsg = (from, title, desc, list) => {
			let preparedMessage = WhatsappAPI.prepareMessageFromContent(from, {
				"listMessage": {
					"title": title,
					"description": desc,
					"buttonText": "𝗠𝗘𝗡𝗨",
					"footerText": `${myTimezone}`,
					"listType": "SINGLE_SELECT",
					"sections": list
				}
			}, {})
			return WhatsappAPI.relayWAMessage(preparedMessage, {waitForAck: true})
		}
		const reply = (myText) => {
			WhatsappAPI.sendMessage(from, myText, text, {quoted: mek})
		}
		const sendMess = (hehe, teks) => {
			WhatsappAPI.sendMessage(hehe, teks, text)
		}
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? WhatsappAPI.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : WhatsappAPI.sendMessage(from, teks.trim(), extendedText, {
				quoted: mek,
				contextInfo: {"mentionedJid": memberr}
			})
		}
		const costum = (pesan, tipe, target, target2) => {
			WhatsappAPI.sendMessage(from, pesan, tipe, {
				quoted: {
					key: {
						fromMe: false,
						participant: `${target}`, ...(from ? {remoteJid: from} : {})
					}, message: {conversation: `${target2}`}
				}
			})
		}

		const fgi = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us"} : {})
			},
			message: {
				"videoMessage": {
					"title": `${timeString} ${pushname}`,
					"h": `${timeString} ${pushname}`,
					'duration': '99999',
					'gifPlayback': 'true',
					'caption': `${timeString} ${pushname}`,
					'jpegThumbnail': thumb
				}
			}
		}
		const textImg = (teks) => {
			return WhatsappAPI.sendMessage(from, teks, text, {
				quoted: fgi,
				thumbnail: fs.readFileSync('./media/dogetb.jpg')
			})
		}
		// const fakeitem = (teks) => { WAapi.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}) }, message: { "orderMessage": { "orderId": "174238614569481", "thumbnail": fs.readFileSync("./media/dogetb.jpg"), "itemCount": 9999999999, "status": "INQUIRY", "surface": "CATALOG", "message": `${ucapanWaktu} ${pushname}`, "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" } } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }) }

		//══════════[ Storage ]══════════//

		const sendMediaURL = async (to, url, text = "", mids = []) => {
			if (mids.length > 0) {
				text = normalizeMention(to, text, mids)
			}
			const fn = Date.now() / 10000;
			const filename = fn.toString()
			let mime = ""
			let download = function (uri, filename, callback) {
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
				await WhatsappAPI.sendMessage(to, media, type, {
					quoted: fgi,
					mimetype: mime,
					caption: text,
					contextInfo: {"mentionedJid": mids}
				})

				fs.unlinkSync(filename)
			});
		}

		const createSerial = (size) => {
			return crypto.randomBytes(size).toString('hex').slice(0, size)
		}

		//══════════[ Grup ]══════════//

		const hideTag = async function (from, text) {
			let anugroupsend = await WhatsappAPI.groupMetadata(from)
			let members = anugroupsend.participants
			let ane = []
			for (let i of members) {
				ane.push(i.jid)
			}
			await WhatsappAPI.sendMessage(from, {
				text: text,
				jpegThumbnail: fs.readFileSync('media/dogepic1.jpg')
			}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
		}
		const hideTagKontak = async function (from, nomor, nama) {
			let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
			let anuvcardoke = await WhatsappAPI.groupMetadata(from)
			let members = anuvcardoke.participants
			let ane = []
			for (let i of members) {
				ane.push(i.jid)
			}
			await WhatsappAPI.sendMessage(from, {
				displayname: nama,
				vcard: vcard
			}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
		}
		const sendContact = (from, nomor, nama) => {
			const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
			WhatsappAPI.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {
				quoted: mek,
				contextInfo: {forwardingScore: 508, isForwarded: true}
			})
		}

		//══════════[ Antilink & Antivirtex ]══════════//

		if (body2.includes("https://chat.whatsapp.com/")) {
			if (!isGroup) return
			if (!isAntiLink) return
			if (isGroupAdmins) return
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			reply(` *「 GROUP LINK DETECTED 」*\nYou sent the group chat link, sorry you will be kicked from the group`)
			setTimeout(() => {
				WhatsappAPI.groupRemove(from, [kic]).catch((e) => {
					reply(`BOTS MUST BE ADMIN`)
					if (e != null) console.log(e)
				})
			}, 0)
		}

		if (body2.length > 3500) {
			if (!isGroup) return
			if (!isAntiVirtex) return
			if (isGroupAdmins) return
			reply('Mark as read\n'.repeat(300))
			reply(`「 *VIRUS DETECTED* 」\n\nYou sent a virtex, sorry you will be kicked from the group`)
			console.log(color('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
			WhatsappAPI.groupRemove(from, [sender])
		}

		//══════════[ Dll ]══════════//

		if (autoread) {
			await WhatsappAPI.chatRead(from, "read")
		} else if (autoketik) {
			await WhatsappAPI.updatePresence(from, Presence.composing)
		} else if (autovn) {
			await WhatsappAPI.updatePresence(from, Presence.recording)
		}
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
		let F, F1, F2, menu, myText;
		let x;switch (command) {

			//══════════[ MENU FEATURES ]══════════//

			case 'menu':
			case 'help':

				let timestamp = speed();
				let latency = speed() - timestamp;
				const {wa_version, os_version} = WhatsappAPI.user.phone
				ownerJid = `${owner}@s.whatsapp.net`
				menu =
					`*_${timeString} @${sender2.split('@')[0]}_*

❏「 TIME 」
${icon1} *Date* : ${myTimezone}
${icon1} *Time* : ${time}

❏「 INFO BOT 」
${icon1} *Speed* : ${latency.toFixed(4)} Second
${icon1} *Runtime* : ${runtime(process.uptime())}
${icon1} *Bot Name* : ${botname}
${icon1} *Owner Name* : ${ownername}
${icon1} *Owner Number* : @${ownerJid.split('@')[0]}
${icon1} *Host Name :* ${os.hostname()}
${icon1} *Platform :* ${os.platform()}
${icon1} *Wa Version :* ${WhatsappAPI.user.phone.wa_version}
${icon1} *Mode :* ${self ? "Self" : "Public"}
${icon1} *Autoread* : ${autoread ? "Active" : "Off"}
${icon1} *Autotype* : ${autoketik ? "Active" : "Off"}
${icon1} *Autovn* : ${autovn ? "Active" : "Off"}

❏「 USER INFO 」
${icon1} *Name* : ${pushname}
${icon1} *Bio* : ${bio_user}
${icon1} *Number* : @${sender2.split('@')[0]}
${icon1} *Status* : ${isOwner ? 'Owner' : 'User'}`
				myText =
					`_Please Select Button Below_
_If You Are A Mod User_
_Please Type ${prefix}command_`
				await WhatsappAPI.sendMessage(from, {
					contentText: `${myText}`,
					footerText: `${menu}`,
					buttons: [{
						buttonId: `${prefix}command`,
						buttonText: {displayText: 'MENU 🗃️'},
						type: 1
					}, {
						buttonId: `${prefix}sc`,
						buttonText: {displayText: 'SCRIPT 📝'},
						type: 1
					}, {buttonId: `${prefix}developer`, buttonText: {displayText: 'DEVELOPER 👨🏼‍💻'}, type: 1}],
					headerType: 'LOCATION',
					locationMessage: {
						degreesLatitude: '',
						degreesLongitude: '',
						jpegThumbnail: fakeImage,
						contextInfo: {mentionedJid: [sender2, ownerJid]}
					}
				}, 'buttonsMessage')
				break
			case "bot":
				buttonList = [{
					buttonId: `${prefix}command`,
					buttonText: {displayText: 'MENU 🗃️'},
					type: 1
				}, {
					buttonId: `${prefix}sc`,
					buttonText: {displayText: 'SCRIPT 📝'},
					type: 1
				}, {
					buttonId: `${prefix}developer`,
					buttonText: {displayText: 'DEVELOPER 👨🏼‍💻'},
					type: 1
				}];
				myText =
`Hi, @${sender2.split('@')[0]}, _Please Select Button Below_
_Or Type ${prefix}command_`
				sendButMessage(from, myText, `DogeIITKGPBot`, buttonList, {
					contextInfo: {mentionedJid:[sender2]},
					quoted: fgi,
				})
				break
			case 'command':

				listMessage = {
					buttonText: 'MENU 📃',
					footerText: `*${botname}*`,
					description: `Hi Friend @${sender2.split('@')[0]}, Please select the menu here`,
					sections: [
						{
							"title": `${myTimezone} - ${time}`,
							rows: templates.menuTemplate(prefix)
						}],
					listType: 1
				}
				await WhatsappAPI.sendMessage(from, listMessage, MessageType.listMessage, {
					contextInfo: {mentionedJid: [sender2]},
					quoted: fgi
				})
				break
			case 'groupmenu':
			case 'animemenu':
			case 'makermenu':
			case 'downloadmenu':
			case 'stickermenu':
			case 'funmenu':
			case 'ownermenu':
			case 'convertmenu':
			case 'searchmenu':
			case 'othermenu':
				if (command === 'groupmenu') menu = templates.groupMenuTemplate(prefix, icon2);
				if (command === 'downloadmenu') menu = templates.downloadMenuTemplate(prefix, icon2);
				if (command === 'makermenu') menu = templates.makerMenuTemplate(prefix, icon2);
				if (command === 'animemenu') menu = templates.animeMenuTemplate(prefix, icon2);
				if (command === 'stickermenu') menu = templates.stickerMenuTemplate(prefix, icon2);
				if (command === 'funmenu') menu = templates.funMenuTemplate(prefix, icon2);
				if (command === 'ownermenu') menu = templates.ownerMenuTemplate(prefix, icon2);
				if (command === 'convertmenu') menu = templates.converterMenuTemplate(prefix, icon2)
				if (command === 'searchmenu') menu = templates.searchMenuTemplates(prefix, icon2)
				if (command === 'othermenu') menu = templates.otherMenuTemplates(prefix, icon2);
				await sendButMessage(from, menu, `${myTimezone}`, [
					{
						buttonId: `${prefix}command`,
						buttonText: {displayText: 'BACK ⬅️'},
						type: 1
					},
				], {
					contextInfo: {mentionedJid: [sender]}
				});
				break
			case 'soundmenu':
				listMessage = {
					buttonText: 'Sound Options 📃',
					footerText: `*${botname}*`,
					description: `Hi Friend @${sender2.split('@')[0]}, Please select the option here`,
					sections: [
						{
							"title": `${myTimezone} - ${time}`,
							rows: templates.soundMenuTemplate(prefix)
						}],
					listType: 1
				}
				await WhatsappAPI.sendMessage(from, listMessage, MessageType.listMessage, {
					contextInfo: {mentionedJid: [sender2]},
					quoted: fgi
				})
				break

			//══════════[ DOWNLOAD FEATURES ]══════════//
			case 'telesticker': case 'telegramsticker': case 'tstiker':
				if (!q) return reply(`Example: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
				if (!q.includes('t.me')) return reply('This is not a telegram sticker link')
				let telestc = await zee.Telesticker(`${q}`);
				await reply(mess.wait)
				for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
					await WhatsappAPI.sendMessage(from, await getBuffer(telestc[i].url), sticker, {
						mimetype: 'image/webp',
						quoted: mek
					})
				}
				break
			case 'lyrics':
				reply(mess.wait)
				if (args.length < 1) return reply('What is the name of the song?')
				myText = body.slice(7)
				lirikLagu(myText).then((res) => {
					let lirik = `${res[0].result}`
					reply(lirik)
				})
				break


			//══════════[ DOWNLOAD MENU ]══════════//
			case 'play':
				if (args.length == 0) return reply('Whats the title of the song?')
				bo = args.join(" ")
				reply(mess.wait)
				ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=KingOfBear`)
				thmb = await getBuffer(ini.thumb)
				ply1 = `*Title:* ${ini.title}\n*Channel:* ${ini.channel}\n*View:* ${ini.views}\n*Publish Time:* ${ini.published}`
				ply2 = `Please Select Media Below`
				buttonList = [
					{buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: {displayText: 'MUSIC 🎵'}, type: 1},
					{buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: {displayText: 'VIDEO 📽️'}, type: 1}
				]
				sendButLocation(from, ply1, ply2, thmb, buttonList)
				break
			case 'mp4':
				reply(mess.wait)
				bo = args.join(" ")
				ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=${KingOfBearKey}`)
				mp4 = await getBuffer(ini.url)
				WhatsappAPI.sendMessage(from, mp4, video, {quoted: mek, caption: `Here is your video🐶`})
				break
			case 'mp3':
				reply(mess.wait)
				bo = args.join(" ")
				ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=${KingOfBearKey}`)
				mp3 = await getBuffer(ini.url)
				WhatsappAPI.sendMessage(from, mp3, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
				break
			case 'ytmp3':

				if (args.length < 1) return reply("Where is the link?")
				url = args.join(' ')
				anump3 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
				ytmp3 = await getBuffer(anump3.result.url)
				reply(`_Audio is being processed, please wait a while longer_`)
				WhatsappAPI.sendMessage(from, ytmp3, audio, {mimetype: "audio/mp4", quoted: mek})
				break
			case 'ytmp4':

				if (args.length < 1) return reply("Where is the link?")
				url = args.join(' ')
				anump4 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
				ytmp4 = await getBuffer(anump4.result.url)
				reply(`_The video is being processed, please wait a few more moments_`)
				WhatsappAPI.sendMessage(from, ytmp4, video, {caption: `Done✓`, thumbnail: Buffer.alloc(0), quoted: mek})
				break


			//══════════[ ANIME SEARCH ]══════════//
			case "anibatch": case "gogoanime": case "anime-planet":
				reply(mess.wait)
				if (args.length == 0) return reply('What are you searching?')
				animeName = args.join(" ")
				animeResponse = await fetchJson(`https://violetics.pw/api/anime/${command}?apikey=${viokey}&manga=${encodeURIComponent(animeName)}`)
				animeList = animeResponse.result
				if (animeList.length == 0) return reply("Not Found");
				listMessage = templates.animeTemplate(animeList, botname, sender2, myTimezone, time)

				await WhatsappAPI.sendMessage(from, listMessage, MessageType.listMessage, {
					contextInfo: {mentionedJid: [sender2]},
					quoted: fgi
				})
				break

			//══════════[ MAKER MENU FEATURES ]══════════//
			case "maker":
				if (args.length == 0) return reply(`_Where is the text?_`)
				let vioOptions = JSON.parse(fs.readFileSync('./lib/vioAPI.json'))
				let optionList;
				for (let option of vioOptions) {
					if (option.name == "ephoto360") {
						// console.log(option["stacks"])
						optionList = option["stacks"]
					}
				}

				let Text = args.join(" ").split("|")
				if (Text.length === 1) {
					listMessage = templates.makerOptionsTemplate(optionList, prefix, Text[0], "undefined", sender2, botname, myTimezone, time);
				} else {
					listMessage = templates.makerOptionsTemplate(optionList, prefix, Text[0], Text[1], sender2, botname, myTimezone, time);
				}
				await WhatsappAPI.sendMessage(from, listMessage, MessageType.listMessage, {
					contextInfo: {mentionedJid: [sender2]},
					quoted: fgi
				})
				break;

			case "viomake":
				let vioOption = args.shift()
				let Texts = args.join(" ").split("|")
				if (Texts.length === 1) {
					imageBuffer = await getBuffer(`https://violetics.pw/api/ephoto360/${vioOption}?apikey=${viokey}&text=${encodeURIComponent(Texts[0])}`)
					console.log(`https://violetics.pw/api/ephoto360/${vioOption}?apikey=${viokey}&text=${encodeURIComponent(Texts[0])}`)
					// await sendFileFromUrl(`https://violetics.pw/api/ephoto360/${vioOption}?apikey=${apikey}&text=${Texts[0]}`, MessageType.image, {quoted:mek, caption:'Here'} )
				} else {
					imageBuffer = await getBuffer(`https://violetics.pw/api/ephoto360/${vioOption}?apikey=${viokey}&text=${encodeURIComponent(Texts[0])}&text2=${encodeURIComponent(Texts[1])}`)
					console.log(`https://violetics.pw/api/ephoto360/${vioOption}?apikey=${viokey}&text=${encodeURIComponent(Texts[0])}&text2=${encodeURIComponent(Texts[1])}`)
					// await sendFileFromUrl(`https://violetics.pw/api/ephoto360/${vioOption}?apikey=${apikey}&text=${Texts[0]}&text2=${Texts[1]}`, MessageType.image, {quoted:mek, caption:'Here'} )
				}
				await WhatsappAPI.sendMessage(from, imageBuffer, MessageType.image, {quoted:mek, caption:'Here'})
				break;

			//══════════[ OTHER FEATURES ]══════════//
			case 'owner':

				vcard2 = 'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n'
					+ `FN:${ownername}\n`
					+ `ORG: Owner Of Doge Bot ;\n`
					+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
					+ 'END:VCARD'.trim()
				await WhatsappAPI.sendMessage(from, {displayName: `The owner ${botname}`, vcard: vcard2}, contact,
					{
						quoted: fgi,
					})
				reply(`_The above contact is my owner 🐶🦄_`)
				break
			case 'developer':

				vcard2 = 'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n'
					+ `FN:${developerName}\n`
					+ `ORG: Developer Of Doge Bot ;\n`
					+ `TEL;type=CELL;type=VOICE;waid=${developerNo}:${developerNo}\n`
					+ 'END:VCARD'.trim()
				await WhatsappAPI.sendMessage(from, {displayName: `The owner ${botname}`, vcard: vcard2}, contact,
					{
						quoted: fgi,
					})
				reply(`_The above contact is my developer_`)
				break
			case 'sc':
			case 'script':
				resultImage = fs.readFileSync('./media/scpic.jpg')
				myText = `*🐶𝗗𝗼𝗴𝗲 IITKGP 𝗕𝗼𝘁 𝗦𝗰𝗿𝗶𝗽𝘁🐶*\n\n_• _𝑮𝒊𝒕𝑯𝒖𝒃: https://github.com/Ayush0-8Biswas/DogeIITKGPBot.git_`
				buttonList = [
					{buttonId: `${prefix}developer`, buttonText: {displayText: 'DEVELOPER 👨🏼‍💻'}, type: 1}
				]
				await sendButImage(from, myText, `*_${myTimezone} - ${time}_*`, resultImage, buttonList)
				break
			case 'runtime':
				textImg(`Bot Active Since ${runtime(process.uptime())}`)
				break
			case 'ping':
			case 'speed':

				timestamp = speed();
				latency = speed() - timestamp
				textImg(`「 *𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧* 」\nRespond in ${latency.toFixed(4)} Sec 💬`)
				break
			case 'd':
			case 'del':
			case 'delete':

				await WhatsappAPI.deleteMessage(from, {
					id: mek.message.extendedTextMessage.contextInfo.stanzaId,
					remoteJid: from,
					fromMe: true
				})
				break

			//══════════[ SEARCH FEATURES ]══════════//
			case 'playstore':
				if (!c) return reply('what are you looking for?')
				let play = await hx.playstore(`${c}`)
				let store = '❉─────────────────────❉\n'
				for (let i of play) {
					store += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
				}
				reply(store)
				break
			case 'ytsearch':
				if (args.length < 1) return reply('Where is the text?')
				myText = args.join(' ')
				reply(mess.wait)
				res = await yts(`${myText}`)
				kant = ``
				for (let i of res.videos) {
					kant += (`❒「  YtSearch  」\n• Title : ${i.title}\n• Views : ${i.views}\n• Uploaded On : ${i.ago}\n• Duration : ${i.timestamp}\n• Channel : ${i.author.name}\n• Video Link : ${i.url}\n\n\n`)
				}
				var akhir = kant.trim()
				sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: akhir})
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
				myText = args.join(' ')
				reply(mess.wait)
				res = await ggs({'query': `${myText}`})
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
				myText = args.join(' ')
				res = await googleImage(myText, google)

			function google(error, result) {
				if (error) {
					return reply('_[ ! ] Api Error Or Result Not Found_')
				} else {
					var gugIm = result
					var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
					sendFileFromUrl(random, image, {quoted: mek, caption: `*Search Result :* ${myText}`})
				}
			}

				break

			//══════════[ APK FEATURES ]══════════//
			case 'uapkpro':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Search for applications on the steamkpro.org platform and provide the result data 」\n\n'
				for (x of kontol) {
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
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
				for (x of kontol) {
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
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
				for (x of kontol) {
					ini_txt += `Name : ${x.apps_name}\n`
					ini_txt += `Link :${x.apps_linkdl}\n`
					ini_txt += `\n`
				}
				reply(ini_txt)
				break
			case 'hostapk':
				if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
				query = args.join(' ')
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Search for applications on the hostapk.com website and provide data from the search results 」\n\n'
				for (x of kontol) {
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
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${query}&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkshub.com platform and provide the result data 」\n\n'
				for (x of kontol) {
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
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${query}&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkmody.io platform and provide the result data 」\n\n'
				for (x of kontol) {
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
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkgoogle.org platform and provide the result data 」\n\n'
				for (x of kontol) {
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
				get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=cabd55849002ea851ce8`, {method: 'get'})
				kontol = get_result.result
				ini_txt = '「 Search for applications on the apkdone.com website and provide data from the search results 」\n\n'
				for (x of kontol) {
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
			case 'sound':
				audioBuffer = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command+args[0]}.mp3`)
				await WhatsappAPI.sendMessage(from, audioBuffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
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
			case 'ssweb': case 'ss':
				if (args.length < 1) return reply('Where is the url?')
				myText = q
				anussweb = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${myText}`)
				buff = await getBuffer(anussweb.screenshot)
				WhatsappAPI.sendMessage(from, buff, image, {quoted: mek, caption: myText})
				break

			//══════════[ CONVERT FEATURES ]══════════//
			case 'squirrel':
				encmedia012 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedia012)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
				})
				break
			case 'blub':
				if (!isQuotedAudio) return reply('Reply audio ')
				encmediakekek = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WhatsappAPI.downloadAndSaveMediaMessage(encmediakekek)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
				})
				break
			case 'ghost':
				encmedia777 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedia777)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
				})
				break
			case 'cutesound':
				encmedia100 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedia100)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					riu = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
				})
				break
			case 'slowmo':
			case 'slow': {
				try {
					encmedia22 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedia22)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						uhh = fs.readFileSync(ran)
						WhatsappAPI.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
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
					media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedia11)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						WhatsappAPI.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
						fs.unlinkSync(ran)
					})
				} catch (e) {
					reply('Error!')
				}
			}
				break
			case 'vibra':
			case 'vibrato': {
				encmedia33 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedia33)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
				})
			}
				break
			case 'nightcore':
				if (!isQuotedAudio) return reply('Reply Audionya')
				night = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				core = await WhatsappAPI.downloadAndSaveMediaMessage(night)
				ran = getRandom('.mp3')
				reply(mess.wait)
				exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(core)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {
						mimetype: 'audio/mp4',
						ptt: false,
						quoted: mek,
						ptt: true
					})
					fs.unlinkSync(ran)
				})
				break
			case 'vnsec':
				encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediam = await WhatsappAPI.downloadAndSaveMediaMessage(encmediam)
				cokmatane = Number(args[0])
				hah = fs.readFileSync(mediam)
				await WhatsappAPI.sendMessage(from, hah, audio, {
					mimetype: 'audio/mp4',
					duration: cokmatane,
					ptt: true,
					quoted: mek
				})
				fs.unlinkSync(mediam)
				break
			case 'vidsec':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				median = await WhatsappAPI.downloadAndSaveMediaMessage(encmedian)
				cokmatane = Number(args[0])
				hah = fs.readFileSync(median)
				await WhatsappAPI.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
				fs.unlinkSync(median)
				break
			case 'robot':
				encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				medial = await WhatsappAPI.downloadAndSaveMediaMessage(encmedial)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(medial)
					if (err) return reply(mess.error.api)
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {
						mimetype: 'audio/mp4',
						duration: 359996400,
						ptt: true,
						quoted: mek
					})
					fs.unlinkSync(ran)
				})
				break
			case 'fat':
				encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediaz = await WhatsappAPI.downloadAndSaveMediaMessage(encmediaz)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediaz)
					if (err) return ephe('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {
						mimetype: 'audio/mp4',
						ptt: true,
						duration: 359996400,
						quoted: mek
					})
					fs.unlinkSync(ran)
				})
				break
			case 'reverse':
				encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediau = await WhatsappAPI.downloadAndSaveMediaMessage(encmediau)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediau)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {
						mimetype: 'audio/mp4',
						ptt: true,
						duration: 359996400,
						quoted: mek
					})
					fs.unlinkSync(ran)
				})
				break
			case 'bass':
				encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediao = await WhatsappAPI.downloadAndSaveMediaMessage(encmediao)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediao)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, hah, audio, {
						mimetype: 'audio/mp4',
						ptt: true,
						duration: 359996400,
						quoted: mek
					})
					fs.unlinkSync(ran)
				})
				break
			case 'tomp3':
				await WhatsappAPI.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('Reply to the video')
				reply(mess.wait)
				encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediad = await WhatsappAPI.downloadAndSaveMediaMessage(encmediad)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
					fs.unlinkSync(mediad)
					if (err) return reply(mess.error.api)
					mhee = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, mhee, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
				})
				break
			case 'toimg':

				if (!isQuotedSticker) return reply('reply sticker')
				encmediatoimg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WhatsappAPI.downloadAndSaveMediaMessage(encmediatoimg)
				ran = getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Failed, when converting sticker to image')
					imageBuffer = fs.readFileSync(ran)
					WhatsappAPI.sendMessage(from, imageBuffer, image, {quoted: mek, caption: 'Here'})
					fs.unlinkSync(ran)
				})
				break
			case 'tts':
				try {
					if (args.length > 1) {
						const gtts = require('./lib/gtts')(args[0])
						if (args.length < 2) return WhatsappAPI.sendMessage(from, 'Where is the text bro??', text, {quoted: mek})
						ngab = body2.slice(7)
						ranm = getRandom('.mp3')
						rano = getRandom('.ogg')
						ngab.length > 600
							? reply('The text is too much bro, max words 600')
							: gtts.save(ranm, ngab, function () {
								exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
									fs.unlinkSync(ranm)
									buff = fs.readFileSync(rano)
									if (err) return reply('Failed bro:(')
									WhatsappAPI.sendMessage(from, buff, audio, {quoted: mek, ptt: true})
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
								WhatsappAPI.sendMessage(from, buff, audio, {quoted: mek, ptt: true})
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
					owgi = await WhatsappAPI.downloadMediaMessage(boij)
					res = await upload(owgi)
					reply(res)
				} else {
					reply('send/reply pictures/videos')
				}
				break



			//══════════[ STICKER FEATURES ]══════════//
			case 'attp':
			case 'attp2':
			case 'ttp':
			case 'ttp-gradient':
			case 'attp-gradient':
			case 'attp-gradient2':
				if (!c) return reply(`Where is the text bro?\nExample :\n${prefix}attp DogeBot`)
				atetepe12 = await getBuffer(`https://violetics.pw/api/canvas/${command}?apikey=${viokey}&text=${encodeURIComponent(c)}`)
				if (!atetepe12) return reply("There's an error.");
				WhatsappAPI.sendMessage(from, atetepe12, sticker, {quoted: mek})
				break
			case 'memegenerator':
			case 'memegen': {
				if (args.length < 1) return reply(`Reply to sticker with up and down text for example *${prefix + command}* top text|bottom text`)
				if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
				try {
					if (!isQuotedImage) return reply(`Reply To An Image!`)
					reply(mess.wait)
					myText1 = q.split('|')[0] ? q.split('|')[0] : '';
					myText2 = q.split('|')[1] ? q.split('|')[1] : '';
					let enmediaokekek = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
					const downMedia = await WhatsappAPI.downloadMediaMessage(enmediaokekek);
					imageBuffer = await uploadImages(downMedia);
					resultImage = await getBuffer(`https://api.memegen.link/images/custom/${myText1}/${myText2}.png?background=${imageBuffer}`);
					await WhatsappAPI.sendMessage(from, resultImage, image, {
						caption: '.stikerin bang',
						thumbnail: Buffer.alloc(0),
						quoted: mek
					})
					fs.unlinkSync(downMedia)
				} catch (e) {
					reply(mess.eror)
					console.log(e)
				}
			}
				break
			case 'stickermeme':
			case 'memesticker':
			case 'memestick':
			case 'stickmeme':
			case 'stcmeme':
			case 'smeme': {
				if (args.length < 1) return reply(`Send orders *${prefix + command}* DogeBot`)
				if (q.includes('|')) return reply(`Reply to an image with a caption, For Example *${prefix + command}* Xeon`)
				try {
					if (!isQuotedImage) return reply(`Reply to an image!`)
					reply(mess.wait)
					myText2 = args.join(' ');
					var enmedialel = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					var mediia = await WhatsappAPI.downloadMediaMessage(enmedialel)
					imageBuffer = await uploadImages(mediia);
					resultImage = `https://api.memegen.link/images/custom/-/${myText2}.png?background=${imageBuffer}`;
					sendStickerFromUrl(from, `${resultImage}`)
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
				const media2 = await WhatsappAPI.downloadAndSaveMediaMessage(encmediaoo1, `./sticker/${sender}`)
				const packname = ppp.split('|')[0]
				const author = ppp.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply(mess.error.api)
					await WhatsappAPI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
					fs.unlinkSync(media2)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
			case 'stickerwm':
			case 'swm':
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					ppp = `${args.join(' ')}`
					const encmedia9191 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedia9191, `./sticker/${sender}`)
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
								await WhatsappAPI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
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
					const media = await WhatsappAPI.downloadAndSaveMediaMessage(encmediaokekak, `./sticker/${sender}`)
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
								WhatsappAPI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftex})
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
				emoji.get(`${args.join(' ')}`).then(emoji => {
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
					const media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedialoli)
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
							WhatsappAPI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedialoli22 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await WhatsappAPI.downloadAndSaveMediaMessage(encmedialoli22)
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
							WhatsappAPI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
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
			case 'stcmemepic':
			case 'stickermemepic':

				if (args.length < 1) return reply(`Send orders *${prefix + command}* top text|bottom text`)
				if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
				try {
					if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY PICTURE OR STICKER!!`)
					reply(mess.wait)
					myText1 = q.split('|')[0] ? q.split('|')[0] : '';
					myText2 = q.split('|')[1] ? q.split('|')[1] : '';
					const imgbb = require('imgbb-uploader');
					const enmediahe1 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
					media = await WhatsappAPI.downloadAndSaveMediaMessage(enmediahe1);
					imageBuffer = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media);
					resultImage = await getBuffer(`https://api.memegen.link/images/custom/${myText1}/${myText2}.png?background=${imageBuffer.display_url}`);
					WhatsappAPI.sendMessage(from, resultImage, image, {quoted: mek})
					fs.unlinkSync(media)
				} catch (e) {
					return reply(`${e}`)
					console.log(e)
				}
				break

			//══════════[ FUN FEATURES ]══════════//
			case 'rate':
			case 'ship':
				let rate = body.slice(1)
				const ra = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				await WhatsappAPI.sendMessage(from, 'Question : *' + rate + '*\n\nAnswer : ' + te + '%', text, {quoted: mek})
				break
			case 'can':
				bisakah = body.slice(1)
				const bisa = ['Can', 'Cant', 'Try again', 'Are you dreaming?', 'Are you sure you can?']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				WhatsappAPI.sendMessage(from, 'Question : *' + bisakah + '*\n\nAnswer : ' + keh, text, {quoted: mek})
				break
			case 'when':
				kapankah = body.slice(1)
				const kapan = ['Tomorrow', 'The day after tomorrow', 'Earlier', '4 Days', '5 Days', '6 Days', '1 Week Again', '2 Weeks Again', '3 Weeks Again', '1 Month Again', '2 Months', '3 Months', '4 Months', '5 Months', '6 Months Again']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				WhatsappAPI.sendMessage(from, 'Question : *' + kapankah + '*\n\nAnswer : ' + koh, text, {quoted: mek})
				break
			case 'is':
				apakah = body.slice(1)
				const apa = ['Yes', 'No', 'Could be', 'I dont know lmao', 'Ask the Chicken']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				WhatsappAPI.sendMessage(from, 'Question : *' + apakah + '*\n\nAnswer : ' + kah, text, {quoted: mek})
				break
			case 'stupid': case 'foolish': case 'smart': case 'ape': case 'noob':
			case 'great': case 'horny': case 'asshole': case 'handsome':
			case 'beautiful': case 'cute': case 'kind': case 'ugly': case 'pretty':
			case 'chutiya': case 'nibba': case 'nibbi': case 'bhosdiwala':
			case 'randibaaz': case 'topibaaz': case 'nerd':
			case 'hot':
				// case 'sexy':
				if (!isGroup) return reply(mess.only.group)
				membr = []
				const pff = groupMembers
				const go = groupMembers
				const goo = pff[Math.floor(Math.random() * pff.length)]
				const oe = go[Math.floor(Math.random() * go.length)]
				myText = `*The most ${command} here is:* @${goo.jid.split('@')[0]}`
				membr.push(goo.jid)
				mentions(myText, membr, true, {quoted: mek})
				break
			case "couple":
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				myText = `Ciee.. whats happening here @${akuu.jid.split('@')[0]} ♥️👀 @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(myText, jds, true)
				break
			case 'handsomecheck':
				ganteng = body.slice(1)
				const gan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				WhatsappAPI.sendMessage(from, 'Question : *' + ganteng + '*\n\nAnswer : ' + teng + '%', text, {quoted: mek})
				break
			case 'beautycheck':
				cantik = body.slice(1)
				const can = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
				const tik = can[Math.floor(Math.random() * can.length)]
				WhatsappAPI.sendMessage(from, 'Question : *' + cantik + '*\n\nAnswer : ' + tik + '%', text, {quoted: mek})
				break
			case 'charactercheck':
				watak = body.slice(1)
				const wa = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'patient', 'UwU', 'top, anyway', 'Helpful', 'chutiya', 'topibaaz', 'pro-comder', 'dassi', 'panji', 'bhakt']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				WhatsappAPI.sendMessage(from, 'Question : *' + watak + '*\n\nAnswer : ' + tak, text, {quoted: mek})
				break
			case "girl":
				if (!isGroup) return reply(mess.only.group)
				const proff = groupMembers
				// const go = groupMembers
				const foo = proff[Math.floor(Math.random() * proff.length)]
				membr = []
				myText = `*Ask  @${foo.jid.split('@')[0]} if she is ready for you....*`
				membr.push(foo.jid)
				mentions(myText, membr, true, {quoted: mek})
				break
			case "boy":
				if (!isGroup) return reply(mess.only.group)
				const joff = groupMembers
				// const go = groupMembers
				const khoo = joff[Math.floor(Math.random() * joff.length)]
				membr = []
				myText = `*Ask  @${khoo.jid.split('@')[0]} if he is ready for you....*`
				membr.push(khoo.jid)
				mentions(myText, membr, true, {quoted: mek})
				break

			//══════════[ OWNER FEATURES ]══════════//
			case 'bc':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Where is the text?')
				anu100 = await WhatsappAPI.chats.all()
				if (isMedia && !WhatsappAPI.message.videoMessage || isQuotedImage) {
					const encmediaboomb = isQuotedImage ? JSON.parse(JSON.stringify(WhatsappAPI).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : WhatsappAPI
					bc100 = await WhatsappAPI.downloadMediaMessage(encmediaboomb)
					for (let _ of anu100) {
						WhatsappAPI.sendMessage(_.jid, bc100, image, {
							quoted: fgi,
							caption: `*「 Doge Bot Broadcast 」*\n\n${body.slice(4)}`
						})
					}
					reply('Broadcast success')
				} else {
					for (let _ of anu100) {
						WhatsappAPI.sendMessage(_.jid,
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
									jpegThumbnail: fakeImage,
								}
							}, MessageType.buttonsMessage)
					}
					reply('Broadcast success')
				}
				break
			case 'bc2':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('The text?')
				anubc2 = await WhatsappAPI.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia12345 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await WhatsappAPI.downloadMediaMessage(encmedia12345)
					for (let _ of anubc2) {
						WhatsappAPI.sendMessage(_.jid, buff, image, {viewOnce: true, caption: `${body.slice(4)}`})
					}
					reply(`Broadcast success ${body.slice(4)}`)
				} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmediaki = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await WhatsappAPI.downloadMediaMessage(encmediaki)
					for (let _ of anubc2) {
						WhatsappAPI.sendMessage(_.jid, buff, video, {viewOnce: true, caption: `${body.slice(4)}`})
					}
					reply(`Broadcast success ${body.slice(4)}`)
				} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmediadirk = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await WhatsappAPI.downloadMediaMessage(encmediadirk)
					for (let _ of anubc2) {
						WhatsappAPI.sendMessage(_.jid, buff, video, {
							mimetype: Mimetype.gif,
							quoted: finv,
							contextInfo: {forwardingScore: 508, isForwarded: true},
							caption: `${body.slice(4)}`
						})
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
					bcgc = await WhatsappAPI.downloadMediaMessage(encmediabcgc)
					for (let _ of groupMembers) {
						WhatsappAPI.sendMessage(_.jid, bcgc, image, {caption: `*「 DOGE BOT BROADCAST 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
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
				anuclearall = await WhatsappAPI.chats.all()
				WhatsappAPI.setMaxListeners(25)
				for (let _ of anuclearall) {
					WhatsappAPI.deleteChat(_.jid)
				}
				textImg('Successfully deleted all chat')
				break
			case 'setbotpp':
			case 'setppbot':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (!isQuotedImage) return reply(`Send a picture with a caption ${prefix}setppbot or tag images that have already been sent`)
				enmediaheheh = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await WhatsappAPI.downloadAndSaveMediaMessage(enmediaheheh, './database/sampah/media_user')
				await WhatsappAPI.updateProfilePicture(botNumber, media)
				reply('Thank you for the new profile photo, my dear owner 😚')
				break
			case 'setbotbio':
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('The text?')
				iyek = body.slice(8)
				WhatsappAPI.setStatus(`${iyek}`)
				reply(`Success changing bio to ${body.slice(8)}`)
				break
			case 'setbotname':

				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
				anuoke112 = body.slice(11)
				WhatsappAPI.updateProfileName(anuoke112)
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
				if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && body2.length > 10) {
					myText = body.slice(8)
					oi1 = myText.split('|')[0]
					oi2 = myText.split('|')[1]
					if (Number(oi2) >= 50) return reply('Max 50!')
					if (!Number(oi2)) return reply('The number must be a number!')
					for (let i = 0; i < oi2; i++) {
						WhatsappAPI.sendMessage(from, `${oi1}`, MessageType.text)
					}
				} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && body2.length < 10) {
					myText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					if (!Number(args[0])) return reply('Amount must be a number!')
					if (Number(args[0]) >= 50) return reply('Max 50!')
					for (let i = 0; i < args[0]; i++) {
						WhatsappAPI.sendMessage(from, myText, MessageType.text)
					}
				} else if (isQuotedSticker) {
					encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					median = await WhatsappAPI.downloadAndSaveMediaMessage(encmedian)
					anutospem = fs.readFileSync(median)
					if (!Number(args[0])) return reply('Amount must be a number!')
					if (Number(args[0]) >= 50) return reply('Max 50!')
					for (let i = 0; i < args[0]; i++) {
						WhatsappAPI.sendMessage(from, anutospem, sticker)
					}
				} else if (isQuotedAudio) {
					encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediat = await WhatsappAPI.downloadAndSaveMediaMessage(encmediat)
					anutospem2 = fs.readFileSync(mediat)
					if (!Number(args[0])) return reply('Amount must be a number!')
					if (Number(args[0]) >= 50) return reply('Max 50!')
					for (let i = 0; i < args[0]; i++) {
						WhatsappAPI.sendMessage(from, anu2spem2, audio, {
							mimetype: 'audio/mp4',
							duration: 359996400,
							ptt: true
						})
					}
				} else if (isQuotedImage) {
					boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					delb = await WhatsappAPI.downloadMediaMessage(boij)
					myText = body.slice(6)
					oi1 = myText.split('|')[0]
					oi2 = myText.split('|')[1]
					if (Number(oi2) >= 50) return reply('Max 50!')
					if (!Number(oi2)) return reply('Amount must be a number!')
					for (let i = 0; i < oi2; i++) {
						WhatsappAPI.sendMessage(from, delb, MessageType.image, {caption: oi1})
					}
				}
				break
			case 'leaveall':
				if (!isOwner) return reply(mess.only.owner)
				let totalgroup = WhatsappAPI.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
				for (let id of totalgroup) {
					sendMess(id, 'byee!', null)
					WhatsappAPI.groupLeave(id)
				}
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
					WhatsappAPI.groupCreate(argz[0], anucgc)
					reply(`Success in creating a group ${argz[0]}`)
				}
				break
			case 'getbio':
				var yy = mek.message.extendedTextMessage.contextInfo.participant
				var p = await WhatsappAPI.getStatus(`${yy}`, MessageType.text)
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
				pictt = await WhatsappAPI.getProfilePicture(mentioned)
				pict = await getBuffer(pictt)
				WhatsappAPI.sendMessage(from, pict, image, {quoted: mek})
				break
			case 'getname':
				var ambl = mek.message.extendedTextMessage.contextInfo.participant
				const sname = WhatsappAPI.contacts[ambl] != undefined ? WhatsappAPI.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : WhatsappAPI.contacts[ambl].notify || WhatsappAPI.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
				reply(sname)
				break
			case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (isGroupAdmins || isOwner) {
					WhatsappAPI.groupLeave(from)
				} else {
					reply(mess.only.admin)
				}
				break
			case 'getdescgc':
			case 'getdesc':

				if (!isGroup) return reply(mess.only.group)
				anugetdescgc = from
				metadete = await WhatsappAPI.groupMetadata(anugetdescgc)
				WhatsappAPI.sendMessage(from, metadete.desc, text, {quoted: mek})
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
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
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
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
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
			case 'gc':
			case 'group':
				buttonss = [{
					buttonId: `${prefix}opengc`,
					buttonText: {displayText: 'OPEN ⚙️'},
					type: 1
				}, {buttonId: `${prefix}closegc`, buttonText: {displayText: 'CLOSE ⚙️'}, type: 1}]
				const bMess = {
					contentText: 'OPEN/CLOSE\n\nGroup',
					footerText: 'Please choose one',
					buttons: buttonss,
					headerType: 1
				}
				await WhatsappAPI.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: mek})
				break
			case 'opengc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.group)
				if (!isBotGroupAdmins) return sticNotAdmin(from)
				reply(`Successful opening group ${groupName}`)
				await WhatsappAPI.groupSettingChange(from, GroupSettingChange.messageSend, false)
				break
			case 'closegc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return sticNotAdmin(from)
				reply(`Successfully closing the group ${groupName}`)
				await WhatsappAPI.groupSettingChange(from, GroupSettingChange.messageSend, true)
				break
			case 'grouplink':
			case 'gruplink':
			case 'gclink':
			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				linkgc = await WhatsappAPI.groupInviteCode(from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\n*${groupName}* group link`
				WhatsappAPI.sendMessage(from, yeh, text, {quoted: fgi})
				break
			case 'promote':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target who wants to be an admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					myText = 'Order received, you became an admin :\n'
					for (let _ of mentioned) {
						myText += `@${_.split('@')[0]}\n`
					}
					mentions(myText, mentioned, true)
					WhatsappAPI.groupMakeAdmin(from, mentioned)
				} else {
					mentions(`Order received, Promoted : @${mentioned[0].split('@')[0]} to an admin in *${groupMetadata.subject}*`, mentioned, true)
					WhatsappAPI.groupMakeAdmin(from, mentioned)
				}
				break
			case 'demote':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the admin you want to demote!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned == myJid1 || mentioned == myJid2) return reply(`*I won't demote myself.*`);
				if (mentioned.length > 1) {
					myText = 'Order received, you are not an admin anymore :\n'
					for (let _ of mentioned) {
						myText += `@${_.split('@')[0]}\n`
					}
					mentions(myText, mentioned, true)
					WhatsappAPI.groupDemoteAdmin(from, mentioned)
				} else {
					mentions(`Order received, Demoted : @${mentioned[0].split('@')[0]} to a member`, mentioned, true)
					WhatsappAPI.groupDemoteAdmin(from, mentioned)
				}
				break
			case 'demoteall':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
				members_id = members_id.filter(function (value, index, arr) {
					return value != myJid2 && value != myJid1;
				});
				WhatsappAPI.groupDemoteAdmin(from, members_id)
				break
			case 'promoteall':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
				WhatsappAPI.groupMakeAdmin(from, members_id)
				break
			case 'add':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				if (args.length < 1) return reply('Who wants to be added??')
				if (args[0].startsWith('08')) return reply('Use country code bro')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					await WhatsappAPI.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					reply('Failed to add target, maybe because in private')
				}
				break
			case "kick":

				if (!isGroup) return reply(mess.only.group);
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				if (
					mek.message.extendedTextMessage === undefined ||
					mek.message.extendedTextMessage === null
				)
					return reply("Tag the target you want to kick!");
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
				if (mentioned == myJid1 || mentioned == myJid2) return reply(`*I won't kick myself.*`);
				if (mentioned.length > 1) {
					WhatsappAPI.groupRemove(from, mentioned);
					reply(mess.success);
				} else if (mentioned.length < 1) {
					anukick = mek.message.extendedTextMessage.contextInfo.participant;
					WhatsappAPI.groupRemove(from, [anukick]);
					reply(mess.success);
				} else {
					WhatsappAPI.groupRemove(from, mentioned);
					reply(mess.success);
				}
				break;
			case 'tagall':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isGroupAdmins) return reply(mess.only.admin)
				members_id = []
				myText = (args.length > 1) ? args.join(' ').trim() : ''
				myText += '\n\n'
				for (let mem of groupMembers) {
					myText += `• @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(myText, members_id, true)
				break
			case 'setname':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				WhatsappAPI.groupUpdateSubject(from, `${body.slice(9)}`)
				WhatsappAPI.sendMessage(from, `\`\`\`Success ✅, Renamed the group to\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
				break
			case 'setdesc':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				WhatsappAPI.groupUpdateDescription(from, `${body.slice(9)}`)
				WhatsappAPI.sendMessage(from, `\`\`\`Success ✅, Changing group description\`\`\` *${groupMetadata.subject}* Became: *${body.slice(9)}*`, text, {quoted: fgi})
				break
			case 'setgrouppp':
			case 'setgruppp':
			case 'setpp':

				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				if (isQuotedImage) {
					let encmediasetppgc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let media = await WhatsappAPI.downloadMediaMessage(encmediasetppgc)
					WhatsappAPI.updateProfilePicture(from, media)
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
					var pic = await WhatsappAPI.getProfilePicture(from)
				} catch {
					var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
				}
				let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*Group ID :* ${from}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner :* @${groupMetadata.owner.split('@')[0]}\n*Number of Admins :* ${groupAdmins.length}\n*Number of participants :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
				WhatsappAPI.sendMessage(from, await getBuffer(pic), image, {
					quoted: mek,
					caption: ingfo,
					contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}
				})
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
				if (!isBotGroupAdmins) return reply(mess.only.BotAdmin)
				json = ['action', 'inviteReset', from]
				WhatsappAPI.query({json, expect200: true})
				reply('Successfully Reset Group Link')
				break
			case 'online':
			case 'onlinelist':
			case 'listonline':
			case 'here':
				if (!isGroup) return reply(`Only group`)
				try {
					let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
					let online = [...Object.keys(WhatsappAPI.chats.get(ido).presences), WhatsappAPI.user.jid]
					WhatsappAPI.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, {
						quoted: mek,
						contextInfo: {mentionedJid: online}
					})
				} catch (e) {
					reply(`${e}`)
				}
				break
			case 'tagall':
			case 'tag':
				if (!isGroup) return reply(mess.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin and bot owner can use this feature')
				members_id = []
				myText = (args.length > 1) ? body.slice(8).trim() : ''
				myText += '\n\n'
				for (let member of groupMembers) {
					myText += `🐶 @${member.jid.split('@')[0]}\n`
					members_id.push(member.jid)
				}
				mentions(myText, members_id, true)
				break
			case 'totag':
			case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin and bot owner can use this feature')
				if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
					encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WhatsappAPI.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					group = await WhatsappAPI.groupMetadata(from);
					member = group['participants'];
					mem = [];
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					options = {
						contextInfo: {mentionedJid: mem},
						quoted: mek
					};
					ini_buffer = fs.readFileSync(file)
					WhatsappAPI.sendMessage(from, ini_buffer, sticker, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WhatsappAPI.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					group = await WhatsappAPI.groupMetadata(from);
					member = group['participants'];
					mem = [];
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					options = {
						contextInfo: {mentionedJid: mem},
						quoted: mek
					};
					ini_buffer = fs.readFileSync(file)
					WhatsappAPI.sendMessage(from, ini_buffer, image, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
					encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WhatsappAPI.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					group = await WhatsappAPI.groupMetadata(from);
					member = group['participants'];
					mem = [];
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					options = {
						mimetype: 'audio/mp4', duration: 359996400,
						ptt: true,
						contextInfo: {mentionedJid: mem},
						quoted: mek
					};
					ini_buffer = fs.readFileSync(file)
					WhatsappAPI.sendMessage(from, ini_buffer, audio, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
					encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WhatsappAPI.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					group = await WhatsappAPI.groupMetadata(from);
					member = group['participants'];
					mem = [];
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					options = {
						mimetype: 'video/gif',
						contextInfo: {mentionedJid: mem},
						quoted: mek
					};
					ini_buffer = fs.readFileSync(file)
					WhatsappAPI.sendMessage(from, ini_buffer, video, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
					encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WhatsappAPI.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					group = await WhatsappAPI.groupMetadata(from);
					member = group['participants'];
					mem = [];
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					options = {
						mimetype: 'text/plain',
						contextInfo: {mentionedJid: mem},
						quoted: mek
					};
					ini_buffer = fs.readFileSync(file)
					WhatsappAPI.sendMessage(from, ini_buffer, document, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
					encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await WhatsappAPI.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					group = await WhatsappAPI.groupMetadata(from);
					member = group['participants'];
					mem = [];
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					options = {
						mimetype: 'video/mp4', duration: 359996400,
						contextInfo: {mentionedJid: mem},
						quoted: mek
					};
					ini_buffer = fs.readFileSync(file)
					WhatsappAPI.sendMessage(from, ini_buffer, video, options)
					fs.unlinkSync(file)
				} else {
					reply(`reply image/document/gif/sticker/audio/video with caption ${prefix}totag`)
				}
				break
			case 'listadmin':
			case 'adminlist':

				if (!isGroup) return reply(mess.only.group)
				myText = `Admin list of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
					no += 1
					myText += `${no.toString()}. @${admon.split('@')[0]}\n`
				}
				mentions(myText, groupAdmins, true)
				break
			case 'ownergrup':
			case 'ownergroup':

				if (!isGroup) return reply(mess.only.group)
				options = {
					text: `Here is the group owner : https://wa.me/${from.split("-")[0]}`,
					contextInfo: {mentionedJid: [from]}
				}
				WhatsappAPI.sendMessage(from, options, text, {quoted: mek})
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
					sendContact(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendContact(from, argzu[0], argzu[1])
				}
				break
			case "hi":
				reply("*Hi, how's your day goin!*")

			//━━━━━━━━━━━━━━━[ THE END OF ALL FEATURES ]━━━━━━━━━━━━━━━━━//

			default:
				if (isOwner) {
					if (body2.startsWith('$')) {
						if (!mek.key.fromMe && !isOwner) return
						qur = body2.slice(2)
						exec(qur, (err, stdout) => {
							if (err) return reply(`${err}`)
							if (stdout) {
								reply(stdout)
							}
						})
					}
					if (isOwner) {
						if (body2.startsWith('>')) {
							console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
							try {
								let evaled = await eval(body2.slice(2))
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
			WhatsappAPI.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {
				contextInfo: {
					forwardingScore: 508,
					isForwarded: true,
					externalAdReply: {
						title: "Dream Guy Xeon",
						body: "Dont forget to subscribe Xeon",
						previewType: "PHOTO",
						thumbnail: fs.readFileSync('./media/dogepic1.jpg'),
						sourceUrl: "https://wa.me/916909137213"
					}
				}
			})
		}
		// console.log(e)
	}
}
