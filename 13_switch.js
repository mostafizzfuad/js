// Day Spelling Program
const day = "monday";

switch (day) {
    case "saturday":
        console.log("Today is " + day);
        break;

    case "sunday":
        console.log("Today is " + day);
        break;

    case "monday":
        console.log("Today is " + day);
        break;

    case "tuesday":
        console.log("Today is " + day);
        break;

    case "wednesday":
        console.log("Today is " + day);
        break;

    case "thursday":
        console.log("Today is " + day);
        break;

    case "friday":
        console.log("Today is " + day);
        break;

    default:
        console.log("Invalid Input");
}

// Digit Spelling Program
const digit = 6;
switch (digit) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid Input");
}

// check a letter vowel or consonant
let letter = "v";
letter = letter.toLowerCase();

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel");
        break;

    default:
        console.log("consonant");
        break;
}
