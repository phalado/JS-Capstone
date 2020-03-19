import { submitHighScore, getScoreBoard, createGame } from './leaderboardCall-mock';

describe('Test to add a game, add a score to it and request it back', () => {
  test('Add a mock game and receive a message with the id', () => {
    let id = '';
    const result1 = createGame();
    result1.then(answer1 => {
      expect(answer1).toMatch(/(Game with ID).*(added)/);
      // eslint-disable-next-line prefer-destructuring
      id = answer1.split(' ')[3];

      test('Add a record for the previous id', () => {
        const user = 'UserName';
        const score = 5000;
        const result2 = submitHighScore(user, score, id);
        result2.then(answer2 => {
          expect(answer2).toBe('Leaderboard score created correctly.');
        });

        test('Get the record added previously', () => {
          const result3 = getScoreBoard(id);
          result3.then(answer3 => {
            expect(answer3.user).toBe('UserName');
            expect(answer3.score).toBe(5000);
          });
        });
      });
    });
  });
});
