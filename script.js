const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];


function renderElements(taskList) {

  let ulTasks = document.querySelector('.tasks__list');
  ulTasks.innerHTML = null;

  for (i = 0; i < taskList.length; i++) {

    ulTasks.append(createTaskItem(taskList[i]));
  }
}

function createTaskItem(taskList) {

  let taskItem = document.createElement('li');
  let taskInfo = document.createElement('div');
  let taskType = document.createElement('span');
  let taskDescription = document.createElement('p');
  let taskButton = document.createElement('button');

  taskInfo.append(taskType, taskDescription);
  taskItem.append(taskInfo, taskButton);

  taskItem.classList.add('task__item');
  taskInfo.classList.add('task-info__container');
  taskType.classList.add('task-type');
  taskDescription.innerText = taskList.title;
  taskButton.classList.add('task__button--remove-task');

  if (taskList.type == 'Urgente') {

    taskType.classList.add('span-urgent');

  } else if (taskList.type == 'Importante') {

    taskType.classList.add('span-important');

  } else {

    taskType.classList.add('span-normal');
  }
  return taskItem;
}

renderElements(tasks);

