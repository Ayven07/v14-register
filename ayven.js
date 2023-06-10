const { Client, GatewayIntentBits, Partials, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
const config = require("./config.js");
const client = new Client({
  partials: [
    Partials.Message, 
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent, 
    Partials.User, 
    Partials.ThreadMember, 
  ],
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations, 
    GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.GuildInvites, 
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildPresences, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions, 
    GatewayIntentBits.DirectMessageTyping, 
    GatewayIntentBits.MessageContent, 
  ],
});

module.exports = client;



require("./events/message.js")

require("./events/ready.js")

client.login(config.token)
const { joinVoiceChannel } = require('@discordjs/voice')
client.on('ready', () => {
  let channel = client.channels.cache.get(config.botses) 
      console.log("Bot Sese başarıyla bağlandı")
      const VoiceConnection = joinVoiceChannel({
          channelId: channel.id, 
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator 
  });
})
//-----------------Şüpheli-hesap-----------------\\
client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
  const kytsz = member.guild.roles.cache.find(r => r.id === ayarlar.kayıtsız)
   var rol = member.guild.roles.cache.get(ayarlar.süpheli) // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.cache.get(kytsz) 
   member.roles.add(rol)
   member.roles.remove(kytsz)

member.user.send(' > Selam dostum sunucumuza hoş geldin fakat hesabın yeni açıldığı için seni şüpheliye attık.')
setTimeout(() => {

}, 1000)


   }
        else {

        }
    });
//-----------------Hoş-Geldin-Mesaj-----------------\\
client.on("guildMemberAdd", async member => {
  let ayvenkayıt = (config.kayıtsız)
      member.roles.add(ayvenkayıt).catch(err => {})
      });
const kanal = (config.hgkanal)
client.on("guildMemberAdd", member => {
  require("moment-duration-format")
   
  const kanal = member.guild.channels.cache.find(r => r.id === (config.hgkanal)); 
  
  let user = client.users.cache.get(member.id);
  var moment = require("moment")
  require("moment-duration-format");
  moment.locale("tr");



  let memberGün = moment(member.user.createdAt).format("DD");
  let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
  let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");

  var üyesayısı = member.guild.memberCount.toString().replace(/ /g, "    ")
        var üs = üyesayısı.match(/([0-9])/g)
        üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
        if(üs) {
          üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
            return {
              '0': `0`,//Kardeşim Buraya emoji koyabilirsin
              '1': `1`,
              '2': `2`,
              '3': `3`,
              '4': `4`,
              '5': `5`,
              '6': `6`,
              '7': `7`,
              '8': `8`,
              '9': `9`}[d];
            })
          }       
member.roles.add(config.kayıtsız)
const kurallar = member.guild.channels.cache.get(config.kurallar);
const giris = member.guild.channels.cache.get(config.giriscıkıs);
member.setNickname(config.name)
const ayvenbuton = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('ayven').setLabel(config.footer).setStyle(2).setDisabled(true))
kanal.send({ content:`
**${member.guild.name}** İsimli Sunucumuza Hoş Geldin ${member}
Seninle beraber sunucumuz **${üyesayısı}** üye sayısına ulaştı. :tada:
  
Hesabın __${memberGün} ${memberAylar} ${memberTarih}__ tarihinde (<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>) oluşturulmuş
Kayıt işleminden sonra ${kurallar} kanalına göz atmayı unutmayın. <@&${config.registerstaff}> Rolündeki Yetkililerimiz Sizinle İlgileneceklerdir  
\`\`\`
Teyit işlemi gerçekleştikten sonra kuralları okuduğunuzu kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak uygulanacaktır.
\`\`\`
`,components:[ayvenbuton],files:[config.hosgeldingif]});})
