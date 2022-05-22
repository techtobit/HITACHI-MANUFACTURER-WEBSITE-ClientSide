import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import LoadProducts from './Components/Hooks/LoadProducts';
import Footer from './Components/Shared/Footer/Footer';
import NavBars from './Components/Shared/NavBars/NavBars';
import Login from './Components/Auth/Login/Login'
import SingUp from './Components/Auth/SingUp/SingUp'
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import AllProducts from './Components/Pages/Products/AllProducts';


const App = () => {
  return (
    <div>
      <NavBars></NavBars>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <AllProducts></AllProducts>
          </RequireAuth>
        }> </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;