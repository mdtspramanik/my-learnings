/* Interface and Types are same in Typescript but interface is used to create a type of an object
and types are used to create a type of a variable or a function. */

// Interface example
interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  age?: number;
  isAdmin: boolean;
  greet(message: string): void;
}

const User: UserInterface = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password123",
  age: 30,
  isAdmin: true,
  greet(message: string) {
    console.log(message + " " + this.name);
  },
};

User.greet("Hello");
