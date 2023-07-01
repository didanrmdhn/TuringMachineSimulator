var nval1 = document.getElementById("val1");
var turingVal = [];
var turingVal2 = [];
var turingVal3 = [];
var turingVal4 = [];
var turingVal5 = [];
var i;
var j;
var k;
var l;
var m;
var n;
var result = 0;
var nowState = 0;
var acceptingState = 5;
var activeState = document.getElementsByClassName("state-active");
var trTape = document.getElementById("turing_tape");
var trTape2 = document.getElementById("turing_tape2");
var trTape3 = document.getElementById("turing_tape3");
var trTape4 = document.getElementById("turing_tape4");
var trTape5 = document.getElementById("turing_tape5");
var dispState = document.getElementById("show-state-now");
var dispAnswer = document.getElementById("show-answer");
var stepController = document.getElementById("controller_step");
var initController = document.getElementById("init_step");

//sama kaya mtr tapi 3 tape
function init() {
  trDelete();

  if (nval1.value > 0) {
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
      turingVal4.push(new createState4("B"));
      turingVal5.push(new createState5("B"));
    }
    for (i = 0; i < nval1.value; i++) {
      turingVal.push(new createState("0"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
      turingVal4.push(new createState4("B"));
      turingVal5.push(new createState5("B"));
    }
    for (i = 0; i < 2; i++) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
      turingVal4.push(new createState4("B"));
      turingVal5.push(new createState5("B"));
    }
    trTape.childNodes[2].classList.add("state-active");
    trTape2.childNodes[2].classList.add("state-active");
    trTape3.childNodes[2].classList.add("state-active");
    trTape4.childNodes[2].classList.add("state-active");
    trTape5.childNodes[2].classList.add("state-active");
  } else {
    alert("Nilai belum dimasukan/negatif");
  }
  j = 2;
  k = 2;
  l = 2;
  m = 2;
  n = 2;
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
function createState4(val4) {
  this.val = val4;
  var item4 = document.createElement("p");
  var n4 = document.createTextNode(this.val);
  item4.appendChild(n4);
  trTape4.appendChild(item4);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}
function createState5(val5) {
  this.val = val5;
  var item5 = document.createElement("p");
  var n5 = document.createTextNode(this.val);
  item5.appendChild(n5);
  trTape5.appendChild(item5);
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
function createMostLeftNode4(val4) {
  this.val = val4;
  var item4 = document.createElement("p");
  var n4 = document.createTextNode(this.val);
  item4.appendChild(n4);
  trTape4.insertBefore(item4, trTape4.firstChild);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}
function createMostLeftNode5(val5) {
  this.val = val5;
  var item5 = document.createElement("p");
  var n5 = document.createTextNode(this.val);
  item5.appendChild(n5);
  trTape5.insertBefore(item5, trTape5.firstChild);
  this.replaceWith = function (newValue) {
    this.val = newValue;
  };
}

function displayAnswer() {
  for (i = 0; i < turingVal5.length; i++) {
    console.log(turingVal5.length);
    if (turingVal5[i].val == "0") {
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
  trTape4.innerHTML = "";
  trTape5.innerHTML = "";
  turingVal = [];
  turingVal2 = [];
  turingVal3 = [];
  turingVal4 = [];
  turingVal5 = [];
  result = 0;
  stepController.disabled = false;
}

function step() {
  if (turingVal.length) {
    for (i = 0; i < activeState.length; i++) {
      activeState[i].classList.remove("state-active");
      activeState[i].classList.remove("state-active");
      activeState[i].classList.remove("state-active");
      activeState[i].classList.remove("state-active");
      activeState[i].classList.remove("state-active");
    }
  }
  finished = 0;
  //nowState,oldvalue1,oldvalue2 | nextState,newvalue1,newvalue2,dir1,dir2,dir3,addblank
  go(0, "0", "B", "B", "B", "B", 1, "0", "0", "0", "B", "0", "S", "S", "S", "S", "R", 0);
  go(1, "0", "0", "0", "B", "B", 1, "0", "0", "0", "0", "B", "S", "S", "L", "R", "S", 0);
  go(1, "0", "0", "B", "B", "B", 2, "0", "0", "B", "B", "B", "S", "L", "R", "S", "S", 0);
  go(1, "0", "B", "0", "B", "B", 7, "0", "B", "0", "B", "B", "S", "R", "S", "S", "S", 0);
  go(2, "0", "0", "B", "B", "B", 1, "0", "0", "B", "B", "B", "S", "L", "L", "S", "S", 0);
  go(2, "0", "0", "0", "B", "B", 2, "0", "0", "0", "0", "B", "S", "S", "R", "R", "S", 0);
  go(2, "0", "B", "0", "B", "B", 3, "0", "B", "0", "B", "B", "S", "R", "S", "S", "S", 0);
  go(3, "0", "0", "0", "B", "B", 3, "0", "0", "0", "B", "B", "S", "R", "R", "S", "S", 0);
  go(3, "0", "B", "B", "B", "B", 4, "0", "B", "B", "B", "B", "S", "L", "L", "L", "S", 0);
  go(4, "0", "0", "0", "0", "B", 4, "0", "0", "0", "B", "B", "R", "S", "S", "L", "S", 0);
  go(4, "B", "0", "0", "B", "B", 5, "B", "0", "0", "B", "B", "S", "S", "S", "S", "S", 0);
  go(4, "0", "0", "0", "B", "B", 6, "0", "0", "0", "B", "B", "L", "S", "S", "R", "S", 0);
  go(4, "B", "0", "0", "0", "B", 8, "B", "0", "0", "0", "B", "L", "S", "S", "S", "L", 0);
  go(6, "B", "0", "0", "B", "B", 0, "B", "0", "0", "B", "B", "R", "R", "R", "S", "S", 0);
  go(6, "0", "0", "0", "B", "B", 6, "0", "0", "0", "B", "B", "L", "S", "S", "S", "S", 0);
  go(7, "0", "0", "0", "B", "B", 7, "0", "0", "0", "B", "B", "S", "R", "S", "S", "S", 0);
  go(7, "0", "B", "0", "B", "B", 4, "0", "B", "0", "B", "B", "S", "L", "S", "L", "S", 0);
  go(8, "0", "0", "0", "0", "0", 5, "0", "0", "0", "0", "B", "S", "S", "S", "S", "S", 0);

  console.log("turingVal:", turingVal);
  console.log("turingVal2:", turingVal2);
  console.log("turingVal3:", turingVal3);
  console.log("turingVal4:", turingVal4);
  console.log("turingVal5:", turingVal5);

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

function go(nowState, oldVal, oldVal2, oldVal3, oldVal4, oldVal5, nextState, newVal, newVal2, newVal3, newVal4, newVal5, directiont1, directiont2, directiont3, directiont4, directiont5, addBlank) {
  if (turingVal[j].val == oldVal && turingVal2[k].val == oldVal2 && turingVal3[l].val == oldVal3 && turingVal4[m].val == oldVal4 && turingVal5[n].val == oldVal5 && state == nowState && finished == 0) {
    turingVal[j].replaceWith(newVal);
    turingVal2[k].replaceWith(newVal2);
    turingVal3[l].replaceWith(newVal3);
    turingVal4[m].replaceWith(newVal4);
    turingVal5[n].replaceWith(newVal5);

    trTape.childNodes[j].textContent = newVal;
    trTape2.childNodes[k].textContent = newVal2;
    trTape3.childNodes[l].textContent = newVal3;
    trTape4.childNodes[m].textContent = newVal4;
    trTape5.childNodes[n].textContent = newVal5;
    trTape.childNodes[j].classList.add("state-active");
    trTape2.childNodes[k].classList.add("state-active");
    trTape3.childNodes[l].classList.add("state-active");
    trTape4.childNodes[m].classList.add("state-active");
    trTape5.childNodes[n].classList.add("state-active");
    trTape.childNodes[j].scrollIntoView();
    trTape2.childNodes[k].scrollIntoView();
    trTape3.childNodes[l].scrollIntoView();
    trTape4.childNodes[m].scrollIntoView();
    trTape5.childNodes[n].scrollIntoView();

    state = nextState;
    displayState(
      "(q" +
        nowState +
        " | q" +
        nextState +
        ") | " +
        oldVal +
        "," +
        oldVal2 +
        "," +
        oldVal3 +
        "," +
        oldVal4 +
        "," +
        oldVal5 +
        "/" +
        newVal +
        "," +
        newVal2 +
        "," +
        newVal3 +
        "," +
        newVal4 +
        "," +
        newVal5 +
        ", " +
        directiont1 +
        "," +
        directiont2 +
        "," +
        directiont3 +
        "," +
        directiont4 +
        "," +
        directiont5
    );
    if (j == turingVal.length - 1 || k == turingVal2.length - 1 || l == turingVal3.length - 1 || m == turingVal4.length - 1 || n == turingVal5.length - 1) {
      turingVal.push(new createState("B"));
      turingVal2.push(new createState2("B"));
      turingVal3.push(new createState3("B"));
      turingVal4.push(new createState4("B"));
      turingVal5.push(new createState5("B"));
    }

    if (j == 0 || k == 0 || l == 0) {
      turingVal.unshift(new createMostLeftNode("B"));
      turingVal2.unshift(new createMostLeftNode2("B"));
      turingVal3.unshift(new createMostLeftNode3("B"));
      turingVal4.unshift(new createMostLeftNode4("B"));
      turingVal5.unshift(new createMostLeftNode5("B"));

      j += 1;
      k += 1;
      l += 1;
      m += 1;
      n += 1;
    }

    decide(directiont1, directiont2, directiont3, directiont4, directiont5);
    finished = 1;
  }
}
function decide(dt1, dt2, dt3, dt4, dt5) {
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
  if (dt4 == "R") {
    m++;
  } else if (dt4 == "L") {
    m--;
  } else {
    m;
  }
  if (dt5 == "R") {
    n++;
  } else if (dt5 == "L") {
    n--;
  } else {
    n;
  }
}
