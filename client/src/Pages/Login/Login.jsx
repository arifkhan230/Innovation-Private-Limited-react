
import toast from "react-hot-toast";
import { FaLock, FaUserCircle } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        const username = e.target.username.value;
        const password = e.target.password.value;

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username ,
                password: password ,
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    console.log(data);
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("userId", data.id)
                    toast.success("Logged in Successful")
                    navigate("/")
                }
            });
    }

    return (
        <div className="min-h-screen py-10 lg:py-40 bg-cover mt-0 bg-[url('https://img.freepik.com/free-photo/abstract-blurred-multi-colored-background-generative-ai_169016-30198.jpg')] bg-gray-800 bg-blend-overlay text-white">
            <div className="max-w-[1440px] mx-4 lg:mx-auto">
                <div className="lg:w-1/3 lg:mx-auto border border-blue-100 p-8  lg:p-10 my-10 backdrop-blur-2xl shadow-lg rounded">
                    <h2 className="text-2xl text-center  font-bold mb-8">LogIn Now!!</h2>
                    <form onSubmit={handleSignIn}>
                        <div className='relative'>
                            <input
                                type="text"
                                name="username"
                                placeholder="User Name"
                                className="input input-bordered bg-white text-black rounded-full w-full
                             placeholder:text-black" id="username"
                                required />
                            <span
                                className='absolute text-black right-6 top-3 text-2xl'>
                                <FaUserCircle></FaUserCircle>
                            </span>
                        </div>
                        <div className='relative mt-6'>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                className="input input-bordered text-black bg-white rounded-full w-full
                             placeholder:text-black"
                                id="password"
                                required />
                            <span
                                className='absolute text-black right-6 top-3 text-2xl'>
                                <FaLock></FaLock>
                            </span>
                        </div>
                        <div className='mt-6'>
                            <button
                                className='btn w-full text-white border-none rounded-full bg-purple-400
                             hover:bg-purple-600 transition'
                                type="submit">
                                LogIn
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;