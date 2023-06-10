const { EmbedBuilder,ButtonBuilder,ActionRowBuilder } = require("discord.js");
const config = require("../config")


exports.run = async(client, message , args) => {
    if (!message.member.roles.cache.has(config.registerstaff) && !message.member.permissions.has("Administrator")) return message.reply({ content : `> **Bu komutu kullanmak için Kayıt Yetkilisi olmalısın**`}).then((e) => setTimeout(() => { if(e.deletable){e.delete()}; }, 2000));

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) { message.reply({ content : `> Önce bir kullanıcı belirt!`});
return }
if(message.author.id === member.id){ message.reply({content : `> Kendini kayıtsıza atamazsın`});
if(member.id === message.guild.ownerID) return message.reply({content : `> **Kralı kayıt edemezsin!**`})
if(member.roles.highest.position >= message.member.roles.highest.position) return message.reply({content :`> **Bu kullanıcı sizden üst/aynı pozsiyondadır!**`})
   
return}
const kanal1 = member.guild.channels.cache.find(r => r.id === (config.registerlog)); 
const kayitsiz = new ButtonBuilder().setCustomId('ks').setLabel("Başarıyla Kayıtsıza Atıldı").setStyle(2).setDisabled(true)
let ayven = new EmbedBuilder()
.setDescription(`
${member} üyesi <@${message.author.id}> tarafından, Kayıtsıza atıldı 
`)
.setAuthor({ name: member.displayName, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
.setFooter({ text:(config.footer) })

const row = new ActionRowBuilder()
.addComponents([kayitsiz])
await member.roles.cache.has(config.boosterRolu) ? member.roles.set([config.boosterRolu,config.kayıtsız]) : member.roles.set([config.kayıtsız])
await member.setNickname(config.name)
message.reply({content : `> ${member} kullanıcısı ${message.author} tarafından kayıtsıza atıldı.`, components: [row] })
kanal1.send({ embeds: [ayven], components: [row] })
    
    }
    exports.conf = {
      aliases: ["ks","kayıtsız","kayitsiz","unreg","unregister"]
    };
    
    exports.help = {
      name: "kayıtsız"
    };