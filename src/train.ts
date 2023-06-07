import { BayesClassifier } from "natural";
import dataset from "./dataset.json";

function main() {
  const classifier = new BayesClassifier();
  const path = __dirname + "/classifier.json";

  for (const { synonym, intention } of dataset) {
    classifier.addDocument(synonym, intention);
  }

  classifier.train();

  classifier.save(path, function (err, classifier) {
    // the classifier is saved to the classifier.json file!
    if (err) {
      console.error(err);
      return;
    }
    console.log("classifier saved");
  });
}

main();
