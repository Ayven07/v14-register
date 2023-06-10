const config = require("../config")
const db = require("quick.db");
const { ButtonBuilder, Client, Message, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require("discord.js");


exports.run = async(client, message , args) => {
    if (!message.member.roles.cache.has(config.regsiterstaf) && !message.member.permissions.has("Administrator")) return message.reply({ content : `> **Bu komutu kullanmak için register yetkin bulunmalıdır**`}).then((e) => setTimeout(() => { if(e.deletable){e.delete()}; }, 10000));


    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply({content : ` **Bir kullanıcı belirtmelisin!**`})
const ayven = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("ayven").setLabel("İsim Değiştirildi").setStyle(2).setDisabled(true))
if(member.id === message.guild.ownerID) return message.reply({content : `>  **Sunucu sahibinin ismini değiştiremezsin!**`})
if(member.roles.highest.position >= message.member.roles.highest.position) return message.reply({content :`> **Bu kullanıcı sizden üst/aynı pozsiyondadır!**`})
    
    let name = args[1]
    if(!name) return message.reply({content : `> İsim belirtmelisin.`})
    let age = args[2]
    if(!age || isNaN(age)) return message.reply({content : `> Yaş belirtmelisin. sayı belirt`})

    let Name2 = name.toLocaleLowerCase()[0].toUpperCase() + name.toLocaleLowerCase().substring(1);

    await message.guild.members.cache.get(member.id).setNickname(`${Name2} | ${age}`);
    let embed = new EmbedBuilder()
    .setColor("Random")
    .setDescription(`**\`${member.user.username}\` adlı kullanıcın ismi başarıyla \`${Name2} | ${age}\` olarak ayarlandı**`)
 .setFooter({text : (config.footer)})
 let ayven2 = new EmbedBuilder()
 .setDescription(`
 **\`${member.user.username}\` adlı kullanıcın ismi başarıyla <@${message.author.id}> tarafından \`${Name2} | ${age}\` olarak ayarlandı**
 `)
 .setAuthor({ name: member.displayName, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
 .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
 .setFooter({ text:(config.footer) })
 const kanal1 = member.guild.channels.cache.find(r => r.id === (config.registerlog)); 

    message.reply({embeds : [embed],components:[ayven]})
    kanal1.send({ embeds: [ayven2], components: [ayven] })
    }
    
    exports.conf = {
        aliases: ["isim","n","nick"]
      };
      
      exports.help = {
        name: "isim"
      };