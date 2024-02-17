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
  private _courseCount = 1;

  readonly city: string = "Bhimavaram";
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}

  private deleteToken() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set courseCount(count: number) {
    this._courseCount = count;
  }
}

const ch = new User("h@h.com", "hitest", "1");

// ch.deleteToken();

// ch.name;
