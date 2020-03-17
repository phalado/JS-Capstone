function localStoreScore(score) {
  const scr = JSON.stringify(score);
  localStorage.setItem('scores', scr);
}

function getLocalScores() {
  const score = localStorage.getItem('scores');
  return JSON.parse(score);
}

function storeScores(score) {
  const localScore = getLocalScores();
  localScore[0] = score;
  localScore[1] = Math.max(...localScore);
  localStoreScore(localScore);
}

export { localStoreScore, getLocalScores, storeScores };