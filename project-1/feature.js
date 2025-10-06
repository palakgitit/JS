// Basic Arithmetic Calculator

console.log(` Basic Arithmetic Calculator `);
console.log(` `);


let num1 = 20 , num2 = 30

    console.log(`Addition : ${num1+num2}`)
    console.log(`Substraction : ${num1 - num2}`)
    console.log(`Multiplication : ${num1 * num2}`)
    console.log(`Division : ${num1 / num2}`)


console.log(` `);

// Swapping Program
console.log(`Swapping Program`);
console.log(` `);


    let num_1 = 10 , num_2 = 5 , temp;

    console.log(`The numbers before swap: ${num_1}, ${num_2}`)

    temp = num_1;
    num_1 = num_2;
    num_2 = temp;

console.log(`The numbers after swap: ${num_1}, ${num_2}`)


console.log(` `);

// Grade Calculation (Direct Formula Style)
console.log(`Grade Calculation (Direct Formula Style)`);
console.log(` `);

let grade = "A" , name="palak" , marks=88;

console.log(`Name of student : ${name}`);
console.log(`Grade of student : ${grade}`);
console.log(`Marks of student : ${marks}`);


console.log(` `);

// Bill Calculation 
console.log(` Bill Calculation `);
console.log(` `);

let price = Number (prompt("Enter price: "));
let Qty = Number (prompt("Enter Quantity: "));
let discount = 20 / 100 , total;

total = price * Qty; 
net_Amount = total - (total * discount) ;

console.log(`The total: ${total}`);
console.log(`Discount applied : ${discount}%`);
console.log(`The Net amount: ${net_Amount}`);

console.log(` `);

// Simple Interest

console.log(`Simple Interest`);
console.log(` `);

let S_interest ;


let P = Number (prompt("Enter Principle amount: "));
let R = 12.0; 
let T = Number (prompt("Enter time(year) : "));


S_interest = ( P * R * T ) / 100; 

console.log(`The Principle amount : ${P}`);
console.log(`The Rate of interest : ${R}%`);
console.log(`The time(year) : ${T}`);
console.log(`The Simple interest : ${S_interest}`);

console.log(` `);

// Employee Salary Calculation

console.log(`Employee Salary Calculation`);
console.log(` `);

let Basic=Number(prompt(`The basic salary: `));


    let HRA = (Basic * 20) / 100;
    let DA = (Basic * 30) / 100;

    let gross_Salary = Basic + HRA + DA;

    console.log(`The Basic salary: ${Basic}`);
    console.log(`The  House Rent Allowance: ${HRA}`);
    console.log(`The Dearness Allowance: ${DA}`);
    console.log(`The gross salary: ${gross_Salary}`);





