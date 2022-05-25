// the only difference between these two is that if f1(resolve callback) return promise.reject, first type will
// catch the reject but second one wont and will only call the callback function
// example:
function checkResolve(message) {
    if (message==="wrong")
        return Promise.reject('Invalid!');
    else
        console.log('correct')
}

function error(err) {
    console.log('Error: ', err);
}
Promise.resolve('wrong')
    .then(checkResolve, error);
//[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Invalid!".] {
//   code: 'ERR_UNHANDLED_REJECTION'
// }
Promise.resolve('wrong')
    .then(checkResolve)
    .catch(error);
// 'Error: Invalid!'