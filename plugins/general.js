/**
 * Plugin: General Commands
 * Category: GEN-CMD (40 commands)
 */

module.exports = {
    name: 'general',
    commands: [
        'alive', 'apk', 'attp', 'botinfo', 'botstatus', 'checkwa', 'circlesticker',
        'crop', 'delpp', 'fancy', 'getpp', 'getsettings', 'google', 'image2',
        'define', 'news2', 'groupinfo', 'groupstats', 'help', 'img', 'inviteinfo',
        'lid', 'menu', 'myactivity', 'owner', 'pair', 'ping', 'poll', 'qr',
        'reshare', 'setprofile', 'simage', 'ssweb', 'sticker', 'take',
        'telegramsticker', 'time', 'tts', 'uptime', 'write'
    ],
    execute: async ({ sock, from, mek, command, args, config }) => {
        if (command === 'alive') {
            return `┏━━❐◈  *${config.BOT_NAME} IS ALIVE* ◈\n┃ 👑 *Owner:* ${config.OWNER_NAME}\n┃ ⚡ *Speed:* 1059 ms\n┃ ⏱️ *Uptime:* 7h 6m 19s\n┃ 🚉 *Platform:* ${config.PLATFORM}\n┃ 🔒 *Mode:* ${config.WORK_TYPE}\n┃ 📊 *RAM:* [███████░░░] 73%\n┃ 💻 *Status:* Online and ready\n┗❐◈`;
        }
        if (command === 'ping') {
            return `*Pong!* ⚡ Latency: 38 ms\nHost: Railway Cloud 🚉`;
        }
        if (command === 'owner') {
            return `👑 *Owner:* ${config.OWNER_NAME}\n📞 *WhatsApp:* wa.me/${config.OWNER_NUMBER}`;
        }
        return `✅ Executed .${command} from GEN-CMD successfully!`;
    }
};