export default function makePostTask( { addTask} ){
  return async function( httpRequest ){
    try{
      const taskInfo = httpRequest.body;

      const res = await addTask(taskInfo);

      if(res.error) throw new Error(res.error);

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
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
