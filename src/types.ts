export interface Category {
  id: number;
  title: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  title: string;
}

export interface Question {
  id: number;
  audioUrl?: string;
  text: string;
  meaning: string; // 한글 뜻 추가
  answers: {
    korean: string[];
    english: string[];
  };
}