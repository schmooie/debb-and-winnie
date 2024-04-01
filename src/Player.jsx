import { useEffect, useState, useMemo } from 'react';
import { SONGS, TOTAL_PLAYS } from './CONSTANTS';
import { getRandomInt } from './UTILS';
import BarVisualization from './BarVisualization';

const BUTTON_CONFIGS = [
  {
    ampClass: 'amplitude-stop',
    icon: 'stop',
  },
  {
    ampClass: 'amplitude-prev',
    icon: 'skip_previous',
  },
  {
    ampClass: 'amplitude-pause',
    icon: 'pause',
  },
  {
    ampClass: 'amplitude-play',
    icon: 'play_arrow',
  },
  {
    ampClass: 'amplitude-next',
    icon: 'skip_next',
  }
];

const VISUALIZATION_CONFIG = { bar_color: '#16a34a', width: 60, height: 38, bar_width: 2, spacer_width: 4, offset: 300 };

let intervalId;

function Player() {
  const [playerState, setPlayerState] = useState('stopped');

  useEffect(() => {
    Amplitude.init({
      songs: SONGS,
      visualizations: [{
        object: BarVisualization,
        params: VISUALIZATION_CONFIG }],
      visualization: 'bar_visualization'
    });

    clearInterval(intervalId);

    intervalId = setInterval(() => {
      setPlayerState(Amplitude.getPlayerState());
    }, 375);
  }, []);

  const numPlaysPerSong = useMemo(() => {
    let totalPlays = TOTAL_PLAYS;
    let result = []

    for (let i = 0; i < SONGS.length - 1; i++) {
      const playsForCurSong = getRandomInt(10, totalPlays);
      result.push(playsForCurSong);
      totalPlays -= playsForCurSong;
    }

    result.push(totalPlays);

    return result;
  }, [TOTAL_PLAYS])



  return (
    <div className="border-black border">
      <div className="flex flex-wrap items-top p-3 bg-gradient-to-b from-white to-gray-500">
        <div className="w-1/2">
          {BUTTON_CONFIGS.map(({ icon, ampClass }) => (
            <button className={"player w-9 h-9 border-2 border-gray-400 rounded " + ampClass} key={icon}>
              <span className="material-symbols-outlined relative text-2xl text-gray-600">
                {icon}
              </span>
              <span className="material-symbols-outlined text-2xl relative text-gray-200">
                {icon}
              </span>
            </button>
          ))}
        </div>
        <div className=" w-1/2 flex items-end bg-slate-900 border-slate-900 border-2 rounded p-1 text-white">
          <div className="w-2/3">
            <div data-amplitude-song-info="name" className="text-sm font-semibold"></div>
            <div data-amplitude-song-info="artist" className="text-sm"></div>
            <div id="player-state-message" className="text-xs text-green-600">{playerState}</div>
          </div>
          <div className="amplitude-visualization w-1/3 h-10"></div>
        </div>
        <div className="w-1/2 flex items-center">
          <span className="material-symbols-outlined text-gray-600">
            volume_up
          </span>
          <input type="range" className="amplitude-volume-slider w-fit" />
        </div>
        <div className="w-1/2 flex mt-1 items-center">
          <span className="amplitude-current-time text-xs mr-1"></span>
          <progress className="amplitude-song-played-progress"></progress>
        </div>
      </div>
      <div className="bg-gray-800 text-white flex justify-between p-1">
        <div className="text-xs font-semibold">Total Plays: {TOTAL_PLAYS}</div>
        <div className="text-xs font-semibold">Downloads Today: 69</div>
        <div className="text-xs font-semibold">Plays Today: 420</div>
      </div>
      <div className="flex items-center">
        <div className="w-1/3 bg-gray-200 px-1 py-2">
          <figure>
            <img src="./img/daw_ancram.jpg" />
          </figure>
          <h5 className="text-sm text-center pt-1">Ancram EP</h5>
        </div>
        <div className="w-2/3 p-1">
          {SONGS.map((song, index) => (
            <div className="text-xs p-1 flex items-center flex-wrap" key={song.name}>
              <a href="#" className="song amplitude-song-container amplitude-play-pause mr-4" data-amplitude-song-index={index}>
                <span className="underline text-purple-900 font-semibold" data-amplitude-song-info="name" data-amplitude-song-index={index}></span>
              </a>
              <div className="font-serif pb-1">Plays: {numPlaysPerSong[index]}</div>
              <div className="w-full flex justify-between border-b-2 border-dotted pb-1 border-black">
                <div className="font-serif">Download</div>
                <div className="font-serif">Comments</div>
                <div className="font-serif">Lyrics</div>
                <div className="font-serif">Add</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Player;
