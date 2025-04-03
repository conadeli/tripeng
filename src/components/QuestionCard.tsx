import React, { useState, useEffect } from "react";
import { Play, Eye, Languages } from "lucide-react";
import { Question } from "../types";
import Speech from "speak-tts";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showKoreanAnswers, setShowKoreanAnswers] = useState<number[]>([]);
  const [showEnglishAnswers, setShowEnglishAnswers] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState<Speech | null>(null);

  useEffect(() => {
    const speech = new Speech();
    speech
      .init({
        volume: 1,
        lang: "en-US",
        rate: 0.85,
        pitch: 1.0,
        voice: "Google US English",
        splitSentences: true,
      })
      .then(() => {
        setSpeech(speech);
      })
      .catch((e: Error) => {
        console.error("An error occurred while initializing speech:", e);
      });
  }, []);

  const playQuestion = () => {
    if (!speech) return;

    setIsPlaying(true);

    // 문장 분석을 통한 억양 최적화
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

    // 문장 길이에 따른 속도 조절
    const words = question.text.split(" ").length;
    if (words > 10) {
      rate *= 0.95;
    }

    speech.setLanguage("en-US");
    speech.setRate(rate);
    speech.setPitch(pitch);
    speech.setVoice("Google US English");

    speech
      .speak({
        text: question.text,
        queue: false,
        listeners: {
          onstart: () => {
            setIsPlaying(true);
          },
          onend: () => {
            setIsPlaying(false);
          },
          onerror: (e: Error) => {
            console.error("Speech synthesis error:", e);
            setIsPlaying(false);
          },
        },
      })
      .catch((e: Error) => {
        console.error("An error occurred while speaking:", e);
        setIsPlaying(false);
      });
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
