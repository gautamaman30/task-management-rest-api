export default function makeCallBack(controller){
  return async function(req, res){
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type')
      }
    }

    let httpResponse = {};

    try{
      httpResponse = await controller(httpRequest);
      if(httpResponse.headers){
        res.set(httpResponse.headers);
      }
    } catch(e){
      console.error(e);
    }
    res.status(httpResponse.statusCode);
    res.send(httpResponse.body);
  }
}
