var nval1 = document.getElementById("val1");
var turingVal = [];
var turingVal2 = [];
var turingVal3 = [];
var i;
var j;
var k;
var l;
var result = 0;
var nowState = 0;
var acceptingState = 16;
var activeState = document.getElementsByClassName("state-active");
var trTape = document.getElementById("turing_tape");
var trTape2 = document.getElementById("turing_tape2");
var trTape3 = document.getElementById("turing_tape3");
var dispState = document.getElementById("show-state-now");
var dispAnswer = document.getElementById("show-answer");
var stepController = document.getElementById("controller_step");
var initController = document.getElementById("init_step");

//sama kaya mtr tapi 3 tape
function init() {
  trDelete();

  if (nval1.value >= 0) {
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    if (nval1.value > 0) {
      turingVal.push(new createState("X"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    for (i = 0; i < nval1.value; i++) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    turingVal.push(new createState("1"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    trTape.childNodes[1].classList.add("state-active");
    trTape2.childNodes[1].classList.add("state-active");
    trTape3.childNodes[1].classList.add("state-active");
  } else {
    alert("Nilai belum dimasukan/negatif");
  }
  j = 2;
  k = 2;
  l = 1;
  state = 0;
}

function createState(val) {
  this.val = val;
  var item = document.createElement("p");
  var n = document.createTextNode(this.val);
  item.appendChild(n);
  trTape.appendChild(item);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}
function createState2(val2) {
  this.val = val2;
  var item2 = document.createElement("p");
  var n2 = document.createTextNode(this.val);
  item2.appendChild(n2);
  trTape2.appendChild(item2);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}
function createState3(val3) {
  this.val = val3;
  var item3 = document.createElement("p");
  var n3 = document.createTextNode(this.val);
  item3.appendChild(n3);
  trTape3.appendChild(item3);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}

function createMostLeftNode(val) {
  this.val = val;
  var item = document.createElement("p");
  var n = document.createTextNode(this.val);
  item.appendChild(n);
  trTape.insertBefore(item, trTape.firstChild);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}
function createMostLeftNode2(val2) {
  this.val = val2;
  var item2 = document.createElement("p");
  var n2 = document.createTextNode(this.val);
  item2.appendChild(n2);
  trTape2.insertBefore(item2, trTape2.firstChild);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}
function createMostLeftNode3(val3) {
  this.val = val3;
  var item3 = document.createElement("p");
  var n3 = document.createTextNode(this.val);
  item3.appendChild(n3);
  trTape3.insertBefore(item3, trTape3.firstChild);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}

function displayAnswer() {
  for (i = 0; i < turingVal3.length; i++) {
    console.log(turingVal3.length);
    if (turingVal3[i].val == "0") {
      result++;
    }
  }
  dispAnswer.value = result;
}

function displayState(str) {
  dispState.textContent = str;
}

function trDelete() {
  dispState.textContent = "null";
  dispAnswer.value = "?";
  trTape.innerHTML = "";
  trTape2.innerHTML = "";
  trTape3.innerHTML = "";
  turingVal = [];
  turingVal2 = [];
  turingVal3 = [];
  result = 0;
  stepController.disabled = false;
}

function step() {
  if (turingVal.length) {
    for (i = 0; i < activeState.length; i++) {
      activeState[i].classList.remove("state-active");
      activeState[i].classList.remove("state-active");
      activeState[i].classList.remove("state-active");
    }
  }
  finished = 0;
  //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,dir1,dir2,dir3,addblank
  go(0, "X", "B", "B", 1, "B", "B", "B", "R", "S", "S");
  go(0, "1", "B", "B", 15, "B", "B", "X", "S", "S", "R");
  go(1, "0", "B", "B", 1, "0", "B", "0", "R", "S", "R");
  go(1, "1", "B", "B", 2, "B", "B", "B", "L", "S", "S");
  go(2, "0", "B", "B", 13, "B", "B", "B", "L", "S", "L");
  go(3, "0", "0", "B", 3, "0", "0", "0", "S", "L", "R");
  go(3, "0", "B", "B", 4, "0", "B", "B", "L", "R", "S"); ///fix
  go(3, "B", "0", "B", 5, "B", "0", "B", "R", "S", "S");
  go(4, "0", "B", "B", 3, "0", "B", "B", "L", "L", "S");
  go(4, "0", "0", "B", 4, "0", "0", "0", "S", "R", "R");
  go(4, "B", "0", "B", 6, "B", "0", "B", "R", "S", "S");
  go(5, "0", "0", "B", 5, "0", "B", "B", "S", "L", "S");
  go(5, "0", "B", "B", 7, "B", "B", "B", "R", "S", "L");
  go(6, "0", "0", "B", 6, "0", "B", "B", "S", "R", "S");
  go(6, "0", "B", "B", 8, "B", "B", "B", "R", "S", "L");
  go(7, "0", "B", "0", 7, "0", "0", "B", "S", "R", "L");
  go(7, "0", "B", "B", 9, "0", "B", "B", "S", "L", "R");
  go(7, "B", "B", "0", 16, "B", "B", "0", "S", "S", "R"); //itbroke
  go(8, "0", "B", "0", 8, "0", "0", "B", "S", "L", "L"); //then1
  go(8, "0", "B", "B", 10, "0", "B", "B", "S", "R", "R");
  go(8, "B", "B", "0", 16, "B", "B", "0", "S", "S", "R");
  go(9, "0", "0", "B", 9, "0", "0", "0", "S", "L", "R");
  go(9, "0", "B", "B", 10, "0", "B", "B", "R", "R", "S");
  go(9, "B", "0", "B", 11, "B", "0", "B", "L", "S", "S");
  go(10, "0", "B", "B", 9, "0", "B", "B", "R", "L", "S");
  go(10, "0", "0", "B", 10, "0", "0", "0", "S", "R", "R");
  go(10, "B", "0", "B", 12, "B", "0", "B", "L", "S", "S");
  go(11, "0", "0", "B", 11, "0", "B", "B", "S", "L", "S");
  go(11, "0", "B", "B", 13, "B", "B", "B", "L", "S", "L");
  go(12, "0", "0", "B", 12, "0", "B", "B", "S", "R", "S");
  go(12, "0", "B", "B", 14, "B", "B", "B", "L", "S", "L");
  go(13, "0", "B", "B", 3, "0", "B", "B", "S", "L", "R");
  go(13, "0", "B", "0", 13, "0", "0", "B", "S", "R", "L");
  go(13, "0", "B", "0", 13, "0", "0", "B", "S", "R", "L");
  go(13, "B", "B", "0", 16, "B", "B", "0", "S", "S", "R");
  go(14, "0", "B", "B", 4, "0", "B", "B", "S", "R", "R");
  go(14, "0", "B", "0", 14, "0", "0", "B", "S", "L", "L");
  go(14, "B", "B", "0", 16, "B", "B", "0", "S", "S", "R");
  go(15, "B", "B", "B", 16, "B", "B", "B", "S", "S", "S");

  if (state == acceptingState) {
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

function go(nowState, oldVal, oldVal2, oldVal3, nextState, newVal, newVal2, newVal3, directiont1, directiont2, directiont3) {
  if (turingVal[j].val == oldVal && turingVal2[k].val == oldVal2 && turingVal3[l].val == oldVal3 && state == nowState && finished == 0) {
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
    displayState("(q" + nowState + " | q" + nextState + ") | " + oldVal + "," + oldVal2 + "," + oldVal3 + "/" + newVal + "," + newVal2 + "," + newVal3 + ", " + directiont1 + "," + directiont2 + "," + directiont3);
    if (j == turingVal.length - 1 || k == turingVal.length - 1 || l == turingVal.length - 1) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }

    if (j == 0 || k == 0 || l == 0) {
      turingVal.unshift(new createMostLeftNode("B"));
      turingVal2.unshift(new createMostLeftNode2("B"));
      turingVal3.unshift(new createMostLeftNode3("B"));
      j++;
      k++;
      l++;
    }
    decide(directiont1, directiont2, directiont3);
    finished = 1;
  }
}
function decide(dt1, dt2, dt3) {
  //mungkin ganti switch case
  if (dt1 == "R") {
    j++;
  } else if (dt1 == "L") {
    j--;
  } else {
    j;
  }
  if (dt2 == "R") {
    k++;
  } else if (dt2 == "L") {
    k--;
  } else {
    k;
  }
  if (dt3 == "R") {
    l++;
  } else if (dt3 == "L") {
    l--;
  } else {
    l;
  }
}
