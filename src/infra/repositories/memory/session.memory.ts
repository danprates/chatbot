import { Domain } from "../../../domain/domain.protocol";
import { User, Session } from "../../../domain/entities";

export class SessionRepositoryMemory implements Domain.SessionRepository {
  private readonly sessions: Map<number, Session>;
  constructor() {
    this.sessions = new Map();
  }
  async getActiveSessionByUser(user: User): Promise<Session> {
    const session = this.sessions.get(user.id);
    if (session) return session;

    const newSession = new Session(user);
    this.sessions.set(user.id, newSession);

    return newSession;
  }
  async save(session: Session): Promise<void> {
    this.sessions.set(session.user.id, session);
  }
}
