import M from './index'
import { Telegraf } from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context'
import config from 'config'

const token: string = config.get<string>('BOT_TOKEN');
const bot: Telegraf<TelegrafContext> = new Telegraf<TelegrafContext>(token)

bot.command('start', (ctx: TelegrafContext): void => {
  const btns: string[] = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
  ]

  const markup: string[][] = M.keyboard.gen<string>(btns, 3)

  ctx.reply('Test', M.keyboard.reply(markup))
})

bot.launch()
