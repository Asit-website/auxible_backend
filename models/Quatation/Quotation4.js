import mongoose from "mongoose";

const RowSchema = new mongoose.Schema({
    product: {
    type: String,
  },
  model: {
    type: String,
  },
  brand: {
    type: String,
 
  },
  productPic: {
    type: String,
  },
  unitPrice: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  total: {
    type: Number,
  },
  
});

const mySchema = new mongoose.Schema({
  refNo: {
    type: String,
  
  },
  customerName: {
    type: String,
  
  },
  quotationDate: {
    type: Date,
  },

  rows: [RowSchema], 
  
}, { timestamps: true }); 

const Quatation2 = mongoose.model("Quatation", mySchema);

export default Quatation2;
