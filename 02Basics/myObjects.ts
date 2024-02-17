// const User = {
//   name: "chaitanya",
//   email: "c@mail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }): {} {
//   return {};
// }

// function userCreation(): { name: string; isPaid: boolean } {
//   // returning object
//   return { name: "ch", isPaid: false };
// }

// createUser({ name: "chaitanya", isPaid: false });
// userCreation();

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "chaitanya", email: "c@mail.com", isActive: true };
// }

// createUser({ name: "chaitanya", email: "c@mail.com", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

let myUser: User = {
  _id: "123",
  name: "h",
  email: "h@h.com",
  isActive: true,
};

myUser.email = "h@gmail.com";

export {};
