

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate A Course Tutorial on Following Detail with field as Course Name , Description ,Along with the Chapter  Name , about ,Duration : Category:"Programming" , Topic : Python , Level : Basic , Duration  : 1 hour , NoOf Chapter : 5 , in JSON formate\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course_name": "Python Programming for Beginners",\n  "description": "This comprehensive course will introduce you to the fundamentals of Python programming. Learn how to write, execute, and debug Python code, explore essential data types, control flow, and functions, and build your first Python programs.",\n  "chapters": [\n    {\n      "chapter_name": "Introduction to Python",\n      "about": "Understand the basics of Python, its history, and why it\'s popular. Learn how to set up your programming environment and execute your first Python script.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapter_name": "Data Types and Variables",\n      "about": "Explore essential Python data types like integers, floats, strings, and booleans. Learn how to declare variables and assign values to them.",\n      "duration": "20 minutes"\n    },\n    {\n      "chapter_name": "Operators and Expressions",\n      "about": "Learn about different types of operators in Python, including arithmetic, comparison, and logical operators. Understand how to build expressions and evaluate their results.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapter_name": "Control Flow",\n      "about": "Master control flow statements like if-else, loops (for and while), and conditional statements. Understand how to write programs that make decisions and repeat actions.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapter_name": "Functions and Modules",\n      "about": "Learn how to define your own functions to reuse code. Explore how to import and use existing modules to extend your Python programs.",\n      "duration": "15 minutes"\n    }\n  ],\n  "category": "Programming",\n  "topic": "Python",\n  "level": "Basic",\n  "duration": "1 hour",\n  "no_of_chapters": 5\n}\n```\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
