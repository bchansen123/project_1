//global variables

//Firebase login configuration
var config = {
    apiKey: "AIzaSyB4JtIwuFVptcZU9eg0phUsfQcEAKI19JE",
    authDomain: "g-project-f-01.firebaseapp.com",
    databaseURL: "https://g-project-f-01.firebaseio.com",
    projectId: "g-project-f-01",
    storageBucket: "g-project-f-01.appspot.com",
    messagingSenderId: "540111291451",
    appId: "1:540111291451:web:d2a0d7c5a63619902d081e",
    measurementId: "G-T840SE3C03"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

var database = initializeApp(config);

//Grabbing user information from fields that were filled out
$("#submitButton").on("click", function(event){
    event.preventDefault();
    var userId = $("#userId").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var userEmail = $("#userEmail").val();
    var password = $("#userPassword").val();

    var newUser = {
        user: userId,
        f_name: firstName,
        l_name: lastName,
        email: userEmail,
        userPassword: password
    };

    //Pushing new user on to the database
    database.ref().push(newUser);
    console.log(newUser);

    // Clearing out all fields
    $("#userId").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#userEmail").val("");
    $("#userPassword").val("");
  });

  
var btn = document.querySelector('#logIn');
var modalDlg = document.querySelector('#image-modal');
var imageModalCloseBtn = document.querySelector('#image-modal-close');
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
});
