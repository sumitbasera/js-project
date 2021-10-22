let requestURL = 'https://meme-api.herokuapp.com/gimme';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const memes = request.response;
    const url = memes.url;
    const caption = memes.title;
    const source = memes.postLink;
    const like = memes.ups;
    const author = memes.author;
    const subreddity = memes.subreddit
     var image = document.getElementById("im");
     image.src = url;
     document.getElementById("caption").innerHTML = caption;
     document.getElementById("likes").innerHTML = like;
     document.getElementById("author").innerHTML = author;
     document.getElementById("source").href = source;
     document.getElementById("source2").href = url;
     document.getElementById("source3").href = subreddity;

     
  }

  function refresh(){
    window.location.reload("Refresh")
  }


  
  
