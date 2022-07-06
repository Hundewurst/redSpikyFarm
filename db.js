const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
"mongodb+srv://admin:admin@redspikyfarm.xvdee.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('redspikyfarm');
    const tools = database.collection('Tools');
    // Query for a tool that has the name "Hoe"
    const query = { name: "Hoe" };
    const tool = await tools.findOne(query);
    
    console.log(tool);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

