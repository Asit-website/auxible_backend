import mongoose, { mongo } from "mongoose";


const RowSchema = new mongoose.Schema({
    productName: {
    type: String,

  },
  description: [{
    type: String,
  }],
  unitPrice: {
    type: String,
 
  },
  taxRate: {
    type: String,
  
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

const Quatation2 = mongoose.model("Quatation", mySchema);

export default Quatation2;
