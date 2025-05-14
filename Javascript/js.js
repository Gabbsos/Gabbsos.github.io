

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

    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    
    map1.set("day",day);
    map1.set("month",month);
    map1.set("year", year);

    const limits = {
        day:31,
        month:12,
        year:today.getFullYear()
    };
    
    if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
        document.getElementById("thediv").textContent = "All values must be integers";
    } else {

        for (const [key, value] of map1){
            let newVal = value;
            if(value > limits[key] || value < 0){
                document.getElementById(key).style.backgroundColor = "red";
                newVal = 0;
            }else{
                newVal = (newVal/limits[key])*255;
                newVal = Math.floor(newVal);
                document.getElementById(key).style.backgroundColor = "white";
                
            }
            
            map1.set(key,newVal);

            document.getElementById("thediv").style.backgroundColor = `rgb(${map1.get("month")},${map1.get("year")},${map1.get("day")})`;
        }
    }
    

}
