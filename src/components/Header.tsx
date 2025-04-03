import React from 'react';
import { GraduationCap, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap size={32} />
            <span className="text-xl font-bold">JD Class 여행영어</span>
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
          >
            <Home size={20} />
            <span>메인으로</span>
          </Link>
        </div>
      </div>
    </header>
  );
}