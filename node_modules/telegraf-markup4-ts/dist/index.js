"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var M = {
    keyboard: {
        inline: function (btns) {
            return telegraf_1.Markup.inlineKeyboard(btns).extra();
        },
        reply: function (btns) {
            return telegraf_1.Markup.keyboard(btns).extra();
        },
        none: function () {
            return telegraf_1.Markup.removeKeyboard().extra();
        },
        gen: function (btns, inRow) {
            var result = [[]];
            btns.forEach(function (btn) {
                var last = result[result.length - 1];
                if (last.length >= inRow)
                    result.push([btn]);
                else
                    last.push(btn);
            });
            return result;
        },
    },
    button: {
        callback: function (text, action) {
            return telegraf_1.Markup.callbackButton(text, action);
        },
        switchToChat: function (text, value) {
            return telegraf_1.Markup.switchToChatButton(text, value);
        },
        url: function (text, url) {
            return telegraf_1.Markup.urlButton(text, url);
        },
    },
};
exports.default = M;
