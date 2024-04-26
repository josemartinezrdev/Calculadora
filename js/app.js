const display = document.querySelector(".display");
const btnNums = document.querySelectorAll(".keyn");
const btnOps = document.querySelectorAll(".keyop");
const btnCons = document.querySelectorAll(".keycon");

const sen = document.querySelector("#sen");
const cos = document.querySelector("#cos");
const tan = document.querySelector("#tan");

const raz = document.querySelector("#raz");
const elv = document.querySelector("#elv");

const bin = document.querySelector("#bin");
const oct = document.querySelector("#oct");
const hex = document.querySelector("#hex");
const dec = document.querySelector("#dec");

//Hidden nuevo

const Abin = document.querySelector(".Abin");
const Aoct = document.querySelector(".Aoct");
const Ahex = document.querySelector(".Ahex");

const A = document.querySelector(".a");
const B = document.querySelector(".b");
const C = document.querySelector(".c");
const D = document.querySelector(".d");
const E = document.querySelector(".e");
const F = document.querySelector(".f");

let isAbin = false;
let isAoct = false;
let isAhex = false;

//viejo

let isSen = false;
let isCos = false;
let isTan = false;
let isRaz = false;
let isElv = false;

let isBin = false;
let isOct = false;
let isHex = false;
let isDec = false;

sen.addEventListener("click", () => {
  isSen = true;
});
cos.addEventListener("click", () => {
  isCos = true;
});
tan.addEventListener("click", () => {
  isTan = true;
});

raz.addEventListener("click", () => {
  isRaz = true;
});
elv.addEventListener("click", () => {
  isElv = true;
});

bin.addEventListener("click", () => {
  isBin = true;
});
oct.addEventListener("click", () => {
  isOct = true;
});
hex.addEventListener("click", () => {
  isHex = true;
});

// NUEVO

dec.addEventListener("click", () => {
  Abin.classList.toggle("hidden");
  Aoct.classList.toggle("hidden");
  Ahex.classList.toggle("hidden");

  bin.classList.toggle("hidden");
  oct.classList.toggle("hidden");
  hex.classList.toggle("hidden");

  dec.disabled = true;
  isDec = true;

  const numericButtons = document.querySelectorAll(".keyn:not(#igual)");
  numericButtons.forEach((button) => {
    button.disabled = true;
  });
});

function resKey() {
  const numericButtons = document.querySelectorAll(".keyn:not(#igual)");
  numericButtons.forEach((button) => {
    button.disabled = false;
  });
}

Abin.addEventListener("click", () => {
  isAbin = true;
  trans();
  resKey();
  const numericButtons = document.querySelectorAll(".keyn:not(#igual)");
  numericButtons.forEach((button) => {
    const buttonText = button.textContent.trim();
    if (buttonText !== "1" && buttonText !== "0") {
      button.disabled = true;
    }
  });
});

Aoct.addEventListener("click", () => {
  isAoct = true;
  trans();
  resKey();
  const numericButtons = document.querySelectorAll(".keyn:not(#igual)");
  numericButtons.forEach((button) => {
    const buttonText = button.textContent.trim();
    console.log(button);
    if (
      buttonText !== "0" &&
      buttonText !== "1" &&
      buttonText !== "2" &&
      buttonText !== "3" &&
      buttonText !== "4" &&
      buttonText !== "5" &&
      buttonText !== "6" &&
      buttonText !== "7"
    ) {
      button.disabled = true;
    }
  });
});

let isLetras = false;

