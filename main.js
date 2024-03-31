import './style.css'
import javascriptLogo from './javascript.svg'
import nycExesSong from '/audio/nyc_exes.m4a'

document.querySelector('#profile_lastloggedin').innerHTML = `
  Last Login: ${(new Date()).toLocaleDateString()
}
`

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
