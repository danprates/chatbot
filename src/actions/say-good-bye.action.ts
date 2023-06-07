import { Assistant, Message } from "../domain/entities";
import { Domain } from "@/domain/domain.protocol";

export class SayGoodBye implements Domain.Action {
  exec(message: Message, assistant: Assistant): string[] {
    return ["Thank you for using the Chatbot. Goodbye!"];
  }
}
