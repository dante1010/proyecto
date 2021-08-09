var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
}); // cierra get

router.post('/', async (req, res, next) => {

var nombre = req.body.nombre;
var email = req.body.email;
var telefono= req.body.tel;
var mensaje = req.body.mensaje;
console.log(req.body);


var obj = {
  to: 'garfunkel.dana@gmail.com',
  subject: 'Contacto desde la Web',
  html: nombre + " " + " se contacto a traves y quiere mas info a este correo: " + email + ". <br> Además, hizo el siguiente comentario: " + mensaje + ".<br> Su tel es " + telefono 
} //cierra var obj


var transport = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT,
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PASS 
  }
}); //cierra transporter




var info = await transport.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente',
});

}); // cierra peticion del POST

module.exports = router;
