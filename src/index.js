const { BayesClassifier } = require("natural");
const raw = require("./classifier.json");

function main() {
  const classifier = BayesClassifier.restore(raw);

  // now ask it to categorize a document it has never seen before
  const result = classifier.classify("awesome, cool, amazing!! Yay.");

  // => 'positive'
  console.log("result", result);
}

main();
