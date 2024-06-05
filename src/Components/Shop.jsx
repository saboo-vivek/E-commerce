import React from "react";
import { useCart } from "../Context/Cart";
import Header from "./Header";
export default function Shop() {
   const { addToCart } = useCart();
   const productsArr = [
      {
         id: 11,
         title: "Colors",
         price: 100,
         imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      },

      {
         id: 12,
         title: "Black and white Colors",
         price: 50,
         imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },

      {
         id: 13,
         title: "Yellow and Black Colors",
         price: 70,
         imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },

      {
         id: 14,
         title: "Blue Color",
         price: 100,
         imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
   ];

   return (
      <div>
         <Header/>
         <div className="container>">
            <div className="App-header">
               <h2>Shop</h2>
            </div>
         </div>
         <div className="conatiner">
            <div className="row">
               {productsArr.map((item, index) => (
                  <div key={item.id} className="col-md-4 mb-5">
                     <div className="card" style={{ width: "18rem" }}>
                        <img
                           src={item.imageUrl}
                           className="card-img-top"
                           alt="..."
                        />
                        <div className="card-body">
                           <h5 className="card-title">{item.title}</h5>
                           <h6>Price -{item.price}</h6>
                           <button
                              className="btn btn-primary "
                              onClick={() => addToCart(item)}
                              style={{ width: "100%" }}
                           >
                              Add To Cart
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
