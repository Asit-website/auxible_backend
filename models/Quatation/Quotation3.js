import mongoose from "mongoose";

const RowSchema = new mongoose.Schema({
    area: {
    type: String,

  },
  description: {
    type: String,
  },
  qty: {
    type: String,
 
  },
  price: {
    type: String,
  
  },
  amount: {
    type: Number,
   
  },
  
  unit: {
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
  GSTNNo: {
    type: String,
  },
  rows: [RowSchema], 
  
}, { timestamps: true }); 

const Quatation2 = mongoose.model("Quatation", mySchema);

export default Quatation2;
