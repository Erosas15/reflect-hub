const { OpenAI } = require("langchain/llms/openai");
const { CSVLoader } = require("langchain/document_loaders/fs/csv");
const { openAIConfig } = require("../../config.json");

const main = async () => {
  const model = new OpenAI({ openAIApiKey: openAIConfig.apiKey });

  const loader = new CSVLoader("../utils/mental_health.csv");
  const docs = await loader.load();
  console.log("CSV loaded successfully");

  const texts = docs.map((doc) => doc.text); // Assuming there's a 'text' field in your CSV

  // Use the OpenAI model to generate embeddings for the text
  const embeddings = await model.processText(texts);

  // 'embeddings' now contains the vector embeddings for each corresponding text in 'texts'
  console.log(embeddings);
};

main();
