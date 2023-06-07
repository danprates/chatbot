import { Domain } from "./domain.protocol";
import { Message } from "./message.entity";

interface Props {
  channel: Domain.Channel;
  classifier: Domain.Classifier;
  actions: Map<string, Domain.Action>;
}

export class Assistant {
  private readonly messages: Message[] = [];
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

  onMessage(text: string): string[] | null {
    const message = this.props.classifier.classify(text);
    this.messages.push(message);
    const result = this.execActions(message);
    return result;
  }

  execActions(message: Message): string[] {
    const action = this.props.actions.get(message.intention);
    if (!action) return [];
    return action.exec(message, this);
  }
}
