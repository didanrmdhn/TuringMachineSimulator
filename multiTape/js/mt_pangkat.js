var getDomVal = document.getElementById('val1');
var turingVal = [];
var turingVal2 = [];
var turingVal3 = [];
var turingVal4 = [];
var i;
var j;
var k;
var l;
var m;
var result=0;
var nowState = 0;
var activeState = document.getElementsByClassName('state-active');
var trTape = document.getElementById('turing_tape');
var trTape2 = document.getElementById('turing_tape2');
var trTape3 = document.getElementById('turing_tape3');
var trTape4 = document.getElementById('turing_tape4');
var dispState = document.getElementById('show-state-now');
var dispAnswer = document.getElementById('show-answer');
var stepController = document.getElementById('controller_step');
var initController = document.getElementById('init_step');
var skipController = document.getElementById('controller_skip');
var acceptingState = 16;

function init(){
    trDelete();

    var nval = getDomVal.value;
    var nvalArr = nval.split("^");
    var nval1 = parseInt(nvalArr[0]);
    var nval2 = parseInt(nvalArr[1]);
    console.log(nvalArr);
    if(nval1 > 0 && nval2 > 0){
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
            turingVal4.push(new createState4("B"));
        }
        turingVal.push(new createState("X"));
        turingVal2.push(new createState2("B"));
        turingVal3.push(new createState3("B"));
        turingVal4.push(new createState4("B"));
        for(i = 0; i < nval1; i++){
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
                turingVal4.push(new createState4("B"));
        }
        turingVal.push(new createState("1"));
        turingVal2.push(new createState2("B"));
        turingVal3.push(new createState3("B"));
        turingVal4.push(new createState4("B"));
        turingVal.push(new createState("X"));
        turingVal2.push(new createState2("B"));
        turingVal3.push(new createState3("B"));
        turingVal4.push(new createState4("B"));
        for(i = 0; i < nval2; i++){
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
                turingVal4.push(new createState4("B"));
        }
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
            turingVal4.push(new createState4("B"));
        }
        trTape.childNodes[1].classList.add("state-active");
        trTape2.childNodes[1].classList.add("state-active");
        trTape3.childNodes[1].classList.add("state-active");
        trTape4.childNodes[1].classList.add("state-active");
    }else{
        alert('Nilai belum dimasukan/negatif');
    }
    j=2;
    k=2;
    l=2;
    m=2;
    state=0;

    document.getElementById('controller_skip').addEventListener('click', skipController);
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
function createState4(val4){
    this.val = val4;
    var item4 = document.createElement("p");
    var n4 = document.createTextNode(this.val);
    item4.appendChild(n4);
    trTape4.appendChild(item4);
    this.replaceWith = function(newValue){
        this.val=newValue;
    }
    
}

