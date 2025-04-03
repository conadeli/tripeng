import { Category } from '../types';
import { 
  Plane, Hotel, UtensilsCrossed, ShoppingBag, 
  Map, AlertTriangle, Headphones 
} from 'lucide-react';

export const categories: Category[] = [
  {
    id: 1,
    title: '공항에서 유용한 여행영어 표현',
    icon: 'Plane',
    subcategories: [
      { id: 11, title: '공항 보안 검색대에서 영어로 대화하는 법' },
      { id: 12, title: '비행기 탑승 수속 영어 – 체크인부터 출국 심사까지' }
    ]
  },
  {
    id: 2,
    title: '호텔 체크인 & 체크아웃 필수 영어 회화',
    icon: 'Hotel',
    subcategories: [
      { id: 21, title: '호텔 예약할 때 영어 표현 모음' },
      { id: 22, title: '룸 서비스 요청할 때 영어 이렇게 말하세요!' }
    ]
  },
  {
    id: 3,
    title: '식당에서 영어로 주문하는 방법',
    icon: 'UtensilsCrossed',
    subcategories: [
      { id: 31, title: '패스트푸드점 & 레스토랑 영어 차이점 정리' },
      { id: 32, title: '웨이터에게 요청할 때 필요한 영어 표현' }
    ]
  },
  {
    id: 4,
    title: '쇼핑할 때 유용한 영어 회화',
    icon: 'ShoppingBag',
    subcategories: [
      { id: 41, title: '가격 흥정할 때 영어로 대화하는 법' },
      { id: 42, title: '면세점 쇼핑 시 필수 영어 표현' }
    ]
  },
  {
    id: 5,
    title: '길 찾기 & 교통수단 이용 영어 표현',
    icon: 'Map',
    subcategories: [
      { id: 51, title: '택시 탈 때 유용한 영어 문장' },
      { id: 52, title: '대중교통(버스, 지하철)에서 영어로 길 묻기' }
    ]
  },
  {
    id: 6,
    title: '해외에서 긴급 상황 시 사용하는 영어',
    icon: 'AlertTriangle',
    subcategories: [
      { id: 61, title: '여권 분실! 경찰서에서 영어로 신고하는 방법' },
      { id: 62, title: '병원 방문 시 영어 회화 – 증상 설명부터 진료까지' }
    ]
  },
  {
    id: 7,
    title: '기내에서 승무원과 대화하는 영어 표현',
    icon: 'Headphones',
    subcategories: [
      { id: 71, title: '기내에서 음료 주문할 때 영어로 말하기' },
      { id: 72, title: '비행기 안에서 요청사항 전달하는 영어 표현' }
    ]
  }
];