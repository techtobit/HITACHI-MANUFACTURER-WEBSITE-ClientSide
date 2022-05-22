import React from 'react';
import Home from './Components/Home/Home';
import LoadProducts from './Components/Hooks/LoadProducts';
import NavBars from './Components/Shared/NavBars/NavBars';


const App = () => {
  return (
    <div>
      <NavBars></NavBars>
      <Home></Home>
      <LoadProducts></LoadProducts>
    </div>
  );
};

export default App;