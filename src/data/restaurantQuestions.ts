import { Question } from '../types';

// 패스트푸드점 & 레스토랑 질문들 (3_1restaurant_phrases_final)
export const restaurantPhrases: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/restaurant-1.mp3",
    text: "Do you have a table for two?",
    meaning: "두 명이 앉을 수 있는 테이블이 있나요?",
    answers: {
      korean: [
        "네, 창가 쪽에 자리가 있습니다.",
        "죄송하지만, 현재 모든 테이블이 찼습니다."
      ],
      english: [
        "Yes, we have a table by the window.",
        "I'm sorry, but we're fully booked."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/restaurant-2.mp3",
    text: "Can I see the menu, please?",
    meaning: "메뉴를 볼 수 있을까요?",
    answers: {
      korean: [
        "네, 여기 있습니다.",
        "QR 코드를 스캔하면 메뉴를 확인할 수 있습니다."
      ],
      english: [
        "Yes, here you go.",
        "You can scan the QR code to see the menu."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/restaurant-3.mp3",
    text: "What do you recommend?",
    meaning: "추천 메뉴는 무엇인가요?",
    answers: {
      korean: [
        "스테이크가 가장 인기 있는 메뉴입니다.",
        "오늘의 스페셜 요리를 추천드립니다."
      ],
      english: [
        "The steak is our most popular dish.",
        "I recommend today's special."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/restaurant-4.mp3",
    text: "Can I have a burger with fries?",
    meaning: "버거와 감자튀김을 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 세트로 드릴까요?",
        "죄송하지만, 감자튀김이 다 떨어졌습니다."
      ],
      english: [
        "Yes, would you like it as a combo?",
        "I'm sorry, but we're out of fries."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/restaurant-5.mp3",
    text: "Does this dish contain nuts?",
    meaning: "이 요리에 견과류가 들어 있나요?",
    answers: {
      korean: [
        "네, 약간의 땅콩이 들어 있습니다.",
        "아니요, 견과류는 포함되지 않습니다."
      ],
      english: [
        "Yes, it contains some peanuts.",
        "No, it does not contain any nuts."
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/restaurant-6.mp3",
    text: "Can I get a vegetarian option?",
    meaning: "채식 메뉴가 있나요?",
    answers: {
      korean: [
        "네, 비건 버거와 샐러드가 있습니다.",
        "죄송하지만, 채식 메뉴는 없습니다."
      ],
      english: [
        "Yes, we have a vegan burger and a salad.",
        "I'm sorry, but we don't have vegetarian options."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/restaurant-7.mp3",
    text: "How long will the food take?",
    meaning: "음식이 나오기까지 얼마나 걸리나요?",
    answers: {
      korean: [
        "약 20분 정도 걸립니다.",
        "지금 바빠서 40분 정도 소요될 예정입니다."
      ],
      english: [
        "It will take about 20 minutes.",
        "We're busy right now, so it may take 40 minutes."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/restaurant-8.mp3",
    text: "Can I get an extra plate?",
    meaning: "추가 접시를 받을 수 있나요?",
    answers: {
      korean: [
        "네, 바로 가져다 드리겠습니다.",
        "죄송하지만, 추가 접시는 제공되지 않습니다."
      ],
      english: [
        "Yes, I'll bring one right away.",
        "I'm sorry, but we don't provide extra plates."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/restaurant-9.mp3",
    text: "Can I have this to go?",
    meaning: "이거 포장할 수 있을까요?",
    answers: {
      korean: [
        "네, 포장해 드리겠습니다.",
        "죄송하지만, 이 메뉴는 포장이 불가능합니다."
      ],
      english: [
        "Yes, I'll pack it for you.",
        "I'm sorry, but this dish cannot be taken to go."
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/restaurant-10.mp3",
    text: "Do you accept credit cards?",
    meaning: "신용카드 결제가 되나요?",
    answers: {
      korean: [
        "네, 모든 주요 신용카드를 받습니다.",
        "죄송하지만, 현금 결제만 가능합니다."
      ],
      english: [
        "Yes, we accept all major credit cards.",
        "I'm sorry, but we only accept cash."
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/restaurant-11.mp3",
    text: "Can I get a glass of water?",
    meaning: "물 한 잔 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 바로 가져다 드리겠습니다.",
        "생수 한 병을 구매하실 수도 있습니다."
      ],
      english: [
        "Yes, I'll bring it right away.",
        "You can also purchase a bottle of water."
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/restaurant-12.mp3",
    text: "Can I order a coffee?",
    meaning: "커피를 주문할 수 있을까요?",
    answers: {
      korean: [
        "네, 어떤 커피를 원하시나요?",
        "죄송하지만, 커피 머신이 고장 났습니다."
      ],
      english: [
        "Yes, what kind of coffee would you like?",
        "I'm sorry, but our coffee machine is broken."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/restaurant-13.mp3",
    text: "Can I have my steak well done?",
    meaning: "스테이크를 완전히 익혀서 받을 수 있나요?",
    answers: {
      korean: [
        "네, 웰던으로 준비해 드리겠습니다.",
        "죄송하지만, 기본 조리 상태로만 제공됩니다."
      ],
      english: [
        "Yes, we'll prepare it well done.",
        "I'm sorry, but we only serve it as is."
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/restaurant-14.mp3",
    text: "Is there a kids' menu?",
    meaning: "어린이 메뉴가 있나요?",
    answers: {
      korean: [
        "네, 키즈 버거와 파스타가 있습니다.",
        "죄송하지만, 어린이 전용 메뉴는 없습니다."
      ],
      english: [
        "Yes, we have a kids' burger and pasta.",
        "I'm sorry, but we don't have a kids' menu."
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/restaurant-15.mp3",
    text: "Can I get a side of rice?",
    meaning: "밥을 추가로 받을 수 있나요?",
    answers: {
      korean: [
        "네, 추가 비용이 발생합니다.",
        "죄송하지만, 밥은 제공되지 않습니다."
      ],
      english: [
        "Yes, there's an extra charge.",
        "I'm sorry, but we don't serve rice."
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/restaurant-16.mp3",
    text: "Do you offer refills on soft drinks?",
    meaning: "탄산음료 리필이 가능한가요?",
    answers: {
      korean: [
        "네, 무제한 리필 가능합니다.",
        "죄송하지만, 리필은 제공되지 않습니다."
      ],
      english: [
        "Yes, free refills are available.",
        "I'm sorry, but we don't offer refills."
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/restaurant-17.mp3",
    text: "Can I pay separately?",
    meaning: "계산을 따로 할 수 있나요?",
    answers: {
      korean: [
        "네, 개별 결제 가능합니다.",
        "죄송하지만, 한 번에 결제해 주셔야 합니다."
      ],
      english: [
        "Yes, you can split the bill.",
        "I'm sorry, but we require one payment per table."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/restaurant-18.mp3",
    text: "Can I get a receipt, please?",
    meaning: "영수증을 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 여기 있습니다.",
        "죄송하지만, 영수증 발급이 어렵습니다."
      ],
      english: [
        "Yes, here you go.",
        "I'm sorry, but we can't provide a receipt."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/restaurant-19.mp3",
    text: "Do you have any gluten-free options?",
    meaning: "글루텐 프리 메뉴가 있나요?",
    answers: {
      korean: [
        "네, 글루텐 프리 피자가 있습니다.",
        "죄송하지만, 모든 음식에 글루텐이 포함되어 있습니다."
      ],
      english: [
        "Yes, we have a gluten-free pizza.",
        "I'm sorry, but all our food contains gluten."
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/restaurant-20.mp3",
    text: "Is there an allergy-friendly menu?",
    meaning: "알레르기 메뉴가 있나요?",
    answers: {
      korean: [
        "네, 특정 재료가 없는 메뉴를 추천해 드릴 수 있습니다.",
        "죄송하지만, 모든 음식에 알레르기 성분이 포함될 가능성이 있습니다."
      ],
      english: [
        "Yes, we can recommend dishes without certain ingredients.",
        "I'm sorry, but our food may contain allergens."
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/restaurant-21.mp3",
    text: "Can I substitute the fries with a salad?",
    meaning: "감자튀김 대신 샐러드로 변경할 수 있나요?",
    answers: {
      korean: [
        "네, 추가 비용 없이 변경 가능합니다.",
        "죄송하지만, 변경이 불가능합니다."
      ],
      english: [
        "Yes, you can substitute it at no extra charge.",
        "I'm sorry, but substitutions are not allowed."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/restaurant-22.mp3",
    text: "Can I get my burger without onions?",
    meaning: "버거에서 양파를 빼고 받을 수 있나요?",
    answers: {
      korean: [
        "네, 양파 없이 준비해 드리겠습니다.",
        "죄송하지만, 재료 변경이 불가능합니다."
      ],
      english: [
        "Yes, we'll prepare it without onions.",
        "I'm sorry, but we cannot modify ingredients."
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/restaurant-23.mp3",
    text: "Do you serve alcohol?",
    meaning: "술을 판매하나요?",
    answers: {
      korean: [
        "네, 맥주와 와인이 있습니다.",
        "죄송하지만, 주류는 판매하지 않습니다."
      ],
      english: [
        "Yes, we serve beer and wine.",
        "I'm sorry, but we don't serve alcohol."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/restaurant-24.mp3",
    text: "Can I get extra sauce on the side?",
    meaning: "소스를 추가로 받을 수 있나요?",
    answers: {
      korean: [
        "네, 추가 소스는 무료로 제공됩니다.",
        "추가 소스는 $1의 비용이 발생합니다."
      ],
      english: [
        "Yes, extra sauce is free.",
        "Extra sauce costs $1."
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/restaurant-25.mp3",
    text: "Is tipping required?",
    meaning: "팁을 꼭 줘야 하나요?",
    answers: {
      korean: [
        "아니요, 선택 사항입니다.",
        "네, 서비스 요금이 포함되어 있습니다."
      ],
      english: [
        "No, it's optional.",
        "Yes, a service charge is included."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/restaurant-26.mp3",
    text: "Do you have takeout containers?",
    meaning: "음식을 포장할 용기가 있나요?",
    answers: {
      korean: [
        "네, 무료로 제공해 드립니다.",
        "죄송하지만, 포장 용기가 없습니다."
      ],
      english: [
        "Yes, we provide them for free.",
        "I'm sorry, but we don't have takeout containers."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/restaurant-27.mp3",
    text: "Can I make a reservation for dinner?",
    meaning: "저녁 예약을 할 수 있나요?",
    answers: {
      korean: [
        "네, 몇 시에 예약하시겠어요?",
        "죄송하지만, 예약을 받지 않습니다."
      ],
      english: [
        "Yes, what time would you like?",
        "I'm sorry, but we don't take reservations."
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/restaurant-28.mp3",
    text: "What are your restaurant hours?",
    meaning: "레스토랑 운영 시간이 어떻게 되나요?",
    answers: {
      korean: [
        "오전 10시부터 오후 10시까지 운영됩니다.",
        "주말에는 자정까지 운영합니다."
      ],
      english: [
        "We're open from 10 AM to 10 PM.",
        "We're open until midnight on weekends."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/restaurant-29.mp3",
    text: "Can I get a recommendation for dessert?",
    meaning: "디저트 추천을 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 초콜릿 케이크가 인기 메뉴입니다.",
        "오늘의 스페셜 디저트를 추천드립니다."
      ],
      english: [
        "Yes, the chocolate cake is our best-seller.",
        "I recommend today's special dessert."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/restaurant-30.mp3",
    text: "Do you offer a loyalty program?",
    meaning: "멤버십 적립 프로그램이 있나요?",
    answers: {
      korean: [
        "네, 포인트 적립이 가능합니다.",
        "죄송하지만, 멤버십 프로그램은 없습니다."
      ],
      english: [
        "Yes, you can earn points on your purchases.",
        "I'm sorry, but we don't have a loyalty program."
      ]
    }
  }
];

// 웨이터에게 요청할 때 질문들 (3_2waiter_requests_final)
export const waiterRequests: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/waiter-request-1.mp3",
    text: "Excuse me, can I get a menu?",
    meaning: "저기요, 메뉴판을 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 여기 있습니다.",
        "죄송하지만, 메뉴는 QR 코드로만 제공됩니다."
      ],
      english: [
        "Sure, here you go.",
        "I'm sorry, but we only provide menus via QR code."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/waiter-request-2.mp3",
    text: "Can I order now?",
    meaning: "지금 주문할 수 있을까요?",
    answers: {
      korean: [
        "네, 주문 도와드리겠습니다.",
        "잠시만 기다려 주세요."
      ],
      english: [
        "Yes, I'll take your order now.",
        "Please wait a moment."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/waiter-request-3.mp3",
    text: "What do you recommend?",
    meaning: "추천 메뉴는 무엇인가요?",
    answers: {
      korean: [
        "스테이크가 가장 인기 있는 메뉴입니다.",
        "오늘의 스페셜을 추천드립니다."
      ],
      english: [
        "The steak is our most popular dish.",
        "I recommend today's special."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/waiter-request-4.mp3",
    text: "Can I have a glass of water?",
    meaning: "물 한 잔 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 바로 가져다 드리겠습니다.",
        "테이블에 물병이 준비되어 있습니다."
      ],
      english: [
        "Yes, I'll bring it right away.",
        "There's a water bottle on your table."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/waiter-request-5.mp3",
    text: "Can I get more napkins?",
    meaning: "냅킨을 더 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 냅킨을 가져다 드리겠습니다.",
        "죄송하지만, 냅킨이 다 떨어졌습니다."
      ],
      english: [
        "Sure, I'll bring you more napkins.",
        "I'm sorry, but we're out of napkins."
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/waiter-request-6.mp3",
    text: "Can I get a fork and knife?",
    meaning: "포크와 나이프를 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 바로 가져다 드리겠습니다.",
        "테이블에 추가 수저가 준비되어 있습니다."
      ],
      english: [
        "Yes, I'll bring them right away.",
        "There are extra utensils on the table."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/waiter-request-7.mp3",
    text: "Do you have any vegetarian options?",
    meaning: "채식 메뉴가 있나요?",
    answers: {
      korean: [
        "네, 비건 버거와 샐러드가 있습니다.",
        "죄송하지만, 채식 메뉴는 없습니다."
      ],
      english: [
        "Yes, we have a vegan burger and a salad.",
        "I'm sorry, but we don't have vegetarian options."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/waiter-request-8.mp3",
    text: "Can I substitute fries with a salad?",
    meaning: "감자튀김 대신 샐러드로 변경할 수 있나요?",
    answers: {
      korean: [
        "네, 추가 비용 없이 변경 가능합니다.",
        "죄송하지만, 변경이 불가능합니다."
      ],
      english: [
        "Yes, you can substitute it at no extra charge.",
        "I'm sorry, but substitutions are not allowed."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/waiter-request-9.mp3",
    text: "Can I have my steak medium rare?",
    meaning: "스테이크를 미디엄 레어로 조리해 주세요.",
    answers: {
      korean: [
        "네, 미디엄 레어로 준비해 드리겠습니다.",
        "죄송하지만, 기본 조리 상태로만 제공됩니다."
      ],
      english: [
        "Yes, we'll prepare it medium rare.",
        "I'm sorry, but we only serve it as is."
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/waiter-request-10.mp3",
    text: "Can I get a refill on my soda?",
    meaning: "탄산음료 리필이 가능한가요?",
    answers: {
      korean: [
        "네, 무료 리필 가능합니다.",
        "죄송하지만, 리필은 제공되지 않습니다."
      ],
      english: [
        "Yes, free refills are available.",
        "I'm sorry, but we don't offer refills."
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/waiter-request-11.mp3",
    text: "Can I order dessert now?",
    meaning: "디저트를 지금 주문할 수 있을까요?",
    answers: {
      korean: [
        "네, 어떤 디저트를 원하시나요?",
        "죄송하지만, 아직 준비되지 않았습니다."
      ],
      english: [
        "Yes, what kind of dessert would you like?",
        "I'm sorry, but it's not ready yet."
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/waiter-request-12.mp3",
    text: "Can I have extra sauce on the side?",
    meaning: "추가 소스를 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 추가 비용 없이 제공됩니다.",
        "추가 소스는 1달러의 비용이 발생합니다."
      ],
      english: [
        "Yes, we provide it at no extra charge.",
        "Extra sauce costs $1."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/waiter-request-13.mp3",
    text: "Can I get some ice for my drink?",
    meaning: "음료에 얼음을 좀 추가할 수 있을까요?",
    answers: {
      korean: [
        "네, 얼음을 추가해 드리겠습니다.",
        "죄송하지만, 얼음이 없습니다."
      ],
      english: [
        "Sure, I'll bring some ice.",
        "I'm sorry, but we're out of ice."
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/waiter-request-14.mp3",
    text: "Can I have this meal to go?",
    meaning: "이 음식을 포장할 수 있을까요?",
    answers: {
      korean: [
        "네, 포장해 드리겠습니다.",
        "죄송하지만, 이 음식은 포장이 불가능합니다."
      ],
      english: [
        "Yes, I'll pack it for you.",
        "I'm sorry, but this dish cannot be taken to go."
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/waiter-request-15.mp3",
    text: "Can I get the check, please?",
    meaning: "계산서를 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 계산서를 가져다 드리겠습니다.",
        "죄송하지만, 키오스크에서 결제해 주세요."
      ],
      english: [
        "Yes, I'll bring the bill.",
        "I'm sorry, but please pay at the kiosk."
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/waiter-request-16.mp3",
    text: "Do you accept credit cards?",
    meaning: "신용카드 결제가 가능합니까?",
    answers: {
      korean: [
        "네, 모든 주요 신용카드를 받습니다.",
        "죄송하지만, 현금 결제만 가능합니다."
      ],
      english: [
        "Yes, we accept all major credit cards.",
        "I'm sorry, but we only accept cash."
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/waiter-request-17.mp3",
    text: "Can I split the bill?",
    meaning: "계산을 나눠서 할 수 있을까요?",
    answers: {
      korean: [
        "네, 개별 결제가 가능합니다.",
        "죄송하지만, 하나의 결제만 가능합니다."
      ],
      english: [
        "Yes, you can split the bill.",
        "I'm sorry, but we only accept a single payment."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/waiter-request-18.mp3",
    text: "Is tipping required?",
    meaning: "팁을 꼭 줘야 하나요?",
    answers: {
      korean: [
        "아니요, 선택 사항입니다.",
        "네, 서비스 요금이 포함되어 있습니다."
      ],
      english: [
        "No, it's optional.",
        "Yes, a service charge is included."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/waiter-request-19.mp3",
    text: "Can I have a table by the window?",
    meaning: "창가 쪽 테이블을 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 창가 테이블로 안내해 드리겠습니다.",
        "죄송하지만, 창가 자리는 만석입니다."
      ],
      english: [
        "Yes, I'll seat you by the window.",
        "I'm sorry, but all window seats are taken."
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/waiter-request-20.mp3",
    text: "Do you have high chairs for kids?",
    meaning: "아이들을 위한 높은 의자가 있나요?",
    answers: {
      korean: [
        "네, 준비해 드리겠습니다.",
        "죄송하지만, 준비된 의자가 없습니다."
      ],
      english: [
        "Yes, I'll bring one.",
        "I'm sorry, but we don't have high chairs available."
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/waiter-request-21.mp3",
    text: "Can I have an extra plate?",
    meaning: "추가 접시를 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 추가 접시를 드리겠습니다.",
        "죄송하지만, 추가 접시는 제공되지 않습니다."
      ],
      english: [
        "Yes, I'll bring you an extra plate.",
        "I'm sorry, but we don't provide extra plates."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/waiter-request-22.mp3",
    text: "Do you have a special menu for allergies?",
    meaning: "알레르기 메뉴가 있나요?",
    answers: {
      korean: [
        "네, 특정 재료가 없는 메뉴를 추천해 드릴 수 있습니다.",
        "죄송하지만, 모든 음식에 알레르기 성분이 포함될 가능성이 있습니다."
      ],
      english: [
        "Yes, we can recommend dishes without certain ingredients.",
        "I'm sorry, but our food may contain allergens."
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/waiter-request-23.mp3",
    text: "Can I get my steak well-done?",
    meaning: "스테이크를 완전히 익혀서 받을 수 있나요?",
    answers: {
      korean: [
        "네, 웰던으로 조리해 드리겠습니다.",
        "죄송하지만, 기본 조리 상태로만 제공됩니다."
      ],
      english: [
        "Yes, we'll prepare it well-done.",
        "I'm sorry, but we only serve it as is."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/waiter-request-24.mp3",
    text: "Do you serve alcohol?",
    meaning: "술을 판매하나요?",
    answers: {
      korean: [
        "네, 맥주와 와인이 있습니다.",
        "죄송하지만, 주류는 판매하지 않습니다."
      ],
      english: [
        "Yes, we serve beer and wine.",
        "I'm sorry, but we don't serve alcohol."
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/waiter-request-25.mp3",
    text: "Can I see the wine list?",
    meaning: "와인 리스트를 볼 수 있을까요?",
    answers: {
      korean: [
        "네, 여기 있습니다.",
        "죄송하지만, 현재 와인은 제공되지 않습니다."
      ],
      english: [
        "Yes, here it is.",
        "I'm sorry, but we don't have wine available."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/waiter-request-26.mp3",
    text: "Can I get a refill on my coffee?",
    meaning: "커피를 리필할 수 있을까요?",
    answers: {
      korean: [
        "네, 커피는 무제한 리필 가능합니다.",
        "죄송하지만, 커피 리필은 제공되지 않습니다."
      ],
      english: [
        "Yes, coffee refills are unlimited.",
        "I'm sorry, but we don't offer coffee refills."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/waiter-request-27.mp3",
    text: "Do you have a buffet option?",
    meaning: "뷔페 옵션이 있나요?",
    answers: {
      korean: [
        "네, 점심 뷔페가 제공됩니다.",
        "죄송하지만, 현재 뷔페는 운영되지 않습니다."
      ],
      english: [
        "Yes, we have a lunch buffet.",
        "I'm sorry, but we don't have a buffet at the moment."
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/waiter-request-28.mp3",
    text: "Can I order a birthday cake?",
    meaning: "생일 케이크를 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 미리 예약하시면 가능합니다.",
        "죄송하지만, 생일 케이크 서비스는 제공되지 않습니다."
      ],
      english: [
        "Yes, if you order in advance, we can arrange it.",
        "I'm sorry, but we don't offer birthday cakes."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/waiter-request-29.mp3",
    text: "Can I request a private dining area?",
    meaning: "개인 다이닝 공간을 요청할 수 있을까요?",
    answers: {
      korean: [
        "네, 예약하시면 가능합니다.",
        "죄송하지만, 개인 다이닝 공간은 없습니다."
      ],
      english: [
        "Yes, you can reserve a private dining area.",
        "I'm sorry, but we don't have private dining rooms."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/waiter-request-30.mp3",
    text: "Can I have a discount with my membership?",
    meaning: "멤버십으로 할인받을 수 있나요?",
    answers: {
      korean: [
        "네, 멤버십으로 10% 할인이 적용됩니다.",
        "죄송하지만, 멤버십 할인이 적용되지 않습니다."
      ],
      english: [
        "Yes, you get a 10% discount with your membership.",
        "I'm sorry, but we don't offer membership discounts."
      ]
    }
  }
];