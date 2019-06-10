const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000;
var data_temporal = {
  user: 'farauz',
  pass: '1234'
};
var respuesta = {
  error: false,
  codigo: 200,
  message: '',
};


//LEVANTANDO EL SERVIDOR //
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => console.log('Aplicación inicializada sobre el puerto ' + port));
//LEVANTANDO EL SERVIDOR //


//// <--- Routes ---> ////
var routeHA = '/api/login';
/*
app.get(routeHA, (req, res) => {
  res.status(200).send({ prueba: 'Enviando data...' });
});
*/
app.post(routeHA, (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: 'Recibido' });
});

app.get('/users', (req, res) => {
  //let student = req.params;
  //console.log("EStudinate: " + student);
  res.status(200).send({ UserName: `Recibido #${student}` });
});
//// <--- Routes ---> ////


Connection_tedious();
//// <---  CONNECTION WITH TEDIUOS   ---> ////
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
    if (err)
      console.log("Fuck\n\n\n" + err);
    else
      console.log("Ok ");
    consult_sql(connection, (err, res) => {
      if (err) console.log(`Error en el QUERY => ${err}`);
      else console.log(res);
    });
  });
}

function consult_sql(connection, callback) {
  var results = {};
  var Request = require('tedious').Request;
  var request = new Request(`USE CB_DB; SELECT * FROM dbo.Estudiante WHERE NomUser = '${data_temporal.user}' `, (error) => {
    if (error) return callback(error);
    callback(null, results);

  });

  request.on("row", function (rowObject) {
    results.user = rowObject;    //anade al arreglo la siguiente columna
  });
  connection.execSql(request);

}//end consult
