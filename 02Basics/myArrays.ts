type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

allUsers.push({ name: "chaitanya", isActive: true });

const superHeros: string[] = [];
// const heroPower: number[] = [];
const heroPower: Array<number> = [];

superHeros.push("spiderman");
heroPower.push(1);

// const mlModels: number[][] = [
//   [255, 255, 255],
//   [123, 18, 244],
// ];

const mlModels: Array<Array<number>> = [
  [255, 255, 255],
  [123, 18, 244],
];

export {};
