// const user: (string | number)[] = ["hi", "hello", 1];
const user: [string, number, boolean] = ["hi", 1, true];

let rgb: [number, number, number] = [2, 34, 156];

type User = [number, string];

const newUser: User = [22, "c@gmail.com"];

newUser[1] = "ch";

newUser.push(false);
