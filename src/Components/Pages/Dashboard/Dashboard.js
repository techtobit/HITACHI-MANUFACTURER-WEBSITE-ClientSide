import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
 const [user] = useAuthState(auth);
 const [admin] = useAdmin(user);
 return (
  <div class="drawer drawer-mobile top-100 border-t-2 overflow-y-auto overflow-x-auto  items-start">
   <input id="dashboardSlider" type="checkbox" class="drawer-toggle" />
   <div class="drawer-content flex flex-col items-center justify-center pt-10">
    <Outlet></Outlet>
   </div>
   <div class="drawer-side  ">
    <label for="dashboardSlider" class="drawer-overlay border-r-4"></label>
    <ul class="menu p-4 font-medium overflow-y-auto w-80 bg-base-100 text-base-content">
     <li><Link to='/dashboard'>My Orders</Link></li>
     <li><Link to='review'>Add A Review</Link></li>
     <li><Link to='profile'>My Profile</Link></li>
     {admin && <li><Link to='admin'>Admin</Link></li>}
    </ul>
   </div>
  </div>
 );
};

export default Dashboard;