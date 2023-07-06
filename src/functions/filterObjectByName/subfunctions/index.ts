import { IMeal } from '@/types';

type dataToArrayProps<Data> = {
  (data: Data): [string, string][];
};

type filterArrayByInitialNameProps = {
  (name: string, array: [string, string][]): [string, string][];
};

type arrayToObjectKeyArrayProps = {
  (keyName: string, array: [string, string][]): {
    [keyName: string]: string;
  }[];
};

const dataToArray: dataToArrayProps<IMeal> = (data) => Object.entries(data);

const filterArrayByInitialName: filterArrayByInitialNameProps = (name, array) =>
  array.filter(([key, value]) => {
    return key.startsWith(name) && typeof value === 'string' && value != '';
  });

const arrayToObjectKeyArray: arrayToObjectKeyArrayProps = (keyName, array) =>
  array.map((item) => {
    item[0] = keyName;
    return Object.fromEntries([item]);
  });

export { dataToArray, filterArrayByInitialName, arrayToObjectKeyArray };
