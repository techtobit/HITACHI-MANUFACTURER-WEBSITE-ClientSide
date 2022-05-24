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
import AddrForPurchase from './Components/Shared/PurchaseProduct/AddrForPurchase';
import OrderPayment from './Components/Shared/Payment/OrderPayment';


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
        }> </Route>
        <Route path='/products/:product' element={
          <RequireAuth>
            <CheckedProduct></CheckedProduct>
          </RequireAuth>
        }>
        </Route>
        <Route path='/addAdders' element={<AddrForPurchase></AddrForPurchase>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Orders></Orders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='review/:payment' element={<OrderPayment></OrderPayment>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>

        </Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default App;