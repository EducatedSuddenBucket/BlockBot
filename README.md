# Minecraft AI Chat Bot

This project creates an AI-powered chat bot for Minecraft using Mineflayer and the Together AI API.

## Setup Instructions

1. Install Node.js if you haven't already.

2. Clone this repository or create a new directory for your project.

3. Install the required dependencies:
``` bash
npm install mineflayer axios
```

4. Open the script file and modify the following constants:

- Replace `'your-together.ai-api-key-its-free-to-get-and-use-permanetly'` with your actual [Together AI](https://api.together.ai) API key.
- Update the bot configuration in the `mineflayer.createBot()` function:
  ```javascript
  const bot = mineflayer.createBot({
    host: 'localhost', // Change this to your Minecraft server's address
    port: 25565,       // Change this to your Minecraft server's port
    username: 'BlockBot' // Change this to your desired bot username
  });
  ```

5. Run the bot:
