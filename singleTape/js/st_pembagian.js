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
    go(0, '1', 0, '1','R',0);
    go(0, 'c', 1, 'c','R',0);
    go(1, 'X', 1, 'X','R',0);
    go(1, '1', 2, 'X','L',0);   
    go(2, 'X', 2, 'X','L',0);
    go(2, 'c', 4, 'c','L',0);
    go(4, '1', 4, '1','L',0);
    go(4, 'B', 7, 'B','R',0);
    go(7, '1', 0, 'X','R',0);
    go(4, 'X', 5, 'X','R',0);
    go(5, '1', 0, 'X','R',0);
    go(1, 'c', 13, 'c','L',0);
    go(13, 'X', 13, 'X','L',0);
    go(13, 'c', 14, 'c','L',0);
    go(14, '1', 14, '1','L',0);
    go(14, 'X', 15, 'X','R',0);
    go(15, '1', 15, '1','R',0);
    go(15, 'c', 17, 'c','R',0);
    go(17, 'X', 19, 'X','R',0);
    go(19, 'X', 19, 'X','R',0);
    go(19, 'c', 19, 'c','R',0);
    go(19, '1', 19, '1','R',0);
    go(19, 'B', 23, '1','L',1);
    go(23, '1', 23, '1','L',0);
    go(23, 'c', 25, 'c','L',0);
    go(25, 'X', 25, '1','L',0);
    go(25, 'c', 26, 'c','L',0);
    go(26, '1', 26, '1','L',0);
    go(26, 'X', 0, 'X','R',0);
    go(5, 'c', 9, 'c','L',0);
    go(9, 'X', 9, 'X','L',0);
    go(9, 'B', 10, 'B','R',0);
    go(10, 'X', 10, 'B','R',0);
    go(10, 'c', 11, 'B','R',0);
    go(11, 'X', 11, 'B','R',0);
    go(11, '1', 11, 'B','R',0);
    go(11, 'c', 12, 'B','R',0);

    //positif x negatif 
    go(1, 'Y', 1, 'Y','R',0);
    go(1, '0', 3, 'Y','L',0);   
    go(3, 'Y', 3, 'Y','L',0);
    go(3, 'c', 4, 'c','L',0);
    go(13, 'Y', 13, 'Y','L',0);
    go(17, 'Y', 20, 'Y','R',0);
    go(20, 'Y', 20, 'Y','R',0);
    go(20, 'c', 20, 'c','R',0);
    go(20, '0', 20, '0','R',0);
    go(20, 'B', 23, '0','L',1);
    go(23, '0', 23, '0','L',0);
    go(25, 'Y', 25, '0','L',0);
    go(11, 'Y', 11, 'B','R',0);
    go(11, '0', 11, 'B','R',0);
   

    //negatif x positif
    go(0, '0', 0, '0','R',0);
    go(4, '0', 4, '0','L',0);
    go(7, '0', 8, 'Y','R',0);
    go(8, '0', 0, '0','R',0);
    go(4, 'Y', 6, 'Y','R',0);
    go(6, '0', 0, 'Y','R',0);
    go(14, '0', 14, '0','L',0);
    go(14, 'Y', 16, 'Y','R',0);
    go(16, '0', 16, '0','R',0);
    go(16, 'c', 18, 'c','R',0);
    go(18, 'X', 21, 'X','R',0);
    go(21, 'X', 21, 'X','R',0);
    go(21, 'c', 21, 'c','R',0);
    go(21, '0', 21, '0','R',0);
    go(21, 'B', 24, '0','L',1);
    go(24, '0', 24, '0','L',0);
    go(24, 'c', 27, 'c','L',0);
    go(27, 'X', 27, '1','L',0);
    go(27, 'c', 28, 'c','L',0);
    go(28, '0', 28, '0','L',0);
    go(28, 'Y', 0, 'Y','R',0);
    go(6, 'c', 9, 'c','L',0);
    go(9, 'Y', 9, 'Y','L',0);
    go(10, 'Y', 10, 'B','R',0);



    //negatif x negatif
    go(18, 'Y', 22, 'Y','R',0);
    go(22, 'Y', 22, 'Y','R',0);
    go(22, 'c', 22, 'c','R',0);
    go(22, '1', 22, '1','R',0);
    go(22, 'B', 24, '1','L',1);
    go(24, '1', 24, '1','L',0);
    go(27, 'Y', 27, '0','L',0);
    go(8, 'c', 1, 'c','R',0);
    


    if(state==12){
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