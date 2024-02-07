const repeatString = function(string, num) {
    var complete_string = "";
    if (num == 0) {
        return "Error, enter a number greater than zero"
    } else {
        for (let i = 0; i < num; i++) {
            complete_string = complete_string + string;
        } 
    }
    return complete_string;
};

// Do not edit below this line
module.exports = repeatString;
