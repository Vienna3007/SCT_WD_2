/* DISPLAY */

const display = document.getElementById("display");

/* APPEND VALUES */

function appendValue(value){

  display.value += value;

}

/* CLEAR DISPLAY */

function clearDisplay(){

  display.value = "";

}

/* DELETE LAST CHARACTER */

function deleteLast(){

  display.value = display.value.slice(0,-1);

}

/* CALCULATE */

function calculate(){

  try{

    display.value = eval(display.value);

  }

  catch{

    display.value = "Error";

  }

}

/* KEYBOARD SUPPORT */

document.addEventListener("keydown",(event)=>{

  const key = event.key;

  /* ALLOWED KEYS */

  if(
    (key >= '0' && key <= '9') ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/' ||
    key === '.' ||
    key === '%'
  ){

    appendValue(key);

  }

  else if(key === "Enter"){

    calculate();

  }

  else if(key === "Backspace"){

    deleteLast();

  }

  else if(key === "Escape"){

    clearDisplay();

  }

});