var todos = [];
var todoInput = document.getElementById("todoInput");
var todoItemsContainer = document.getElementById("todoItems");
var completedItemsContainer = document.getElementById("completedItems");


// Attach Event Listeners
todoInput.addEventListener("keydown", function (e) {
    var data = {};
    if(e.code === "Enter" && e.target.value.trim().length > 0) {
        data = {
            id: uuidv4(),
            title: e.target.value,
            isCompleted: false
        }
        todos.push(data)
        renderTodoItems(todos);
        e.target.value = null;
        cacheData(todos, 'todos');
    }
})


function createTodoCard(data = {}) {
    var card = document.createElement('div');
    card.setAttribute("class", "w-full h-[50px] bg-white rounded px-5 box-border flex gap-x-5 items-center justify-between");
    
    var prefixDiv = document.createElement("div");
    prefixDiv.setAttribute("class", "flex gap-x-4")
    var suffixDiv = document.createElement("div");


    var checkbox = document.createElement('input')
    checkbox.setAttribute("id", data.id)
    checkbox.type = 'checkbox';
    checkbox.checked = data.isCompleted;

    attachEventListenerToCheckbox(checkbox)

    prefixDiv.append(checkbox)
    

    var para = document.createElement('p')
    if(data.isCompleted) {
        para.setAttribute("class", "line-through");
    }
    para.innerText = data.title;
    prefixDiv.append(para)


    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "w-[50px] h-[50px] bg-transparent rounded-full")
    deleteBtn.setAttribute("id", data.id);
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    suffixDiv.append(deleteBtn)

    attachEventListenerToDeleteBtn(deleteBtn)

    card.append(prefixDiv)
    card.append(suffixDiv);

    return card;
}

function attachEventListenerToCheckbox(element) {
    element.addEventListener('click', function (e) {
        todos = todos.map((todo) => {
            if(todo.id === e.target.id) {
                todo.isCompleted = e.target.checked
            }
            return todo;
        })
        cacheData(todos, 'todos')
        rerenderItemsContainer()
    })
}

function attachEventListenerToDeleteBtn(element) {
    element.addEventListener('click', function (e) {
        todos = todos.filter((todo) => {
            return todo.id != e.target.id;
        })
        cacheData(todos, 'todos')
        rerenderItemsContainer()
    })
}

function renderTodoItems(items = []) {
    todoItemsContainer.innerHTML = "";
    var nodes = items.filter((item) => !item.isCompleted).map((item) => createTodoCard(item));
    todoItemsContainer.append(...nodes)
}


function renderCompletedItems(items = []) {
    completedItemsContainer.innerHTML = "";
    var nodes = items.filter((item) => item.isCompleted).map((item) => createTodoCard(item));
    completedItemsContainer.append(...nodes)
}

function rerenderItemsContainer() {
    var data = retrieveCacheData('todos');
    todos = [...data];
    renderTodoItems(data);
    renderCompletedItems(data);
}

function cacheData(data = [], id) {
    try {
        localStorage.setItem(id, JSON.stringify(data))
    } catch (error) {
        alert('Local storage is not available')
    }
}


function retrieveCacheData(id) {
    try {
        var rawData = localStorage.getItem(id)
        var parsedData = JSON.parse(rawData);
        return parsedData;
    } catch (error) {
        alert('Local storage is not available')
    }
}

rerenderItemsContainer();