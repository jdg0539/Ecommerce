import { printTasks } from "./ui.js";

const baseURL = 'https://e-commerce-api-academlo.herokuapp.com/api';
let editingID = null;

function getTasks() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const tasks = response.data;
            //console.log(tasks);
            printTasks(tasks);
        })
        .catch(function (error) {
            console.log(error); 
        })
}

function createTask() {
    const newTask = {
        name: document.getElementById('addProduct').value,
        price: document.getElementById('addPrice').value,
        image: document.getElementById('linkImage').value
    }

    axios.post('https://e-commerce-api-academlo.herokuapp.com/api/products', newTask)
        .then(function (response) {
            console.log(response);
            alert('Se creo la tarea correctamente');
            getTasks();
        })
        .catch(function (error) {
            alert('No se pudo crear la tarea');
            console.log(error);
        })
}

function deleteTask(id) {
    const confirmation = confirm('¿Estás seguro de eliminar la tarea?');
    if(!confirmation){
        return
    }
    axios.delete(`${baseURL}/products/${id}`)
        .then(function () {
            alert('La tarea se eliminó correctamente');
            getTasks();
        })
        .catch(function (error) {
            alert('No se pudo eliminar la tarea');
        })
}

function editTask(id) {
    axios.get(`${baseURL}/products/${id}`)
        .then(function (response) {
            editingID = id;
            const task = response.data;
            document.getElementById('editName').value = task.name;
            document.getElementById('newPrice').value = task.price;
            document.getElementById('newLink').value = task.image;
        })
        .catch(function (error) {
            alert('No se pudo cargar la tarea');
        })
}

function updateTask() {
    const taskEdited = {
        name: document.getElementById('editName').value,
        price: document.getElementById('newPrice').value,
        image: document.getElementById('newLink').value
    }
    console.log(taskEdited);
    axios.put(`${baseURL}/products/${editingID}`, taskEdited)
        .then(function (response) {
            alert('Se editó la tarea correctamente');
            getTasks();
        })
        .catch(function (error) {
            alert('No se pudo editar la tarea');
        })
}

export { getTasks, createTask, deleteTask, editTask, updateTask }