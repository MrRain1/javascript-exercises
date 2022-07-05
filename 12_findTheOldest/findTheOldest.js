const findTheOldest = function(people) {
    const sorted = people.sort((a,b) => {
        const oldestAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const current = getAge(b.yearOfBirth, b.yearOfDeath);
        return oldestAge > current ? -1 : 1;
    });
    return sorted[0];
};

const getAge = function(birth, death){
    const now = new Date();
    if(isNaN(death)){
        death = now.getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
