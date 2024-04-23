app.jsvar express = require('express');
let app = express();
module.exports = app;

/*app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});*/

//connection string
//mongodb+srv://<username>:<password>@cluster0.rezabkh.mongodb.net/
/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://NeoTryn:Nggyu*99*@cluster0.rezabkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
