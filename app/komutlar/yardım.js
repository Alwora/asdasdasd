const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setAuthor('Yardım Menüsü', client.user.avatarURL)
  .setDescription('**DM** kutunu kontrol et!')
  .setColor('GREEN')
  message.channel.send(yardım)
  
  
  let prefix = ayarlar.prefix
  
  
  let codeming = new Discord.RichEmbed()
  .setTitle(client.user.username +' Yardım Menüsü')
  .addField(':book: Komutlar:', `${prefix}yardım | Yardım menüsünü atar.\n${prefix}çal | Belirttiğiniz bir kullanıcıdan para çalarsınız.\n${prefix}puan-ver | Belirtilen kişiye belirtilen parayı(puanı) verir.\n${prefix}puan - para | belirtilen kişinin Puan(para) miktarını atar.\n${prefix}kumar | Kumar oynarsınız,oyun sonunda  paranızı 2x yaparsınız ya da 2x kaybedersiniz.\n${prefix}günlük | Günlük paranızı alırsınız.\n${prefix}satın-al | bir şeyler alırsınız.\n${prefix}gönder | belirttiğiniz kişiye belirttiğiniz miktarda para gönderirsiniz.\n ${prefix}emoji-yakalamaca | Seçtiğiniz kişiyle emoji yakalamaca oynarsınız.Kazanan 100 para alır.`)
  .setFooter('CodEming')
  .setColor('RANDOM')
  message.author.send(codeming)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'yardım'
};
