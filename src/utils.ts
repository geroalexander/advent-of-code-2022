import fs from "fs";

export const readInput = (day: number) => {
  return fs.readFileSync(`${__dirname}/inputs/day${day}.txt`, "utf-8");
};
