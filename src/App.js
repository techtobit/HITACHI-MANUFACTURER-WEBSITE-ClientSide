import React from 'react';
import Home from './Components/Home/Home';
import LoadProducts from './Components/Hooks/LoadProducts';
import Footer from './Components/Shared/Footer/Footer';
import NavBars from './Components/Shared/NavBars/NavBars';


const App = () => {
  return (
    <div>
      <NavBars></NavBars>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;