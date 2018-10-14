const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**Eğlence!**")
  .setDescription('')
  .setColor(0x00ffff)
.addField("**:video_game: :Eğlence Komutları: :video_game:**", ` emojiyazı = emojiyazı yazmanızı sağlar. \n bot-yaz = Yazıyı bot yazmış gibi gösterir. \n döner-kes = Döner keser. \n küfür = istediğiniz kişiye küfür eder. \n uç = istediğiniz kişiye uçar. \n tokat-at = İstediğiniz kişiye tokat atar. \n tkm = Taş kağat makas oynatır. \n banned = Dene ve Gör! \n avatarım = Avatarınınızı Gösterir. \n 8ball = Fire'S 8ball sorularınızı cevaplar. \n herkesebendençay = Herkese Çay Alırsınız. \n koş = Koşarsınız.\n çayiç = Çay İçersiniz. \n çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n çayaşekerat = Çaya Şeker Atarsınız. \n yumruk-at = Yumruk Atarsınız. \n yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n sunucuresmi = BOT Sunucunun Resmini Atar. \n sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n yenilikler = Yenlikler Hakkında Bilgi Verir.`)
  
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
  aliases: ['e', 'eğ', '1'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};
