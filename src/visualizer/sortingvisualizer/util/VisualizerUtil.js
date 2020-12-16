import SortingAlgorithms from '../../algorithm/allSorts';
import SortingAlgorithmsStepByStep from '../../algorithm/stepbysteptemplate/allSortsStepByStep';

export const swap = (firstIdx, secondIdx, arr) => {
  let tmp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = tmp;
};

export const highlight = (firstIdx, secondIdx, arr) => {
  arr[firstIdx].isSwap = true;
  arr[secondIdx].isSwap = true;
};

export const handleSwap = (firstIdx, secondIdx, arr, isSwapOccurring) => {
  let newTempArr = resetArray(arr);
  highlight(firstIdx, secondIdx, newTempArr);
  if (!isSwapOccurring) {
    return newTempArr;
  }
  swap(firstIdx, secondIdx, newTempArr);
  return newTempArr;
};

export const resetArray = (arr) => {
  return arrayCopy(arr).map((x) => {
    let tempArrElement = x;
    tempArrElement.isSwap = false;
    return tempArrElement;
  });
};

export const getAnimationArr = (algo, arrayData) => {
  const sortAlgo = SortingAlgorithms[algo];
  return sortAlgo(arrayCopy(arrayData));
};

export const getStepByStepText = (algo, animationArr, idx, referenceArray) => {
  const sortAlgoStepByStep = SortingAlgorithmsStepByStep[algo];
  return sortAlgoStepByStep(animationArr, idx, referenceArray);
};

const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateArray = (size, visualizerAlgorithm) => {
  let array = [];
  if (isBucketTypeSort(visualizerAlgorithm)) {
    for (let i = 0; i < size; i++) {
      array.push({
        id: i,
        height: generateValue(1, 9),
        isShown: true,
      });
    }
  } else {
    for (let i = 0; i < size; i++) {
      array.push({
        id: i,
        height: generateValue(5, 20),
        isSwap: false,
      });
    }
  }
  return array;
};

export const buckets = [
  { height: 1, count: 0 },
  { height: 2, count: 0 },
  { height: 3, count: 0 },
  { height: 4, count: 0 },
  { height: 5, count: 0 },
  { height: 6, count: 0 },
  { height: 7, count: 0 },
  { height: 8, count: 0 },
  { height: 9, count: 0 },
];

export const isBucketTypeSort = (visualizerAlgorithm) =>
  visualizerAlgorithm === 'Bucket Sort' ||
  visualizerAlgorithm === 'Counting Sort' ||
  visualizerAlgorithm === 'Radix Sort';

export const arrayCopy = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

// this is an auto shifting to ensure everything stays at the center
export const translateXOfVisualizer = (dataSize) => {
  if (dataSize > 12) {
    let singleBlockWidth = 200 / dataSize;
    return (dataSize - 12) * singleBlockWidth;
  }
  return 0;
};
