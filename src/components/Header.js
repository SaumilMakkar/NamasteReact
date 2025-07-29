import { LOGO_URL } from '../utils/constants';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('header render');

  useEffect(()=>{
    console.log('use Effect called')
  },[]);

const onlineStatus=useOnlineStatus();


  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="w-50" />
      </div>
      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status:{onlineStatus?"Yes":"No"}</li>
          <li className='px-4' ><Link to="/">Home</Link></li>
          <li className='px-4'><Link to="/about"></Link>About Us</li>
          <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
          <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
          <li className='px-4'>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
