import { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import ProductCard from "../../../Components/ProductCard/ProductCard";


const Products = () => {

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data?.products)
            });
    }, [])

    console.log(products);

    return (
        <Container>
            <div>
                <h2 className="text-3xl font-bold text-center my-10">All Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
                    {
                        products.map(product => <ProductCard 
                            key={product.id}
                            product={product}
                            ></ProductCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Products;