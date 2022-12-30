require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const PORT = process.env.PORT

const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => console.log(err));

//contenido estatico
app.use( express.static('public') )

app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'David Flores',
        titulo: 'Mi pagina de Inicio'
    })

})

app.get('/generic', (req, res) => {
    
    res.render('generic', {
        nombre: 'David Flores',
        titulo: 'Mi pagina de Inicio'
    })

})
app.get('/elements', (req, res) => {
    
    res.render('elements', {
        nombre: 'David Flores',
        titulo: 'Mi pagina de Inicio'
    })

})
app.get('*', (req, res) => {
    
    res.sendFile( __dirname + '/public/404.html')

})

app.listen(PORT, () => {
    console.log(`servidor listo en el puerto ${PORT}`);
})