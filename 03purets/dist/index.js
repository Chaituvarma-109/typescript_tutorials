"use strict";
// class User {
//   private name: string;
//   public email: string;
//   readonly city: string = "";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
class User {
  constructor(name, email, userId) {
    this.name = name;
    this.email = email;
    this.userId = userId;
    this._courseCount = 1;
    this.city = "Bhimavaram";
  }
  deleteToken() {
    console.log("Token Deleted");
  }
  get getAppleEmail() {
    return `apple${this.email}`;
  }
  get getCourseCount() {
    return this._courseCount;
  }

  set courseCount(count) {
    this._courseCount = count;
  }
}
const ch = new User("h@h.com", "hitest", "1");
// ch.deleteToken();
// ch.name;
