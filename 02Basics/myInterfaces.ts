interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(Couponname: string, value: number): number;
}

// reopening of interface
interface User {
  githubTokenId: string;
}

// interface extending
interface Admin extends User {
  role: "admin" | "ta" | "learners";
}

const chaitu: User = {
  dbId: 122,
  email: "c@c.com",
  userId: 1,
  githubTokenId: "github",
  startTrail: () => "trail started",
  getCoupon: (name: "chaitu", number: 10) => {
    return 10;
  },
};

const ra: Admin = {
  role: "admin",
  dbId: 132,
  email: "c@c.com",
  userId: 2,
  githubTokenId: "github",
  startTrail: () => "trail started",
  getCoupon: (name: "chaitu", number: 22) => {
    return 22;
  },
};
