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
    var nvalArr = nval.split("C");
    var nval1 = parseInt(nvalArr[0]);
    var nval2 = parseInt(nvalArr[1]);
    // console.log(nvalArr);
    if(nval1 != undefined && nval2 != undefined){
        if (nval1 < 0){
            newNval1 = nval1 * -1;
        }
        if (nval2 < 0){
            newNval2 = nval2 * -1;
        }
        if (nval1 >= 0){
            newNval1 = nval1;
        }
        if (nval2 >= 0){
            newNval2 = nval2;
        }
        for(i = 0; i < 2; i++){
            turingVal.push(new createState("B"));
            turingVal2.push(new createState2("B"));
            turingVal3.push(new createState3("B"));
        }
        for(i = 0; i < newNval1; i++){
            if (nval1 < 0) {
                turingVal.push(new createState("1"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));         
            }else{
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
            }
        }
        turingVal.push(new createState("C"));
        turingVal2.push(new createState2("B"));
        turingVal3.push(new createState3("B"));
        for(i = 0; i < newNval2; i++){
            if (nval2 < 0) {
                turingVal.push(new createState("1"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));         
            }else{
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
                turingVal3.push(new createState3("B"));
            }
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
    //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,dir1,dir2,dir3,addblank,
    go(0, '0','B','B', 0, '0','B','B','R','R','S',0);
    go(0, '1','B','B', 0, '1','B','B','R','R','S',0);
    go(0, 'C','B','B', 1, 'C','B','B','R','R','S',0);

   //NEG X NEG
    go(1, '1','B','B', 2, '1','B','B','L','L','S',0);
    go(2, 'C','B','B', 2, 'C','B','B','L','L','S',0);
    go(2, '1','B','B', 7, '1','B','B','L','L','S',0);
    go(7, '1','B','B', 7, '1','B','B','L','L','S',0);
    go(7, 'B','B','B', 11, 'B','B','B','R','R','S',0);
    go(11, '1','B','B', 11, '0','B','B','R','R','S',0);
    go(11, 'C','B','B', 750, 'C','B','B','R','R','S',0);
        //ONTHEGO NODE CODE = 75X
        go(750, '1','B','B', 750, '0','B','B','R','R','S',0);
        go(750, 'B','B','B', 880, 'B','B','B','L','L','S',0);
        //ONTHEGO NODE CODE = 88X -> back to front
        go(880, 'C','B','B', 880, 'C','B','B','L','L','S',0);
        go(880, '0','B','B', 880, '0','B','B','L','L','S',0);
        go(880, 'B','B','B', 881, 'B','B','B','R','R','S',0);
    go(881, '0','B','B', 15, 'B','X','B','R','R','S',0);
    go(15, '0','B','B', 15, '0','B','B','R','R','S',0);
    go(15, 'C','B','B', 20, 'C','B','B','R','R','S',0);
    go(20, '0','B','B', 20, '0','B','B','R','R','S',0);
    go(20, 'B','B','B', 110, '0','B','B','L','L','S',1);//
            //FIX NODE CODE = 11X
            go(110, '0','B', 111, 'B','B','L',0);
            go(111, '0','B', 111, '0','B','L',0);
            // go(110, 'C','B', 112, 'C','B','R',0);
    go(111, 'C','B','B', 26, 'C','B','B','L','L','S',0);
    go(26, '0','B','B', 26, '0','B','B','L','L','S',0);
    go(26, 'B','X','B', 881, 'B','X','B','R','R','S',0);
    go(881, 'C','B','B', 882, 'B','B','B','R','R','S',0);
    go(882, '0','B','B', 882, '1','B','B','R','R','S',0);
    go(882, 'B','B','B', 420, 'B','B','B','S','S','S',0);

    //POS X POS
    go(1, '0','B','B', 4, '0','B','B','L','L','S',0);
    go(4, 'C','B','B', 4, 'C','B','B','L','L','S',0);
    go(4, '0','B','B', 8, '0','B','B','L','L','S',0);
    go(8, '0','B','B', 8, '0','B','B','L','L','S',0);
    go(8, 'B','B','B', 55881, 'B','B','B','R','R','S',0);
        //COPY NODE CODE = 55X
        go(55881, '0','B','B', 5515, 'B','X','B','R','R','S',0);
        go(5515, '0','B','B', 5515, '0','B','B','R','R','S',0);
        go(5515, 'C','B','B', 5520, 'C','B','B','R','R','S',0);
        go(5520, '0','B','B', 5520, '0','B','B','R','R','S',0);
        go(5520, 'B','B','B', 55110, '0','B','B','L','L','S',1);//
                //FIX NODE CODE = 11X
                go(55110, '0','B', 55111, 'B','B','L',0);
                go(55111, '0','B', 55111, '0','B','L',0);
                // go(110, 'C','B', 112, 'C','B','R',0);
        go(55111, 'C','B','B', 5526, 'C','B','B','L','L','S',0);
        go(5526, '0','B','B', 5526, '0','B','B','L','L','S',0);
        go(5526, 'B','X','B', 55881, 'B','X','B','R','R','S',0);
        go(55881, 'C','B','B', 55882, 'B','B','B','R','R','S',0);
        go(55882, '0','B','B', 55882, '1','B','B','R','R','S',0);
        go(55882, 'B','B','B', 420, 'B','B','B','S','S','S',0);
    
    //NEG X POS
    go(1, '0','B','B', 4, '0','B','B','L','L','S',0);
    go(4, 'C','B','B', 4, 'C','B','B','L','L','S',0);
    go(4, '1','B','B', 5, '1','B','B','L','L','S',0);
    go(5, '1','B','B', 5, '1','B','B','L','L','S',0);
    go(5, 'B','B','B', 9, 'B','B','B','R','R','S',0);
    go(9, '1','B','B', 13, '1','X','B','R','R','S',0);
    go(13, '1','B','B', 13, '1','B','B','R','R','S',0);
    go(13, 'C','B','B', 17, 'C','B','B','R','R','S',0);
    go(17, '0','B','B', 17, '0','B','B','R','R','S',0);
    go(17, 'B','B','B', 22, 'B','B','B','L','L','S',0);
    go(22, 'C','B','B', 23, 'C','B','B','R','R','S',0);
    go(23, '1','B','B', 23, '1','B','B','R','R','S',0);
    go(23, 'B','B','B', 29, '1','B','B','L','L','S',0);
    go(22, '0','B','B', 29, 'B','B','B','L','L','S',0);//
    go(29, 'C','B','B', 29, 'C','B','B','L','L','S',0);
    go(29, '1','B','B', 29, '1','B','B','L','L','S',0);
    go(29, '0','B','B', 29, '0','B','B','L','L','S',0);
    go(29, '1','X','B', 9, '1','X','B','R','R','S',0);
    go(9, 'C','B','B', 31, 'B','B','B','L','L','S',0);
    go(31, '1','X','B', 31, 'B','B','B','L','L','S',0);
    go(31, 'B','B','B', 420, 'B','B','B','S','S','S',0);

    //POS X NEG
    go(1, '1','B','B', 2, '1','B','B','L','L','S',0);
    go(2, 'C','B','B', 2, 'C','B','B','L','L','S',0);
    go(2, '0','B','B', 3, '0','B','B','L','L','S',0);
    go(3, '0','B','B', 3, '0','B','B','L','L','S',0);
    go(3, 'B','B','B', 660, 'B','B','B','R','R','S',0);
        //REVERSE NODE CODE = 66X
        go(660, '0','B','B', 660, '1','B','B','R','R','S',0);
        go(660, 'C','B','B', 661, 'C','B','B','R','R','S',0);
        go(661, '1','B','B', 661, '0','B','B','R','R','S',0);
        go(661, 'B','B','B', 662, 'B','B','B','L','L','S',0);
        go(662, '0','B','B', 662, '0','B','B','L','L','S',0);
        go(662, '1','B','B', 662, '1','B','B','L','L','S',0);
        go(662, 'C','B','B', 662, 'C','B','B','L','L','S',0);
        go(662, 'B','B','B', 999, 'B','B','B','R','R','S',0);
        //COPY NODE CODE = 99X
        go(999, '1','B','B', 9913, '1','X','B','R','R','S',0);
        go(9913, '1','B','B', 9913, '1','B','B','R','R','S',0);
        go(9913, 'C','B','B', 9917, 'C','B','B','R','R','S',0);
        go(9917, '0','B','B', 9917, '0','B','B','R','R','S',0);
        go(9917, 'B','B','B', 9922, 'B','B','B','L','L','S',0);
        go(9922, 'C','B','B', 9923, 'C','B','B','R','R','S',0);
        go(9923, '1','B','B', 9923, '1','B','B','R','R','S',0);
        go(9923, 'B','B','B', 9929, '1','B','B','L','L','S',0);
        go(9922, '0','B','B', 9929, 'B','B','B','L','L','S',0);//
        go(9929, 'C','B','B', 9929, 'C','B','B','L','L','S',0);
        go(9929, '1','B','B', 9929, '1','B','B','L','L','S',0);
        go(9929, '0','B','B', 9929, '0','B','B','L','L','S',0);
        go(9929, '1','X','B', 999, '1','X','B','R','R','S',0);
        go(999, 'C','B','B', 9931, 'B','B','B','L','L','S',0);
        go(9931, '1','X','B', 9931, 'B','B','B','L','L','S',0);
        go(9931, 'B','B','B', 330, 'B','B','B','R','R','S',0);
            //FIX NODE CODE = 33X
            go(330, 'B','B','B', 330, 'B','B','B','R','R','S',0);
            go(330, '0','B','B', 331, '1','B','B','R','R','S',0);
            go(330, '1','B','B', 331, '0','B','B','R','R','S',0);
            go(331, 'B','B','B', 420, 'B','B','B','S','S','S',0);

        //CHEEKY LIL CNT NODE CODE = 84X
        go(420, 'B','B','B', 840, 'B','B','B','L','S','S',0);
        go(840, '1','B','B', 840, 'B','B','1','L','S','R',0);
        go(840, '0','B','B', 840, 'B','B','0','L','S','R',0);
        go(840, 'B','B','B', 841, 'B','B','B','S','S','S',0);




    if(state==841){
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












