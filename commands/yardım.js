const { EmbedBuilder, Client,  ActionRowBuilder, ButtonBuilder} = require('discord.js');
const config = require("../config")
  
    exports.run = async(client, message , args, embed) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const button1 = new ButtonBuilder().setCustomId('kayit').setLabel("Kayıt Yardım Menüsü").setStyle(2)
        const button2 = new ButtonBuilder().setCustomId('yonetici').setLabel("Yönetici Yardım Menüsü").setStyle(2)
        const button3 = new ButtonBuilder().setCustomId('iptal').setLabel("İptal Et").setStyle(4)
      


        const row = new ActionRowBuilder()
        .addComponents([button1,button2,button3])
      
let ayven = new EmbedBuilder()
.setAuthor({ name: `${message.guild.name} Yardım Paneli`})
.setColor("#030303")
.setThumbnail(message.guild.iconURL())
.setFooter({ text: (config.footer)})
.setDescription(`
**${config.prefix}kayıt**
**${config.prefix}kayıtsız**
**${config.prefix}isim**
`)

let ayven2 = new EmbedBuilder()
.setAuthor({ name: `${message.guild.name} Yardım Paneli`})
.setColor("#030303")
.setThumbnail(message.guild.iconURL())
.setFooter({ text: (config.footer)})
.setDescription(`
**${config.prefix}perm**
**${config.prefix}say**
**${config.prefix}sil**
**${config.prefix}yardım**
`)



 let msg = await message.channel.send({ content : `> **Aşşağıdaki butonlara basarak yardım paneline ulaşabilirsiniz**`, components: [row]})

 var filter = (button) => button.user.id === message.author.id;
 let collector = await msg.createMessageComponentCollector({ filter, time: 60000 })

collector.on("collect", async (button) => {

if(button.customId === "kayit") {
await message.delete();
await message.channel.bulkDelete(10);
message.channel.send({embeds: [ayven]})
}
if(button.customId === "yonetici") {
await message.delete();
await message.channel.bulkDelete(25);
message.channel.send({embeds: [ayven2]})
}
if(button.customId === "iptal") {
await message.delete();
msg.edit({ content:`> Yardım Panelini İptal ettiniz`, embeds: [], components: [] }).then((e) => setTimeout(() => { e.delete(); }, 5000));

}
      })
  }

  exports.conf = {
    aliases: ["yardım","help","h","y"]
  };
  
  exports.help = {
    name: "yardım"
  };