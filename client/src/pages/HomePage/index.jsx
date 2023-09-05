import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Axios  from 'axios';
import Cards from '../../components/Cards';

function HomePage() {

  

  return (
    <div>
        <Navbar/>
        <div className='mt-10 w-[1400px] mx-auto'>
          <Cards/>

        </div>

    </div>
  )
}

export default HomePage