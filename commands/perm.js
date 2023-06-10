const { ButtonBuilder, Client, Message, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
let ayar = require("../config.js"); 
const moment = require("moment");
require("moment-duration-format");
const client = global.bot;

  
    exports.run = async (client, message, args, embed) => {
      if (!message.member.roles.cache.has(ayar.registerstaff) && !message.member.permissions.has("Administrator")) return message.reply({ content : `> **Bu komutu kullanmak için Kayıt Yetkilisi olmalısın**`}).then((e) => setTimeout(() => { if(e.deletable){e.delete()}; }, 2000));

let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!uye) return message.reply({ content:` Örnek; .perm @Ayven/ID`});
if(message.author.id === uye.id) return message.reply({content: `Kendine Rol Veremezsin dostum!`, ephemeral: true })

const button1 = new ButtonBuilder().setCustomId('vip').setLabel("VİP ROL").setStyle(2)
const button2 = new ButtonBuilder().setCustomId('register').setLabel("REGİSTER").setStyle(2)

const row = new ActionRowBuilder()
.addComponents([button1,button2])

const msg = await message.reply({ content : `> ${uye} kullanıcısına perm eklemek için aşağıdaki butonları kullanınız`, components: [row ] });

var filter = (button) => button.user.id === message.author.id;
 let collector = await msg.createMessageComponentCollector({ filter, time: 60000 })

collector.on("collect", async (button) => {

     if (button.customId === "vip") {
        uye.roles.cache.has(ayar.vipRole) ? uye.roles.remove(ayar.vipRole) : uye.roles.add(ayar.vipRole);
        if(!uye.roles.cache.has(ayar.vipRole)) {
          
          msg.edit({ content:`Başarıyla ${uye}, isimli kişiye **Vip** rolü verildi.`, components: [] });
        } else {
          
          msg.edit({ content:`Başarıyla ${uye}, isimli kişinin **Vip** rolü geri alındı.`, components: [] });
        };
     }

     if (button.customId === "register") {
        uye.roles.cache.has(ayar.registerstaff) ? uye.roles.remove(ayar.registerstaff) : uye.roles.add(ayar.registerstaff);
        if(!uye.roles.cache.has(ayar.registerstaff)) {
          
          msg.edit({ content:`Başarıyla ${uye}, isimli kişiye **Register** rolü verildi.`, components: [] });
        } else {
          
          msg.edit({ content:`Başarıyla ${uye}, isimli kişinin **Register** rolü geri alındı.`, components: [] });
        };
     }
    })

}


exports.conf = {
  aliases: ["vip","perm","rol"]
};

exports.help = {
  name: "perm"
};