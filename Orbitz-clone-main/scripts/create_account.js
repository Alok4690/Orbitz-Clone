

import {navbar2} from "../components/navbar2.js"
document.getElementById("navbar2").innerHTML = navbar2()




let arr_user=JSON.parse(localStorage.getItem('userCredentials'))||[];

document.getElementById("btn").addEventListener("click", createAccount)

function createAccount(){

    event.preventDefault();

var x = document.getElementById('email').value;
var y = document.getElementById('fname').value;
var z = document.getElementById('lname').value;
var a = document.getElementById('pass').value;

    var userCred={
                email: x,
                first_name: y,
                last_name: z,
                pass: a,
     };

     if(x == "" || y== "" || z== "" || a== "")
     {
         alert("Kindly fill up all your credentials");
     }
    else
    {
        arr_user.push(userCred);
    }

    localStorage.setItem("userCredentials",JSON.stringify(arr_user));
    
    document.getElementById('email').value="";
    document.getElementById('fname').value="";
    document.getElementById('lname').value="";
    document.getElementById('pass').value="";

    window.location.href="signup.html"
}




