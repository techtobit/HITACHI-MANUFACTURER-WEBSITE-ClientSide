import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import NavBars from './Components/Shared/NavBars/NavBars';
import Login from './Components/Auth/Login/Login'
import SingUp from './Components/Auth/SingUp/SingUp'
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import AllProducts from './Components/Pages/Products/AllProducts';
import CheckedProduct from './Components/Pages/CheckedProduct/CheckedProduct';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Review from './Components/Pages/Dashboard/Review';
import Orders from './Components/Pages/Dashboard/Orders';
import Profile from './Components/Pages/Dashboard/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Components/Pages/Dashboard/Payment';
import Admin from './Components/Pages/Dashboard/Admin/Admin';
import AdminProfile from './Components/Pages/Dashboard/Admin/AdminProfile';
import MakeAdmin from './Components/Pages/Dashboard/Admin/MakeAdmin'
import ManageAllOrders from './Components/Pages/Dashboard/Admin/ManageAllOrders';
import RequireAdmin from './Components/Hooks/RequireAdmin'
import PageNotFound from './Components/Pages/N404/PageNotFound';
import AddOrderedItems from './Components/Hooks/AddOrderedItems';
import Blog from './Components/Pages/Blog/Blog';
import AddProduct from './Components/Pages/Dashboard/Admin/AddProduct';
import About from './Components/Pages/Dashboard/Admin/About';
import ManageProducts from './Components/Pages/Dashboard/Admin/ManageProducts';
import ProductDetails from './Components/Shared/Products/ProductDetails';



// import MinNavBars from './Components/Shared/NavBars/MinNavBars';

const App = () => {
  return (
    <div>
      {/* <MinNavBars></MinNavBars> */}
      <NavBars></NavBars>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <AllProducts></AllProducts>
          </RequireAuth>
        }> 
        </Route>
        <Route path='/products/:product' element={
          <RequireAuth>
            <ProductDetails/>
          </RequireAuth>
        }>
        </Route>
        <Route path='/products/cart/:product' element={
          <RequireAuth>
            <CheckedProduct/>
          </RequireAuth>
        }></Route>
        
        <Route path='/blog' element={<Blog></Blog>}></Route>
        {/*         <Route path='/payment/:item' element={
          <AddrForPurchase></AddrForPurchase>
        }></Route> */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Orders></Orders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='payment/:product' element={<Payment></Payment>}></Route>

          <Route path='admin' element={
            <RequireAdmin>
              <Admin></Admin>
            </RequireAdmin>
          }>
            <Route index element={<About></About>}></Route>
            <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='userOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path='manage' element={<ManageProducts></ManageProducts>}></Route>
            {/* <Route path='addProduct' element={<AddOrderedItems></AddOrderedItems>}></Route> */}
          </Route>
        </Route>

        <Route path='/dashboard/admin/adminProfile' element={<Profile></Profile>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default App;