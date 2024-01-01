//Find GCD

function findGCD(a, b) {
    // Using the Euclidean algorithm to find GCD
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example numbers
const num1 = 36;
const num2 = 48;

// Finding GCD of num1 and num2
const gcd = findGCD(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${gcd}`);
