//setting up the API call
var req = new XMLHttpRequest();
req.open("POST", "https://api.github.com", true);
req.onreadystatechange = function () {
  if (req.readyState != 4 || req.status != 200) return;
  alert("Success: " + req.responseText);
};
req.send("its workinnnnnggggg");

//LIST the pull requests from the api
//LIST the forks from the api
//LIST the commits from the api

var heading = document.createElement("h1");
heading.setAttribute("id", "Forks");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(data);
    },
  fail: function(error){
	console.log(error)
  }
});

var heading2 = document.createElement("h1");
heading2.setAttribute("id", "Commits");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(data);
    },
  fail: function(error){
	console.log(error)
  }
});

var heading3 = document.createElement("h1");
heading3.setAttribute("id", "Pull Requests");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(data);
    },
  fail: function(error){
	console.log(error)
  }
});
