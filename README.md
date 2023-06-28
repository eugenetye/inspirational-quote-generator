# Inspirational Quote Generator

This is a serverless, full-stack inspirational quote generator app built using Next.js, TypeScript, AWS Amplify, AWS DynamoDB, AWS AppSync with GraphQL API, and AWS Lambda. You can check it out [here](https://prod.d3osa9cjuzi6uw.amplifyapp.com/).



https://github.com/eugenetye/inspirational-quote-generator/assets/105037989/0af37a85-9b06-4b8d-badb-bc28280c561f


First, a random inspirational quote is fetched from Zenquotes API, and AWS generates a photo based on the quote in the cloud. Then, the quote photo will be available to be downloaded as a file.

## Prerequisites

Make sure you have the following installed on your machine:
- npm (Node Package Manager)

To see if you already have Node.js and npm installed and check the installed version, run the following commands:

```
npm -v
```

## Installation Guide
**IMPORTANT:** Without the AWS backend configured, you will probably see an error like this if you try to run the app as-is: `Module not found: Can't resolve '../src/aws-exports'` Please check out the [full tutorial on freeCodeCamp here](https://www.youtube.com/watch?v=FRmCxj9K7II) to get started building the project.

1. Clone this repository to your local machine using the following command:
```
git clone https://github.com/eugenetye/inspirational-quote-generator.git
```

2. Open a terminal or command prompt and install the project dependencies from the root of the project by running the following command:
```
npm install
```
3. Next, run the development server:
```
npm run dev
```

Done! Now open localhost:3000 in your browser and the app should now be running.
