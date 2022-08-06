const start_program = () => {

  //for first three buttons
  const button_9 = document.getElementById("button_9");
  const button_8 = document.getElementById("button_8");
  const button_7 = document.getElementById("button_7");

  //for second three buttons
  const button_6 = document.getElementById("button_6");
  const button_5 = document.getElementById("button_5");
  const button_4 = document.getElementById("button_4");

  //for third three buttons
  const button_3 = document.getElementById("button_3");
  const button_2 = document.getElementById("button_2");
  const button_1 = document.getElementById("button_1");

  //for signs
  const divide = document.getElementById("divide");
  const multiply = document.getElementById("multiply");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  //the textbox for the calculator

    text_box = document.getElementById("text");

  //listening for events
  button_9.addEventListener("click", () => {

    text_box.value = text_box.value + 9;
  });

  button_8.addEventListener("click", () => {
    text_box.value = text_box.value + 8;
  });

  button_7.addEventListener("click", () => {
    text_box.value = text_box.value + 7;
  });

  button_6.addEventListener("click", () => {
    text_box.value = text_box.value + 6;
  });

  button_5.addEventListener("click", () => {
    text_box.value = text_box.value + 5;
  });

  button_4.addEventListener("click", () => {
    text_box.value = text_box.value + 4;
  });

  button_3.addEventListener("click", () => {
    text_box.value = text_box.value + 3;
  });

  button_2.addEventListener("click", () => {
    text_box.value = text_box.value + 2;
  });

  button_1.addEventListener("click", () => {
    text_box.value = text_box.value + 1;
  });

  document.getElementById("button_0").addEventListener("click", () => {

    text_box.value = text_box.value + 0;
  });


  //for the functions

  divide.addEventListener("click", () => {

    text_box.value = text_box.value + "/";
  });

  multiply.addEventListener("click", () => {

    text_box.value = text_box.value + "*";
  });

  plus.addEventListener("click", () => {

    text_box.value = text_box.value + "+";
  });

  minus.addEventListener("click", () => {

    text_box.value = text_box.value + "-";
  });

  document.getElementById("point").addEventListener("click", () => {

    text_box.value = text_box.value + ".";
  });

  //for the solving

  document.getElementById("equal").addEventListener("click", () => {

    try {
      text_box.value = eval(text_box.value);
    }

    catch (e) {

      text_box.value = "error";
      console.log(e);
    }

  });

  // for clearing of the screen

  document.getElementById("clear").addEventListener("click", () => {

    text_box.value = "";
  });
}
start_program();
