const removeFromArray = function(arr,...target) {
    let newArr=[]
    arr.forEach(e => {
        if (!target.includes(e)) {
            newArr.push(e)
        }
    });
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
