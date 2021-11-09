const config = require('./config/config')
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const dir = path.join(__dirname, '/public');


app.use(morgan('combined',));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(dir))
app.use(cookieParser());
app.use(cors());

//Routes middleware
app.use('/api', require('./routes/testcase'));

app.listen(config.PORT, config.HOST, () => console.log(`App listening on Http://${config.HOST}: ${config.PORT}`));