export default function makeGetTask( {listTask} ){
  return async function( httpRequest ){
    try{
      if(!httpRequest.params.taskid) throw new Error('Bad Request');

      const task = await listTask({ taskid: httpRequest.params.taskid });

      if(task.error) throw new Error(task.error);

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 200,
        body: task
      }
    } catch(e){
      console.error(e);
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 404,
        body: {
          error: e.message
        }
      }
    }
  }
}
