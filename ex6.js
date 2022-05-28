new Promise(function(resolve, reject) {
     setTimeout(() => {
         throw new Error("Whoops!");
         }, 1000);
}).catch(alert);
// .catch wont do anything because the program is crashed before it reach .catch, code inside setTimeout must be in
// different try catch because it happens 1 second after program is started and executor wont catch it errors