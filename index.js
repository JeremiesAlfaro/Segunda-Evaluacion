const express = require('express');
const bodyparse = require('body-parser');
const cors = require('cors');
const alumnoroute = require('./alumno.route');
const app = express();

app.use(bodyparse.urlencoded({ extended: true }));
app.use(bodyparse.json());
app.use(cors());

app.listen(1433);

app.use(alumnoroute);