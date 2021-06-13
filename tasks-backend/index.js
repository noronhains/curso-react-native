const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()
	.include('./config/passport.js')
	.then('./config/middlewares.js')
	.then('./api')
	.then('./config/routes.js')
	.into(app)

app.db = db

app.listen(3000, () => {
	console.log('Backend executando...')
})

// app.use(meuMiddlewere())
// // app.use(bodyParser.json()) // foi depreciado, então troquei por express.json()
// app.use(express.json()) // sem isso não funciona o body request

// function meuMiddlewere(){
// 	return (req, res, next) => {
// 		console.log('Meu middlewere')
// 		next()
// 	}
// }

// app.get('/ola/:valor', (req, res, next) => {
// 	console.log('Func 0')
// 	next()
// })

// app.get('/ola/:valor', (req, res, next) => {
// 	console.log('Func 1')
// // http://localhost:3000/ola/hehe?nome=Joao&sobrenome=Silva
// 	res.status(200).send('<h1>Meu Backend! ' + req.params.valor + '\n' + req.query.nome + ' ' + req.query.sobrenome + '</h1>')
// 	next()
// })

// app.get('/ola/:valor', (req, res) => {
// 	console.log('Func 2')	
// })

// app.post('/hello', (req, res) => {
// 	res.status(200).send('Ola, ' + req.body.nome + ' ' + req.body.sobrenome + '!')
// })
