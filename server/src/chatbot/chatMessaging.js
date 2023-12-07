const {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} = require("langchain/prompts");
const {
  RunnablePassthrough,
  RunnableSequence,
} = require("langchain/schema/runnable");
const { StringOutputParser } = require("langchain/schema/output_parser");
const { formatDocumentsAsString } = require("langchain/util/document");
const initializeChatBot = require("./model");

const handleChatMessage = async (input) => {
  const { model, vectorStoreRetriever } = await initializeChatBot();

  // Create a system & human prompt for the chat model
  const SYSTEM_TEMPLATE = `Use the following pieces of context to answer the question at the end.
    If you don't know the answer, try answering it as a trained psychologist
    ----------------
    {context}`;
  const messages = [
    SystemMessagePromptTemplate.fromTemplate(SYSTEM_TEMPLATE),
    HumanMessagePromptTemplate.fromTemplate("{question}"),
  ];
  const prompt = ChatPromptTemplate.fromMessages(messages);

  const chain = RunnableSequence.from([
    {
      context: vectorStoreRetriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  const answer = await chain.invoke(input);


  const indexOfColon = answer.indexOf(':');
  if(indexOfColon == -1){
    return answer;
  }

  const modifiedAnswer = answer.slice(indexOfColon + 1).trim();

  return modifiedAnswer;
};

module.exports = handleChatMessage;
