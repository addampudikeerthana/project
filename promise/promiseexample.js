function getBalance() {
    return new Promise((resolve) => {
       setTimeout(() => {
            resolve(500);
       },3000);
    });
}
getBalance().then((data) => {console.log('Balance:',data)});