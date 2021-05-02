var n=prompt("Enter player one name:");
var m=prompt("Enter player two name:");
document.querySelector(".p1").innerHTML=n;
document.querySelector(".p2").innerHTML=m;
alert("click the roll button to start the game");
console.log(document.querySelector("button").setAttribute("onclick","imageChange1()"));
function imageChange1(){
   a=Math.ceil(Math.random()*6);
   b=Math.ceil(Math.random()*6);
   if (a>b){
     document.querySelector("h1").innerHTML="Winner: "+n;
   }
   if (a<b){
     document.querySelector("h1").innerHTML="Winner: "+m;
   }
   if (a==b) {
     document.querySelector("h1").innerHTML="Draw";
   }
   if (a=="2"){
      document.querySelector(".i1").setAttribute("src","d2.jpg");
   }
   if (a=="3"){
     document.querySelector(".i1").setAttribute("src","d3.jpg");
   }
   if (a=="4"){
     document.querySelector(".i1").setAttribute("src","d4.jpg");
   }
   if (a=="5"){
     document.querySelector(".i1").setAttribute("src","d5.jpg");
   }
   if (a=="6"){
     document.querySelector(".i1").setAttribute("src","d6.jpg");
   }
   if (a=="1"){
     document.querySelector(".i1").setAttribute("src","d1.jpg");
   }
   if (b=="2"){
     document.querySelector(".i2").setAttribute("src","d2.jpg");
   }
   if (b=="3"){
     document.querySelector(".i2").setAttribute("src","d3.jpg");
   }
   if (b=="4"){
     document.querySelector(".i2").setAttribute("src","d4.jpg");
   }
   if (b=="5"){
     document.querySelector(".i2").setAttribute("src","d5.jpg");
   }
   if (b=="6"){
     document.querySelector(".i2").setAttribute("src","d6.jpg");
   }
   if (b=="1"){
     document.querySelector(".i2").setAttribute("src","d1.jpg");
   }

}
