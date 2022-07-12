var para = document.getElementById('todolist');

var AddTodo=(todo)=> {   
        
    var p = document.createElement('p');
    var label = document.createElement('label');
    label.innerHTML = todo;

    var delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete';
    delBtn.className = 'Delete';
    delBtn.addEventListener('click', () => 
    { 
        window.confirm(para.removeChild(p));
    });
    p.appendChild(label);
    if(todo === null || todo===""){
        window.alert("Plz Enter the Data..");
        //document.write("Plz Enter the Data..");
    }else{
        p.appendChild(delBtn);
    }    
    para.appendChild(p);
}