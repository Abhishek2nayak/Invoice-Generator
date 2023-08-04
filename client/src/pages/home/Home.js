import React from 'react';
import Horizontal from '../../Components/Navbar/Horizontal';
import Vertical from '../../Components/Navbar/Vertical';

import Area from '../../Components/main/Area';

const Home = () => {
  return (
    <div className='home'>
        <Horizontal/>
       <div className='flex w-full'>
       <Vertical/>
        <Area/>
       </div>
       
        
    </div>
  );
}

export default Home;
