import {getNormalizePartOfDate, getNormalizedDate} from './helper';

describe('Helpers test', () => {
  it('getNormalizePartOfDate', () => {
    const digit = Math.floor(Math.random() * 60);

    if (digit < 10) {
      expect(getNormalizePartOfDate(digit)).toEqual('0' + digit);
    } else {
      expect(getNormalizePartOfDate(digit)).toEqual(digit);
    }

  });

  it('getNormalizedDate', () => {
    expect(getNormalizedDate(1573379357612)).toEqual('10.10.2019 18:49:17');
  });
});