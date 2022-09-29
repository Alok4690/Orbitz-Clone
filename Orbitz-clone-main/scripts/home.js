

// import {navbar,footer} from "../components/head-foot.js"
// document.getElementById("navbar").innerHTML = navbar();
// document.getElementById("foot").innerHTML = footer();

import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

document.body.style.zoom="90%"

let username= JSON.parse(localStorage.getItem("name"))||"Sign in"
console.log(username)
document.getElementById("signin").innerText=username;



// main options in search
let gstays = document.getElementById("glstays")
gstays.addEventListener("click",stayFunc)
gstays.style.color="teal"

let gflights = document.getElementById("glflights")
gflights.addEventListener("click",flightFunc)

let gcars = document.getElementById("glcars")
gcars.addEventListener("click",carFunc)

let gpackages = document.getElementById("glpackages")
gpackages.addEventListener("click",packageFunc)

let gtodo = document.getElementById("gltodo")
gtodo.addEventListener("click",todoFunc)

let gcruises = document.getElementById("glcruises")
gcruises.addEventListener("click",cruiseFunc)

//search display content
let gstaysdisp=document.getElementById("gstaymain")

let gflightsdisp=document.getElementById("gflightopt")

let gcarsdisp=document.getElementById("gcaropt")

let gpackagesdisp=document.getElementById("gpackageopt")

let gtododisp=document.getElementById("gthingstodo")

let gcruisesdisp=document.getElementById("gcruise")


let mainImg=document.getElementById("imgmain")


function stayFunc(){
    console.log("hi");
    gstays.style.color="teal"
    gflights.style.color="#616161"
    gcars.style.color="#616161"
    gpackages.style.color="#616161"
    gtodo.style.color="#616161"
    gcruises.style.color="#616161"

    mainImg.style.height="500px"

    gstaysdisp.style.display="block"
    gflightsdisp.style.display="none";
    gcarsdisp.style.display="none";
    gpackagesdisp.style.display="none";
    gtododisp.style.display="none";
    gcruisesdisp.style.display="none";

}

function flightFunc(){
    gstays.style.color="#616161"
    gflights.style.color="teal"
    gcars.style.color="#616161"
    gpackages.style.color="#616161"
    gtodo.style.color="#616161"
    gcruises.style.color="#616161"

    mainImg.style.height="500px"

    gstaysdisp.style.display="none"
    gflightsdisp.style.display="block";
    gcarsdisp.style.display="none";
    gpackagesdisp.style.display="none";
    gtododisp.style.display="none";
    gcruisesdisp.style.display="none";
}

function carFunc(){
    gstays.style.color="#616161"
    gflights.style.color="#616161"
    gcars.style.color="teal"
    gpackages.style.color="#616161"
    gtodo.style.color="#616161"
    gcruises.style.color="#616161"

    mainImg.style.height="550px"

    gstaysdisp.style.display="none"
    gflightsdisp.style.display="none";
    gcarsdisp.style.display="block";
    gpackagesdisp.style.display="none";
    gtododisp.style.display="none";
    gcruisesdisp.style.display="none";
}

function packageFunc(){
    gstays.style.color="#616161"
    gflights.style.color="#616161"
    gcars.style.color="#616161"
    gpackages.style.color="teal"
    gtodo.style.color="#616161"
    gcruises.style.color="#616161"

    mainImg.style.height="500px"

    gstaysdisp.style.display="none"
    gflightsdisp.style.display="none";
    gcarsdisp.style.display="none";
    gpackagesdisp.style.display="block";
    gtododisp.style.display="none";
    gcruisesdisp.style.display="none";
}

function todoFunc(){
    gstays.style.color="#616161"
    gflights.style.color="#616161"
    gcars.style.color="#616161"
    gpackages.style.color="#616161"
    gtodo.style.color="teal"
    gcruises.style.color="#616161"

    mainImg.style.height="500px"


    gstaysdisp.style.display="none"
    gflightsdisp.style.display="none";
    gcarsdisp.style.display="none";
    gpackagesdisp.style.display="none";
    gtododisp.style.display="flex";
    gcruisesdisp.style.display="none";
}

function cruiseFunc(){

      gstays.style.color="#616161"
    gflights.style.color="#616161"
    gcars.style.color="#616161"
    gpackages.style.color="#616161"
    gtodo.style.color="#616161"
    gcruises.style.color="teal"

    mainImg.style.height="500px"
    
    gstaysdisp.style.display="none"
    gflightsdisp.style.display="none";
    gcarsdisp.style.display="none";
    gpackagesdisp.style.display="none";
    gtododisp.style.display="none";
    gcruisesdisp.style.display="block";
}

//Input modal

// let place=document.getElementById("gstaygoingtoinput")
// place.addEventListener("click", placeFunc);

// let check_in = document.getElementById("gstaycheckin")
// check_in.addEventListener("click",checkinFunc);

// let check_out = document.getElementById("gstaycheckout")
// check_out.addEventListener("click",checkoutFunc);

// let traveler = document.getElementById("gstaytravelers")
// traveler.addEventListener("click",travelerFunc);


// demo


var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btn = document.getElementById("gstaygoingtoinput");


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it


// second


var modal1 = document.getElementById("myModal1");


// Get the button that opens the modal
var btn1 = document.getElementById("gstaytravelers");


// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal||event.target == modal1) {
      modal.style.display = "none";
      modal1.style.display = "none";
    }
  }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }
let blr = document.getElementById("gbangalore")
blr.addEventListener("click",blrFunc)

let dli = document.getElementById("gdelhi")
dli.addEventListener("click",dliFunc)

let sgr = document.getElementById("gsrinagar");
sgr.addEventListener("click",sgrFunc)

let hyd = document.getElementById("ghyd")
hyd.addEventListener("click",hydFunc)

let chd = document.getElementById("gchd")
chd.addEventListener("click",chdFunc)

let destination_place= document.querySelector(".ggoingto")




function blrFunc(){
   destination_place.innerText="Bangalore"
    modal.style.display="none";
    localStorage.setItem("alok",JSON.stringify("Bengaluru"))
}
function dliFunc(){
    destination_place.innerText="Delhi"
    modal.style.display="none";
    localStorage.setItem("alok",JSON.stringify("Delhi"))
}
function sgrFunc(){
    destination_place.innerText="Srinagar"
    modal.style.display="none";
    localStorage.setItem("alok",JSON.stringify("srinagar"))
}
function hydFunc(){
    destination_place.innerText="Hyderabad"
    modal.style.display="none";
    localStorage.setItem("alok",JSON.stringify("hyderabad"))
}
function chdFunc(){
    destination_place.innerText="Chandigarh"
    modal.style.display="none";
    localStorage.setItem("alok",JSON.stringify("chandigarh"))
}

let cal = document.getElementById("gtimecheckin");
cal.addEventListener("change",fun)
function fun(){
var date1 = cal.valueAsNumber;
var date = new Date (date1)
var result= ""+date;
let ans = result.slice(4,10)
document.getElementById("gcheckindate").innerText=ans;
       
}


let cal1 = document.getElementById("gtimecheckout");
cal1.addEventListener("change",fun1)
function fun1(){
var date1 = cal1.valueAsNumber;
var date = new Date (date1)

var result= ""+date;
let ans = result.slice(4,10)
document.getElementById("gcheckoutdate").innerText=ans;
       
}

let searchbtn= document.getElementById("gheadbtn")
searchbtn.addEventListener("click",searchFunc)


function searchFunc(){
    window.location.href="search.html";
}



import {footer} from "../components/head-foot.js"
document.getElementById("foot").innerHTML = footer()
