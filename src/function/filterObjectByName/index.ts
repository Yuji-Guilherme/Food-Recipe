import { IMeal } from '@/types';

type filterObjByNameProps<Data> = {
  (data: Data, startName: string): { [startName: string]: string }[];
};

const filterObjByName: filterObjByNameProps<IMeal> = (data, startName) => {
  const asArray = Object.entries(data);

  const filtered = asArray.filter(([key, value]) => {
    return (
      key.startsWith(startName) && typeof value === 'string' && value != ''
    );
  }) as [string, string][];

  const objArray = filtered.map((item) => {
    item[0] = startName;
    return Object.fromEntries([item]);
  });

  return objArray;
};

export { filterObjByName };
