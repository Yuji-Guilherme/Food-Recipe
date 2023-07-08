import { Ingredient } from '@/types';

type MergeArray<T> = (
  FirstArray: Partial<T>[],
  SecondArray: Partial<T>[]
) => T[];

const mergeArray: MergeArray<Ingredient> = (FirstArray, SecondArray) => {
  return FirstArray.map((item, index) => ({
    ...item,
    ...SecondArray[index]
  }));
};

export { mergeArray };
