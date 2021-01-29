export default function makeUpdateTask({readFile, updateFile}){
  return async function(taskInfo){
    try{
      const allTasksObj = await readFile();

      if(!allTasksObj) throw new Error('Internal Error');
      if(!allTasksObj[taskInfo.taskid]) throw new Error('Task not found');

      let tempObj = allTasksObj[taskInfo.taskid];
      for(let key in tempObj){
        if( key !== 'taskid' && taskInfo[key] ){
          tempObj[key] = taskInfo[key];
        }
      }
      allTasksObj[taskInfo.taskid] = tempObj;
      const res = updateFile(allTasksObj);
      return Object.freeze(allTasksObj);
    } catch(e){
      console.error(e.message);
      return {error: e.message};
    }
  }
}
