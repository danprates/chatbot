const { BayesClassifier } = require("natural");
const raw = require("./classifier.json");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  const classifier = BayesClassifier.restore(raw);

  console.log('Welcome to the Chatbot! Type "exit" to end the conversation.');

  rl.prompt();

  rl.on("line", (userInput) => {
    if (userInput.toLowerCase() === "sair") {
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
