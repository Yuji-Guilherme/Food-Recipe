import { IMeal } from '@/types';

type dataToArrayProps<Data> = {
  (data: Data): [string, string][];
};

const dataToArray: dataToArrayProps<IMeal> = (data) => Object.entries(data);

export { dataToArray };
