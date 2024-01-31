const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const todo = document.getElementById("todo");

    const title = prompt("Input Title");
    const description = prompt("Input Description");

    if (!title || ! description){
        alert("Fill all box!");
        return;
    }
    // Create Article Element //
    const article= document.createElement("article");
    article.setAttribute("class", "border p-3 mt-2");
    article.setAttribute("draggable", "true");
    article.setAttribute("ondragstart", "drag(event)");
    article.setAttribute("id","drag-" + todo.childElementCount + 1);


    // Create h4 Element //
    const h4 = document.createElement("h4");
    h4.innerHTML = title;
    const p = document.createElement("p");
    p.innerHTML = description;

    // Create Delete Button //
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", 
    "bg-danger rounded-5 px-3 py-1 border-0 text-white me-1"
    );

    // Create Edit Button //
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class",
    "bg-info rounded-5 px-3 py-1 border-0 text-white me-1"
    );

    article.appendChild("h4");
    article.appendChild("p");
    article.appendChild(deleteBtn);
    article.appendChild(editBtn);
    

    todo.appendChild(article);
});

function allowDrop(event) {
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
};