import React, { useState } from "react";
import Cart from "./Cart";
import { useCart } from "../Context/Cart";
import { NavLink } from "react-router-dom";

export default function () {
   const [viewCart, setViewCart] = useState(false);
   const { getTotalItems } = useCart();
   const onCart = () => {
      setViewCart(true);
   };
   const offCart = () => {
      setViewCart(false);
   };
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
               <NavLink className="navbar-brand" to="/">
                  Gallery
               </NavLink>

               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink
                           className="nav-link active"
                           aria-current="page"
                           to="/shop"
                        >
                           Shop
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                           About Us
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                           Contact Us
                        </NavLink>
                     </li>
                  </ul>
                  <button className="btn btn-danger" onClick={onCart}>
                     View Cart{" "}
                     <span class="badge bg-secondary">{getTotalItems()}</span>
                  </button>
               </div>
            </div>
         </nav>
         {viewCart && <Cart offCart={offCart} />}
      </div>
   );
}
