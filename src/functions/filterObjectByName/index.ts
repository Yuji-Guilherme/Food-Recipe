import { IMeal } from '@/types';
import { partialize, pipe } from '@/functions';
import { dataToArray } from './dataToArray';
import { arrayToObjectKeyArray } from './arrayToObjectKeyArray';
import { filterArrayByInitialName } from './filterArrayByInitialName';

type filterObjByNameProps<Data> = {
  (data: Data, startName: string): { [startName: string]: string }[];
};

const filterObjByName: filterObjByNameProps<IMeal> = (data, startName) => {
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
