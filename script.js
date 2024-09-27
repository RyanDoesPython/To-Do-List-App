const inputText = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const tasksContainer = document.getElementById("tasks-container");
const checkMark = document.getElementById("check-mark");

// class="strikeout"

const check = (buttonEl, isSelected = false) => {
        isSelected = !isSelected;
        const svg = buttonEl.querySelector("svg");
        const strikeout = buttonEl.parentElement.querySelector("hr");
        const text = buttonEl.parentElement.querySelector("p");
        text.style.color = "rgb(40, 40, 40)";
        strikeout.style.display = "block"; 
        svg.style.fill =  "rgb(132, 75, 185)";
    console.log(isSelected)
    
}
const deleteTask = (buttonEl) => {
    const parent = buttonEl.parentElement;
    parent.remove()
}

const addTask = () => {
    text = inputText.value;
    if(!text){
        alert("Please input a task")
    }else{
        tasksContainer.innerHTML += `
            <div class="task">
                <hr class="strikeout hiding" id="strikeout">
                <button onclick="check(this)" type="button" class="check">
                    <div class="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    </div>
                </button>
                <p class="task-text">${text}</p> 
                <button onclick="deleteTask(this)" type="button" class="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
            </div>
        `

        inputText.value = "";
    }
}

addBtn.addEventListener("click", addTask);
inputText.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        addTask()
    }
})
