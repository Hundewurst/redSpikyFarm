const { MongoClient } = require("mongodb");

const uri =
"mongodb+srv://admin:admin@redSpikyFarm.xvdee.mongodb.net/redSpikyFarm?retryWrites=true&w=majority"
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('redSpikyFarm');
    
    
    // // Query for a tool that has the name "Hoe"
    //const tools = database.collection('Tools');
    // const query = { name: "Hoe" };
    // const tool = await tools.findOne(query);
    // console.log(tool);

    // //Get all Collectioncursors
    //const collections = await database.collections();
    //console.log(collections);
    
    
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

