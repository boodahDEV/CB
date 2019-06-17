const express = require("express");
const bodyParser = require("body-parser");
var firebase = require("firebase");
var admin = require("firebase-admin");
let fs = require("fs");
var serviceAccount = fs.readFileSync("serviceAccountKey.json", "utf-8");
var config = fs.readFileSync("config_firebase.json", "utf-8");
const app = express();
const port = process.env.PORT || 9000;
let modoLocal = false;

//test
var DATAs = {
  PATHHEAD: "Users",
  TIPO: "100",
  NombreESTUDIANTE: "Farauz",
  ID: "100000",
  emails: "arauzfaustino2@gmail.com",
  pass: "12345",
  configMORE: {
    Nombre: "Faustino",
    Apellido: "Arauz",
    CIP: "8-916-2357",
    Genero: "M",
    ID_INST: "NONE",
    ID_Materia: "101",
    Fecha_START: "2019-06-11"
  }
};
var PROFESOR = {
  PATHHEAD: "Users",
  TIPO: "110",
  Nombre_usuario: "Farauz",
  ID: "11001",
  emails: "fa@gmail.com",
  pass: "12345",
  code: "11101",
  configMORE: {
    Nombre: "Faustino",
    Apellido: "Arauz",
    CIP: "8-916-2357",
    Genero: "M",
    ID_INST: "NONE",
    Especializacion: "Dr. Quimica general basado en la Ionizacion",
    Fecha_START: "2019-06-12"
  }
};
/*
 ######################
 ###############################################################
 ###################### 
*/
if (modoLocal != false) local();
else firebaseConnect(serviceAccount, config);
/*
 ######################
 ###############################################################
 ###################### 
*/
function local() {
  //LEVANTANDO EL SERVIDOR //
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    next();
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.listen(port, () =>
    console.log("Aplicación inicializada sobre el puerto " + port)
  );
  //LEVANTANDO EL SERVIDOR //
  /***********************************************************************************************************/
  //// <--- Routes ---> ////
  var routeHA = "/api/login";

  app.get(routeHA, (req, res) => {
    res.status(200).send({ prueba: "Enviando data..." });
  });

  app.post(routeHA, (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: "Recibido" });
  });
  //// <--- Routes ---> ////
} //end localhost

function firebaseConnect(serviceAccount, config) {
  admin_init(serviceAccount);

  firebase.initializeApp(JSON.parse(config));
  var database = firebase.database();
  // writeUserData(database,ESTUDIANTE); //REGISTRA
  // writeProfeData(database, PROFESOR);
  // readUsersData(database,PROFESOR);
} //fin firebaseconnect

function admin_init(serviceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(serviceAccount)),
    databaseURL: "https://chemical-burette.firebaseio.com"
  });
  var uid = "3kx4KcwINvUOipoevvyMyLgMXQ12";
  consulta_UID(uid, admin);
}

//Este la idea es generalizar el inicio.
function RegistraUsuarios(database, DATA) {
  database
    .ref(DATA.PATHHEAD + "/" + DATA.TIPO + "/" + DATA.Nombre_usuario)
    .set({
      ID: DATA.ID,
      Email: DATA.emails,
      Pass: DATA.pass,
      CONFIG_MORE: {
        Name: DATA.configMORE.Nombre,
        Lastname: DATA.configMORE.Apellido,
        CIP: DATA.configMORE.CIP,
        Sex: DATA.configMORE.Genero,
        ID_inst: DATA.configMORE.ID_INST,
        ID_course: DATA.configMORE.ID_Materia,
        DATE_START: DATA.configMORE.Fecha_START
      }
    });
}

function RegistraProfeData(database, PROFESOR) {
  database
    .ref(
      PROFESOR.PATHHEAD + "/" + PROFESOR.TIPO + "/" + PROFESOR.Nombre_usuario
    )
    .set({
      ID: PROFESOR.ID,
      Email: PROFESOR.emails,
      Pass: PROFESOR.pass,
      CodeA: PROFESOR.code,
      CONFIG_MORE: {
        Name: PROFESOR.configMORE.Nombre,
        Lastname: PROFESOR.configMORE.Apellido,
        CIP: PROFESOR.configMORE.CIP,
        Sex: PROFESOR.configMORE.Genero,
        ID_inst: PROFESOR.configMORE.ID_INST,
        Specialization: PROFESOR.configMORE.Especializacion,
        DATE_START: PROFESOR.configMORE.Fecha_START
      }
    });
}
//Data del database procedente del Estudiante
function readUsersData(callback, database, DATA) {
  database.ref(DATA.PATHHEAD + "/" + DATA.TIPO).on("value", snapshot => {
    const result = snapshot.val();
    // console.log('Users_type -- ['+DATA.TIPO+']:  ', result);
    callback(result);
  });
}

function consulta_UID(uid, admin) {
  admin
    .auth()
    .getUser(uid)
    .then(function(userRecord) {
      console.log("Successfully fetched user data:", userRecord.toJSON());
    })
    .catch(function(error) {
      console.log("Error fetching user data:", error);
    });
}

function CREA_USUARIOS_AUTENTIFICADOS(admin) {
  admin
    .auth()
    .createUser({
      email: "arauzfaustino2@gmail.com", //Necesito mail
      emailVerified: false,
      phoneNumber: "",
      photoURL: "",
      password: "secretPassword",
      displayName: "Faustino Arauz",
      disabled: false
    })
    .then(function(userRecord) {
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch(function(error) {
      console.log("Error creating new user:", error);
    });
}
