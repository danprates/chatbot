import { Message, Session, User } from "./entities";

export declare namespace Domain {
  export interface Channel {
    open: (onMessage: (text: string, user: User) => Promise<string[]>) => void;
    close: () => void;
    write: (messages: string[] | null) => void;
  }

  export interface Classifier {
    classify: (text: string) => Message;
  }

  export interface Action {
    exec(
      message: Message,
      session: Session
    ): Promise<{ session: Session; messages: string[] }>;
  }

  export interface SessionRepository {
    getActiveSessionByUser(user: User): Promise<Session>;
  }
}
