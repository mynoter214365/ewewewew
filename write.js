window.onload=function(){
  const changeWrite=location.search.replace("?id=","articles/");
  fetch("https://1324-110-47-184-13.jp.ngrok.io/"+changeWrite)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    document.getElementById("title").innerHTML+=json.title
    document.getElementById("content").innerHTML+=json.content
  })
}