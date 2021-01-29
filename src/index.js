import express from 'express'
import makeCallBack from './callback/index.js'
import {getTask, getAllTasks, postTask, putTask, deleteTask} from './controllers/index.js'


const app = express();
app.use(express.json());


app.get('/api/v1/tasks', makeCallBack(getAllTasks));
app.get('/api/v1/task/:taskid', makeCallBack(getTask));
app.post('/api/v1/task', makeCallBack(postTask));
app.put('/api/v1/task/:taskid', makeCallBack(putTask));
app.delete('/api/v1/task/:taskid', makeCallBack(deleteTask));


const port = process.argv[2] || 3000;
app.listen(port, console.log(`Server is running at localhost, port ${port}`));
