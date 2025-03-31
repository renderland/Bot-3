import { EmbedBuilder } from 'discord.js';
import { log } from '../../vite';

export const name = 'guildMemberRemove';
export const once = false;

export async function execute(member, client) {
  try {
    log(`Üye ayrıldı: ${member.user.tag}`);
    
    const goodbyeChannelName = process.env.GOODBYE_CHANNEL || 'goodbye';
    
    const goodbyeChannel = member.guild.channels.cache.find(
      channel => channel.name === goodbyeChannelName
    );
    
    if (!goodbyeChannel) {
      log(`"${goodbyeChannelName}" çıkış kanalı ${member.guild.name} sunucusunda bulunamadı`);
      return;
    }
    
    const goodbyeEmbed = new EmbedBuilder()
      .setColor('#ED4245') // Kırmızı renk
      .setTitle('Üye Ayrıldı')
      .setDescription(`**${member.user.tag}** aramızdan ayrıldı.`)
      .setThumbnail(member.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: `Şu an üye sayısı: ${member.guild.memberCount}` });
    
    await goodbyeChannel.send({ embeds: [goodbyeEmbed] });
    log(`${member.user.tag} için çıkış mesajı gönderildi`);
  } catch (error) {
    log(`guildMemberRemove olayında hata: ${error}`);
  }
}
