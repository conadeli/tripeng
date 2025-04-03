import { Question } from '../types';

// 호텔 예약 질문들 (2_1hotel_booking_questions)
export const hotelBookingQuestions: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/hotel-question-1.mp3",
    text: "I'd like to book a room for three nights.",
    meaning: "3박 동안 방을 예약하고 싶어요.",
    answers: {
      korean: [
        "네, 어떤 종류의 방을 원하시나요?",
        "스탠다드 더블룸으로 부탁드립니다."
      ],
      english: [
        "Sure, what type of room would you like?",
        "A standard double room, please."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/hotel-question-2.mp3",
    text: "Do you have any rooms available for tonight?",
    meaning: "오늘 밤 이용할 수 있는 방이 있나요?",
    answers: {
      korean: [
        "네, 몇 가지 옵션이 있습니다.",
        "죄송하지만, 오늘은 만실입니다."
      ],
      english: [
        "Yes, we have a few options.",
        "Sorry, we're fully booked tonight."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/hotel-question-3.mp3",
    text: "How much is a single room per night?",
    meaning: "싱글룸 1박 요금은 얼마인가요?",
    answers: {
      korean: [
        "세금 제외하고 1박에 80달러입니다.",
        "가격은 시즌에 따라 달라집니다."
      ],
      english: [
        "It's $80 per night, excluding taxes.",
        "The price varies depending on the season."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/hotel-question-4.mp3",
    text: "Can I get a room with a sea view?",
    meaning: "바다 전망이 있는 방을 받을 수 있나요?",
    answers: {
      korean: [
        "네, 바다 전망 방이 있습니다.",
        "죄송하지만, 바다 전망 방은 다 예약되었습니다."
      ],
      english: [
        "Yes, we have a sea-view room available.",
        "I'm sorry, but all sea-view rooms are booked."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/hotel-question-5.mp3",
    text: "Does the room rate include breakfast?",
    meaning: "객실 요금에 조식이 포함되나요?",
    answers: {
      korean: [
        "네, 컨티넨탈 조식이 포함되어 있습니다.",
        "아니요, 조식은 인당 15달러 추가됩니다."
      ],
      english: [
        "Yes, a continental breakfast is included.",
        "No, breakfast is an additional $15 per person."
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/hotel-question-6.mp3",
    text: "I'd like to cancel my reservation.",
    meaning: "예약을 취소하고 싶어요.",
    answers: {
      korean: [
        "네, 예약 번호를 알려주시겠어요?",
        "죄송하지만, 취소는 최소 24시간 전에 해야 합니다."
      ],
      english: [
        "No problem. May I have your booking reference?",
        "I'm sorry, but cancellations require 24-hour notice."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/hotel-question-7.mp3",
    text: "Can I check in early?",
    meaning: "조기 체크인 가능할까요?",
    answers: {
      korean: [
        "조기 체크인은 가능한 경우에만 가능합니다.",
        "추가 요금으로 조기 체크인이 가능합니다."
      ],
      english: [
        "Early check-in is subject to availability.",
        "We can accommodate early check-in for an additional fee."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/hotel-question-8.mp3",
    text: "What time is check-in and check-out?",
    meaning: "체크인과 체크아웃 시간은 언제인가요?",
    answers: {
      korean: [
        "체크인은 오후 3시부터, 체크아웃은 오전 11시까지입니다.",
        "추가 요금으로 늦은 체크아웃이 가능합니다."
      ],
      english: [
        "Check-in is from 3 PM, and check-out is by 11 AM.",
        "You can request a late check-out for an extra fee."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/hotel-question-9.mp3",
    text: "Do you have a shuttle service from the airport?",
    meaning: "공항에서 호텔까지 셔틀 서비스가 있나요?",
    answers: {
      korean: [
        "네, 무료 공항 셔틀이 있습니다.",
        "아니요, 하지만 택시를 예약해 드릴 수 있습니다."
      ],
      english: [
        "Yes, we offer a free airport shuttle.",
        "No, but we can arrange a taxi for you."
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/hotel-question-10.mp3",
    text: "Is there free Wi-Fi in the hotel?",
    meaning: "호텔에서 무료 와이파이를 이용할 수 있나요?",
    answers: {
      korean: [
        "네, 호텔 전체에서 무료 와이파이를 사용할 수 있습니다.",
        "로비에서는 무료지만, 객실에서는 요금이 부과됩니다."
      ],
      english: [
        "Yes, free Wi-Fi is available throughout the hotel.",
        "Wi-Fi is free in the lobby, but there is a charge in the rooms."
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/hotel-question-11.mp3",
    text: "Can I get an extra bed in the room?",
    meaning: "객실에 추가 침대를 넣을 수 있나요?",
    answers: {
      korean: [
        "네, 추가 침대는 1박에 20달러입니다.",
        "죄송하지만, 추가 침대는 제공되지 않습니다."
      ],
      english: [
        "Yes, an extra bed costs $20 per night.",
        "I'm sorry, but extra beds are not available."
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/hotel-question-12.mp3",
    text: "Do you have a swimming pool?",
    meaning: "수영장이 있나요?",
    answers: {
      korean: [
        "네, 수영장은 옥상에 있습니다.",
        "아니요, 하지만 피트니스 센터가 있습니다."
      ],
      english: [
        "Yes, the pool is on the rooftop.",
        "No, but we have a fitness center."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/hotel-question-13.mp3",
    text: "Is parking available at the hotel?",
    meaning: "호텔에 주차장이 있나요?",
    answers: {
      korean: [
        "네, 투숙객을 위한 무료 주차장이 있습니다.",
        "주차는 1박에 10달러입니다."
      ],
      english: [
        "Yes, we have free parking for guests.",
        "Parking is available for $10 per night."
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/hotel-question-14.mp3",
    text: "I'd like to request a wake-up call.",
    meaning: "모닝콜을 요청하고 싶어요.",
    answers: {
      korean: [
        "네, 몇 시에 모닝콜을 해드릴까요?",
        "모닝콜은 오전 5시부터 10시까지 가능합니다."
      ],
      english: [
        "Sure, what time should we call you?",
        "Wake-up calls are available between 5 AM and 10 AM."
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/hotel-question-15.mp3",
    text: "Can I get room service?",
    meaning: "룸서비스 이용할 수 있나요?",
    answers: {
      korean: [
        "네, 룸서비스는 24시간 가능합니다.",
        "레스토랑은 오후 10시에 닫지만, 간식은 이용 가능합니다."
      ],
      english: [
        "Yes, room service is available 24/7.",
        "The restaurant closes at 10 PM, but snacks are available."
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/hotel-question-16.mp3",
    text: "Is there a laundry service?",
    meaning: "세탁 서비스가 있나요?",
    answers: {
      korean: [
        "네, 당일 세탁 서비스가 가능합니다.",
        "셀프 세탁실이 2층에 있습니다."
      ],
      english: [
        "Yes, we offer same-day laundry service.",
        "There is a self-service laundry room on the second floor."
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/hotel-question-17.mp3",
    text: "Do you have a business center?",
    meaning: "비즈니스 센터가 있나요?",
    answers: {
      korean: [
        "네, 1층에 있습니다.",
        "비즈니스 센터는 24시간 운영됩니다."
      ],
      english: [
        "Yes, it's located on the ground floor.",
        "The business center is open 24 hours."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/hotel-question-18.mp3",
    text: "I lost my room key. Can I get a new one?",
    meaning: "객실 키를 잃어버렸어요. 새 키를 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 새 키를 드리겠습니다.",
        "보안상의 이유로 신분증을 제시해 주세요."
      ],
      english: [
        "No problem. We'll issue you a new key.",
        "Please show your ID for security purposes."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/hotel-question-19.mp3",
    text: "Can I leave my luggage here after check-out?",
    meaning: "체크아웃 후에 짐을 맡길 수 있나요?",
    answers: {
      korean: [
        "네, 무료로 짐을 보관해 드립니다.",
        "최대 24시간 동안 보관 가능합니다."
      ],
      english: [
        "Yes, we offer luggage storage for free.",
        "You can store your luggage for up to 24 hours."
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/hotel-question-20.mp3",
    text: "Do you accept credit cards?",
    meaning: "신용카드 결제 가능한가요?",
    answers: {
      korean: [
        "네, 모든 주요 신용카드를 받습니다.",
        "Visa와 Mastercard만 받습니다."
      ],
      english: [
        "Yes, we accept all major credit cards.",
        "We only accept Visa and Mastercard."
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/hotel-question-21.mp3",
    text: "Can I pay in cash?",
    meaning: "현금으로 결제할 수 있나요?",
    answers: {
      korean: [
        "네, 가능합니다.",
        "죄송하지만, 신용카드만 받습니다."
      ],
      english: [
        "Yes, that's fine.",
        "I'm sorry, we only accept credit cards."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/hotel-question-22.mp3",
    text: "Is there a minibar in the room?",
    meaning: "객실에 미니바가 있나요?",
    answers: {
      korean: [
        "네, 미니바가 있습니다.",
        "아니요, 하지만 1층에 편의점이 있습니다."
      ],
      english: [
        "Yes, there is a minibar.",
        "No, but there is a convenience store on the first floor."
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/hotel-question-23.mp3",
    text: "Can I request a non-smoking room?",
    meaning: "금연 객실을 요청할 수 있나요?",
    answers: {
      korean: [
        "네, 금연 객실로 배정해드릴 수 있습니다.",
        "죄송하지만, 현재 금연 객실이 없습니다."
      ],
      english: [
        "Yes, we can assign you a non-smoking room.",
        "I'm sorry, but there are no non-smoking rooms available."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/hotel-question-24.mp3",
    text: "Is there a safe in the room?",
    meaning: "객실에 금고가 있나요?",
    answers: {
      korean: [
        "네, 금고가 있습니다.",
        "아니요, 하지만 프런트 데스크에서 귀중품을 보관해 드릴 수 있습니다."
      ],
      english: [
        "Yes, there is a safe in the room.",
        "No, but the front desk can store valuables for you."
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/hotel-question-25.mp3",
    text: "Can I get a late check-out?",
    meaning: "늦은 체크아웃이 가능할까요?",
    answers: {
      korean: [
        "네, 추가 요금으로 늦은 체크아웃이 가능합니다.",
        "죄송하지만, 늦은 체크아웃이 불가능합니다."
      ],
      english: [
        "Yes, late check-out is available for an extra charge.",
        "I'm sorry, but late check-out is not available."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/hotel-question-26.mp3",
    text: "What's the check-in procedure?",
    meaning: "체크인 절차는 어떻게 되나요?",
    answers: {
      korean: [
        "여권과 신용카드를 보여주시면 됩니다.",
        "예약 확인서와 신분증을 제시해 주세요."
      ],
      english: [
        "Please show your passport and credit card.",
        "Please present your booking confirmation and ID."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/hotel-question-27.mp3",
    text: "Is there a gym in the hotel?",
    meaning: "호텔에 헬스장이 있나요?",
    answers: {
      korean: [
        "네, 24시간 이용 가능한 피트니스 센터가 있습니다.",
        "죄송하지만, 현재 리모델링 중입니다."
      ],
      english: [
        "Yes, we have a 24-hour fitness center.",
        "I'm sorry, but it's currently under renovation."
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/hotel-question-28.mp3",
    text: "Do you offer currency exchange?",
    meaning: "환전이 가능한가요?",
    answers: {
      korean: [
        "네, 프런트 데스크에서 가능합니다.",
        "죄송하지만, 근처 은행을 이용해 주세요."
      ],
      english: [
        "Yes, it's available at the front desk.",
        "I'm sorry, please use a nearby bank."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/hotel-question-29.mp3",
    text: "What's your cancellation policy?",
    meaning: "취소 정책은 어떻게 되나요?",
    answers: {
      korean: [
        "체크인 24시간 전까지 무료 취소 가능합니다.",
        "예약금은 환불되지 않습니다."
      ],
      english: [
        "Free cancellation is available up to 24 hours before check-in.",
        "The deposit is non-refundable."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/hotel-question-30.mp3",
    text: "Do you have any special rates for long stays?",
    meaning: "장기 투숙 시 특별 요금이 있나요?",
    answers: {
      korean: [
        "네, 일주일 이상 투숙 시 할인이 적용됩니다.",
        "월 단위 예약 시 특별 요금을 제공합니다."
      ],
      english: [
        "Yes, we offer discounts for stays over a week.",
        "We have special rates for monthly bookings."
      ]
    }
  }
];

// 룸 서비스 요청 질문들 (2_2room_service_requests)
export const roomServiceQuestions: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/room-service-1.mp3",
    text: "Can I order room service?",
    meaning: "룸서비스를 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 룸서비스는 24시간 가능합니다.",
        "죄송하지만, 룸서비스는 오후 10시까지만 가능합니다."
      ],
      english: [
        "Yes, room service is available 24/7.",
        "Sorry, room service is only available until 10 PM."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/room-service-2.mp3",
    text: "Do you have a room service menu?",
    meaning: "룸서비스 메뉴가 있나요?",
    answers: {
      korean: [
        "네, 객실에 메뉴가 있습니다.",
        "호텔 웹사이트에서 메뉴를 확인할 수 있습니다."
      ],
      english: [
        "Yes, there's a menu in your room.",
        "You can check the menu on our website."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/room-service-3.mp3",
    text: "I'd like to order breakfast in my room.",
    meaning: "객실에서 조식을 주문하고 싶어요.",
    answers: {
      korean: [
        "네, 무엇을 주문하시겠어요?",
        "조식은 오전 6시부터 10시까지 제공됩니다."
      ],
      english: [
        "Sure, what would you like?",
        "Breakfast is served from 6 AM to 10 AM."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/room-service-4.mp3",
    text: "Can I have a continental breakfast delivered to my room?",
    meaning: "객실로 컨티넨탈 조식을 배달해 주실 수 있나요?",
    answers: {
      korean: [
        "네, 30분 내로 배달해 드리겠습니다.",
        "죄송하지만, 객실 조식 서비스는 제공되지 않습니다."
      ],
      english: [
        "Yes, it will be delivered within 30 minutes.",
        "Sorry, but room service breakfast is not available."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/room-service-5.mp3",
    text: "I'd like to order a steak and a glass of wine.",
    meaning: "스테이크와 와인 한 잔을 주문하고 싶어요.",
    answers: {
      korean: [
        "네, 스테이크는 어떻게 요리해 드릴까요?",
        "레드와 화이트 와인이 있습니다. 어떤 걸 원하시나요?"
      ],
      english: [
        "Sure, how would you like your steak cooked?",
        "We have red and white wine available. Which would you prefer?"
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/room-service-6.mp3",
    text: "Can I get a vegetarian meal?",
    meaning: "채식 메뉴를 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 채식 메뉴가 있습니다.",
        "죄송하지만, 채식 메뉴는 없습니다."
      ],
      english: [
        "Yes, we have vegetarian options.",
        "I'm sorry, but we don't offer vegetarian meals."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/room-service-7.mp3",
    text: "Can you bring some fresh fruit to my room?",
    meaning: "객실로 신선한 과일을 가져다 주실 수 있나요?",
    answers: {
      korean: [
        "네, 과일 플래터를 준비해 드릴 수 있습니다.",
        "죄송하지만, 지금은 신선한 과일이 없습니다."
      ],
      english: [
        "Yes, we have a fruit platter available.",
        "I'm sorry, but we don't have fresh fruit at the moment."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/room-service-8.mp3",
    text: "I'd like to order dessert. What do you have?",
    meaning: "디저트를 주문하고 싶은데, 어떤 게 있나요?",
    answers: {
      korean: [
        "초콜릿 케이크, 치즈케이크, 그리고 과일 타르트가 있습니다.",
        "객실 내 디저트 메뉴를 확인하실 수 있습니다."
      ],
      english: [
        "We have chocolate cake, cheesecake, and fruit tart.",
        "You can check the dessert menu in your room."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/room-service-9.mp3",
    text: "Can I get a bottle of water and some ice?",
    meaning: "생수 한 병과 얼음을 가져다 주실 수 있나요?",
    answers: {
      korean: [
        "네, 바로 보내드리겠습니다.",
        "객실 내 무료 생수가 있습니다."
      ],
      english: [
        "Sure, we'll send them right away.",
        "There is complimentary bottled water in your room."
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/room-service-10.mp3",
    text: "How long will my order take?",
    meaning: "주문한 음식이 얼마나 걸릴까요?",
    answers: {
      korean: [
        "약 30분 정도 걸립니다.",
        "현재 주문이 많아 45분까지 걸릴 수 있습니다."
      ],
      english: [
        "It will take approximately 30 minutes.",
        "We are busy right now, so it may take up to 45 minutes."
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/room-service-11.mp3",
    text: "Can I order a sandwich and a soda?",
    meaning: "샌드위치와 탄산음료를 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 어떤 샌드위치를 원하시나요?",
        "죄송하지만, 샌드위치는 현재 제공되지 않습니다."
      ],
      english: [
        "Yes, what kind of sandwich would you like?",
        "I'm sorry, but sandwiches are not available at the moment."
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/room-service-12.mp3",
    text: "Can I get extra towels delivered to my room?",
    meaning: "객실로 추가 수건을 배달해 주실 수 있나요?",
    answers: {
      korean: [
        "네, 곧 보내드리겠습니다.",
        "죄송하지만, 지금은 추가 수건이 없습니다."
      ],
      english: [
        "Yes, we'll send them shortly.",
        "I'm sorry, but we're out of extra towels right now."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/room-service-13.mp3",
    text: "I need more pillows. Can you bring some?",
    meaning: "베개를 더 가져다 주실 수 있나요?",
    answers: {
      korean: [
        "네, 몇 개 필요하신가요?",
        "죄송하지만, 추가 베개가 없습니다."
      ],
      english: [
        "Sure, how many do you need?",
        "I'm sorry, but we don't have extra pillows available."
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/room-service-14.mp3",
    text: "Can I request an iron and ironing board?",
    meaning: "다리미와 다리미판을 요청할 수 있나요?",
    answers: {
      korean: [
        "네, 곧 가져다 드리겠습니다.",
        "죄송하지만, 현재 다리미가 없습니다."
      ],
      english: [
        "Yes, we'll bring them to your room shortly.",
        "I'm sorry, but we don't have any available at the moment."
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/room-service-15.mp3",
    text: "Can I have a late-night snack delivered?",
    meaning: "야식 배달이 가능할까요?",
    answers: {
      korean: [
        "네, 야식 메뉴를 확인해 주세요.",
        "죄송하지만, 야식 서비스는 제공되지 않습니다."
      ],
      english: [
        "Yes, please check our late-night menu.",
        "I'm sorry, but we don't offer late-night snacks."
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/room-service-16.mp3",
    text: "Do you offer special meals for allergies?",
    meaning: "알레르기 있는 사람들을 위한 특별식이 있나요?",
    answers: {
      korean: [
        "네, 어떤 음식 알레르기가 있으신가요?",
        "죄송하지만, 특별식을 제공하지 않습니다."
      ],
      english: [
        "Yes, do you have any specific allergies?",
        "I'm sorry, but we don't offer special allergy meals."
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/room-service-17.mp3",
    text: "Can I order a birthday cake for my room?",
    meaning: "객실로 생일 케이크를 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 미리 예약해 주시면 가능합니다.",
        "죄송하지만, 생일 케이크 서비스는 없습니다."
      ],
      english: [
        "Yes, if you order in advance, we can arrange it.",
        "I'm sorry, but we don't offer birthday cakes."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/room-service-18.mp3",
    text: "Can I get a coffee maker in my room?",
    meaning: "객실에 커피 머신을 요청할 수 있나요?",
    answers: {
      korean: [
        "네, 곧 보내드리겠습니다.",
        "죄송하지만, 커피 머신이 제공되지 않습니다."
      ],
      english: [
        "Yes, we'll send one to your room.",
        "I'm sorry, but coffee makers are not available."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/room-service-19.mp3",
    text: "Do you provide baby cribs?",
    meaning: "아기 침대를 제공하나요?",
    answers: {
      korean: [
        "네, 무료로 제공됩니다.",
        "죄송하지만, 아기 침대가 없습니다."
      ],
      english: [
        "Yes, we provide them for free.",
        "I'm sorry, but we don't have any available."
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/room-service-20.mp3",
    text: "Can I get fresh towels every morning?",
    meaning: "매일 아침 깨끗한 수건을 받을 수 있나요?",
    answers: {
      korean: [
        "네, 매일 아침 교체해 드립니다.",
        "죄송하지만, 요청하셔야만 교체 가능합니다."
      ],
      english: [
        "Yes, we change them every morning.",
        "I'm sorry, but you need to request them."
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/room-service-21.mp3",
    text: "Can I order champagne to my room?",
    meaning: "객실로 샴페인을 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 다양한 샴페인이 준비되어 있습니다.",
        "죄송하지만, 주류 서비스는 제공되지 않습니다."
      ],
      english: [
        "Yes, we have a selection of champagne available.",
        "I'm sorry, but we don't offer alcohol delivery."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/room-service-22.mp3",
    text: "Is there a microwave in the room?",
    meaning: "객실에 전자레인지가 있나요?",
    answers: {
      korean: [
        "네, 있습니다.",
        "아니요, 하지만 공용 전자레인지가 있습니다."
      ],
      english: [
        "Yes, there is one in the room.",
        "No, but there is a shared microwave available."
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/room-service-23.mp3",
    text: "Can I order a salad and soup?",
    meaning: "샐러드와 수프를 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 어떤 샐러드를 원하시나요?",
        "죄송하지만, 샐러드는 현재 제공되지 않습니다."
      ],
      english: [
        "Yes, what kind of salad would you like?",
        "I'm sorry, but we don't have salads at the moment."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/room-service-24.mp3",
    text: "Do you offer wine pairings with meals?",
    meaning: "식사와 함께 와인 페어링을 제공하나요?",
    answers: {
      korean: [
        "네, 추천 와인이 있습니다.",
        "죄송하지만, 와인 서비스는 제공되지 않습니다."
      ],
      english: [
        "Yes, we have recommended pairings.",
        "I'm sorry, but we don't offer wine service."
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/room-service-25.mp3",
    text: "Can I request candles for a romantic dinner?",
    meaning: "로맨틱한 저녁을 위해 촛불을 요청할 수 있나요?",
    answers: {
      korean: [
        "네, 촛불을 준비해 드리겠습니다.",
        "죄송하지만, 촛불 서비스는 제공되지 않습니다."
      ],
      english: [
        "Yes, we'll prepare candles for you.",
        "I'm sorry, but we don't offer candlelight service."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/room-service-26.mp3",
    text: "Can I get a birthday surprise set up in my room?",
    meaning: "객실에서 생일 서프라이즈를 준비할 수 있나요?",
    answers: {
      korean: [
        "네, 미리 요청하시면 가능합니다.",
        "죄송하지만, 특별 이벤트 준비는 제공되지 않습니다."
      ],
      english: [
        "Yes, we can arrange it if you request in advance.",
        "I'm sorry, but we don't offer special event setups."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/room-service-27.mp3",
    text: "Can I order room service for multiple rooms?",
    meaning: "여러 객실로 룸서비스를 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 몇 개의 객실에 배달하시겠어요?",
        "죄송하지만, 한 객실당 한 주문만 가능합니다."
      ],
      english: [
        "Yes, how many rooms would you like to deliver to?",
        "I'm sorry, but we can only deliver to one room per order."
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/room-service-28.mp3",
    text: "Can I request a high chair for my baby?",
    meaning: "아기용 식탁 의자를 요청할 수 있나요?",
    answers: {
      korean: [
        "네, 무료로 제공됩니다.",
        "죄송하지만, 아기용 의자가 없습니다."
      ],
      english: [
        "Yes, we provide them for free.",
        "I'm sorry, but we don't have any available."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/room-service-29.mp3",
    text: "Can I order a surprise anniversary dinner?",
    meaning: "기념일 서프라이즈 저녁을 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 특별 메뉴를 준비할 수 있습니다.",
        "죄송하지만, 기념일 서비스는 제공되지 않습니다."
      ],
      english: [
        "Yes, we can prepare a special menu.",
        "I'm sorry, but we don't offer anniversary services."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/room-service-30.mp3",
    text: "Can I get my room cleaned right now?",
    meaning: "지금 객실 청소를 요청할 수 있나요?",
    answers: {
      korean: [
        "네, 하우스키핑을 바로 보내드리겠습니다.",
        "죄송하지만, 지금은 청소 서비스가 불가능합니다."
      ],
      english: [
        "Yes, I'll send housekeeping right away.",
        "I'm sorry, but cleaning service is not available right now."
      ]
    }
  }
];