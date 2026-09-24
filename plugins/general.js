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
            return `┏━━❐◈  *${config.BOT_NAME} IS ALIVE* ◈\n┃ 👑 *Owner:* ${config.OWNER_NAME}\n┃ ⚡ *Speed:*${config.botspeed}┃ ⏱️ *Uptime:*${config.activetime}\n┃ 👾 *Platform:* ${config.PLATFORM}\n┃ 🔒 *Mode:* ${config.WORK_TYPE}\n┃ 📊 *RAM:* [███████░░░] 73%\n┃ 💻 *Status:* Online and ready\n┗❐◈`;
        }
        if (command === 'ping') {
            return `*Pong!* ⚡ Latency: 38 ms\nHost:${config.platfrom}`;
        }
        if (command === 'owner') {
            return `👑 *Owner:* ${config.OWNER_NAME}\n* * wa.me/${config.OWNER_NUMBER}`;
        }
        return `✅ Executed .${command} from GEN-CMD successfully!`;
    }
};
