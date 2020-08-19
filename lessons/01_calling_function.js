exports.sum = function(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

exports.PI = function() {
    const PI = 3.14;
    console.log(PI);
}

exports.SomeMathObject = function() {
    class SomeMathObject{
        constructor(){
            console.log('Object created');
        }
    }
}