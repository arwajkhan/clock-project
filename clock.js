function currentTime() {
   let date = new Date(); 
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();
   let session = "AM";

   if(hh == 0){
       hh = 12;
   }
   if(hh > 12){
       hh = hh - 12;
       session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
     
    let time = hh + ":" + mm + ":" + ss + " " + session;
 
   document.getElementById("clock").innerText = time; 
   let t = setTimeout(function(){ currentTime() }, 1000);
 }
 currentTime();



function setTime() {
   var i = document.getElementById("morning").value;
   var clock = new Date().getTime();
if(i == clock){
   document.getElementById("content").innerHTML = "let's have some breakfast";
   document.getElementById("img-container").style.backgroundImage= "url(./images/bf.jpg)";
}
else{
   document.getElementById("content").innerHTML = "let's have some breakfast";
   document.getElementById("img-container").style.backgroundImage= "url(./images/bf.jpg)";

}
}


function setTime() {
  
if(i == clock){
   document.getElementById("content").innerHTML = "let's have some lunch";
   document.getElementById("img-container").style.backgroundImage= "url(./images/lunch.jpg)";
}
else{
   document.getElementById("content").innerHTML = "let's have some lunch";
   document.getElementById("img-container").style.backgroundImage= "url(./images/lunch.jpg)";

}
}


function setTime() {
   var i = document.getElementById("night").value;
   var hr = new Date().getTime();
if(i == clock){
   document.getElementById("content").innerHTML = "Let's take a nap";
   document.getElementById("img-container").style.backgroundImage= "url(./images/sleep.png)";
}
else{
   document.getElementById("content").innerHTML = "Let's take a nap";
   document.getElementById("img-container").style.backgroundImage= "url(./images/sleep.png)";

}
}