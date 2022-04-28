require('dotenv').config();
var express = require('express');
const {Client} = require('pg');

const client = new Client({
    host:process.env.HOST,
    user:process.env.USER,
    port: process.env.PORT,
    password: process.env.PWD,
    database: process.env.DB
})
client.connect(err=>{
    if(err){
        console.log(err)       
    }else {
        console.log('Database Connected')
    }
});

exports.users = (req, res)=>{
   let qr = 'select * from agenda';
   client.query(qr, (err, result)=>{
       if(err){
           console.log(err);
       }else {

           res.send({
               message:'all users data',
               data: result.rows
           })
       }
   })
}

exports.user = (req, res)=>{
    let qr = 'select * from agenda where id =' + req.params.id;

    client.query(qr, (err, result)=>{
        res.send({
            data: result.rows
        })
    })
}

exports.createUser = (req, res)=> {

   let text = req.body.text;
   let day = req.body.day;
   let remind = req.body.reminder;

   let qr = `insert into agenda(text, day, reminder) values('${text}', '${day}', '${remind}')`

   client.query(qr, (err, result)=>{
       if(err){
           console.log(err)
       }else{
           res.send({
               message: 'data inserted',
               data: result
           })
       }
   })
}

exports.updateUser = (req, res)=> {

    let reminder = req.body.reminder;

    let qr = `update agenda set reminder = '${reminder}' where id =` + req.params.id

    client.query(qr, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({
                message: 'data updated',
                data: result.rows
            })
        }
    })

}

exports.deleteUSer = (req, res)=>{
    let qr = `delete from agenda where id =` + req.params.id

    client.query(qr, (err, result)=>{
        if(err){
            console.log(err)
        } else {
            res.send({
                message: 'data deleted'
            })
        }
    })
}
