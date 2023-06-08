import { Domain } from "../domain.protocol";
import { Message, Session } from "../entities";

export class SayGoodBye implements Domain.Action {
  async exec(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    return { session, messages: ["Thank you for using the Chatbot. Goodbye!"] };
  }
}
