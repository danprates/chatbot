import trainedData from "./classifier.json";
import { makeActions } from "./domain/actions";
import { Assistant } from "./domain/entities";
import { Terminal } from "./infra/channels/terminal.channel";
import { Natural } from "./infra/classifiers/natural.classifier";

function main() {
  const classifier = new Natural(trainedData);
  const channel = new Terminal();
  const actions = makeActions();

  const assistant = new Assistant({ channel, classifier, actions });

  assistant.start();
}

main();
