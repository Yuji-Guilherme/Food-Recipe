import { Meal } from '@/types';

type DataToArray<TData> = (data: TData) => [string, string][];

const dataToArray: DataToArray<Meal> = (data) => Object.entries(data);

export { dataToArray };
