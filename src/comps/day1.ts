import { readInput } from "./../utils";

export const calculate = () => {
  console.log("Day 1:", partOne());
};

const rawInput = readInput(2)
  .split("\n")
  .map((el) => parseInt(el));

const organizeRawData = (arr: number[]): Array<number[]> => {
  let arrOfElves: Array<number[]> = [];
  let curElfCal: number[] = [];
  arr.forEach((el) => {
    // It's a new Elf.
    if (Number.isNaN(el)) {
      arrOfElves.push(curElfCal);
      // Clear the array.
      curElfCal = [];
      return;
    }
    // Not a new Elf.
    curElfCal.push(el);
  });
  return arrOfElves;
};

const flattenMe = () => {
  const raw = organizeRawData(rawInput);
  const flattened = raw.flatMap((section) => {
    if (section.length > 1) {
      let sectionSum = 0;
      section.forEach((num) => {
        sectionSum += num;
      });
      return sectionSum;
    }
    return section;
  });
  return flattened;
};

const partOne = () => {
  const flattened = flattenMe();
  flattened.sort((a: number, b: number) => b - a);
  return flattened[0];
};
