const env = require('./.env')
const { Telegraf } = require('telegraf')
const axios = require('axios')
const moment = require('moment')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoOpcao = Markup.keyboard([ 
    ['⚙️Backend', '💻FrontEnd', '🥸Cybersecurity'],
    ['🤓CienciadeDados', '♾DevOps'],
    
]).resize()

const tecladoVagas = Markup.keyboard([ 
    ['📱Remotar', '📀Nerdin', '🖥Revelo'],
    ['🕹GeekHunter', '⚔️ProgramadorThor'],
    
]).resize()

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.reply(`Escolha uma opção`,
        Markup.keyboard(['Cursos', 'Vagas']).resize().oneTime())
})

bot.hears('Vagas', ctx => ctx.reply('Show', tecladoVagas))

bot.hears('Remotar', ctx => ctx.reply('https://remotar.com.br/'))
bot.hears('Nerdin', ctx => ctx.reply('https://nerdin.com.br/'))
bot.hears('Revelo', ctx => ctx.reply('https://www.revelo.com.br/'))
bot.hears('GeekHunter', ctx => ctx.reply('https://www.geekhunter.com.br/'))
bot.hears('ProgramadorThor', ctx => ctx.reply('https://programathor.com.br/'))


bot.hears('Cursos', ctx => ctx.reply('Legal', tecladoOpcao))

bot.hears('Backend', ctx => ctx.reply('https://bit.ly/4aTbopa'))
bot.hears('FrontEnd', ctx => ctx.reply('https://bit.ly/3Ub94o1'))
bot.hears('Cybersecurity', ctx => ctx.reply('https://bit.ly/3Ugm1gk'))
bot.hears('CienciadeDados', ctx => ctx.reply('https://bit.ly/3Ueobx3'))
bot.hears('DevOps', ctx => ctx.reply('https://bit.ly/49A7pN6'))

bot.on('text', (ctx) => {
    const text = ctx.message.text.toLowerCase();
    if (text === 'vagas') {
        ctx.reply('Legal!', tecladoVagas);
    }
});

bot.on('text', (ctx) => {
    const text = ctx.message.text.toLowerCase();
    if (text === 'cursos') {
        ctx.reply('Legal!', tecladoOpcao);
    }
});

  

bot.startPolling()