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
console.log(`user.fechaActualBD >${user.fechaActualBD}<`); //Luego comentar
console.log(`fechaActualNum >${fechaActualNum}<`); //Luego comentar
console.log(`mime >${mime}<`); //Luego comentar
if (user.fechaActualBD !== fechaActualNum) {  
    if (/image/g.test(mime)){
        m.reply("*⏳COMPROBANTE RECIBIDO, SE ESTA PROCESANDO TU PAGO⏳*");
        user.fechaActualBD = fechaActualNum;  
        return;
    }
}
//FIN lineas por Kurt18
//INICIO lineas por Kurt18
const numCelularReenvioImg = "56945086055" //Agregar numero a reenviar Img Ej: 51987000222
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    fechaActual.getDate()
;

console.log(`user.fechaActualBD >${user.fechaActualBD}<`); //Luego comentar
console.log(`fechaActualNum >${fechaActualNum}<`); //Luego comentar
console.log(`mime >${mime}<`); //Luego comentar

if (user.fechaActualBD !== fechaActualNum) {  
    if (/image/g.test(mime)){
        let img = await q.download?.();        
        conn.sendFile(
            `${numCelularReenvioImg}@s.whatsapp.net`,
            img,
            "img.jpg",
            "",
            m,
            true
        );
        m.reply("*⏳COMPROBANTE RECIBIDO, SE ESTA PROCESANDO TU PAGO⏳*");
        user.fechaActualBD = fechaActualNum;  
        return;
    }
}
//user.fechaActualBD = 0; //test (luego eliminar)


let horaActualNum = Date.now();
const intervaloEsperado = 1 * 60 * 60 * 1000; // 1 hora en milisegundos
let tiempoTranscurrido = horaActualNum - user.fechaUltimoMsjInbox;

console.log(`user.fechaUltimoMsjInbox >${user.fechaUltimoMsjInbox}<`); //Luego comentar
console.log(`horaActualNum >${horaActualNum}<`); //Luego comentar
console.log(`tiempoTranscurrido >${tiempoTranscurrido}<`); //Luego comentar

if (tiempoTranscurrido >= intervaloEsperado) {
    m.reply("*🐱Hola bienvenido al chatbot de MichiBot🐱*\nQue se te ofrece, tenemos a la venta:\n▪️Bot de etiquetas para grupos 24/7\n▪️Bot de etiquetas propio personalizado\n▪️APK de spam\n▪️APK de seguidores\n▪️Números de chip chilenos +56\n▪️APK de Spotify premium\nSelecciona tu opción con:\nQuiero comprar el (en lo que estes interesado)\nEjemplo: Quiero comprar el APK de spotify premium");
    user.fechaUltimoMsjInbox = horaActualNum;
    return;
}
//user.fechaUltimoMsjInbox = 0; //test (luego eliminar)
//FIN lineas por Kurt18

  return !1;
                  }
