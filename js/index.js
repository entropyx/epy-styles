// let text_area_selector = "textarea";

// $(document).on("keyup", text_area_selector, function() {
//   resize($(this));
// });
// $(document).on("keydown", text_area_selector, function() {
//   resize($(this));
// });

function resize(element) {
  if (element.scrollHeight < 104) {
    element.target.style.height = "104px";
  } else {
    element.target.style.height = element.target.scrollHeight + "px";
  }
}

let textareas = document.getElementsByTagName("textarea");

for (let textarea of textareas) {
  textarea.addEventListener("keyup", e => {
    resize(e);
  });

  textarea.addEventListener("keydown", e => {
    resize(e);
  });
}

let clean = document.getElementById("clean");

clean.addEventListener("click", function (event) {
  let input = document.querySelector("div.input-container.cleaner input").value;

  if(input.length > 0) {
    document.querySelector("div.input-container.cleaner input").value = '';
  }
});
