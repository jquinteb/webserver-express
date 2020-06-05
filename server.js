const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000

//servidor en express

app.use(express.static(__dirname + '/public')); //publica pagina web

hbs.registerPartials(__dirname + '/views/partials');

//express HBS engine
app.set('view engine', 'hbs');



app.get('/', function(req, res) { //servicio rest


    res.render('home', {
        nombre: 'juan david !'
    });
})

app.get('/about', function(req, res) {
    res.render('about');

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})

//https://getbootstrap.com/
//https://handlebarsjs.com/