import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        
        <nav className='flex bg-cyan-900 h-12 items-center text-white' style={{justifyContent:'space-between'}}>
          <div className='mx-12'>logo</div>

          <div className='f'>
            <ul className='flex gap-x-4'>
              <li><Link to="/">Anasayfa</Link></li>
              <li><Link to="/urunekle">Ürün Ekle</Link></li>
              <li><Link to="/urunduzenle">Ürün Düzenle</Link></li>
            </ul>
          </div>

          <div className='mx-12'>Sepet</div>
        </nav>
      


    </div>
  )
}

export default Navbar