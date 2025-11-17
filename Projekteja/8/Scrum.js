let draggedTask = null;

// Lisää drag-eventit kaikille tehtäville
function initTasks() {
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        task.addEventListener('dragstart', () => {
            draggedTask = task;
            task.classList.add('dragging');
        });

        task.addEventListener('dragend', () => {
            draggedTask = null;
            task.classList.remove('dragging');
        });
    });
}

// Lisää drag & drop -eventit sarakkeiden sisäosille
function initColumns() {
    const columns = document.querySelectorAll('.column-body');

    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault(); // sallii pudottamisen
            column.classList.add('column-over');
        });

        column.addEventListener('dragleave', () => {
            column.classList.remove('column-over');
        });

        column.addEventListener('drop', () => {
            column.classList.remove('column-over');
            if (draggedTask) {
                column.appendChild(draggedTask);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTasks();
    initColumns();
});
