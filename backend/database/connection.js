import mongoose from "mongoose";

export const connection = ()=>{
    // console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "SmartMockAi"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}