import { Assistant, Message } from "./entities";

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
