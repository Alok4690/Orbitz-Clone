
function navbar(){
    return `<div id="box-am">

    <div id="div1-am">
        <div>
            <img id="image-am" src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"/>
        </div>

        <div id="select-am">
            <select id="select-box-am" name="travels">
                <option value="more travels">More travel</option>
                <option><img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=600&h=338&q=medium"/>Stays</option>
                <option><img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=600&h=338&q=medium"/>Flights</option>
                <option><img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=600&h=338&q=medium"/>Packages</option>
                <option><img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=600&h=338&q=medium"/>Cars</option>
                <option><img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=600&h=338&q=medium"/>Cruises</option>
                <option><img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=600&h=338&q=medium"/>Things to do</option>
                <option value="deals">Deals</option>
                <option>Groups & meetings</option>
                <option>Travel Blog</option>
            </select>
        </div>
    </div>

    <div id="div2-am">
        <p id="espanol">Espanol</p>
        <p><a id="list_property" href="property.html">List your property</a></p>
        <p><a  id="support" href="support.html">Support</a></p>
        <p id="trips">Trips</p>
        <p><a id="signin" href="signup.html">Sign in</a></p>
    </div>

  </div>`;
}

function footer(){
    return ` <div id="footer">

    <div id="image-div-am">
        <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"/>
    </div>
   
    <div id="list-div-am">
      
       <div class="list-am">
           <p class="head-am">Company</p>
           <p>About</p>
           <p>Jobs</p> 
           <p>List your property</p> 
           <p>Partnerships</p> 
           <p>Newsroom</p>
           <p>Investor Relations</p>
           <p>Site Map</p>
           <p>Orbitz Rewards</p>
           <p>Advertising</p> 
       </div>

       <div class="list-am">
        <p class="head-am">Explore</p>
        <p>Hotels in United States</p>
        <p>Vacation Rentals in United States</p>
        <p>Car Rentals in United States</p>
        <p>Domestic Flights</p>
        <p>Vacation Packages in United States</p>
        <p>Orbitz Reviews</p>
        <p>Orbitz Coupons</p>
        <p>LGBTQ Travel</p>
        <p>Unique Accommodations</p>
        <p>Travel Blog</p>
      </div>

      <div class="list-am">    
        <p class="head-am">Policies</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Vrbo terms and conditions</p>
        <p>Orbitz Rewards Terms</p>
        <p>Do not sell my personal information</p>
      </div>

      <div class="list-am">
        <p class="head-am">Help</p>
        <p>Support</p>
        <p>Cancel your hotel or vacation rental booking</p>
        <p>Cancel your flight</p>
        <p>Refund timelines, policies & processes</p>
        <p>Use an Orbitz Coupon</p>
      </div> 
    </div>
        
</div>

<div id="rights-am">     
    <p>© 2022 Orbitz, LLC, an Expedia Group Company.All Rights Reserved</p>
    <p>Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50</p>
</div>`;
}

export {navbar,footer}