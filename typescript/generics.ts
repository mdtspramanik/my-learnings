/* Generics are a way to create reusable components that can work with different types of data
without having to write the same code over and over again. */

// Generic example
class StorageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItems(item: T): void {
    this.contents.push(item);
  }

  getItems(idx: number): T | undefined {
    return this.contents[idx];
  }
}

const usernames = new StorageContainer<string>();
usernames.addItems("John");
usernames.addItems("Jane");
console.log(usernames.getItems(0));

const userCounts = new StorageContainer<number>();
userCounts.addItems(1);
userCounts.addItems(2);
console.log(userCounts.getItems(0));
