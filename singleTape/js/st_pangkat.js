var getDomVal = document.getElementById('val1');
var turingVal = [];
var i;
var j;
var result=0;
var nowState = 0;
var activeState = document.getElementsByClassName('state-active');
var trTape = document.getElementById('turing_tape');
var dispState = document.getElementById('show-state-now');
var dispAnswer = document.getElementById('show-answer');
var stepController = document.getElementById('controller_step');
var initController = document.getElementById('init_step');
//input 2^5, generate BB00000100BB
function init(){
    trDelete();
    var nval = getDomVal.value;
    var nvalArr = nval.split("^");      //split input jadi array
    var nval1 = parseInt(nvalArr[0]);
    var nval2 = parseInt(nvalArr[1]);
    // console.log(nvalArr);
    if(nval1 > 0 && nval2 > 0){
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        for(i = 0; i < nval2; i++){
            turingVal.push(new createState("0"));
        }
        turingVal.push(new createState("1"));
        for(i = 0; i < nval1; i++){
            turingVal.push(new createState("0"));
        }
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        trTape.childNodes[1].classList.add("state-active");
    }else{
        alert('Nilai belum dimasukan/negatif');
    }
    j=2;
    state=0;
}

function createState(val){
    this.val = val;
    var item = document.createElement("p");
    var n = document.createTextNode(this.val);
    item.appendChild(n);
    trTape.appendChild(item);
    this.replaceWith = function(newValue){
        this.val=newValue;
    }
    
}

function displayAnswer(){
    for(i=0; i<turingVal.length; i++){
        console.log(turingVal.length);
        if(turingVal[i].val == "0"){
            result++;
        }
    }
    dispAnswer.value = result;
}

function displayState(str){
    dispState.textContent = str;
}

function trDelete(){
    dispState.textContent = "null";
    dispAnswer.value = '?';
    trTape.innerHTML = "";
    turingVal = [];
    result = 0;
    stepController.disabled = false;
}

