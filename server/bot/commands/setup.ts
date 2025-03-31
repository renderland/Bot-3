import { EmbedBuilder } from 'discord.js';

export const data = {
  name: 'kanalayarla',
  description: 'Giriş ve çıkış kanallarını ayarlamaya yardımcı olur',
};

export function execute(message, args) {
  // Check if user has admin permissions
  if (!message.member.permissions.has('ADMINISTRATOR')) {
    return message.reply('Bu komutu kullanmak için yönetici yetkilerine sahip olmanız gerekiyor.');
  }

  if (args.length < 2) {
    return message.reply('Kullanım: ?kanalayarla <giriş-kanalı> <çıkış-kanalı>');
  }

  const welcomeChannelName = args[0];
  const goodbyeChannelName = args[1];
  
  // Check if the channels exist
  const welcomeChannel = message.guild.channels.cache.find(
    channel => channel.name === welcomeChannelName && channel.type === 0
  );
  
  const goodbyeChannel = message.guild.channels.cache.find(
    channel => channel.name === goodbyeChannelName && channel.type === 0
  );

  if (!welcomeChannel) {
    return message.reply(`"${welcomeChannelName}" isimli bir kanal bulunamadı. Lütfen geçerli bir kanal ismi girin.`);
  }

  if (!goodbyeChannel) {
    return message.reply(`"${goodbyeChannelName}" isimli bir kanal bulunamadı. Lütfen geçerli bir kanal ismi girin.`);
  }
  
  // Update environment variables in memory (this will be lost on restart)
  process.env.WELCOME_CHANNEL = welcomeChannelName;
  process.env.GOODBYE_CHANNEL = goodbyeChannelName;
  
  const setupEmbed = new EmbedBuilder()
    .setColor('#5865F2')
    .setTitle('Hoş Geldin Botu Ayarları')
    .setDescription('Sunucunuz giriş ve çıkış mesajları için ayarlandı:')
    .addFields(
      { 
        name: '1. Giriş Kanalı', 
        value: `Giriş mesajları "#${welcomeChannelName}" kanalına gönderilecek.` 
      },
      { 
        name: '2. Çıkış Kanalı', 
        value: `Çıkış mesajları "#${goodbyeChannelName}" kanalına gönderilecek.` 
      },
      {
        name: '3. İzinler',
        value: 'Botun bu kanallara mesaj gönderme yetkisine sahip olduğundan emin olun.'
      }
    )
    .setFooter({ text: 'Hoş Geldin Botu' })
    .setTimestamp();

  message.reply({ embeds: [setupEmbed] });
}
