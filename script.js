const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);

  const bubbleDiv = document.createElement("div");
  bubbleDiv.classList.add("bubble");
  bubbleDiv.textContent = text;

  messageDiv.appendChild(bubbleDiv);
  chatBox.appendChild(messageDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("what is arc")) {
    return "ARC is a blockchain ecosystem/project. You can customize this answer to match the exact ARC project you want.";
  }

  if (msg.includes("bridge")) {
    return "To bridge assets on ARC, go to the official bridge platform, connect your wallet, choose token and network, then confirm the transaction.";
  }

  if (msg.includes("stake") || msg.includes("staking")) {
    return "To stake on ARC, connect your wallet to the staking platform, choose amount, approve transaction, and confirm staking.";
  }

  if (msg.includes("wallet")) {
    return "Popular wallets usually include MetaMask or compatible EVM wallets. You can update this reply with the exact wallet supported by ARC.";
  }

  if (msg.includes("official link") || msg.includes("website") || msg.includes("official")) {
    return "Add the real ARC official website, docs, X/Twitter, Discord, and bridge links here so users can access them quickly.";
  }

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello 👋 Welcome to ARC Chatbot. Ask me anything about ARC.";
  }

  return "Sorry, I don't understand that yet 😅. You can teach me more by editing script.js and adding more answers.";
}

function handleSend() {
  const message = userInput.value.trim();

  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, "bot");
  }, 500);
}

sendBtn.addEventListener("click", handleSend);

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSend();
  }
});
