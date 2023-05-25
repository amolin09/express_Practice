let express = require('express')

let app = express()

app.use(express.json())

app.get('/add', function(req, res){
  let num1 = req.query.num1
  let num2 = req.query.num2

  let intNum1 = Number(num1)
  let intNum2 = Number(num2)

  let sum = intNum1 + intNum2
  res.send(`The sum of ${num1} and ${num2} is ${sum}.`)
})

app.get('/negate/:num', function(req, res){
  let num = req.params.num

  let intNum = Number(num)

  if(intNum == 0){
    res.send(`${intNum}`)
  }
  else if(intNum > 0){
    res.send(`-${intNum}`)
  }
  else{
    intNum = Math.abs(intNum)
    res.send(`${intNum}`)
  }
})

app.listen(9002, function(){
  console.log('App running')
})