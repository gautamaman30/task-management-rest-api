export default function makeDeleteTask( {removeTask} ){
  return async function( httpRequest ){
    try{
      if(!httpRequest.params.taskid) throw new Error('Bad Request');

      const res = await removeTask({ taskid: httpRequest.params.taskid });

      if(res.error) throw new Error(res.error);

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 200,
        body: res
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
