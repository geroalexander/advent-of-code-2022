import { readInput } from "./../utils";

export const calculate = () => {
  console.log("Day 1:");
  console.log("Part 1", partOne());

  console.log("Part 2", partTwo());
};

const rawInput = readInput(1)
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

const flattenMeAndSort = () => {
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
  return flattened.sort((a: number, b: number) => b - a);
};

const partOne = () => {
  return flattenMeAndSort()[0];
};

const partTwo = () => {
  const arr = flattenMeAndSort();
  let sum = 0;
  arr.slice(0, 3).forEach((cal) => {
    sum += cal;
  });
  return sum;
};
