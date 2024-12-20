// module for parsing query strings, including nested objects and arrays like
// ?foo[bar][0]=baz&foo[bar][1]=quux&corge=grault
export const parse = (qs: string): Record<string, any> => {
  const params = new URLSearchParams(qs);
  const obj: Record<string, any> = {};

  for (const [key, value] of params) {
    const keys = key.split(/\[|\]/).filter(Boolean);
    let current = obj;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const nextKey = keys[i + 1];

      if (nextKey) {
        if (!current[key]) {
          current[key] = isNaN(Number(nextKey)) ? {} : [];
        }

        current = current[key];
      } else {
        if (Array.isArray(current)) {
          current.push(value);
        } else {
          current[key] = value;
        }
      }
    }
  }

  return obj;
}

// module for stringifying query strings, including nested objects and arrays like
// ?foo[bar][0]=baz&foo[bar][1]=quux&corge=grault
export const stringify = (obj: Record<string, any>): string => {
  const params = new URLSearchParams();

  const traverse = (obj: Record<string, any>, prefix: string = '') => {
    for (const key in obj) {
      const value = obj[key];
      const newPrefix = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === 'object') {
        traverse(value, newPrefix);
      } else {
        params.append(newPrefix, value);
      }
    }
  }

  traverse(obj);

  return params.toString();
}

export default {
  parse,
  stringify,
}
