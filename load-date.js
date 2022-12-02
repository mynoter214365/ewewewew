const severUrl ="https://1324-110-47-184-13.jp.ngrok.io";
fetch(severUrl +"/articles")
.then(function (response) {
  return response.json();
})
.then(function (json) {
 for(const article of json) {
  document.getElementById("title").innerHTML+='<li><a href="detail.html?id=' + article.id +'"  >'+article.title +'</a></li>'
  
 }
})
