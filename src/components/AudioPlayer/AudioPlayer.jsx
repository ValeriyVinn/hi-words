// import React, { useState, useRef } from "react";

// const AudioPlayer = () => {
//   const [selectedAudio, setSelectedAudio] = useState("./Data/04 - The Ukrainians-Chi Znayesh Ti-.mp3");
//   const [playCount, setPlayCount] = useState(1);
//   const [minInterval, setMinInterval] = useState(6);
//   const [maxInterval, setMaxInterval] = useState(12);
//   const audioRef = useRef(null);
//   const [currentCount, setCurrentCount] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const audios = ["./Data/04 - The Ukrainians-Chi Znayesh Ti-.mp3", "./Data/01-Zastolnye_pesni-Romashka_belaya.mp3", "./Data/07-f-chornobryvcy.mp3"];

//   const playAudioWithDelay = () => {
//     if (currentCount < playCount) {
//       audioRef.current.play();
//       setCurrentCount((prevCount) => prevCount + 1);

//       const randomDelay = Math.floor(
//         Math.random() * (maxInterval - minInterval + 1) + minInterval
//       );

//       setTimeout(playAudioWithDelay, randomDelay * 1000);
//     } else {
//       setIsPlaying(false);
//       setCurrentCount(0);
//     }
//   };

//   const handlePlay = () => {
//     if (audioRef.current && !isPlaying) {
//       setIsPlaying(true);
//       playAudioWithDelay();
//     }
//   };

//   return (
//     <div>
//       <select
//         value={selectedAudio}
//         onChange={(e) => setSelectedAudio(e.target.value)}
//       >
//         {audios.map((audio, index) => (
//           <option key={index} value={audio}>
//             {audio}
//           </option>
//         ))}
//       </select>

//       <input
//         type="number"
//         value={playCount}
//         onChange={(e) => setPlayCount(Math.max(1, parseInt(e.target.value)))}
//         min="1"
//         max="20"
//       />
//       <input
//         type="number"
//         value={minInterval}
//         onChange={(e) => setMinInterval(Math.max(1, parseInt(e.target.value)))}
//         min="1"
//         max="300"
//       />
//       <input
//         type="number"
//         value={maxInterval}
//         onChange={(e) => setMaxInterval(Math.max(minInterval, parseInt(e.target.value)))}
//         min="1"
//         max="300"
//       />

// <audio ref={audioRef} controls>
//   <source src={`/${selectedAudio}`} type="audio/mp3" />
  
// </audio>

//       <button onClick={handlePlay} disabled={isPlaying}>
//         Start Playing
//       </button>
//     </div>
//   );
// };

// export default AudioPlayer;


// import React, { useState } from "react";
// import ReactPlayer from "react-player";

const AudioPlayer = () => {
 return (<>
    <audio src="./Data/04 - The Ukrainians-Chi Znayesh Ti-.mp3" controls   autoplay  preload="auto" type="audio/mpeg"></audio>
  
</>)
  
  

//   const [selectedAudio, setSelectedAudio] = useState("audio/audio1.mp3");
//   const [playCount, setPlayCount] = useState(1);
//   const [minInterval, setMinInterval] = useState(60);
//   const [maxInterval, setMaxInterval] = useState(300);
//   const [currentCount, setCurrentCount] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const audios = [
//     "./Data/01-Zastolnye_pesni-Romashka_belaya.mp3",
//     "./Data/04 - The Ukrainians-Chi Znayesh Ti-.mp3",
//     "./Data/07-f-chornobryvcy.mp3"
//   ];

//   const playAudioWithDelay = () => {
//     if (currentCount < playCount) {
//       setIsPlaying(true);
//       setCurrentCount((prevCount) => prevCount + 1);

//       const randomDelay = Math.floor(
//         Math.random() * (maxInterval - minInterval + 1) + minInterval
//       );

//       setTimeout(playAudioWithDelay, randomDelay * 1000);
//     } else {
//       setIsPlaying(false);
//       setCurrentCount(0);
//     }
//   };

//   const handlePlay = () => {
//     if (!isPlaying) {
//       playAudioWithDelay();
//     }
//   };

//   return (
//     <div>
//       <select
//         value={selectedAudio}
//         onChange={(e) => setSelectedAudio(e.target.value)}
//       >
//         {audios.map((audio, index) => (
//           <option key={index} value={audio}>
//             {audio}
//           </option>
//         ))}
//       </select>

//       <input
//         type="number"
//         value={playCount}
//         onChange={(e) => setPlayCount(Math.max(1, parseInt(e.target.value)))}
//         min="1"
//         max="20"
//       />
//       <input
//         type="number"
//         value={minInterval}
//         onChange={(e) => setMinInterval(Math.max(1, parseInt(e.target.value)))}
//         min="1"
//         max="300"
//       />
//       <input
//         type="number"
//         value={maxInterval}
//         onChange={(e) => setMaxInterval(Math.max(minInterval, parseInt(e.target.value)))}
//         min="1"
//         max="300"
//       />

//       <ReactPlayer
//         url={selectedAudio}
//         playing={isPlaying}
//         controls
//         onEnded={() => setIsPlaying(false)}
//       />

//       <button onClick={handlePlay} disabled={isPlaying}>
//         Start Playing
//       </button>
//     </div>
//   );
};

export default AudioPlayer;
