import React, { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dailyPopup = localStorage.getItem('hideWelcomePopupDaily');
    const weeklyPopup = localStorage.getItem('hideWelcomePopupWeekly');
    const now = new Date().getTime();

    if (!dailyPopup && !weeklyPopup) {
      setIsOpen(true);
    } else {
      const storedTime = parseInt(dailyPopup || weeklyPopup || '0');
      if (dailyPopup && now - storedTime > 24 * 60 * 60 * 1000) {
        setIsOpen(true);
        localStorage.removeItem('hideWelcomePopupDaily');
      }
      if (weeklyPopup && now - storedTime > 7 * 24 * 60 * 60 * 1000) {
        setIsOpen(true);
        localStorage.removeItem('hideWelcomePopupWeekly');
      }
    }
  }, []);

  const handleClose = (duration: 'daily' | 'weekly') => {
    const now = new Date().getTime();
    if (duration === 'daily') {
      localStorage.setItem('hideWelcomePopupDaily', now.toString());
    } else {
      localStorage.setItem('hideWelcomePopupWeekly', now.toString());
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-xl p-6 mx-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            무료 여행영어 학습 페이지에 오신 것을 환영합니다!
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="font-medium">
              이 페이지는 무료로 여행영어를 준비하는 페이지입니다.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                사용 가능한 브라우저
              </h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Chrome (크롬)</li>
                <li>• Edge (엣지)</li>
                <li>• Internet Explorer (익스플로러)</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">
                주의사항
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• 네이버 웨일 브라우저는 호환되지 않습니다</li>
                <li>• SNS 앱 내 브라우저에서는 음성 지원이 불가능합니다</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                <span className="font-semibold">권장:</span> 웹 브라우저에서 직접 홈페이지 주소로 접속해 주세요
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-3">
          <a
            href="https://native05.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
          >
            화상영어 전문업체 제이디클래스 바로가기
          </a>
          <div className="flex space-x-3">
            <button
              onClick={() => handleClose('daily')}
              className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              오늘 하루 닫기
            </button>
            <button
              onClick={() => handleClose('weekly')}
              className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              일주일 동안 닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}