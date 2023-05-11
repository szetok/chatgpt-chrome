import createChatCompletion from "./openai-api.js";

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === "createChatCompletion") {
    const prompt = request.prompt;
    createChatCompletion(prompt).then((text) => sendResponse(text));
    return true;
  }
});
