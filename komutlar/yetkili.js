const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**Yetkili**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**:gear: :Yetkili Komutları: :gear:**", ` ban = İstediğiniz kişiyi sunucudan banlar. \n kick = İstediğiniz kişiyi sunucudan kickler. \n unban = İstediğiniz kişinin banını kaldırır. \n sustur = İstediğiniz kişiyi susturur. \n oylama = Oylama açar. \n duyuru = Güzel bir duyuru görünümü sağlar. \n reboot = Botu yeniler. `)
  
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
  aliases: ['yet', 'ye', '2'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutlarını Gösterir.',
  usage: 'yetkili'
};
