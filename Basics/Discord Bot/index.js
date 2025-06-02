import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv";

dotenv.config();

const client = new Client({intents : [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on('messageCreate', message => {
    // console.log(message.content);
    // console.log(message);
    if(message.author.bot) return;

    message.reply({
        content: "Hi From Bot"
    });
});

client.on("interactionCreate", interaction => {
    // console.log(interaction)
    interaction.reply("Pong");
})

client.login(process.env.Discord_token);
