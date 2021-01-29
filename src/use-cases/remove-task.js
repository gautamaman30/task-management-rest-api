export default function makeRemoveTask({readFile, updateFile}){
  return async function({taskid}){
    try{
      const allTasksObj = await readFile();

      if(!allTasksObj) throw new Error('Internal Error');
      if(!allTasksObj[taskid]) throw new Error('Task not found');

      delete allTasksObj[taskid];
      const res = updateFile(allTasksObj);
      return Object.freeze(allTasksObj);
    } catch(e){
      console.error(e.message);
      return {error: e.message};
    }
  }
}
