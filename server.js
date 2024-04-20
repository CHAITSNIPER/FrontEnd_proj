const express = require('express');
const mysql = require('mysql');



const app = express();
app.use(express.json());

const connection = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password:'chaitu04',
        database:'expressdatabase',
    }
)





app.post('/api/submit',(req,res)=>{
    const formData=req.body;
    console.log("recieved form data:",formData);

    res.json({message:'data recieved'});
   }
)

  
  app.listen(5000, () => {
    console.log('server on port 5001');
  });
app.post('/api/click',(req,res)=>{
    const Clicked = req.body;
    console.log("recieved response: ",Clicked);
    res.json({message: "button clicked"});
})
app.get('/api/submit',(req,res)=>{
    const formData = req.body;
    res.json(formData);
})

connection.connect(error=>{
    if(error){
        console.log('error occured in database');
        throw error;
    }
    app.listen(5001,()=>{
        console.log("Database connection is ready");
    })
})
app.listen(5001,()=>{
    console.log('server on port 5001');
})