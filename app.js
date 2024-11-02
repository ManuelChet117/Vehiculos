const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app= express()
const port=  process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname +'/views/partials')



app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/habilidades', (req, res) => {
    res.render('habilidades');
});

app.get('/sobremi', (req, res) => {
    res.render('sobremi');
});

app.get('/inicio', (req, res) => {
    res.render('inicio');
});

app.get('/proyectos', (req, res) => {
    res.render('proyectos');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

app.get('/proyecto1', (req,res)=>{
    res.render('proyecto1', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})




app.get('/elements', (req,res)=>{
    res.render('elements', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto2', (req,res)=>{
    res.render('proyecto2', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto3', (req,res)=>{
    res.render('proyecto3', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto4', (req,res)=>{
    res.render('proyecto4', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto5', (req,res)=>{
    res.render('proyecto5', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto6', (req,res)=>{
    res.render('proyecto6', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/home', (req,res)=>{
    res.render('home', {
        nombre: 'Manuel Chet',
        titulo: 'Portafolio'
    })
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/proyecto2', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto2.html')
})

app.get('/proyecto3', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto3.html')
})

app.get('/proyecto4', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto4.html')
})

app.get('/proyecto5', (req,res)=>{
    res.sendFile(__dirname+'/public3/proyecto5.html')
})

app.get('/proyecto6', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto6.html')
})

app.get('/proyecto1', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto1.html')
})

app.get('/elementes',(req,res)=>{
    res.sendFile(__dirname+'/public/elements.html')
})

app.use((req, res) => {
    res.status(404).render('partials/404');
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost ${port}`);
})