# Установка и импортирование

Установка модуля:

```npm i telegraf-markup4-ts```

Или:

```yarn add telegraf-markup4-ts```

Импорт в проект:

```javascript
import M from 'telegraf-markup4-ts'
```

# Extra

При создании любой клавиатуры с помощью данного модуля не нужно превращать клавиатуру в Extra (Extra.markup(), или .extra()), это сделает модуль за Вас

# Создание reply-клавиатуры

Для создания reply-клавиатуры используйте:

```javascript
M.keyboard.reply(btns) // ExtraReplyMarkup
```

и вместо **btns** собственно сами кнопки, которые должны быть в клавиатуре, например:
```javascript
[['Кнопка 1'], ['Кнопка 2', 'Кнопка 3']]
```

# Создание inline-клавиатуры

Похожий принцип как и при создании reply-клавиатуры, только используется `M.keyboard.inline`

```javascript
const markup: ExtraReplyMarkupInlineKeyboard = M.keyboard.inline([
  M.button.callback('Старт', 'start')
])
```

# Создание кнопок inline-клавиатуры

Для этого можно использовать объект **button**, например:

### Callback кнопка

```javascript
M.button.callback('Текст кнопки', 'action') // CallbackButton
```

### URL кнопка

```javascript
M.button.url('Текст кнопки', 'URL адрес') // UrlButton
```

### Кнопка с переходом в другой чат

```javascript
M.button.switchToChat('Текст кнопки', 'Значение запроса') // SwitchToChatButton
```