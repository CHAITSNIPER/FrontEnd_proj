const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/submit',(req,res)=>{
    const formData=req.body;
    console.log("recieved form data:",formData);

    res.json({message:'data recieved'});
   }
)
app.post('/api/click',(req,res)=>{
    const Clicked = req.body;
    console.log("recieved response: ",Clicked);
    res.json({message: "button clicked"});
})
app.get('/api/submit',(req,res)=>{
    const formData = req.body;
    res.json(formData);
})

app.listen(5000,()=>{
    console.log('server on port 5000');
})