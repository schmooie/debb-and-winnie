import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#profile_lastloggedin').innerHTML = `
  Last Login: ${(new Date()).toLocaleDateString()
}
`
