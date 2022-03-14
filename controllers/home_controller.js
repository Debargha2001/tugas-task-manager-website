const Task = require('../models/task');
module.exports.home =async function(req,res){
    try{
        let tasks = await Task.find({})
        .populate('user');
        return res.render('home',{
                    title: "To-Do Application",
                    tasks_list: tasks,
                    months: ['JAN','FEB','MARCH','APRIL','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC']
            });
    }catch(err){
        console.log('Error: ',err.message);
        return;
    }
        
}
