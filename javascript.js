function sendMessage() {
    let input = document.getElementById("message");
    let text = input.value.trim();
    if (text === "") return;

    let chatBox = document.getElementById("chatBox");
    let messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.innerText = text;

    chatBox.appendChild(messageDiv);
    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
