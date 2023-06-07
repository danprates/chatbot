import { Assistant } from "@/domain/assistant.entity";
import { Domain } from "@/domain/domain.protocol";
import { Message } from "@/domain/message.entity";

export class SayHello implements Domain.Action {
  exec(message: Message, assistant: Assistant): string[] {
    return ["Hello, how are you?"];
  }
}
