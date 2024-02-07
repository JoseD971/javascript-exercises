const removeFromArray = function(array, rem) {
    var index = array.indexOf(rem);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
