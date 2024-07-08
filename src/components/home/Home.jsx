import React from 'react'
import Layout from '../../layout/Layout'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Card from '../card/Card';
import './home.css'
import { Link } from 'react-router-dom';
import SongBar from '../masterBar/SongBar';

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: 'Tum Hi Ho',
    img: "/assets/Arijit-1.jpg",
    artist: 'Arijit Singh',
    mp3: new Audio(
      '/assets/mp3/Tum Hi Ho.mp3'
    )
  },
  {
    id: Math.random() * Date.now(),
    title: 'Ae Dil Hai Muskil',
    img: "/assets/Arijit-2.jpg",
    artist: 'Arijit Singh',
    mp3: new Audio(
      '/assets/mp3/Ae Dil Hai Mushkil.mp3'
    )
  },
  {
    id: Math.random() * Date.now(),
    title: 'Bekhayali',
    img: "/assets/Arijit-3.jpg",
    artist: 'Arijit Singh',
    mp3: new Audio(
      '/assets/mp3/Bekhayali.mp3'
    )
  },
  {
    id: Math.random() * Date.now(),
    title: 'Judaiyaan',
    img: "/assets/Arijit-4.jpg",
    artist: 'Arijit Singh',
    mp3: new Audio(
      '/assets/mp3/Judaiyaan.mp3'
    )
  },
  {
    id: Math.random() * Date.now(),
    title: 'Heeriye',
    img: "/assets/Arijit-1.jpg",
    artist: 'Arijit Singh',
    mp3: new Audio(
      '/assets/mp3/Heeriye.mp3'
    )
  },
  {
    id: Math.random() * Date.now(),
    title: 'Tu Hi Hai Ashiqui',
    img: "/assets/Arijit.jpg",
    artist: 'Arijit Singh',
    mp3: new Audio(
      '/assets/mp3/Tu Hi Hai Aashiqui.mp3'
    )
  },
]

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='flex items-center justify-between gap-5 ml-4 mb-2'>
          <GrPrevious className='bg-white/10 text-3xl p-1 rounded-[50%]' />
          <GrNext className='bg-white/10 text-3xl p-1 rounded-[50%]' />
        </div>
        <div className='m-4'>
          <Link to='/signup' className='rounded-full text-white mt-4 px-8 py-2 text-base bg-black font-semibold'>
            Sign up
          </Link>
          <Link to='/login' className='rounded-full text-black mt-4 px-7 py-2 text-base bg-white font-semibold'>
            Log in
          </Link>
        </div>
      </div>
      <div className="tertiary_bg p-6 mx-4">
        <div className="my-4 flex justify-between items-center">
          <span className='text-2xl font-bold hover:underline cursor-pointer'>Focus</span>
          <span>Show all</span>
        </div>
        <div className='grid grid-cols-5 gap-6'>
          {songs.map((song,i) => {
            return <Card key={song.id} idx = {i} song={song} />
          })}
        </div>

        <div className="my-4 flex justify-between items-center">
          <span className='text-xl font-bold hover:underline cursor-pointer'>Spotify Playlists</span>
          <span>Show all</span>
        </div>
        <div className='grid grid-cols-5 gap-6'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <SongBar />
    </Layout>
  )
}

export default Home
