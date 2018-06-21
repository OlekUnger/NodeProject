var express = require('express'),
    app = express();


app.set('port', process.env.PORT || 3000);

app.set('view engine', 'pug');
app.set('views', './views/pages');

app.use(express.static(__dirname + '/public'));

var fortunes = [
    "Победи свои страхиб иначе они победят тебя",
    "Рекам нужны истоки",
    "Не бойся неведомого",
    "Тебя ждет приятный сюрприз",
];

app.get('/', (req, res)=>{
    res.render('home', { title: 'Home', message: 'Главная!' })
});

app.get('/about', (req, res)=>{
    var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about', {fortune: randomFortune })
});

app.use((req, res, next)=>{
    res.status(404);
    res.render('404', {title: '404', message: '404 not found!'});
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500);
    res.render('500', {title: '500', message: '500 server error'});
});

app.listen(app.get('port'), ()=>
    console.log(`Express запущен на http://localhost ${app.get('port')};`)
);

