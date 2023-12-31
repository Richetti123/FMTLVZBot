export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[this.user.jid] || {};
//INICIO lineas por Kurt18
const fechaActual = new Date();
const fechaActualNum = Date.UTC(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    fechaActual.getDate()
);
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";

let horaActualNum = Date.now();
const intervaloEsperado = 1 * 60 * 60 * 1000; // 1 hora en milisegundos
let tiempoTranscurrido = horaActualNum - user.fechaUltimoMsjInbox;

console.log(`user.fechaUltimoMsjInbox >${user.fechaUltimoMsjInbox}<`); //Luego comentar
console.log(`horaActualNum >${horaActualNum}<`); //Luego comentar
console.log(`tiempoTranscurrido >${tiempoTranscurrido}<`); //Luego comentar

if (tiempoTranscurrido >= intervaloEsperado) {
    m.reply("*🐱Hola bienvenido al chatbot de MichiBot🐱*\n\nQue se te ofrece, tenemos a la venta:\n▪️Bot de etiquetas para grupos 24/7\n▪️Bot de etiquetas propio personalizado\n▪️APK de spam\n▪️APK de seguidores\n▪️Números de chip chilenos +56\n▪️APK de Spotify premium\n\nSelecciona tu opción escribiendo lo que necesites\n\n*EJEMPLO:*\nbot de etiquetas\nbot personalizado\nchips +56\nAPK de spam\nAPK de Spotify premium\nAPK de seguidores");
    user.fechaUltimoMsjInbox = horaActualNum;
    return;
}
//user.fechaUltimoMsjInbox = 0; //test (luego eliminar)
//FIN lineas por Kurt18

  return !1;
                  }
