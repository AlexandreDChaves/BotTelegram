import { ExtraReplyMarkup, ExtraReplyMarkupInlineKeyboard } from 'telegraf/typings/telegram-types'
import { Markup } from 'telegraf'

import {
  CallbackButton,
  InlineKeyboardButton,
  KeyboardButton,
  SwitchToChatButton,
  UrlButton
} from 'telegraf/typings/markup'

interface Telegraf4Markup {
  keyboard: {
    inline: (btns: InlineKeyboardButton[] | InlineKeyboardButton[][]) => ExtraReplyMarkupInlineKeyboard
    reply: (btns: KeyboardButton[] | KeyboardButton[][]) => ExtraReplyMarkup,
    none: () => ExtraReplyMarkup,
    gen<T>(btns: T[], inRow: number): T[][]
  }
  button: {
    callback: (text: string, action: string) => CallbackButton,
    switchToChat: (text: string, value: string) => SwitchToChatButton,
    url: (text: string, url: string) => UrlButton,
  }
}

const M: Telegraf4Markup = {
  keyboard: {
    inline(btns: InlineKeyboardButton[] | InlineKeyboardButton[][]): ExtraReplyMarkupInlineKeyboard {
      return Markup.inlineKeyboard(btns).extra()
    },
    reply(btns: KeyboardButton[] | KeyboardButton[][]): ExtraReplyMarkup {
      return Markup.keyboard(btns).extra()
    },
    none(): ExtraReplyMarkup {
      return Markup.removeKeyboard().extra()
    },
    gen<T>(btns: T[], inRow: number) {
      const result: T[][] = [[]]

      btns.forEach((btn: T): void => {
        const last: T[] = result[result.length - 1]
        if (last.length >= inRow) result.push([btn])
        else last.push(btn)
      })

      return result
    },
  },
  button: {
    callback(text: string, action: string): CallbackButton {
      return Markup.callbackButton(text, action)
    },
    switchToChat(text: string, value: string): SwitchToChatButton {
      return Markup.switchToChatButton(text, value)
    },
    url(text: string, url: string): UrlButton {
      return Markup.urlButton(text, url)
    },
  },
}

export default M
