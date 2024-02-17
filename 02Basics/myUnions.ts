let score: number | string = 33;

score = 22;
score = "33";

type User = {
  id: number;
  name: string;
};

type Admin = {
  id: number;
  username: string;
};

let hitesh: User | Admin = { name: "ch", id: 2 };

hitesh = { username: "hir", id: 23 };

// function getDbId(id: number | string) {
//   console.log(`Db id is ${id}`);
// }

getDbId(32);
getDbId("32");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: string[] | number[] = ["1", "2", "3", "4"];
const data4: (string | number)[] = ["1", "2", 3, 4];

let pi: 3.14 = 3.14; // literl type

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "window";
