const mineflayer = require('mineflayer');
const axios = require('axios');

const SYSTEM_MESSAGE = 'you are a helpful minecraft ai bot named BlockBot';

async function getAIResponse(userPrompt, systemMessage) {
    try {
        const response = await axios.post('https://api.together.xyz/v1/chat/completions', {
            model: "meta-llama/Llama-3-70b-chat-hf",
            max_tokens: 4096,
            temperature: 0.7,
            top_p: 0.7,
            top_k: 50,
            repetition_penalty: 1,
            messages: [
                {
                    content: systemMessage,
                    role: "system"
                },
                {
                    content: userPrompt,
                    role: "user"
                }
            ]
        }, {
            headers: {
                Authorization: 'Bearer your-together.ai-api-key-its-free-to-get-and-use-permanetly'
            }
        });

        const messageContent = response.data.choices[0].message.content;
        return messageContent;
    } catch (error) {
        console.error('An error occurred while fetching the AI response:', error);
        return 'Sorry, I encountered an error while processing your request.';
    }
}

const bot = mineflayer.createBot({
    host: 'localhost', // Change this to your server's address
    port: 25565,       // Change this to your server's port
    username: 'BlockBot' // Change this to the username you want for the bot
});

bot.on('login', () => {
    console.log('Bot has logged in.');
});

bot.on('chat', async (username, message) => {
    if (username === bot.username) return; 

    const userPrompt = `${username} says: ${message}`;
    const aiResponse = await getAIResponse(userPrompt, SYSTEM_MESSAGE);

    const responseMessage = aiResponse.replace('$player', username);

    bot.chat(responseMessage);
});
