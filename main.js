import './style.css'
import javascriptLogo from './javascript.svg'
import nycExesSong from '/audio/nyc_exes.m4a'

document.querySelector('#profile_lastloggedin').innerHTML = `
  Last Login: ${(new Date()).toLocaleDateString()
}
`;

const PLAYER_STATES = {
  PLAYING: 'playing',
  PAUSED: 'paused',
};

Amplitude.init({
  songs: [
    {
      name: 'NYC Exes',
      artist: 'Debb and Winnie',
      album: 'Ancram EP',
      url: './audio/nyc_exes.m4a',
      cover_art_url: './img/debbAndWinnie.jpg'
    }
  ]
})

const $playerMessage = document.getElementById('player-state-message');
const $pauseIcon = document.querySelector('#pause-button span');
const $playIcon = document.querySelector('#play-button span');

const GRAY_TEXT = 'text-gray-600';
const GREEN_TEXT = 'text-green-700';

setInterval(() => {
  const state = Amplitude.getPlayerState();

  console.log('checking', state)

  if (state === PLAYER_STATES.PLAYING) {
    $playerMessage.innerHTML = 'playing';

    $playIcon.classList.remove(GRAY_TEXT);
    $pauseIcon.classList.add(GRAY_TEXT);

    $playIcon.classList.add(GREEN_TEXT);
    $pauseIcon.classList.remove(GREEN_TEXT);
  } else if (state === PLAYER_STATES.PAUSED) {
    $playerMessage.innerHTML = 'paused';

    $pauseIcon.classList.remove(GRAY_TEXT);
    $playIcon.classList.add(GRAY_TEXT);

    $pauseIcon.classList.add(GREEN_TEXT);
    $playIcon.classList.remove(GREEN_TEXT);
  }
}, 250);

