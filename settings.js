//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is Hot Bot
My Creator is Gagana Paraya😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+94714290151'] //Owner number in aive msg
global.premium = ['+94714290151'] //Owner Number info
global.ownernomer = '+94714290151' //Owner Number <<<

global.ownername = 'Gagana Paraya' //Owner Name
global.botname = ' Hot Bot' //Bot Name

global.button = 'Hot Bot' //Costomize A Button Name In Alive Message
global.btnurl = 'https://www.gamelivestory.com/images/article/overwatch-tracers-10-best-quotes-article-image6.webp' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = 'Hot Bot' //Bot Pacage Name
global.author = 'Gagana Paraya' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Kumuthu.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false


global.ig = 'https://github.com/' //Github Account!

global.mess = { // cOSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Sathutui da ✅',
    admin: 'Admin Only Hutto',
    botAdmin: 'Mata Admin denna AIYOO',
    owner: 'Ownerta witarai yako',
    group: 'Group ekak newei meka',
    private: 'Hutto meka group ekak',
    bot: 'Oka Mata witarai puluwan',
    wait: 'Iwasapan Yako',
    error: 'API Ekaka awlak aiyo!',
    endLimit: 'Paya 12kin wara',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
