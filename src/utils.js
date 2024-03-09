function getUserInfo(user) {
    const firstName = capitalizeFirstLetter(user.name.first);
    const lastName = capitalizeFirstLetter(user.name.last);
    const age = user.dob.age;
    const city = user.location.city;

    return `Name: ${firstName} ${lastName}; Age: ${age}; City: ${city}`;
}

function capitalizeFirstLetter(word) {
    if (typeof word !== "string") {
        return "";
    }

    const firstLetter = word.at(0);
    const theRest = word.substring(1);
    const result = firstLetter.toUpperCase() + theRest;

    return result;

}


function getRandomNumberFromRange(start, end) {
    const min = Math.ceil(start);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomWord() {
    const words = ["Madness", "What", "Is", "Floor", "Dog", "Nose", "Water"];
    const length = words.length;
    const index = getRandomNumberFromRange(0, length - 1);
    return words[index];
}

function generateId(length = 6) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    let result = "";
    for (let i = 0; i < length; ++i) {
        const index = getRandomNumberFromRange(0, alphabet.length - 1);
        result += alphabet[index];
    }
    return result;
}

module.exports = { getUserInfo, capitalizeFirstLetter, getRandomWord, generateId };