const findTheOldest = function(arr) {
    return arr.reduce((acc, cur) => {
        if (!("yearOfDeath" in cur)) {
            cur.yearOfDeath = new Date().getFullYear();
        }

        if (acc.yearOfDeath - acc.yearOfBirth < cur.yearOfDeath - cur.yearOfBirth) {
            acc = cur;
        }
        
        return acc;
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
