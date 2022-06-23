
const firebaseConfig = 
{
      apiKey: "AIzaSyAHQ_r4QC5dJszqM3TucgUomASSalUBNYQ",
      authDomain: "kwitter-dac5e.firebaseapp.com",
      databaseURL: "https://kwitter-dac5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-dac5e",
      storageBucket: "kwitter-dac5e.appspot.com",
      messagingSenderId: "231339540828",
      appId: "1:231339540828:web:992f328586abcfbe704199"
};

firebase.initializeApp(firebaseConfig);

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 

      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  
                  //Start code

                  //End code
            });
      });
}

function join(){
      
}

getData();
