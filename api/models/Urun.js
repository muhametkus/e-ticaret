const mongoose = require('mongoose');

const UrunSchema = new mongoose.Schema({
  urunAdi:{
    type: String,
    required: true,
  },
  aciklama:{
    type: String,
    required: true,
  },
  resimLinki:{
    type: String,
    required: true,
  }
});

const UrunModel = mongoose.model('Urun', UrunSchema);

module.exports = UrunModel;
