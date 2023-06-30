var getDomVal = document.getElementById('val1');
var turingVal = [];
var i;
var j;
var result = 0;
var nowState = 0;
var activeState = document.getElementsByClassName('state-active');
var trTape = document.getElementById('turing_tape');
var dispState = document.getElementById('show-state-now');
var dispAnswer = document.getElementById('show-answer');
var stepController = document.getElementById('controller_step');
var initController = document.getElementById('init_step');

//INPUT EXAMPLE; 1+1, 2+2, 5+3

function init() {
    trDelete();
    var nval = getDomVal.value;
    var nvalArr = nval.split("+");
    var nval1 = parseInt(nvalArr[0]);
    var nval2 = parseInt(nvalArr[1]);
    console.log(nval2);
    if (nval1 != undefined && nval2 != undefined) {
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        //if input negative
        if (nval1 < 0) {
            newNval1 = nval1 * -1;
        }
        if (nval2 < 0) {
            newNval2 = nval2 * -1;
        }
        if (nval1 >= 0) {
            newNval1 = nval1;
        }
        if (nval2 >= 0) {
            newNval2 = nval2;
        }
        for (i = 0; i < newNval1; i++) {
            if (nval1 < 0) {
                turingVal.push(new createState("1"));
            } else {
                turingVal.push(new createState("0"));
            }
        }
        turingVal.push(new createState("1"));
        for (i = 0; i < newNval2; i++) {
            if (nval2 < 0) {
                turingVal.push(new createState("1"));
            } else {
                turingVal.push(new createState("0"));
            }
        }
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        trTape.childNodes[1].classList.add("state-active");
    } else {
        alert('Nilai belum dimasukan/negatif');
    }
    j = 2;
    state = 0;
}

function createState(val) {
    this.val = val;
    var item = document.createElement("p");
    var n = document.createTextNode(this.val);
    item.appendChild(n);
    trTape.appendChild(item);
    this.replaceWith = function (newValue) {
        this.val = newValue;
    }

}

function displayAnswer() {
    for (i = 0; i < turingVal.length; i++) {
        console.log(turingVal.length);
        if (turingVal[i].val == "0") {
            result++;
        }
        if (turingVal[i].val == "0") {
            result--;
        }
    }
    dispAnswer.value = result;
}

function displayState(str) {
    dispState.textContent = str;
}

function trDelete() {
    dispState.textContent = "null";
    dispAnswer.value = '?';
    trTape.innerHTML = "";
    turingVal = [];
    result = 0;
    stepController.disabled = false;
}

function step() {
    if (turingVal.length) {
        for (i = 0; i < activeState.length; i++) {
            activeState[i].classList.remove("state-active");
        }
    }
    finished = 0;
    //nowState,old value | nextState,newvalue,direction,addblank
    go(0, '0', 0, '0', 'R', 0);
    go(0, '1', 1, '1', 'R', 0);
    go(1, 'X', 1, 'X', 'L', 0);
    go(1, 'B', 3, 'B', 'L', 1);
    go(1, '0', 2, 'X', 'L', 0);
    go(2, 'X', 2, 'X', 'R', 0);
    go(2, '1', 2, '1', 'R', 0);
    go(2, '0', 2, '0', 'R', 0);
    go(2, 'B', 0, '0', 'R', 0);
    go(3, '1', 3, 'B', 'L', 0);
    go(3, 'X', 0, 'B', 'L', 0);

    if (state == 3) {
        displayState("Selesai");
        displayAnswer();
        stepController.disabled = true;
    }
}

function go(nowState, oldVal, nextState, newVal, direction, addBlank) {
    if (turingVal[j].val == oldVal && state == nowState && finished == 0) {
        turingVal[j].replaceWith(newVal);
        trTape.childNodes[j].textContent = newVal;
        trTape.childNodes[j].classList.add("state-active");
        trTape.childNodes[j].scrollIntoView();
        state = nextState;
        displayState("(q" + nowState + " | q" + nextState + ") | " + oldVal + "/" + newVal + ", " + direction);
        if (addBlank) {
            turingVal.push(new createState("B"));
        }
        (direction == 'R') ? j++ : j--;
        finished = 1;
    }
}












