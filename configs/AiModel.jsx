

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

export const GenerateChapterContent_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Explain the concept in detail on Topic:traditional, Chapter:Warm-up and Sun Salutations in JSON Formate with list of arraywith field as title,description in detail,code example(Code field <precode> if applicable)\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n[\n  {\n    \"title\": \"Warm-up\",\n    \"description\": \"Warm-up exercises are crucial before starting any yoga practice, especially sun salutations. They prepare your body for the more demanding postures by increasing blood flow, loosening muscles, and improving flexibility. This helps prevent injuries and enhances the overall effectiveness of your practice.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Types of Warm-up Exercises\",\n    \"description\": \"There are various warm-up exercises you can incorporate before sun salutations, including:\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Neck Rolls\",\n    \"description\": \"Gently roll your head in a circular motion, first clockwise and then counterclockwise. This helps loosen the neck muscles and improves blood flow to the head.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Shoulder Rolls\",\n    \"description\": \"Roll your shoulders forward in a circular motion, then reverse the direction, rolling them backward. This warms up the shoulder muscles and improves flexibility in the upper body.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Arm Circles\",\n    \"description\": \"Extend your arms out to the sides and make small circles, gradually increasing the size of the circles. This loosens the muscles in your arms and shoulders.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Leg Swings\",\n    \"description\": \"Stand with your feet hip-width apart and swing one leg forward and backward, then switch to the other leg. This warms up the muscles in your legs and improves flexibility in your hips.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Cat-Cow Pose\",\n    \"description\": \"This gentle pose helps stretch the spine and warm up the back muscles. Start on your hands and knees, then arch your back like a cat and round your spine like a cow.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Sun Salutations\",\n    \"description\": \"Sun salutations, also known as Surya Namaskar, are a series of dynamic poses that flow together. They combine breathing with movement, promoting flexibility, strength, and balance. There are various variations of sun salutations, but the basic sequence includes:\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Mountain Pose (Tadasana)\",\n    \"description\": \"Stand with your feet together, hands by your sides, and your body aligned. Breathe deeply.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Hands to Hips (Urdhva Hastasana)\",\n    \"description\": \"Raise your arms overhead, palms facing each other, and lengthen your spine.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Forward Bend (Uttanasana)\",\n    \"description\": \"Bend forward from your hips, reaching your hands towards your feet. Keep your knees slightly bent.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Halfway Lift (Ardha Uttanasana)\",\n    \"description\": \"Lift your torso halfway up, keeping your back flat, and reach your hands towards your shins.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Flat Back Pose (Anjaneyasana)\",\n    \"description\": \"Step back with your right foot and bend your right knee, forming a lunge. Keep your left leg straight.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Cobra Pose (Bhujangasana)\",\n    \"description\": \"Place your hands flat on the floor and push through your palms to lift your chest off the ground. Keep your hips on the floor.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Downward-Facing Dog (Adho Mukha Svanasana)\",\n    \"description\": \"Push up from the floor and lift your hips towards the ceiling, forming an inverted V shape. Keep your hands shoulder-width apart and your feet hip-width apart.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Three-Limbed Pose (Tri Pada Adho Mukha Svanasana)\",\n    \"description\": \"From downward-facing dog, lift your right leg up towards the ceiling. Keep your right knee bent.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Flat Back Pose (Anjaneyasana)\",\n    \"description\": \"Bring your right foot forward between your hands and step into a lunge.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Halfway Lift (Ardha Uttanasana)\",\n    \"description\": \"Lift your torso halfway up, keeping your back flat, and reach your hands towards your shins.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Forward Bend (Uttanasana)\",\n    \"description\": \"Bend forward from your hips, reaching your hands towards your feet. Keep your knees slightly bent.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Hands to Hips (Urdhva Hastasana)\",\n    \"description\": \"Raise your arms overhead, palms facing each other, and lengthen your spine.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Mountain Pose (Tadasana)\",\n    \"description\": \"Stand with your feet together, hands by your sides, and your body aligned. Breathe deeply.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Benefits of Sun Salutations\",\n    \"description\": \"Sun salutations offer a wide range of benefits, including:\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Improved Flexibility\",\n    \"description\": \"The dynamic flow of sun salutations stretches the muscles and increases range of motion in the joints.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Increased Strength\",\n    \"description\": \"The poses in sun salutations engage various muscle groups, building strength and endurance.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Enhanced Circulation\",\n    \"description\": \"The movement and breathing involved in sun salutations improve blood flow throughout the body.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Improved Digestion\",\n    \"description\": \"The twists and bends in sun salutations stimulate the digestive organs.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Stress Relief\",\n    \"description\": \"The rhythmic movements and focused breathing in sun salutations help calm the mind and reduce stress.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Tips for Sun Salutations\",\n    \"description\": \"To get the most out of your sun salutations, consider these tips:\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Listen to Your Body\",\n    \"description\": \"Don't force yourself into any pose that causes pain. If you feel any discomfort, modify the pose or skip it altogether.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Focus on Your Breath\",\n    \"description\": \"Sync your movements with your breath. Inhale as you lengthen and exhale as you bend.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Engage Your Core\",\n    \"description\": \"Keep your core muscles engaged throughout the sequence to stabilize your body.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Keep Your Spine Long\",\n    \"description\": \"Maintain a neutral spine throughout the sequence. Avoid rounding or arching your back excessively.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Practice Regularly\",\n    \"description\": \"The more you practice, the more comfortable and confident you will become with the sun salutations. Aim for at least 30 minutes of practice per day.\",\n    \"code\": \"\"\n  }\n]\n```"},
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
