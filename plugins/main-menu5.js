import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `✘ 『 👻𝗦𝗔𝗞𝗨𝗥𝗔-𝗛𝗘𝗟𝗣👻 』 ✘

*🧚‍♂️𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗠𝗗_𝗩1.0🧚‍♂️*
┏━━━━━━━━━━━━━━━━━━⦂⦁⦁
┃ 𝗖𝗬𝗕𝗘𝗥-𝗕𝗢𝗧_𝗗𝗘𝗠𝗢𝗡𝗦_𝗧𝗘𝗔𝗠
┗━━━━━━━━━━━━━━━━━━⦂⦁⦁
⚡• *කොහොමද බොට්ව බාවිතා කරන්නේ ???*

💈 *බොට්ගේ සියලූම  විදාන ලැයිස්තුව ලබාගැනීම සදහා .allmenu ලෙස යොදන්න එවිට බොට්ගේ සියලූම කොමාන්ඩ් ලැයිස්තුවක් ලෙස ලැබේ...*

⚡• *බොට්ගේ වෙනත් ආකාරයට විස්තර සහිතව වෙන් වෙන්ව විදාන ලැයිස්තු ලබාගැනීමට පහත පියවර අනුගමනය කරන්න....*

💈 *_ownermenu හෝ ownmenu_*  *ලෙස යෙදීම මගින් බොට්ගේ හිමිකරු සදහා අදාලවන  විදාන  ලැයිස්තුව ලබාගත හැකිය...*

💈 *_downloadmenu හෝ dlmenu_* *ලෙස යෙදීම මගින් බොට්ගේ සියලූම බාගතකරගැනීමේ විදාන ලැයිස්තුව ලැබේ...*

💈 *_groupmenu හෝ gpmenu_* *ලෙස යෙදීම මගින් සමූහ සදහා අදාලවන සියලූම විදාන ලැයිස්තුව ලැබේ ....*

💈 *_toolmenu හෝ tlmenu_* *ලෙස යෙදීම මගින් සියලූම පරිවර්තන මෙනු ලැයිස්තුව ලැබේ ...*

💈 *_searchmenu හෝ shmenu_* *ලෙස යෙදීම මගින් සියලූම සෙවීම් සදහා අදාල වන මෙනු ලැයිස්තුව ලැබේ .....*

🧚‍♂️ *𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗠𝗗*  *බාවිත කල ඔබට අපගේ ස්තූතිය....*

*🪀2023 𝗻𝗲𝘄 𝘃𝗲𝗿𝘀𝗶𝗼𝗻.......*
👻 𝗪𝗔_𝗕𝗢𝗧........`

    let pp = './src/fg_logo.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('👻') 
}

handler.help = ['help']
handler.tags = ['main']
handler.command = ['help', 'sakura'] 

export default handler
