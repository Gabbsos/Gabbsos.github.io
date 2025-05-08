

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
    map1.set("day",31)
    map1.set("month",12)
    map1.set("year", today.getFullYear())
    
    for (const [key, value] of map1){
        (key > value || key < 0) ? document.getElementById(key).style.backgroundColor = "red" : key / value *255
    }
    
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value / 12 * 255;
    var year = document.getElementById("year").value % 255;


    document.getElementById("thediv").style.backgroundColor = `rgb(${year},${day},${month})`;
}
