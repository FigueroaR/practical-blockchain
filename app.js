// module(model) imports 
let Block = require('./block')
let Blockchain = require('./blockchain')
let Transaction = require('./transaction')

// npm install
const express = require('express')
const bodyParser = require('body-parser')


let port = 3000


//acces the arguments
process.argv.forEach(function(val,index, array){
  //console.log(array)
  port = array[2]
})




// launching express
const app = express()


// creating out blockcahin
let transactions = []
let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)
//abobe we have initialized a bloackchain

//body 
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send("hello world")
})

app.get('/mine', function(req, res){
  // we are mining blocks then returning a block
  let block = blockchain.getNextBlock(transactions)
  blockchain.addBlock(block)
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






//Dummy data
// let transaction = new Transaction("Mary", "Jerry", 100)

  // let genesisBlock = new Block();
  // let blockchain = new Blockchain(genesisBlock)

  // let block = blockchain.getNextBlock([transaction])
  // blockchain.addBlock(block)

  // let anotherTransaction = new Transaction("Azam", "Jerry", 10)
  // let block1 = blockchain.getNextBlock([anotherTransaction, transaction])
  // blockchain. addBlock(block1)

  // res.json(blockchain)