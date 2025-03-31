import { EmbedBuilder } from 'discord.js';
import { log } from '../../vite';

export const name = 'guildMemberAdd';
export const once = false;

export async function execute(member, client) {
  try {
    log(`Yeni üye katıldı: ${member.user.tag}`);
    
    const welcomeChannelName = process.env.WELCOME_CHANNEL || 'welcome';
    
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.name === welcomeChannelName
    );
    
    if (!welcomeChannel) {
      log(`"${welcomeChannelName}" giriş kanalı ${member.guild.name} sunucusunda bulunamadı`);
      return;
    }
    
    const welcomeEmbed = new EmbedBuilder()
      .setColor('#57F287') // Yeşil renk
      .setTitle('Yeni Üye!')
      .setDescription(`${member} aramıza katıldı.`)
      .setThumbnail(member.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: `Üye #${member.guild.memberCount}` });
    
    await welcomeChannel.send({ embeds: [welcomeEmbed] });
    log(`${member.user.tag} için giriş mesajı gönderildi`);
  } catch (error) {
    log(`guildMemberAdd olayında hata: ${error}`);
  }
}
