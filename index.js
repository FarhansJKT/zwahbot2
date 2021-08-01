/*
===============================================
BANNER BY AMELIA ^-^
       ╔╗ ┌─┐┌┬┐       ╔═╗┌─┐┬  ┌─┐┌─┐
       ╠╩╗│ │ │   ───  ╠═╝│ ││  │ │└─┐
       ╚═╝└─┘ ┴        ╩  └─┘┴─┘└─┘└─┘

[   DILARANG KERAS MENGHAPUS NAMA AUTHOR   ]

===============================================
   LICENSEE : MIT | © FARHANJS - GABUTMENT
===============================================

-- TERIMAKASIH SOURCE CODE & INSPIRATOR :

                ~ ADIWAJSING/BAILEYS
		~ MR108P
		~ NAYLACANS
		~ ARNANDO
		~ ZEEONE OFC
		~ FARHAN JS
		~ RAMLAN ID
		~ ALL CREATOR BOT WHATSAPP

-- FITUR BOT MENTAHAN :

		~ OWNER_MENU
		~ STICKER
		~ GROUP MENU
		~ PENGUBAH SUARA

-- EROR BUG?
		SEND BUG / EROR IN REPOSITORY
		~ https://github.com/Riripii/zwahbot

===============================================
                    ABOUT
===============================================

Script ini di ciptakan buat kalian yang males
bikin bot dari awal dan emng pada malesan si
wkwkwk,

tujuan up cuma buat kang case:v
tambahin case sendiri bebas la lu mau apa
gua cuma nyediain case bot biasa

ingat jangan merubah nama atau menghapus
nama author, itu sangat mengsedih

ngrecode tu yang bener biar ga eror

===============================================
*/

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/group/color')
const { donasi } = require('./lib/group/donasi')
const { fetchJson } = require('./lib/group/fetcher')
const { recognize } = require('./lib/group/ocr')
const set = JSON.parse(fs.readFileSync('./src/Farhanjs/recode.json'))
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/group/functions')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const isUrl = (ini_url) => {
                return ini_url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const ffmpeg = require('fluent-ffmpeg')
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const cd = 4.32e+7
const Removebg = require('removebg-id')
const { zw } = require('./lib/reply')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Farhanjs\n' // UBAH AE
            + 'ORG: owner-zwah;\n' // UBAH AE
            + 'TEL;type=CELL;type=VOICE;waid=6281393668101:+62 813-9366-8101\n' // GANTI NOMOR LU COK
            + 'END:VCARD'

prefix = set.prefix
namabot = set.namabot
blocked = [] // JANGAN DI UBAH
limitawal = set.limitawal
memberlimit = set.memberlimit
nama = set.nama
rdaftar = set.daftar
rmenu = set.menu
botinfo = set.info
fake = set.fake
authors = set.authors
namas = set.namas
cr = set.cr

// TAB : GAME MODULE
tempat = ["Sungai","Laut","Empang pak slamet","Danau","Rawa"]
ikan = ["🦑","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐚","🪱","🐙","🦐","🐟","🐟","🐟","🐟","🐟","🐟","🐡","🐡","🦞","🦞","🦞","🦞"]
temfat = tempat[Math.floor(Math.random() * (tempat.length))] 
dafat = ikan[Math.floor(Math.random() * (ikan.length))] 
mulai = `*Anda Akan memancing di ${temfat}*`
pancing = `*──────────────────❲---❳*`
tali = `|`
kail = `╰❲ ${dafat} ❳`

// TAB : FITUR PASARAN
const ownerNumber = ["6281393668101@s.whatsapp.net"] 
const premium = ["6281393668101@s.whatsapp.net","6281247374916@s.whatsapp.net"] // TAMBAHIN SENDIRI

