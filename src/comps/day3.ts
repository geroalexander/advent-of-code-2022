import { readInput } from "./../utils";

export const calculateDay3 = () => {
  console.log("Day 3:\n");
  // console.log(partOne());
  console.log(partTwo());
};

const rawInput = readInput(3).split("\n");

const splitPack = (packs: Array<string>) => {
  return packs.map((pack) => {
    const middle = pack.length / 2;
    return [pack.slice(0, middle), pack.slice(middle, pack.length)];
  });
};

const findDouble = (splitPacks: Array<Array<string>>) => {
  return splitPacks.map((tuple) => {
    const firstPocket = tuple[0].split("");
    const secondPocket = tuple[1];
    let double = "";
    firstPocket.forEach((l, i) => {
      if (secondPocket.includes(l)) {
        double = firstPocket[i];
      }
    });
    return double;
  });
};

const findPriorityValue = (priorityItems: Array<string>) => {
  let charCodeArr: Array<number> = [];
  priorityItems.map((item) => {
    charCodeArr.push(item.charCodeAt(0));
  });

  let sum = 0;
  // UNICODE 16 Value
  // 97 - 122 => a - z (1 - 26)
  // 65 - 90 => A - Z (27 - 57)
  charCodeArr.forEach((val) => {
    if (val >= 97 && val <= 122) {
      sum += val - 96;
      return;
    }
    sum += val - 38;
    return;
  });
  return sum;
};

const partOne = () => {
  const splitPacks = splitPack(rawInput);
  const double = findDouble(splitPacks);
  return findPriorityValue(double);
};

const partTwo = () => {
  return "second part";
};
