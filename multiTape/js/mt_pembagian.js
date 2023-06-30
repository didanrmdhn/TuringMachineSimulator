var nval1 = document.getElementById('val1');
var nval2 = document.getElementById('val2');
var turingVal = [];
var turingVal2 = [];
var turingVal3 = [];
var i;
var j;
var k;
var l;
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
    k=2;
    l=1;
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
    for(i=0; i<turingVal3.length; i++){
        console.log(turingVal3.length);
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
    //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,dir1,dir2,dir3,addblank

    //positif x positif
    go(0, '1', 'B', 'B', 0, '1', '1', 'B', 'R', 'R', 'S', 0);
    go(0, 'c', 'B', 'B', 1, 'c', 'B', 'B', 'S', 'L', 'S', 0);
    go(1, 'c', '1', 'B', 1, 'c', '1', 'B', 'S', 'L', 'S', 0);
    go(1, 'c', 'B', 'B', 2, 'c', 'B', 'B', 'R', 'R', 'S', 0);
    go(2, '1', '1', 'B', 2, '1', '1', 'B', 'R', 'R', 'S', 0);
    go(2, 'B', '1', 'B', 4, 'B', '1', 'B', 'L', 'S', 'S', 0);
    go(4, '1', '1', 'B', 5, '1', '1', '1', 'L', 'S', 'R', 0);
    go(5, '1', '1', 'B', 5, '1', '1', 'B', 'L', 'S', 'S', 0);
    go(5, 'c', '1', 'B', 2, 'c', '1', 'B', 'R', 'S', 'S', 0);
    go(2, 'B', 'B', 'B', 9, 'B', 'B', 'B', 'L', 'L', 'S', 0);
    go(9, '1', '1', 'B', 10, '1', '1', '1', 'R', 'R', 'R', 0);
    go(10, 'B', 'B', 'B', 14, 'B', 'B', 'B', 'S', 'S', 'S', 0);
    

    //positif x negatif
    go(2, '0', '1', 'B', 2, '0', '1', 'B', 'R', 'R', 'S', 0);
    go(4, '0', '1', 'B', 3, '0', '1', '0', 'L', 'S', 'R', 0);
    go(3, '0', '1', 'B', 3, '0', '1', 'B', 'L', 'S', 'S', 0);
    go(3, 'c', '1', 'B', 2, 'c', '1', 'B', 'R', 'S', 'S', 0);
    go(9, '0', '1', 'B', 11, '0', '1', '0', 'R', 'R', 'R', 0);
    go(11, 'B', 'B', 'B', 14, 'B', 'B', 'B', 'S', 'S', 'S', 0);
    


    //negatif x positif
    go(0, '0', 'B', 'B', 0, '0', '0', 'B', 'R', 'R', 'S', 0);
    go(1, 'c', '0', 'B', 1, 'c', '0', 'B', 'S', 'L', 'S', 0);
    go(2, '1', '0', 'B', 2, '1', '0', 'B', 'R', 'R', 'S', 0);
    go(2, 'B', '0', 'B', 7, 'B', '0', 'B', 'L', 'S', 'S', 0);
    go(7, '1', '0', 'B', 6, '1', '0', '0', 'L', 'S', 'R', 0);
    go(6, '1', '0', 'B', 6, '1', '0', 'B', 'L', 'S', 'S', 0);
    go(6, 'c', '0', 'B', 2, 'c', '0', 'B', 'R', 'S', 'S', 0);
    go(9, '1', '0', 'B', 12, '1', '0', '0', 'R', 'R', 'R', 0);
    go(12, 'B', 'B', 'B', 14, 'B', 'B', 'B', 'S', 'S', 'S', 0);
    
   
    //negatif x negatif
    go(2, '0', '0', 'B', 2, '0', '0', 'B', 'R', 'R', 'S', 0);
    go(7, '0', '0', 'B', 8, '0', '0', '1', 'L', 'S', 'R', 0);
    go(8, '0', '0', 'B', 8, '0', '0', 'B', 'L', 'S', 'S', 0);
    go(8, 'c', '0', 'B', 2, 'c', '0', 'B', 'R', 'S', 'S', 0);
    go(9, '0', '0', 'B', 13, '0', '0', '1', 'R', 'R', 'R', 0);
    go(13, 'B', 'B', 'B', 14, 'B', 'B', 'B', 'S', 'S', 'S', 0);


    if(state==14){
        displayState("Selesai");
        displayAnswer();
        stepController.disabled = true;
    }
}

function go(nowState,oldVal,oldVal2,oldVal3,nextState,newVal,newVal2,newVal3,directiont1,directiont2,directiont3,addBlank){
    if(turingVal[j].val == oldVal && turingVal2[k].val == oldVal2 && turingVal3[l].val == oldVal3 && state == nowState && finished == 0){
        turingVal[j].replaceWith(newVal);
        turingVal2[k].replaceWith(newVal2);
        turingVal3[l].replaceWith(newVal3);
        trTape.childNodes[j].textContent = newVal;
        trTape2.childNodes[k].textContent = newVal2;
        trTape3.childNodes[l].textContent = newVal3;
        trTape.childNodes[j].classList.add("state-active");
        trTape2.childNodes[k].classList.add("state-active");
        trTape3.childNodes[l].classList.add("state-active");
        trTape.childNodes[j].scrollIntoView();
        trTape2.childNodes[k].scrollIntoView();
        trTape3.childNodes[l].scrollIntoView();
        state = nextState;
        displayState("(q"+nowState+" | q"+nextState+") | "+oldVal+","+oldVal2+","+oldVal3+"/"+newVal+","+newVal2+","+newVal3+", "+directiont1+","+directiont2+","+directiont3);
        if(addBlank){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
        }
        decide(directiont1,directiont2,directiont3);
        finished = 1;
    }
}
function decide(dt1,dt2,dt3){
    //mungkin ganti switch case
    if(dt1 =='R'){
        j++;
    }else if(dt1 == 'L'){
        j--;
    }else{
        j;
    }
    if(dt2 =='R'){
        k++;
    }else if(dt2 == 'L'){
        k--;
    }else{
        k;
    }
    if(dt3 =='R'){
        l++;
    }else if(dt3 == 'L'){
        l--;
    }else{
        l;
    }
}