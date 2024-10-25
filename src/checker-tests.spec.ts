// Add your bug descriptions here

import { expect } from 'chai';
import { CheckerFactory } from './checker.factory';


// On line 79 I removed the fact that skip_indices doesn't push letters that are found,
// introducing a bug for the edge case where letters that are displaced don't get saved
// causing duplicate misplaced letters to all get labeled as displaced.
describe('WordleChecker', () => {
  let checkerFactory: CheckerFactory;
  beforeAll((): void => {
    checkerFactory = new CheckerFactory();
  });

  // Normal case
  it('looks for correct_indices before looking for found_index', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('hihpy')).to.equal('hi-py');
  });

  // Normal case
  it('looks for correct_indices before looking for found_index', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('hihpy')).to.equal('hi-py');
  });

  // Normal case
  it('looks for correct_indices before looking for found_index', () => {
    let checker = checkerFactory.createChecker('hippy');
    expect(checker.check('hihpy')).to.equal('hi-py');
  });

  // Normal case
  it('makes sure a letter found after the fact will still be incorrect instead of displaced', () => {
    let checker = checkerFactory.createChecker('pihpy');
    expect(checker.check('hihpy')).to.equal('-ihpy');
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

  // Normal case
  it('needing one displacement because one correct letter is detected', () => {
    let checker = checkerFactory.createChecker('keggle');
    expect(checker.check('ggpgoo')).to.equal('?--g--');
  });

  // Normal case
  it('makes sure all duplicates are incorrect instead of displaced when they have been filled in', () => {
    let checker = checkerFactory.createChecker('keggle');
    expect(checker.check('geggog')).to.equal('-egg--');
  });
  
  // Normal case
  it('correctly labels duplicates by prioritizing correct then displaced then incorrect from left to right', () => {
    let checker = checkerFactory.createChecker('geeggee');
    expect(checker.check('oggogog')).to.equal('-??-g--');
  });

    // Normal case
    it("preserves cases of the guess and still marks as correct", () => {
      const checker = checkerFactory.createChecker("keg");
      expect(checker.check("kEg")).to.equal("kEg");
    });

    // Normal case
  it("still marks as correct despite difference in case and preserves case of guess", () => {
    const checker = checkerFactory.createChecker("KEG");
    expect(checker.check("keg")).to.equal("keg");
  });

  // Edge case
  it("throws error for guess length less than answer length", () => {
    const checker = checkerFactory.createChecker("kegs");
    expect(() => checker.check("keg")).to.throw(
      "Guesses must be the same length as the secret word (4 letters)"
    );
  });

  // Edge case
  it("throws error for guess length more than answer length", () => {
    const checker = checkerFactory.createChecker("keg");
    expect(() => checker.check("kegs")).to.throw(
      "Guesses must be the same length as the secret word (3 letters)"
    );
  });

  // Edge case
  it("throws error for non-alphabetical characters in guess", () => {
    const checker = checkerFactory.createChecker("keg");
    expect(() => checker.check("k!g")).to.throw(
      "Guesses may only contain alphabetical characters (A-Z a-z)"
    );
  });
});