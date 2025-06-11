

const items = new Map();
//need to update key after deletion

function addItem(){
    let add = prompt("What would you like to add?");
    
    items.set((items.size + 1),add);
}


function remItem(){
    if (items.size == 0){
        alert("There are no items to remove");
        return;
    }

    let list = "Current Items:\n";
    items.forEach((value,key) => {
        list += `${key}: ${value}\n`;
    });

    let gone = prompt(`${list}Type the num of the item you want to remove`);

    items.delete(parseInt(gone))


}


function display(){
    let list = "Current Items:\n";
    items.forEach((value,key) => {
        list += `${key}: ${value}\n`;
    });
    alert(list)
}