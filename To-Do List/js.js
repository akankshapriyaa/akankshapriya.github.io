let add=document.getElementById('add');
let work=document.getElementById('work');
let todo=document.getElementById('todo');

add.addEventListener('click',function(){
    var para=document.createElement('p')
    para.innerText=work.value;
    todo.appendChild(para);
    work.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
    })
    para.addEventListener('dblclick',function(){
        todo.removeChild(para);
    })
})

