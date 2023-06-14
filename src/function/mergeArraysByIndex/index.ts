import { IIngredients } from '@/types';

type MergeArrayProps<T> = {
  (FirstArray: Partial<T>[], SecondArray: Partial<T>[]): T[];
};

const mergeArray: MergeArrayProps<IIngredients> = (FirstArray, SecondArray) => {
  return FirstArray.map((item, index) => ({
    ...item,
    ...SecondArray[index]
  }));
};

export { mergeArray };
