//setting up the API call
var req = new XMLHttpRequest();
req.open("GET", "https://api.github.com", true);
req.onreadystatechange = function () {
  if (req.readyState != 4 || req.status != 200) return;
  alert("Success!");
};
req.send("its workinnnnnggggg");

//LIST the pull requests from the api
//LIST the forks from the api
//LIST the commits from the api

var heading = document.createElement("h1");
heading.setAttribute("id", "Forks");

$.ajax({
  url: 'http://api.github.com/repos/octocat/Hello-World/forks',
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
  url: 'http://api.github.com/repos/octocat/Hello-World/commits',
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
  url: 'http://api.github.com/repos/octocat/Hello-World/pulls',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(data);
    },
  fail: function(error){
	console.log(error)
  }
});

// set up a for loop to loop through the calls
