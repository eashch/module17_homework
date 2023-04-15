import {getPercents, reverseString} from "../index.js";

describe("test getPercents(percent, number)", () => {
  const precision = 5;
  const error = "Error: wrong arguments!";
  const completePercent = 20;
  const completeNumber = 100;
  const completeResult = 20;
  it(`1 Complete case: ${completePercent} of ${completeNumber} is around ${completeResult}`, () => {
    expect(getPercents(completePercent, completeNumber)).toBeCloseTo(completeResult, precision);
  });

  const complete2Percent = 5.55;
  const complete2Number = 543.21;
  const complete2Result = 30.148155;
  it(`2 Complete case: ${complete2Percent} of ${complete2Number} is around ${complete2Result}`, () => {
    expect(getPercents(complete2Percent, complete2Number))
      .toBeCloseTo(complete2Result, precision);
  });

  const complete3Percent = 0;
  const complete3Number = 0;
  const complete3Result = 0;
  it(`3 Complete case: ${complete3Percent} of ${complete3Number} is around ${complete3Result}`, () => {
    expect(getPercents(complete3Percent, complete3Number))
      .toBeCloseTo(complete3Result, precision);
  });

  const fail4Percent = Number.NaN;
  const fail4Number = 123;
  it(`4 Fail case: ${fail4Percent} of ${fail4Number} is error`, () => {
    expect(getPercents(fail4Percent, fail4Number))
      .toBe(error);
  });

  const fail5Percent = Number.MAX_VALUE;
  const fail5Number = 123;
  it(`5 Fail case: ${fail5Percent} of ${fail5Number} is error`, () => {
    expect(getPercents(fail5Percent, fail5Number))
      .toBe(error);
  });

  it(`6 Fail case: No arguments`, () => {
    expect(getPercents())
      .toBe(error);
  });

  it(`7 Fail case: strings`, () => {
    expect(getPercents("aaa", "ddd"))
      .toBe(error);
  });

  const complete4Percent = 16;
  const complete4Number = Number.MAX_SAFE_INTEGER;
  const complete4Result = Number.MAX_SAFE_INTEGER * 0.16;
  it(`8 Complete case: ${complete4Percent} of ${complete4Number} is around ${complete4Result}`, () => {
    expect(getPercents(complete4Percent, complete4Number))
      .toBeCloseTo(complete4Result, precision);
  });
});

describe("test reverseString(string)", () => {
  const helloStr = "Hello!";
  const helloReversed = "!olleH";
  const error = "Error: incorrect argument!";
  it(`1 Complete case: ${helloStr} => ${helloReversed}`, () => {
    expect(reverseString(helloStr))
        .toBe(helloReversed);
  });

  const oneLetter = 'a';
  it(`2 Complete case: ${oneLetter} => ${oneLetter}`, () => {
    expect(reverseString(oneLetter))
      .toBe(oneLetter);
  });

  it(`3 Fail case: Empty string`, () => {
    expect(reverseString(""))
      .toBe(error);
  });

  it(`4 Fail case: No agrument`, () => {
    expect(reverseString())
      .toBe(error);
  });

  it(`5 Fail case: Null`, () => {
    expect(reverseString(null))
      .toBe(error);
  });

  it(`6 Fail case: Number(123)`, () => {
    expect(reverseString(123))
      .toBe(error);
  });
});
