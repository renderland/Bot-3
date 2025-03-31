import { EmbedBuilder } from 'discord.js';

export const data = {
  name: 'yardım',
  description: 'Tüm komutlar için yardım bilgilerini gösterir',
};

export function execute(message, args) {
  const prefix = process.env.PREFIX || '?';
  
  const helpEmbed = new EmbedBuilder()
    .setColor('#5865F2')
    .setTitle('Hoş Geldin Botu Yardım')
    .setDescription(`Kullanılabilir komutlar (önek: ${prefix})`)
    .addFields(
      { name: `${prefix}yardım`, value: 'Bu yardım mesajını gösterir' },
      { name: `${prefix}kanalayarla`, value: 'Giriş ve çıkış kanallarını ayarlamanıza yardımcı olur' }
    )
    .setFooter({ text: 'Hoş Geldin Botu' })
    .setTimestamp();

  message.reply({ embeds: [helpEmbed] });
}
