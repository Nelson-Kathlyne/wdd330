//Add New Item to To Do List

function newListItem() {
const node = document.createElement("LI");
const newItem = document.getElementById("newItem").value;
const textnode = document.createTextNode(newItem);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
}


//