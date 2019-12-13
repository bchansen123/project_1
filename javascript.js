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

  var youtubeItem = response.items[0];
  var y_name = youtubeItem.snippet.title;
  var y_url = "https://www.youtube.com/watch?v=" + youtubeItem.id.videoId;
  var y_publishDate = youtubeItem.snippet.publishedAt; 
  console.log(y_url);
  console.log(y_publishDate);
  console.log(y_name);
});

var giphyApiKey = "dIxrMMRJwkqETR5DclQQXIBjt2emSBRC";
var giphyQueryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyApiKey + "&q=" + searchTerm + "&limit=1";

//     //Giphy API call
    $.ajax ({
      url:giphyQueryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var giphyItem = response.data;
      var g_url = giphyItem[0].images.fixed_height.url;
      console.log(g_url);

      console.log(giphyItem);
    });


//News API call
var currentTime = new Date();
var momentTime = moment().format("YYYY-MM-DD");
var newsApiKey = "0412b01d03454f5a9f798a6d22c2ea49"
var newsQueryURL = "https://newsapi.org/v2/everything?from=" + momentTime+ "&q="+ searchTerm + "&sortBy=popularity&api_key=" + newsApiKey;
console.log(momentTime);
console.log(newsQueryURL);
});