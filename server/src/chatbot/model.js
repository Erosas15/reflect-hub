const { CSVLoader } = require("langchain/document_loaders/fs/csv");
const { HNSWLib } = require("langchain/vectorstores/hnswlib");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { OpenAI } = require("langchain/llms/openai");
const path = require("path");
const { openAIConfig } = require("../../config.json");
const createRandomCSV = require("../utils/randomCSVGenerator");

const initializeChatBot = async () => {
  const inputCSVPath = path.join(__dirname, "..", "utils", "train.csv");
  const outputCSVPath = path.join(__dirname, "..", "utils", "test.csv");

  createRandomCSV(inputCSVPath, outputCSVPath);

  const loader = new CSVLoader(outputCSVPath);
  const docs = await loader.load();

  const vectorStore = await HNSWLib.fromDocuments(
    docs,
    new OpenAIEmbeddings({
      openAIApiKey: openAIConfig.apiKey,
      modelName: "text-embedding-ada-002"
    })
  );

  const vectorStoreRetriever = vectorStore.asRetriever();

  // Create the model here
  const model = new OpenAI({
    openAIApiKey: openAIConfig.apiKey,
    modelName: "gpt-3.5-turbo-instruct",
  });
  

  return { model, vectorStoreRetriever };

};

// Initialize OpenAI and export the model and vectorStoreRetriever
module.exports = initializeChatBot;
