import trainedData from "./classifier.json";
import { makeActions } from "./domain/actions";
import { Domain } from "./domain/domain.protocol";
import { Assistant, Session, User } from "./domain/entities";
import { Terminal } from "./infra/channels/terminal.channel";
import { Natural } from "./infra/classifiers/natural.classifier";

function main() {
  const classifier = new Natural(trainedData);
  const channel = new Terminal();
  const actions = makeActions();
  const sessionRepository: Domain.SessionRepository = {
    getActiveSessionByUser: () =>
      Promise.resolve(new Session(new User(1, "Customer"))),
  };

  const assistant = new Assistant({
    channel,
    classifier,
    actions,
    sessionRepository,
  });

  assistant.start();
}

main();
