async function fetchResponse(message) {
  // Show typing indicator
  document.getElementById("typing-indicator").style.display = "block";

  try {
    const response = await fetch("/api/message/get-bot-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: message }),
    });

    const data = await response.json();

    document.getElementById("messages").innerHTML += `
      <div class="message bot-message"><b>ChatBot:</b> ${data}</div>`;
  } catch (error) {
    console.error("Error fetching bot response:", error);
    document.getElementById("messages").innerHTML += `
      <div class="message bot-message error"><b>ChatBot:</b> Error getting response.</div>`;
  }
  // Hide typing indicator
  document.getElementById("typing-indicator").style.display = "none";
}

function sendMessage() {
  const message = document.getElementById("chat-input").value;
  if (!message.trim()) return;

  // Display user message
  document.getElementById(
    "messages"
  ).innerHTML += `<div class="message user-message"><b>You:</b> ${message}</div>`;
  document.getElementById("chat-input").value = "";

  fetchResponse(message);
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function loadUser() {
  const username = localStorage.getItem("username") || "User";
  document.getElementById("username").innerText = `Logged in as ${username}`;
}

window.onload = loadUser;
