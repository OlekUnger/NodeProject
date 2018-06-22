var fortunes = [
    "Победи свои страхиб иначе они победят тебя",
    "Рекам нужны истоки",
    "Не бойся неведомого",
    "Тебя ждет приятный сюрприз",
];

exports.getFortune = ()=>{
    var idx = Math.floor(Math.random()* fortunes.length);
    return fortunes[idx];
}