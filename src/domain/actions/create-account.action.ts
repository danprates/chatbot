import { Domain } from "../domain.protocol";
import { Message, Session } from "../entities";

export class CreateAccount implements Domain.Action {
  private steps: Map<string, Function>;

  constructor() {
    this.steps = new Map();
    this.steps.set("start", this.start);
    this.steps.set("getFirstName", this.getFirstName);
    this.steps.set("getLastName", this.getLastName);
  }

  async exec(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    const stepName = session.isWaitingForResponse()
      ? session.getLastStep()
      : "start";
    const messages = this[stepName](message, session);
    return messages;
  }

  async start(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    session.waitForResponse("createAccount", "getFirstName");
    return {
      session,
      messages: [
        "We are glad that you want to create an account.",
        "First, we need some information",
        "What's your name?",
      ],
    };
  }

  getFirstName(message: Message, session: Session) {
    return ["We need your first name"];
  }

  getLastName(message: Message, session: Session) {
    return ["We need your last name"];
  }
}
