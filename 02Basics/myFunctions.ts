function add(num: number, num2: number): number {
  return num + 2;
}

function getUpper(name: string): string {
  return name.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

function getValue(value: number): boolean | string {
  if (value > 5) {
    return true;
  }
  return "200 ok";
}

const getHello = (s: string): string => {
  return "";
};

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

let res = add(5, 7);
let upres = getUpper("chaitanya");
signUpUser("chaitanya", "e@mail.com", true);
loginUser("chaitanya", "e@mail.com");

const heros: string[] = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

export {};
