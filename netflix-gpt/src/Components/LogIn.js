import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const LogIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleFunctionality = () => {
      setIsSignUp(!isSignUp)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='background-image' />
            </div>
            <div class="absolute max-w-sm sm:max-w-md m-auto my-36 py-10 px-8 sm:py-16 sm:px-16 bg-black bg-opacity-80 text-white rounded-md mx-auto left-0 right-0">
            <form action="">
                <h3 class="text-4xl font-bold mb-8"> {!isSignUp ? "SignIn" : 'SignUp'} </h3>
                {
                    isSignUp && (<input type="text" class=" block w-full py-3.5 px-5 bg-[#333] focus:bg-[#454545] rounded focus:outline-0 focus:ring-0 focus:border-none border-none placeholder:text-[#8c8c8c]" placeholder="Enter Name" />)
                }

                <input type="email" class=" block w-full py-3.5 px-5 bg-[#333] focus:bg-[#454545] rounded focus:outline-0 focus:ring-0 focus:border-none border-none placeholder:text-[#8c8c8c]" placeholder="Email or phone number" />

                <input type="password" class=" block w-full mt-4 py-3.5 px-5 bg-[#333] focus:bg-[#454545] rounded focus:outline-0 focus:ring-0 focus:border-none placeholder:text-[#8c8c8c] border-none " placeholder="Password" />

                <input type="submit" value={!isSignUp ? 'Sign In' : 'Sign Up'} class="py-3.5 mt-8 bg-[#e50914] text-center block w-full rounded hover:cursor-pointer font-bold text-lg" />

                <div class="flex justify-between pt-2 text-sm text-gray-400">
                    <div>
                        <input type="checkbox" id="me" class="rounded checked:bg-gray-500 focus:ring-0" />
                        <label for="me" class="ml-0.5">Remember me</label>
                    </div>
                    <div><a href="#" class="hover:underline">Need help?</a></div>
                </div>
                <div class="pt-3 text-gray-500 text-lg" onClick={toggleFunctionality}>
                    {
                        !isSignUp ? <p className="hover:underline hover:cursor-pointer text-white font-semibold">New to Netflix?  Sign up now</p> : <p className="hover:underline hover:cursor-pointer text-white font-semibold">Already Registered?  Sign In</p>
                    }
                   
                </div>
            </form>
            </div>
        </div>
    )
}

export default LogIn