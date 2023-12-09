# ReflectHub

ReflectHub is an application designed to enhance mental health by providing personalized information and resources using GPT technology. Users can share their thoughts and emotions through daily journaling, receive appropriate responses, connect with a supportive community, and engage in meaningful conversations with a GPT-powered chatbot.

## Authors

- Ashvin Loghashankar
- Erick Rosas Gonzalez
- Kaitlyn Srinivasan
- Sragvi Vadali
- Xander Neary

## Instructions to Run

### Prerequisites for Running

The code on this GitHub repository won't execute independently, as it lacks the necessary API keys for security reasons. To run this web application locally, please email [reachsragvi@gmail.com](mailto:reachsragvi@gmail.com) to obtain the required API key details. The application will function once you receive instructions on how to add the API key information.

### How to Set Up Your Own API Keys

1. **Create a Configuration File:** Start by creating a json file named `config.json` in the server directory.

2. **Firebase API Configuration:**

   - Add a json object named "firebaseAPIConfig" to your `config.json`.
   - Reach out to us to get the JSON object tailored for our Firebase Database.

3. **Firebase Service Configuration:**

   - Introduce another JSON object called "firebaseServiceConfig" to `config.json`.
   - Once again, reach out to us for the specific JSON object linked to the service-account on Firebase.

4. **OpenAI Configuration:**
   - To get the OpenAI config and make your chatbot run smoothly, create a third JSON object named "OpenAIConfig" in `config.json`.
   - Don't hesitate to ask us for this JSON object—your key to unleashing the power of OpenAI.

**Example `config.json`**

```json
{
  "firebaseAPIConfig": {
    "apiKey": "<your_api_key>",
    "authDomain": "<your_data>",
    "projectId": "<your_data>",
    "storageBucket": "<your_data>",
    "messagingSenderId": "<your_data>",
    "appId": "<your_data>",
    "measurementId": "<your_data>"
  },
  "firebaseServiceConfig": {
    "type": "service_account",
    "project_id": "<your_data>",
    "private_key_id": "<your_data>",
    "private_key": "<your_data>",
    "client_email": "<your_data>",
    "client_id": "<your_data>",
    "auth_uri": "<your_data>",
    "token_uri": "<your_data>",
    "auth_provider_x509_cert_url": "<your_data>",
    "client_x509_cert_url": "<your_data>",
    "universe_domain": "<your_data>"
  },
  "openAIConfig": {
    "apiKey": "<your_data>",
    "modelName": "gpt-3.5-turbo-instruct"
  }
}
```

### Running the Application as a Whole

The command to start the application varies depending on your operating system. The client will be hosted on [http://localhost:3000](http://localhost:3000) and the server is hosted on [http://localhost:3001](http://localhost:3001).

Run: `npm run start`

If you prefer to run components individually for testing, see below.

### To Run the Server

Execute: `npm run start-server`

Note: If you make changes to the server-side code, rerun the npm function.

### To Run the Client

Execute: `npm run start-client`

### To Install All Dependencies

Run: `npm run install-deps`

## Features

### Daily Journaling

Users can record their thoughts and emotions in a journal, with entries saved for reflection.

### Support System

The application identifies keywords from the daily journal and groups users facing similar challenges. A chat room option is available for users to connect and support each other.

### Chat

Users can engage in conversations with a GPT chatbot tailored with mental health information and get mental health information and advice from a model similar to a trained psychologist.

## Sources:

**Training Data**
Mikedelong. (2023, December 4). Visualize therapy responses. Kaggle. https://www.kaggle.com/code/mikedelong/visualize-therapy-responses/notebook

**Langchain Documentation:**
Vector Stores. 🦜️🔗 Langchain. (n.d.). https://js.langchain.com/docs/modules/data_connection/vectorstores/

**Firebase Documentation:**
Google. (n.d.). Build documentation&nbsp; |&nbsp; firebase documentation. Google. https://firebase.google.com/docs/build
