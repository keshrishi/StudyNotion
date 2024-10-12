import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "", lastname: "", email: "", password: "", confirmPassword: ""
    })
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);

    const [accountType , setAccountType] = useState("student")
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password should be same");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData,
            accountType
        }
        console.log("Printing Final Account Data");
        console.log(finalData);
        navigate("/dashboard");
    }
    return (
        <div>
            {/* student-instructor tab */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
                <button
                    className={`${accountType === "student"
                        ?
                        "bg-richblack-900 text-richblack-5"
                        :
                        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button
                className={`${accountType === "instructor"
                    ?
                    "bg-richblack-900 text-richblack-5"
                    :
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler} >
                {/* first and last name */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            placeholder='First name'
                            value={formData.firstname}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounde-[0.5rem] text-richblack-5 w-full p-[12px] '
                        >
                        </input>
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            placeholder='Last name'
                            value={formData.lastname}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounde-[0.5rem] text-richblack-5 w-full p-[12px]'
                        >
                        </input>
                    </label>
                </div>
                {/* email-id */}
                <div className='w-full mt-[20px]'>
                <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter email id'
                        name='email'
                        className='bg-richblack-800 rounde-[0.5rem] text-richblack-5 w-full p-[12px]'

                    ></input>
                </label>
                </div>
                
                {/* createpassword and confirmPassword */}
                <div className='w-full flex gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            type= {showPassword ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            value={formData.paswword}
                            placeholder='Enter Password'
                            className='bg-richblack-800 rounde-[0.5rem] text-richblack-5 w-full p-[12px] '
                        >
                        </input>
                        <span className='absolute right-3 top-[38px] cursor-pointe'
                         onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>

                    </label>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            type= {showConfirmPassword ? ('text') : ('password')}
                            name='confirmPassword'
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            placeholder='Confirm Password'
                            className='bg-richblack-800 rounde-[0.5rem] text-richblack-5 w-full p-[12px] '
                        >
                        </input>
                        <span className='absolute right-3 top-[38px] cursor-pointe'
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>

                    </label>
                </div>
                <button className='bg-yellow-50 rounded-[8px] font-medium w-full text-black mt-6 px-[12px] py-[8px] cursor-pointer'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm