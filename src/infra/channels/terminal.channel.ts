import readline from "node:readline";
import { Domain } from "../../domain/domain.protocol";
import { User } from "../../domain/entities";

export class Terminal implements Domain.Channel {
  private readonly rl: readline.Interface;
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  open(onMessage: (text: string, user: User) => Promise<string[]>) {
    this.rl.prompt();
    this.rl.on("line", async (userInput: string) => {
      const user = new User(1, "Customer");
      const messages = await onMessage(userInput, user);
      this.write(messages);
      this.rl.prompt();
    });
    this.rl.on("close", () => {
      process.exit(0);
    });
  }
  close() {
    this.rl.close();
  }
  write(messages: string[]) {
    for (const message of messages) {
      console.log("BOT:", message);
    }
  }
}
