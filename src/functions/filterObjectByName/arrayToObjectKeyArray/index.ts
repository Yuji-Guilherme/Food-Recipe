type arrayToObjectKeyArrayProps = {
  (keyName: string, array: [string, string][]): {
    [keyName: string]: string;
  }[];
};

const arrayToObjectKeyArray: arrayToObjectKeyArrayProps = (keyName, array) =>
  array.map((item) => {
    item[0] = keyName;
    return Object.fromEntries([item]);
  });

export { arrayToObjectKeyArray };
