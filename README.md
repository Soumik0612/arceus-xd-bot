# ⚡ ARCEUS XD - WhatsApp UserBot v12.0.0

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00bf8f,100:001510&height=180&section=header&text=ARCEUS%20XD%20v12.0.0&fontSize=52&fontColor=ffffff&animation=fadeIn" width="100%"/>
</p>

<p align="center">
  <a href="https://railway.app/new"><img src="https://img.shields.io/badge/Deploy%20on-Railway-7928CA?style=for-the-badge&logo=railway&logoColor=white" alt="Deploy on Railway"/></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js 18+"/></a>
  <a href="https://github.com/whiskeysockets/baileys"><img src="https://img.shields.io/badge/Baileys-v6.7-blue?style=for-the-badge" alt="Baileys"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License"/></a>
</p>

---

## 📌 Bot Profile & Header

```text
┏━━❐◈ 𝗔𝗥𝗖𝗘𝗨𝗦 𝗫𝗗◈
┃ ᴘʀᴇꜰɪx: [ . ]
┃ ᴏᴡɴᴇʀ: 𝗦𝗢𝗨𝗠𝗜𝗞 𝗗𝗘𝗬
┃ ᴍᴏᴅᴇ: 🔒 Private
┃ ᴘʟᴀᴛꜰᴏʀᴍ: 🚉 Railway
┃ ꜱᴘᴇᴇᴅ: 1059 ms
┃ ᴜᴘᴛɪᴍᴇ: 7h 6m 19s
┃ Vᴇʀꜱɪᴏɴ: v12.0.0
┃ ᴜꜱᴀɢᴇ: 262.9 MB of 251.70 GB
┃ ʀᴀᴍ: [███████░░░] 73%
┃ Cᴏᴍᴍᴀɴᴅꜱ: 480
┗❐◈
```

---

## 🔗 WhatsApp Pairing Options

ARCEUS XD supports two fast camera-free pairing methods:

### 1. 🌐 Website Pair (Direct Web Portal)
- When deployed on Railway, visit `https://your-bot.up.railway.app/pair`
- Enter your WhatsApp phone number with country code (e.g. `919876543210`).
- Get your 8-digit Baileys code (e.g. `ARCE-8932`) instantly on screen.
- On your phone: **WhatsApp > Settings > Linked Devices > Link with phone number instead** and type the code!

### 2. ✈️ Telegram Pair (Bot Relay)
- Configure `TG_BOT_TOKEN` and `TG_OWNER_ID` in Railway environment variables.
- Your bot will send the 8-digit pairing code directly to your private Telegram chat.

### 3. 📷 Terminal QR Code
- Set `USE_PAIRING_CODE=false` to print a classic QR code in the Railway logs.

---

## 🚀 Features

- **480 Production-Ready Commands** across 21 modular categories.
- Built on modern **`@whiskeysockets/baileys`** library with multi-device support.
- **Website & Telegram 8-Digit Pairing Code Linking** without camera scan.
- Integrated **Express Keep-Alive Web Server** for zero-downtime hosting on Railway.
- Multi-AI Neural Engine supporting Gemini, ChatGPT, Claude, and Llama.
- Complete group management, anti-link, anti-call, and security automations.

---

## 🛠️ Quick Deployment to Railway

### 1-Click Deploy
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new)

### Environment Variables

| Variable | Description | Default |
|---|---|---|
| `BOT_NAME` | Name shown on bot banner | `𝗔𝗥𝗖𝗘𝗨𝗦 𝗫𝗗` |
| `OWNER_NAME` | Developer / Owner name | `𝗦𝗢𝗨𝗠𝗜𝗞 𝗗𝗘𝗬` |
| `OWNER_NUMBER` | WhatsApp number with country code | `919876543210` |
| `PREFIX` | Command prefix symbol | `.` |
| `WORK_TYPE` | Operation mode (`private` or `public`) | `private` |
| `PORT` | Web keep-alive port | `3000` |
| `SESSION_ID` | Optional pre-generated session string | `""` |

---

## 💻 Manual Installation (VPS / Localhost / Termux)

```bash
# 1. Clone repository
git clone https://github.com/soumikdey/arceus-xd-bot.git
cd arceus-xd-bot

# 2. Install dependencies
npm install

# 3. Configure credentials
cp .env.example .env
nano .env

# 4. Start the bot
npm start
```

---

## 📂 Repository Structure

```
├── lib/                  # Helper utilities and buffer functions
├── plugins/              # Modular command handlers (21 categories)
├── config.js             # Central configuration file
├── Dockerfile            # Container configuration
├── index.js              # Primary bot process and event engine
├── package.json          # Node dependencies & run scripts
├── Procfile              # Cloud process declaration
├── railway.json          # Railway cloud build specification
└── README.md             # Documentation and setup guide
```

---

## 👑 Owner & Credits

- **Developer / Owner:** SOUMIK DEY
- **Library:** [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys)
- **Platform:** Railway Cloud Platform

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
