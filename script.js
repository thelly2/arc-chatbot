const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const typingIndicator = document.getElementById("typing-indicator");
const quickButtons = document.querySelectorAll(".quick-btn");

// ARC Official Links (already updated with real links)
const ARC_LINKS = {
  website: "https://arc.network",
  docs: "https://docs.arc.network",
  bridge: "https://arc.network/ecosystem",
  staking: "https://arc.network/ecosystem",
  explorer: "https://arcexplorer.xyz",
  twitter: "https://x.com/arc",
  discord: "https://discord.gg/arc",
  telegram: "https://t.me/arc"
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
      <li><a href="${ARC_LINKS.bridge}" target="_blank">Ecosystem / Bridge</a></li>
      <li><a href="${ARC_LINKS.staking}" target="_blank">Staking / Ecosystem</a></li>
      <li><a href="${ARC_LINKS.explorer}" target="_blank">Explorer</a></li>
      <li><a href="${ARC_LINKS.twitter}" target="_blank">Twitter / X</a></li>
      <li><a href="${ARC_LINKS.discord}" target="_blank">Discord</a></li>
      <li><a href="${ARC_LINKS.telegram}" target="_blank">Telegram</a></li>
    </ul>
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
        <p>ARC is a blockchain ecosystem where users can explore decentralized applications (dApps), move assets across networks, discover ecosystem tools, and participate in on-chain activities like swapping, staking, farming, and more.</p>
        <p>ARC gives users a place to interact with different blockchain platforms inside one growing ecosystem.</p>
        <p>Learn more on the <a href="${ARC_LINKS.website}" target="_blank">official website</a> or read the <a href="${ARC_LINKS.docs}" target="_blank">docs</a>.</p>
      `
    };
  }

  // What can I do on ARC
  if (
    msg.includes("what can i do on arc") ||
    msg.includes("use cases") ||
    msg.includes("what can i do")
  ) {
    return {
      html: `
        <p><strong>What can you do on ARC?</strong></p>
        <ul>
          <li>Explore the ARC ecosystem</li>
          <li>Discover apps and platforms on ARC</li>
          <li>Bridge assets into the ecosystem</li>
          <li>Swap tokens on supported platforms</li>
          <li>Provide liquidity and farm</li>
          <li>Stake on supported platforms</li>
          <li>Track transactions using the explorer</li>
          <li>Follow official community channels for updates</li>
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
          <li><a href="${ARC_LINKS.bridge}" target="_blank">ARC Ecosystem Page</a> – explore platforms and ecosystem tools</li>
          <li><a href="${ARC_LINKS.bridge}" target="_blank">Bridge / Ecosystem Section</a> – access ecosystem interactions</li>
          <li><a href="${ARC_LINKS.staking}" target="_blank">Staking / Ecosystem Section</a> – access staking-related opportunities</li>
          <li><a href="${ARC_LINKS.explorer}" target="_blank">ARC Explorer</a> – track wallets and transactions</li>
          <li><a href="${ARC_LINKS.docs}" target="_blank">ARC Docs</a> – learn how everything works</li>
        </ol>
        <p>Tip: The ecosystem page is a great place to discover the main platforms to interact with on ARC.</p>
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
          <li>Install a supported wallet (such as MetaMask or another compatible wallet).</li>
          <li>Visit the <a href="${ARC_LINKS.website}" target="_blank">official ARC website</a>.</li>
          <li>Read the <a href="${ARC_LINKS.docs}" target="_blank">ARC docs</a> to understand the ecosystem.</li>
          <li>Open the <a href="${ARC_LINKS.bridge}" target="_blank">ecosystem page</a> to discover platforms and tools.</li>
          <li>Bridge or move assets if needed using supported ecosystem options.</li>
          <li>Try small interactions first before using larger funds.</li>
          <li>Use the <a href="${ARC_LINKS.explorer}" target="_blank">ARC Explorer</a> to track transactions.</li>
          <li>Join the community on <a href="${ARC_LINKS.twitter}" target="_blank">Twitter/X</a>, <a href="${ARC_LINKS.discord}" target="_blank">Discord</a>, and <a href="${ARC_LINKS.telegram}" target="_blank">Telegram</a>.</li>
          <li>Always use official links only.</li>
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
        <p>ARC can usually be explored using a compatible crypto wallet such as <strong>MetaMask</strong> or another supported wallet.</p>
        <p>Before connecting:</p>
        <ul>
          <li>Always use the official ARC website</li>
          <li>Read the docs for supported wallet instructions</li>
          <li>Start with small funds first</li>
          <li>Never share your seed phrase</li>
        </ul>
        <p>Visit the <a href="${ARC_LINKS.docs}" target="_blank">docs</a> for the latest wallet setup information.</p>
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
        <p><strong>How to bridge / access ARC ecosystem tools</strong></p>
        <ol>
          <li>Open the <a href="${ARC_LINKS.bridge}" target="_blank">ARC Ecosystem page</a>.</li>
          <li>Look for the bridge or supported platform listed there.</li>
          <li>Connect your wallet.</li>
          <li>Select the source network and destination if required.</li>
          <li>Choose token and amount.</li>
          <li>Approve token if needed.</li>
          <li>Confirm the transaction.</li>
          <li>Wait for completion and verify it in the <a href="${ARC_LINKS.explorer}" target="_blank">ARC Explorer</a>.</li>
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
          <li>Open the <a href="${ARC_LINKS.bridge}" target="_blank">ARC Ecosystem page</a>.</li>
          <li>Find a supported DEX or swap platform listed there.</li>
          <li>Connect your wallet.</li>
          <li>Select the token you want to swap from.</li>
          <li>Select the token you want to receive.</li>
          <li>Enter the amount.</li>
          <li>Approve the token if required.</li>
          <li>Review slippage and fees.</li>
          <li>Confirm the swap.</li>
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
          <li>Open the <a href="${ARC_LINKS.staking}" target="_blank">ARC Ecosystem / Staking page</a>.</li>
          <li>Find the supported staking platform.</li>
          <li>Connect your wallet.</li>
          <li>Select the token to stake.</li>
          <li>Enter the amount.</li>
          <li>Approve the token if required.</li>
          <li>Confirm the staking transaction.</li>
          <li>Monitor rewards and read any unstaking rules carefully.</li>
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
          <li>Open the <a href="${ARC_LINKS.bridge}" target="_blank">ARC Ecosystem page</a>.</li>
          <li>Find a supported liquidity or farming platform.</li>
          <li>Connect your wallet.</li>
          <li>Choose a liquidity pair if needed.</li>
          <li>Provide liquidity and receive LP tokens.</li>
          <li>Deposit LP tokens into the farm.</li>
          <li>Track rewards carefully.</li>
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
          <li>Inspect contracts</li>
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
          <li>Only use the official website: <a href="${ARC_LINKS.website}" target="_blank">arc.network</a></li>
          <li>Read the docs before interacting</li>
          <li>Never share your seed phrase or private key</li>
          <li>Use small funds first</li>
          <li>Ignore fake support DMs</li>
          <li>Verify links from official Twitter/X, Discord, and Telegram</li>
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
