import '/index'

describe('Number pad with < 10 number', () => {
  const originalNumber = 5
  it('Without params may put 1 zero before', () => {
    expect(originalNumber.pad()).toEqual('05');
  });

  it('With param = 3 may put 2 zeros before', () => {
    expect(originalNumber.pad(3)).toEqual('005');
  });
});

describe('Number pad with number > 10 and < 100', () => {
  const originalNumber = 55
  it('Without params may not put zeros before', () => {
    expect(originalNumber.pad()).toEqual('55');
  });

  it('With param = 3 may put 1 zero before', () => {
    expect(originalNumber.pad(3)).toEqual('055');
  });
});

describe('Number pad with > 100 number', () => {
  const originalNumber = 210
  it('Without params may not put zeros before', () => {
    expect(originalNumber.pad()).toEqual('10');
  });

  it('With param = 3 may not put zeros before', () => {
    expect(originalNumber.pad(3)).toEqual('210');
  });
});