let requestURLs = 'http://numbersapi.com/random/year?json';
let requests = new XMLHttpsRequest();
requests.open('GET', requestURLs);
requests.responseType = 'json';
requests.send();

requests.onload = function() {
    const facts = requests.response;
    let dinak = facts.number;
    let solution = facts.text;
    document.getElementById("din").innerHTML = dinak;
     document.getElementById("fac").innerHTML = solution;
  }

  function refresh(){
    window.location.reload("Refresh")
  }
