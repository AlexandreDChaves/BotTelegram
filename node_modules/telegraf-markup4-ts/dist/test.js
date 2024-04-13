"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var telegraf_1 = require("telegraf");
var token = '1589595822:AAE4xNXmjqOO2MAFnsbmWlCxkoUSUITZUPw';
var bot = new telegraf_1.Telegraf(token);
bot.command('start', function (ctx) {
    var btns = [
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth',
    ];
    var markup = index_1.default.keyboard.gen(btns, 3);
    ctx.reply('Test', index_1.default.keyboard.reply(markup));
});
bot.launch();
