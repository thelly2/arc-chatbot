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

  // Greetings
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hello 👋 Welcome to ARC Chatbot. Ask me about ARC blockchain, official links, wallets, bridge, staking, farming, swaps, or how to interact.";
  }

  // What is ARC
  if (
    msg.includes("what is arc") ||
    msg.includes("about arc") ||
    msg.includes("arc blockchain") ||
    msg.includes("tell me about arc")
  ) {
    return "ARC is a blockchain ecosystem where users can explore dApps, bridge assets, swap tokens, stake, farm, and participate in on-chain activities. It is designed to help users interact with decentralized apps, move funds, and grow within the ecosystem. You should replace this with the exact official ARC description from their docs for the most accurate answer.";
  }

  // What can I do on ARC
  if (
    msg.includes("what can i do on arc") ||
    msg.includes("use cases") ||
    msg.includes("what can i do")
  ) {
    return "On ARC, you can usually bridge assets, swap tokens, provide liquidity, farm, stake, mint or trade NFTs (if supported), interact with ecosystem dApps, join quests/campaigns, and explore community tools. Update this answer with the exact ARC ecosystem features.";
  }

  // Platforms / dApps
  if (
    msg.includes("platforms") ||
    msg.includes("dapps") ||
    msg.includes("apps on arc") ||
    msg.includes("where can i interact") ||
    msg.includes("what platforms")
  ) {
    return "Some common platforms to interact with on ARC may include: the official bridge, DEX (swap platform), staking platform, farming/liquidity platform, NFT marketplace (if available), official quest/campaign page, explorer, and ecosystem partner dApps. Replace this with the real ARC platform names and links.";
  }

  // Official links
  if (
    msg.includes("official links") ||
    msg.includes("official link") ||
    msg.includes("links") ||
    msg.includes("website") ||
    msg.includes("official")
  ) {
    return "Official ARC links (edit these with the real ones): Website: https://your-arc-website.com | Docs: https://docs.your-arc-website.com | Bridge: https://bridge.your-arc-website.com | Staking: https://stake.your-arc-website.com | Explorer: https://explorer.your-arc-website.com | Twitter/X: https://x.com/yourarc | Discord: https://discord.gg/yourarc";
  }

  // How to interact
  if (
    msg.includes("how to interact") ||
    msg.includes("steps to interact") ||
    msg.includes("how do i interact") ||
    msg.includes("how can i interact")
  ) {
    return "Steps to interact on ARC: 1) Install a supported wallet like MetaMask. 2) Add the ARC network (if needed). 3) Fund your wallet with supported tokens. 4) Visit the official ARC website. 5) Use the official bridge to move assets to ARC. 6) Swap tokens on the DEX. 7) Provide liquidity if you want. 8) Stake or farm on supported platforms. 9) Explore quests, campaigns, NFTs, or partner dApps. 10) Always use official links only.";
  }

  // Beginner guide
  if (
    msg.includes("beginner guide") ||
    msg.includes("new to arc") ||
    msg.includes("i am new") ||
    msg.includes("how do i start")
  ) {
    return "Beginner guide for ARC: Start by setting up a wallet, connect only to official ARC platforms, bridge a small amount first, test a token swap, learn gas fees, check the explorer for transactions, and avoid clicking random links from strangers. Always verify links from the official website, docs, X/Twitter, or Discord.";
  }

  // Wallet
  if (
    msg.includes("wallet") ||
    msg.includes("which wallet") ||
    msg.includes("supported wallet")
  ) {
    return "To use ARC, you usually need a compatible wallet such as MetaMask or another supported EVM wallet (if ARC is EVM-compatible). Check the official ARC docs to confirm the exact supported wallets and network setup.";
  }

  // Add network
  if (
    msg.includes("add network") ||
    msg.includes("arc rpc") ||
    msg.includes("network details") ||
    msg.includes("rpc")
  ) {
    return "To add ARC network, you normally need: Network Name, RPC URL, Chain ID, Currency Symbol, and Block Explorer URL. Please update this section with the exact ARC official RPC details from the docs.";
  }

  // Bridge
  if (
    msg.includes("bridge") ||
    msg.includes("how to bridge") ||
    msg.includes("bridge assets")
  ) {
    return "How to bridge to ARC: 1) Visit the official bridge. 2) Connect your wallet. 3) Select source network. 4) Select ARC as destination network. 5) Choose token and amount. 6) Approve token if needed. 7) Confirm bridge transaction. 8) Wait for confirmation. 9) Check your balance on ARC after completion.";
  }

  // Swap
  if (
    msg.includes("swap") ||
    msg.includes("dex") ||
    msg.includes("trade token")
  ) {
    return "How to swap on ARC: 1) Open the official ARC DEX. 2) Connect wallet. 3) Select token you want to swap from. 4) Select token you want to receive. 5) Enter amount. 6) Approve token if needed. 7) Review slippage and fees. 8) Confirm swap. 9) Wait for the transaction to complete.";
  }

  // Staking
  if (
    msg.includes("stake") ||
    msg.includes("staking")
  ) {
    return "How to stake on ARC: 1) Visit the official staking platform. 2) Connect wallet. 3) Choose the token to stake. 4) Enter amount. 5) Approve token if needed. 6) Confirm staking transaction. 7) Monitor rewards. 8) Claim rewards when available. 9) Check lock periods or unstaking rules before staking.";
  }

  // Farming / LP
  if (
    msg.includes("farm") ||
    msg.includes("farming") ||
    msg.includes("liquidity") ||
    msg.includes("lp")
  ) {
    return "How to farm on ARC: 1) Go to the official farming or liquidity platform. 2) Connect wallet. 3) Choose a liquidity pair. 4) Supply both tokens to create LP tokens. 5) Approve the tokens if needed. 6) Deposit LP tokens into the farm. 7) Start earning rewards. 8) Understand impermanent loss before providing liquidity.";
  }

  // NFT
  if (
    msg.includes("nft") ||
    msg.includes("marketplace")
  ) {
    return "If ARC supports NFTs, you can usually mint, buy, sell, or list NFTs on its official marketplace or partner platforms. Always verify the official marketplace link from ARC docs or official social pages.";
  }

  // Explorer
  if (
    msg.includes("explorer") ||
    msg.includes("check transaction") ||
    msg.includes("tx hash")
  ) {
    return "You can use the ARC block explorer to check wallet activity, token transfers, smart contracts, and transaction status. Update the official explorer link in the official links section for the real ARC explorer.";
  }

  // Safety
  if (
    msg.includes("safe") ||
    msg.includes("security") ||
    msg.includes("avoid scam")
  ) {
    return "Safety tips: Always use official ARC links only, double-check the website URL, never share your seed phrase, test with small funds first, beware of fake Telegram/Discord admins, and avoid random links sent in DMs.";
  }

  // Gas fees
  if (
    msg.includes("gas") ||
    msg.includes("fees") ||
    msg.includes("transaction fee")
  ) {
    return "Every blockchain transaction on ARC may require gas fees. Keep some native token in your wallet for transactions like bridging, swapping, staking, or farming. Check the docs for the exact gas token used on ARC.";
  }

  // Community
  if (
    msg.includes("community") ||
    msg.includes("discord") ||
    msg.includes("twitter") ||
    msg.includes("x account") ||
    msg.includes("telegram")
  ) {
    return "To stay updated, follow ARC's official community channels like Website, Docs, X/Twitter, Discord, and Telegram (if available). Replace the official links section with the real verified links.";
  }

  // Default fallback
  return "Sorry 😅 I don't understand that yet. Try asking: What is ARC? | Official links | How to interact | Platforms on ARC | How to bridge | How to stake | How to farm | Wallet setup";
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