function step(){
    if(turingVal.length){
        for(i=0;i<activeState.length;i++){
            activeState[i].classList.remove("state-active");
        }
    }
    finished = 0;
    //nowState,old value | nextState,newvalue,direction,addblank
    go(0, '0', 0, '0','R',0);
    go(0, '1', 1, '1','R',0);
    go(1, '0', 1, '0','R',0);
    go(1, 'B', 2, '1','L',1);
    go(2, '0', 2, '0','L',0);
    go(2, '1', 2, '1','L',0);
    go(2, 'B', 3, 'B','R',0);
    go(3, '0', 4, 'Y','R',0);
    go(4, '0', 4, '0','R',0);
    go(4, '1', 5, '1','R',0);
    go(5, 'X', 5, 'X','R',0);
    go(5, '0', 6, 'X','R',0);
    go(6, '1', 6, '1','R',0);
    go(6, '0', 6, '0','R',0);
    go(6, 'B', 7, '0','L',1);
    go(7, '1', 7, '1','L',0);
    go(7, '0', 7, '0','L',0);
    go(7, 'X', 5, 'X','R',0);
    go(5, '1', 8, '1','R',0);
    go(8, '0', 8, '0','R',0);
    go(8, 'B', 9, '1','L',1);
    go(9, '0', 9, '0','L',0);
    go(9, '1', 9, '1','L',0);
    go(9, 'X', 9, '0','L',0);
    go(9, 'Y', 10, 'B','R',0);
    go(9, 'Y', 10, 'B','R',0);
    go(10, '0', 11, 'Y','R',0);
    go(11, '0', 11, '0','R',0);
    go(11, '1', 12, '1','R',0);
    go(12, '0', 13, 'X','R',0);
    go(13, '0', 13, '0','R',0);
    go(13, '1', 14, '1','R',0);
    go(14, '0', 15, 'X','R',0);
    go(15, '0', 15, '0','R',0);
    go(15, '1', 15, '1','R',0);
    go(15, 'B', 16, '0','L',1);
    go(16, '0', 16, '0','L',0);
    go(16, '1', 16, '1','L',0);
    go(16, 'X', 14, 'X','R',0);
    go(14, '1', 17, '1','L',0);
    go(17, 'X', 17, '0','L',0);
    go(17, '1', 18, '1','L',0);
    go(18, '0', 18, '0','L',0);
    go(18, 'X', 12, 'X','R',0);
    go(12, '1', 19, '1','R',0);
    go(19, '1', 19, '1','R',0);
    go(19, '0', 19, '0','R',0);
    go(19, 'B', 20, '1','L',1);
    go(20, 'X', 20, '0','L',0);
    go(20, '0', 20, '0','L',0);
    go(20, '1', 20, '1','L',0);
    go(20, 'Y', 21, 'B','R',0);
    go(21, '0', 21, '0','R',0);
    go(21, '1', 22, '1','R',0);
    go(22, '0', 23, 'X','R',0);
    go(23, '0', 23, '0','R',0);
    go(23, '1', 24, '1','R',0);
    go(24, 'Y', 24, 'Y','R',0);
    go(24, '0', 24, '0','R',0);
    go(24, '1', 25, '1','L',0);
    go(25, 'Y', 25, 'Y','L',0);
    go(25, '0', 26, 'Y','L',0);
    go(26, '0', 26, '0','L',0);
    go(26, '1', 26, '1','L',0);
    go(26, 'X', 22, 'X','R',0);
    go(22, '1', 20, '1','L',0);
    go(20, 'B', 27, 'B','R',0);
    go(27, '0', 28, 'Y','R',0);
    go(27, '0', 28, 'Y','R',0);
    go(28, '0', 28, '0','R',0);
    go(28, '1', 29, 'Z','R',0);
    go(29, '1', 29, 'Z','R',0);
    go(29, '0', 29, 'Z','R',0);
    go(29, 'Y', 29, 'Y','L',0);
    go(29, 'Z', 30, '1','L',0);
    go(30, 'Z', 30, 'Z','L',0);
    go(30, '0', 30, '0','L',0);
    go(30, 'Y', 31, 'B','R',0);
    go(31, 'Y', 31, 'Y','R',0);
    go(31, '0', 31, '0','R',0);
    go(31, 'Z', 31, 'Z','R',0);
    go(31, '1', 32, '1','L',0);
    go(32, '0', 32, '0','L',0);
    go(32, 'Y', 32, 'Y','L',0);
    go(32, 'Z', 33, 'Y','L',0);
    go(32, 'B', 35, 'B','R',0);//
    go(33, 'Z', 33, 'Z','L',0);
    go(33, '0', 34, 'Y','L',0);
    go(33, 'Y', 34, 'Y','L',0);
    go(34, '0', 34, 'Y','L',0);
    go(34, 'Y', 34, 'Y','L',0);
    go(34, 'B', 30, 'B','R',0);
    go(33, 'B', 35, 'B','R',0);
    go(35, 'Z', 35, 'B','R',0);
    go(35, 'Y', 35, '0','R',0);
    go(35, '1', 36, '1','R',0);
    go(36, 'Y', 36, '0','R',0);
    go(36, '1', 37, '1','R',0);
    go(37, '1', 37, '1','L',0);
    go(37, '0', 37, '0','L',0);
    go(37, 'B', 10, 'B','R',0);
    go(27, '1', 38, 'Y','R',0);
    go(38, '0', 38, 'Y','R',0);
    go(38, '1', 39, 'Y','R',0);
    go(10, '1', 39, 'Y','R',0);
    go(39, 'Y', 39, 'Y','R',0);
    go(39, '0', 39, 'Y','R',0);
    go(39, '1', 40, 'Y','R',0);
    go(40, '1', 40, 'Y','R',0);
    go(40, '0', 40, '0','R',0);
    go(40, 'B', 41, 'B','L',0);
    go(41, '0', 41, '0','L',0);
    go(41, 'Y', 41, 'B','L',0);
    go(41, 'B', 42, 'B','R',0);

    
    if(state==42){
        displayState("Selesai");
        displayAnswer();
        stepController.disabled = true;
    }
}

function go(nowState,oldVal,nextState,newVal,direction,addBlank){
    if(turingVal[j].val == oldVal && state == nowState && finished == 0){
        turingVal[j].replaceWith(newVal);
        trTape.childNodes[j].textContent = newVal;
        trTape.childNodes[j].classList.add("state-active");
        trTape.childNodes[j].scrollIntoView();
        state = nextState;
        displayState("(q"+nowState+" | q"+nextState+") | "+oldVal+"/"+newVal+", "+direction);
        if(addBlank){
            turingVal.push(new createState("B"));
        }
        (direction =='R') ? j++ : j--;
        finished = 1;
    }
}












