import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  LeadOwner: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  budget: String,
  leadType: String,
  name: String,
  Mobile: String,
  Email: String,
  date: {
    type: String,
  },

  Street: String,
  City: String,
  State: String,
  ZipCode: String,
  Country: String,
  image: String,
  LeadSource: String,
  LeadStatus: String,

  isOpen: {
    type: String,
    default: "true",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "Open",
  },
  closeDate: {
    type: String,
  },
  invoiceId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
    },
  ],
  quatationId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quatation",
    },
  ],
});

const Lead = mongoose.model("Lead", mySchema);

export default Lead;
