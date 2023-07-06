import { IMeal } from '@/types';
import { partialize, pipe } from '@/functions';
import {
  arrayToObjectKeyArray,
  dataToArray,
  filterArrayByInitialName
} from './subfunctions';

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
