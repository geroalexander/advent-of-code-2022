import fs from "fs";

export const read = (day: number) => {
  return fs.readFileSync(`${__dirname}/inputs/day${day}.txt`, "utf-8");
};
