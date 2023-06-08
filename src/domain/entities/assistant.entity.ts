import { Domain } from "../domain.protocol";
import { Message, Session, User } from ".";

interface Props {
  channel: Domain.Channel;
  classifier: Domain.Classifier;
  actions: Map<string, Domain.Action>;
  sessionRepository: Domain.SessionRepository;
}

export class Assistant {
  constructor(private readonly props: Props) {}
  start() {
    this.props.channel.write([
      'Welcome to the Chatbot! Type "exit" to end the conversation.',
    ]);
    this.props.channel.open(this.onMessage.bind(this));
  }
  stop() {
    this.props.channel.close();
  }

  async onMessage(text: string, user: User): Promise<string[]> {
    const message = this.props.classifier.classify(text);
    const session = await this.props.sessionRepository.getActiveSessionByUser(
      user
    );
    session.addMessage(message);
    const result = this.execActions(message, session);
    await this.props.sessionRepository.save(session);
    return result;
  }

  async execActions(message: Message, session: Session): Promise<string[]> {
    const actionName = session.isWaitingForResponse()
      ? session.getLastAction()
      : message.intention;

    const action = this.props.actions.get(actionName);
    if (!action) return [];

    const { messages } = await action.exec(message, session);
    return messages;
  }
}
