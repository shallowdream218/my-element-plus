"use strict";
exports.__esModule = true;
// import ElementPlus from 'element-plus'
require("element-plus/dist/index.css");
var element_plus_1 = require("element-plus");
var message_1 = require("./components/message");
var icon_1 = require("./components/icon");
var badge_1 = require("./components/badge");
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
require("./theme-chalk/index.scss");
// 引入icon
var ElementPlusIconsVue = require("@element-plus/icons-vue");
console.log(ElementPlusIconsVue);
var app = vue_1.createApp(App_vue_1["default"]);
for (var _i = 0, _a = Object.entries(ElementPlusIconsVue); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], component = _b[1];
    app.component(key, component);
}
app.use(element_plus_1["default"]);
app.use(message_1.MyMessage);
app.use(icon_1.MyIcon);
app.use(badge_1.MyBadge);
console.log(app);
app.mount('#app');
// createApp(App).use(ElementPlus).mount('#app')
