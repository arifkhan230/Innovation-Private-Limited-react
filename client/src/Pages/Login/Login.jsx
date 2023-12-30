
import { FaLock, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSignIn = () => {
        
    }

    return (
        <div className="min-h-screen py-10 lg:py-40 bg-cover mt-0 bg-[url('https://img.freepik.com/free-photo/abstract-blurred-multi-colored-background-generative-ai_169016-30198.jpg')] bg-gray-800 bg-blend-overlay text-white">
            <div className="max-w-[1440px] mx-4 lg:mx-auto">
                <div className="lg:w-1/3 lg:mx-auto border border-blue-100 p-4  lg:p-10 my-10 backdrop-blur-2xl shadow-lg rounded">
                    <h2 className="text-2xl text-center  font-bold my-8">LogIn Now!!</h2>
                    <form onSubmit={handleSignIn}>
                        <div className='relative'>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered bg-white text-black rounded-full w-full placeholder:text-black" id="email" required />
                            <span className='absolute right-6 top-3 text-2xl'><FaUserCircle></FaUserCircle></span>
                        </div>
                        <div className='relative mt-6'>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered text-black bg-white rounded-full w-full placeholder:text-black" id="password" required />
                            <span className='absolute right-6 top-3 text-2xl'><FaLock></FaLock></span>
                        </div>
                        <div className='mt-4 flex justify-between px-2'>
                            <div>
                                <input className='bg-white' type="checkbox" name="remember" id="" />
                                <span className='ml-2'>Remember me</span>
                            </div>
                            <div>
                                <a className='text-blue-400 ' href="#">Forgot password</a>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button className='btn w-full text-white border-none rounded-full bg-purple-400 hover:bg-purple-600' type="submit">LogIn</button>
                        </div>
                    </form>

                    <p className='mt-4 text-center font-medium mb-10'>Do not have an account? Please <Link to="/register" className='text-blue-400 underline'>Register</Link> </p>


                </div>
            </div>
        </div>
    );
};

export default Login;