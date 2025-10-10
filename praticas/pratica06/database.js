const { MongoClient } = require('mongodb');

const url = ""

const client = new MongoClient(url);

async function conectarDb() {
  if (!client.isConnected?.()) await client.connect();
  return client.db('agenda');
}
module.exports = { conectarDb };
