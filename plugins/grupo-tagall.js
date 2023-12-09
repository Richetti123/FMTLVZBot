const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*🌟𝙈𝙚𝙧𝙧𝙮 𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨🌟* ${pesan}`
let teks = `*😸𝘎𝘖𝘎𝘖! 𝘈𝘤𝘵𝘪𝘷𝘦𝘯𝘴𝘦𝘦.. 𝘗𝘜𝘛𝘟𝘚!😼*\n\n${oi}\n*🩵@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒𝖉𝖟𝖓*\n`
for (let mem of participants) {
teks += `☃️❄️ @${mem.id.split('@')[0]}\n`}
teks += `MichiBot`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
