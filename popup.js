const textarea = document.getElementById("prompt");
const sendButton = document.getElementById("send-button");
const resultText = document.getElementById("result");

sendButton.addEventListener("click", async () => {
  const prompt = textarea.value;
  chrome.runtime.sendMessage(
    {
      action: "generateText",
      prompt: prompt,
    },
    function (response) {
      resultText.innerHTML = response;
    }
  );
});
