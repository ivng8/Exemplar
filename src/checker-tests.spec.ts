// Add your bug descriptions here

import { expect } from 'chai';
import { CheckerFactory } from './checker.factory';

// On line 89 I removed the continue, introducing a bug for the edge case where 
// words with duplicate letters will detect itself as misplaced instead of wrong.
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
  it('looks for correct_indices before looking for found_index', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('hihpy')).to.equal('hi-py');
  });

  // Normal case
  it('a letter displaced but for two different letters', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('paaap')).to.equal('?---?');
  });

  // Normal case
  it('still checks for a displaced letter after one is found', () => {
    let checker = checkerFactory.createChecker('monsters');
    expect(checker.check('monssera')).to.equal('mons?er-');
  });

  // Normal case
  it('makes sure that the result is initialized as all wrong letters', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('aaaaa')).to.equal('-----');
  });

  // Normal case
  it('correctly detects all scrambled letters', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('phiyp')).to.equal('?????');
  });

  // Normal case
  it('makes sure skip_indices adds found_index to avoid repeating indentification', () => {
    let checker = checkerFactory.createChecker('abcdef');
    expect(checker.check('oaapmn')).to.equal('-?----');
  });

  // Normal case
  it('there is a need for 2 of a letter but three appear in the guess so all 3 statuses appear', () => {
    let checker = checkerFactory.createChecker('hello');
    expect(checker.check('lmlpl')).to.equal('?-l--');
  });

  // Normal case
  it('standard case of words with no incorrect letters', () => {
    let checker = checkerFactory.createChecker('mickey');
    expect(checker.check('mikcye')).to.equal('mi????');
  });

  // Normal case
  it('labels letter as wrong because duplicate letter is correct', () => {
    let checker = checkerFactory.createChecker('ramp');
    expect(checker.check('meme')).to.equal('--m-');
  });

  // Normal case
  it('standard case of correct word', () => {
    let checker = checkerFactory.createChecker('watermelon');
    expect(checker.check('watermelon')).to.equal('watermelon');
  });

  // Normal case
  it('only needs two displacements of a duplicate letter', () => {
    let checker = checkerFactory.createChecker('keggle');
    expect(checker.check('ggpogp')).to.equal('??----');
  });

  // Normal case
  it('needing one displacement because one correct letter is detected', () => {
    let checker = checkerFactory.createChecker('keggle');
    expect(checker.check('ggpgoo')).to.equal('?--g--');
  });
});
