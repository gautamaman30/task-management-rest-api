export default function makeAddTask({readFile, updateFile, makeTaskEntity}){
  return async function(taskInfo){
    try{
      const task = makeTaskEntity(taskInfo);
      if(task.error) throw new Error(JSON.stringify(task.error));

      const allTasksObj = await readFile();
      if(!allTasksObj) throw new Error('Internal Error');

      allTasksObj[task.getTaskid()] = {
        taskid: task.getTaskid(),
        description: task.getDescription(),
        startdate: task.getStartdate(),
        starttime: task.getStarttime(),
        duration: task.getDuration(),
        editor: task.getEditor(),
        priority: task.getPriority()
      }
      const res = updateFile(allTasksObj);
      return Object.freeze(allTasksObj);
    } catch(e){
      console.error(e.message);
      return {error: e.message};
    }
  }
}
