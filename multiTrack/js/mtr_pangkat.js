var getDomVal = document.getElementById('val1');
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

function init(){
    trDelete();

    var nval = getDomVal.value;
    var nvalArr = nval.split("^");
    var nval1 = parseInt(nvalArr[0]);
    var nval2 = parseInt(nvalArr[1]);
    // console.log(nvalArr);
    if(nval1 > 0 && nval2 > 0){
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            
        }
        for(i = 0; i < nval2; i++){
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
        }
        turingVal.push(new createState("1"));
        turingVal2.push(new createState2("B"));
        for(i = 0; i < nval1; i++){
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
        }
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            // turingVal.push(new createState("B"));
        }
        trTape.childNodes[1].classList.add("state-active");
        trTape2.childNodes[1].classList.add("state-active");
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
    go(0, '0','B', 0, '0','B','R',0);
    go(0, '1','B', 1, '1','B','R',0);
    go(1, '0','B', 1, '0','B','R',0);
    go(1, 'B','B', 2, '1','B','L',1);
    go(2, '0','B', 2, '0','B','L',0);
    go(2, '1','B', 2, '1','B','L',0);
    go(2, 'B','B', 3, 'B','B','R',0);
    go(3, '0','B', 4, '0','Y','R',0);
    go(4, '0','B', 4, '0','B','R',0);
    go(4, '1','B', 5, '1','B','R',0);
    go(5, '0', 'X', 5, '0','X','R',0);
    go(5, '0','B', 6, '0','X','R',0);
    go(6, '1','B', 6, '1','B','R',0);
    go(6, '0','B', 6, '0','B','R',0);
    go(6, 'B','B', 7, '0','B','L',1);
    go(7, '1','B', 7, '1','B','L',0);
    go(7, '0','B', 7, '0','B','L',0);
    go(7, '0','X', 5, '0','X','R',0);
    go(5, '1','B', 8, '1','B','R',0);
    go(8, '0','B', 8, '0','B','R',0);
    go(8, 'B','B', 9, '1','B','L',1);
    go(9, '0','B', 9, '0','B','L',0);
    go(9, '1','B', 9, '1','B','L',0);
    go(9, '0','X', 9, '0','B','L',0);
    go(9, '0','Y', 10, 'B','B','R',0);
    go(10, '0','B', 11, '0','Y','R',0);
    go(11, '0','B', 11, '0','B','R',0);
    go(11, '1','B', 12, '1','B','R',0);
    go(12, '0','B', 13, '0','X','R',0);
    go(13, '0','B', 13, '0','B','R',0);
    go(13, '1','B', 14, '1','B','R',0);
    go(14, '0','B', 15, '0','X','R',0);
    go(15, '0','B', 15, '0','B','R',0);
    go(15, '1','B', 15, '1','B','R',0);
    go(15, 'B','B', 16, '0','B','L',1);
    go(16, '0','B', 16, '0','B','L',0);
    go(16, '1','B', 16, '1','B','L',0);
    go(16, '0','X', 14, '0','X','R',0);
    go(14, '1','B', 17, '1','B','L',0);
    go(17, '0','X', 17, '0','B','L',0);
    go(17, '1','B', 18, '1','B','L',0);
    go(18, '0','B', 18, '0','B','L',0);
    go(18, '0','X', 12, '0','X','R',0);
    go(12, '1','B', 19, '1','B','R',0);
    go(19, '1','B', 19, '1','B','R',0);
    go(19, '0','B', 19, '0','B','R',0);
    go(19, 'B','B', 20, '1','B','L',1);
    go(20, '0','X', 20, '0','B','L',0);
    go(20, '0','B', 20, '0','B','L',0);
    go(20, '1','B', 20, '1','B','L',0);
    go(20, '0','Y', 21, 'B','B','R',0);
    go(21, '0','B', 21, '0','B','R',0);
    go(21, '1','B', 22, '1','B','R',0);
    go(22, '0','B', 23, '0','X','R',0);
    go(23, '0','B', 23, '0','B','R',0);
    go(23, '1','B', 24, '1','B','R',0);
    go(24, '0','Y', 24, '0','Y','R',0);
    go(24, '0','B', 24, '0','B','R',0);
    go(24, '1','B', 25, '1','B','L',0);
    go(25, '0','Y', 25, '0','Y','L',0);
    go(25, '0','B', 26, '0','Y','L',0);
    go(26, '0','B', 26, '0','B','L',0);
    go(26, '1','B', 26, '1','B','L',0);
    go(26, '0','X', 22, '0','X','R',0);
    go(22, '1','B', 20, '1','B','L',0);
    go(20, 'B','B', 27, 'B','B','R',0);
    go(27, '0','B', 28, '0','Y','R',0);
    go(27, '0','B', 28, '0','Y','R',0);
    go(28, '0','B', 28, '0','B','R',0);
    go(28, '1','B', 29, '1','Z','R',0);
    go(29, '1','B', 29, '1','Z','R',0);
    go(29, '0','B', 29, '0','Z','R',0);
    go(29, '0','Y', 29, '0','Y','L',0);
    go(29, '1','Z', 30, '1','B','L',0);
    go(29, '0','Z', 30, '1','B','L',0);
    go(30, '1','Z', 30, '1','Z','L',0);
    go(30, '0','Z', 30, '0','Z','L',0);
    go(30, '0','B', 30, '0','B','L',0);
    go(30, '0','Y', 31, 'B','B','R',0);
    go(31, '0','Y', 31, '0','Y','R',0);
    go(31, '0','Z', 31, '0','Z','R',0);
    go(31, '1','Z', 31, '1','Z','R',0);
    go(31, '0','B', 31, '0','B','R',0);
    go(31, '1','B', 32, '1','B','L',0);
    go(32, '0','B', 32, '0','B','L',0);
    go(32, '0','Y', 32, '0','Y','L',0);
    go(32, '0','Z', 33, '0','Y','L',0);
    go(32, '1','Z', 33, '0','Y','L',0);
    go(32, 'B','B', 35, 'B','B','R',0);//
    go(33, '0','Z', 33, '0','Z','L',0);
    go(33, '1','Z', 33, '1','Z','L',0);
    go(33, '0','B', 34, '0','Y','L',0);
    go(33, '0','Y', 34, '0','Y','L',0);//
    go(34, '0','B', 34, '0','Y','L',0);
    go(34, '0','Y', 34, '0','Y','L',0);//
    go(34, 'B','B', 30, 'B','B','R',0);
    go(33, 'B','B', 35, 'B','B','R',0);
    go(35, '1','Z', 35, 'B','B','R',0);
    go(35, '0','Y', 35, '0','B','R',0);
    go(35, '0','Z', 35, 'B','B','R',0);
    go(35, '1','B', 36, '1','B','R',0);
    go(36, '0','Y', 36, '0','B','R',0);
    go(36, '1','B', 37, '1','B','R',0);
    go(37, '1','B', 37, '1','B','L',0);
    go(37, '0','B', 37, '0','B','L',0);
    go(37, 'B','B', 10, 'B','B','R',0);
    go(27, '1','B', 38, '1','Y','R',0);
    go(38, '0','B', 38, '0','Y','R',0);
    go(38, '1','B', 39, '1','Y','R',0);
    go(10, '1','B', 39, '1','Y','R',0);
    go(39, '0','Y', 39, '0','Y','R',0);
    go(39, '0','B', 39, '0','Y','R',0);
    go(39, '1','B', 40, '1','Y','R',0);
    go(40, '1','B', 40, '1','Y','R',0);
    go(40, '0','B', 40, '0','B','R',0);
    go(40, 'B','B', 41, 'B','B','L',0);
    go(41, '0','B', 41, '0','B','L',0);
    go(41, '0','Y', 41, 'B', 'B','L',0);
    go(41, '1','Y', 41, 'B', 'B','L',0);
    go(41, 'B','B', 42, 'B','B','R',0);

    if(state==42){
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












