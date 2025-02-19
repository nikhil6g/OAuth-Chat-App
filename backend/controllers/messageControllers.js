const { GoogleGenerativeAI } = require("@google/generative-ai");

const dotenv = require("dotenv");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//@description     Post prompt to get bot Messages
//@route           POST /api/message/get-bot-response
//@access          public
const getBotResponse = async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    var responseText = response.text();

    if (responseText.length < 1) {
      responseText = "Woops!! thats soo long ask me something in short.";
    }

    return res.status(200).json(responseText);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getBotResponse };
