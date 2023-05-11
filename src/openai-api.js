const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export default function createChatCompletion(prompt) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };
  const body = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 10,
    temperature: 0.5,
    n: 1,
  };
  return fetch(OPENAI_API_URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => data.choices[0].message.content)
    .catch((error) => console.error(error));
}
