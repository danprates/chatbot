import trainedData from "./classifier.json";
import { makeActions } from "./domain/actions";
import { Assistant } from "./domain/entities";
import { Terminal } from "./infra/channels/terminal.channel";
import { Natural } from "./infra/classifiers/natural.classifier";
import { SessionRepositoryMemory } from "./infra/repositories/memory/session.memory";

function main() {
  const classifier = new Natural(trainedData);
  const channel = new Terminal();
  const actions = makeActions();
  const sessionRepository = new SessionRepositoryMemory();

  const assistant = new Assistant({
    channel,
    classifier,
    actions,
    sessionRepository,
  });

  assistant.start();
}

main();
