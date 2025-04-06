import React, { useState, useEffect } from "react";
import { Play, Eye, Languages } from "lucide-react";
import { Question } from "../types";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showKoreanAnswers, setShowKoreanAnswers] = useState<number[]>([]);
  const [showEnglishAnswers, setShowEnglishAnswers] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playQuestion = async () => {
    setIsPlaying(true);

    try {
      // Adjust speech parameters based on sentence type
      const isQuestion = question.text.endsWith("?");
      const isCommand =
        question.text.startsWith("Please") || question.text.endsWith(".");

      let rate = 0.85;
      let pitch = 1.0;

      if (isQuestion) {
        pitch = 1.1;
        rate = 0.8;
      } else if (isCommand) {
        pitch = 0.95;
        rate = 0.9;
      }

      // Adjust rate based on sentence length
      const words = question.text.split(" ").length;
      if (words > 10) {
        rate *= 0.95;
      }

      const response = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${
          import.meta.env.VITE_GOOGLE_CLOUD_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: { text: question.text },
            voice: {
              languageCode: "en-US",
              name: "en-US-Neural2-C",
              ssmlGender: "FEMALE",
            },
            audioConfig: {
              audioEncoding: "MP3",
              speakingRate: rate,
              pitch: pitch,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Convert base64 to blob
      const audioContent = data.audioContent;
      const binaryString = window.atob(audioContent);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(blob);

      // Play the audio
      const audio = new Audio(audioUrl);
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };
      audio.onerror = (error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };
      await audio.play();
    } catch (error) {
      console.error("Error synthesizing speech:", error);
      setIsPlaying(false);
    }
  };

  const toggleKoreanAnswer = (index: number) => {
    setShowKoreanAnswers((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleEnglishAnswer = (index: number) => {
    setShowEnglishAnswers((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      {/* Question Number */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="bg-blue-600 text-white text-lg font-semibold w-10 h-10 rounded-full flex items-center justify-center">
            {question.id}
          </span>
          <h3 className="text-lg font-medium text-gray-700">Question</h3>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-4">
          <button
            className={`flex items-center space-x-2 ${
              isPlaying
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-4 py-2 rounded-md transition-colors`}
            onClick={playQuestion}
            disabled={isPlaying}
          >
            <Play size={20} />
            <span>{isPlaying ? "재생 중..." : "질문 듣기"}</span>
          </button>
          <button
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            onClick={() => setShowQuestion(!showQuestion)}
          >
            <Eye size={20} />
            <span>질문 보기</span>
          </button>
          <button
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            onClick={() => setShowMeaning(!showMeaning)}
          >
            <Languages size={20} />
            <span>뜻 보기</span>
          </button>
        </div>

        {showQuestion && (
          <p className="text-gray-800 font-medium mt-4">{question.text}</p>
        )}
        {showMeaning && (
          <p className="text-blue-600 font-medium mt-4">{question.meaning}</p>
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          {question.answers.korean.map((answer, idx) => (
            <div key={`korean-${idx}`}>
              <button
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  showKoreanAnswers.includes(idx)
                    ? "bg-blue-50 text-blue-700"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => toggleKoreanAnswer(idx)}
              >
                한글로 답변 {idx + 1} 보기
              </button>
              {showKoreanAnswers.includes(idx) && (
                <p className="mt-2 pl-4 text-gray-700">{answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {question.answers.english.map((answer, idx) => (
            <div key={`english-${idx}`}>
              <button
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  showEnglishAnswers.includes(idx)
                    ? "bg-blue-50 text-blue-700"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => toggleEnglishAnswer(idx)}
              >
                영어로 답변 {idx + 1} 보기
              </button>
              {showEnglishAnswers.includes(idx) && (
                <p className="mt-2 pl-4 text-gray-700">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
