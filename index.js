const express=require("express");
const {createTodo}=require("./types");
const { todo } = require("./db");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
app.post("/todo",async function(req,res){
    const createPayload=req.body
    const parsePaylaod=createTodo.safeParse(createpayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
   await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg:"Todo created"
    })

})
app.get("/todos",async function(req,res){
//here what we getting the todos object is not the actual data,its a promise that will eventually resolve with the data
//for this you definitely await to get back data from the database.so,this need to be a async function

    const todos= await todo.find({});;
    res.json({
        todos
    })
})
app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})
app.listen(3000);