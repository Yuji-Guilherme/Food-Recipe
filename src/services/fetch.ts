import { api } from '@/services/api';
import { isTypeError } from '@/functions';

type FetchServiceProps<TData> = [
  url: string,
  dataType: 'meals' | 'categories',
  setLoad: (boolean: boolean | undefined) => void,
  setData: (data: TData[]) => void,
  errorBoundary: (error: unknown) => void,
  controller?: AbortController,
  setError?: () => void,
  fnReset?: () => void
];

async function fetchService<TData>(
  ...[
    url,
    dataType,
    setLoad,
    setData,
    errorBoundary,
    controller,
    setError,
    fnReset
  ]: FetchServiceProps<TData>
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
