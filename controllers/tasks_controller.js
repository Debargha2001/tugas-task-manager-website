const Task = require('../models/task');

// controller for create tast
module.exports.createTask = async function(req,res){
    Task.create(req.body,function(err,newTask){
        if(err){
            console.log(`Error in creating task: ${err}`);
            return;
        }

        console.log(`New Task Created: ${newTask}`);
        return res.redirect('back');
    });


}

// controllers for updating task
module.exports.updateForm = async function(req,res){
    let id = req.query.id;
    
    try{
        let task = await Task.findById(id);
        if(task){
            res.render('update',{
                task: task
            });
        }
    }catch(err){
        console.log(`Error while rendering update form: ${err}`);
    }
}

module.exports.updateTask = async function(req,res){
    try{
        let updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body);
        if(updatedTask){
            console.log(`Task updated Successfully: ${updatedTask}`);
            return res.redirect('/');
        }
    }catch(err){
        console.log(`Error while updating task: ${err}`);
    }
}

// controller for deleting task
module.exports.deleteTasks = function(req,res){
    Task.deleteMany({_id:{$in:req.body.checked}},function(err,deletedTasks){
        if(err){
            console.log(`Error deleting the tasks from database: ${err}`);
            return;
        }
        console.log("Tasks deleted: ",deletedTasks);
        res.redirect('back');
    })
}