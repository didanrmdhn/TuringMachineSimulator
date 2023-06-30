var nval1 = document.getElementById('val1');
var nval2 = document.getElementById('val2');
var turingVal = [];
var turingVal2 = [];
var turingVal3 = [];
var i;
var j;
var result=0;
var nowState = 0;
var activeState = document.getElementsByClassName('state-active');
var trTape = document.getElementById('turing_tape');
var trTape2 = document.getElementById('turing_tape2');
var trTape3 = document.getElementById('turing_tape3');
var dispState = document.getElementById('show-state-now');
var dispAnswer = document.getElementById('show-answer');
var stepController = document.getElementById('controller_step');
var initController = document.getElementById('init_step');

function init(){
    trDelete();

    //positif x positif
    if(nval1.value > 0 && nval2.value > 0){
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
            
        }
        for(i = 0; i < nval1.value; i++){
                turingVal.push(new createState("1"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
        }
        turingVal.push(new createState("c"));
        turingVal2.push(new createState2("B"));
        turingVal3.push(new createState3("B"));
        for(i = 0; i < nval2.value; i++){
                turingVal.push(new createState("1"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
        }
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
        }
        trTape.childNodes[1].classList.add("state-active");
        trTape2.childNodes[1].classList.add("state-active");
        trTape3.childNodes[1].classList.add("state-active");
    }

        //positif x negatif
        else if(nval1.value > 0 && nval2.value < 0){
            for(i = 0; i < 2; i++){
                turingVal.push(new createState("B"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
                
            }
            for(i = 0; i < nval1.value; i++){
                    turingVal.push(new createState("1"));
                    turingVal2.push(new createState2("B"));
                    turingVal3.push(new createState3("B"));
            }
            turingVal.push(new createState("c"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
            for(i = 0; i > nval2.value; i--){
                    turingVal.push(new createState("0"));
                    turingVal2.push(new createState2("B"));
                    turingVal3.push(new createState3("B"));
            }
            for(i = 0; i < 2; i++){
                turingVal.push(new createState("B"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
            }
            trTape.childNodes[1].classList.add("state-active");
            trTape2.childNodes[1].classList.add("state-active");
            trTape3.childNodes[1].classList.add("state-active");
        }

            //negatif x positif
    else if(nval1.value < 0 && nval2.value > 0){
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
            
        }
        for(i = 0; i > nval1.value; i--){
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
        }
        turingVal.push(new createState("c"));
        turingVal2.push(new createState2("B"));
        turingVal3.push(new createState3("B"));
        for(i = 0; i < nval2.value; i++){
                turingVal.push(new createState("1"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
        }
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
        }
        trTape.childNodes[1].classList.add("state-active");
        trTape2.childNodes[1].classList.add("state-active");
        trTape3.childNodes[1].classList.add("state-active");
    }

        //negatif-negatif
        else if(nval1.value < 0 && nval2.value < 0){
            for(i = 0; i < 2; i++){
                turingVal.push(new createState("B"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
                
            }
            for(i = 0; i > nval1.value; i--){
                    turingVal.push(new createState("0"));
                    turingVal2.push(new createState2("B"));
                    turingVal3.push(new createState3("B"));
            }
            turingVal.push(new createState("c"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
            for(i = 0; i > nval2.value; i--){
                    turingVal.push(new createState("0"));
                    turingVal2.push(new createState2("B"));
                    turingVal3.push(new createState3("B"));
            }
            for(i = 0; i < 2; i++){
                turingVal.push(new createState("B"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
            }
            trTape.childNodes[1].classList.add("state-active");
            trTape2.childNodes[1].classList.add("state-active");
            trTape3.childNodes[1].classList.add("state-active");
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

function createState3(val3){
    this.val = val3;
    var item3 = document.createElement("p");
    var n3 = document.createTextNode(this.val);
    item3.appendChild(n3);
    trTape3.appendChild(item3);
    this.replaceWith = function(newValue){
        this.val=newValue;
    }   
}

function displayAnswer(){
    for(i=0; i<turingVal.length; i++){
        console.log(turingVal.length);
        if(turingVal3[i].val == "1"){
            result++;
        }
        else if(turingVal3[i].val == "0"){
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
    trTape2.innerHTML = "";
    trTape3.innerHTML = "";
    turingVal = [];
    turingVal2 = [];
    turingVal3 = [];
    result = 0;
    stepController.disabled = false;
}

function step(){
    if(turingVal.length){
        for(i=0;i<activeState.length;i++){
            activeState[i].classList.remove("state-active");
            activeState[i].classList.remove("state-active");
            activeState[i].classList.remove("state-active");
        }
    }
    finished = 0;
    //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,direction,addblank

    //positif x positif
    go(0, '1','X','B', 0, '1','X','B','R',0);
    go(0, '1','B','B', 0, '1','B','B','R',0);
    go(0, 'c','B','B', 1, 'c','B','B','R',0);
    go(1, '1','X','B', 1, '1','X','B','R',0);
    go(1, '1','B','B', 2, '1','X','B','L',0);
    go(2, '1','X','B', 2, '1','X','B','L',0);
    go(2, 'c','B','B', 4, 'c','B','B','L',0);
    go(4, '1','B','B', 4, '1','B','B','L',0);
    go(4, 'B','B','B', 7, 'B','B','B','R',0);
    go(7, '1','B','B', 0, '1','X','B','R',0);
    go(4, '1','X','B', 5, '1','X','B','R',0);
    go(5, '1','B','B', 0, '1','X','B','R',0);
    go(4, '1','X','1', 11, '1','X','1','R',0);
    go(11, '1','B','B', 0, '1','X','B','R',0);
    go(4, '1','X','0', 12, '1','X','0','R',0);
    go(12, '1','B','B', 0, '1','X','B','R',0);
    go(1, 'B','B','B', 14, 'B','B','B','L',0);
    go(14, '1','X','B', 15, '1','B','B','L',0);
    go(15, '1','X','B', 15, '1','B','B','L',0);
    go(15, 'c','B','B', 17, 'c','B','B','L',0);
    go(17, '1','B','B', 17, '1','B','B','L',0);
    go(17, '1','X','B', 19, '1','X','B','L',0);
    go(19, '1','X','B', 19, '1','X','B','L',0);
    go(19, '1','X','1', 19, '1','X','1','L',0);
    go(19, 'B','B','B', 23, 'B','B','B','R',0);
    go(23, '1','X','1', 23, '1','X','1','R',0);
    go(23, '1','X','B', 0, '1','X','1','R',0);
    go(5, 'c','B','B', 13, 'c','B','B','L',0);
    go(11, 'c','B','B', 13, 'c','B','B','L',0);
    go(12, 'c','B','B', 13, 'c','B','B','L',0);
    
    //positif x negatif
    go(1, '0','Y','B', 1, '0','Y','B','R',0);
    go(1, '0','B','B', 3, '0','Y','B','L',0);
    go(3, '0','Y','B', 3, '0','Y','B','L',0);
    go(3, 'c','B','B', 4, 'c','B','B','L',0);
    go(14, '0','Y','B', 16, '0','B','B','L',0);
    go(16, '0','Y','B', 16, '0','B','B','L',0);
    go(16, 'c','B','B', 18, 'c','B','B','L',0);
    go(18, '1','B','B', 18, '1','B','B','L',0);
    go(18, '1','X','B', 21, '1','X','B','L',0);
    go(21, '1','X','B', 21, '1','X','B','L',0);
    go(21, '1','X','0', 21, '1','X','0','L',0);
    go(21, 'B','B','B', 25, 'B','B','B','R',0);
    go(25, '1','X','0', 25, '1','X','0','R',0);
    go(25, '1','X','B', 0, '1','X','0','R',0);


    //negatif x positif
    go(0, '0','Y','B', 0, '0','Y','B','R',0);
    go(0, '0','B','B', 0, '0','B','B','R',0);
    go(4, '0','B','B', 4, '0','B','B','L',0);
    go(7, '0','B','B', 8, '0','Y','B','R',0);
    go(8, '0','B','B', 0, '0','B','B','R',0);
    go(4, '0','Y','B', 6, '0','Y','B','R',0);
    go(6, '0','B','B', 0, '0','Y','B','R',0);
    go(4, '0','Y','1', 9, '0','Y','1','R',0);
    go(9, '0','B','B', 0, '0','Y','B','R',0);
    go(4, '0','Y','0', 10, '0','Y','0','R',0);
    go(10, '0','B','B', 0, '0','Y','B','R',0);

    go(17, '0','B','B', 17, '0','B','B','L',0);
    go(17, '0','Y','B', 20, '0','Y','B','L',0);
    go(20, '0','Y','B', 20, '0','Y','B','L',0);
    go(20, '0','Y','0', 20, '0','Y','0','L',0);
    go(20, 'B','B','B', 24, 'B','B','B','R',0);
    go(24, '0','Y','0', 24, '0','Y','0','R',0);
    go(24, '0','Y','B', 0, '0','Y','0','R',0);
    go(6, 'c','B','B', 13, 'c','B','B','L',0);
    go(9, 'c','B','B', 13, 'c','B','B','L',0);
    go(10, 'c','B','B', 13, 'c','B','B','L',0);
    go(8, 'c','B','B', 1, 'c','B','B','R',0);



    //negatif x negatif 
    go(18, '0','B','B', 18, '0','B','B','L',0);
    go(18, '0','Y','B', 22, '0','Y','B','L',0);
    go(22, '0','Y','B', 22, '0','Y','B','L',0);
    go(22, '0','Y','1', 22, '0','Y','1','L',0);
    go(22, 'B','B','B', 26, 'B','B','B','R',0);
    go(26, '0','Y','1', 26, '0','Y','1','R',0);
    go(26, '0','Y','B', 0, '0','Y','1','R',0);




    if(state==13){
        displayState("Selesai");
        displayAnswer();
        stepController.disabled = true;
    }
}

function go(nowState,oldVal,oldVal2,oldVal3,nextState,newVal,newVal2,newVal3,direction,addBlank){
    if(turingVal[j].val == oldVal && turingVal2[j].val == oldVal2 && turingVal3[j].val == oldVal3 && state == nowState && finished == 0){
        turingVal[j].replaceWith(newVal);
        turingVal2[j].replaceWith(newVal2);
        turingVal3[j].replaceWith(newVal3);
        trTape.childNodes[j].textContent = newVal;
        trTape2.childNodes[j].textContent = newVal2;
        trTape3.childNodes[j].textContent = newVal3;
        trTape.childNodes[j].classList.add("state-active");
        trTape2.childNodes[j].classList.add("state-active");
        trTape3.childNodes[j].classList.add("state-active");
        trTape.childNodes[j].scrollIntoView();
        trTape2.childNodes[j].scrollIntoView();
        trTape3.childNodes[j].scrollIntoView();
        state = nextState;
        displayState("(q"+nowState+" | q"+nextState+") | "+oldVal+","+oldVal2+","+oldVal3+"/"+newVal+","+newVal2+","+newVal3+", "+direction);
        if(addBlank){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
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