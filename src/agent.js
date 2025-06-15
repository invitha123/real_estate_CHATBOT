const readline = require("readline-sync");

async function simulateChat(lead, config) {
  const transcript = [];
  const questions = config.questions;

  let greeting = config.greeting.replace("{{name}}", lead.name);
  console.log("🤖:", greeting);
  transcript.push({ agent: greeting });

  for (const question of questions) {
    console.log("🤖:", question);
    transcript.push({ agent: question });

    const answer = readline.question("👤: ");
    transcript.push({ user: answer });
  }

  return transcript;
}

module.exports = { simulateChat };
