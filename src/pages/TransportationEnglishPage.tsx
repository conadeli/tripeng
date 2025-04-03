import React, { useState, useRef } from 'react';
import { Car, Bus, ArrowUp } from 'lucide-react';
import { taxiPhrases, publicTransportPhrases } from '../data/transportQuestions';
import QuestionCard from '../components/QuestionCard';
import AdBanner from '../components/AdBanner';

export default function TransportationEnglishPage() {
  const [activeSection, setActiveSection] = useState<'taxi' | 'public'>('taxi');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const questionsRef = useRef<HTMLDivElement>(null);

  // Handle scroll to show/hide back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to specific question
  const scrollToQuestion = (questionId: number) => {
    const element = document.getElementById(`question-${questionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQuestions = activeSection === 'taxi' ? taxiPhrases : publicTransportPhrases;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdBanner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          길 찾기 & 교통수단 이용 영어 표현
        </h1>
        
        {/* Section Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveSection('taxi')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              activeSection === 'taxi'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <Car size={20} />
            <span>택시 탈 때</span>
          </button>
          <button
            onClick={() => setActiveSection('public')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              activeSection === 'public'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <Bus size={20} />
            <span>대중교통</span>
          </button>
        </div>

        {/* Question Navigation */}
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

        {/* Section Content */}
        <div className="space-y-6" ref={questionsRef}>
          {activeSection === 'taxi' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                택시 탈 때 유용한 영어 문장
              </h2>
              <div className="space-y-6">
                {taxiPhrases.map((question) => (
                  <div key={question.id} id={`question-${question.id}`}>
                    <QuestionCard question={question} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'public' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                대중교통(버스, 지하철)에서 영어로 길 묻기
              </h2>
              <div className="space-y-6">
                {publicTransportPhrases.map((question) => (
                  <div key={question.id} id={`question-${question.id}`}>
                    <QuestionCard question={question} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Back to Top Button */}
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