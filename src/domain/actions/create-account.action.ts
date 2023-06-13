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
    const stepName = session.isWaitingForReply()
      ? session.getLastStep()
      : "start";
    const messages = this[stepName](message, session);
    return messages;
  }

  async start(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    session.waitForReply("createAccount", "getFirstName");
    return {
      session,
      messages: [
        "We are glad that you want to create an account.",
        "First, we need some information",
        "What's your name?",
      ],
    };
  }

  async getFirstName(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    session.setVariable("firstName", message.text);
    session.waitForReply("createAccount", "getLastName");
    return { session, messages: ["What's your last name?"] };
  }

  async getLastName(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    session.setVariable("lastName", message.text);
    session.waitForReply("createAccount", "getEmail");
    return { session, messages: ["What's your email?"] };
  }

  async getEmail(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    session.setVariable("email", message.text);
    session.removeWaitForReply();
    return {
      session,
      messages: [
        "Awesome! Your account was created",
        "Now you have full access to the bot",
      ],
    };
  }
}
