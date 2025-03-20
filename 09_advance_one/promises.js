// const promiseone = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve();
//     },1000)
// })
// promiseone.then(function(){
//     console.log("promise consumed");
    
// })



// const newpromise = new Promise(function(resolve, reject){
//     let fileloader = false;
//     if(fileloader){
//         resolve('file loaded');
//     }else{
//         reject('file not loaded');
//     }
// });
// newpromise
// .then(value => console.log(value))
// .catch(error => console.log(error))



const promisefive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; 
        if (!error) {
            resolve({ username: "javascript", password: "12345" });
        } else {
            reject('ERROR: user not found');
        }
    }, 1000);
});

async function getuser() {
    try {
        const user = await promisefive;  // ✅ await the promise
        console.log(user);  
    } catch (error) {
        console.log(error);   
    }
}

getuser(); // 👈 Don't forget to call the function!
