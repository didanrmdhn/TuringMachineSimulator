var nval1 = document.getElementById("val1");
var nval2 = document.getElementById("val2");
var turingVal = [];
var turingVal2 = [];
var turingVal3 = [];
var i;
var j;
var k;
var l;
var result = 0;
var nowState = 0;
var acceptingState = 7;
var activeState = document.getElementsByClassName("state-active");
var trTape = document.getElementById("turing_tape");
var trTape2 = document.getElementById("turing_tape2");
var trTape3 = document.getElementById("turing_tape3");
var dispState = document.getElementById("show-state-now");
var dispAnswer = document.getElementById("show-answer");
var stepController = document.getElementById("controller_step");
var initController = document.getElementById("init_step");

function init() {
  trDelete();

  //positif x positif
  if (nval1.value >= 0 && nval2.value >= 0) {
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
    if (nval2.value > 0) {
      turingVal.push(new createState("X"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    for (i = 0; i < nval2.value; i++) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    trTape.childNodes[2].classList.add("state-active");
    trTape2.childNodes[2].classList.add("state-active");
    trTape3.childNodes[2].classList.add("state-active");
  }

  //positif x negatif
  else if (nval1.value > 0 && nval2.value < 0) {
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    turingVal.push(new createState("X"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    for (i = 0; i < nval1.value; i++) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    turingVal.push(new createState("1"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    turingVal.push(new createState("Y"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    for (i = 0; i > nval2.value; i--) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    trTape.childNodes[1].classList.add("state-active");
    trTape2.childNodes[1].classList.add("state-active");
    trTape3.childNodes[1].classList.add("state-active");
  }

  //negatif x positif
  else if (nval1.value < 0 && nval2.value >= 0) {
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    turingVal.push(new createState("Y"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    for (i = 0; i > nval1.value; i--) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    turingVal.push(new createState("1"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    if (nval2.value > 0) {
      turingVal.push(new createState("X"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    for (i = 0; i < nval2.value; i++) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    trTape.childNodes[1].classList.add("state-active");
    trTape2.childNodes[1].classList.add("state-active");
    trTape3.childNodes[1].classList.add("state-active");
  }

  //negatif-negatif
  else if (nval1.value < 0 && nval2.value < 0) {
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    turingVal.push(new createState("Y"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    for (i = 0; i > nval1.value; i--) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    turingVal.push(new createState("1"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    turingVal.push(new createState("Y"));
    turingVal2.push(new createState2("B"));
    turingVal3.push(new createState3("B"));
    for (i = 0; i > nval2.value; i--) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
    }
    trTape.childNodes[1].classList.add("state-active");
    trTape2.childNodes[1].classList.add("state-active");
    trTape3.childNodes[1].classList.add("state-active");
  }
  j = 2;
  state = 0;
  k = 2;
  l = 2;
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

function displayAnswer() {
  let result = 0;
  let hasY = false;

  for (let i = 0; i < turingVal3.length; i++) {
    console.log(turingVal3.length);
    if (turingVal3[i].val === "Y") {
      hasY = true;
    }

    if (turingVal3[i].val === "0" && !hasY) {
      result++;
    } else if (turingVal3[i].val === "0" && hasY) {
      result--;
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

  go(0, "X", "B", "B", 1, "B", "B", "X", "R", "S", "S");
  go(0, "Y", "B", "B", 1, "B", "B", "Y", "R", "S", "S");
  go(0, "1", "B", "B", 5, "B", "B", "B", "R", "S", "S");
  go(1, "0", "B", "X", 1, "B", "0", "X", "R", "R", "S");
  go(1, "0", "B", "Y", 1, "B", "0", "Y", "R", "R", "S");
  go(1, "1", "B", "X", 2, "B", "B", "X", "R", "S", "S");
  go(1, "1", "B", "Y", 2, "B", "B", "Y", "R", "S", "S");
  go(2, "X", "B", "X", 3, "B", "B", "X", "R", "L", "R");
  go(2, "Y", "B", "X", 3, "B", "B", "Y", "R", "L", "R");
  go(2, "Y", "B", "Y", 3, "B", "B", "X", "R", "L", "R");
  go(2, "X", "B", "Y", 3, "B", "B", "Y", "R", "L", "R");
  go(2, "B", "B", "X", 6, "B", "B", "Y", "S", "S", "R");
  go(2, "B", "B", "Y", 6, "B", "B", "Y", "S", "S", "R");
  go(3, "0", "0", "B", 3, "0", "B", "B", "R", "L", "S");
  go(3, "B", "0", "B", 4, "B", "0", "0", "L", "S", "R");
  go(3, "0", "B", "B", 7, "0", "B", "B", "S", "S", "L");
  go(3, "B", "B", "B", 7, "B", "B", "0", "S", "S", "R");
  go(4, "0", "0", "B", 4, "0", "B", "B", "L", "L", "S");
  go(4, "B", "0", "B", 3, "B", "0", "0", "R", "S", "R");
  go(4, "0", "B", "B", 7, "0", "B", "B", "S", "S", "L");
  go(4, "B", "B", "B", 7, "B", "B", "0", "S", "S", "R");
  go(5, "B", "B", "B", 6, "B", "B", "Y", "S", "S", "R");
  go(5, "X", "B", "B", 7, "B", "B", "B", "S", "S", "S");
  go(5, "Y", "B", "B", 7, "B", "B", "B", "S", "S", "S");
  go(6, "B", "B", "B", 7, "B", "B", "X", "S", "S", "R");

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
