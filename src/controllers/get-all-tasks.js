export default function makeGetAllTasks( {listAllTasks} ){
  return async function( httpRequest ){
    try{

      const tasks = await listAllTasks();

      if(tasks.error) throw new Error(tasks.error);

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 200,
        body: tasks
      }
    } catch(e){
      console.error(e);
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
