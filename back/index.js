var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express();
var port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

//Pongo el servidor a escuchar
app.listen(port, function () {
    console.log(`Server running in http://localhost:${port}`);
});

app.post('/login',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT * FROM Usuarios WHERE Mail = "${req.body.mail}" AND Contra = "${req.body.password}"; `)
        if(vector.length != 0){
            let loguedUser = await realizarQuery(`SELECT Id_usuario FROM Usuarios WHERE Mail = "${req.body.mail}" AND Contra = "${req.body.password}"; `)
            res.send({validar:true, log:loguedUser})
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})

// Este codigo puede fallar - Copiado de TP fin 1er cuatri; Rivas lo reporto con error en la correccion (Gian te revisa los comentarios salame)
app.post('/registro',async function(req,res){
    try {
        console.log(req.body);
        let vector = await realizarQuery(`SELECT * FROM Usuarios WHERE Mail = "${req.body.mail}" AND Contra = "${req.body.password}" `)
        if(vector.length == 0){
            await realizarQuery(`INSERT INTO Usuarios (Mail,Contra) VALUES ("${req.body.mail}", "${req.body.password}");`);
            let loguedUser = await realizarQuery(`SELECT Id_usuario FROM Usuarios WHERE Mail = "${req.body.mail}" AND Contra = "${req.body.password}" `)
            console.log(loguedUser)
            res.send({validar:true, log:loguedUser});
        }
        else{
            res.send({validar:false});
        }
    } catch (error) {
        res.send({validar:false})
    }
})