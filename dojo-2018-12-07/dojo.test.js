function getDigitByChar(char) {
  let result = '';
  const map = [
    ' ',
    '',
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MNO',
    'PQRS',
    'TUV',
    'WXYZ'
  ]

  map.forEach((item, key) => {
    const times = item.indexOf(char) + 1;

    if (times) {
      const digit = String(key);

      for (let a = 0; a < times; a++) {
        result += digit;
      }
    }
  });

  return result;
}

function getDigitsByPhrase(phrase) {
  let result = '';
  let previous = '';

  phrase.split('').forEach((char) => {
    let digits = getDigitByChar(char);

    if (digits[0] === previous) {
      result += '_';
    }

    result += getDigitByChar(char);
    previous = digits[0];
  });

  return result;
}

describe('getDigitsByPhrase', () => {
  it('should return the exact number for the phrase', () => {
    expect(getDigitsByPhrase('SEMPRE ACESSO O DOJOPUZZLES'))
    .toBe('77773367_7773302_222337777_777766606660366656667889999_9999555337777');
  });
});

describe('getDigitByChar', () => {

  it('should return 2 for letter A', () => {
    expect(getDigitByChar('A')).toBe('2');
  });

  it('should return 2 for letter B', () => {
    expect(getDigitByChar('B')).toBe('22');
  });

  it('should return 2 to C', () => {
    expect(getDigitByChar('C')).toBe('222');
  });

  it('should return 3 to D', () => {
    expect(getDigitByChar('D')).toBe('3');
  });

  it('should return 7777 to S', () => {
    expect(getDigitByChar('S')).toBe('7777');
  });

  it('should return 0 to space', () => {
    expect(getDigitByChar(' ')).toBe('0');
  });
});