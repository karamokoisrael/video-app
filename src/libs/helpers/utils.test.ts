import { duplicateObject } from "./utils.helper";

describe("Test utils", () => {
  beforeEach(async () => {});

  test("Test Duplicate Objects. Return different objects", () => {
    const baseValue = 0;
    const baseObject = {
      value: baseValue,
      setValue(value: number) {
        this.value = value;
      },
    };

    const firstValue = 1;
    const secondValue = 2;

    // if(baseValue === firstValue || firstValue === secondValue ) throw new Error();

    const copy1 = duplicateObject(baseObject);
    copy1.setValue(firstValue);

    const copy2 = duplicateObject(baseObject);
    copy2.setValue(secondValue);
    console.log(baseObject.value);
    console.log(copy1.value);
    console.log(copy2.value);
    expect(baseObject.value).toBe(baseValue);
    expect(copy1.value).toBe(firstValue);
    expect(copy2.value).toBe(secondValue);
  });
});
