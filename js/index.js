// 1. A todolos inputs con required se les agregara
// .input-aux-container

// Input (required)

for (let [i, input] of document.querySelectorAll(".required").entries()) {
  console.log(i, input);
  // create a input-aux-container if doesn't exists
  if (!input.querySelector(".input-aux-container")) {
    let inputAuxContainer = document.createElement("div");
    inputAuxContainer.classList.add("input-aux-container");
    input.appendChild(inputAuxContainer);
  }
}

// Input counter
for (let [i, input] of document.querySelectorAll(".counter").entries()) {
  // create a input-aux-container if doesn't exists
  if (!input.querySelector(".input-aux-container")) {
    let inputAuxContainer = document.createElement("div");
    inputAuxContainer.classList.add("input-aux-container");
    input.appendChild(inputAuxContainer);
  }

  // create a span (counter) into input-aux-container
  let counterSpan = document.createElement("span");
  let id = `input-number-${i + 1}`;
  counterSpan.id = id;
  counterSpan.classList.add("number");

  let auxContainer = input.querySelector(".input-aux-container");
  auxContainer.appendChild(counterSpan);

  // event to show the current lenght in input
  input.addEventListener("click", e => getInputLenght(e, id));
  input.addEventListener("keyup", e => getInputLenght(e, id));
  input.addEventListener("keydown", e => getInputLenght(e, id));
  // input.addEventListener("onblur", function(e) {
  //   console.log("onblur");
  // });
}

function getInputLenght(e, id) {
  const maxLength = e.target.maxLength;
  const length = e.target.value.length;

  let legend = document.getElementById(`${id}`);
  legend.innerHTML = `${length}/${maxLength}`;
}

// Textarea (height)
function resize(element) {
  if (element.scrollHeight < 104) {
    element.target.style.height = "104px";
  } else {
    element.target.style.height = element.target.scrollHeight + "px";
  }
}

for (let textarea of document.getElementsByTagName("textarea")) {
  textarea.addEventListener("keyup", e => resize(e));
  textarea.addEventListener("keydown", e => resize(e));
}

let clean = document.getElementById("clean");
clean.addEventListener("click", function(event) {
  let input = document.querySelector("div.input-container.cleaner input").value;

  if (input.length > 0) {
    document.querySelector("div.input-container.cleaner input").value = "";
  }
});
