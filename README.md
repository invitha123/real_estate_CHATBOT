# real_estate_CHATBOT
 GrowEasy AI Agent – Real Estate Lead Qualifier

💡 Objective
This project simulates a WhatsApp-style chat agent that interacts with a lead, asks real estate-related questions, and classifies them as **Hot**, **Cold**, or **Invalid**.

🚀 How It Works

🧠 Configurable Chat Agent
- Pulls business rules and questions from `config/real_estate.json`
- Simulates a text-based conversation
- Extracts metadata from user responses
- Classifies leads using defined rules

📦 Project Structure
groweasy-ai-agent/
├── chats/ # Saved chat files
├── config/ # Industry configuration (real_estate.json)
├── metadata/ # (Optional) Metadata storage
├── src/
│ └── index.js # Main chatbot logic
├── .env # Placeholder for API keys if needed
├── package.json
└── README.md


🛠️ Tech Stack

- **Language**: Node.js
- **Interface**: CLI-based simulated chat
- **Classification Logic**: Rule-based (Hot, Cold, Invalid)

🧪 Sample Execution

node src/index.js
Example conversation:
🤖: Hi Rohit Sharma! I'm your GrowEasy real estate assistant.
🤖: Which city/location are you interested in?
👤: Bangalore
________________________________________
📁 Output Format
JSON file is saved in /chats/, e.g.,
pgsql
CopyEdit
chats/Rohit_Sharma_chat.json
