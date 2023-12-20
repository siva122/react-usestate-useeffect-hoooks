import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  console.log('header invoked');
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src={LOGO_URL} alt='' className='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className='btn-login'
              onClick={() =>
                setBtnName(btnName === 'Login' ? 'Logout' : 'Login')
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
