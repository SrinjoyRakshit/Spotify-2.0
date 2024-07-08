import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { GrApple } from "react-icons/gr";

const Login = () => {
  return (
    <>
        <header className='px-12 py-8'>
            <div className="logo">
                <img src="/assets/logo.webp" width={150} alt="" />
            </div>
        </header>
        <div className="container py-7">
            <div className='bg-black text-center mx-auto w-1/2'>
                <h1 className='text-center text-5xl font-semibold py-7'>Log in to Spotify</h1>
                <div className='mb-20'>
                    <Link>
                    <div className='flex items-center justify-center border border-white rounded-full p-2 w-[40%] gap-7 mb-3 mt-7 ml-56'>
                        <FcGoogle className='text-2xl' />
                        <span>Continue with Google</span>
                    </div>
                </Link>
                <Link>
                    <div className='flex items-center justify-center border border-white rounded-full p-2 w-[40%] gap-7 mb-3 ml-56'>
                        <BiLogoFacebookCircle className='text-2xl' />
                        <span>Continue with Facebook</span>
                    </div>
                </Link>
                <Link>
                    <div className='flex items-center justify-center border border-white rounded-full p-2 w-[40%] gap-7 ml-56'>
                        <GrApple className='text-2xl' />
                        <span>Continue with Apple</span>
                    </div>
                </Link> 
                </div>
               
               <div className='border-b border-gray-800 w-3/4 mx-auto my-4'></div>
                <form className='text-center mx-auto w-1/2'>
                    <div className='w-full text-left py-4'>
                        <label className='font-semibold mb-2 inline-block mt-3' htmlFor="email">Email or username</label>
                        <input 
                            type="text" 
                            id='email' 
                            name='email' 
                            placeholder='Email or username'
                            className='bg-[#1b1b1b] block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full' 
                        />
                    </div>

                    <div className='w-full text-left py-4'>
                        <label className='font-semibold mb-2 inline-block mt-3' htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id='password' 
                            name='password' 
                            placeholder='Password'
                            className='bg-[#1b1b1b] block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full' 
                        />
                    </div>

                    <div className='w-full text-left py-4'>
                        <input 
                            type="submit" 
                            value='Login'
                            placeholder='Password'
                            className='block font-bold w-full outline-none p-3 hover:scale-105 transition-all duration-200 bg-green-500 text-black rounded-full text-center' 
                        />
                    </div>
                    <div className='w-full py-4'>
                        <Link to='/password/forgot' className='text-white font-semibold underline mx-auto'>Forgot your password?</Link>
                    </div>
                </form>
                <div className='w-3/4 mx-auto my-4 pb-6'>
                <p className='pt-4 text-gray-500 font-semibold'>
                    Don't have an account ? 
                    <Link to='/signup' className='text-white font-semibold underline mx-auto hover:text-green-500'> Sign up for Spotify</Link>
                </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
