function clock() {


    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("am");
    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();


    
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    

}

setInterval(clock, 1000);




function setTime() {
    var i = document.getElementById("morning").value;
    var hr = new Date().getTime();
 if(i == hr){
    document.getElementById("content").innerHTML = "let's have some breakfast";
    document.getElementById("img-container").style.backgroundImage= "url(./images/bf.jpg)";
 }
 else{
    document.getElementById("content").innerHTML = "let's have some breakfast";
    document.getElementById("img-container").style.backgroundImage= "url(./images/bf.jpg)";
 
 }
}


function setTime() {
    var i = document.getElementById("day").value;
    var hr = new Date().getTime();
 if(i == hr){
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
 if(i == hr){
    document.getElementById("content").innerHTML = "Let's take a nap";
    document.getElementById("img-container").style.backgroundImage= "url(./images/sleep.png)";
 }
 else{
    document.getElementById("content").innerHTML = "Let's take a nap";
    document.getElementById("img-container").style.backgroundImage= "url(./images/sleep.png)";
 
 }
}



