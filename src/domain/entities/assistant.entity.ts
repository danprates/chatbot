import { Domain } from "../domain.protocol";
import { Message, Session, User } from ".";

interface Props {
  channel: Domain.Channel;
  classifier: Domain.Classifier;
  actions: Map<string, Domain.Action>;
  sessionRepository: Domain.SessionRepository;
}

export class Assistant {
  private session: Session;
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
    return result;
  }

  execActions(message: Message, session: Session): string[] {
    const action = this.props.actions.get(message.intention);
    if (!action) return [];
    return action.exec(message, session);
  }
}
