var DATA = {
  codepc: "",
  email: "",
  lastname: "",
  name: "",
  password: ""
};



/*  -MAIN-  */
main(DATA);
//DATA es mas que nada el JSON que viene con todo practicamente del frontend pasando por el RealTime de firebaseV1.0
function main(DATA) {
  var crypto =          require("crypto"); // basico para la proteccion en el envio de la contrasena
  var firebase =        require("firebase");
  var admin =           require("firebase-admin");
  let fs =              require("fs");
  var serviceAccount =  fs.readFileSync("serviceAccountKey.json", "utf-8");
  var config =          fs.readFileSync("config_firebase.json", "utf-8");

  let modoLocal = false; //Activar cuando se inicia el modo local

  if (modoLocal != false) local();
  else firebaseConnect(admin, serviceAccount, config, firebase);
} // fin del metodo principal
/*  -MAIN-  */





function firebaseConnect(admin, serviceAccount, config,firebase) {
  firebase.initializeApp(JSON.parse(config));
  var database = firebase.database();
  var hot_data_from_firebase = readUsersData(database);  //trae la data caliente de firebase
  hot_data_from_firebase.then((resultado)=>{
    var hot_data = [];
    for(var i in resultado)
      hot_data.push([i, resultado [i]]);
    //console.log(hot_data[0][0]); esto trae los uids, etc
    admin_init(admin,serviceAccount,hot_data); //ACTIVA EL ADMINISTRADOR PARA HACER LA CARGA Y EL ORDENAMIENTO
  }).catch((error)=>{
    console.log(error);
  });
} //fin firebaseconnect




function admin_init(admin,serviceAccount,hot_data) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(serviceAccount)),
    databaseURL: "https://chemical-burette.firebaseio.com"
  });
  CREA_USUARIOS_AUTENTIFICADOS(admin,hot_data);
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


//Data del database procedente del registro
function readUsersData(database) {
  return new Promise((resolve, reject)=>{
    database.ref("students" + "/").on("value", snapshot => {
      const result = snapshot.val();
      if (result!= null)
      return resolve(result);
      else
      return reject(new Error("Conexion con fuente de dato desconocida ---NO DATA---\n\n\n."));
      //console.log('Users_type -- ['+"DATA"+']:  ', result);
    });
  });
}
//Data del database procedente del registro





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

function CREA_USUARIOS_AUTENTIFICADOS(admin, hot_data) {
  var db = admin.database();
 for (let i = 0; i < hot_data.length; i++) {
    admin
    .auth()
    .createUser({
      uid: hot_data[i][0],
      email: hot_data[i][1].email, //Necesito mail
      emailVerified: false,
      password: hot_data[i][1].password,
      displayName: ""+hot_data[i][1].name + " "+hot_data[i][1].lastname,
      disabled: false
    })
    .then(function(userRecord) {
      console.log("Successfully created new user:", userRecord.uid);
        var ref = db.ref("students/"+userRecord.uid);
            ref.remove()
              .then(function() {
                console.log("Remove succeeded from database RealTime.")
              })
              .catch(function(error) {
                console.log("Remove failed: " + error.message)
              });
    })
    .catch(function(error) {
      console.log("Error al crear nuevos usuarios:", error);
    });
  }
}//end

function md5(string) {
  return crypto
    .createHash("md5")
    .update(string)
    .digest("hex");
}
