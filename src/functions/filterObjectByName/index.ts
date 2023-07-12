import { Meal } from '@/types';
import { partialize, pipe } from '@/functions';
import { filterArrayByInitialName } from './filterArrayByInitialName';
import { arrayToObjectKeyArray } from './arrayToObjectKeyArray';
import { dataToArray } from './dataToArray';

type FilterObjByName<TData> = (
  data: TData,
  startName: string
) => { [startName: string]: string }[];

const filterObjByName: FilterObjByName<Meal> = (data, startName) => {
  const partialFilterArray = partialize(filterArrayByInitialName, startName);
  const partialObjectArray = partialize(arrayToObjectKeyArray, startName);

  const arrayWithKey = pipe(
    dataToArray,
    partialFilterArray,
    partialObjectArray
  );

  return arrayWithKey(data);
};

export { filterObjByName };
