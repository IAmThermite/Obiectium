const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');
const utils = require('./src/utils');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(3000, () => {
  utils.log('info', 'Listening on port 3000');
});
