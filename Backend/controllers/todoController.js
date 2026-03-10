const Todo = require('../models/todo');

exports.createTodo = async(req,res) =>{
    try{
        const {task} = req.body;
        const todo = await Todo.create({ task });
        res.status(202).json(todo);
    }catch(err){
        res.status(500).send(err);
    }
}
exports.getTodo = async(req,res) =>{
    try{
        const todos = await Todo.find();
        res.status(201).json(todos);
    }catch(err){
        res.status(500).send(err);
    }
}
exports.updateTodo = async(req,res) =>{
    try{
        const todos = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!todos){
        return res.status(404).json({message:"Todo not found"});
        }
        res.status(200).json(todos);
    }catch(err){
        res.status(500).send(err);
    }
};
exports.deleteTodo = async(req,res) =>{
   try{
        const todos = await Todo.findByIdAndDelete(req.params.id);
        if(!todos){
        return res.status(404).json({message:"Todo not found"});
        }
        res.status(200).json({message:"todo Deleted successfully"})
    }catch(err){
        res.status(500).send(err);
    }
}