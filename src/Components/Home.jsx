// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const Home = () => {
   return (
      <>
      <Header/>
         <div >
         <div className="App-header">
            <h1>Welcome to Paintica</h1>
         </div>
            <div className="row">
               <div className="col-md-8 offset-md-2">
                  <h2 className="text-center mt-5">
                     India's largest painting shop
                  </h2>
                  <p className="text-center">
                     Explore our collection of beautiful paintings and place
                     your order!
                  </p>
                  <div className="text-center">
                     <Link to="/shop" className="btn btn-primary mt-3">
                        Start Buying
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
