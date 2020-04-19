alert("working");
var randomNumber1 = Math.ceil(Math.random()*6);
var newImage1 = "images/dice"+randomNumber1+".png";
document.querySelector(".dice .img1").setAttribute("src",newImage1);

var randomNumber2 = Math.ceil(Math.random()*6);
var newImage2 = "images/dice"+randomNumber2+".png";
document.querySelector(".dice .img2").setAttribute("src",newImage2);

if randomNumber2 > randomNumber1{
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
else if randomNumber1 > randomNumber2{
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
