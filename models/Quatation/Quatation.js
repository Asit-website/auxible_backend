import mongoose, { mongo } from "mongoose";


const RowSchema = new mongoose.Schema({
  application: {
    type: String,

  },
  brand: {
    type: String,
  
  },
  model: {
    type: String,
 
  },
  description: {
    type: String,
  
  },
  qty: {
    type: Number,
   
  },
  unitPrice: {
    type: Number,
  
  },
  amount: {
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

const Quatation = mongoose.model("Quatation", mySchema);

export default Quatation;
