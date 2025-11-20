/* Type annotations in TypeScript are used to specify the type of a variable, parameter, or return value.
They help to improve code readability and prevent errors due to type mismatch. */

// Variable example
let age: number = 30;
let fullName: string = "John Doe";
let isActive: boolean = true;
let ages: number[] = [1, 2, 3];
let firstName: any = "John";
let lastName: any = "Doe";
let details: any[] = [30, "John Doe", true];

// Function example
const fullNameFunction = (firstName: string, lastName: string): string => {
  return firstName + " " + lastName;
};

console.log(fullNameFunction("John", "Doe"));
