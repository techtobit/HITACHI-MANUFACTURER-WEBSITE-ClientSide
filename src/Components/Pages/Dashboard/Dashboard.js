import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
 return (
  <div class="drawer drawer-mobile">
   <input id="dashboardSlider" type="checkbox" class="drawer-toggle" />
   <div class="drawer-content flex flex-col items-center justify-center">
    <h2>Dashboard</h2>
    <Outlet></Outlet>
   </div>
   <div class="drawer-side">
    <label for="dashboardSlider" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     <li><Link to='/dashboard'>My Orders</Link></li>
     <li><Link to='review'>Add A Review</Link></li>
     <li><Link to='profile'>My Profile</Link></li>
    </ul>
   </div>
  </div>
 );
};

export default Dashboard;