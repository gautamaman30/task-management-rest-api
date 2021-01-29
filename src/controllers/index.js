import makeGetTask from './get-task.js'
import makeGetAllTasks from './get-all-tasks.js'
import makeDeleteTask from './delete-task.js'
import makePutTask from './put-task.js'
import makePostTask from './post-task.js'
import {addTask, listTask, listAllTasks, removeTask, updateTask} from '../use-cases/index.js'


const getTask = makeGetTask({listTask});
const getAllTasks = makeGetAllTasks({listAllTasks});
const deleteTask = makeDeleteTask({removeTask});
const putTask = makePutTask({updateTask});
const postTask = makePostTask({addTask});


export {getTask, getAllTasks, deleteTask, putTask, postTask};
