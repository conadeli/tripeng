import React, { useState, useRef } from 'react';
import { FileWarning, Stethoscope, ArrowUp } from 'lucide-react';
import { passportLossQuestions, hospitalVisitQuestions } from '../data/emergencyQuestions';
import QuestionCard from '../components/QuestionCard';
import AdBanner from '../components/AdBanner';

export default function EmergencyEnglishPage() {
  const [activeSection, setActiveSection] = useState<'passport' | 'hospital'>('passport');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const questionsRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuestion = (questionId: number) => {
    const element = document.getElementById(`question-${questionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQuestions = activeSection === 'passport' ? passportLossQuestions : hospitalVisitQuestions;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdBanner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          해외에서 긴급 상황 시 사용하는 영어
        </h1>
        
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveSection('passport')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              activeSection === 'passport'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <FileWarning size={20} />
            <span>여권 분실</span>
          </button>
          <button
            onClick={() => setActiveSection('hospital')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              activeSection === 'hospital'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <Stethoscope size={20} />
            <span>병원 방문</span>
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">문제 바로가기</h2>
          <div className="flex flex-wrap gap-2">
            {currentQuestions.map((question) => (
              <button
                key={question.id}
                onClick={() => scrollToQuestion(question.id)}
                className="min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                {question.id}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6" ref={questionsRef}>
          {activeSection === 'passport' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                여권 분실! 경찰서에서 영어로 신고하는 방법
              </h2>
              <div className="space-y-6">
                {passportLossQuestions.map((question) => (
                  <div key={question.id} id={`question-${question.id}`}>
                    <QuestionCard question={question} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'hospital' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                병원 방문 시 영어 회화 – 증상 설명부터 진료까지
              </h2>
              <div className="space-y-6">
                {hospitalVisitQuestions.map((question) => (
                  <div key={question.id} id={`question-${question.id}`}>
                    <QuestionCard question={question} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        aria-label="맨 위로 가기"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}