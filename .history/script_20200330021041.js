const padQ = document.querySelector("#padQ");
const padW = document.querySelector("#padW");
const padE = document.querySelector("#padE");
const padA = document.querySelector("#padA");
const padS = document.querySelector("#padS");
const padD = document.querySelector("#padD");
const padZ = document.querySelector("#padZ");
const padX = document.querySelector("#padX");
const padC = document.querySelector("#padC");
const padR = document.querySelector("#padR");
const padT = document.querySelector("#padT");
const padY = document.querySelector("#padY");
const padF = document.querySelector("#padF");
const padG = document.querySelector("#padG");
const padH = document.querySelector("#padH");
const padV = document.querySelector("#padV");
const padB = document.querySelector("#padB");
const padN = document.querySelector("#padN");


const playSound = function (obj = this) {
  obj.event.originalTarget.
  firstElementChild.currentTime = 0;
  obj.event.originalTarget.firstElementChild.play();
  display.innerText = obj.event.originalTarget.
  firstElementChild.title;
};

const playSoundKey = function (obj = this) {
  obj.firstElementChild.currentTime = 0;
  obj.firstElementChild.play();
  display.innerText = obj.firstElementChild.title;
};


padQ.onclick = () => playSound();
padW.onclick = () => playSound();
padE.onclick = () => playSound();
padA.onclick = () => playSound();
padS.onclick = () => playSound();
padD.onclick = () => playSound();
padZ.onclick = () => playSound();
padX.onclick = () => playSound();
padC.onclick = () => playSound();
padR.onclick = () => playSound();
padT.onclick = () => playSound();
padY.onclick = () => playSound();
padF.onclick = () => playSound();
padG.onclick = () => playSound();
padH.onclick = () => playSound();
padV.onclick = () => playSound();
padB.onclick = () => playSound();
padN.onclick = () => playSound();

window.addEventListener('keypress', e => {

  if (e.key == "q" || e.key == "Q") {
    playSoundKey(padQ);
  }
  if (e.key == "w" || e.key == "W") {
    playSoundKey(padW);
  }
  if (e.key == "e" || e.key == "E") {
    playSoundKey(padE);
  }
  if (e.key == "a" || e.key == "A") {
    playSoundKey(padA);
  }
  if (e.key == "s" || e.key == "S") {
    playSoundKey(padS);
  }
  if (e.key == "d" || e.key == "D") {
    playSoundKey(padD);
  }
  if (e.key == "z" || e.key == "Z") {
    playSoundKey(padZ);e;
  }
  if (e.key == "x" || e.key == "X") {
    playSoundKey(padX);
  }
  if (e.key == "c" || e.key == "C") {
    playSoundKey(padC);
  }
  if (e.key == "r" || e.key == "R") {
    playSoundKey(padR);
  }
  if (e.key == "t" || e.key == "T") {
    playSoundKey(padT);
  }
  if (e.key == "y" || e.key == "Y") {
    playSoundKey(padY);
  }
  if (e.key == "f" || e.key == "F") {
    playSoundKey(padF);
  }
  if (e.key == "g" || e.key == "G") {
    playSoundKey(padG);
  }
  if (e.key == "h" || e.key == "H") {
    playSoundKey(padH);
  }
  if (e.key == "v" || e.key == "V") {
    playSoundKey(padV);e;
  }
  if (e.key == "b" || e.key == "B") {
    playSoundKey(padB);
  }
  if (e.key == "n" || e.key == "N") {
    playSoundKey(padN);
  }
});


// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.