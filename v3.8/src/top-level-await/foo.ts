fetch("...").then(() => {});

const foo = await fetch("...");

const numApples = 3;
const text = `I have ${numApples} apples`;

function frequentlyCalledFunction() {
  // do something useful
}

function callerA() {
  frequentlyCalledFunction();
}

function callerB() {
  callerA();
}

function callerC() {
  frequentlyCalledFunction();
}

function entryPoint() {
  callerA();
  callerB();
  callerC();
}

export {};
