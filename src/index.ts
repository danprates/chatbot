import { BayesClassifier } from "natural";
import raw from "./classifier.json";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  const classifier = BayesClassifier.restore(raw as any);

  console.log('Welcome to the Chatbot! Type "exit" to end the conversation.');

  rl.prompt();

  rl.on("line", (userInput) => {
    if (userInput.toLowerCase() === "close") {
      console.log("Thank you for using the Chatbot. Goodbye!");
      rl.close();
    } else {
      const result = classifier.classify(userInput);
      console.log(result);

      rl.prompt();
    }
  });

  rl.on("close", () => {
    process.exit(0);
  });
}

main();
