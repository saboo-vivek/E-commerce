// ContactUs.js
import React, { useState } from "react";
import Header from "./Header";


const ContactUs = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('CONTACT US BUTTON CLICKED')
      try {
         let response = await fetch("https://e-commerce-74182-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });
         const data=await response.json()
         console.log("RESPONSE : ", response.status);
      } catch (error) {
         console.error("Error storing data:", error);
      }
   };

   return (
      <div>
         <Header />
         <div className="App-header">
            <h2>Contact Us</h2>
         </div>
         <div className="row justify-content-center mt-5 contact">
            <div className="col-md-6 ">
               {/* <h2 className="text-center">Contact Us</h2> */}
               <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                     <label htmlFor="name" className="form-label">
                        Name:
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="email" className="form-label">
                        Email:
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="phone" className="form-label">
                        Phone:
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                     />
                  </div>
                  <button type="submit" className="btn btn-primary">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
