const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();

app.use(express.json());

app.get('/',async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.insert (req.body)
    res.send(result)
})

app.put("/:Harry Potter and the Order of the Phoenix", async (req, res) => {
    let data= await dbConnect();
    let result = data.updateOne(
        {name: req.params."Harry Potter and the Order of the Phoenix"},
        {$set:req.body}
    )
    res.send({status:"updated"})
})

app.delete("/:id", async(req, res)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(3000)