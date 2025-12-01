"use strict";
/* Interface and Types are same in Typescript but interface is used to create a type of an object
and types are used to create a type of a variable or a function. */
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    age: 30,
    isAdmin: true,
    greet(message) {
        console.log(message + " " + this.name);
    },
};
User.greet("Hello");
//# sourceMappingURL=interfaces-and-types.js.map