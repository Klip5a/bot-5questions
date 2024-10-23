import 'dotenv/config';

import { Bot } from 'grammy';

const bot = new Bot(process.env.BOT_TOKEN);

bot.command('start', async (ctx) => {
  await ctx.reply('Hello, World!');
});

bot.start();
console.log('Bot is running...');
