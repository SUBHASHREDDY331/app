const inputBox = document.getElementById("inputBox");
const listContainer =  document.getElementById("xyz");

function addTask(){
    if (inputBox.value === ''){
        alert("write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value='';
    data()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        data()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        data()

    }
});

function data(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function displayData(){
    listContainer.innerHTML=localStorage.getItem("data")
}
displayData()
