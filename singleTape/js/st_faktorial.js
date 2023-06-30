var nval1 = document.getElementById('val1');
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

//misal inputnya 5, bakal generate tape ex. BB00000BB
function init(){
    trDelete();
    //generate BB
    if(nval1.value > 0){
    turingVal.push(new createState("B"));
    turingVal.push(new createState("B"));
    //generate 0^nval1 sesuai dengan value dari nval1 / input
    for(i = 0; i < nval1.value; i++){
        turingVal.push(new createState("0"));
    }
    //generate BB
    turingVal.push(new createState("B"));
    turingVal.push(new createState("B"));
    trTape.childNodes[1].classList.add("state-active"); //set index 1 di tape aktif
    }else{
        alert('Nilai belum dimasukan/negatif');
    }
    j=2;
    state=0;
}
//buat generate per blok state
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
    go(0, 'B', 1, '1','L',1);
    go(1, '0', 1, '0','L',0);
    go(1, 'B', 2, 'B','R',0);
    go(2, '0', 3, 'X','R',0);
    go(3, '0', 3, '0','R',0);
    go(3, '1', 3, '1','R',0);
    go(3, 'B', 4, '0','L',1);
    go(4, '0', 4, '0','L',0);
    go(4, '1', 4, '1','L',0);
    go(4, 'X', 2, 'X','R',0);
    go(2, '1', 5, '1','R',0);
    go(5, '0', 5, '0','R',0);
    go(5, 'B', 6, '1','L',1);
    go(6, '1', 6, '1','L',0);
    go(6, 'X', 6, '0','L',0);
    go(6, '0', 6, '0','L',0);
    go(6, 'B', 7, 'B','R',0);
    go(7, '0', 8, 'Y','R',0);
    go(8, '0', 9, 'X','R',0);
    go(9, '0', 9, '0','R',0);
    go(9, '1', 10, '1','R',0);
    go(10, '0', 11, 'X','R',0);
    go(11, '0', 11, '0','R',0);
    go(11, '1', 11, '1','R',0);
    go(11, 'B', 12, '0','L',1);
    go(12, '0', 12, '0','L',0);
    go(12, '1', 12, '1','L',0);
    go(12, 'X', 13, 'X','R',0);
    go(13, '0', 14, 'X','R',0);
    go(14, '0', 14, '0','R',0);
    go(14, '1', 11, '1','R',0);
    go(13, '1', 15, '1','L',0);
    go(15, 'X', 15, '0','L',0);
    go(15, '1', 16, '1','L',0);
    go(16, '0', 16, '0','L',0);
    go(16, 'X', 8, 'X','R',0);
    go(8, '1', 17, '1','L',0);
    go(17, '1', 17, '1','L',0);
    go(17, '0', 17, '0','L',0);
    go(17, 'X', 17, 'X','L',0);
    go(17, 'Y', 18, 'Y','R',0);
    go(18, 'X', 19, 'Y','R',0);
    go(19, 'X', 20, 'X','R',0);
    go(20, 'X', 20, 'X','R',0);
    go(20, '0', 20, '0','R',0);
    go(20, 'X', 20, 'X','R',0);
    go(20, '1', 21, '1','R',0);
    go(21, '0', 21, '0','R',0);
    go(21, 'X', 21, 'X','R',0);
    go(21, '1', 22, '1','L',0);
    go(22, 'X', 22, 'X','L',0);
    go(22, '0', 17, 'X','L',0);
    go(19, '1', 23, '1','L',0);
    go(23, 'Y', 23, 'Y','L',0);
    go(23, 'B', 24, 'B','R',0);
    go(24, 'Y', 24, 'B','R',0);
    go(24, '1', 25, 'B','R',0);
    go(24, '0', 25, 'B','R',0);
    go(25, '0', 25, 'B','R',0);
    go(25, '1', 26, 'B','S',0);
    // go(25, 'X', 27, 'X','R',0);
    go(25, 'X', 27, 'X','L',0);
    go(27, 'B', 28, 'X','R',0);
    go(28, 'X', 29, 'X','L',0);
    go(29, 'X', 29, 'X','R',0);
    go(29, '1', 29, '1','R',0);
    go(29, '0', 29, '0','R',0);
    go(29, 'B', 30, '1','L',1);
    go(30, '0', 30, '0','L',0);
    go(30, '1', 30, '1','L',0);
    go(30, 'X', 30, '0','R',0);
    go(30, 'B', 7, 'B','R',0);
    go(18, '1', 31, '1','L',0);
    go(31, 'Y', 32, 'B','R',0);
    go(32, '1', 32, 'B','R',0);
    go(32, '0', 32, '0','R',0);
    go(32, 'B', 26, 'B','S',0);
    if(state==26){
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












