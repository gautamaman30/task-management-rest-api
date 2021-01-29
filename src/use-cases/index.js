import makeAddTask from './add-task.js'
import makeListTask from './list-task.js'
import makeListAllTasks from './list-all-tasks.js'
import makeRemoveTask from './remove-task.js'
import makeUpdateTask from './update-task.js'
import makeTaskEntity from '../tasks/index.js'
import {readFile, updateFile} from '../util/index.js'


const addTask = makeAddTask({readFile, updateFile, makeTaskEntity});
const listTask = makeListTask(readFile);
const listAllTasks = makeListAllTasks(readFile);
const removeTask = makeRemoveTask({readFile, updateFile});
const updateTask = makeUpdateTask({readFile, updateFile});


export {addTask, listTask, listAllTasks, removeTask, updateTask};
