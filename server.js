const express = require('express')
const app = express()

app.set("view engine", "ejs") // ferramente de renderizar HTMl é o EJS

app.get("/", function (req, res) {
    const items = [{
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ]
    const subtittle = "Uma lingaguem de modelagem para criação de paginas HTML utilizando Javascript."
    res.render("pages/index", {
        qualitys: items,
        subtittle: subtittle,
    })
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

app.listen(8080)
console.log('funcionando.')