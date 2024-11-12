const todolist =[ ];

function renderTodolist() {
    let todolistHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        const name = todoObject.name;
        const date = todoObject.date;
        


        const html = `
       <div>${name}</div>
       <div>${date}</div>
        <button onclick="todolist.splice(${i},1);
        renderTodolist();" class="delete-button" >Delete</button>`;
        todolistHTML += html;
    }
   
    document.querySelector('.js-do-list').innerHTML = todolistHTML;
}

function todoadd() {
    const todoElement = document.querySelector('.input');
    const tododate = document.querySelector('.input-date');


    const name = todoElement.value;
    const date = tododate.value;
        todolist.push({name, 
            date} );
       

    


   
   todoElement.value = '';

    renderTodolist();
}