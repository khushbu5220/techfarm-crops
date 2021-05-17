// nodemon src/index.js
const express = require('express')
const exhbs = require('express-handlebars');
const path = require('path')
const app = express();
const crop = require("./src/models/crop");

const { Router } = require("express");
const cropRouter = require("./src/routers/crop");


app.use(express.json());
app.use(cropRouter);

app.use(express.static('public'));

const hbs = exhbs.create({
    extname: "handlebars",
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layout'),
})


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/home', async (req, res) => {

    res.render('index', {
        title: "home",
        style: "/css/style.css",
        nav: `<ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#Crops">Crops</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#about">About </a></li>
    </ul>`
    })
})

app.get('/food_crops', async (req, res) => {

    res.render('food', {
        title: "Food Crops",
        style: "/css/style2.css",
        nav: `<ul>
        <li><a href="#Grains">Grains</a></li>
        <li><a href="#Legumes">Legumes</a></li>
        <li><a href="#Oil">Oil Seeds</a></li>
    </ul>`
    })
})

app.get('/cash_crops', async (req, res) => {

    res.render('cash', {
        title: "Cash Crops",
        style: "/css/style2.css",
        nav: `<ul>
        <li><a href="#commercial">Commercial crops</a></li>						
        <li><a href="#fiber">Fibers</a></li>
    </ul>`
    })
})

app.get('/horticulture_crops', async (req, res) => {

    res.render('horticulture', {
        title: "Horticulture Crops",
        style: "/css/style2.css",
        nav: `<ul>
        <li><a href="#vegetables">Vegetables</a></li>						
        <li><a href="#fruits">Fruits</a></li>
        
    </ul>`
    })
})

app.get('/floral_crops', async (req, res) => {

    res.render('floral', {
        title: "Floral Crops",
        style: "/css/style2.css"
    })
})

app.get('/spices_crops', async (req, res) => {

    res.render('spices', {
        title: "Spices Crops",
        style: "/css/style2.css"
    })
})

app.get('/medicinal_crops', async (req, res) => {

    res.render('medicinal', {
        title: "Medicinal Crops",
        style: "/css/style2.css"
    })
})

app.get('/crop/:name', async (req, res) => {
    const name = req.params.name;
    const data = await crop.findOne({ name }).lean();
    // console.log(data.info)

    res.render('crop', {
        title: name,
        style: "/css/style1.css",
        name: name,
        footer: "/images/footer.jpg",
        image: data.image,
        info: data.info
    })
})

app.get('/weather', async (req, res) => {

    res.render('weather', {
        title: "Weather",
        style: "/css/weather.css"
    })
})


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
