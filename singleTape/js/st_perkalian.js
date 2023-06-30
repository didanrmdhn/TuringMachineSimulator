var nval1 = document.getElementById('val1');
var nval2 = document.getElementById('val2');
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

function init(){
    trDelete();

    //positif x positif
    if(nval1.value > 0 && nval2.value > 0){
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        for(i = 0; i < nval1.value; i++){
            turingVal.push(new createState("1"));
        }
        turingVal.push(new createState("c"));
        for(i = 0; i < nval2.value; i++){
            turingVal.push(new createState("1"));
        }
        turingVal.push(new createState("c"));
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        trTape.childNodes[1].classList.add("state-active");
    }
    //positif x negatif
    else if(nval1.value > 0 && nval2.value < 0){
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        for(i = 0; i < nval1.value; i++){
            turingVal.push(new createState("1"));
        }
        turingVal.push(new createState("c"));
        for(i = 0; i > nval2.value; i--){
            turingVal.push(new createState("0"));
        }
        turingVal.push(new createState("c"));
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        trTape.childNodes[1].classList.add("state-active");
    }
    //negatif x positif
    else if(nval1.value < 0 && nval2.value > 0){
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        for(i = 0; i > nval1.value; i--){
            turingVal.push(new createState("0"));
        }
        turingVal.push(new createState("c"));
        for(i = 0; i < nval2.value; i++){
            turingVal.push(new createState("1"));
        }
        turingVal.push(new createState("c"));
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        trTape.childNodes[1].classList.add("state-active");
    }
    //negatif x negatif
    else if(nval1.value < 0 && nval2.value < 0){
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        for(i = 0; i > nval1.value; i--){
            turingVal.push(new createState("0"));
        }
        turingVal.push(new createState("c"));
        for(i = 0; i > nval2.value; i--){
            turingVal.push(new createState("0"));
        }
        turingVal.push(new createState("c"));
        turingVal.push(new createState("B"));
        turingVal.push(new createState("B"));
        trTape.childNodes[1].classList.add("state-active");
    }else{
        alert('Nilai tidak valid');
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
        if(turingVal[i].val == "1"  ){
            result++;
        }
        else if (turingVal[i].val == "0"){
            result--;
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
    //positif x positif
    go(0, '1', 1, 'B','R',0);
    go(1, '1', 1, '1','R',0);
    go(1, 'c', 3, 'c','R',0);
    go(3, '1', 5, 'X','R',0);   
    go(5, '1', 5, '1','R',0);
    go(5, 'c', 6, 'c','R',0);
    go(6, '1', 6, '1','R',0);
    go(6, 'B', 7, '1','L',1);
    go(7, '1', 7, '1','L',0);
    go(7, 'c', 8, 'c','L',0);
    go(8, '1', 8, '1','L',0);
    go(8, 'X', 3, 'X','R',0);
    go(3, 'c', 4, 'c','L',0);
    go(4, 'X', 4, '1','L',0);
    go(4, 'c', 2, 'c','L',0);
    go(2, '1', 2, '1','L',0);
    go(2, 'B', 0, 'B','R',0);
    go(0, 'c', 25, 'B','R',0);
    go(25, '1', 25, 'B','R',0);
    go(25, 'c', 26, 'B','R',0);

    //positif x negatif 
    go(3, '0', 9, 'Y','R',0);
    go(9, '0', 9, '0','R',0);
    go(9, 'c', 10, 'c','R',0);
    go(10, '0', 10, '0','R',0);
    go(10, 'B', 11, '0','L',1);
    go(11, '0', 11, '0','L',0);
    go(11, 'c', 12, 'c','L',0);
    go(12, '0', 12, '0','L',0);
    go(12, 'Y', 3, 'Y','R',0);
    go(4, 'Y', 4, '0','L',0);
    go(25, '0', 25, 'B','R',0);

    //negatif x positif
    go(0, '0', 13, 'B','R',0);
    go(13, '0', 13, '0','R',0);
    go(13, 'c', 14, 'c','R',0);
    go(14, '1', 17, 'X','R',0);   
    go(17, '1', 17, '1','R',0);
    go(17, 'c', 18, 'c','R',0);
    go(18, '0', 18, '0','R',0);
    go(18, 'B', 19, '0','L',1);
    go(19, '0', 19, '0','L',0);
    go(19, 'c', 20, 'c','L',0);
    go(20, '1', 20, '1','L',0);
    go(20, 'X', 14, 'X','R',0);
    go(14, 'c', 16, 'c','L',0);
    go(16, 'X', 16, '1','L',0);
    go(16, 'c', 15, 'c','L',0);
    go(15, '0', 15, '0','L',0);
    go(15, 'B', 0, 'B','R',0);

    //negatif x negatif
    go(14, '0', 21, 'Y','R',0);
    go(21, '0', 21, '0','R',0);
    go(21, 'c', 22, 'c','R',0);
    go(22, '1', 22, '1','R',0);
    go(22, 'B', 23, '1','L',1);
    go(23, '1', 23, '1','L',0);
    go(23, 'c', 24, 'c','L',0);
    go(24, '0', 24, '0','L',0);
    go(24, 'Y', 14, 'Y','R',0);
    go(16, 'Y', 16, '0','L',0);
    

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