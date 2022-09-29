
 import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()

let arr= JSON.parse(localStorage.getItem("alok"))
console.log(arr)

let orbitz=[
  {
    name: "The Leela Palace New Delhi",
    about: "Photo gallery for The Leela Palace New Delhi",
    image1: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/bada04cf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    place: "Delhi",
    refund: "Fully refundable",
    price: "The price is $203",
    total: "$239 total",
    info: "More information about The Leela Palace New Delhi, Opens in a new window",
    review:"4.6/5"
  },
    {
      name: "The Bodhi Tree",
      about: "Photo gallery for The Bodhi Tree",
      image1: "https://images.trvl-media.com/hotels/46000000/45720000/45717700/45717624/f8056c0a.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $97",
      total: "$108 total",
      info: "More information about The Bodhi Tree, Opens in a new window",
      review: "4.7/5"
    },
    {
      name: "The Grand Dragon Ladakh",
      about: "Photo gallery for The Grand Dragon Ladakh",
      image1: "https://images.trvl-media.com/hotels/3000000/2800000/2794300/2794209/6a30ddfa.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $248",
      total: "$292 total",
      info: "More information about The Grand Dragon Ladakh, Opens in a new window",
      review: "4.5/5"
    },
    {
      name: "Le Mentok Wellness Resort",
      about: "Photo gallery for Le Mentok Wellness Resort",
      image1: "https://images.trvl-media.com/hotels/50000000/49100000/49099000/49098916/0344ca03.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $94",
      total: "$105 total",
      info: "More information about Le Mentok Wellness Resort, Opens in a new window",
      review: "4.4/5"
    },
    {
      name: "The Indus Valley",
      about: "Photo gallery for The Indus Valley",
      image1: "https://images.trvl-media.com/hotels/28000000/27880000/27872600/27872599/12f9b913.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $219",
      total: "$259 total",
      info: "More information about The Indus Valley, Opens in a new window",
      review: "4.2/5"
    },
    {
      name: "Hotel Real Siachen",
      about: "Save Hotel Real Siachen to your lists",
      image1:"https://images.trvl-media.com/hotels/31000000/30080000/30076800/30076769/a046f022.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "srinagar",
      refund: "Fully refundable",
      price: "The price is $27",
      total: "$31 total",
      info: "More information about Hotel Real Siachen, Opens in a new window",
      review: "4.1/5"
    },
    {
      name: "Hotel The Kaiser Palace",
      about: "Save Hotel The Kaiser Palace to your lists",
      image1:"https://images.trvl-media.com/hotels/78000000/77990000/77983700/77983691/eb8ba38b.jpg?impolicy=resizecrop&rw=598&ra=fit",
      place: "srinagar",
      refund: "Fully refundable",
      price: "The price is $78",
      total: "$88 total",
      info: "More information about Hotel The Kaiser Palace, Opens in a new window",
      review:"4.4/5"
    },

    {
      name: "TIH Hotel Ladakh Heaven",
      about: "Save TIH Hotel Ladakh Heaven to your lists",
      image1:"https://images.trvl-media.com/hotels/18000000/17070000/17062200/17062190/1801e1a0.jpg?impolicy=resizecrop&rw=598&ra=fit",
      place: "srinagar",
      refund: "Reserve now, pay later",
      price: "The price is $55",
      total: "$62 total",
      info: "More information about TIH Hotel Ladakh Heaven, Opens in a new window",
      review:"4.3/5"
    },

    {
      name: "Grand Heritage",
      about: "Feel The Taste of Heaven",
      image1:"https://r1imghtlak.mmtcdn.com/a111df96329211e8b9720224510f5e5b.jpg?&output-quality=75&output-format=webp",
      place: "Bengaluru",
      refund: "Reserve now, pay later",
      price: "The price is $95",
      total: "$102 total",
      info: "More information about Grand Heritage, Opens in a new window",
      review:"4.8/5"
    },

    {
      name: "Grand Mumtaz Resorts Gulmarg",
      about: "Feel The Taste of Snow",
      image1:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c7/ed/ed/grand-mumtaz-resorts.jpg?w=1200&h=-1&s=1",
      place: "srinagar",
      refund: "Reserve now, pay later",
      price: "The price is $105",
      total: "$122 total",
      info: "More information about Grand Mumtaz Resorts Gulmarg , Opens in a new window",
      review:"4.8/5"
    },

    {
      name: " Hotel Glacier Heights",
      about: "Feel The Taste of Nature",
      image1:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/05/Hotel-Glacier-Heights-400x266.jpg",
      place: "Delhi",
      refund: "Reserve now, pay later",
      price: "The price is $95",
      total: "$100 total",
      info: "More information about Hotel Glacier Heights , Opens in a new window",
      review:"4.8/5"
    },

    {
      name: "Radisson Blu Plaza Delhi Airport",
      about: "Photo gallery for Radisson Blu Plaza Delhi Airport",
      image1: "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/6bc105d7.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place:"Delhi",
      refund: "Fully refundable",
      price: "The price is $100",
      total: "$123 total",
      info: "More information about Radisson Blu Plaza Delhi Airport, Opens in a new window",
      review:"4.4/5"
    },

    {
      name: "ibis New Delhi Aerocity Hotel",
      about: "Photo gallery for ibis New Delhi Aerocity Hotel",
      image1: "https://images.trvl-media.com/hotels/5000000/4810000/4804200/4804148/3778a93d.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place:"Delhi",
      refund: "Fully refundable",
      price: "The price is $69",
      total: "$77 total",
      info: "More information about ibis New Delhi Aerocity Hotel, Opens in a new window",
      review:"4.1/5"
    },

    {
      name: "Vivanta New Delhi, Dwarka",
      about: "Photo gallery for Vivanta New Delhi, Dwarka",
      image1: "https://images.trvl-media.com/hotels/9000000/8740000/8738300/8738241/40cd75b4.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $89",
      total: "$99 total",
      info: "More information about Vivanta New Delhi, Dwarka, Opens in a new window",
      review:"4.4/5"
    },

    {
      name: "Andaz  - a concept by Hyatt",
      about: "Photo gallery for Andaz  - a concept by Hyatt",
      image1: "https://images.trvl-media.com/hotels/14000000/13240000/13235700/13235605/c31bea52.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Bengaluru",
      refund: "Fully refundable",
      price: "The price is $137",
      total: "$162 total",
      info: "More information about Andaz  - a concept by Hyatt, Opens in a new window",
      review:"3.9/5"
    },
        
    {
      name: "Courtyard by Marriott Amritsar",
      about: "Photo gallery for Courtyard by Marriott Amritsar",
      image1: "https://images.trvl-media.com/hotels/45000000/44920000/44918400/44918364/b0f37765.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "chandigarh",
      refund: "Fully refundable",
      price: "$66 total",
      total:"$99 total",
      info: "More information about Courtyard by Marriott Amritsar, Opens in a new window",
      review:"4.4/5"
    },

    {
      name: "Fairfield by Marriott Amritsar",
      about: "Photo gallery for Fairfield by Marriott Amritsar",
      image1: "https://images.trvl-media.com/hotels/21000000/20120000/20114900/20114815/d51345b4.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "chandigarh",
      refund: "Fully refundable",
      price: "$48 total",
      total:"$99 total",
      info: "More information about Fairfield by Marriott Amritsar, Opens in a new window",
      review:"4.1/5",
    },

    {
      name: "Holiday Inn Amritsar Ranjit Avenue, an IHG Hotel",
      about: "Photo gallery for Holiday Inn Amritsar Ranjit Avenue, an IHG Hotel",
      image1: "https://images.trvl-media.com/hotels/6000000/5620000/5613200/5613173/ce38ecf6.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "chandigarh",
      refund: "Fully refundable",
      price: "$66 total",
      total: "$76 total",
      info: "More information about Holiday Inn Amritsar Ranjit Avenue, an IHG Hotel, Opens in a new window",
      review:"4.1/5",
    },

 

    {
      name: "The Oberoi, New Delhi",
      about: "Photo gallery for The Oberoi, New Delhi",
      image1: "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/85266bca.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $197",
      total: "$233 total",
      info: "More information about The Oberoi, New Delhi, Opens in a new window",
      review:"4.7/5"
    },

    {
      name: "The Oberoi Gurgaon",
      about: "Photo gallery for The Oberoi Gurgaon",
      image1: "https://images.trvl-media.com/hotels/5000000/4330000/4327800/4327701/4312fc0a.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $236",
      total: "$278 total",
      info: "More information about The Oberoi Gurgaon, Opens in a new window",
      review:"4.6/5"
    },
    
    {
      name: "Shangri-La Eros, New Delhi",
      about: "Photo gallery for Shangri-La Eros, New Delhi",
      image1: "https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/2fefac0e.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Delhi",
      refund: "Fully refundable",
      price: "The price is $100",
      total: "$118 total",
      info: "More information about Shangri-La Eros, New Delhi, Opens in a new window",
      review:"4.1/5"
    },

    {
      name: "Novotel Hyderabad Airport Hotel",
      about: "Photo gallery for Novotel Hyderabad Airport Hotel",
      image1: "https://images.trvl-media.com/hotels/3000000/2050000/2046400/2046352/2a311630.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "hyderabad",
      refund: "Fully refundable",
      price: "The price is $101",
      total: "$120 total",
      info: "More information about Novotel Hyderabad Airport Hotel, Opens in a new window",
      review:"3.9/5"
    },

    {
      name: "Taj Falaknuma Palace",
      about: "Photo gallery for Taj Falaknuma Palace",
      image1: "https://images.trvl-media.com/hotels/4000000/3150000/3141200/3141149/1cf73709.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "hyderabad",
      refund: "Fully refundable",
      price: "The price is $497",
      total: "$587 total",
      info: "More information about Taj Falaknuma Palace, Opens in a new window",
      review:"4.3/5"
    },

    {
      name: "Hotel Olympia Inn",
      about: "Photo gallery for Hotel Olympia Inn",
      image1: "https://images.trvl-media.com/hotels/17000000/16020000/16018300/16018291/265776dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "hyderabad",
      refund: "Fully refundable",
      price: "The price is $37",
      total: "$42 total",
      info: "More information about Hotel Olympia Inn, Opens in a new window",
      review:"3.8/5"
    },

    {
      name: "Lemon Tree Hotel Banjara Hills",
      about: "Photo gallery for Lemon Tree Hotel Banjara Hills",
      image1: "https://images.trvl-media.com/hotels/23000000/22430000/22420700/22420639/eac32558.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "hyderabad",
      refund: "Fully refundable",
      price: "The price is $88",
      total: "$109 total",
      info: "More information about Lemon Tree Hotel Banjara Hills, Opens in a new window",
      review:"3.9/5"
    },

    {
      name: "ITC Windsor, A Luxury Collection Hotel, Bengaluru",
      about: "Photo gallery for ITC Windsor, A Luxury Collection Hotel, Bengaluru",
      image1: "https://images.trvl-media.com/hotels/1000000/20000/15000/14912/8ba84861.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Bengaluru",
      refund: "Fully refundable",
      price: "The price is $150",
      total: "$178 total",
      info: "More information about ITC Windsor, A Luxury Collection Hotel, Bengaluru, Opens in a new window",
      review:"3.4/5"
    },

    {   
      name: "Shangri-La Bengaluru",
      about: "Photo gallery for Shangri-La Bengaluru",
      image1: "https://images.trvl-media.com/hotels/13000000/12250000/12246300/12246261/264e5bce.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Bengaluru",
      refund: "Fully refundable",
      price: "The price is $150",
      total: "$177 total",
      info: "More information about Shangri-La Bengaluru, Opens in a new window",
      review:"4.1/5"
    },

    { 
      name: "Atlaantic Inn",
      about: "Photo gallery for Atlaantic Inn",
      image1: "https://images.trvl-media.com/hotels/10000000/9670000/9662500/9662496/85c1ed73.jpg?impolicy=resizecrop&rw=455&ra=fit",
      place: "Bengaluru",
      refund: "Fully refundable",
      price: "The price is $20",
      total: "$22 total",
      info: "More information about Atlaantic Inn, Opens in a new window",
      review:"4.4/5"
    },

    ];
   display()     

