
//Checking an Item Off the List
const list = document.querySelector('ul');
list.addEventListener('click', checked);



//checked function
function checked(event){
    if (checked.target.tagName === 'LI'){
        checked.target.classList.toggle('checked');
    }

}

//Add New Item to To Do List

function newListItem() {
const node = document.createElement("LI");
const newItem = document.getElementById("newItem").value;
const textnode = document.createTextNode(newItem);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
}



