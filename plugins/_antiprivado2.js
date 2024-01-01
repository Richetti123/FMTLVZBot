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
//INICIO lineas por Kurt18
const numCelularReenvioImg = "56945086055" //Agregar numero a reenviar Img Ej: 51987000222
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
            `✅HOLA CREADORA GERI BONITA<3, NUEVO PEDIDO EN CURSO✅\n\nCOMUNIQUESE CON LA PERSONA SU NUMERO ES wa.me/${m.sender.split`@`[0]}`,
            m,
            true
        );
        m.reply("*⏳GRACIAS POR SU COMPRA, SE ESTA PROCESANDO SU PAGO⏳*\n\n*✅EN BREVES MOMENTOS SE COMUNICARA UNO DE NUESTROS VENDEDORES CONTIGO✅*");
        user.fechaActualBD = fechaActualNum;  
        return;
    }
}
//user.fechaActualBD = 0; //test (luego eliminar)

  return !1;
                  }
