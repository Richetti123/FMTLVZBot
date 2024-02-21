const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*🌤️@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒* ${pesan}`
let teks = `*😸𝙈𝙞𝙘𝙝𝙞𝙗𝙤𝙩 𝙩𝙚 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙡𝙖𝙣𝙩𝙖😼*\n${oi}\n\n*✨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `☀️⛱️ @${mem.id.split('@')[0]}\n`}
teks += `MichiBot`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
