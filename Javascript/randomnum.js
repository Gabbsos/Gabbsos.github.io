
function hol(){

    var it = Math.floor(Math.random()*101);
    var num = parseInt(document.getElementById("num").value)

    if (!Number.isInteger(num)){
        document.getElementById("la").textContent = "Make sure the value is an int";
    }else{
        if(num > it){
            document.getElementById("la").textContent = "Lower"
        }else if (num == it){
            document.getElementById("la").textContent = "You got it right"
        }else{
            document.getElementById("la").textContent = "Higher"
        }
    }
    

}