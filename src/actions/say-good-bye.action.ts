import { Assistant } from "@/domain/assistant.entity";
import { Domain } from "@/domain/domain.protocol";
import { Message } from "@/domain/message.entity";

export class SayGoodBye implements Domain.Action {
  exec(message: Message, assistant: Assistant): string[] {
    return ["Thank you for using the Chatbot. Goodbye!"];
  }
}
