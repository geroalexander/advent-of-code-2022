import { A } from "@mobily/ts-belt";
import { readInput } from "./../utils";

export const calculateDay3 = () => {
  console.log("Day 3:\n");
  console.log(partOne());
  //   console.log(partTwo());
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

// const findPriority = ()

const partOne = () => {
  const splitPacks = splitPack(rawInput);
  return findDouble(splitPacks);
};
