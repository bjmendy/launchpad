//setting up the API call
var req = new XMLHttpRequest();
req.open("GET", "https://api.github.com", true);
req.onreadystatechange = function () {
  if (req.readyState != 4 || req.status != 200) return;
  alert("Success!");
};
req.send("its workinnnnnggggg");

var body = document.getElementsByTagName ('body');
var angularHeader = document.createElement("h1");
var emberHeader = document.createElement("h1");
var vueHeader = document.createElement("h1");
var heading = document.createElement("h1");

//REACT SECTION
var reactHeader = document.createElement("h1");
reactHeader.innerHTML = "React";
body.appendChild(reactHeader);


// response1 = new Response();
// Promise<Response> fetch("http://api.github.com/repos/facebook/react/forks"[, GET]);

$.ajax({
  url: 'http://api.github.com/repos/facebook/react/forks',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    var reactForksCount = "The number of forks for this repo is " + response1.forks_count;
      console.log(response1.reactForksCount)
        console.log(response1);

var reactForks = document.createElement("h2");
  reactForks.setAttribute("id", "reactforks");
  reactForks.innerHTML = reactForksCount;
  body.appendChild(reactForks);

// var body = document.getElementsByTagName ('body');

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
var reactCommits = document.createElement("h2");
  reactCommits.setAttribute("id", "reactcommits");
  reactCommits.innerHTML = reactCommitsCount;
  body.appendChild(reactCommits);


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
var reactPulls = document.createElement("h2");
  reactPulls.setAttribute("id", "reactpulls");
  reactPulls.innerHTML = reactPullsCount;
  body.appendChild(reactPulls);

// //ANGULAR SECTION
var angularHeader = document.createElement("h1");
angularHeader.innerHTML = "Angular";
body.appendChild(angularHeader);
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

var angularForks = document.createElement("h2");
  angularForks.setAttribute("id", "angularforks");
  angularForks.innerHTML = angularForksCount;
  body.appendChild(angularForks);

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
var angularCommits = document.createElement("h2");
  angularCommits.setAttribute("id", "angularcommits");
  angularCommits.innerHTML = angularCommitsCount;
  body.appendChild(angularCommits);

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
var angularPulls = document.createElement("h2");
  angularPulls.setAttribute("id", "angularpulls");
  angularPulls.innerHTML = angularPullsCount;
  body.appendChild(angularPulls);

// //EMBER SECTION
var emberHeader = document.createElement("h1");
emberHeader.innerHTML = "Ember";
body.appendChild(emberHeader);

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
var emberForks = document.createElement("h2");
  emberForks.setAttribute("id", "emberforks");
  emberForks.innerHTML = emberForksCount;
  body.appendChild(emberForks);

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
var emberCommits = document.createElement("h2");
  emberCommits.setAttribute("id", "embercommits");
  emberCommits.innerHTML = emberCommitsCount;
  body.appendChild(emberCommits);

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
var emberPulls = document.createElement("h2");
  emberPulls.setAttribute("id", "emberpulls");
  emberPulls.innerHTML = emberPullsCount;
  body.appendChild(emberPulls);

// //VUE SECTION
var vueHeader = document.createElement("h1");
vueHeader.innerHTML = "Vue";
body.appendChild(vueHeader);

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
var vueForks = document.createElement("h2");
  vueForks.setAttribute("id", "vueforks");
  vueForks.innerHTML = vueForksCount;
  body.appendChild(vueForks);

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
var vueCommits = document.createElement("h2");
  vueCommits.setAttribute("id", "vuecommits");
  vueCommits.innerHTML = vueCommitsCount;
  body.appendChild(vueCommits);

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
var vuePulls = document.createElement("h2");
  vuePulls.setAttribute("id", "vuepulls");
  vuePulls.innerHTML = vuePullsCount;
  body.appendChild(vuePulls);
