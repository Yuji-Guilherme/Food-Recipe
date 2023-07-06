type filterArrayByInitialNameProps = {
  (name: string, array: [string, string][]): [string, string][];
};

const filterArrayByInitialName: filterArrayByInitialNameProps = (name, array) =>
  array.filter(([key, value]) => {
    return key.startsWith(name) && typeof value === 'string' && value != '';
  });

export { filterArrayByInitialName };
