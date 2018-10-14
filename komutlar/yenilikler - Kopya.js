const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setColor(0x00ffff)
        .addField("**İşte Mustafa Ceceli.**", true)
		.setImage("data:image/jpeg;base64,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")
   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'mustafaceceli', 
  description: 'Mustafa Cecelinin resmini gösterir.',
  usage: 'mustafaceceli'
};