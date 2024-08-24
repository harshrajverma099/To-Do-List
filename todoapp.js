
//stable
let todos = []
let todoList = document.querySelector("#list")

let inputElement = document.querySelector("#input")
let addTodoBtn = document.querySelector("#addTodoBtn")


function addTodo(){
    if(inputElement.value.trim() === ""){
        alert("Please add any task")
    }
    else{
        todos.push({
            title: inputElement.value
        })
        render()
    }
}

function deleteLastTodo(){
    todos.splice(todos.length - 1,1)
    render()
}

function deleteFirstTodo(){
    todos.splice(0,1)
    render()
}

function deleteTodo(index){
    todos.splice(index,1)
    render()
}



function mark(index){
    let markBtn = document.querySelector(`#markBtn-${index}`)
    let span = document.querySelector(`#span-${index}`)

    if(span.style.textDecoration === "line-through"){
        span.style.textDecoration = "none"
        markBtn.style.backgroundColor = "transparent"
        
    }
    else{
        span.style.textDecoration = "line-through"
        markBtn.style.backgroundColor = "red"
    }
}

function edit(index){
    let span = document.querySelector(`#span-${index}`)
    let editBtn = document.querySelector(`.Btn-${index}`)

    if(span.readOnly === false){
        span.readOnly = true
        span.style.outline = "none"
        editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
        span.style.borderRadius = "none"
    }
    else{
        span.readOnly = false,
        span.style.outline = "1px solid white"
        editBtn.innerHTML = 'Save'
        span.style.borderRadius = "0.3rem"
    }
}

//component
function createTodoComponent(todo,index){
    let div =document.createElement("div")
    div.setAttribute("id","taskbox")
    let div2 = document.createElement("div")
    div2.style.display = "flex"
    let button = document.createElement("button")
    button.setAttribute("id","edit")
    button.className = `Btn-${index}`
    button.setAttribute("onclick",`edit(${index})`)
    button.style.marginRight = "6px"
    button.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
    let span = document.createElement("input")
    span.setAttribute("id",`span-${index}`)
    span.className = "edit"
    let buttton2 = document.createElement("button")
    buttton2.setAttribute("id","deleteBtn")
    buttton2.setAttribute("onclick",`deleteTodo(${index})`)
    buttton2.innerHTML = '<i class="fa-solid fa-trash"></i>'
    let button3 = document.createElement("button")
    button3.setAttribute("onclick",`mark(${index})`)
    button3.className = "markBtn"
    button3.setAttribute("id",`markBtn-${index}`)
    button3.innerHTML = '<i class="fa-solid fa-check"></i>'
    span.readOnly = true; 
    span.value = `${index + 1}. ` + todo.title

    div.appendChild(span)
    div2.appendChild(button3)
    div2.appendChild(button)
    div2.appendChild(buttton2)
    div.appendChild(div2)
    return div;
}


//react
function render(){
    todoList.innerHTML = ""
    for(let i=0; i<todos.length; i++){
        const element = createTodoComponent(todos[i],i)
        todoList.appendChild(element)
        setTimeout(()=>{
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
        },0)
    }
    inputElement.value = ""
}