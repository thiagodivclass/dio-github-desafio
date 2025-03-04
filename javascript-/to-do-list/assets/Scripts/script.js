// const demandas = document.querySelector('#list-container');
// const retorno = document.querySelector('#lista');

// demandas.onsubmit = function (e){
//     e.preventDefalt();
//     const inputS = document.querySelector('#item');
//     addList(inputS.value);
//     demandas.reset();
// };

// function addList(description){
//     const demcontain = document.createElement('div');
//     const novaDem = document.createElement('input');
//     const labelDem = document.createElement('label');
//     const nota = document.createTextNode(description);

//     novaDem.setAttribute('type', 'checkbox');
//     novaDem.setAttribute('name', description);
//     novaDem.setAttribute('id', description);

//     labelDem.setAttribute('for', description);
//     labelDem.appendChild(nota);

//     demcontain.classList.add('list-item');
//     demcontain.appendChild(novaDem);
//     demcontain.appendChild(labelDem);

//     retorno.appendChild(demcontain);




// }





// const form = document.getElementById('task-form');
// const taskList = document.getElementById('tasks');

// form.onsubmit = function (e) {
// 	e.preventDefault();
// 	const inputField = document.getElementById('task-input');
// 	addTask(inputField.value);
// 	form.reset();
// };

// function addTask(description) {
// 	const taskContainer = document.createElement('div');
// 	const newTask = document.createElement('input');
// 	const taskLabel = document.createElement('label');
// 	const taskDescriptionNode = document.createTextNode(description);

// 	newTask.setAttribute('type', 'checkbox');
// 	newTask.setAttribute('name', description);
// 	newTask.setAttribute('id', description);

// 	taskLabel.setAttribute('for', description);
// 	taskLabel.appendChild(taskDescriptionNode);

// 	taskContainer.classList.add('task-item');
// 	taskContainer.appendChild(newTask);
// 	taskContainer.appendChild(taskLabel);

// 	taskList.appendChild(taskContainer);
// }

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();
};

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);
    
    taskLabel.setAttribute('for', description);
    taskLabel.style.marginLeft = '8px'; // Adiciona espaço entre o checkbox e o texto
    taskLabel.appendChild(taskDescriptionNode);

    // Adiciona um evento para riscar o texto quando o checkbox for marcado
    newTask.addEventListener('change', function () {
        if (this.checked) {
            taskLabel.style.textDecoration = 'line-through';
        } else {
            taskLabel.style.textDecoration = 'none';
        }
    });

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}
