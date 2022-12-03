import { createTask } from "./addTask.js";

export const readTasks = () => {
    const list = document.querySelector('[data-list]');

    const TasksList = JSON.parse(localStorage.getItem("tasks")) || [];

    TasksList.forEach((task) => {
        list.appendChild(createTask(task));
    })

};