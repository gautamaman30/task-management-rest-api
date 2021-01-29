export default function makeListAllTasks(readFile){
  return async function(){
    try{
      const allTasksObj = await readFile();

      if(!allTasksObj) throw new Error('Internal Error');
      return Object.freeze(allTasksObj);
    } catch(e){
      console.error(e.message);
      return {error: e.message};
    }
  }
}
