🏡 GrowEasy AI Agent – Real Estate Lead Qualifier
A CLI-based real estate chatbot that simulates a WhatsApp-style lead interaction, collects user preferences, and classifies leads as Hot, Cold, or Invalid based on their responses.

💡 Objective
This project simulates a chat assistant that:

Engages a lead in a real estate conversation

Collects location, property type, purpose, budget, and timeline

Classifies the lead for sales prioritization

🚀 How It Works
🧠 Configurable Chat Flow

Questions and classification logic are defined in config/real_estate.json

Dynamically loads and uses them for a tailored conversation

📊 Lead Classification

Hot: All key fields filled

Cold: Missing some key fields or low intent

Invalid: Fake/gibberish inputs

📦 Project Structure
bash
Copy
Edit
groweasy-ai-agent/
├── chats/           # Saved chat logs as JSON
├── config/          # Configuration file (real_estate.json)
├── metadata/        # Optional: store user metadata
├── src/
│   └── index.js     # Main chatbot logic
├── .env             # Placeholder for API keys (if needed)
├── package.json     # Node dependencies and scripts
└── README.md        # Project overview (this file)
🛠️ Tech Stack
Language: JavaScript (Node.js)

Interface: CLI (Command Line)

Logic: Rule-based classification

Storage: JSON file for saving chat history

🧪 Sample Execution
bash
Copy
Edit
node src/index.js
🧾 Example Conversation:

pgsql
Copy
Edit
🤖: Hi Rohit Sharma! I'm your GrowEasy real estate assistant.
🤖: Which city/location are you interested in?
👤: Bangalore
🤖: Are you looking for a flat, villa, or plot?
👤: Flat
🤖: Is it for personal use or investment?
👤: Investment
🤖: What’s your budget?
👤: 5 LPA
🤖: When do you plan to move in?
👤: Immediately

✅ Classification: Hot
📦 Metadata: {
  location: 'Bangalore',
  propertyType: 'Flat',
  purpose: 'Investment',
  budget: '5 LPA',
  timeline: 'Immediately'
}
💾 Output Format
Each session is saved as a JSON file:

📂 chats/Rohit_Sharma_chat.json

json
Copy
Edit
{
  "name": "Rohit Sharma",
  "status": "Hot",
  "metadata": {
    "location": "Bangalore",
    "propertyType": "Flat",
    "purpose": "Investment",
    "budget": "5 LPA",
    "timeline": "Immediately"
  }
}

