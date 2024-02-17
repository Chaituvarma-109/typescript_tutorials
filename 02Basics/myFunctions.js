"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num, num2) {
    return num + 2;
}
function getUpper(name) {
    return name.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
function getValue(value) {
    if (value > 5) {
        return true;
    }
    return "200 ok";
}
var getHello = function (s) {
    return "";
};
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
var res = add(5, 7);
var upres = getUpper("chaitanya");
signUpUser("chaitanya", "e@mail.com", true);
loginUser("chaitanya", "e@mail.com");
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
