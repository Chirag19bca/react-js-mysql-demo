const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app=express()
app.use(cors())

const db=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'sample_db'
})

app.get('/',(re,res)=>{
        return res.json("From Backend");
})
app.get('/employee',(req,res)=>{
        const sql="SELECT * FROM employee";
        db.query(sql,(err,data)=>{
                if(err) return res.json(err);
                return res.json(data);
        })
})
app.listen(3000,()=>{
        console.log("listening");
})