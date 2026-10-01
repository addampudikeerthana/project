let promise = new Promise((resolve, reject)=>
[
    let success=true;
    if(success){
        resolve('0p success');
    }
    else{
        reject('0p failed');
    }
]);
promise.then(data=>console.assertlog(data));