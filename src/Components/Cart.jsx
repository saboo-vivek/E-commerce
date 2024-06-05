import React, { useState } from "react";
import { useCart } from "../Context/Cart";
import ReactDOM from "react-dom";

const Cart = ({ offCart }) => {
   const { cartItems, removeFromCart,handleQuantityChange,totalSum } = useCart();

   return (
      <div className="portal-overlay">
         {ReactDOM.createPortal(
            <div className="portal-form-container ">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="col">
                     <h2 style={{ textAlign: "center", margin: 0 }}>Cart</h2>
                  </div>
                  <div className="col-auto">
                     <button className="btn btn-danger" onClick={offCart}>
                        X
                     </button>
                  </div>
               </div>
               <hr />

               <div className="scroll col">
                  {cartItems.map((item, index) => (
                     <div key={item.id} className="col-md-4 mb-3">
                        <div
                           class="card"
                           style={{ width: "650px", maxHeight: "200px" }}
                        >
                           <div class="row">
                              <div class="col-sm-5">
                                 <img
                                    src={item.imageUrl}
                                    className="card-img-top"
                                    alt={item.title}
                                    style={{ height: "200px" }}
                                 />
                              </div>
                              <div class="col-sm-7">
                                 <div class="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                       Price: ${item.price}
                                    </p>
                                    <p className="card-text">
                                       <label>Quantity: </label>
                                       <input
                                          type="number"
                                          value={item.quantity}
                                          onChange={(e) =>
                                             handleQuantityChange(
                                                item.id,
                                                parseInt(e.target.value)
                                             )
                                          }
                                       />
                                    </p>
                                    <button
                                       className="btn btn-danger"
                                       onClick={() => removeFromCart(item.id)}
                                    >
                                       Remove Item
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <hr />
               <div className="d-flex justify-content-between align-items-center">
                  <div className="col">
                     <h4>Total :{totalSum()}</h4>
                  </div>
                  <div className="col-auto">
                     <button className="btn btn-primary">Proceed to Pay</button>
                  </div>
               </div>
            </div>,
            document.getElementById("portal-root")
         )}
      </div>
   );
};

export default Cart;