const express=require("express");
const app=express();
const mongoose=require('mongoose');
const UrunModel=require('./models/Urun');
require('dotenv').config();

const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
});

app.get("/urunler", async (req, res) => {
    try {
      const result = await UrunModel.find({});
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  });

app.post("/urunEkle", async (req,res)=>{

    const urun=req.body;
    const yeniUrun=new UrunModel(urun);
    await yeniUrun.save();

    res.json(urun)
});


app.put('/guncelle', async (req, res) => {
  const urunYeniAdi = req.body.urunYeniAdi;
  const urunYeniAciklama = req.body.urunYeniAciklama;
  const urunYeniResimLinki = req.body.urunYeniResimLinki;
  const id = req.body.id;

  try {
    const guncellenenUrun = await UrunModel.findById(id);
    guncellenenUrun.urunAdi = urunYeniAdi;
    guncellenenUrun.aciklama = urunYeniAciklama;
    guncellenenUrun.resimLinki = urunYeniResimLinki;
    await guncellenenUrun.save();
    res.send("guncellendi");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


 app.delete('/delete/:id', async (req,res)=>{
    const id=req.params.id;
    
    await  UrunModel.findByIdAndDelete(id).exec();
    res.send("silindi")
  });



app.listen(3005, ()=>{
    console.log("Port: 3005 Server çalışıyor");
})
