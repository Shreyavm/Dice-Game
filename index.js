var randomNumber=Math.random();
randomNumber=Math.floor(randomNumber*6)+1;
var randomImage="dice"+randomNumber+".png";

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomImage2="dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src","images/"+randomImage);
document.querySelector(".img2").setAttribute("src","images/"+randomImage2);

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}

document.querySelector(".img1").addEventListener("click",img11);

function img11()
{
    var randomNumber=Math.random();
randomNumber=Math.floor(randomNumber*6)+1;
var randomImage="dice"+randomNumber+".png";
document.querySelector(".img1").setAttribute("src","images/"+randomImage);
if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}
}