const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const _leveling = JSON.parse(fs.readFileSync('./lib/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./lib/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./lib/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./lib/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./lib/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./lib/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./lib/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./lib/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./lib/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./lib/group/antilink.json'))
const _afk = JSON.parse(fs.readFileSync('./lib/user/afk.json'))
const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
} = require('./lib/group/afk.js')

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }
        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })           
            if (position !== false) {           	
                _level[position].xp += amount
                fs.writeFileSync('./lib/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./lib/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./lib/user/level.json', JSON.stringify(_level))
        }

         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./lib/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./lib/user/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./lib/user/uang.json', JSON.stringify(uang))
            }
        }
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./lib/user/limit.json', JSON.stringify(_limit))
            }
        }
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./lib/user/uang.json', JSON.stringify(uang))
            }
        }
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./lib/user/limit.json', JSON.stringify(_limit))
            }
        }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

// TAB : CONNECTION
const zwah = new WAConnection()
zwah.version = [2, 2119, 6]
zwah.logger.level = 'warn'
console.log(banner.string)
   zwah.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' SCAN QR IN WHATSAPP WEB'))
})

	zwah.on('credentials-updated', () => {
		fs.writeFileSync('./zwah.json', JSON.stringify(zwah.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'LOADING')
	})
	fs.existsSync('./zwah.json') && zwah.loadAuthInfo('./zwah.json')
	zwah.on('connecting', () => {
		start('2', 'LOADING')
	})
	zwah.on('open', () => {
		success('2', 'MENUNGGU PESAN...')
	})
	zwah.connect({timeoutMs: 30*1000})
zwah.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await zwah.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await zwah.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*welcome to group @${num.spli('@')[0]} 👋`
				let buff = await getBuffer(ppimg)
				zwah.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await zwah.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = fs.readFileSync('./src/Farhanjs/depresod.jpg')
				}
				teks = `*see you again @${num.split('@')[0]} 👋*`
				let buff = await getBuffer(ppimg)
				zwah.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	zwah.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
zwah.on('messages-update', async (mek) => {
	try {
		const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./antidelete/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? zwah.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync(`./antidelete/msg.data.json`))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? zwah.user.jid : zwah.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? zwah.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				zwah.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await zwah.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				zwah.sendMessage(from, strConversation, MessageType.text, opt4tag)
				zwah.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await zwah.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}*
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				zwah.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
	zwah.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			let infoMSG = JSON.parse(fs.readFileSync('./src/data/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/data/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/data/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = zwah.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = zwah.contacts[sender] != undefined ? zwah.contacts[sender].vname || zwah.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await zwah.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isPrem = premium.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				zwah.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				zwah.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? zwah.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : zwah.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    zwah.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			zwah.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    zwah.sendMessage(from, audio, mp3, {quoted:mek})
		    }
function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}
//level
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(zw.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
//limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return zwah.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text,{ quoted: mek})
                            zwah.sendMessage(from, zw.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./lib/user/limit.json', JSON.stringify(_limit))
                        zwah.sendMessage(from, zw.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    zwah.sendMessage(from, zw.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./lib/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            zwah.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('admin bebas bos😎')
		        zwah.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("iya gpp , jan spam link ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        zwah.groupRemove(from, [kic]).catch((e)=>{reply(`*NICO HARUS JADI ADMIN├в┬ЭтАФ*`)})
		        }, 3000)
		        setTimeout( () => {
			        zwah.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        zwah.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        zwah.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mZWAH EXEC\x1b[1;37m]', time, color(command), 'FROM', color(sender.split('@')[0]), 'ARGS :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mZWAH RECV\x1b[1;37m]', time, color('Message'), 'FROM', color(sender.split('@')[0]), 'ARGS :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mZWAH EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'IN', color(groupName), 'ARGS :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch(command) {
// TAB : DASBOARD
case 'help':
case 'menu':
pict = fs.readFileSync('./src/Farhanjs/depresod.jpg')
F = zw.menu(namabot, nama, time, prefix)
zwah.sendMessage(from, pict, image, {quoted: mek, caption: F})
break

// TAB : MINI GAME
case 'memancing':
case 'mancing':
reply(mulai)
reply(pancing)
reply(tali)
reply(tali)
reply(tali)
reply(tali)
reply(tali)
reply(kail)
break
case 'memancing2':
case 'mancing2':
reply(mulai)
reply(pancing)
reply(tali)
reply(tali)
reply(tali)
reply(tali)
reply(tali)
reply(kail)
break

// TAB : JANGAN RUBAH BAGIAN INI
case 'afk':
	           if (!isGroup) return reply(zw.groupo())
	           if (isAfkOn) return reply(zw.afkOnAlready())
	           if (isLimit(sender)) return reply(zw.limitend(pushname))
	            limitAdd(sender)
	              reason = body.slice(5)
					if (reason === undefined || reason === ' ' || reason === '') { reason = 'nothing'}
	                addAfkUser(sender, time, reason)
	                reply(zw.afkOn(pushname, reason))
	            break
	case 'daftar':
         case 'daftar':
         case 'verify':
	          	if (isRegistered) return  reply(zw.rediregis())
                if (!q.includes(',')) return  reply(zw.wrongf())
                const namaUser = q.substring(0, q.indexOf(',') - 0)
                const umurUser = q.substring(q.lastIndexOf(',') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
					try {
					ppimg = await zwah.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = fs.readFileSync('./src/Farhanjs/depresod.jpg')
					}
					captionnya = zw.registered(namaUser, umurUser, serialUser, time, sender, botName)
					addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    console.log(color('saveDataReg'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                    depresod = await getBuffer(ppimg)
					zwah.sendMessage(from, depresod, image, {quoted: mek, caption: captionnya})
	break

// TAB : MENU

				case 'sticker':
				if (!isRegistered) return reply(zw.noregis())
				if (isLimit(sender)) return reply(zw.limitend(pusname))
				await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zwah.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`CONVERT .ICO --> .WEBP`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(zw.stikga)
							})
							.on('end', function () {
								console.log('CONVERT FHINISH')
								exec(`webpmux -set exif ${addMetadata('zwahbot', 'sticker')} ${ran} -o ${ran}`, async (error) => {
									zwah.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await zwah.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(zw.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`CONVERT .MP4 --> .WEBP`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('zwahbot', 'sticker')} ${ran} -o ${ran}`, async (error) => {
									zwah.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}stc atau tag gambar dengan message ${prefix}stc`)
					}
					break
// TAB : OWNER
case 'mining':
                      if (isLimit(sender)) return reply(zw.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`kamu mendapatkan ${one}`)
                      }else{
                     const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
					case 'info':
					me = mukty.user
					uptime = process.uptime()
					teks = `*Namabot* : *Zwah*\n*OWNER* : *Farhanjs*\n*AUTHOR* : zwah\n*Nomor Bot* : 6281247374916\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					zwah.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'admin':
            case 'owner':
            case 'creator':
                  zwah.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  zwah.sendMessage(from, 'CHAT UNTUK TANYA TANYA ATAU JOIN CONTRIBUTOR',MessageType.text, { quoted: mek} )
                     break
                     case 'listnotoxic':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
case 'addnotoxic':
                    if (!isOwner) return reply(zw.ownerb())
                    if (!isGroupAdmins) return reply(zw.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addnotoxic [kata kasar]. contoh ${prefix}addnotoxic bego`)
                    const add = body.slice(12)
                  .push(bw)
                    fs.writeFileSync('./lib/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'dellnotoxic':
                    if (!isOwner) return reply(zw.ownerb())
                    if (!isGroupAdmins) return reply(zw.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addnotoxic [kata kasar]. contoh ${prefix}addnotoxic bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./lib/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus No Toxic')
                    break
case 'notoxic':
                  if (!isGroup) return reply(zw.groupo())
                if (!isGroupAdmins) return reply(zw.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                 return reply('*fitur NoToxic sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./lib/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./lib/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(zw.satukos())
                	}
                    break
                case 'addprem':
					if (!isOwner) return reply(zw.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./lib/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan wa.me/${addp} Ke Daftar Premium`)
					break
				case 'dellprem':
					if (!isOwner) return reply(zw.ownerb())
					delp = body.slice(11)
					premium.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./lib/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break					
				case 'bc':
					mukty.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(zw.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await zwah.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await zwah.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zwah.sendMessage(_.jid, buff, image, {caption: `*「 BC BOT 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(zw.ownerb())
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await zwah.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zwah.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`})
						}
						reply('*「 SUKSES BOSKU 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
					case 'setreply':
					if (!isOwner) return reply(zw.ownerb())
                    mukty.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(zw.ownerb())
					prefix = args[0]
					reply(`*「 SUKSES 」* Prefix jadi ➸ : ${prefix}`)
					break
				case 'clearall':
					if (!isOwner) return reply(zw.ownerb())
					anu = await mukty.chats.all()
					zwah.setMaxListeners(25)
					for (let _ of anu) {
	mukty.deleteChat(_.jid)
					}
					reply(zw.clears())
					break
			       case 'block':
				 mukty.updatePresence(from, Presence.composing) 
				 mukty.chatRead (from)
					if (!isGroup) return reply(zw.groupo())
					if (!isOwner) return reply(zw.ownerb())
					zwah.blockUser (`${body.slice(7)}@c.us`, "add")
					zwah.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(zw.groupo())
					if (!isOwner) return reply(zw.ownerb())
				    mukty.blockUser (`${body.slice(9)}@c.us`, "remove")
				        zwah.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(zw.ownerb())
				    zwah.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zwah.downloadAndSaveMediaMessage(enmedia)
					await zwah.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya bosku😗')
					break
				case 'clone':
					if (!isGroup) return reply(zw.groupo())
					if (!isOwner) return reply(zw.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await zwah.getProfilePicture(id)
						buffer = await getBuffer(pp)
						zwah.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(zw.stikga())
					}
					await limitAdd(sender)
					break
                case 'ban':
					if (!isOwner) return reply(zw.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./lib/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(zw.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./lib/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break

//  TAB : LIMITER 
case 'limit':
		if (!isRegistered) return reply(zw.noregis())
				if (isBanned) return reply(zw.baned())
				   
				   checkLimit(sender)
					break
				case 'transfer':
                  if (!isRegistered) return reply(zw.noregis())
				if (isBanned) return reply(zw.baned())				
				
				if (!q.includes(',')) return  reply(zw.wrongf())
                const tujuan = q.substring(0, q.indexOf(',') - 1)
                const jumblah = q.substring(q.lastIndexOf(',') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6281247374916@s.whatsapp.net', fee)
                reply(`*⟪ SUKSES ⟫*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
                break
				case 'atm':
                  if (!isRegistered) return reply(zw.noregis())
				if (isBanned) return reply(zw.baned())				
				
				const kantong = checkATMuser(sender)
				reply(zw.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
                  if (!isRegistered) return reply(zw.noregis())
				if (isBanned) return reply(zw.baned())				
				
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`uang kagak cukup`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : zwah\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
				}
				break

// TAB : SOUND EDITOR
case 'blub':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zwah.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zwah.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zwah.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zwah.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zwah.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					zwah.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'cefat':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zwah.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3/m4a/ptt')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.4,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('NGEN(uh)')
						hah = fs.readFileSync(ran)
						zwah.sendMessage(from, hah, audio, {mimetype: 'audio/mp3/ptt/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
	case 'tomp3':
                if (isBanned) return reply(mess.only.benned)
                	zwah.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya kak ❌')
					reply(zwah.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m'))
					media = await zwah.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						zwah.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				default:
if (body.startsWith(`${prefix}${command}`)) {
                  reply(`*404* command tidak ditemukan`)
                  }
if (body.startsWith(`${prefix}${command}`)) {
			}
			if (!isGroup && !isCmd) {
				//reply(zw.cmdnf(prefix, command))
					} else {
						console.log(color('404','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
