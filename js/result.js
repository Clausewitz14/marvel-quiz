var head=document.getElementById("result-header")
var body=document.getElementById("result-body")

function reset(){
location.href="./index.html"
}

var points=sessionStorage.getItem("points")

if(points >=5){
head.innerText="You've got "+ points +" out of 6 right"
body.innerText="Woohoo! Seems like you're smarter than Ultron!"
}
else{
head.innerText="You've got only "+ points +" out of 6 right"
body.innerText="Noooo! What happened?! Gotta read more Marvel comics :0"
}