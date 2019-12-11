//global variables

//Firebase login configuration
var config = {
    apiKey: "AIzaSyB4JtIwuFVptcZU9eg0phUsfQcEAKI19JE",
    authDomain: "g-project-f-01.firebaseapp.com",
    databaseURL: "https://g-project-f-01.firebaseio.com",
    projectId: "g-project-f-01",
    storageBucket: "g-project-f-01.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(config);

var database = firebase.database();

//Grabbing user information from fields that were filled out
$("#submitButton").on("click", function(event){
    event.preventDefault();
    var userId = $("#userId").val();
    var password = $("#userPassword").val();

    var newUser = {
        user: userId,
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

//Storing search term
var searchTerm;

$(".searchedTerm").on('click', function(){
  var searchTerm = $(".searchBar").val();
  console.log(searchTerm);
});

$(".searchedTerm").on('click', function(){
  var youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchTerm +"&key=AIzaSyBYRddvOZlfP5RohOweM2aMGNgbByOrubc&&maxResults=1&order=viewCount";

  //youtube API call
  $.ajax ({
    url:youtubeQueryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var y_name = response.items.snippet.title;
    var y_url = "https://www.youtube.com/watch?v=" + response.id.videoId;
    var y_publishDate = response.snippet.publishedAt; 
    console.log(y_url);
    console.log(y_publishDate);
    console.log(y_name);
  });

    //youtube API call
    $.ajax ({
      url:youtubeQueryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
  
      var y_name = response.items.snippet.title;
      var y_url = "https://www.youtube.com/watch?v=" + response.id.videoId;
      var y_publishDate = response.snippet.publishedAt; 
      console.log(y_url);
      console.log(y_publishDate);
      console.log(y_name);
    });
});


