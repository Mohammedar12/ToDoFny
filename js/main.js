//? create new task panel

let addNewTaskBtn = document.querySelectorAll("#addNewTask");
let container = document.querySelector(".container");
let closeBg = document.querySelector(".close-bg");
let newTaskPanel;
let reviewPanel;
let taskTitle;
let taskDescrip;

addNewTaskBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target) {
      creatTask();
      newTaskPanel.setAttribute("data-id", e.target.getAttribute("data-id"));
      console.log( e.target.getAttribute("data-id"));
    }
  });
});

function creatTask() {
  closeBg.classList.add("show");
  newTaskPanel = document.createElement("div");
  newTaskPanel.className = "new-task";
  newTaskPanel.id = "newTaskPanel";
  newTaskPanel.innerHTML = `  
  <div class="content">
    <input type="text" name="" id="taskTitle" placeholder="task title">
    <textarea name="" id="taskDescrip"></textarea>

    <div class="date">
      <div class="start_date_box">
        <label for="startDate">Start Date</label>
       <input type="date" class="start_date" id="startDate">
     </div>

     <div class="end_date_box">
      <label for="startDate">End Date</label>
      <input type="date" class="end_date">
    </div>
   </div>

  <!-- timeline -->

  <button class="create-task" id="createNewTaskBtn">Create New Task</button>
  </div>`;

  container.appendChild(newTaskPanel);

  let createNewTaskBtn = document.querySelector("#createNewTaskBtn");
  createNewTaskBtn.onclick = addToPage;
}

function closeCreatePanel() {
  closeBg.classList.remove("show");
  newTaskPanel.remove();
}

closeBg.addEventListener("click", () => closeCreatePanel());
document.addEventListener("keydown", (e) =>
  e.key === "Escape" ? closeCreatePanel() : false
);

//? creat new task

let arryTaks = [];

function addTasksToArray(taskTitle, taskDescrip) {
  const tasks = {
    id: Date.now(),
    title: taskTitle,
    description: taskDescrip,
  };

  arryTaks.push(tasks);
  console.log(tasks);
  console.log(arryTaks);
}

let bodyEmpty = document.querySelector(".body-tasks .empty");
let card1 = document.querySelector(".add-tasks .body-tasks .tasks ");
let card2 = document.querySelector(".task-on-prog .tasks ");

function addToPage(arryTaks) {
  taskTitle = document.querySelector("#taskTitle");
  taskDescrip = document.querySelector("#taskDescrip");

  if (!taskTitle.value == "") {
    if (newTaskPanel.getAttribute("data-id") === "to-do") {
      card1.innerHTML += `

                  <div class="task" id="task">
                    <div class="task-content">
                        ${taskTitle.value}
                    </div>

                    <div class="task-btns">
                        <button class="del" id="deletTask"><i class="fa-solid fa-trash"></i></button>
                        <button class="edit"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                        </div>
                              `;
    }
    if (newTaskPanel.getAttribute("data-id") === "working-on") {
      card2.innerHTML += `

                  <div class="task" id="task">
                    <div class="task-content">
                        ${taskTitle.value}
                    </div>

                    <div class="task-btns">
                        <button class="edit"><i class="fa-solid fa-eye"></i></button>
                        <button class="del" id="deletTask"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        </div>
                              `;
    }
    addTasksToArray(taskTitle.value, taskDescrip.value);
    deletTaskBtn();
    reviewTask();
    closeCreatePanel();
  }

  // if (!bodyTasks.innerHTML == "") {
  //   bodyEmpty.innerHTML = "";
  // }

  // <button class="del"><i class="fa-solid fa-ellipsis-vertical"></i></button>
}

function deletTaskBtn() {
  let deletTask = document.querySelectorAll("#deletTask");

  deletTask.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.remove();
    });
  });
}

function reviewTask() {
  let task = document.querySelectorAll(".body-tasks .task-content");

  task.forEach((review) => {
    review.addEventListener("click", () => {
      closeBg.classList.add("show");
      arryTaks.forEach((taskDev) => {
        reviewPanel = document.createElement("div");
        reviewPanel.className = "review-task";
        reviewPanel.id = "reviewPanel";
        reviewPanel.innerHTML = `
        <div class="content">
          <input type="text" name="" id="taskTitle" placeholder="task title" value="${taskDev.title}" >
          <textarea name="" id="taskDescrip" >${taskDev.description}</textarea>

          <div class="date">
            <div class="start_date_box">
              <label for="startDate">Start Date</label>
             <input type="date" class="start_date" id="startDate">
           </div>

           <div class="end_date_box">
            <label for="startDate">End Date</label>
            <input type="date" class="end_date">
          </div>
         </div>

        <!-- timeline -->

        <button class="save-changes" id="saveChanges">Save Changes</button>
        </div>`;

        container.appendChild(reviewPanel);
      });
    });
  });
}

function closeReviewPanel() {
  closeBg.classList.remove("show");
  reviewPanel.remove();
}

closeBg.addEventListener("click", () => closeReviewPanel());
document.addEventListener("keydown", (e) =>
  e.key === "Escape" ? closeReviewPanel() : false
);

// edit function

// function editTask(taskDev) {
//   // taskTitle = arryTaks[1].title;
//   taskTitle = taskDev.title;

// }

deletTaskBtn()