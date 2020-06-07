let Block = require('./block')
let Blockchain = require('./block')

let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock)

console.log(blockchain)