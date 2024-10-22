
# Homework 3

- **Due: Tuesday, 10/29 at 11:59pm**

In this assignment, you will write functional tests for a Wordle checker, and
your tests will be evaluated against a set of buggy implementations of the checker.
We've provided you with a correct checker implementation, but the specific bugs
you must detect are secret.

This is an individual assignment, but you may seek help about installing and using the TypeScript toolset, or about the TypeScript language itself.
See the section on getting help on the course description web page. Your solution may not depend on any third party libraries other than those provided in the handout archive (you may not `npm install` any *additional packages* to use for this assignment).
You must implement each task entirely in the files (do not create additional source files).

## Starter Code
Please download the starter code from Canvas (hw3-starter.zip).
Extract its contents, enter the `hw3-starter` directory, and run `npm ci`
to install package dependencies.

## Task: Writing Functional Tests (100 points)

### Requirements
- Write a suite of *at least 10* test cases that exercises the full range of behaviors described
  in the `WordleChecker` abstract class in `src/checkers.ts`. 
  You can run your tests locally on the correct implementation by running `npm test`.
  - Do not consider the implementation details of the checker during this phase.
  - Add your tests to the file `src/checker-tests.spec.ts`. 
  - Use the method `checkerFactory.createChecker()` that we have provided to create
    checker instances in your tests. Do NOT construct derived class instances 
    explicitly in your tests.
  - Each test case must target *one* case of *one* behavior described in the 
    abstract class.
  - Each test must be named in a way that makes it clear which behavior 
    is being tested (e.g., "answers are case insensitive" instead of "test 1").
  - Each test must include a comment stating whether it is targeting a "normal"
    case or an "edge" case. "Normal" cases are ones that a wide range of common 
    inputs exercise, whereas "edge" cases are exercised by fewer, more specific 
    scenarios.
- Consider the provided Wordle checker implementation 
  (the class `CorrectChecker` in `src/checkers.ts`), 
  its high-level approach, structure, and source code details.
  - Identify 3 locations in the source code *other than the length and alphabetical checks*
    at the beginning of the `check` method. 
  - For each location, come up with a small change to that part of the source 
    code that would introduce a bug that can only be detected by a test that
    targets that edge case.
    - Do NOT introduce overly-specific bugs such as "if the guess is 'spam', 
      throw an exception." The bugs you introduce should be representative 
      of real bugs that might occur in the implementation 
      (i.e., they can be detected by a thorough test suite).
  - Apply that change to the implementation, and verify that only your tests that
    exercise that behavior detect that test (i.e., those tests fail).
  - At the top of `checker-tests.spec.ts`, add a comment describing the change using
    the following template:
    "On line {line number}, I changed {original} to {new}, introducing a bug
    for the edge case where {describe the edge case}. The bug was detected by
    {number of tests that detected the bug}/{total number of tests} of my tests."
- Continue to add tests using either of the above approaches until your tests detect all of our buggy implementations on Gradescope.

### Submission & Grading
To submit your assignment, run the command `npm run zip` and upload the generated `submission.zip` file to Gradescope.
We will automatically evaluate your tests against a set of buggy Wordle checker implementations.
In order to receive any credit, your tests must all pass when run against the 
correct implementation.
After passing that check, you will be awarded credit for each buggy implementation
your tests detect (80 points total).

We will also grade your tests manually according to the [requirements listed above](#requirements) (20 points total). 

#### Submission Limit

Our goal is for you to think carefully about what tests to write, then write them, then submit them to GradeScope. 
Hence, we are imposing a submission cap for this assignment: you may only submit your code to GradeScope a maximum of 30 times over the duration of this assignment. 
How and when you choose use those 30 attempts is up to you.
If you go beyond 30 submissions, all further attempts will receive a score of 0.
However, you may contact the course staff to activate a previous submission with a non-zero score if that happens.

#### Late Submission Policy

Please be reminded of the course late submisison policy: assignments will be accepted up to 24 hours past the deadline at a penalty of 25%, and not accepted beyond 24 hours past the deadline.

#### Chai (Assertion Library)

[Chai](https://www.chaijs.com/) is a rich assertion library that can be used with different testing frameworks. 
You may use it for assertions in this assignment.
