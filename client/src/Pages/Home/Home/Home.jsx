
import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Products from "../Products/Products";


const Home = () => {
    const [cart, setCart] = useState([])
    return (
        <div>
            <Navbar cart={cart}></Navbar>
           <Products cart={cart} setCart={setCart} ></Products>
        </div>
    );
};

export default Home;