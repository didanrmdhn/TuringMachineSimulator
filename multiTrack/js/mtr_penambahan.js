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
    var nvalArr = nval.split("+");
    var nval1 = parseInt(nvalArr[0]);
    var nval2 = parseInt(nvalArr[1]);
    // console.log(nvalArr);
    if(nval1 != undefined && nval2 != undefined){
        //if input negative
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
        }
        for(i = 0; i < newNval1; i++){
            if (nval1 < 0) {
                turingVal.push(new createState("1"));
                turingVal2.push(new createState2("B"));                
            }else{
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
            }
        }
        turingVal.push(new createState("C"));
        turingVal2.push(new createState2("B"));
        for(i = 0; i < newNval2; i++){
            if (nval2 < 0) {
                turingVal.push(new createState("1"));
                turingVal2.push(new createState2("B"));                
            }else{
                turingVal.push(new createState("0"));
                turingVal2.push(new createState2("B"));
            }
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
    go(0, '1','B', 0, '1','B','R',0);
    go(0, 'C','B', 1, 'C','B','R',0);

   //NEG X NEG
    go(1, '1','B', 2, '1','B','L',0);
    go(2, 'C','B', 2, 'C','B','L',0);
    go(2, '1','B', 7, '1','B','L',0);
    go(7, '1','B', 7, '1','B','L',0);
    go(7, 'B','B', 11, 'B','B','R',0);
    go(11, '1','B', 11, '0','B','R',0);
    go(11, 'C','B', 750, 'C','B','R',0);
        //ONTHEGO NODE CODE = 75X
        go(750, '1','B', 750, '0','B','R',0);
        go(750, 'B','B', 880, 'B','B','L',0);
        //ONTHEGO NODE CODE = 88X -> back to front
        go(880, 'C','B', 880, 'C','B','L',0);
        go(880, '0','B', 880, '0','B','L',0);
        go(880, 'B','B', 881, 'B','B','R',0);
    go(881, '0','B', 15, 'B','X','R',0);
    go(15, '0','B', 15, '0','B','R',0);
    go(15, 'C','B', 20, 'C','B','R',0);
    go(20, '0','B', 20, '0','B','R',0);
    go(20, 'B','B', 25, '0','B','L',1);//
    go(25, '0','B', 25, '0','B','L',0);
    go(25, 'C','B', 26, 'C','B','L',0);
    go(26, '0','B', 26, '0','B','L',0);
    go(26, 'B','X', 881, 'B','X','R',0);
    go(881, 'C','B', 882, 'B','B','R',0);
    go(882, '0','B', 882, '1','B','R',0);
    go(882, 'B','B', 420, 'B','B','R',0);

    //POS X POS
    go(1, '0','B', 4, '0','B','L',0);
    go(4, 'C','B', 4, 'C','B','L',0);
    go(4, '0','B', 8, '0','B','L',0);
    go(8, '0','B', 8, '0','B','L',0);
    go(8, 'B','B', 55881, 'B','B','R',0);
        //COPY NODE CODE = 55X
        go(55881, '0','B', 5515, 'B','X','R',0);
        go(5515, '0','B', 5515, '0','B','R',0);
        go(5515, 'C','B', 5520, 'C','B','R',0);
        go(5520, '0','B', 5520, '0','B','R',0);
        go(5520, 'B','B', 5525, '0','B','L',1);//
        go(5525, '0','B', 5525, '0','B','L',0);
        go(5525, 'C','B', 5526, 'C','B','L',0);
        go(5526, '0','B', 5526, '0','B','L',0);
        go(5526, 'B','X', 55881, 'B','X','R',0);
        go(55881, 'C','B',55882, 'B','B','R',0);
        go(55882, '0','B',55882, '0','B','R',0);
        go(55882, 'B','B',420, 'B','B','R',0);
    
    //NEG X POS
    go(1, '0','B', 4, '0','B','L',0);
    go(4, 'C','B', 4, 'C','B','L',0);
    go(4, '1','B', 5, '1','B','L',0);
    go(5, '1','B', 5, '1','B','L',0);
    go(5, 'B','B', 9, 'B','B','R',0);
    go(9, '1','B', 13, '1','X','R',0);
    go(13, '1','B', 13, '1','B','R',0);
    go(13, 'C','B', 17, 'C','B','R',0);
    go(17, '0','B', 17, '0','B','R',0);
    go(17, 'B','B', 22, 'B','B','L',0);
    go(22, 'C','B', 23, 'C','B','R',0);
    go(23, '1','B', 23, '1','B','R',0);
    go(23, 'B','B', 29, '1','B','L',0);
    go(22, '0','B', 29, 'B','B','L',0);//
    go(29, 'C','B', 29, 'C','B','L',0);
    go(29, '1','B', 29, '1','B','L',0);
    go(29, '0','B', 29, '0','B','L',0);
    go(29, '1','X', 9, '1','X','R',0);
    go(9, 'C','B', 31, 'B','B','L',0);
    go(31, '1','X', 31, 'B','B','L',0);
    go(31, 'B','B', 420, 'B','B','R',0);

    //POS X NEG
    go(1, '1','B', 2, '1','B','L',0);
    go(2, 'C','B', 2, 'C','B','L',0);
    go(2, '0','B', 3, '0','B','L',0);
    go(3, '0','B', 3, '0','B','L',0);
    go(3, 'B','B', 660, 'B','B','R',0);
        //REVERSE NODE CODE = 66X
        go(660, '0','B', 660, '1','B','R',0);
        go(660, 'C','B', 661, 'C','B','R',0);
        go(661, '1','B', 661, '0','B','R',0);
        go(661, 'B','B', 662, 'B','B','L',0);
        go(662, '0','B', 662, '0','B','L',0);
        go(662, '1','B', 662, '1','B','L',0);
        go(662, 'C','B', 662, 'C','B','L',0);
        go(662, 'B','B', 999, 'B','B','R',0);
        //COPY NODE CODE = 99X
        go(999, '1','B', 9913, '1','X','R',0);
        go(9913, '1','B', 9913, '1','B','R',0);
        go(9913, 'C','B', 9917, 'C','B','R',0);
        go(9917, '0','B', 9917, '0','B','R',0);
        go(9917, 'B','B', 9922, 'B','B','L',0);
        go(9922, 'C','B', 9923, 'C','B','R',0);
        go(9923, '1','B', 9923, '1','B','R',0);
        go(9923, 'B','B', 9929, '1','B','L',0);
        go(9922, '0','B', 9929, 'B','B','L',0);//
        go(9929, 'C','B', 9929, 'C','B','L',0);
        go(9929, '1','B', 9929, '1','B','L',0);
        go(9929, '0','B', 9929, '0','B','L',0);
        go(9929, '1','X', 999, '1','X','R',0);
        go(999, 'C','B', 9931, 'B','B','L',0);
        go(9931, '1','X', 9931, 'B','B','L',0);
        go(9931, 'B','B', 330, 'B','B','R',0);
            //FIX NODE CODE = 33X
            go(330, 'B','B', 330, 'B','B','R',0);
            go(330, '0','B', 331, '1','B','R',0);
            go(330, '1','B', 331, '0','B','R',0);
            go(331, 'B','B', 420, 'B','B','L',0);



    if(state==420){
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












