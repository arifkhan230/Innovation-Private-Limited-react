import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";


const Cart = () => {

    const [cart, setCart] = useState([]);
    const userId = localStorage.getItem("userId");
    console.log(userId);

    useEffect(() => {
        // getting carts of user with id 5
        fetch(`https://dummyjson.com/carts/user/${userId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.carts[0].products);
                setCart(data?.carts[0]?.products)
            });
    }, [userId])

    console.log(cart);

    return (
        <Container>
            <div>
                <h2 className="text-4xl font-bold text-center my-10"> This is Cart</h2>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-200 ">
                            <tr className="text-xl">
                                <th className="text-xl">#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Discounted Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((item,idx) => <tr key={item.id}>
                                    <th>
                                        { idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask w-24 h-24">
                                                    <img src={item?.thumbnail} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> {item?.title} </td>
                                    <td>$ {item?.price}</td>
                                    <td>{item?.quantity}</td>
                                    <td>$ {item?.total}</td>
                                    <td>$ {item?.discountedPrice}</td>
                                   
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>

            </div>
        </Container>
    );
};

export default Cart;