function letras() {
  A.classList.toggle("hidden");
  B.classList.toggle("hidden");
  C.classList.toggle("hidden");
  D.classList.toggle("hidden");
  E.classList.toggle("hidden");
  F.classList.toggle("hidden");
  isLetras = true;
}
Ahex.addEventListener("click", () => {
  isAhex = true;
  letras();
  trans();
  resKey();
  const numericButtons = document.querySelectorAll(".keyn:not(#igual)");
  numericButtons.forEach((button) => {
    const buttonText = button.textContent.trim();
    if (buttonText === "." || buttonText === "(" || buttonText === ")") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
});

function trans() {
  dec.disabled = false;
  Abin.classList.toggle("hidden");
  Aoct.classList.toggle("hidden");
  Ahex.classList.toggle("hidden");
  bin.classList.toggle("hidden");
  oct.classList.toggle("hidden");
  hex.classList.toggle("hidden");
}

//VIEJO

function seno(num) {
  display.innerHTML = Math.sin(num).toFixed(8);
  isSen = false;
}
function cose(num) {
  display.innerHTML = Math.cos(num).toFixed(8);
  isCos = false;
}
function tang(num) {
  display.innerHTML = Math.tan(num).toFixed(8);
  isTan = false;
}
function elvr(str) {
  let [base, exp] = str.split("X<sup>y</sup>");
  display.innerHTML = (base ** exp).toFixed(8);
  isElv = false;
}

function root(num) {
  if (num < 0) {
    display.innerHTML = "Error!";
  } else {
    display.innerHTML = Math.sqrt(num).toFixed(8);
    isRaz = false;
  }
}

btnNums.forEach((btnNum) => {
  btnNum.addEventListener("click", () => {
    const btnPress = btnNum.innerHTML;

    if (btnNum.id === "point") {
      display.innerHTML += btnPress;
    } else {
      if (display.innerHTML === "0" || display.innerHTML === "Error!") {
        display.innerHTML = btnPress;
      } else {
        display.innerHTML += btnPress;
      }
      if (btnNum.id === "igual") {
        //NUEVO
        resKey();
        if (isLetras === true) {
          letras();
          isLetras = false;
        }
        //VIEJO
        if (isSen === true) {
          seno(display.innerHTML.replace("Sen", "").slice(0, -1));
        } else if (isCos === true) {
          cose(display.innerHTML.replace("Cos", "").slice(0, -1));
        } else if (isTan === true) {
          tang(display.innerHTML.replace("Tan", "").slice(0, -1));
        } else if (isRaz === true) {
          root(display.innerHTML.replace("√", "").slice(0, -1));
        } else if (isElv === true) {
          elvr(display.innerHTML.slice(0, -1));
        } else if (isBin === true) {
          let decimal = parseInt(
            display.innerHTML.replace("BIN", "").slice(0, -1)
          );
          display.innerHTML = decimal.toString(2).toUpperCase();
          isBin = false;
        } else if (isOct === true) {
          let decimal = parseInt(
            display.innerHTML.replace("OCT", "").slice(0, -1)
          );
          display.innerHTML = decimal.toString(8).toUpperCase();
          isOct = false;
        } else if (isHex === true) {
          let decimal = parseInt(
            display.innerHTML.replace("HEX", "").slice(0, -1)
          );
          display.innerHTML = decimal.toString(16).toUpperCase();
          isHex = false;
        } else if (isAbin === true) {
          //!Aqui voy a pasar de bin a dec IMPORTANTE
          let binario = display.innerHTML.replace("DECA BIN", "").slice(0, -1);
          display.innerHTML = parseInt(binario, 2);
          isAbin = false;
        } else if (isAoct === true) {
          //!Aqui voy a pasar de oct a dec IMPORTANTE
          let octal = display.innerHTML.replace("DECA OCT", "").slice(0, -1);
          display.innerHTML = parseInt(octal, 8);
          isAoct = false;
        } else if (isAhex === true) {
          //!Aqui voy a pasar de hex a dec IMPORTANTE
          let hexad = display.innerHTML.replace("DECA HEX", "").slice(0, -1);
          display.innerHTML = parseInt(hexad, 16);
          isAhex = false;
        } else {
          if (display.innerHTML === "=") {
            display.innerHTML = "0";
          } else {
            try {
              display.innerHTML = eval(display.innerHTML.slice(0, -1));
            } catch {
              display.innerHTML = "Error!";
            }
            return;
          }
        }
      }
    }
  });
});

btnOps.forEach((btnOp) => {
  btnOp.addEventListener("click", () => {
    const btnPress = btnOp.innerHTML;
    if (display.innerHTML === "0" || display.innerHTML === "Error!") {
      display.innerHTML = btnPress;
    } else {
      display.innerHTML += btnPress;
    }

    if (btnOp.id === "borrar") {
      display.innerHTML = "0";
      return;
    }
  });
});

btnCons.forEach((btnCon) => {
  btnCon.addEventListener("click", () => {
    const btnPress = btnCon.innerHTML;
    if (display.innerHTML === "0" || display.innerHTML === "Error!") {
      display.innerHTML = btnPress;
    } else {
      display.innerHTML += btnPress;
    }
  });
});
