const langchain = require("langchain");
const { OpenAI } = langchain.llm.openai;
const { PromptTemplates } = langchain.prompts;
const { LLMChain } = langchain.chain;
const fs = require("fs").promises;
const csv = require("csv-parser");
const { openAIConfig } = require("../../config.json");

async function processMentalHealthData() {
  // Load OpenAI model
  const model = new OpenAI({ temperature: 0, apiKey: openAIConfig.apiKey });

  // Define prompt template
  const template =
    "Be very funny when answering questions\n Question: {question}";
  const prompt = new PromptTemplates({
    template,
    inputVariables: ["question"],
  });

  // Initialize language model chain
  const chain = new LLMChain({ llm: model, prompt });

  // Load and process mental health data from CSV
  const mentalHealthData = await readCSV("mental-health.csv");

  // Process each row in the CSV
  for (const row of mentalHealthData) {
    const question = row.question; // Adjust this based on your CSV structure
    const result = await chain.call({ question });
    console.log(`Question: ${question}\nAnswer: ${result}\n`);
  }
}

async function readCSV(filePath) {
  try {
    const data = [];
    const fileContent = await fs.readFile(filePath, "utf-8");
    return new Promise((resolve, reject) => {
      require("csv-parser")()
        .on("data", (row) => {
          data.push(row);
        })
        .on("end", () => {
          resolve(data);
        })
        .on("error", (error) => {
          reject(error);
        })
        .write(fileContent);
    });
  } catch (error) {
    console.error("Error reading CSV file:", error);
    throw error;
  }
}

// Run the main process
processMentalHealthData();
