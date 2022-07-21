function startMyDay() {
    console.log("Time for coffee and a shower!");
};

startMyDay()


function favoriteCookie(cookie) {
return `my favorite cookie is ${cookie}`;
};

console.log(favoriteCookie ('chocolate chip'));
console.log(favoriteCookie ('oatmeal raisin'));

function introduce (name, occupation) {
    return `I am ${name}, I am a ${occupation}`;
};


console.log (introduce ("Hafsat", "Lawyer cum Software Engineer"));
console.log(introduce ("Vera", "Doctor"));

function hydrationFeedback() {
    let numGlasses = Number(prompt('How many glasses of water did you have today?'));
        if (numGlasses >= 8) {
            alert ("congratulations!")
         } else if (numGlasses < 8) {
            alert ("Not bad, not bad! Let's try for a bit more tomorrow!");
         }
};

hydrationFeedback()