// FaunaDB typically returns objects that have ref, ts and data keys
// {
//   ref: ...
//   ts: ...
//   data: {...}
// }
//
// But since we won't be sending our data with ref or ts keys, we'll flatten our data

// Recursive function flattenDataKeys
const flattenDataKeys = (obj) => {
  // Check if Obj is an Array
  if (Array.isArray(obj)) {
    return obj.map((item) => flattenDataKeys(item));

    // Check if Obj is an Object
  } else if (typeof obj === "object") {
    // if object has a single key and that key is 'data' and the value is an array
    if (Object.keys(obj).length === 1 && obj.data && Array.isArray(obj.data)) {
      // flatten the array in the value of obj.data
      return flattenDataKeys(obj.data);

      // if object has multiple keys, or doesn't have a data key, or the value under data isn't an array
    } else {
      // iterate through the object's keys
      Object.keys(obj).forEach((key) => {
        // if the key is 'data', iterate further
        if (key === "data") {
          const d = obj[key];
          delete obj.data;

          Object.keys(d).forEach((dataKey) => {
            obj[dataKey] = flattenDataKeys(d[dataKey]);
          });
          // for every other key, flatten
        } else {
          obj[key] = flattenDataKeys(obj[key]);
        }
      });
    }

    return obj;

    // if not array or object, return as is
  } else {
    return obj;
  }
};

const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
};

export { flattenDataKeys, isFunction };
