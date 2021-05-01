const mongoose = require('mongoose');
const DonorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:false
    },
    desc:{
        type:String,
        required:false
    },
}, {timestamps: true });

const Donor = mongoose.model('Donor',DonorSchema);

module.exports = Donor;