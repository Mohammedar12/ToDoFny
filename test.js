let card = document.querySelectorAll(".card");
let text = document.querySelector(".text1");
let create = document.querySelectorAll(".create");

create.forEach((btn) => {
  btn.addEventListener("click", () => createClass.input.value);
});

// function creatTask() {
//   elem = document.createElement("div");
//   elem.className = "elme";
//   elem.id = "elem";
//   elem.innerHTML = `  
//     <div class="content">
//         ${text.forEach((txt) => txt.value)}
//       </div>`;

//   card.forEach((crd) => {
//     this.appendChild(elem);
//   });

//   let createNewTaskBtn = document.querySelector("#createNewTaskBtn");
//   createNewTaskBtn.onclick = addToPage;
// }

class CtreatTask {
  constructor(input) {
    this.input = input;
  }
  create() {
    let elem = document.createElement("div");
    elem.className = "elme";
    elem.id = "elem";
    elem.innerHTML = `  
        <div class="content">
            ${this.input.value}
          </div>`;

    card.forEach((crd) => {
        crd.appendChild(elem);
    });
  }
}

let createClass = new CtreatTask(text);

