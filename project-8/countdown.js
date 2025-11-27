

let counterstartNUM = prompt("Number to start with: ");
document.getElementById("circle").innerHTML=counterstartNUM;


// making funciton 

function startBTN(){
    
    if (counterstartNUM == null){
        return;
    }
    if(counterstartNUM <= 0){
        alert(("Out!"));
        return;
    }
    counterstartNUM--;
    document.getElementById("circle").innerHTML=counterstartNUM;

    
}

