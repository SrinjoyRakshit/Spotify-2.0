import React from 'react'
import { FaHome, FaSearch, FaPlus } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='w-1/4 sidebar fixed left-0 top-0'>
      <div className="nav secondary_bg rounded-lg p-6">
        <div className='flex items-center gap-4'>
            <FaHome className='font-bold text-xl' />
            <span>Home</span>
        </div>
        <div className='flex mt-5 items-center gap-4'>
            <FaSearch className='font-bold text-xl' />
            <span>Search</span>
        </div>
      </div>

    <div className="your_library">
      <div className="mt-3 secondary_bg rounded-lg p-6">
        <div className='flex justify-between items-center gap-4 mb-4'>
            <div className='flex items-center gap-4'>
                <LuLibrary className='font-bold text-xl' />
                <span>Your Library</span>
            </div>
            <button className='hover:bg-black/25 rounded-[50%] p-2'>
                <FaPlus className='font-bold text-xl' />
            </button>
        </div>
        <div className="mt-2 leading-10 tertiary_bg rounded-lg p-6">
            <p className='font-bold text-base'>Create your first playlist</p>
            <p className='font-semibold'>It's easy, we will help you</p>
            <button className='rounded-full mt-4 px-4 py-0 font-bold bg-white text-black'>
                Create Playlist
            </button>
        </div>

        <div className="mt-4 leading-10 tertiary_bg rounded-lg p-6">
            <p className='font-bold text-base'>Let's find some podcasts to follow</p>
            <p className='font-semibold text-sm mt-2'>We will keep you updated on new episodes</p>
            <button className='rounded-full mt-4 px-4 py-0 font-bold bg-white text-black'>
                Browse Podcasts
            </button>
        </div>
      </div>
      </div>

      <div className="mt-4 gap-4 flex flex-wrap">
        <a className='text-sm text-gray-400 mx-4' href="">Legal</a>
        <a className='text-sm text-gray-400 mx-4' href="">Privacy Center</a>
        <a className='text-sm text-gray-400 mx-4' href="">Privacy Policy</a>
        <a className='text-sm text-gray-400 mx-4' href="">Cookies</a>
        <a className='text-sm text-gray-400 mx-4' href="">About Ads</a>
        <a className='text-sm text-gray-400 mx-4' href="">Accessibility</a>
      </div>
      <button className='mx-4 mt-5 border border-gray-400 px-2 py-1 rounded-full text-white flex items-center gap-2'>
        <span className='text-white text-sm font-bold'>English</span>
        <TbWorld />
      </button>
    </div>
  )
}

export default Sidebar
