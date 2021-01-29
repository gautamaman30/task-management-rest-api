export default function makeListTask(readFile){
  return async function({taskid}){
    try{
      const allTasksObj = await readFile();

      if(!allTasksObj) throw new Error('Internal Error');

      const task = allTasksObj[taskid];
      if(!task) throw new Error('Task not found');

      return Object.freeze(task);
    } catch(e){
      console.error(e.message);
      return {error: e.message};
    }
  }
}
