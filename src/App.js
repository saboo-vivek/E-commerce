import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Shop from "./Components/Shop";
import { CartProvider } from "./Context/Cart";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";



function App() {
   return (
      <CartProvider>
         <Routes>
            <Route exact path="/" element={<Home />} />
           
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path='/contact' element={<ContactUs/>}/>
         </Routes>
      </CartProvider>
   );
}

export default App;
