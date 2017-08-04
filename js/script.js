//setting up the API call
var req = new XMLHttpRequest();
req.open("POST", "https://api.github.com", true);
req.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  alert("Success: " + r.responseText);
};
req.send("its workinnnnnggggg");