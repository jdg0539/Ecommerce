import { getTasks, createTask, deleteTask, editTask, updateTask } from './crud.js'

getTasks();

window.editTask = editTask;
window.createTask = createTask;
window.deleteTask = deleteTask;
window.updateTask = updateTask;