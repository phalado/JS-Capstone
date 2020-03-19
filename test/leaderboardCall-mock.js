async function createGame() {
  const game = {
    name: 'Mock Game',
  };
  const post = JSON.stringify(game);
  const address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: post,
  };
  const response = await fetch(address, settings);
  const answer = await response.json();

  return answer;
}

async function submitHighScore(userName, scoreValue, id) {
  const submit = {
    user: userName,
    score: scoreValue,
  };
  const post = JSON.stringify(submit);
  const address = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: post,
  };
  const response = await fetch(address, settings);
  const answer = await response.json();
  return answer;
}

function sorting(obj) {
  const array = [];
  for (let i = 0; i < obj.length; i += 1) {
    array.push([obj[i].score, obj[i].user]);
  }
  return Array.from(array).sort((a, b) => b[0] - a[0]);
}

async function getScoreBoard(id) {
  const address = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(address, settings);
  const answer = await response.json();

  return sorting(answer.result);
}

export { submitHighScore, getScoreBoard, createGame };
