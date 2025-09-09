const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true; 
        if (operationSuccessful) {
            resolve("Operación exitosa!");
        } else {
            reject("Hubo un error en la operación.");
        }
    }, 2000);
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Operación finalizada.");
    });
 