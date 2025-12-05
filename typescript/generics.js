"use strict";
/* Generics are a way to create reusable components that can work with different types of data
without having to write the same code over and over again. */
Object.defineProperty(exports, "__esModule", { value: true });
// Generic example
class StorageContainer {
    contents;
    constructor() {
        this.contents = [];
    }
    addItems(item) {
        this.contents.push(item);
    }
    getItems(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItems("John");
usernames.addItems("Jane");
console.log(usernames.getItems(0));
const userCounts = new StorageContainer();
userCounts.addItems(1);
userCounts.addItems(2);
console.log(userCounts.getItems(0));
//# sourceMappingURL=generics.js.map