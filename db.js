/*
schema
 Todo{
    tittle:string,
    description: string,
    completed: boolean
 }
*/
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://vineeththungani:VINEETHVINEETH05@cluster0.z6mqvzy.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}