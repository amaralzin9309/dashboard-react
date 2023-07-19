import ReactSwitch from 'react-switch'
import useLocalStorage from 'use-local-storage';
import { findTheme } from '../../utils/utilsService';
import './navbar.scss'

export const Navbar = () => {

  const [theme, setTheme] = useLocalStorage('theme', findTheme());
  document.documentElement.setAttribute('data-theme', theme);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='/assets/logo.svg' alt='logo' />
        <span>admin</span>
      </div>
      <ReactSwitch onChange={switchTheme} checked={theme === 'dark'}/>
      <div className='icons'>
      <img src='/assets/search.svg' alt='search' />
      <img src='/assets/app.svg' alt='app' />
      <img src='/assets/expand.svg' alt='expand' />
      <div className='notification'>
        <img src='/assets/notifications.svg' alt=''/>
        <span>99+</span>
      </div>
      <div className='user'>
        <img src='https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt=''/>
        <span>Victor</span>
      </div>
      <img src='/assets/settings.svg' alt='settings' />
      </div>
    </div>
  )
}
