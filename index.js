const express = require('express')
const app = express()
const models = require('./models')

app.use(express.json())

app.get('/', function(req,res){
    res.send({
        messages : 'success',
        body : 'hore berhasil'
    })
})
app.get('/jilbab', function(req,res){
    models.Jilbab.findAll().then(function (baju){
        res.send(baju)
    })
})

app.post('/jilbab', function(req,res){
    models.Jilbab.create({
        title : req.body.title,
        year : req.body.year
    }).then(function(data){
        res.send(data)
    }).catch(function(error){
        res.send(error)
    })
})

app.listen(4000, function(){
    console.log('Berhasil')
})