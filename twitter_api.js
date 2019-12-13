window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
  
    return t;
  }(document, "script", "twitter-wjs"));

var twitterQueryUrl = "";
var twitterApiKey = {"api-key": "kdmYisJR9qHIxM63SiBWueSZs"};
var twitterSecret = "JFIDFmlfIdze1YUF8O1FgnepPYjcQP2ItxYZ5wcTcS8BD0LM25";
var oAuth = "";
var twitterLink = "https://api.twitter.com/1.1/search/tweets.json?";