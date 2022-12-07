import { readInput } from "./../utils";

export const calculate = () => {
  console.log("Day 1:", findMostCals(rawInput));
};

const rawInput = readInput(1)
  .split("\n")
  .map((el) => parseInt(el));

const findMostCals = (arr: number[]) => {
  let maxCal = 0;
  let curCal = 0;
  arr.forEach((el) => {
    // If element is `NaN`, check if currentCals is larger than maxCals and replace if nessesary.
    if (Number.isNaN(el)) {
      if (curCal >= maxCal) {
        maxCal = curCal;
      }
      // If this elf is not carrying more cals than the maxCal count then reset the currentCals to 0.
      curCal = 0;
      return;
    }
    // Otherwise add el to curCal.
    curCal += el;
  });

  return maxCal;
};
