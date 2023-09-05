import React, { useEffect, useState } from 'react'
import Axios  from 'axios';
function Cards() {
    const[urunlerListesi, seturunlerListesi]=useState([]);
  const [urunAdi, setUrunAdi]=useState("");
  const [aciklama, setAciklama]=useState(0);
  const [resimLinki, setResimLinki]=useState("");

  useEffect(()=>{

    Axios.get(process.env.REACT_APP_SERVER_URL+"/urunler")
    .then((response)=>{
      seturunlerListesi(response.data);
    })

  },[])
  return (
    <div className='d-flex justify-content-around'>
           
    {urunlerListesi.map((urun)=>{
    return  <div key={urun.id} className='flex items-stretch'>
    <div className="card" style={{ width: '18rem'}}>
      <img src={urun.resimLinki} className="card-img-top" alt="..." style={{ width: '18rem', height: '18rem'}}/>
      <div className="card-body grid grid-cols-1 content-between">
        <h5 className="card-title">{urun.urunAdi}</h5>
        <p className="card-text">{urun.aciklama}</p>
        <button className="btn btn-primary mt-2 ">Sepete Ekle</button>
      </div>
    </div>
  </div>
  })}

    </div>
  )
}

export default Cards