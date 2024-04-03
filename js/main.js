var taskName = document.getElementById("name");
var taskDesc = document.getElementById("desc");
var tablebody = document.getElementById("tableBody")
var taskContainer=[];
if (localStorage.getItem('tasks') != null){
  taskContainer= JSON.parse(localStorage.getItem('tasks'));
  display(taskContainer)
}else{
  taskContainer= []
}

function addTask(){
  var task ={
    name : taskName.value,
    description : taskDesc.value,
  }
  taskContainer.push(task)
  localStorage.setItem('tasks',JSON.stringify(taskContainer))
  clear()
  display(taskContainer)
}

function clear(){
  taskName.value =" "
  taskDesc.value=" "
}

function display(arr){
  var cartoona =``
  for (var i=0; i< arr.length; i++){
    var taskIndex = i +1;
    cartoona +=`
    <tr class="bg-white">
    <td>${taskIndex}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].description}</td>
    <td><button class="fa-solid fa-xmark btn bg-danger" onClick="deletetasks(${i})"></button></td>
    </tr>`
  }
  tablebody.innerHTML=cartoona

}
function search(term){
  var searchResult = [];
  for(var i=0; i<taskContainer.length; i++){
    if(taskContainer[i].name.toLowerCase().includes(term.toLowerCase())){
      searchResult.push(taskContainer[i])
    }

  }
  display(searchResult)

}

function deletetasks(deleteIndex){
  taskContainer.splice(deleteIndex,1)
  localStorage.setItem('tasks',JSON.stringify(taskContainer))
  display(taskContainer)
}

function updatetask(updateIndex){
  taskName.value = taskContainer[updateIndex].name;
  taskDesc.value = taskContainer[updateIndex].description;

}