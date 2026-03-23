// Fetch backend message
async function getData() {
    const res = await fetch('/api/data');
    const data = await res.json();
    document.getElementById("output").innerText = data.message;
}

// Add message
async function addMessage() {
    const input = document.getElementById("msgInput");
    const text = input.value;

    await fetch('/api/messages', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    input.value = "";
    loadMessages();
}

// Load messages
async function loadMessages() {
    const res = await fetch('/api/messages');
    const data = await res.json();

    const list = document.getElementById("msgList");
    list.innerHTML = "";

    data.forEach(msg => {
        const li = document.createElement("li");
        li.innerText = msg;
        list.appendChild(li);
    });
}

// Load on start
loadMessages();
