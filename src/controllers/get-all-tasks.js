export default function makeGetAllTasks( {listAllTasks} ){
  return async function( httpRequest ){
    try{
      let limit = null;
      if(httpRequest.query.limit && !Number.isNaN(parseInt(httpRequest.query.limit))){
        limit = httpRequest.query.limit;
      }
      const tasks = await listAllTasks({limit});

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
