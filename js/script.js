//setting up the API call
var req = new XMLHttpRequest();
req.open("GET", "https://api.github.com", true);

var body = document.getElementsByTagName ('body');
var angularHeader = document.createElement("h1");
var emberHeader = document.createElement("h1");
var vueHeader = document.createElement("h1");
var heading = document.createElement("h1");
var div = document.createElement("div");
var elem = document.createElement("img");
var elem2 = document.createElement("img");
var elem3 = document.createElement("img");
var elem4 = document.createElement("img");

//REACT SECTION
var reactSection = document.createElement("div")
var reactHeader = document.createElement("h1");
reactHeader.innerHTML = "React";
reactSection.appendChild(reactHeader);

elem.setAttribute("src", "css/images/react-logo-300x289.jpg");
reactSection.appendChild(elem);

$.ajax({
  url: 'http://api.github.com/repos/facebook/react/forks',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    var reactForksCount = "The number of forks for this repo is " + data.toString().length;
      console.log(reactForksCount.length)
        console.log(data);

var reactForks = document.createElement("h2");
  reactForks.setAttribute("id", "reactforks");
  reactForks.innerHTML = reactForksCount;
  reactSection.appendChild(reactForks);

  },
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/facebook/react/commits',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    var reactCommitsCount = "The number of commits for this repo is " + data.toString().length;
      console.log(reactCommitsCount.length)
        console.log(data);

var reactCommits = document.createElement("h2");
  reactCommits.setAttribute("id", "reactcommits");
  reactCommits.innerHTML = reactCommitsCount;
  reactSection.appendChild(reactCommits);

  },
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/facebook/react/pulls',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    var reactPullsCount = "The number of pull requests for this repo is " + data.toString().length;
      console.log(reactPullsCount.length)
        console.log(data);

var reactPulls = document.createElement("h2");
  reactPulls.setAttribute("id", "reactpulls");
  reactPulls.innerHTML = reactPullsCount;
  reactSection.appendChild(reactPulls);

  },
  error: function(){
    console.log("error");
  }
});

document.body.appendChild(reactSection);

// //ANGULAR SECTION
var angularSection = document.createElement("div");
var angularHeader = document.createElement("h1");
angularHeader.innerHTML = "Angular";
angularSection.appendChild(angularHeader)

elem2.setAttribute("src", "css/images/angular-card.jpg");
angularSection.appendChild(elem2);


$.ajax({
  url: 'http://api.github.com/repos/angular/angular.js/forks',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    var angularForksCount = "The number of forks for this repo is " + data.toString().length;
      console.log(angularForksCount.length)
        console.log(data);

var angularForks = document.createElement("h2");
  angularForks.setAttribute("id", "angularforks");
  angularForks.innerHTML = angularForksCount;
  angularSection.appendChild(angularForks);

  },
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/angular/angular.js/commits',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    var angularCommitsCount = "The number of commits for this repo is " + data.toString().length;
      console.log(angularCommitsCount.length)
        console.log(data);

var angularCommits = document.createElement("h2");
  angularCommits.setAttribute("id", "angularcommits");
  angularCommits.innerHTML = angularCommitsCount;
  angularSection.appendChild(angularCommits);

  },
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/angular/angular.js/pulls',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    var angularPullsCount = "The number of pull requests for this repo is " + data.toString().length;
      console.log(angularPullsCount.length)
        console.log(data);

var angularPulls = document.createElement("h2");
  angularPulls.setAttribute("id", "angularpulls");
  angularPulls.innerHTML = angularPullsCount;
  angularSection.appendChild(angularPulls);

  },
  error: function(){
    console.log("error");
  }
});

document.body.appendChild(angularSection);

// //EMBER SECTION
var emberSection = document.createElement("div");
var emberHeader = document.createElement("h1");
emberHeader.innerHTML = "Ember";
emberSection.appendChild(emberHeader);

elem3.setAttribute("src", "css/images/Ember.js_Logo_and_Mascot.jpg");
emberSection.appendChild(elem3);


$.ajax({
  url: 'http://api.github.com/repos/emberjs/ember.js/forks',
  type: "GET",
  dataType: 'json',
  success: function(data) {
      var emberForksCount = "The number of forks for this repo is " + data.toString().length;
        console.log(emberForksCount.length)
          console.log(data);

var emberForks = document.createElement("h2");
  emberForks.setAttribute("id", "emberforks");
  emberForks.innerHTML = emberForksCount;
  emberSection.appendChild(emberForks);

  },
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/emberjs/ember.js/commits',
  type: "GET",
  dataType: 'json',
  success: function(data) {
      var emberCommitsCount = "The number of commits for this repo is " + data.toString().length;
        console.log(emberCommitsCount.length)
          console.log(data);

var emberCommits = document.createElement("h2");
  emberCommits.setAttribute("id", "embercommits");
  emberCommits.innerHTML = emberCommitsCount;
  emberSection.appendChild(emberCommits);

  },
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/emberjs/ember.js/pulls',
  type: "GET",
  dataType: 'json',
  success: function(data) {
      var emberPullsCount = "The number of pull requests for this repo is " + data.toString().length;
        console.log(emberPullsCount.length)
          console.log(data);

var emberPulls = document.createElement("h2");
  emberPulls.setAttribute("id", "emberpulls");
  emberPulls.innerHTML = emberPullsCount;
  emberSection.appendChild(emberPulls);

  },
  error: function(){
    console.log("error");
  }
});

document.body.appendChild(emberSection);

// //VUE SECTION
var vueSection = document.createElement("div");
var vueHeader = document.createElement("h1");
vueHeader.innerHTML = "Vue";
vueSection.appendChild(vueHeader);

elem4.setAttribute("src", "css/images/vuelogo.jpg");
vueSection.appendChild(elem4);

$.ajax({
  url: 'http://api.github.com/repos/vuejs/vue/forks',
  type: "GET",
  dataType: 'json',
  success: function(data) {
        var vueForksCount = "The number of forks for this repo is " + data.toString().length;
          console.log(vueForksCount.length)
            console.log(data);

var vueForks = document.createElement("h2");
  vueForks.setAttribute("id", "vueforks");
  vueForks.innerHTML = vueForksCount;
  vueSection.appendChild(vueForks);

},
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/vuejs/vue/commits',
  type: "GET",
  dataType: 'json',
  success: function(data) {
        var vueCommitsCount = "The number of commits for this repo is " + data.toString().length;
          console.log(vueCommitsCount.length)
            console.log(data);

var vueCommits = document.createElement("h2");
  vueCommits.setAttribute("id", "vuecommits");
  vueCommits.innerHTML = vueCommitsCount;
  vueSection.appendChild(vueCommits);

},
  error: function(){
    console.log("error");
  }
});

$.ajax({
  url: 'http://api.github.com/repos/vuejs/vue/pulls',
  type: "GET",
  dataType: 'json',
  success: function(data) {
      var vuePullsCount = "The number of pull requests for this repo is " + data.toString().length;
        console.log(vuePullsCount.length)
          console.log(data);

var vuePulls = document.createElement("h2");
  vuePulls.setAttribute("id", "vuepulls");
  vuePulls.innerHTML = vuePullsCount;
  vueSection.appendChild(vuePulls);

},
  error: function(){
    console.log("error");
  }
});

document.body.appendChild(vueSection);