function displayAnswer(){
    for(i=0; i<turingVal4.length; i++){
        console.log(turingVal4.length);
        if(turingVal4[i].val == "0"){
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
    trTape3.innerHTML = "";
    trTape4.innerHTML = "";
    turingVal = [];
    turingVal2 = [];
    turingVal3 = [];
    turingVal4 = [];
    result = 0;
    stepController.disabled = false;
}

function step(){
    if(turingVal.length){
        for(i=0;i<activeState.length;i++){
            activeState[i].classList.remove("state-active");
            activeState[i].classList.remove("state-active");
            activeState[i].classList.remove("state-active");
            activeState[i].classList.remove("state-active");
        }
    }

    finished = 0;

    //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,dir1,dir2,dir3,addblank
    go(0, 'X', 'B', 'B', 'B', 1, 'B', 'B', 'B', 'B', 'R', 'S', 'S', 'S', 0);
    go(0, '1', 'B', 'B', 'B', 15, 'B', 'B', 'B', 'X', 'S', 'S', 'S', 'R', 0);
    go(1, '0', 'B', 'B', 'B', 1, 'B', '0', '0', '0', 'R', 'R', 'R', 'R', 1);
    go(1, '1', 'B', 'B', 'B', 2, 'B', 'B', 'B', 'B', 'R', 'S', 'S', 'S',0);
    go(2, 'X', 'B', 'B', 'B', 3, 'B', 'B', 'B', 'B', 'R', 'S', 'L', 'S',0);
    go(3, '0', '0', '0', 'B', 3, '0', '0', '0', '0', 'S', 'S', 'L', 'R',1);
    go(3, '0', '0', 'B', 'B', 4, '0', '0', 'B', 'B', 'S', 'R', 'R', 'S',0);
    go(3, '0', 'B', '0', 'B', 5, 'B', 'B', '0', 'B', 'R', 'S', 'S', 'S',0);
    go(4, '0', '0', '0', 'B', 4, '0', '0', '0', 'B', 'S', 'S', 'R', 'R',1);
    go(4, '0', '0', 'B', 'B', 3, '0', '0', 'B', 'B', 'S', 'R', 'L', 'S',0);
    go(4, '0', 'B', '0', 'B', 6, 'B', 'B', '0', 'B', 'R', 'S', 'S', 'S',0);
    go(5, '0', 'B', '0', 'B', 5, '0', 'B', 'B', 'B', 'S', 'S', 'L', 'S',1);
    go(5, 'B', 'B', '0', 'B', 16, 'B', 'B', '0', 'B', 'S', 'S', 'S', 'S',0);
    go(5, '0', 'B', 'B', 'B', 7, '0', 'B', 'B', 'B', 'S', 'S', 'S', 'L',0);
    go(6, '0', 'B', '0', 'B', 6, '0', 'B', 'B', 'B', 'S', 'S', 'R', 'S',1);
    go(6, 'B', 'B', '0', 'B', 16, 'B', 'B', '0', 'B', 'S', 'S', 'S', 'S',0);
    go(6, '0', 'B', 'B', 'B', 8, '0', 'B', 'B', 'B', 'S', 'S', 'S', 'L',0);
    go(7, '0', 'B', 'B', '0', 7, '0', 'B', '0', 'B', 'S', 'S', 'R', 'L',1);
    go(7, '0', 'B', 'B', 'B', 9, '0', 'B', 'B', 'B', 'S', 'L', 'L', 'S',0);
    go(8, '0', 'B', 'B', '0', 8, '0', 'B', '0', 'B', 'S', 'S', 'L', 'L',0);
    go(8, '0', 'B', 'B', 'B', 10, '0', 'B', 'B', 'B', 'S', 'L', 'R', 'S',0);
    go(9, '0', '0', '0', 'B', 9, '0', '0', '0', '0', 'S', 'S', 'L', 'R', 1);
    go(9, '0', 'B', '0', 'B', 11, 'B', 'B', '0', 'B', 'R', 'S', 'S', 'S',0);
    go(9, '0', '0', 'B', 'B', 10, '0', '0', 'B', 'B', 'S', 'L', 'R', 'S',0);
    go(10, '0', '0', '0', 'B', 10, '0', '0', '0', '0', 'S', 'S', 'R', 'R',1);
    go(10, '0', 'B', '0', 'B', 12, 'B', 'B', '0', 'B', 'R', 'S', 'S', 'S',0);
    go(10, '0', '0', 'B', 'B', 9, '0', '0', 'B', 'B', 'S', 'L', 'L', 'S',0);
    go(11, '0', 'B', '0', 'B', 11, '0', 'B', 'B', 'B', 'S', 'S', 'L', 'S',1);
    go(11, '0', 'B', 'B', 'B', 13, '0', 'B', 'B', 'B', 'S', 'S', 'S', 'L',0);
    go(11, 'B', 'B', '0', 'B', 16, 'B', 'B', '0', 'B', 'S', 'S', 'S', 'S',0);
    go(12, '0', 'B', '0', 'B', 12, '0', 'B', 'B', 'B', 'S', 'S', 'R', 'S',1);
    go(12, '0', 'B', 'B', 'B', 14, '0', 'B', 'B', 'B', 'S', 'S', 'S', 'L',0);
    go(12, 'B', 'B', '0', 'B', 16, 'B', 'B', '0', 'B', 'S', 'S', 'S', 'S',0);
    go(13, 'B', 'B', 'B', '0', 13, '0', 'B', '0', 'B', 'S', 'S', 'R', 'L',1);
    go(13, '0', 'B', 'B', 'B', 3, '0', 'B', 'B', 'B', 'S', 'R', 'L', 'S',0);
    go(14, '0', 'B', 'B', '0', 14, '0', 'B', '0', 'B', 'S', 'S', 'L', 'L',1);
    go(14, '0', 'B', 'B', 'B', 4, '0', 'B', 'B', 'B', 'S', 'R', 'R', 'S',0);
    go(15, 'B', 'B', 'B', 'B', 16, 'B', 'B', 'B', 'B', 'S', 'S', 'S', 'S',0);


    if(state==acceptingState){
        displayState("Selesai");
        displayAnswer();
        stepController.disabled = true;
        skipController.disabled = true;

    }

}

function skipState() {
    while (state != acceptingState) {
      step();
    }
  }



function go(nowState,oldVal,oldVal2,oldVal3,oldVal4,nextState,newVal,newVal2,newVal3,newVal4,directiont1,directiont2,directiont3,directiont4,addBlank){
    if(turingVal[j].val == oldVal && turingVal2[k].val == oldVal2 && turingVal3[l].val == oldVal3 && turingVal4[m].val == oldVal4 && state == nowState && finished == 0){
        turingVal[j].replaceWith(newVal);
        turingVal2[k].replaceWith(newVal2);
        turingVal3[l].replaceWith(newVal3);
        turingVal4[m].replaceWith(newVal4);
        trTape.childNodes[j].textContent = newVal;
        trTape2.childNodes[k].textContent = newVal2;
        trTape3.childNodes[l].textContent = newVal3;
        trTape4.childNodes[m].textContent = newVal4;
        trTape.childNodes[j].classList.add("state-active");
        trTape2.childNodes[k].classList.add("state-active");
        trTape3.childNodes[l].classList.add("state-active");
        trTape4.childNodes[m].classList.add("state-active");
        trTape.childNodes[j].scrollIntoView();
        trTape2.childNodes[k].scrollIntoView();
        trTape3.childNodes[l].scrollIntoView();
        trTape4.childNodes[m].scrollIntoView();
        state = nextState;
        displayState("(q"+nowState+" | q"+nextState+") | "+oldVal+","+oldVal2+","+oldVal3+","+oldVal4+"/"+newVal+","+newVal2+","+newVal3+", "+newVal4+", "+directiont1+","+directiont2+","+directiont3+","+directiont4);
        if(addBlank){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
            turingVal4.push(new createState4("B"));
        }
        if(j == 0 || k == 0 || l == 0 || m == 0){
            turingVal.unshift(new createState("B"));
            turingVal2.unshift(new createState2("B"));
            turingVal3.unshift(new createState3("B"));
            turingVal4.unshift(new createState4("B"));
            j++;
            k++;
            l++;
            m++;
        }
        decide(directiont1,directiont2,directiont3,directiont4);
        finished = 1;
    }
}
function decide(dt1,dt2,dt3,dt4){
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
    if(dt4 =='R'){
        m++;
    }else if(dt4 == 'L'){
        m--;
    }else{
        m;
    }
}












