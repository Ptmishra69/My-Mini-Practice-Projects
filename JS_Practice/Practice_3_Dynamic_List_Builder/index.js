const button = document.getElementById("add");
const inputfield = document.getElementById("input");
const list = document.getElementById("list");

button.addEventListener("click", function () {
  const content = inputfield.value;

  if (content === "") {
    alert("Type your tasks");
    return;
  }

  const newcontent = document.createElement("li");
  newcontent.className = "flex justify-between items-center";

  // text
  newcontent.textContent = content;

  // create delete button
  const dltbutton = document.createElement("button");
  dltbutton.textContent = "Delete";
  dltbutton.className =
    "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm";

  // attach delete logic
  dltbutton.addEventListener("click", function () {
    newcontent.remove(); // remove its own parent li
  });

  // connect
  newcontent.appendChild(dltbutton); // button INSIDE li
  list.appendChild(newcontent);      // li INSIDE ul

  // cleanup
  inputfield.value = "";
});
