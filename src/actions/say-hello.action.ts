import { Assistant, Message } from "../domain/entities";
import { Domain } from "../domain/domain.protocol";

export class SayHello implements Domain.Action {
  exec(message: Message, assistant: Assistant): string[] {
    return ["Hello, how are you?"];
  }
}
