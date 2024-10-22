// Add your bug descriptions here

import { expect } from 'chai';
import { CheckerFactory } from './checker.factory';

// removing continue on 89 will cause it to find letters already correct
// if duplicate caught by test 2
describe('WordleChecker', () => {
  let checkerFactory: CheckerFactory;
  beforeAll((): void => {
    checkerFactory = new CheckerFactory();
  });

  // Normal case
  it('returns the guessed word when it matches the answer', () => {
    let checker = checkerFactory.createChecker('a');
    expect(checker.check('a')).to.equal('a');
  });

  // Normal case
  it('looks for found_index before correct_indices', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('hihpy')).to.equal('hi-py');
  });
});
