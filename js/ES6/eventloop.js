console.log('golb1');

setImmediate(function () {
    console.log('immediate1');
    process.nextTick(function () {
        console.log('immediate1_nextTick');
    });
    new Promise(function (resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function () {
        console.log('immediate1_then')
    })
});
setTimeout(function () {
    console.log('timeout1');
    process.nextTick(function () {
        console.log('timeout1_nextTick');
    });
    new Promise(function (resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function () {
        console.log('timeout1_then')
    })
});



process.nextTick(function () {
    console.log('glob1_nextTick');
});

new Promise(function (resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function () {
    console.log('glob1_then')
});
setImmediate(function () {
    console.log('immediate2');
    process.nextTick(function () {
        console.log('immediate2_nextTick');
    });
    new Promise(function (resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(function () {
        console.log('immediate2_then')
    })
});
setTimeout(function () {
    console.log('timeout2');
    process.nextTick(function () {
        console.log('timeout2_nextTick');
    });
    new Promise(function (resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function () {
        console.log('timeout2_then')
    })
});

process.nextTick(function () {
    console.log('glob2_nextTick');
});
new Promise(function (resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function () {
    console.log('glob2_then')
});

setImmediate(function () {
    setImmediate(function A() {
        console.log(1);
        //   setImmediate(function B(){console.log(2);});
    });

    setTimeout(function timeout() {
        console.log('TIMEOUT FIRED');
    }, 0);
});
  // 1
  // TIMEOUT FIRED
  // 2