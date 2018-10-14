const Discord = require('discord.js');

const cevaplar = [
    "ananın amına molotof atıyım",
    "amına çam ağacı dikip dedesini gölgesinde siktiğim",
    "ağzına 31 çektiğim",
    "küvette alabalık götün çok kalabalık",
    "hergün su yerine dölümü üçtüğünü herkes biliyor...",
	"anasının amına anten sokup full hd porno izleyerek ağzına boşaldığım",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Birini etiketlemeniz lazım.')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'küfür', 
  description: 'Milkshake 8ball sorularınızı cevaplar',
  usage: 'küfür'
};
