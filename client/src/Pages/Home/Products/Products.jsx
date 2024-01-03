import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Container from "../../../Components/Container/Container";
import ProductCard from "../../../Components/ProductCard/ProductCard";


const Products = ({cart,setCart}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data?.products)
            });
    }, [])


    // console.log(products);

    const sortProductsByPrice = (e) => {

        if (e.target.value === "lowToHigh") {
            setProducts([...products.sort((a, b) => { return a.price - b.price })])
        }

        if (e.target.value === "highToLow") {
            setProducts([...products.sort((a, b) => { return b.price - a.price })])
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.searchField.value;
        console.log(searchValue);

        fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
            });
    }


    return (
        <Container>
            <div>
                <h2 className="text-3xl font-bold text-center my-10">All Products</h2>
                <div className="flex flex-col md:flex-row justify-between md:items-center bg-gray-200 my-6">
                    <div className="join p-2">
                        <select onChange={(e) => sortProductsByPrice(e)} className="select select-bordered join-item">
                            <option disabled selected>Filter By Price</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to low</option>
                        </select>
                    </div>
                    <div className="join p-2">
                        <form onSubmit={handleSearch} >
                            <input
                                className="input input-bordered join-item"
                                placeholder="Search Product"
                                name="searchField"
                            />
                            <button
                                type="submit"
                                className="btn text-white bg-green-400 join-item rounded-r-full">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
                    {
                        products?.map(product => <ProductCard
                            key={product.id}
                            product={product}
                            cart= {cart}
                            setCart= {setCart}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

Products.propTypes = {
    cart:PropTypes.array,
    setCart: PropTypes.func

};

export default Products;