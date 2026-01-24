const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const port = 4000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'students'
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected')
    }
})

app.get('/' , (req,res)=>{
    fs.readFile('index.html', 'utf8' , (err,data)=>{
        if(err){
            res.status(500).send('Error ! ')
        }else{
            res.send(data)
        }
    })
})

app.post('/student' , (req,res)=>{
    const name = req.body.name
    const student_class = req.body.student_class
    const age = parseInt(req.body.age)

    const sql = "insert into students (name,student_class,age) values (? , ? , ?)"
    con.query(sql , [name,student_class,age] , (err)=>{
        if(err){
            res.send(err)
        }else{
            res.send('worked . ')
        }
    })
})

app.get('/students' , (req,res)=>{
    const sql = "select * from students"
    con.query(sql , (err , result)=>{
        if(err){
            res.send(err)
        }else{
            res.json(result)
        }
    })
})

app.get('/student/:id' , (req,res)=>{
    const id = req.params.id
    const sql = "select * from students where id = ?"
    con.query(sql , [id] , (err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.json(result)
        }
    })
})

app.put('/student/:id' , (req,res)=>{
    const id = req.params.id
    const name = req.body.name
    const student_class = req.body.student_class
    const age = parseInt(req.body.age)

    const sql = "update students set name = ? , student_class = ? , age = ? where id = ?"
    con.query(sql , [name,student_class,age,id] , (err)=>{
        if(err){
            res.send(err)
        }else{
            res.send('worked . ')
        }
    })
})

app.delete('/student/:id',(req,res)=>{
    const id = req.params.id
    const sql = "delete from students where id = ?"

    con.query(sql , [id] , (err)=>{
        if(err){
            res.send(err)
        }else{
            res.send('worked . ')
        }
    })
})

app.listen(port , ()=>{
    console.log(`servcer running on host : ${port}`)
})

