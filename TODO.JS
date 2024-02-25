let todoelement = document.getElementById("taskinfo")
let tasklist = document.getElementById("tasklist")

document.getElementById("add").onclick = function(){
    if(todoelement.value.length==0){
        alert("Enter task details")
    }
    else{
        tasklist.innerHTML = tasklist.innerHTML+`
        <div class="task">
            <span id="work">${todoelement.value}</span>
            <button class="del"><span class="material-symbols-rounded">
            delete
            </span></button>
        </div>`
        let alltasks = document.querySelectorAll(".del")
        for(i=0;i<alltasks.length;i++){
            alltasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }
        todoelement.value=""
    }
}