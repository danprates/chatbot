import { Message, Session, User } from ".";
import { Domain } from "../domain.protocol";

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
    const result = await this.execAction(message, session);
    await this.props.sessionRepository.save(session);
    return result;
  }

  private async execAction(message: Message, session: Session): Promise<string[]> {
    const actionName = session.isWaitingForReply()
      ? session.getLastAction()
      : message.intention;

    const action = this.props.actions.get(actionName);
    if (!action) return [];

    const { messages } = await action.exec(message, session);
    return messages;
  }
}
