// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBVM--nEh-knCw5JlF_mCjyp0qsvywHA2s",
      authDomain: "kwitter-f102c.firebaseapp.com",
      databaseURL: "https://kwitter-f102c-default-rtdb.firebaseio.com",
      projectId: "kwitter-f102c",
      storageBucket: "kwitter-f102c.appspot.com",
      messagingSenderId: "51326213822",
      appId: "1:51326213822:web:28c32fe218d26ed2cdc8ef"
    };

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location  = "kwitter.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });

      document.getElementById("msg").value = "";
}
