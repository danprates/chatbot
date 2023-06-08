import { Domain } from "../domain.protocol";
import { Message, Session } from "../entities";

export class SayGoodBye implements Domain.Action {
  exec(message: Message, session: Session): string[] {
    return ["Thank you for using the Chatbot. Goodbye!"];
  }
}
