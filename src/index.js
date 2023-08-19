const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
require('dotenv').config();

require('./database');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);