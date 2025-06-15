const readline = require("readline-sync");
const fs = require("fs");
const path = require("path");

const { simulateChat } = require("./agent");
const { classifyLead } = require("./classifier");
const { extractMetadata } = require("./extractor");

const config = require("../config/real_estate.json");

// Sample lead
const lead = {
  name: "Rohit Sharma",
  phone: "9876543210",
  source: "Website",
  message: "Hi, I’m interested in buying a property."
};

(async () => {
  const chatTranscript = await simulateChat(lead, config);
  const metadata = extractMetadata(chatTranscript);
  const classification = classifyLead(metadata, config.classification_rules);

  // Save transcript
  fs.writeFileSync(
    path.join(__dirname, "../chats/chat_" + lead.name + ".json"),
    JSON.stringify(chatTranscript, null, 2)
  );

  // Save classification result
  fs.writeFileSync(
    path.join(__dirname, "../metadata/lead_" + lead.name + ".json"),
    JSON.stringify({ classification, metadata }, null, 2)
  );

  console.log(`✅ Lead Status: ${classification}`);
  console.log("📄 Metadata:", metadata);
})();
