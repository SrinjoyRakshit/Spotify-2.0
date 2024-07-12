import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { pauseSong, playSong } from "../../states/actors/SongActors";
import { useGlobalContext } from "../../states/Context";

const Card = ({ song,idx }) => {
  const { masterSong, isPlaying } = useSelector((state) => state.mainSong);
  const { resetEverything, setSongsIdx } = useGlobalContext()
  const dispatch = useDispatch()

  const handlePlay = (song) => {
    setSongsIdx(idx)
    if(isPlaying){
      masterSong.mp3.currentTime = 0
      masterSong.mp3.pause()
      resetEverything()
    }
      dispatch(playSong(song))
  }

  const handlePause = () => {
      dispatch(pauseSong())
  }

  return (
    song && (
      <div className="card col-span-1 p-4 rounded-lg">
        <div className="relative">
          <img src={song.img} className="h-[10rem]" alt="" />
          {masterSong.id === song.id && isPlaying ? (
            <button 
              onClick={handlePause} 
              className="play_btn absolute bottom-0 right-0 flex items-center rounded-[50%] bg-green-600 justify-center p-2 text-xl">
              <FaPause 
              className="text-black" 
              />
            </button>
          ) : (
            <button 
              onClick={() => handlePlay(song)}
              className="play_btn absolute bottom-0 right-0 flex items-center rounded-[50%] bg-green-600 justify-center p-2 text-xl"
              >
              <FaPlay 
              className="text-black" 
              />
            </button>
          )}
        </div>

        <h3 className="text-xl font-semibold my-2">{song.title}</h3>
        <p className="text-sm font-semibold text-gray-400 leading-4">
          {song.title} - {song.artist}
        </p>
      </div>
    )
  );
};

export default Card;
