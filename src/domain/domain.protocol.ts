import { Assistant } from "./assistant.entity";
import { Message } from "./message.entity";

export declare namespace Domain {
  export interface Channel {
    open: (onMessage: (text: string) => string[] | null) => void;
    close: () => void;
    write: (messages: string[] | null) => void;
  }

  export interface Classifier {
    classify: (text: string) => Message;
  }

  export interface Action {
    exec(message: Message, assistant: Assistant): string[];
  }
}
