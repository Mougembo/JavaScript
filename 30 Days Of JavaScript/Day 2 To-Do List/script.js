const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const add = document.querySelector(".addBtn");

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

add.addEventListener("click", ()=>{
    addTask()
})

listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName === "SPAN"){
        const li = e.target.parentElement;
        li.classList.add("slide-out");
        saveData()
        
        li.addEventListener("animationend", ()=>{
            li.remove()
        })
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

loadData();