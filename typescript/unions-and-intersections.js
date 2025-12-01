"use strict";
/* Unions and Intersections in TypeScript are used to combine types.
They are used to create a type that is a combination of multiple types. */
Object.defineProperty(exports, "__esModule", { value: true });
// Union example 1
const printID1 = (id) => {
    console.log(`ID: ${id}`);
};
printID1("123ABC");
printID1(123);
const printID2 = (id) => {
    console.log(`ID: ${id}`);
};
printID2("123ABC");
printID2(123);
const printUser = (user) => {
    console.log(user.name + " has " + user.points + " points and level " + user.level);
};
printUser({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    level: 1,
    points: 100,
});
//# sourceMappingURL=unions-and-intersections.js.map