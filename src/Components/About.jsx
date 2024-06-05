import React from "react";
import Header from "./Header";
const About = () => {
   return (
      <div>
         <Header />
         <div className="App-header">
            <h2>About Us</h2>
         </div>
         <div>
            <p>
               Welcome to our shopping website! We strive to provide the best
               shopping experience for our customers.
            </p>
            <p>
               At our store, you can find a wide range of products, including
               clothing, electronics, home goods, and much more.
            </p>
            <p>
               Our mission is to offer high-quality products at affordable
               prices, along with excellent customer service.
            </p>
            <p>
               Thank you for choosing us for your shopping needs. Happy
               shopping!
            </p>
         </div>
      </div>
   );
};

export default About;
