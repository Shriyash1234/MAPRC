const { MongoClient } = require('mongodb');
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.set("view engine","ejs");
async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Shriyash:shriyash1a2b@cluster0.1laezrl.mongodb.net/Collection?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri,{
        useNewUrlParser: true,
        useUnifiedTopology:true
      });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        // await client.close();
        console.log("task completed")
        const moviesSchema = {
            title: String,
            genre: String,
            year: String
        }
        
          
        const Item = mongoose.model("Item",moviesSchema);
        
        app.get("/",function(req,res){
            Item.find({},function(err,items){
                res.render("test2",{moviesList:items})
            })
        })
        
        app.listen(800,function(req,res){
            console.log("server is running")
        })
    }
}

main().catch(console.error);

