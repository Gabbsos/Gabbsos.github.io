

function appear()
{
    document.getElementById("thediv").style.display = "block"
}

function disappear()
{
    document.getElementById("thediv").style.display = "none";
}



function colour()
{
    let today = new Date();
    const map1 = new Map();

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    
    map1.set("day",day);
    map1.set("month",month);
    map1.set("year", year);

    const limits = {
        day:31,
        month:12,
        year:today.getFullYear()
    };
    
    for (const [key, value] of map1){
        if(!Number.isInteger(parseInt(value))){
            document.getElementById("thediv").textContent = "The value must be an integer";
        }else{
            if(value > limits[key] ||value < 0){
                document.getElementById(key).style.backgroundColor = "red";
                value = 0;
            }else{
                value = (value/limits[key])*255
                document.getElementById("thediv").style.backgroundColor = `rgb(${month},${year},${day})`
            }
        }
    }

    

}
