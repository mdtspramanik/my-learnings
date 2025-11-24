"use strict";
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