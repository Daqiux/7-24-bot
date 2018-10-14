const Discord = require('discord.js');

const cevaplar = [

];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir kişi belirtmeniz lazım. **Doğru Kullanım**: *uç <kişi>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'uç-deneme', 
  description: 'Milkshake 8ball sorularınızı cevaplar',
  usage: 'uç-deneme'
};
