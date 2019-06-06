const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001
//--End variables
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => console.log('Aplicación inicializada sobre el puerto ' + port));


//// <--- Routes ---> ////
var routeHA = '/api/login';
app.get(routeHA, (req, res) => {
  res.send(200, {prueba: 'Hola Mundo :v'});
});
app.post(routeHA, (req, res) => {
  console.log(req.body);
  res.send(200, {message: 'Copy Bv'});
});

//// <---  CONNECTION WITH TEDIUOS   ---> ////
Connection_tedious();

function Connection_tedious() {
  var Connection = require('tedious').Connection;
  const Request = require('tedious').Request;
  const TYPES = require('tedious').TYPES;
  var config = {
    server: 'BOODAH',
    authentication: {
      type: 'default',
      options: {
        userName: 'sa',
        password: 'sql',
        database: 'CB_DB'
      }
    }
  };

  var connection = new Connection(config);
  connection.on('connect', function (err) {
    if (err) {
      console.log("DAMMMMMNNN\n\n\n" + err);
      //connection.close();
    } else {
      console.log("Ok ");
    }
  });
}
