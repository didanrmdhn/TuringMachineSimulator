var getDomVal = document.getElementById('val1');
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

    var nval = getDomVal.value;
    var nvalArr = nval.split("^");
    var nval1 = parseInt(nvalArr[0]);
    var nval2 = parseInt(nvalArr[1]);
    // console.log(nvalArr);
    if(nval1 > 0 && nval2 > 0){
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
        }
        for(i = 0; i < nval1; i++){
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
        }
        turingVal.push(new createState("1"));
        turingVal2.push(new createState2("B"));
        turingVal3.push(new createState3("B"));
        for(i = 0; i < nval2; i++){
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
    }else{
        alert('Nilai belum dimasukan/negatif');
    }
    j=2;
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
        if(turingVal3[i].val == "0"){
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
    go(0, '0', 'B', 'B', 0, '0', 'B', 'B', 'R', 'S', 'S', 0);
    go(0, '1', 'B', 'B', 1, '1', 'B', 'B', 'R', 'R', 'R', 0);
    go(1, '0', 'B', 'B', 1, '0', 'B', 'B', 'R', 'S', 'S', 0);
    go(1, 'B', 'B', 'B', 2, 'B', 'B', 'B', 'L', 'S', 'S', 0);
    go(2, '0', 'B', 'B', 3, 'X', 'B', 'B', 'L', 'S', 'S', 0);
    go(3, '1', 'B', 'B', 3, '1', 'B', 'B', 'L', 'S', 'S', 0);
    go(3, '0', 'B', 'B', 3, '0', 'B', 'B', 'L', 'S', 'S', 0);
    go(3, 'B', 'B', 'B', 4, 'B', 'B', 'B', 'R', 'S', 'S', 0);
    go(4, '0', 'B', 'B', 5, '0', '0', 'B', 'R', 'R', 'S', 0);
    go(5, '0', 'B', 'B', 5, '0', '0', 'B', 'R', 'R', 'S', 0);
    go(5, '1', 'B', 'B', 6, '1', 'B', 'B', 'R', 'S', 'S', 0);
    go(6, '0', 'B', 'B', 6, '0', 'B', 'B', 'R', 'S', 'S', 0);
    go(6, 'X', 'B', 'B', 7, 'B', 'B', 'B', 'L', 'S', 'S', 0);
    go(7, '0', 'B', 'B', 8, 'X', 'B', 'B', 'L', 'S', 'S', 0);
    go(8, '0', 'B', 'B', 8, '0', 'B', 'B', 'L', 'S', 'S', 0);
    go(8, '1', 'B', 'B', 9, '1', 'B', 'B', 'L', 'L', 'S', 0);
    go(9, '0', '0', 'B', 9, '0', '0', 'B', 'L', 'L', 'S', 0);
    go(9, 'B', 'B', 'B', 10, 'B', 'B', 'B', 'R', 'R', 'S', 0);
    go(10, '0', '0', 'B', 11, 'X', 'X', '0', 'S', 'R', 'R', 1);
    go(11, 'X', '0', 'B', 11, 'X', 'X', '0', 'S', 'R', 'R', 1);
    go(11, 'X', 'B', 'B', 12, 'X', 'B', 'B', 'R', 'L', 'S', 0);
    go(12, '0', 'X', 'B', 12, '0', '0', 'B', 'S', 'L', 'S', 0);
    go(12, '0', 'B', 'B', 10, '0', 'B', 'B', 'S', 'R', 'S', 0);
    go(12, '1', 'X', 'B', 13, '1', 'B', 'B', 'R', 'L', 'S', 0);
    go(13, '0', 'X', 'B', 13, '0', 'B', 'B', 'S', 'L', 'S', 0);
    go(13, '0', 'B', 'B', 14, '0', 'B', 'B', 'R', 'S', 'S', 0);
    go(14, '0', 'B', 'B', 14, '0', 'B', 'B', 'R', 'S', 'S', 0);
    go(14, 'X', 'B', 'B', 15, 'B', 'B', 'B', 'L', 'S', 'L', 0);
    go(15, '0', 'B', '0', 15, '0', 'B', '0', 'S', 'S', 'L', 0);
    go(15, '0', 'B', 'B', 16, '0', 'B', 'B', 'S', 'R', 'R', 0);
    go(16, '0', 'B', '0', 16, '0', '0', 'B', 'S', 'R', 'R', 0);
    go(16, '0', 'B', 'B', 17, 'X', 'B', 'B', 'S', 'L', 'L', 0);
    go(17, 'X', '0', 'B', 17, 'X', '0', 'B', 'S', 'L', 'L', 1);
    go(17, 'X', 'B', 'B', 18, 'X', 'B', 'B', 'L', 'S', 'S', 0);
    go(18, '0', 'B', 'B', 19, '0', 'B', 'B', 'L', 'S', 'S', 0);
    go(18, '1', 'B', 'B', 19, '1', 'B', 'B', 'L', 'S', 'S', 0);
    go(19, '1', 'B', 'B', 19, '1', 'B', 'B', 'L', 'S', 'S', 0);
    go(19, '0', 'B', 'B', 19, '0', 'B', 'B', 'L', 'S', 'S', 0);
    go(19, 'X', 'B', 'B', 19, '0', 'B', 'B', 'L', 'S', 'S', 0);
    go(19, 'B', 'B', 'B', 10, 'B', 'B', 'B', 'R', 'R', 'R', 0);
    go(18, '1', 'B', 'B', 20, '1', 'B', 'B', 'S', 'R', 'R', 0);
    go(20, '1', '0', 'B', 20, '1', '0', '0', 'S', 'R', 'R', 1);
    go(20, '1', 'B', 'B', 22, '1', 'B', 'B', 'S', 'S', 'S', 0);
    go(7, '1', 'B', 'B', 21, 'B', 'B', 'B', 'L', 'L', 'L', 0);
    go(13, 'X', 'X', 'B', 22, 'B', 'B', 'B', 'S', 'S', 'S', 0);
    go(21, '0', '0', 'B', 22, 'B', 'B', '0', 'S', 'S', 'S', 0);



    if(state==22){
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












