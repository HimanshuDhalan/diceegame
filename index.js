
var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;


var img1src="./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1src);

var randomNumber2;
randomNumber2=Math.floor(Math.random()*6)+1;

var img2src="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2src);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Won";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 Won 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}
