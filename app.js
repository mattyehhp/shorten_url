const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')


const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
	console.log(`Express is listening on localhost:${port}`)

})