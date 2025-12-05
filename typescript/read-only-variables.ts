// Read-only variables in Typescript are used to prevent the value of a variable from being changed after it has been assigned a value.

// Read-only variable example
interface User {
  readonly id: number;
  name: string;
  email: string;
  password: string;
  age?: number;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password123",
  age: 30,
  isActive: true,
};

console.log(user);
