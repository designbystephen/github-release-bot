import expect from 'expect';
import { store, compare, read } from '.';

describe('versionCache', () => {
  it('should exist', () => {
    expect(store).toBeDefined();
    expect(read).toBeDefined();
    expect(compare).toBeDefined();
  });

  it('should store a given version string', () => {
    store('1');
    // const cachedVersion = read();

    // expect(cachedVersion).toEqual('1');

    // expect(compare('1')).toEqual(true);
    // expect(compare('2')).toEqual(false);
  });
});
