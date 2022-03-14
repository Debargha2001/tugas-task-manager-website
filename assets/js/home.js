let category=document.getElementsByClassName('category');


// fitering tasks based upon category
const filterTasks = function(){
    let selected,filter,cards;
    selected = document.getElementById("filtered-category");
    filter = selected.value;
    cards = document.getElementsByClassName("task-card");
    for(let i=0;i<cards.length;i++){
        let category = cards[i].getElementsByClassName('category')[0];
        console.log(category);
        let textvalue = category.innerText;
        if(textvalue.indexOf(filter) > -1){
            cards[i].style.display = "";
        }
        else{
            cards[i].style.display = "none";
        }
    }

}
// add click event to filter task button
document.getElementById("filter-btn-container").addEventListener('click',function(event){
    filterTasks();
});
// assigning colors to the category of tasks
const categoryColor = function(){
    let categoryName = ['Personal','Work','School','Cleaning','Other'];
    let categoryColor = ['#006080','#eb33ff','#cc3300','#F48024','#804000'];
    for(var i=0;i<category.length;i++){
        category[i].style.backgroundColor = categoryColor[categoryName.indexOf(category[i].innerText)];
    }
}
// calling the function
categoryColor();



// adding eventListener to delete button for click event
let deletetaskBtn = document.getElementById('del-task');
deletetaskBtn.addEventListener('click',function(event){
    let checked_boxes = document.querySelectorAll('input[type=checkbox]:checked');
    let checked_boxs_arr = Array.from(checked_boxes);
    let checked_ids = checked_boxs_arr.map(box => {
        return box.getAttribute('value');
    });
    $.post('tasks/delete-tasks',{checked:checked_ids},function(){
        window.location.href='/';
    });
}); 

