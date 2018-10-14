const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setColor(0x00ffff)
        .addField("Yenilikler Hakkında", "**Yardım komutu güncellenmiştir ve prefix güncellenmiştir")
		.addField("Denemek İçin;", "**[:help]**",) 
		.setImage("https://media.istockphoto.com/vectors/cute-confetti-shot-cartoon-vector-id691785534")
   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yenilikler', 
  description: 'Yeniliklerin ne olduğunu söyler.',
  usage: 'yenilikler'
};
