//global variables
var momentTime = moment().format("YYYY-MM-DD");


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

$("#pinterest").on("click", function(){
  $(".twitter").toggle();
});

$("#youtube").on("click", function(){
  $(".instagram").toggle();
});

$("#news").on("click", function(){
  $(".pinterest").toggle();
});

$("#twitter").on("click", function(){
  $(".youtube").toggle();
});

//Storing search term
var searchTerm;

$(".searchedTerm").on('click', function(){
var searchTerm = $(".searchBar").val();
console.log(searchTerm);
});

$(".searchedTerm").on('click', function(){

  var searchTerm = $(".searchBar").val();
var youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchTerm +"&key=AIzaSyBYRddvOZlfP5RohOweM2aMGNgbByOrubc&&maxResults=1&order=viewCount";
console.log(youtubeQueryURL);
//youtube API call
  $.ajax ({
    url:youtubeQueryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var youtubeItem = response.items[0];
    var y_name = youtubeItem.snippet.title;
    var y_url = "https://www.youtube.com/watch?v=" + youtubeItem.id.videoId;
    var ytImage = youtubeItem.snippet.thumbnails.medium.url;
    var ytDescription = youtubeItem.snippet.description;
    var y_publishDate = youtubeItem.snippet.publishedAt; 
    var y_published = moment(y_publishDate).format("YYYY-MM-DD");
    console.log(y_url);
    console.log(y_published);
    console.log(y_name);
    console.log(ytDescription);

    var ytTitle = y_name;
    var ytURL = $("<a>").attr("href", y_url).append(ytTitle);
    var ytImageDisplay = $("<img>").attr("src", ytImage);
    var ytDescriptionPost = $("<p>").text(ytDescription);
    console.log(ytImageDisplay);
    // $(".ytLink").empty();
    $("#ytImages").empty();
    $("#ytTitle").empty();
    $(".ytDescription").empty();

    $("#ytTitle").append(ytTitle);
    $("#ytImages").append(ytImageDisplay);
    $(".ytDescription").append(ytDescriptionPost);


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
      var gifURL = giphyItem[0].images.fixed_height.url;
      var gifTitle = giphyItem[0].title;

      console.log(gifURL);

      console.log(giphyItem);
      var gifHead = $("<a>").attr("href", gifURL).append(gifTitle);
      var postedGifImage = $("<img>").attr("src", gifURL);

      $(".giphyTitle").empty();
      $(".giphyImage").empty();
      $(".giphyDescription").empty();
    
      $(".giphyTitle").append(gifTitle);
      $(".giphyImage").append(postedGifImage);

      // $(".giphyDescription").append(newsDescription);

    });

  //News API call
  var currentTime = new Date();

  var newsApiKey = "6a8e8b0ab1ed4f0f8bf80b66df812407"
  var newsQueryURL = "https://newsapi.org/v2/everything?from=" + momentTime+ "&q="+ searchTerm + "&sortBy=popularity&apiKey=" + newsApiKey;
  var headline = 
  console.log(momentTime);
  console.log(newsQueryURL);

  $.ajax ({
    url:newsQueryURL,
    method: "GET"
  }).then(function(response) {
    var newsItem = response.articles;
    var title = newsItem[0].title;
    var description = newsItem[0].description;
    var newsImage = newsItem[0].urlToImage;
    console.log(title);
    console.log(description);
    console.log(newsImage);
    console.log(response);
    var postedTitle = title;
    var newsURL = $("<a>").attr("href", response.url).append(postedTitle);
    var postedNewsImage = $("<img>").attr("src", newsImage);
    var newsDescription = $("<p>").text(description);
    
    $(".newsLink").empty();
    $(".newsImages").empty();
    $(".newsTitle").empty();

    $(".newsTitle").append(postedTitle);
    $(".newsImages").append(postedNewsImage);
    $(".newsLink").append(newsDescription);
  });
});

