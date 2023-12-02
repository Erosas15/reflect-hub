// Example API endpoints using Express
const express = require('express');
const app = express();

// Handle sending a message
app.post('/send-message', async (req, res) => {
  const { senderId, receiverId, content } = req.body;
  await sendMessage(senderId, receiverId, content);
  res.status(200).json({ message: 'Message sent successfully' });
});

// Handle fetching messages
app.get('/get-messages', async (req, res) => {
  const { userId1, userId2 } = req.query;
  const messages = await getMessages(userId1, userId2);
  res.status(200).json(messages);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});