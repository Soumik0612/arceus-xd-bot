const fs = require('fs');
if (fs.existsSync('.env')) require('dotenv').config({ path: '.env' });

module.exports = {
    // BOT METADATA
    BOT_NAME: process.env.BOT_NAME || '𝗔𝗥𝗖𝗘𝗨𝗦 𝗫𝗗',
    BOT_VERSION: process.env.BOT_VERSION || 'v12.0.0',
    PLATFORM: process.env.PLATFORM || '',
    
    // OWNER DETAILS
    OWNER_NAME: process.env.OWNER_NAME || '𝗦𝗢𝗨𝗠𝗜𝗞',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '917602624961',
    SUDO: process.env.SUDO ? process.env.SUDO.split(',') : [''],

    // BOT OPERATION
    PREFIX: process.env.PREFIX || '.',
    WORK_TYPE: process.env.WORK_TYPE || 'private', // 'private' or 'public'
    PORT: process.env.PORT || 3000,
    SESSION_ID: process.env.SESSION_ID || '', // Baileys Session ID or file auth
    
    // AUTOMATIONS & SECURITY
    AUTO_READ: process.env.AUTO_READ === 'true',
    AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW !== 'false',
    AUTO_REACT: process.env.AUTO_REACT === 'true',
    ANTI_CALL: process.env.ANTI_CALL !== 'false',
    ANTI_DELETE: process.env.ANTI_DELETE === 'true',
    ANTI_LINK: process.env.ANTI_LINK === 'true',
    ANTI_BADWORD: process.env.ANTI_BADWORD === 'true',
    WELCOME: process.env.WELCOME !== 'false',
    GOODBYE: process.env.GOODBYE !== 'false',
    
    // AI ENGINE
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
    // TOTAL COMMANDS
    COMMAND_COUNT: 480
};
