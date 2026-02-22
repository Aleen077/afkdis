const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

// للبقاء أونلاين على Render
app.get('/', (req, res) => res.send('Bot is Alive!'));
app.listen(process.env.PORT || 5000);

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

const serverId = "1296578336314888202";
const channelId = "1422551242902732891";

client.on('ready', () => {
    console.log(`Bot logged in as ${client.user.tag}`);
    const guild = client.guilds.cache.get(serverId);
    const channel = guild?.channels.cache.get(channelId);
    if (channel) {
        // ملاحظة: قد تحتاج مكتبة @discordjs/voice للأصوات، هذا كود أساسي للتواجد
        console.log("Ready to join " + channel.name);
    }
});

client.login(process.env.f2roq);
