exports.getUsers = (req,res) =>{
    res.send("Get all the users");
}
exports.getUserById = (req,res) =>{
    res.send("Get input by user")
}
exports.createUser = (req,res) =>{
    res.json({
        message:"User Created Successfully"
    })

}
exports.updateUser =(req,res) =>{
    res.json({
        message:"User updated Successfully"
    })
}
exports.deleteUser=(req,res)=>{
    res.json({
        message:"User deleted Successfully"
    })
}