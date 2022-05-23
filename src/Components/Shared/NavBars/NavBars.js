import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser, faBarChart } from '@fortawesome/free-solid-svg-icons';
const NavBars = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const LogOut = () => {
    signOut(auth)
    navigate('/')
  }

  const navMenu = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Products</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/profile'>Profile</Link></li>
  </>
  const userMenu = <>
    {
      user ?
        <div className="admin">
          <ul class="menu menu-horizontal p-0">
            <li tabindex="0">
              <a>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                {user.displayName}
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><Link to='/account'>My Account</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/' onClick={() => signOut(auth)}>LogOut
                  <FontAwesomeIcon icon={faRightFromBracket} className='text-primary px-2'></FontAwesomeIcon>
                </Link></li>
              </ul>
            </li>
          </ul>
        </div>
        :
        <p><Link to='/login'>Login</Link></p>
    }
  </>
  return (
    <div className="navbar bg-secondary font-bold px-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-warning lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navMenu}
          </ul>
        </div>
        <a className=" normal-case text-xl">Tools</a>
      </div>
      <div className="navbar-center hidden lg:flex lg:flex-end">
        <ul className="menu menu-horizontal p-0 ">
          {navMenu}

        </ul>
      </div>
      <div className="dashboardSlider navbar-end ">
        <label tabindex="1" for="dashboardSlider" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
      <div>
        <div>
          {userMenu}
        </div>
      </div>
    </div>
  );
};

export default NavBars;