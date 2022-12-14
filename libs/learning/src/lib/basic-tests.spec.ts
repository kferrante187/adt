describe('Basic Unit Testing With Angular', () => {
  it('Can add two numbers', () => {
    const a = 10,
      b = 20;

    const answer = a + b;

    expect(answer).toBe(30);
  });
});

describe('some wuick typescript stuff', () => {
  it('annotating types in typescript', () => {
    let x: string | number | string[]; // union type.

    x = 'Dog';

    expect(x).toBe('Dog');
    x = 32;

    expect(x).toBe(32);

    x = [
      'dog',
      'cat',
      'mouse',
    ];
  });
});
describe('unknow data', () => {
  it('an example', () => {
    function doIt(thing: { length: unknown }) {
      return thing.length;
    }

    expect(doIt('dog')).toBe(3);
    const words = [
      'bird',
      'nose',
      'cat',
    ];
    expect(doIt(words)).toBe(3);
    const thing = {
      width: 20,
      height: 13,
      length: 18,
    };
    expect(doIt(thing)).toBe(18);
  });
});
