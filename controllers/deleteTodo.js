// import the Todo model
const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success:true,
                message:"Deleted Todo successfully",
            } 
        );
    } catch (error) {
        console.error(error);
        res.status(500).json(
            {
                success:false,
                data:error.message,
                message:"Server internal error while deleting data",
            }
        )
    }
}