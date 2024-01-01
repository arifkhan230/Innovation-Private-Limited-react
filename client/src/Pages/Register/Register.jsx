import { useState } from "react";
import { FaLock, FaUpload, FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";


const Register = () => {

    const [gender, setGender] = useState("")

    
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const firsName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.files[0];

        console.log({firsName,lastName,email,password,confirmPassword,photo,gender});
    }

    return (
        <div className="min-h-screen py-10 lg:py-40 bg-cover mt-0 bg-[url('https://img.freepik.com/free-photo/abstract-blurred-multi-colored-background-generative-ai_169016-30198.jpg')] bg-gray-800 bg-blend-overlay text-white">
            <div className="max-w-[1440px] px-4 lg:mx-auto">
                <div className="lg:w-2/5 w-full md:w-2/3 md:mx-auto border border-blue-100 p-4  lg:p-10 my-10 backdrop-blur-2xl shadow-lg rounded">
                    <h2 className="text-2xl text-center  font-bold my-8">Register Now!!</h2>
                    <form onSubmit={handleRegister}>

                        <div className="flex gap-4">
                            {/* First name */}
                            <div className='relative mb-6 flex-1'>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="input input-bordered text-black bg-white rounded-full w-full placeholder:text-black"
                                    id="name" required />
                                <span
                                    className='absolute text-black right-6 top-3 text-2xl'><FaUserCircle></FaUserCircle>
                                </span>
                            </div>
                            {/* last name */}
                            <div className='relative mb-6 flex-1'>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="input input-bordered text-black bg-white rounded-full w-full placeholder:text-black"
                                    id="name" required />
                                <span
                                    className='absolute text-black right-6 top-3 text-2xl'><FaUserCircle></FaUserCircle>
                                </span>
                            </div>
                        </div>
                        {/* email */}
                        <div className='relative'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="input input-bordered text-black bg-white rounded-full w-full placeholder:text-black"
                                id="email" required />
                            <span
                                className='absolute text-black right-6 top-3 text-2xl'><HiMail></HiMail>
                            </span>
                        </div>
                        {/* password */}
                        <div className='relative mt-6'>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered text-black bg-white rounded-full w-full placeholder:text-black" id="password"
                                required />
                            <span
                                className='absolute text-black right-6 top-3 text-2xl'><FaLock></FaLock>
                            </span>
                        </div>
                        {/* confirm password */}
                        <div className='relative mt-6'>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input input-bordered text-black bg-white rounded-full w-full placeholder:text-black" id="confirmPassword"
                                required />
                            <span
                                className='absolute text-black right-6 top-3 text-2xl'><FaLock></FaLock>
                            </span>
                        </div>
                        <div className="flex gap-4">
                            {/* photo */}
                            <div className='mt-6 flex-1'>
                                <label
                                    htmlFor="photo"
                                    className="btn w-full rounded-full"> <FaUpload></FaUpload> Choose A Profile</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="file-input input-bordered  w-full hidden"
                                    id="photo"
                                    required />
                            </div>
                            {/* Gender */}
                            <div className='relative mt-6 flex-1'>
                                <select
                                    onChange={(e) => setGender(e.target.value)}
                                    name="gender"
                                    className="select text-black bg-white rounded-full w-full placeholder:text-black"
                                    id="gender">
                                    <option disabled selected value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>

                            </div>
                        </div>

                        <div className='mt-6'>
                            <button
                                className='btn w-full text-white border-none rounded-full bg-purple-400 hover:bg-purple-600' type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                    <p
                        className='mt-4 text-center font-medium'>
                        Do not have an account? Please <Link to="/login" className='text-blue-400 underline'>Login</Link> </p>


                </div>
            </div>
        </div>
    );
};

export default Register;