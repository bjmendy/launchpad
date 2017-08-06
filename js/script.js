//setting up the API call
var req = new XMLHttpRequest();
req.open("GET", "https://api.github.com", true);
req.onreadystatechange = function () {
  if (req.readyState != 4 || req.status != 200) return;
  alert("Success!");
};
req.send("its workinnnnnggggg");

//REACT SECTION
var heading = document.createElement("h1");
heading.setAttribute("id", "Forks");

response1 = new Response();

$.ajax({
  url: 'http://api.github.com/repos/facebook/react/forks',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    console.log(response1.forksCount)
      var forksCount = "The number of forks for this repo is " + response1.forks_count;
        console.log(response1);

var body = document.getElementsByTagName ('body')[0];
var div = document.createElement('div');
  div.innerHTML = forksCount;
  body.appendChild(div);

// if (forksCount.Name === 2012){
// body.appendChild(hungerGames);
//   console.log(response.Title + " has " response.Actors + "in it")
// }
  },
  error: function(){
    console.log("error");
  }
});


// var heading2 = document.createElement("h1");
// heading2.setAttribute("id", "Commits");

// $.ajax({
//   url: 'http://api.github.com/repos/facebook/react/commits',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
// 	console.log(error)
//   }
// });


// var heading3 = document.createElement("h1");
// heading3.setAttribute("id", "Pull Requests");

// $.ajax({
//   url: 'http://api.github.com/repos/facebook/react/pulls',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
// 	console.log(error)
//   }
// });

// //ANGULAR SECTION
// var heading = document.createElement("h1");
// heading.setAttribute("id", "Forks");

// response2 = new Response();

// $.ajax({
//   url: 'http://api.github.com/repos/angular/angular.js/forks',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//         console.log(response.Title, 'this is responding')
//     var hungerGames = "The movie " + response.Title + " was made in " + response.Year;
//     console.log(response);
// var body = document.getElementsByTagName ('body')[0];
// var div = document.createElement('div');
// div.innerHTML = hungerGames;
// body.appendChild(div);
// //create paragraph to store our hungerGames string
// var p = document.createElement('p');
// div.appendChild(p);
// p.innerHTML = hungerGames;
// p.style.color = 'red';

// if (hungerGames.Year === 2012){
// body.appendChild(hungerGames);
//   console.log(response.Title + " has " response.Actors + "in it")
// }
//   },
//   error: function(){
//     console.log("error");
//   }
// });


// var heading2 = document.createElement("h1");
// heading2.setAttribute("id", "Commits");

// $.ajax({
//   url: 'http://api.github.com/repos/angular/angular.js/commits',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
//   console.log(error)
//   }
// });


// var heading3 = document.createElement("h1");
// heading3.setAttribute("id", "Pull Requests");

// $.ajax({
//   url: 'http://api.github.com/repos/angular/angular.js/pulls',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
//   console.log(error)
//   }
// });

// //EMBER SECTION
// var heading = document.createElement("h1");
// heading.setAttribute("id", "Forks");

// response3 = new Response();

// $.ajax({
//   url: 'http://api.github.com/repos/emberjs/ember.js/forks',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//         console.log(response.Title, 'this is responding')
//     var hungerGames = "The movie " + response.Title + " was made in " + response.Year;
//     console.log(response);
// var body = document.getElementsByTagName ('body')[0];
// var div = document.createElement('div');
// div.innerHTML = hungerGames;
// body.appendChild(div);
// //create paragraph to store our hungerGames string
// var p = document.createElement('p');
// div.appendChild(p);
// p.innerHTML = hungerGames;
// p.style.color = 'red';

// if (hungerGames.Year === 2012){
// body.appendChild(hungerGames);
//   console.log(response.Title + " has " response.Actors + "in it")
// }
//   },
//   error: function(){
//     console.log("error");
//   }
// });


// var heading2 = document.createElement("h1");
// heading2.setAttribute("id", "Commits");

// $.ajax({
//   url: 'http://api.github.com/repos/emberjs/ember.js/commits',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
//   console.log(error)
//   }
// });


// var heading3 = document.createElement("h1");
// heading3.setAttribute("id", "Pull Requests");

// $.ajax({
//   url: 'http://api.github.com/repos/emberjs/ember.js/pulls',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
//   console.log(error)
//   }
// });

// //VUE SECTION
// var heading = document.createElement("h1");
// heading.setAttribute("id", "Forks");

// response4 = new Response();

// $.ajax({
//   url: 'http://api.github.com/repos/vuejs/vue/forks',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//         console.log(response.Title, 'this is responding')
//     var hungerGames = "The movie " + response.Title + " was made in " + response.Year;
//     console.log(response);
// var body = document.getElementsByTagName ('body')[0];
// var div = document.createElement('div');
// div.innerHTML = hungerGames;
// body.appendChild(div);
// //create paragraph to store our hungerGames string
// var p = document.createElement('p');
// div.appendChild(p);
// p.innerHTML = hungerGames;
// p.style.color = 'red';

// if (hungerGames.Year === 2012){
// body.appendChild(hungerGames);
//   console.log(response.Title + " has " response.Actors + "in it")
// }
//   },
//   error: function(){
//     console.log("error");
//   }
// });


// var heading2 = document.createElement("h1");
// heading2.setAttribute("id", "Commits");

// $.ajax({
//   url: 'http://api.github.com/repos/vuejs/vue/commits',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
//   console.log(error)
//   }
// });


// var heading3 = document.createElement("h1");
// heading3.setAttribute("id", "Pull Requests");

// $.ajax({
//   url: 'http://api.github.com/repos/vuejs/vue/pulls',
//   type: "GET",
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     },
//   fail: function(error){
//   console.log(error)
//   }
// });
