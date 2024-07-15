// Switch case Statements

// Basic Syntax of switch case Statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// const month = 3 // output => March
// const month = 9 // output => Default Case matched

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;

//     default:
//         console.log("Default Case matched");
//         break;
// }


// const month = "Mar" // output => March
const month = "mar" // output => Default Case matched

switch (month) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("February");
        break;
    case "Mar":
        console.log("March");
        break;
    case "Apr":
        console.log("April");
        break;
    case "May":
        console.log("May");
        break;
    case "Jun":
        console.log("June");
        break;

    default:
        console.log("Default Case matched");
        break;
}
