function printTasks(tasks) {
    // Identificar el contenedor
    const container = document.getElementById('tasks-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < tasks.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-uppercase">${tasks[i].name}</h5>
                            <p>Price: $ ${tasks[i].price}</p>
                            <img src="${tasks[i].image}" class="img-thumbnail">
                            <div class="text-end mt-3">
                                <button class="btn btn-danger" onclick="deleteTask(${tasks[i].id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-primary" onclick="editTask(${tasks[i].id})">
                                    <i class="fas fa-pen"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}
export { printTasks }