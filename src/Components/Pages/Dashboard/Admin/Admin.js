import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../../firebase.init';
import myAvatar from '../../../Assets/AboutMe/my-avatar.png'

const Admin = () => {
 const [user] = useAuthState(auth)

 const adminMenu = <>
  <li><Link to=''>Profile</Link></li>
  <li><Link to='makeAdmin'>Make Admin</Link></li>
  <li><Link to='addProduct'>Add A Product</Link></li>
  <li><Link to='manage'>Manage Products</Link></li>
  <li><Link to='userOrders'>Manage All Orders</Link></li>
 </>
 return (

  <div class="drawer bg-accent rounded-t-lg ">
   <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
   <div class="drawer-content flex flex-col">
    <div class="w-full navbar bg-gray-200">
     <div class="flex-none lg:hidden">
      <label for="my-drawer-3" class="btn btn-square btn-ghost">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
     </div>
     <div class="flex-1 px-2 mx-2  items-center">
      <div class="avatar items-center font-bold">
       <div class="w-10 rounded-full">
        <img src={myAvatar} />
       </div>
       <p className='pl-2 '>Ashraf Uddin</p>
      </div>
     </div>
     <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal font-medium">
       {adminMenu}
      </ul>
     </div>
    </div>
    <div className='grid justify-center py-10'>
     <Outlet></Outlet>
    </div>
   </div>
   <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-50">
     {adminMenu}
    </ul>

   </div>
  </div>



  // <div>
  //  <div class="navbar bg-base-100">
  //   <div class="flex-1">
  //    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
  //     <div class="w-10 rounded-full">
  //      <img src="https://api.lorem.space/image/face?hash=33791" />
  //     </div>
  //    </label>
  //    <div class="flex-none">
  //     <ul class="menu menu-horizontal p-0">
  //      {adminMenu}
  //     </ul>
  //    </div>
  //   </div>

  //  </div>
  //  <Outlet></Outlet>



  // </div>
  // <div class="drawer drawer-mobile top-100  items-start">
  //  <input id="dashboardSlider" type="checkbox" class="drawer-toggle" />
  //  <div class="drawer-content flex flex-col items-center justify-center pt-10">
  //   <Outlet></Outlet>
  //  </div>
  //  <div class="drawer-side">
  //   <label for="dashboardSlider" class="drawer-overlay"></label>
  //   <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
  //    {/* <li><Link to='/dashboard'>My Orders</Link></li>
  //    <li><Link to='review'>Add A Review</Link></li>
  //    <li><Link to='profile'>My Profile</Link></li>
  //    <li><Link to='admin'>Admin</Link></li> */}
  //    <li><Link to='adminProfile'>Profile</Link></li>
  //    <li><Link to='makeAdmin'>Make Admin</Link></li>
  //    <li><Link to='userOrders'>Manage All Orders</Link></li>
  //    <li><Link to='addProduct'>Add A Product</Link></li>
  //    <li><Link to='manageProducts'>Manage Products</Link></li>
  //   </ul>
  //  </div>
  // </div>
 );
};

export default Admin;