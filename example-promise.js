/*
function getTempCallback(location, callback) {
    callback(undefined, 43);
    callback('City not found');
}

getTempCallback('Dushanbe', function (err, temp) {
    if (err) {
        console.log('error: ', err);
    } else {
        console.log('success: ', temp);
    }
});

function getTempPromice(location) {
    return new Promise(function (resolve, reject) {
        resolve(44);
        reject('Cuty not found');
    });
}

getTempPromice('Dushanbe').then(function(temp) {
    console.log('promice success: ' + temp);
}, function(err) {
    console.log('promice error: ' + err);
});
*/


function addPromice (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('One of the parameters is not a number');
        }
    });
}

addPromice(10, 20).then(function(sum) {
    console.log('sum: ', sum);
}, function(err) {
    console.log('error: ', err);
});