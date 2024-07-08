import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import "./signup.css";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const years = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]

const Signup = () => {
  return (
    <>
      <div className="logo mx-auto bg-white">
        <img
          className="mx-auto pt-3"
          src="/assets/blacklogo.png"
          width={150}
          alt=""
        />
      </div>
      <div className="bg-white py-7">
        <div className="bg-white text-black text-center mx-auto w-1/2">
          <h1 className="text-center tracking-tighter text-4xl font-semibold py-7">
            Sign up for free to start listening.
          </h1>
          <div className="mb-20">
            <Link>
              <div className="flex items-center justify-center border border-gray-400 rounded-full p-2 w-2/4 gap-7 mb-3 mx-auto bg-blue-800 text-white">
                <BiLogoFacebookCircle className="text-2xl" />
                <span>Sign up with Facebook</span>
              </div>
            </Link>
            <Link>
              <div className="flex items-center justify-center border border-gray-400 rounded-full p-2 w-2/4 gap-7 mb-6 mx-auto">
                <FcGoogle className="text-2xl" />
                <span>Sign up with Google</span>
              </div>
            </Link>
            <span className="or_">or</span>
            <Link>
              <h3 className="font-semibold mt-4">
                Sign up with your email address
              </h3>
            </Link>
          </div>

          <form className="text-center mx-auto w-3/4">
            <div className="w-4/5 mx-auto text-left py-4">
              <label
                className="font-semibold mb-1 inline-block"
                htmlFor="email"
              >
                What's your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full"
              />
            </div>

            <div className="w-4/5 mx-auto text-left py-4">
              <label
                className="font-semibold mb-1 inline-block"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="bg-white block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full"
              />
            </div>

            <div className="w-4/5 mx-auto text-left py-4">
              <label
                className="font-semibold mb-1 inline-block"
                htmlFor="username"
              >
                What should we call you
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter a profile name"
                className="bg-white block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full"
              />
               <small className="text-md">it will appear in your profile.</small>
            </div>

            <div className="w-4/5 mx-auto text-left py-4">
              <label
                className="font-semibold mb-2 text-lg inline-block"
                htmlFor="password"
              >
                What's your date of birth?
              </label>
              <div className="flex gap-8 mt-3">
                <div className="w-1/4">
                  <label
                    className="font-semibold pb-1 inline-block"
                    htmlFor="password"
                  >
                    Day
                  </label>
                  <select
                    type="text"
                    id="password"
                    name="password"
                    placeholder="DD"
                    className="bg-white block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full"
                  >
                    {days.map((d) => {
                        return <option key={d} value={d}>{d}</option>;
                    })}
                  </select> 
                </div>
                <div className="w-2/4">
                  <label
                    className="font-semibold pb-1 inline-block"
                    htmlFor="password"
                  >
                    Month
                  </label>
                  <select
                    type="text"
                    id="password"
                    name="password"
                    placeholder="MM"
                    className="bg-white block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full"
                  >
                    {months.map((m) => {
                        return <option key={m} value={m}>{m}</option>
                    })}
                  </select>
                </div>
                <div className="w-1/4">
                  <label
                    className="font-semibold pb-1 inline-block"
                    htmlFor="password"
                  >
                    Year
                  </label>
                  <select
                    type="text"
                    id="password"
                    name="password"
                    placeholder="YYYY"
                    className="bg-white block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-[2px] focus:ring-inset focus:ring-white-600 outline-none px-2 py-3 hover:ring-white placeholder:text-gray-400 w-full"
                  >
                    {years.map((y) => {
                        return <option key={y} value={y}>{y}</option>;
                    })}
                  </select>
                </div>
              </div>


              <div className="flex items-start justify-start gap-8 py-8">
              <label
                className="font-semibold mb-2 text-lg inline-block"
                htmlFor="password"
              >
                What's your gender?
              </label>
                <div className="">
                  <input
                    type="radio"
                    id="password"
                    name="password"
                    placeholder="Enter a password"
                    className=""
                  />
                  <label
                    className="font-semibold ml-4 inline-block"
                    htmlFor="password"
                  >
                    Male
                  </label>
                </div>
                <div className="">
                  <input
                    type="radio"
                    id="password"
                    name="password"
                    placeholder="Enter a password"
                    className=""
                  />
                  <label
                    className="font-semibold ml-4 inline-block"
                    htmlFor="password"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="w-4/5 mx-auto py-4 text-left">
            <div className="flex items-center gap-2 my-4">
                <input type="checkbox" className="green-checkbox" name="" id="" />
                <p className="ml-2 flex flex-col items-center justify-center text-sm">I would prefer not to recieve marketing messages from Spotify</p>
            </div>
            <div className="flex items-center gap-2 my-4 mb-5">
                <input type="checkbox" className="green-checkbox" name="" id="" />
                <p className="ml-2 flex flex-col items-center justify-center text-sm">Share my regsitration data with Spotify's content providers for marketing purposes.</p>
            </div>

            <p className="my-4 text-base">
                By clicking on sign up, you agree to <Link to='/' className="text-green-400">Spotify's terms and conditions of Use.</Link>
            </p>

            <p className="my-4 text-base">
                To learn more about how Spotify collects, uses, shares and protect your personal data please see <Link to='/' className="text-green-400">Spotify's terms and conditions of Use.</Link>
            </p>
            </div>
            <div className="w-full text-left py-4">
              <input
                type="submit"
                value="Sign up"
                className="block font-bold cursor-pointer w-1/2 mx-auto outline-none p-3 hover:scale-105 transition-all duration-200 bg-green-500 text-black rounded-full text-center"
              />
            </div>

          </form>
          <div className="w-3/4 mx-auto my-4 pb-6">
            <p className="pt-4 text-gray-500 font-semibold">
              Already have an account ?
              <Link
                to="/login"
                className="text-green-400 font-semibold underline mx-auto hover:text-green-500/90"
              >
                {" "}
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
