// import the TODO model
const Todo = require('../models/Todo');

// define the route handler

exports.getTodo = async (req,res) => {
    try {
        // fetch all the todos from the database
        const todos = await Todo.find();
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"All todos data is fetched"
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json(
            {
                success:false,
                data:error.message,
                message:"Server Error",
            }
        )
    }
}

exports.getTodoById = async (req, res) => {
    try {
        // extract on the basis of id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // if data for given id not found
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:"No Data found for given id"
                }
            );
        }
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched`,
             }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json(
            {
                success:false,
                data:error.message,
                message:"Server Error",
            }
        )
    }
}