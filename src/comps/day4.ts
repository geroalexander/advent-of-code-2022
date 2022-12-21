import { pipe, S } from "@mobily/ts-belt";
import { readInput } from "./../utils";
export const calculateDay4 = () => {
  console.log("Day 4:\n");
  console.log(partOne());
  //   console.log(partTwo());
};

const rawInput = readInput(99)
  .split("\n")
  .map((el) => el.split(","));

const sortAndSplit = (sets: Array<Array<string>>) => {
  return sets
    .map((set) => set.sort())
    .map((sorted) => sorted.flatMap((section) => section.split("-")));
};

const checkForOverlap = (matrix: Array<Array<string>>) => {
  let count = 0;
  let arr: Array<number> = [];
  console.log(matrix);
  matrix.forEach((row, i) => {
    const rowAsNum = row.map((str) => Number.parseInt(str));
    const [a1, a2, b1, b2] = rowAsNum;
    console.log(b1 <= a2 && b2 <= a2 && b1 >= a1 && b2 <= b2);
    console.log(rowAsNum);
    if (b1 <= a2 && b2 <= a2) {
      arr.push(i);
      count += 1;
    }
  });
  return count;
};

const partOne = () => {
  return pipe(rawInput, sortAndSplit, checkForOverlap);
};
