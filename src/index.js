const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Load config
const config = require('../config/real_estate.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lead = {
  name: "Rohit Sharma",
  status: "Pending",
  metadata: {}
};

const questions = config.questions;
const rules = config.classificationRules;
let current = 0;

const greeting = config.greeting.replace("{name}", lead.name);
console.log(`🤖: ${greeting}`);

function askNextQuestion() {
  if (current < questions.length) {
    rl.question(`🤖: ${questions[current].text}\n👤: `, (answer) => {
      lead.metadata[questions[current].key] = answer.trim();
      current++;
      askNextQuestion();
    });
  } else {
    classifyLead();
  }
}

function classifyLead() {
  const metadata = lead.metadata;
  const required = rules.hot.requiredFields;
  const allFilled = required.every(field => metadata[field] && metadata[field].length > 0);

  // Gibberish check: simple logic to flag entries with only numbers or nonsense
  const isGibberish = Object.values(metadata).some(value =>
    /^[0-9]+$/.test(value) || /^[a-zA-Z]{1,2}$/.test(value)
  );

  // Low intent check: vague words
  const lowIntentWords = ['just browsing', 'not sure', 'maybe', 'idk', 'random'];
  const isLowIntent = Object.values(metadata).some(value =>
    lowIntentWords.some(word => value.toLowerCase().includes(word))
  );

  if (isGibberish) {
    lead.status = "Invalid";
  } else if (allFilled) {
    lead.status = "Hot";
  } else if (isLowIntent || Object.values(metadata).filter(Boolean).length < questions.length) {
    lead.status = "Cold";
  } else {
    lead.status = "Cold";
  }

  console.log(`\n✅ Classification: ${lead.status}`);
  console.log("📦 Metadata:", lead.metadata);

  const chatDir = path.join(__dirname, '../chats');
  if (!fs.existsSync(chatDir)) {
    fs.mkdirSync(chatDir);
  }

  fs.writeFileSync(
    path.join(chatDir, `${lead.name.replace(/ /g, "_")}_chat.json`),
    JSON.stringify(lead, null, 2)
  );

  rl.close();
}

askNextQuestion();
