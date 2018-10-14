const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("__Komutlar__")
  .setColor(0x00ffff)
  .addField("```Eğlence komutları [:1]```", "**Eğlence komutlarını atar.:rocket:**") 
  .addField("```Yetkili komutları [:2]```", "**Yetkili komutlarını atar.:gear:**") 
  .addField("```Ana komutlar [:3]```", "**Ana komutları atar.:scales:**")
  .addField("__Bilgiler__", "***Bot bilgileri***")
  .addField("```Yapımcı```", "**! ℛፐ ☆ ΜΣƬΣ ☆#7395**")  
  .addField("```Kuruluş Zamanı```", "**03.10.2018**")

   if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
