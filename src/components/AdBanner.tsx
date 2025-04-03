import React from 'react';

export default function AdBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-lg font-semibold">
            망설이면 1년 뒤에도 그대로! 지금 영어로 말해보세요 🗣️✨
          </p>
          <a 
            href="https://native05.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors duration-200"
          >
            📍무료 수업 경험해보기 – 여기 클릭!
          </a>
          <p className="text-sm bg-blue-700 px-4 py-1 rounded-full inline-block">
            🎁 할인코드: <span className="font-bold">SPEAKNOW</span> (지금 등록하면 즉시 할인!)
          </p>
        </div>
      </div>
    </div>
  );
}