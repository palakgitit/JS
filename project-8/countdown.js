let counterstartNUM = null;
let paused = true;

function startBTN() {

    
    if (counterstartNUM === null) {
        counterstartNUM = prompt("Number to start with:");
        counterstartNUM = parseInt(counterstartNUM);

        if (isNaN(counterstartNUM) || counterstartNUM <= 0) {
            alert("Enter valid number");
            counterstartNUM = null;
            return;
        }
    }

    paused = false;
    countNow();
}

function countNow() {

    if (paused) {
        return;
    }

    if (counterstartNUM <= 0) {
        return;
    }

    counterstartNUM--;
    document.getElementById("circle").innerHTML = counterstartNUM;

    setTimeout(countNow, 1000);
}

function pauseBTN() {
    paused = true;
}

function resetBTN() {
    paused = true;
    counterstartNUM = null;
    document.getElementById("circle").innerHTML = " ";
}
