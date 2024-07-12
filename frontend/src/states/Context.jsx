import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currTime, setCurrTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const [songsIdx, setSongsIdx] = useState(0)
  const resetEverything = () => {
    setProgress(0)
    setCurrTime("00:00")
    setDuration("00:00")
    setSongsIdx((prevstate) => prevstate + 1)
  }
  return (
    <AppContext.Provider
      value={{
        currTime,
        setCurrTime,
        duration,
        setDuration,
        progress,
        setProgress,
        songsIdx,
        setSongsIdx,
        resetEverything
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}