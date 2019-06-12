const express = require('express');
const bodyParser = require('body-parser');
var firebase = require('firebase');
var admin = require('firebase-admin');
let fs = require('fs');
var serviceAccount = fs.readFileSync('serviceAccountKey.json', 'utf-8');
const app = express();
const port = process.env.PORT || 9000;
let modoLocal = false;

//para el administrador
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount)),
  databaseURL: "https://chemical-burette.firebaseio.com"
});
//para el administrador


//test
var USUARIO = {
  PATHHEAD: 'Users',
  TIPO: '100',
  NombreUsuario: 'Farauz',
  ID: '100000',
  emails: 'arauzfaustino2@gmail.com',
  pass: '12345',
  configMORE: {
    Nombre: 'Faustino',
    Apellido: 'Arauz',
    CIP: '8-916-2357',
    Genero: 'M',
    ID_INST: 'NONE',
    ID_Materia: 'NONE',
    Fecha_START: '2019-06-11'
  }
}




/*
 ######################
 ######################
 ###################### 
*/
  if (modoLocal!=false)
    local();
  else 
    firebaseConnect();
/*
 ######################
 ######################
 ###################### 
*/





function local() {
  //LEVANTANDO EL SERVIDOR //
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.listen(port, () => console.log('Aplicación inicializada sobre el puerto ' + port));
  //LEVANTANDO EL SERVIDOR //
  /***********************************************************************************************************/
  //// <--- Routes ---> ////
    var routeHA = '/api/login';

            app.get(routeHA, (req, res) => {
              res.status(200).send({ prueba: 'Enviando data...' });
            });
      
    app.post(routeHA, (req, res) => {
      console.log(req.body);
      res.status(200).send({ message: 'Recibido' });
    });
  //// <--- Routes ---> ////
}//end localhost

function firebaseConnect(){
  var config = {
    databaseURL: "https://chemical-burette.firebaseio.com",
    projectId: "chemical-burette",
    storageBucket: "chemical-burette.appspot.com",
  };
  firebase.initializeApp(config);
  var database = firebase.database();
/**/
    //writeUserData(database,USUARIO); //REGISTRA
    readUsersData(database,USUARIO);
/**/
}


//REGISTRA USUARIOS BASICO --  DatabaseFirebase [En teoria la data viene del HTML]
function writeUserData(database,USUARIO) {
  database.ref(USUARIO.PATHHEAD+'/'+USUARIO.TIPO+'/'+USUARIO.NombreUsuario)
  .set(
        {
         ID: USUARIO.ID,
         Email: USUARIO.emails,
         Pass: USUARIO.pass,
         CONFIG_MORE: {
            Name: USUARIO.configMORE.Nombre,
            Lastname: USUARIO.configMORE.Apellido,
            CIP: USUARIO.configMORE.CIP,
            Sex: USUARIO.configMORE.Genero,
            ID_inst: USUARIO.configMORE.ID_INST,
            ID_course: USUARIO.configMORE.ID_Materia,
            DATE_START: USUARIO.configMORE.Fecha_START
          }
        }
      );
}

//CONSULTA A LA BASE DE DATOS DE FIREBASE
function readUsersData(database, USUARIO){
  database.ref(USUARIO.PATHHEAD+'/'+USUARIO.TIPO).on('value', (snapshot)=>{
    const result = snapshot.val();
    console.log('Users_type -- ['+USUARIO.TIPO+']:  ', result);
  });
}

function creaUsuarios(firebase, email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

function consultaUID(uid, admin){

  admin.auth().getUser(uid)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });
}

