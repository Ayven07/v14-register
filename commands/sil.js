const { EmbedBuilder, Client,  ActionRowBuilder, ButtonBuilder} = require('discord.js');

  
    exports.run = async(client, message , args, embed) => {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return;

        const button1 = new ButtonBuilder().setCustomId('on').setLabel("10").setStyle(2)
        const button2 = new ButtonBuilder().setCustomId('yirmibes').setLabel("25").setStyle(2)
        const button3 = new ButtonBuilder().setCustomId('elli').setLabel("50").setStyle(2)
        const button4 = new ButtonBuilder().setCustomId('yüz').setLabel("100").setStyle(2)
        const button5 = new ButtonBuilder().setCustomId('iptal').setLabel("İptal Et").setStyle(4)
      


        const row = new ActionRowBuilder()
        .addComponents([button1,button2,button3,button4,button5])
      

        let ayven = new EmbedBuilder()
.setDescription(`
\` > \` Kaç adet mesaj sileceğinizi butonlar ile seçiniz.
`)
.setAuthor({ name: message.member.displayName, iconURL: message.member.displayAvatarURL({ dynamic: true }) })

 let msg = await message.channel.send({ content : `> Kaç adet mesaj sileceğinizi butonlar ile seçiniz.`, components: [row]})

 var filter = (button) => button.user.id === message.author.id;
 let collector = await msg.createMessageComponentCollector({ filter, time: 60000 })

collector.on("collect", async (button) => {

if(button.customId === "on") {
await message.delete();
await message.channel.bulkDelete(10);
message.channel.send({ content:`> 10 adet mesaj silindi!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));
}
if(button.customId === "yirmibes") {
await message.delete();
await message.channel.bulkDelete(25);
message.channel.send({ content:`> 25 adet mesaj silindi!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));
}
if(button.customId === "elli") {
await message.delete();
await message.channel.bulkDelete(50);
message.channel.send({ content:`> 50 adet mesaj silindi!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));
}
if(button.customId === "yüz") {
await message.delete();
await message.channel.bulkDelete(99);
message.channel.send({ content:`> 100 adet mesaj silindi!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));
}
if(button.customId === "iptal") {
await message.delete();
msg.edit({ content:`> Mesaj silme işleminden vazgeçtiniz.`, embeds: [], components: [] }).then((e) => setTimeout(() => { e.delete(); }, 5000));
}
      })
  }
  exports.conf = {
    aliases: ["sil","temizle"]
  };
  
  exports.help = {
    name: "sil"
  };