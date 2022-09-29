
import {navbar2} from "../components/navbar2.js"
document.getElementById("navbar3").innerHTML = navbar2()






let rgstdUser = JSON.parse(localStorage.getItem("userCredentials"));


document.getElementById("btn").addEventListener("click", signin);

function signin(){
     event.preventDefault();

     let email = document.getElementById("email").value ;
     let pass = document.getElementById("pass").value ;


     for(let i=0;i<rgstdUser.length;i++)
      {
            // console.log(rgstdUser[i]);
           if(rgstdUser[i].email == email && rgstdUser[i].pass == pass)
           {
               console.log(rgstdUser[i]);
            alert("Login Successfull");
            window.location.href='index.html';
            localStorage.setItem("name",JSON.stringify(rgstdUser[i].first_name))
            console.log(rgstdUser[i].first_name);
            break;
           }
           else{
             alert("Invalid Credentials");
             break;
           }
     
     }

     document.getElementById("email").value="";
   document.getElementById("pass").value="";

}



