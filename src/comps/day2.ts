import { readInput } from "./../utils";

export const calculateDay2 = () => {
  console.log("Day 2:\n");
  // console.log(partOne());
  console.log(partTwo());
};

const rawInput = readInput(2)
  .split("\n")
  .map((el) => el.split(" "));

interface GameMap {
  A: number;
  B: number;
  C: number;
  X: number;
  Y: number;
  Z: number;
}

const gameMap: GameMap = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

const modifyRawData = (arr: Array<string[]>): Array<Array<number>> => {
  return arr.map((el) => {
    return el.map((str) => gameMap[str as keyof GameMap]);
  });
};

const partOne = () => {
  const modifedData = modifyRawData(rawInput);
  let myScore = 0;

  modifedData.forEach(([opponentHand, myHand]) => {
    // Player chooses rock - 1
    if (opponentHand === 1) {
      // Tie (I choose rock - 1)
      if (myHand === 1) {
        myScore += myHand + 3;
      }
      // Opponent Win (I choose scissor - 3)
      if (myHand === 3) {
        myScore += myHand;
      }
      // Opponent Loss (I choose paper - 2)
      if (myHand === 2) {
        myScore += myHand + 6;
      }
    }

    // Player chooses paper - 2
    if (opponentHand === 2) {
      // Tie (I choose paper - 2)
      if (myHand === 2) {
        myScore += myHand + 3;
      }
      // Opponent Win (I choose rock - 1)
      if (myHand === 1) {
        myScore += myHand;
      }
      // Opponent Loss (I choose scissor - 3)
      if (myHand === 3) {
        myScore += myHand + 6;
      }
    }

    // Player chooses scissor - 3
    if (opponentHand === 3) {
      // Tie (I choose scissor - 3)
      if (myHand === 3) {
        myScore += myHand + 3;
      }
      // Opponent Win (I choose paper - 2)
      if (myHand === 2) {
        myScore += myHand;
      }
      // Opponent Loss (I choose rock - 1)
      if (myHand === 1) {
        myScore += myHand + 6;
      }
    }
  });

  return myScore;
};

interface Hand {
  A: number;
  B: number;
  C: number;
}

const handShown = {
  A: 1,
  B: 2,
  C: 3,
};

interface FinalRes {
  X: number;
  Y: number;
  Z: number;
}

const finalRes = {
  X: -1,
  Y: 0,
  Z: 1,
};

const modifyRawData2 = (arr: Array<string[]>): Array<Array<number>> => {
  return arr.map(([hand, final]) => {
    return [handShown[hand as keyof Hand], finalRes[final as keyof FinalRes]];
  });
};

const partTwo = () => {
  const secondRound = modifyRawData2(rawInput);
  let myScore = 0;

  secondRound.forEach(([hand, final]) => {
    // Draw
    if (final === 0) {
      myScore += hand + 3;
    }
    // Lose
    if (final === -1) {
      // Opponent chooses Rock (1), I choose Scissor (3)
      if (hand === 1) {
        myScore += 3;
      }
      // Opponent chooses Paper (2), I choose Rock (1)
      if (hand === 2) {
        myScore += 1;
      }
      // Opponent chooses Scissors (3), I choose Paper (2)
      if (hand === 3) {
        myScore += 2;
      }
    }
    // Win
    if (final === 1) {
      // Opponent chooses Rock (1), I choose Paper (2)
      if (hand === 1) {
        myScore += 2 + 6;
      }
      // Opponent chooses Paper (2), I choose Scissor (3)
      if (hand === 2) {
        myScore += 3 + 6;
      }
      // Opponent chooses Scissors (3), I choose Rock (1)
      if (hand === 3) {
        myScore += 1 + 6;
      }
    }
  });

  return myScore;
};
