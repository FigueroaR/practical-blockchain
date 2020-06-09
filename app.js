// module(model) imports 
let Block = require('./block')
let Blockchain = require('./blockchain')
let BlockchainNode = require('./BlockchainNode')
let Transaction = require('./transaction')

// npm install
const express = require('express')
const bodyParser = require('body-parser')
// launching express
const app = express()

let port = 3000

//acces the arguments
process.argv.forEach(function(val,index, array){
  //console.log(array)
  port = array[2]
})

if (port == undefined) {
  port = 3000;
}


// creating out blockcahin
let transactions = []
let nodes = []
let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)
//abobe we have initialized a bloackchain

//body 
app.use(bodyParser.json())

//noderegister multiplenodes
app.post('/nodes/register', function(req, res){

  let nodesLists = req.body.urls
  nodesLists.forEach(function(nodeDictionary){
    let node = new BlockchainNode(nodeDictionary["url"])
    nodes.push(node)
  })

  res.json(nodes)
  console.log(nodes)
})


app.get('/nodes', function(req, res){
  res.json(nodes)
})

app.get('/', function(req, res){
  res.send("hello world")
})

app.get('/mine', function(req, res){
  // we are mining blocks then returning a block
  let block = blockchain.getNextBlock(transactions)
  blockchain.addBlock(block)

  //we reset the transactions // we dont want to add previous transactions tha are mined and completed
  transactions = []
  res.json(block)
})

app.post("/transactions", function(req, res){
  // in this router we will be posting all the trnsactions
  let to = req.body.to;
  let from = req.body.from;
  let amount = req.body.amount;

  // we will be adding the new transaction 
  let transaction = new Transaction(from, to, amount)
  transactions.push(transaction)
  res.json(transactions) // now we polulated transactionS
})

app.get('/blockchain', function(req, res){
  // in this route, we then get the complete blockchain
  res.json(blockchain)
})

// our localhost is listening
app.listen(port, function(){
  console.log("server has started")
})



