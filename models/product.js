const mongoose= require("mongoose")
const productSchema= new mongoose.Schema({

    name:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number,
    },
    sellingPrice:{
        
        type:Number

    },
    category:{
        type:String
    },
    quantity:{
        type:Number
    }
})

module.exports=mongoose.model("Product",productSchema)


