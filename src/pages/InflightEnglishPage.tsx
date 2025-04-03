import React, { useState, useRef } from 'react';
import { Coffee, MessageSquare, ArrowUp } from 'lucide-react';
import { inflightDrinkQuestions, inflightRequestQuestions } from '../data/inflightQuestions';
import QuestionCard from '../components/QuestionCard';
import AdBanner from '../components/AdBanner';

export default function InflightEnglishPage() {
  const [activeSection, setActiveSection] = useState<'drinks' | 'requests'>('drinks');
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

  const currentQuestions = activeSection === 'drinks' ? inflightDrinkQuestions : inflightRequestQuestions;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdBanner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          기내에서 승무원과 대화하는 영어 표현
        </h1>
        
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveSection('drinks')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              activeSection === 'drinks'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <Coffee size={20} />
            <span>음료 주문하기</span>
          </button>
          <button
            onClick={() => setActiveSection('requests')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              activeSection === 'requests'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <MessageSquare size={20} />
            <span>요청사항 전달하기</span>
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
          {activeSection === 'drinks' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                기내에서 음료 주문할 때 영어로 말하기
              </h2>
              <div className="space-y-6">
                {inflightDrinkQuestions.map((question) => (
                  <div key={question.id} id={`question-${question.id}`}>
                    <QuestionCard question={question} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'requests' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                비행기 안에서 요청사항 전달하는 영어 표현
              </h2>
              <div className="space-y-6">
                {inflightRequestQuestions.map((question) => (
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