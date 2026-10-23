function area(a) {
    return "Area of rectangle = " + a * a;
}

console.log(area(3));

const Voter = (age) => {
    if (age >= 18) {
       return console.log("You are an adult!");
    } else {
       return console.log("You are a minor!");
    }
}

Voter(18)

