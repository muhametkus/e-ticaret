import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Button, TextField } from '@mui/material'
import Axios from 'axios'; 
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


function UrunEkle() {


  const [urunAdi, setUrunAdi] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [resimLinki, setResimLinki] = useState('');
  const navigate=useNavigate();


  const urunEkle=()=>{
    Axios.post(process.env.REACT_APP_SERVER_URL+"/urunEkle", {
      urunAdi: urunAdi,
      aciklama: aciklama,
      resimLinki: resimLinki
    })
    .then((response)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ürün Başarıyla Eklendi!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/');
    })

  }



  return (
    <div>
      <Navbar/>
      
      <div className='mx-auto w-[750px] mt-10'>

        
      <table className='mx-auto'>
<tbody>
  <tr>
    <td>Ürün Adı Giriniz:</td>
    <td className='px-4'>
              <TextField
                id="urunAdi"
                label="Ürün Adı"
                variant="filled"
                type='text' 
                onChange={(e) => setUrunAdi(e.target.value)}
              />
    </td>
  </tr>
  <tr>
    <td>Açıklama Giriniz:</td>
    <td className='py-4'>
              <TextField
                id="aciklama"
                label="Açıklama"
                variant="filled"
                type='text' 
                onChange={(e) => setAciklama(e.target.value)}
              />
    </td>
  </tr>
  <tr>
    <td>Resim Linki Giriniz:</td>
    <td className=''>
              <TextField
                id="resimLinki"
                label="Resim Linki"
                variant="filled"
                type='text' 
                onChange={(e)=>{setResimLinki(e.target.value)}}
              />
      
    </td>
  </tr>
  <tr>
    <td colSpan={2} className='py-4'><Button variant="contained" onClick={urunEkle}>Kaydet</Button></td>
    
  </tr>
</tbody>
</table>
        


      </div>

    </div>
  )
}

export default UrunEkle