import fs from 'fs'
import path from 'path'
const filePath = path.join(process.cwd(),'tasks.txt');


async function readFile(){
  let allTasksObj = await new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, file) => {
      if(err){
        console.error(err);
        reject(err);
      }
      resolve(file.length > 0?JSON.parse(file):{});
    });
  });
  return allTasksObj;
}


function updateFile(allTasksObj){
  let data = JSON.stringify(allTasksObj);
  let writer = fs.createWriteStream(filePath);
  writer.write(data);
  writer.end();
  writer.on("finish", () => {
    console.log(data);
  });
  writer.on("error", (err) => console.log(err));
  return allTasksObj;
}


export {readFile, updateFile};
