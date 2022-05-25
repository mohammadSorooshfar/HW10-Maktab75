let promise = new Promise(function(resolve, reject) {
     resolve(1);
     setTimeout(() => resolve(2), 1000);
});
 promise.then(alert);
 // result will be 1 because once promise is resolved or rejected next resolve and reject will be ignored and only first
// one will be executed