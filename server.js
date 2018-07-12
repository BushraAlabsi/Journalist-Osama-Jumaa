const express = require('express')
const path = require('path');
// const util = require('./helpers/utility');
const app = express()
const bodyParser = require('body-parser')
// using of modules-------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname , 'views')));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on port ', port))
