exports.wait = () => {
	return`「 WAIT 」`

}

exports.succes = () => {
	return`「 SUKSES 」`
}

exports.lvlon = () => {
	return`「 LEVELEING AKTIF 」`
}

exports.lvloff = () => {
	return`「 LEVELEING MATI 」`
}

exports.premium = () => {
	return`「 UPGRADE PREMIUM 」`
}

exports.menu = (namabot, nama, time, prefix) => {
	return`╭──────❲ *INFO BOT* ❳
│ ✫ *NamaBot :* ${namabot}
│ ✫ *Sc ori :* Farhan-js
│ ✫ *Recode :* ${nama}
│ ✫ *Time :* ${time}
╰─────────────❲ *•* ❳

╭──────❲ *OWNER MENU* ❳
│ ✫ *${prefix}bc* <query>
│ ✫ *${prefix}bcgc* <query>
│ ✫ *${prefix}clearall*
│ ✫ *${prefix}block* <tag>
│ ✫ *${prefix}unblock* <tag>
│ ✫ *${prefix}clone* <number>
│ ✫ *${prefix}setppbot* <tag>
│ ✫ *${prefix}setreplay* <query>
│ ✫ *${prefix}setprefix* <query>
│ ✫ *${prefix}addprem* <tag>
│ ✫ *${prefix}dellprem* <tag>
│ ✫ *${prefix}ban* <tag>
│ ✫ *${prefix}unban* <tag>
│ ✫ *${prefix}event* <1/0>
╰─────────────❲ *•* ❳

╭──────❲ *OWNER MENU* ❳
│ ✫ *${prefix}welcome* <1/0>
│ ✫ *${prefix}leveling* <1/0>
│ ✫ *${prefix}nsfw* <1/0>
│ ✫ *${prefix}antilinkgrup* <1/0>
│ ✫ *${prefix}grup* <buka/tutup>
│ ✫ *${prefix}add* <number>
│ ✫ *${prefix}kick*
│ ✫ *${prefix}hedsot*
│ ✫ *${prefix}linkgrup*
│ ✫ *${prefix}promote*
│ ✫ *${prefix}demote*
│ ✫ *${prefix}setname*
│ ✫ *${prefix}setdesc*
│ ✫ *${prefix}leave*
│ ✫ *${prefix}tagall*
│ ✫ *${prefix}admin*
│ ✫ *${prefix}level*
│ ✫ *${prefix}fitnah*
│ ✫ *${prefix}hidetag*
╰─────────────❲ *•* ❳

╭──────❲ *SOUND MENU* ❳
│ ✫ *${prefix}blub*
│ ✫ *${prefix}bass*
│ ✫ *${prefix}gemuk*
│ ✫ *${prefix}cefat*
╰─────────────❲ *•* ❳

╭──────❲ *LIMITER MENU* ❳
│ ✫ *${prefix}buylimit* <count>
│ ✫ *${prefix}limit*
╰─────────────❲ *•* ❳

╭──────❲ *GAME MENU* ❳
│ ✫ *${prefix}mencing*
│ ✫ *${prefix}mancing2*
╰─────────────❲ *•* ❳
`

}

exports.lvlnul = () => {
	return`「 LVL : 0 」`
}

exports.lvlnoon = () => {
	return`「 LEVEL MATI 」`
}

exports.noregis = () => {
	return`「 AKUN TIDAK DI KETAHUI 」

kamu belum terdaftar dalam bot ini , kamu blm ada dalam database bot ini
maka dari itu anda harus daftar dengan 

ketikan : ${prefix}verify namamu,umurmu
`
}

exports.baned = () => {
	return`「 TIDAK MENYETUJUI TINDAKAN 」

kamu telah terbanned , kamu tidak bisa menggunakan fitur bot ini
sampai masa hukuman mu selesai , chat owner untuk mengetahui brapa sisa waktunya
`
}

exports.rediregis = () => {
	return`「 TIDAK MENYETUJUI TINDAKAN 」

kami mengetahui bahwa anda sudah terdaftar di bot
`
}

exports.stikga = () => {
	return`「 FAILED : FITUR EROR 」`
}

exports.linkga = () => {
	return`「 FAILED : LINK TIDAK VALID 」`
}

exports.groupo = () => {
	return`「 FAILED : FITUR KHUSUS GRUP 」`
}

exports.ownerb = () => {
	return`「 FAILED : TIDAK MEMILIKI IZIN 」`
}

exports.ownerg = () => {
	return`「 FAILED : HANYA UNTUK OWNER 」`
}

exports.admin = () => {
	return`「 FAILED : KHUSUS ADMIN GRUP 」`
}

exports.badmin = () => {
	return`「 FAILED : BOT NO ADMIN 」

jadikan bot menjadi admin grup agar bisa melakukan fitur grup admins
`
}

exports.nsfwoff = () => {
	return`「 FAILED : NSFW TIDAK AKTIF 」`
}

exports.bug = () => {
	return`「 FAILED : FITUR BUG 」`
}

exports.wrongf = () => {
	return`「 FAILED : QUERY SALAH 」`
}

exports.clears = () => {
	return`「 FAILED : BERHASIL MENGCLEAR 」`
}

exports.pc = () => {
	return`「 MSG : ! 」`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`「 VERIFY SUKSES 」

Nama ➸ ${namaUser}
Umur ➸ ${umurUser}
Time ➸ ${time}

Serial ? ${serialUser}`
}

exports.cmdnf = (prefix, command) => {
	return`「 404 : COMMAND TIDAK DITEMUKAN 」`
}

exports.owneresce = (pushname) => {
	return`「 FAILED : ${pushname} BUKAN OWNER 」`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`「 FAILED : LIMIT TELAH HABIS;( 」`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
*sisa limit anda :* _${limitCounts}_`
}

exports.satukos = () => {
	return`「 LU PAKE SC FHANS BERGUNA KEK AJG 」`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
