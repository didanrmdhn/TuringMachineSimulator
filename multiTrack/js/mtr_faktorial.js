var nval1 = document.getElementById('val1');
var turingVal = [];
var turingVal2 = [];
var i;
var j;
var result=0;
var nowState = 0;
var activeState = document.getElementsByClassName('state-active');
var trTape = document.getElementById('turing_tape');
var trTape2 = document.getElementById('turing_tape2');
var dispState = document.getElementById('show-state-now');
var dispAnswer = document.getElementById('show-answer');
var stepController = document.getElementById('controller_step');
var initController = document.getElementById('init_step');

/*
generate 2 tape ex.
tape1 BB000BB
tape2 BBBBBBB
*/
//sama kaya st cuman ditambahin lagi tapenya
function init(){
    trDelete();

    if(nval1.value > 0){
    for(i = 0; i < 2; i++){
    turingVal.push(new createState("B"));               ////turingVal1 buat nampung array tape 1, createState1 buat generate element di tape 1
    turingVal2.push(new createState2("B"));             //turingVal2 buat nampung array tape 2, createState2 buat generate element di tape 2
    }
    for(i = 0; i < nval1.value; i++){
        turingVal.push(new createState("0"));
        turingVal2.push(new createState2("B"));
    }
    for(i = 0; i < 2; i++){
        turingVal.push(new createState("B"));
        turingVal2.push(new createState2("B"));
        // turingVal.push(new createState("B"));
    }
    trTape.childNodes[1].classList.add("state-active"); //set index ditape 1 aktif
    trTape2.childNodes[1].classList.add("state-active"); //set index ditape 2 aktif
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
function createState2(val2){
    this.val = val2;
    var item2 = document.createElement("p");
    var n2 = document.createTextNode(this.val);
    item2.appendChild(n2);
    trTape2.appendChild(item2);
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
    trTape2.innerHTML = "";
    turingVal = [];
    turingVal2 = [];
    result = 0;
    stepController.disabled = false;
}

function step(){
    if(turingVal.length){
        for(i=0;i<activeState.length;i++){
            activeState[i].classList.remove("state-active");
            activeState[i].classList.remove("state-active");
        }
    }
    finished = 0;
    //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,direction,addblank
    go(0, '0', 'B', 0, '0', 'B', 'R', 0);
    go(0, 'B', 'B', 1, '1', 'B', 'L', 1);
    go(1, '0', 'B', 1, '0', 'B', 'L', 0);
    go(1, 'B', 'B', 2, 'B', 'B', 'R', 0);
    go(2, '0', 'B', 3, '0', 'X', 'R', 0);
    go(3, '0', 'B', 3, '0', 'B', 'R', 0);
    go(3, '1', 'B', 3, '1', 'B', 'R', 0);
    go(3, 'B', 'B', 4, '0', 'B', 'S', 1);
    go(4, '0', 'B', 4, '0', 'B', 'L', 0);
    go(4, '1', 'B', 4, '1', 'B', 'L', 0);
    go(4, '0', 'X', 2, '0', 'X', 'R', 0);
    go(2, '1', 'B', 5, '1', 'B', 'R', 0);
    go(5, '0', 'B', 5, '0', 'B', 'R', 0);
    go(5, 'B', 'B', 6, '1', 'B', 'L', 1);
    go(6, '1', 'B', 6, '1', 'B', 'L', 0);
    go(6, '0', 'B', 6, '0', 'B', 'L', 0);
    go(6, '0', 'X', 6, '0', 'B', 'L', 0);
    go(6, 'B', 'B', 7, 'B', 'B', 'R', 0);
    go(7, '0', 'B', 8, 'B', 'B', 'R', 0);
    go(8, '0', 'B', 9, '0', 'X', 'R', 0);
    go(9, '0', 'B', 9, '0', 'B', 'R', 0);
    go(9, '1', 'B', 10, '1', 'B', 'R', 0);
    go(10, '0', 'B', 11, '0', 'X', 'R', 0);
    go(11, '0', 'B', 11, '0', 'B', 'R', 0);
    go(11, '1', 'B', 12, '1', 'B', 'R', 0);
    go(12, '0', 'B', 12, '0', 'B', 'R', 0);
    go(12, 'B', 'B', 13, '0', 'B', 'L', 1);
    go(13, '0', 'B', 13, '0', 'B', 'L', 0);
    go(13, '1', 'B', 13, '1', 'B', 'L', 0);
    go(13, '0', 'X', 10, '0', 'X', 'R', 0);
    go(10, '1', 'B', 14, '1', 'B', 'L', 0);
    go(14, '0', 'X', 14, '0', 'B', 'L', 0);
    go(14, '1', 'B', 15, '1', 'B', 'L', 0);
    go(15, '0', 'B', 15, '0', 'B', 'L', 0);
    go(15, '0', 'X', 8, '0', 'X', 'R', 0);
    go(8, '1', 'B', 16, '1', 'B', 'L', 0);
    go(16, '1', 'B', 16, '1', 'B', 'L', 0);
    go(16, '0', 'X', 16, '0', 'X', 'L', 0);
    go(16, '0', 'B', 16, '0', 'B', 'L', 0);
    go(16, 'B', 'B', 17, 'B', 'B', 'R', 0);
    go(16, 'B', 'B', 17, 'B', 'B', 'R', 0);
    go(17, '0', 'X', 18, 'B', 'B', 'R', 0);
    go(18, '0', 'X', 19, '0', 'X', 'R', 0);
    go(19, '0', 'X', 19, '0', 'X', 'R', 0);
    go(19, '0', 'B', 19, '0', 'B', 'R', 0);
    go(19, '1', 'B', 20, '1', 'B', 'R', 0);
    go(20, '0', 'B', 20, '0', 'B', 'R', 0);
    go(20, '0', 'X', 20, '0', 'X', 'R', 0);
    go(20, '1', 'B', 21, '1', 'B', 'L', 0);
    go(21, '0', 'X', 21, '0', 'X', 'L', 0);
    go(21, '0', 'B', 16, '0', 'X', 'L', 0); 
    go(21, '1', 'B', 16, '1', 'B', 'L', 0);
    go(18, '0', 'B', 22, 'B', 'B', 'R', 0);
    go(18, '1', 'B', 22, 'B', 'B', 'R', 0);
    go(22, '0', 'B', 22, 'B', 'B', 'R', 0);
    go(22, '0', 'X', 23, '0', 'X', 'R', 0);
    go(23, '0', 'X', 23, '0', 'X', 'R', 0);
    go(23, '0', 'B', 23, '0', 'B', 'R', 0);
    go(23, '1', 'B', 23, '1', 'B', 'R', 0);
    go(23, 'B', 'B', 24, '1', 'B', 'L', 1);
    go(24, '1', 'B', 24, '1', 'B', 'L', 0);
    go(24, '0', 'X', 24, '0', 'B', 'R', 0);
    go(24, '0', 'B', 24, '0', 'B', 'L', 0);
    go(24, 'B', 'B', 8, 'B', 'B', 'R', 0);
    go(24, 'B', 'B', 8, 'B', 'B', 'R', 0);
    go(18, '0', 'B', 22, 'B', 'B', 'R', 0);
    go(18, '1', 'B', 22, 'B', 'B', 'R', 0);
    go(22, '0', 'B', 22, 'B', 'B', 'R', 0);
    go(22, '1', 'B', 25, 'B', 'B', 'S', 0);
    go(17, '1', 'B', 26, 'B', 'B', 'R', 0);
    go(26, '1', 'B', 26, 'B', 'B', 'R', 0);
    go(26, '0', 'B', 26, '0', 'B', 'R', 0);
    go(26, 'B', 'B', 25, 'B', 'B', 'S', 0);

    if(state==25){
        displayState("Selesai");
        displayAnswer();
        stepController.disabled = true;
    }
}

function go(nowState,oldVal,oldVal2,nextState,newVal,newVal2,direction,addBlank){
    if(turingVal[j].val == oldVal && turingVal2[j].val == oldVal2 && state == nowState && finished == 0){
        turingVal[j].replaceWith(newVal);
        turingVal2[j].replaceWith(newVal2);
        trTape.childNodes[j].textContent = newVal;
        trTape2.childNodes[j].textContent = newVal2;
        trTape.childNodes[j].classList.add("state-active");
        trTape2.childNodes[j].classList.add("state-active");
        trTape.childNodes[j].scrollIntoView();
        trTape2.childNodes[j].scrollIntoView();
        state = nextState;
        displayState("(q"+nowState+" | q"+nextState+") | "+oldVal+","+oldVal2+"/"+newVal+","+newVal2+", "+direction);
        if(addBlank){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
        }
        if(direction =='R'){
            j++;
        }else if(direction == 'L'){
            j--;
        }else{
            j;
        }
        finished = 1;
    }
}












