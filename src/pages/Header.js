import styles from '../css/header.css'
const logo = require('../assets/images/xpSemFundo.png');

export function Header () {
  return (
    <div>
      <header className='cabeca'>
      <img src={logo} className='logo'/>

      </header>
    </div>
  );
}

