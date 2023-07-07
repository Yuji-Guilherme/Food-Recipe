import { isTypeError } from '@/functions';

import { api } from '@/services/api';

type FetchServiceProps<Data> = [
  url: string,
  dataType: 'meals' | 'categories',
  setLoad: (boolean: boolean | undefined) => void,
  setData: (data: Data[]) => void,
  errorBoundary: (error: unknown) => void,
  controller?: AbortController,
  setError?: () => void,
  fnReset?: () => void
];

async function fetchService<Data>(
  ...[
    url,
    dataType,
    setLoad,
    setData,
    errorBoundary,
    controller,
    setError,
    fnReset
  ]: FetchServiceProps<Data>
) {
  const dataTypes = {
    meals: 'meals',
    categories: 'categories'
  };

  if (fnReset) fnReset();
  setLoad(true);

  try {
    const response = await api.get(url, {
      signal: controller?.signal
    });
    const data = response.data[dataTypes[dataType]];

    if (setError && !data) return setError();
    setLoad(false);
    return setData(data);
  } catch (error) {
    if (isTypeError(error)) return;
    errorBoundary(error);
  }
}

export { fetchService };
