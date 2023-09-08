import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Button, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'; 
import SendIcon from '@mui/icons-material/Send';
import Axios from 'axios';
import '../../App.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



function UrunDuzenle() {
  
  const[urunlerListesi, seturunlerListesi]=useState([]);
  const [urunAdi, setUrunAdi] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [resimLinki, setResimLinki] = useState('');
  const [urunAdiAra, setUrunAdiAra] = useState('');
  const [SecilenUrunId, setSecilenUrunId] = useState('');
  const [urunYeniAdi, setUrunYeniAdi]=useState('');
  const [urunYeniAciklama, setUrunYeniAciklama]=useState('');
  const [urunYeniResimLinki, setUrunYeniResimLinki]=useState('');
  const navigate=useNavigate();
  

  useEffect(()=>{

    Axios.get(process.env.REACT_APP_SERVER_URL+"/urunler")
    .then((response)=>{
      seturunlerListesi(response.data);
    })

  },[])

  const guncelleUrun = (id) => {
    Axios.put(process.env.REACT_APP_SERVER_URL+"/guncelle", { id: id, urunYeniAdi: urunYeniAdi, urunYeniAciklama:urunYeniAciklama,urunYeniResimLinki:urunYeniResimLinki });
  };

  const urunSil = (id) => {

    Swal.fire({
      title: 'Ürünü Sil!',
      text: "Dikkat Ürünü Siliyorsun.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ürünü Sil',
      cancelButtonText:'İptal et'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(process.env.REACT_APP_SERVER_URL+`/delete/${id}`);
        Swal.fire(
          'Silindi!',
          'Ürün Başarıyla Silindi.',
          'success',

        )
        navigate('/');
      }
    })

    

    
  };
  
   const duzenleGoster=()=>{
    document.getElementById('urun-duzenle').style.display = "block";
   }
  

  return (
    <div>
        <Navbar/>
        <div className='my-16'>
        <TextField
                id="urunAdi"
                label="Ürün Adı"
                variant="filled"
                type='text' 
                onChange={(e) => setUrunAdiAra(e.target.value)}
              />
        </div>
      
      <div>

      <div className='d-flex justify-content-around'>
           
        {
          
        urunlerListesi.filter((urun) => urun.urunAdi.toLowerCase() === urunAdiAra.toLowerCase())
        .map((urun,key)=>{
          return <div  key={key} className='guncelle-urun '> <div  className='flex items-stretch'> 
          <div className="card" style={{ width: '18rem'}}>
            <img src={urun.resimLinki} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{urun.urunAdi}</h5>
              <p className="card-text">{urun.aciklama}</p>
              <div className='flex justify-between mt-3'>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>urunSil(urun._id)}>SİL</Button>
              <Button variant="outlined" onClick={duzenleGoster}>DÜZENLE</Button>

              </div>
            </div>
          </div>
        </div>
        
        <div className='urun-duzenle border hidden' id='urun-duzenle'><table className='mx-auto'>






<tbody>
  <tr>
    <td>Ürün Adı Giriniz:</td>
    <td className='px-4'>
              <TextField
                id="urunAdi"
                label="Ürün Adı"
                variant="filled"
                type='text'
                
                onChange={(e)=>{setUrunYeniAdi(e.target.value)}}
                
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
                onChange={(e)=>{setUrunYeniAciklama(e.target.value)}}
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
                onChange={(e)=>{setUrunYeniResimLinki(e.target.value)}}
              />
      
    </td>
  </tr>
  <tr>
    <td colSpan={2} className='py-4'><Button variant="contained" onClick={()=>guncelleUrun(urun._id)}>Kaydet</Button></td>
    
  </tr>
</tbody>
</table></div>
        </div>})
        
        }
          
        
        
          </div>

      </div>

      


    </div>
  )
}

export default UrunDuzenle

