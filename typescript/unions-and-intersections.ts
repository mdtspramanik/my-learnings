/* Unions and Intersections in TypeScript are used to combine types.
They are used to create a type that is a combination of multiple types. */

// Union example 1
const printID1 = (id: string | number) => {
  console.log(`ID: ${id}`);
};

printID1("123ABC");
printID1(123);

// Union example 2
type IDFieldType = string | number;

const printID2 = (id: IDFieldType) => {
  console.log(`ID: ${id}`);
};

printID2("123ABC");
printID2(123);

// Intersection example
interface UserStats {
  level: number;
  points: number;
}

interface UserIdentity {
  id: number;
  name: string;
  email: string;
}

type User = UserIdentity & UserStats;

const printUser = (user: User): void => {
  console.log(
    user.name + " has " + user.points + " points and level " + user.level
  );
};

printUser({
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  level: 1,
  points: 100,
});
