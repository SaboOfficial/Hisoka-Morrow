/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Sabo',
}

// Other
global.owner = ['6282145203493']
global.premium = ['6282145203493']
global.packname = 'Sabo'
global.author = 'Sabo - MD'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*_Done Ngab_*',
    admin: '*_Khusus Admin Deck, Lu Ngapain Coba? Awoakwoak_*',
    botAdmin: '*_Mikir Dek Bot Ga Admin_*',
    owner: '*_Khusus Owner Deck, Lu Ngapain Coba? Awoakwoak_*',
    group: '*_Cuman Bisa Di Group Deck_*',
    private: '*_Cuman Bisa Di Private Message Deck_*',
    bot: '*_Fitur Khusus Pengguna Bot Deck_*',
    wait: '*_Sabar Deck..._*',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
