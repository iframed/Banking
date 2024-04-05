import { Cc } from './cc';

describe('Cc', () => {
  it('should create an instance', () => {
    expect(new Cc()).toBeTruthy();
  });
});
