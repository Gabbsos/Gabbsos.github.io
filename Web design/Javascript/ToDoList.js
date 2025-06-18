
var items = getCookie();


window.addEventListener("beforeunload", () => {
    saveCookies();
});


function addItem(){
    let add = prompt("What would you like to add?");
    items.push(add);
}


function remItem(){
    
}


function display(){
    if(!items.length === 0){
        for(let i=0;i<items.length;i++){
        


            
        }
    }


}


function saveCookies(){ 
    let theList = "";
    items.forEach((value) => {
       theList += (value + ",");
    });
    document.cookie = "ToDoList=" + theList;
}


function getCookie(){
    let cookies = `${document.cookie}`;
    let myCookies = cookies.split(",");
    for (let i = 0; i<myCookies.length;i++){
        if(myCookies[i].includes("ToDoList=")){
            myCookies[i] = myCookies[i].replace("ToDoList=","");
        }
    }
    myCookies = myCookies.filter(Boolean);
    return myCookies;
}

