export default function makeListAllTasks(readFile){
  return async function({limit}){
    try{
      const allTasksObj = await readFile();

      if(!allTasksObj) throw new Error('Internal Error');

      if(limit){
        let responseObj = {};
        for(let key in allTasksObj){
          if(limit > 0){
            responseObj[key] = allTasksObj[key];
            limit -= 1;
          }
          else {
            break;
          }
        }
        return Object.freeze(responseObj);
      }
      return Object.freeze(allTasksObj);
    } catch(e){
      console.error(e.message);
      return {error: e.message};
    }
  }
}
