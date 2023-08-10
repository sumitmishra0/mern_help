// import the Todo model
const Todo = require('../models/Todo');

// define route handler

exports.updateTodo = async (req, res) => {
   try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title, description , updatedAt: Date.now()},
    )

    res.status(200).json(
        {
            success:true,
            data:todo,
            message: `Updated data successfully`,
        }
    )
   } catch (error) {
    console.error(error);
    res.status(500).json(
        {
            success:false,
            data:error.message,
            messgae:"Server Error while updating data",
        }
    );
   }
}