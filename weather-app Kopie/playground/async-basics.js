console.log('starting app');

setTimeout(() => {
    console.log("Inside timeout Callback");
}, 2000);

setTimeout(() => {
    console.log("Instant timeout");
}, 0);

console.log("finishing up");
