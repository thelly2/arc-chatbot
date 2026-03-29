const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const typingIndicator = document.getElementById("typing-indicator");
const quickButtons = document.querySelectorAll(".quick-btn");

// 🔥 IMPORTANT: Replace these with REAL ARC links
const ARC_LINKS = {
  website: "https://your-arc-website.com",
  docs: "https://docs.your-arc-website.com",
  bridge: "https://bridge.your-arc-website.com",
  staking: "https://stake.your-arc-website.com",
  explorer: "https://explorer.your-arc-website.com",
  twitter: "https://x.com/yourarc",
  discord: "https://discord.gg/yourarc",
  telegram: "https://t.me/yourarc"
};

function addMessage(content, sender, isHTML = false) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);

  if (sender === "bot") {
    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar", "bot-avatar");
    avatarDiv.textContent = "A";
    messageDiv.appendChild(avatarDiv);
  }

  const bubbleDiv = document.createElement("div");
  bubbleDiv.classList.add("bubble");

  if (isHTML) {
    bubbleDiv.innerHTML = content;
  } else {
    bubbleDiv.textContent = content;
  }

  messageDiv.appendChild(bubbleDiv);
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping() {
  typingIndicator.classList.remove("hidden");
  chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTyping() {
  typingIndicator.classList.add("hidden");
}

function getOfficialLinksHTML() {
  return `
    <p><strong>Official ARC Links</strong></p>
    <ul>
      <li><a href="${ARC_LINKS.website}" target="_blank">Website</a></li>
      <li><a href="${ARC_LINKS.docs}" target="_blank">Docs</a></li>
      <li><a href="${ARC_LINKS.bridge}" target="_blank">Bridge</a></li>
      <li><a href="${ARC_LINKS.staking}" target="_blank">Staking</a></li>
      <li><a href="${ARC_LINKS.explorer}" target="_blank">Explorer</a></li>
      <li><a href="${ARC_LINKS.twitter}" target="_blank">Twitter / X</a></li>
      <li><a href="${ARC_LINKS.discord}" target="_blank">Discord</a></li>
      <li><a href="${ARC_LINKS.telegram}" target="_blank">Telegram</a></li>
    </ul>
    <p>⚠️ Please replace these placeholder links in <code>script.js</code> with the real ARC official links.</p>
  `;
}

function getBotReply(message) {
  const msg = message.toLowerCase();

  // Greeting
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return {
      html: `
        <p>Hello 👋 Welcome to <strong>ARC Assistant</strong>.</p>
        <p>I can help you with:</p>
        <ul>
          <li>What ARC blockchain is all about</li>
          <li>Official links</li>
          <li>How to start on ARC</li>
          <li>How to bridge, swap, stake, and farm</li>
          <li>Wallet setup and safety tips</li>
        </ul>
      `
    };
  }

  // What is ARC
  if (
    msg.includes("what is arc") ||
    msg.includes("about arc") ||
    msg.includes("arc blockchain") ||
    msg.includes("tell me about arc")
  ) {
    return {
      html: `
        <p><strong>What is ARC?</strong></p>
        <p>ARC is a blockchain ecosystem where users can explore decentralized applications (dApps), move assets through bridging, swap tokens, provide liquidity, stake, farm, and participate in on-chain activities.</p>
        <p>Think of ARC as a place where users interact with different blockchain tools and platforms inside one ecosystem.</p>
        <p>⚠️ For best accuracy, replace this with the exact official ARC description from ARC docs.</p>
      `
    };
  }

  // What can I do
  if (
    msg.includes("what can i do on arc") ||
    msg.includes("use cases") ||
    msg.includes("what can i do")
  ) {
    return {
      html: `
        <p><strong>What can you do on ARC?</strong></p>
        <ul>
          <li>Bridge assets to ARC</li>
          <li>Swap tokens on a DEX</li>
          <li>Provide liquidity</li>
          <li>Farm for rewards</li>
          <li>Stake supported tokens</li>
          <li>Join campaigns or quests</li>
          <li>Explore partner dApps</li>
          <li>Use the block explorer to track transactions</li>
        </ul>
      `
    };
  }

  // Platforms / dApps
  if (
    msg.includes("platforms") ||
    msg.includes("dapps") ||
    msg.includes("apps on arc") ||
    msg.includes("where can i interact") ||
    msg.includes("what platforms")
  ) {
    return {
      html: `
        <p><strong>Platforms to interact with on ARC</strong></p>
        <ol>
          <li>Official Bridge</li>
          <li>Official DEX / Swap platform</li>
          <li>Staking platform</li>
          <li>Liquidity / Farming platform</li>
          <li>Block Explorer</li>
          <li>NFT marketplace (if supported)</li>
          <li>Quest / campaign page (if available)</li>
          <li>Partner ecosystem dApps</li>
        </ol>
        <p>⚠️ Replace these with the real ARC platform names from the official docs or website.</p>
      `
    };
  }

  // Official links
  if (
    msg.includes("official links") ||
    msg.includes("official link") ||
    msg.includes("links") ||
    msg.includes("website") ||
    msg.includes("official")
  ) {
    return {
      html: getOfficialLinksHTML()
    };
  }

  // How to start / interact
  if (
    msg.includes("how do i start") ||
    msg.includes("how to start") ||
    msg.includes("new to arc") ||
    msg.includes("beginner guide") ||
    msg.includes("how to interact") ||
    msg.includes("steps to interact")
  ) {
    return {
      html: `
        <p><strong>How to start on ARC (Beginner Steps)</strong></p>
        <ol>
          <li>Install a supported wallet (usually MetaMask or another compatible wallet).</li>
          <li>Add the ARC network if needed (RPC, Chain ID, etc.).</li>
          <li>Fund your wallet with supported tokens.</li>
          <li>Visit the official ARC website.</li>
          <li>Use the official bridge to move assets to ARC.</li>
          <li>Try a small swap on the official DEX.</li>
          <li>Explore staking or farming if available.</li>
          <li>Check your transactions on the ARC explorer.</li>
          <li>Join official community channels for updates.</li>
          <li>Always start with small amounts and use official links only.</li>
        </ol>
      `
    };
  }

  // Wallet
  if (
    msg.includes("wallet") ||
    msg.includes("which wallet") ||
    msg.includes("supported wallet")
  ) {
    return {
      html: `
        <p><strong>Wallet Setup for ARC</strong></p>
        <p>ARC usually requires a compatible wallet such as <strong>MetaMask</strong> or another supported wallet (especially if ARC is EVM-compatible).</p>
        <p>You may need:</p>
        <ul>
          <li>Network Name</li>
          <li>RPC URL</li>
          <li>Chain ID</li>
          <li>Currency Symbol</li>
          <li>Block Explorer URL</li>
        </ul>
        <p>⚠️ Get the exact network details from the official ARC docs.</p>
      `
    };
  }

  // Bridge
  if (
    msg.includes("bridge") ||
    msg.includes("how to bridge") ||
    msg.includes("bridge assets")
  ) {
    return {
      html: `
        <p><strong>How to bridge to ARC</strong></p>
        <ol>
          <li>Open the <a href="${ARC_LINKS.bridge}" target="_blank">official ARC Bridge</a>.</li>
          <li>Connect your wallet.</li>
          <li>Select the source network.</li>
          <li>Select ARC as the destination network.</li>
          <li>Choose token and amount.</li>
          <li>Approve the token if needed.</li>
          <li>Confirm the bridge transaction.</li>
          <li>Wait for confirmation.</li>
          <li>Check your wallet balance on ARC after it completes.</li>
        </ol>
      `
    };
  }

  // Swap
  if (
    msg.includes("swap") ||
    msg.includes("dex") ||
    msg.includes("trade token")
  ) {
    return {
      html: `
        <p><strong>How to swap on ARC</strong></p>
        <ol>
          <li>Open the official ARC DEX / swap platform.</li>
          <li>Connect your wallet.</li>
          <li>Select the token you want to swap from.</li>
          <li>Select the token you want to receive.</li>
          <li>Enter the amount.</li>
          <li>Approve token if needed.</li>
          <li>Review price impact, slippage, and fees.</li>
          <li>Confirm the swap.</li>
          <li>Wait for the transaction to complete.</li>
        </ol>
      `
    };
  }

  // Staking
  if (
    msg.includes("stake") ||
    msg.includes("staking")
  ) {
    return {
      html: `
        <p><strong>How to stake on ARC</strong></p>
        <ol>
          <li>Open the <a href="${ARC_LINKS.staking}" target="_blank">official staking platform</a>.</li>
          <li>Connect your wallet.</li>
          <li>Select the token to stake.</li>
          <li>Enter the amount.</li>
          <li>Approve the token if required.</li>
          <li>Confirm the staking transaction.</li>
          <li>Monitor rewards.</li>
          <li>Claim rewards when available.</li>
          <li>Check lock periods or unstaking rules before staking.</li>
        </ol>
      `
    };
  }

  // Farming / LP
  if (
    msg.includes("farm") ||
    msg.includes("farming") ||
    msg.includes("liquidity") ||
    msg.includes("lp")
  ) {
    return {
      html: `
        <p><strong>How to farm on ARC</strong></p>
        <ol>
          <li>Open the official farming or liquidity platform.</li>
          <li>Connect your wallet.</li>
          <li>Choose a liquidity pair.</li>
          <li>Supply both tokens to create LP tokens.</li>
          <li>Approve tokens if needed.</li>
          <li>Deposit LP tokens into the farm.</li>
          <li>Start earning rewards.</li>
          <li>Understand impermanent loss before providing liquidity.</li>
        </ol>
      `
    };
  }

  // Explorer
  if (
    msg.includes("explorer") ||
    msg.includes("check transaction") ||
    msg.includes("tx hash")
  ) {
    return {
      html: `
        <p><strong>ARC Explorer</strong></p>
        <p>You can use the <a href="${ARC_LINKS.explorer}" target="_blank">ARC Explorer</a> to:</p>
        <ul>
          <li>Check transaction status</li>
          <li>View wallet activity</li>
          <li>Track token transfers</li>
          <li>Inspect smart contracts</li>
          <li>Search transaction hashes (TX hash)</li>
        </ul>
      `
    };
  }

  // Safety
  if (
    msg.includes("safe") ||
    msg.includes("security") ||
    msg.includes("avoid scam") ||
    msg.includes("scam")
  ) {
    return {
      html: `
        <p><strong>Safety Tips for ARC</strong></p>
        <ul>
          <li>Only use official ARC links</li>
          <li>Double-check website URLs before connecting wallet</li>
          <li>Never share your seed phrase or private key</li>
          <li>Start with small amounts first</li>
          <li>Ignore random DMs claiming to be support</li>
          <li>Beware of fake Telegram/Discord admins</li>
          <li>Verify announcements from official channels only</li>
        </ul>
      `
    };
  }

  // Community
  if (
    msg.includes("community") ||
    msg.includes("discord") ||
    msg.includes("twitter") ||
    msg.includes("x account") ||
    msg.includes("telegram")
  ) {
    return {
      html: `
        <p><strong>ARC Community</strong></p>
        <p>Stay updated using the official channels:</p>
        <ul>
          <li><a href="${ARC_LINKS.twitter}" target="_blank">Twitter / X</a></li>
          <li><a href="${ARC_LINKS.discord}" target="_blank">Discord</a></li>
          <li><a href="${ARC_LINKS.telegram}" target="_blank">Telegram</a></li>
          <li><a href="${ARC_LINKS.docs}" target="_blank">Docs</a></li>
        </ul>
      `
    };
  }

  // Fallback
  return {
    html: `
      <p>Sorry 😅 I don't understand that yet.</p>
      <p>Try asking:</p>
      <ul>
        <li>What is ARC?</li>
        <li>Official links</li>
        <li>How do I start on ARC?</li>
        <li>How to bridge on ARC?</li>
        <li>How to stake on ARC?</li>
        <li>How to farm on ARC?</li>
        <li>Which wallet should I use?</li>
      </ul>
    `
  };
}

function processMessage(message) {
  addMessage(message, "user");
  userInput.value = "";

  showTyping();

  setTimeout(() => {
    hideTyping();

    const reply = getBotReply(message);
    addMessage(reply.html, "bot", true);
  }, 700);
}

function handleSend() {
  const message = userInput.value.trim();
  if (!message) return;
  processMessage(message);
}

sendBtn.addEventListener("click", handleSend);

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSend();
  }
});

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.getAttribute("data-question");
    processMessage(question);
  });
});
