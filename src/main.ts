import { MyError } from "./util/errors.js";

export const hello = (name: string) => {
  if (name === "foo") {
    throw new MyError("foo is forbidden");
  }
  console.log(`Hello, ${name}!`);
};
