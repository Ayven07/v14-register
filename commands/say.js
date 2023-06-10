const { EmbedBuilder,ActionRowBuilder,ButtonBuilder } = require("discord.js");
const config = require("../config")
//client, message, args, embed, author, channel, guild

  
    exports.run = async (client, message, args, author, channel, guild) => {
      if (!message.member.permissions.has("Administrator")) return message.channel.send({ content: `${message.author} bu komutu kullanmak için \`Administrator\` yetkisine sahip olmalısın.`})
        let aktif = message.guild.members.cache.filter(member => member.presence && (member.presence.status != "offline")).size
        let uye = message.guild.memberCount
        var tag = message.guild.members.cache.filter(u => u.user.username.includes(tag)).size;
        let etiket = message.guild.members.cache.filter(u => u.user.discriminator.includes(config.etiket)).size;  
        let toplamtag = etiket + tag
        let sesli = message.guild.members.cache.filter(x => x.voice.channel).size
        let boost = message.guild.premiumSubscriptionCount;
        const ayvenbuton = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('ayven').setLabel(config.footer).setStyle(2).setDisabled(true))
        const embed = new EmbedBuilder()
        .setAuthor({ name: `${message.guild.name} Verisi`})
        .setColor("Random")
        .setFooter({ text: (config.footer)})
        .setThumbnail(message.guild.iconURL())
        .setDescription(` \`•\` Sunucumuzda **${uye}** kullanıcı bulunuyor.
        \`•\` Sunucumuzda  **${aktif}** aktif kullanıcı bulunuyor.
        \`•\` Seste **${sesli}** kullanıcı bulunuyor.
        \`•\` Sunucuda **${boost}** takviye bulunuyor.`)
    
        message.channel.send({ embeds: [embed],components:[ayvenbuton]})
    }

    exports.conf = {
      aliases: ["say"]
    };
    
    exports.help = {
      name: "say"
    };