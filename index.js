// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
function simulateClick(targetId, text) {
    const target = document.getElementById(targetId);
    target.textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
const simulateBtn = document.getElementById("simulate-click");
const targetId = "dynamic-content";
const text = "Button Clicked!";
simulateBtn.addEventListener("click", () => simulateClick(targetId, text))
})

function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const target = document.getElementById(targetId);
  const errorBox = document.getElementById("error-message");

  if (!form || !target || !errorBox) {
    console.warn("Missing element(s):", { form: !!form, target: !!target, error: !!errorBox });
    return;
  }
  // Prefer #user-input, fall back to first text input
  const input =
    form.querySelector("#user-input") ||
    form.querySelector('input[type="text"]');
  const value = (input?.value || "").trim();
  console.log("handleFormSubmit value:", value);
  if (!value) {
    errorBox.textContent = "Input cannot be empty";
    errorBox.classList.remove("hidden");
    return;
  }
  // Success: update DOM
  target.textContent = value;
  // Hide error + clear input
  errorBox.textContent = "";
  errorBox.classList.add("hidden");
  if (input) input.value = "";
}

// - Use JavaScript to dynamically update the DOM based on user actions.
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");
    if (form && !form.__wired) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();                 // <- prevents reload
        handleFormSubmit("user-form", "dynamic-content");
      });
      form.__wired = true;
    }
  });
}


function addElementToDOM(containerId, text) {
    const el = document.getElementById(containerId);
    if(el){
    el.textContent = (text);
    }
    const container = document.getElementById("user-form");
    const div = document.createElement("div")
    div.textContent = "New Div"
    const ul = document.createElement("ul");
    ul.textContent = "List";

    const list1 = document.createElement("li");
    list1.textContent = "List Item 1";
    list1.id = "list1";

    const list2 = document.createElement("li");
    list2.textContent = "List Item 2";
    ul.append(list1, list2);
    if(div) div.append(ul);
    if(container) container.append(div);
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if(element) element.remove();
}

addElementToDOM();
removeElementFromDOM("list1");


module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};