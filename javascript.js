// Cache elements

let titleEl = document.getElementById(`title`);
let form = document.querySelector(`#todoform`);
let input =  document.querySelector (`#todoinput`);
let todoList = document.querySelector(`#todolist`);
let reloadBtn =document.getElementById (`reloadBtn`);


// console.log(`window width: `+ window.innerWidth);
// alert(`Welcome to the To Do App!`);

// add form event listener

form.addEventListener(`submit`,function(e){
    e.preventDefault();
    
    if (input.ariaValueMax.length<3){
        alert ("Task must be 3 character long!");
        return;
    }

    // create new element

    let li = document.createElement(`li`);

    li.textContent = input.value;

    //  add to dom
    todoList.appendChild(li);

    li.setAttribute(` title,` `click to mark as done`);

    input.value = "";


});


//  event delegation 

todoList.addEventListener(`click`, function(e){
    if(e.target.tagName ==="LI")
    {
        e.target.classlist.toggle (`done`);
        console.log(`clicked:` + e.target.textContent);
        console.log (`Parent UL has` + e.target.parentNode.children.length + "item");

    }
})

//  reload page

reloadBtn.addEventListener(`click`,function(){
    location.reload();

})
