const fs = require('fs');

// fs.readFile('./test_file/myintro.txt','utf8',function(err,data){

//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });

const promisifyReadFile=(filePath, encoding)=>{
    return new Promise((resolve, reject)=>{
      fs.readFile(filePath,encoding, (err, data)=>{
          if(err){
              reject(err);
          }else{
              resolve(data);
          }
      })
    });
}
//normal promise way
promisifyReadFile('./test_file/myintro.txt','utf8').then((data)=>{
    console.log("File content:",data);
}).catch((err)=>{
    console.log("Error:",err);
})

//async await way
const readFile=async(filePath, encoding)=>{
    try{
        let result = await promisifyReadFile(filePath, encoding)
    console.log(result)
    }catch(e){
        console.log(e)
    }
}
    
// fs.readFile(filePath, encoding, callbackFunction)