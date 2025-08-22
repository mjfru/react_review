// console.log("tasks");

// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!;

// Because it could potentially be null...
// btn?.addEventListener();

// Or, use the non-null assertion operator (the exclamation point above):

// btn.disabled = true;

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
	description: string;
	isCompleted: boolean;
};

// Where tasks will be stored:
const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function addTask(task: Task): void {
	tasks.push(task);
	console.log(tasks);
}

taskForm?.addEventListener("submit", (e) => {
	e.preventDefault();
	const taskDescription = formInput?.value;
	if (taskDescription) {
		console.log(taskDescription);
		// Add task to the list:
		const task: Task = {
			description: taskDescription,
			isCompleted: false,
		};
		addTask(task);
		// Render the tasks:
		renderTask(task);
		// Update local storage:
		updateStorage();
		formInput.value = "";
		return;
	}
	alert("Please enter a description of your task.");
});

function renderTask(task: Task): void {
	const taskElement = document.createElement("li");
	taskElement.textContent = task.description;

	// Adding a checkbox:
	const taskCheckbox = document.createElement("input");
	taskCheckbox.type = "checkbox";
	taskCheckbox.checked = task.isCompleted;

	// Toggle checkhox:
	taskCheckbox.addEventListener("change", () => {
		task.isCompleted = !task.isCompleted;
		updateStorage();
	});

	taskElement.appendChild(taskCheckbox);
	taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
	const storedTasks = localStorage.getItem("tasks");
	return storedTasks ? JSON.parse(storedTasks) : [];
}
