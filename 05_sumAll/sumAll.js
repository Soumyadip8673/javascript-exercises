const sumAll = function(lower,upper) {
    if (lower<0 || upper < 0 || !Number.isInteger(upper) || !Number.isInteger(lower)) {
        return "ERROR"
    }
    let sum=0
    for (let index = Math.min(upper,lower); index <= Math.max(upper,lower); index++) {
        sum+=index
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
