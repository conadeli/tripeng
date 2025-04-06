const express = require("express");
const cors = require("cors");
const textToSpeech = require("@google-cloud/text-to-speech");
const app = express();

// Enable CORS for your React frontend
app.use(cors());
app.use(express.json());

// Creates a client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: "./src/tts_config_key.json",
});

app.post("/api/tts", async (req, res) => {
  try {
    const { text } = req.body;

    // Construct the request
    const request = {
      input: { text },
      voice: {
        languageCode: "en-US",
        name: "en-US-Neural2-C",
        ssmlGender: "FEMALE",
      },
      audioConfig: {
        audioEncoding: "MP3",
        speakingRate: 0.85,
        pitch: 1.0,
      },
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);

    // Send the audio content back to the client
    res.set("Content-Type", "audio/mp3");
    res.send(response.audioContent);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate speech" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
