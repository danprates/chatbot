import { Assistant, Message } from "../entities";
import { Domain } from "../domain.protocol";

export class SayGoodBye implements Domain.Action {
  exec(message: Message, assistant: Assistant): string[] {
    return ["Thank you for using the Chatbot. Goodbye!"];
  }
}
