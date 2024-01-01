// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;

if (/^menu de ventas|menú de ventas|ventas$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Hola buenas, tenemos a la venta:
🔸Bot de etiquetas para grupos 24/7
🔸Bot de etiquetas propio personalizado
🔸APK de spam
🔸APK de seguidores
🔸Números de chip chilenos +56
🔸APK de Spotify premium

Selecciona tu opción escribiendo lo que necesites

EJEMPLO:
bot de etiquetas
bot personalizado
chips +56
APK de spam
APK de Spotify premium
APK de seguidores`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot de etiquetas|bot para grupos|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos por 3 grupos por 3 meses de duración:
S/15🇵🇪
$5000🇨🇱
$4500🇦🇷
$18000🇨🇴
$80🇲🇽
$5🇺🇸
$35🇧🇴
$35000🇵🇾
$160🇺🇾`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot personalizado|bot propio personalizado|bot de etiquetas propio personalizado|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para bot propio personalizado:
S/20🇵🇪
$6000🇨🇱
$6000🇦🇷
$25000🇨🇴
$120🇲🇽
$6🇺🇸
$50🇧🇴
$45000🇵🇾
$220🇺🇾`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^números de chip chilenos +56|chip chilenos +56|chips +56|info del chip|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para números de chip +56:
S/6🇵🇪
$1500🇨🇱
$1500🇦🇷
$8000🇨🇴
$30🇲🇽
$2🇺🇸
$15🇧🇴
$14000🇵🇾
$60🇺🇾`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de spam|APK para spam|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para APK de spam:
S/10🇵🇪
$4000🇨🇱
$3000🇦🇷
$14000🇨🇴
$60🇲🇽
$4🇺🇸
$30🇧🇴
$25000🇵🇾
$110🇺🇾`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de Spotify premium|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para APK de Spotify premium:
S/10🇵🇪
$4000🇨🇱
$3000🇦🇷
$14000🇨🇴
$60🇲🇽
$4🇺🇸
$30🇧🇴
$25000🇵🇾
$110🇺🇾`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de seguidores|APK para seguidores|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Estos son los precios que tenemos para APK de seguidores:
S/10🇵🇪
$4000🇨🇱
$3000🇦🇷
$14000🇨🇴
$60🇲🇽
$4🇺🇸
$30🇧🇴
$25000🇵🇾
$110🇺🇾`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot de etiquetas|bot para grupos|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🤖El bot de etiquetas para grupos 24/7 es un bot que contiene comandos como stickers, musica, etiqueta general,  inteligencia artificial(chatgpt), y esta activo siempre, es mas rapido que cualquier otro ya que pagamos un servicio para mantenerlo siempre activo y eficiente`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot personalizado|bot propio personalizado|bot de etiquetas propio personalizado|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🤖El bot de etiquetas propio personalizado incluye lo mismo que el bot para grupos, con la diferencia que este puede personalizarse, lleva tu nombre, tu numero como moderador del bot, tu instagram, tu foto o logo, y la etiqueta general es personalizada tambien`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^números de chip chilenos +56|chip chilenos +56|chips +56|info del chip|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🪪Los numeros de chip chilenos +56 son numeros que te permitiran registrarlos en whatsapp, telegram, google, instagram o en la red social de tu preferencia, lo mejor de todo es que te servira como una segunda cuenta de whatsapp, y podras pedir codigo al numero cuando mas lo necesites`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de spam|APK para spam|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`👾El APK de spam, es un APK que te permite ser tu propio spamer y hacer llegar tu producto a mas personas, viene de regalo con 1500 comunidades para hacer tu spam mas efectivo`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^APK de Spotify premium|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🎶El APK de spotify premium es un APK que te permitira disfrutar de todas las funciones premium de spotify, sin necesidad de pagar mensualmente ya que este APK es permanente, podras escuchar musica ilimitadamente, saltar las canciones que desees, descargar tus playlists y sobre todo no tendras anuncios molestos`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de seguidores|APK para seguidores|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`👾El APK de seguidores es un APK que te permitira ganar seguidores de una manera rapida y sencilla, te ayudara a tener mas alcance en tus redes y tus publicaciones llegaran a mas personas`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bot de etiquetas|bot para grupos|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Si, deseo continuar con la compra
*Si no desea adquirir ningun producto escriba:*
No, muchas gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^bot personalizado|bot propio personalizado|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Si, deseo continuar con la compra
*Si no desea adquirir ningun producto escriba:*
No, muchas gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^números de chip chilenos +56|chip chilenos +56|chips +56|precios|info del chip|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Si, deseo continuar con la compra
*Si no desea adquirir ningun producto escriba:*
No, muchas gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de Spotify premium|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Si, deseo continuar con la compra
*Si no desea adquirir ningun producto escriba:*
No, muchas gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de seguidores|APK para seguidores|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Si, deseo continuar con la compra
*Si no desea adquirir ningun producto escriba:*
No, muchas gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^APK de spam|APK para spam|precios|info del bot|informacion|informacion del bot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🤔¿DESEA CONTINUAR CON LA COMPRA?🤔*
Para poder brindarle los datos para realizar el pago

*Si desea adquirir algun producto escriba:*
Si, deseo continuar con la compra
*Si no desea adquirir ningun producto escriba:*
No, muchas gracias`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^deseo continuar|si quiero comprar$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Selecciona tu método de pago por favor:
Argentina🇦🇷
Perú🇵🇪
Chile🇨🇱
Colombia🇨🇴
México🇲🇽
Estados Unidos🇺🇸
Bolivia🇧🇴
Paraguay🇵🇾
Uruguay🇺🇾`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^no, muchas gracias|no quiero comprar|no muchas gracias$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*🫶GRACIAS A USTED, VUELVA PRONTO🫶*
En caso se arrepienta de su decisión, puede volver a interactuar con nuestro chatbot dentro de una hora

Que tenga lindo dia<3`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bolivia🇧🇴|🇧🇴$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇧🇴 BOLIVIA

🏦 TIGO MONEY
77348066
JOSELIN OSINAGA LOPEZ

🏦 YAPE:
76852005
ANA AMADOR`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^perú🇵🇪|peru🇵🇪|🇵🇪|perú|peru$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇵🇪 PERU
TITULAR: JAIR GONZALES 

YAPE
933348947

PLIN
955095498

BCP
19177757684012
CCI: 00219117775768401250

INTERBANK
8983383526827
CCI: 00389801338352682746`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^mexico|méxico|mexico🇲🇽|méxico🇲🇽|🇲🇽$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇲🇽 MEXICO
TITULAR: ESMERALDA MIRELES

🏦 BANCO AZTECA
5165760411850620

🏦 BANCO STP
646700146401786732

🏦 BANCO BANORTE
072700012100058870`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^colombia|colombia🇨🇴|🇨🇴$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇨🇴 COLOMBIA
TITULAR: Juan Rudas

🏦 NEQUI
3005371659`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^uruguay|uruguay🇺🇾|🇺🇾$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`URUGUAY 🇺🇾

PREX
Gaston Juarez
1691414`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paraguay|paraguay🇵🇾|🇵🇾$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇵🇾 PARAGUAY 🇵🇾
TITULAR: EVELYN FUNES

🏦 TIGO MONEY
+595985316988

🏦 BANCO VISIÓN
Nro: 3978084`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paypal|estados unidos🇺🇸|🇺🇸$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇺🇸 PAY PAL
Edithchuyes@gmail.com


💥 EN NOTA PONER:
Declaro que este dinero enviado desde NOMBRE DEL CLIENTE  hacia Edith Tatiana Chuyes Silva  es totalmente legal, y declaro que el pago no es reembolsable bajo ninguna circunstancia. Soy el titular responsable de este envío de USD.`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^chile|chile🇨🇱|🇨🇱$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇨🇱Cta rut : 
18.255.399-9
👤Nombre:
Priscila aguila`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^argentina|argentina🇦🇷|🇦🇷$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`🇦🇷Argentina
0000003100098738089352
Facundo pinchulef`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^bolivia🇧🇴|🇧🇴$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^perú🇵🇪|peru🇵🇪|🇵🇪|perú|peru$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^mexico|méxico|mexico🇲🇽|méxico🇲🇽|🇲🇽$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^colombia|colombia🇨🇴|🇨🇴$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^uruguay|uruguay🇺🇾|🇺🇾$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paraguay|paraguay🇵🇾|🇵🇾$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paypal|estados unidos🇺🇸|🇺🇸$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^chile|chile🇨🇱|🇨🇱$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^argentina|argentina🇦🇷|🇦🇷$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*UNA VEZ REALIZADA LA TRANSFERENCIA ENVIAR LA FOTO DEL PAGO CON EL SIGUIENTE TEXTO:*

*✅PAGO REALIZADO✅*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^¿que es un bot?|Que es un bot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩?::☆
┆——————«•»——————
┆ 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬
┆ 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
┆ 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 
┆ 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 
┆ 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 
┆ 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 
┆ 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐥 𝐦𝐞𝐧𝐮́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu
┆ 
┆ 「 MichiBot 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

           
