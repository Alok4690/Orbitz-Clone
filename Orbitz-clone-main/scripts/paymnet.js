

let details_arr = JSON.parse(localStorage.getItem("userDetails")) || []

document.getElementById("complete_booking").addEventListener("click",compBooking);

function compBooking(){
    


let first_name=document.getElementById("first_name").value
let last_name=document.getElementById("last_name").value
let mobile=document.getElementById("mobile_number").value

let card_name = document.getElementById("card_name").value;
let card_num = document.getElementById("card_num").value;
let exp_month = document.getElementById("expiry_month").value;
let exp_year = document.getElementById("expiry_year").value;
let security = document.getElementById("sec_code").value;
let zip = document.getElementById("zip_code").value;


let obj ={
    firstName:first_name,
    lastName:last_name,
    mobileNo:mobile,
    cardName:card_name,
    cardNum:card_num,
    expMonth:exp_month,
    expYear:exp_year,
    secCode:security,
    zip:zip

}

details_arr.push(obj);

localStorage.setItem("userDetails",JSON.stringify(details_arr));

document.getElementById("first_name").value="";
document.getElementById("last_name").value="";
document.getElementById("mobile_number").value="";
document.getElementById("card_name").value="";
document.getElementById("card_num").value="";
document.getElementById("expiry_month").value="";
document.getElementById("expiry_year").value="";
document.getElementById("sec_code").value="";
document.getElementById("zip_code").value="";

window.location.href="success.html"

}

