var firebaseConfig = {
      apiKey: "AIzaSyDxKLMvYyX-QFRWZXcORHimrZ_4a0gRKek",
      authDomain: "claseprueba-c7c3f.firebaseapp.com",
      projectId: "claseprueba-c7c3f",
      storageBucket: "claseprueba-c7c3f.appspot.com",
      messagingSenderId: "728495527365",
      appId: "1:728495527365:web:62b5add23f9b6078ffa7ac"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
