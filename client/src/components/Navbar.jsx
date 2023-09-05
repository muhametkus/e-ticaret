import React from 'react'

function Navbar() {
  return (
    <div>
        
        <nav className='flex bg-cyan-900 h-12 items-center text-white' style={{justifyContent:'space-between'}}>
          <div className='mx-12'>logo</div>

          <div className='f'>
            <ul className='flex gap-x-4'>
              <li><a href="/">Anasayfa</a></li>
              <li><a href="/urunekle">Ürün Ekle</a></li>
              <li><a href="/urunduzenle">Ürün Düzenle</a></li>
            </ul>
          </div>

          <div className='mx-12'>Sepet</div>
        </nav>
      


    </div>
  )
}

export default Navbar