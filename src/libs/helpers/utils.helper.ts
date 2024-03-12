/* eslint-disable @typescript-eslint/ban-types */

export const safePropertyGetter = (
  elem: any,
  property: string,
  defaultValue = ""
) => {
  if (elem != undefined && elem != null && elem[property] != undefined) {
    return elem[property];
  } else {
    return defaultValue;
  }
};

export const reactHookFormSetValues = (
  object: Record<string, any>,
  setValue: Function,
  acceptedKeys: string | null = null
) => {
  Object.keys(object).forEach((key) => {
    if (acceptedKeys != null) {
      if (!acceptedKeys.includes(key)) return;
    }
    setValue(key, object[key]);
  });
};

export const nullable = <T>(value: any, defaultValue: T) => {
  if (value == null || value == undefined) return defaultValue;
  return value;
};

export function createInstanceOf<T>(type: new (...args: any[]) => T, ...args: any[]): T {
  return new type(...args);
}

export function duplicateObject<T>(object: T): T{
  return Object.assign({}, object) as T;
}
