function addtask(){
    var input = document.getElementById("in").value;
    var element = document.createElement("div");
    element.setAttribute("id","sub-task");
    element.innerHTML = `<label>${input}</label><button>Delete</button>`;
    //console.log(element);
    var addElement = document.getElementById("main-task");
    addElement.appendChild(element);
}

function deletetask(){
    var item = document.getElementById("in.value");
    element.remove("item");
    
}

