
class Task {
    constructor(id, title, desc, category, date) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.category = category;
        this.date = date;
        this.status = "pending";
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title, desc, category, date) {
        let newId = Date.now();
        let task = new Task(newId, title, desc, category, date);
        this.tasks.push(task);
        this.renderTasks();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.renderTasks();
    }

    completeTask(id) {
        let t = this.tasks.find(t => t.id === id);
        t.status = "completed";
        this.renderTasks();
    }

    progressTask(id) {
    let t = this.tasks.find(t => t.id === id);
    if (t) t.status = "progress";
    this.renderTasks();
}

    filterTasks(filterType) {
        if (filterType === "all") return this.tasks;
        return this.tasks.filter(t => t.status === filterType);
    }

    filterCategory(filterType) {
        if (filterType === "all") return this.tasks;
        return this.tasks.filter(t => t.category === filterType);
    }
    updateDashboard() {
    let total = this.tasks.length;
    let completed = this.tasks.filter(t => t.status === "completed").length;
    let pending = this.tasks.filter(t => t.status === "pending").length;
    let progress = this.tasks.filter(t => t.status === "progress").length;

    document.getElementById("totalCount").innerText = total;
    document.getElementById("completedCount").innerText = completed;
    document.getElementById("pendingCount").innerText = pending;
    document.getElementById("progressCount").innerText = progress;
}

    renderTasks() {
        let box = document.getElementById("taskDisplay");
        box.innerHTML = "";

        this.tasks.forEach(task => {
            let card = document.createElement("div");
            card.className = "taskCard";

            card.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.desc}</p>
                <p><strong>Category:</strong> ${task.category}</p>
                <p><strong>Due:</strong> ${task.date}</p>
                <p><strong>Status:</strong> ${task.status}</p>

            <div class="task-actions">
                 <button class="progressBtn" data-id="${task.id}">Progress</button>
                <button class="completeBtn" data-id="${task.id}">Complete</button>
                <button class="deleteBtn" data-id="${task.id}">Delete</button>
            </div>
`;

            box.appendChild(card);

        });

        this.attachButtonEvents();
        this.updateDashboard();  
    }

    attachButtonEvents() {
        document.querySelectorAll(".deleteBtn").forEach(btn => {
            btn.addEventListener("click", () => {
                this.deleteTask(Number(btn.dataset.id));
            });
        });

        document.querySelectorAll(".completeBtn").forEach(btn => {
            btn.addEventListener("click", () => {
                this.completeTask(Number(btn.dataset.id));
            });

        });

        document.querySelectorAll(".progressBtn").forEach(btn => {
    btn.onclick = () => this.progressTask(Number(btn.dataset.id));
});

        
    }

}


let manager = new TaskManager();

document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let cat = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    manager.addTask(title, desc, cat, date);
    

    this.reset();
});




