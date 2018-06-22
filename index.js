var express = require('express'),
    app = express(),
    fortune = require('./lib/fortune.js');


app.set('port', process.env.PORT || 3000);

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));
app.use((req, res, next)=>{
    res.locals.showTests = app.get('env')!== 'production' && req.query.test === '1';
    next();
})


app.get('/', (req, res)=>{
    res.render('home', { title: 'Home', message: 'Главная!' })
});

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        message: 'About',
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    })
});

app.use((req, res, next)=>{
    res.status(404)
        .render('404', {title: '404', message: '404 not found!'});
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500)
        .render('500', {title: '500', message: '500 server error'});
});

app.listen(app.get('port'), ()=>
    console.log(`Express запущен на http://localhost ${app.get('port')};`)
);






























// app.get('/tours/hood-river', ()=>{
//     res.render('/tours/hood-river',{
//         title: 'hood-river'
//     });
// });
// app.get('/tours/request-group-rate', ()=>{
//     res.render('/tours/request-group-rate',{
//         title: 'rating'
//     });
// });
//
// app.get('/headers', (res, req)=>{
//     res.set('Content-Type', 'text/plain');
//     var s = '';
//     for(let name of req.headers){
//         s+= `${name} : ${req.headers[name]} \n`;
//
//     }
//     res.send(s);
// })

