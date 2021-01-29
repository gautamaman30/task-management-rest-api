export default function makeTaskEntity({
  description,
  startdate,
  starttime,
  duration,
  editor,
  priority
}){
  let taskid = generateId();

  let errors = [];

  if(!description) errors.push('description is required');
  if(!startdate) errors.push('start date is required');
  if(!starttime) errors.push('start time is required');
  if(!duration) errors.push('duration is required');
  if(!editor) errors.push('editor is required');
  if(!priority) errors.push('priority is required');

  if(errors.length > 0) {
    return {
      error: errors
    }
  }

  return Object.freeze({
    getTaskid: () => taskid,
    getDescription: () => description,
    getStartdate: () => startdate,
    getStarttime: () => starttime,
    getDuration: () => duration,
    getEditor: () => editor,
    getPriority: () => priority
  });
}

function generateId(){
  const str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$#&";
  let id = '';
  while(id.length < 9){
    let tempChar = Math.floor(Math.random()*str.length);
    id += str[tempChar];
  }
  return id;
}