function display(){
  orbitz.map(function(elem){
    // console.log(elem)
    let container2= document.getElementById("container2")
    let ascontainer1= document.getElementById("ascontainer1")
    let ascontainer2= document.getElementById("ascontainer2")
    let div1= document.createElement("div")
    let div2= document.createElement("div")
    div2.setAttribute("class","asdiv2")
    let name= document.createElement("h3")
    name.innerText=elem.name
    name.addEventListener("click",function(){
      nameAdd(elem)
    })
    let about= document.createElement("p")
    about.innerText=elem.about
    let image= document.createElement("img")
    image.src=elem.image1
    image.setAttribute("class","asimage")
 
    let place=document.createElement("p")
    place.innerText=elem.place
    // console.log(place.innerText)
    let refund= document.createElement("p")
    refund.innerText=elem.refund
    refund.setAttribute("class","asrefund")
    let price=document.createElement("p")
    price.innerText=elem.price
    let total= document.createElement("p")
    total.innerText=elem.total
    let info= document.createElement("p")
    info.innerText=elem.info
    let review= document.createElement("p")
    review.innerText=elem.review
    review.setAttribute("class","asreview")
    div1.append(image)
    
    div2.append(name,place,refund,price,review)
    
    
    if(arr===place.innerText){
      console.log(elem)
      ascontainer1.append(div1)
      ascontainer2.append(div2)
      container2.append(ascontainer1,ascontainer2)
    }
 
  })      
}
function nameAdd(elem){
  // console.log("aaa")
  window.location.href="booking.html"
}
 

 
 

 import {footer} from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()