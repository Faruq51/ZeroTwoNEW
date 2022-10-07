let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Mau Esceh??? 」
│ • Sc ini Private bang
│ • Pc gw wa.me/6285807264974
╰────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler