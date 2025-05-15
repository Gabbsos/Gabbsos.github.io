

let it = 0;
let min = 0;
let max = 0;

function makenum(){
    
    while(true){

        while (true){
            min = prompt("Please type in a minimum value");
            if(!Number.isInteger(parseInt(min))){
                continue;
            }else{
                break;
            }
        }

        while(true){
            max = prompt("Please type in a maximum value");
            if(!Number.isInteger(parseInt(max))){
                continue;
            }else{
                break;
            }
        }
        if(min>max){
            continue;
        }else{
            break;
        }
    }

    it = randomnum(min,max);
}

function randomnum(min,max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function guess(min,max){
    
    while(true){
    let num = prompt(`Guess a number between ${min} and ${max}`)
    if
    
    }
}




    

