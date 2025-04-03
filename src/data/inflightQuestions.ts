import { Question } from '../types';

// 기내 음료 주문 질문들 (7_1inflight_drink_questions)
export const inflightDrinkQuestions: Question[] = [
  {
    "id": 1,
    "audioUrl": "/audio/inflight-1.mp3",
    "text": "Can I have a glass of water, please?",
    "meaning": "물 한 잔 주시겠어요?",
    "answers": {
      "korean": [
        "네, 잠시만 기다려 주세요.",
        "죄송하지만, 물이 떨어졌습니다."
      ],
      "english": [
        "Sure, please wait a moment.",
        "I’m sorry, but we’re out of water."
      ]
    }
  },
  {
    "id": 2,
    "audioUrl": "/audio/inflight-2.mp3",
    "text": "Do you have orange juice?",
    "meaning": "오렌지 주스 있나요?",
    "answers": {
      "korean": [
        "네, 오렌지 주스를 드리겠습니다.",
        "죄송하지만, 오렌지 주스가 없습니다."
      ],
      "english": [
        "Yes, I’ll bring you some orange juice.",
        "I’m sorry, but we don’t have orange juice."
      ]
    }
  },
  {
    "id": 3,
    "audioUrl": "/audio/inflight-3.mp3",
    "text": "Can I get a cup of coffee?",
    "meaning": "커피 한 잔 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 설탕과 우유도 드릴까요?",
        "죄송하지만, 커피가 준비되지 않았습니다."
      ],
      "english": [
        "Yes, would you like sugar and milk?",
        "I’m sorry, but coffee is not available right now."
      ]
    }
  },
  {
    "id": 4,
    "audioUrl": "/audio/inflight-4.mp3",
    "text": "Do you serve alcohol?",
    "meaning": "주류 서비스가 있나요?",
    "answers": {
      "korean": [
        "네, 맥주와 와인이 있습니다.",
        "죄송하지만, 현재 주류 서비스는 제공되지 않습니다."
      ],
      "english": [
        "Yes, we have beer and wine.",
        "I’m sorry, but we are not serving alcohol right now."
      ]
    }
  },
  {
    "id": 5,
    "audioUrl": "/audio/inflight-5.mp3",
    "text": "Can I have a vegetarian meal?",
    "meaning": "채식 메뉴를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 채식 메뉴를 준비해 드리겠습니다.",
        "죄송하지만, 사전 주문이 필요합니다."
      ],
      "english": [
        "Yes, I’ll get you a vegetarian meal.",
        "I’m sorry, but it requires a pre-order."
      ]
    }
  },
  {
    "id": 6,
    "audioUrl": "/audio/inflight-6.mp3",
    "text": "Do you have any snacks?",
    "meaning": "간식이 있나요?",
    "answers": {
      "korean": [
        "네, 견과류와 크래커가 있습니다.",
        "죄송하지만, 간식이 다 떨어졌습니다."
      ],
      "english": [
        "Yes, we have nuts and crackers.",
        "I’m sorry, but we’ve run out of snacks."
      ]
    }
  },
  {
    "id": 7,
    "audioUrl": "/audio/inflight-7.mp3",
    "text": "Can I get an extra blanket?",
    "meaning": "추가 담요를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 담요 하나 더 드리겠습니다.",
        "죄송하지만, 모든 담요가 사용 중입니다."
      ],
      "english": [
        "Yes, I’ll bring you another blanket.",
        "I’m sorry, but all blankets are in use."
      ]
    }
  },
  {
    "id": 8,
    "audioUrl": "/audio/inflight-8.mp3",
    "text": "Can you turn down the air conditioning?",
    "meaning": "에어컨을 조금 줄여 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 온도를 조정해 드리겠습니다.",
        "죄송하지만, 조절이 어렵습니다."
      ],
      "english": [
        "Yes, I’ll adjust the temperature.",
        "I’m sorry, but I can’t change it."
      ]
    }
  },
  {
    "id": 9,
    "audioUrl": "/audio/inflight-9.mp3",
    "text": "Can I change my seat?",
    "meaning": "좌석을 바꿀 수 있을까요?",
    "answers": {
      "korean": [
        "네, 빈 좌석으로 이동 가능합니다.",
        "죄송하지만, 모든 좌석이 만석입니다."
      ],
      "english": [
        "Yes, you can move to an available seat.",
        "I’m sorry, but all seats are taken."
      ]
    }
  },
  {
    "id": 10,
    "audioUrl": "/audio/inflight-10.mp3",
    "text": "Do you have Wi-Fi on this flight?",
    "meaning": "이 비행기에서 와이파이가 제공되나요?",
    "answers": {
      "korean": [
        "네, 유료 와이파이 서비스를 이용할 수 있습니다.",
        "죄송하지만, 이 항공편에는 와이파이가 없습니다."
      ],
      "english": [
        "Yes, you can use the paid Wi-Fi service.",
        "I’m sorry, but there’s no Wi-Fi on this flight."
      ]
    }
  },
  {
    "id": 11,
    "audioUrl": "/audio/inflight-11.mp3",
    "text": "Can I have a pillow?",
    "meaning": "베개를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 베개를 가져다 드리겠습니다.",
        "죄송하지만, 모든 베개가 사용 중입니다."
      ],
      "english": [
        "Yes, I’ll bring you a pillow.",
        "I’m sorry, but all pillows are in use."
      ]
    }
  },
  {
    "id": 12,
    "audioUrl": "/audio/inflight-12.mp3",
    "text": "Can I recline my seat?",
    "meaning": "좌석을 뒤로 젖혀도 될까요?",
    "answers": {
      "korean": [
        "네, 좌석을 조절하셔도 됩니다.",
        "이륙 및 착륙 시에는 좌석을 세워 주셔야 합니다."
      ],
      "english": [
        "Yes, you can adjust your seat.",
        "You need to keep your seat upright during takeoff and landing."
      ]
    }
  },
  {
    "id": 13,
    "audioUrl": "/audio/inflight-13.mp3",
    "text": "Can I have some ice with my drink?",
    "meaning": "음료에 얼음을 넣어 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 얼음을 넣어 드리겠습니다.",
        "죄송하지만, 얼음이 없습니다."
      ],
      "english": [
        "Yes, I’ll add some ice.",
        "I’m sorry, but we don’t have ice."
      ]
    }
  },
  {
    "id": 14,
    "audioUrl": "/audio/inflight-14.mp3",
    "text": "Do you have a menu?",
    "meaning": "메뉴판이 있나요?",
    "answers": {
      "korean": [
        "네, 메뉴를 드리겠습니다.",
        "죄송하지만, 오늘 메뉴가 한정되어 있습니다."
      ],
      "english": [
        "Yes, here is the menu.",
        "I’m sorry, but today’s menu is limited."
      ]
    }
  },
  {
    "id": 15,
    "audioUrl": "/audio/inflight-15.mp3",
    "text": "Can I have a bottle of water?",
    "meaning": "생수 한 병 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 생수를 드리겠습니다.",
        "죄송하지만, 컵에 제공됩니다."
      ],
      "english": [
        "Yes, I’ll bring you a bottle of water.",
        "I’m sorry, but we only serve it in cups."
      ]
    }
  },
  {
    "id": 16,
    "audioUrl": "/audio/inflight-16.mp3",
    "text": "Can you wake me up for the meal?",
    "meaning": "식사 시간에 깨워 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 식사 시간에 깨워 드리겠습니다.",
        "죄송하지만, 개별 깨우기는 어렵습니다."
      ],
      "english": [
        "Yes, I’ll wake you up for the meal.",
        "I’m sorry, but we can’t wake up individual passengers."
      ]
    }
  },
  {
    "id": 17,
    "audioUrl": "/audio/inflight-17.mp3",
    "text": "Is there an in-flight entertainment system?",
    "meaning": "기내 엔터테인먼트 시스템이 있나요?",
    "answers": {
      "korean": [
        "네, 화면에서 영화와 음악을 감상할 수 있습니다.",
        "죄송하지만, 이 비행기에는 엔터테인먼트 시스템이 없습니다."
      ],
      "english": [
        "Yes, you can watch movies and listen to music.",
        "I’m sorry, but there’s no entertainment system on this flight."
      ]
    }
  },
  {
    "id": 18,
    "audioUrl": "/audio/inflight-18.mp3",
    "text": "Do you have noise-canceling headphones?",
    "meaning": "노이즈 캔슬링 헤드폰이 있나요?",
    "answers": {
      "korean": [
        "네, 제공해 드릴 수 있습니다.",
        "죄송하지만, 일반 이어폰만 제공됩니다."
      ],
      "english": [
        "Yes, we can provide one.",
        "I’m sorry, but we only offer regular earphones."
      ]
    }
  },
  {
    "id": 19,
    "audioUrl": "/audio/inflight-19.mp3",
    "text": "Can I charge my phone?",
    "meaning": "휴대폰을 충전할 수 있나요?",
    "answers": {
      "korean": [
        "네, 좌석 아래에 충전 포트가 있습니다.",
        "죄송하지만, 충전 포트가 없습니다."
      ],
      "english": [
        "Yes, there’s a charging port under your seat.",
        "I’m sorry, but there are no charging ports."
      ]
    }
  },
  {
    "id": 20,
    "audioUrl": "/audio/inflight-20.mp3",
    "text": "Can I use my laptop during the flight?",
    "meaning": "비행 중에 노트북을 사용할 수 있나요?",
    "answers": {
      "korean": [
        "네, 사용 가능합니다.",
        "이륙 및 착륙 시에는 사용이 제한됩니다."
      ],
      "english": [
        "Yes, you can use it.",
        "You must turn it off during takeoff and landing."
      ]
    }
  },
  {
    "id": 21,
    "audioUrl": "/audio/inflight-21.mp3",
    "text": "Can I get a second meal?",
    "meaning": "식사를 한 번 더 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 남은 식사가 있다면 제공해 드리겠습니다.",
        "죄송하지만, 추가 식사는 불가능합니다."
      ],
      "english": [
        "Yes, if we have extras, I’ll bring one.",
        "I’m sorry, but we can’t offer extra meals."
      ]
    }
  },
  {
    "id": 22,
    "audioUrl": "/audio/inflight-22.mp3",
    "text": "Can I get hot water for my tea?",
    "meaning": "차를 마실 뜨거운 물을 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 뜨거운 물을 드리겠습니다.",
        "죄송하지만, 지금 제공이 어렵습니다."
      ],
      "english": [
        "Yes, I’ll bring you some hot water.",
        "I’m sorry, but we can’t serve it now."
      ]
    }
  },
  {
    "id": 23,
    "audioUrl": "/audio/inflight-23.mp3",
    "text": "Can you help me with my overhead luggage?",
    "meaning": "머리 위 선반의 짐을 내려 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 도와드리겠습니다.",
        "죄송하지만, 승무원은 짐을 내려 드릴 수 없습니다."
      ],
      "english": [
        "Yes, I’ll help you.",
        "I’m sorry, but we’re not allowed to handle luggage."
      ]
    }
  },
  {
    "id": 24,
    "audioUrl": "/audio/inflight-24.mp3",
    "text": "Can I buy duty-free items?",
    "meaning": "면세품을 구매할 수 있나요?",
    "answers": {
      "korean": [
        "네, 기내 면세품 판매가 가능합니다.",
        "죄송하지만, 이번 비행에서는 면세품 판매가 없습니다."
      ],
      "english": [
        "Yes, in-flight duty-free shopping is available.",
        "I’m sorry, but there’s no duty-free sale on this flight."
      ]
    }
  },
  {
    "id": 25,
    "audioUrl": "/audio/inflight-25.mp3",
    "text": "Where is the nearest restroom?",
    "meaning": "가장 가까운 화장실이 어디인가요?",
    "answers": {
      "korean": [
        "화장실은 앞쪽과 뒤쪽에 있습니다.",
        "현재 모든 화장실이 사용 중입니다."
      ],
      "english": [
        "The restrooms are in the front and back.",
        "All restrooms are occupied right now."
      ]
    }
  },
  {
    "id": 26,
    "audioUrl": "/audio/inflight-26.mp3",
    "text": "Can I get a first-aid kit?",
    "meaning": "구급상자를 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 간단한 응급처치를 해 드리겠습니다.",
        "심각한 경우 승무원에게 알려 주세요."
      ],
      "english": [
        "Yes, I can provide basic first aid.",
        "Please inform the crew in case of an emergency."
      ]
    }
  },
  {
    "id": 27,
    "audioUrl": "/audio/inflight-27.mp3",
    "text": "Can I change my meal preference?",
    "meaning": "식사 종류를 변경할 수 있나요?",
    "answers": {
      "korean": [
        "네, 가능한 옵션을 확인해 드리겠습니다.",
        "죄송하지만, 사전 주문이 필요합니다."
      ],
      "english": [
        "Yes, I’ll check the available options.",
        "I’m sorry, but meal changes require pre-ordering."
      ]
    }
  },
  {
    "id": 28,
    "audioUrl": "/audio/inflight-28.mp3",
    "text": "Can I borrow a pen?",
    "meaning": "펜을 빌릴 수 있을까요?",
    "answers": {
      "korean": [
        "네, 여기 있습니다.",
        "죄송하지만, 펜이 없습니다."
      ],
      "english": [
        "Yes, here you go.",
        "I’m sorry, but we don’t have any pens."
      ]
    }
  },
  {
    "id": 29,
    "audioUrl": "/audio/inflight-29.mp3",
    "text": "Can I have a sleeping mask?",
    "meaning": "수면 안대를 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 하나 드리겠습니다.",
        "죄송하지만, 안대가 준비되어 있지 않습니다."
      ],
      "english": [
        "Yes, I’ll bring you one.",
        "I’m sorry, but we don’t have sleeping masks."
      ]
    }
  },
  {
    "id": 30,
    "audioUrl": "/audio/inflight-30.mp3",
    "text": "Can I get assistance with my connecting flight?",
    "meaning": "연결 항공편에 대한 도움을 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 연결 항공편 정보를 확인해 드리겠습니다.",
        "죄송하지만, 공항에서 직접 확인하셔야 합니다."
      ],
      "english": [
        "Yes, I’ll check your connecting flight details.",
        "I’m sorry, but you need to check at the airport."
      ]
    }
  },
  // [Add remaining 28 drink-related questions]
];

// 기내 요청사항 질문들 (7_2inflight_request_questions)
export const inflightRequestQuestions: Question[] = [
  {
  "id": 1,
    "audioUrl": "/audio/inflight-requests-1.mp3",
    "text": "Can I have a bottle of water?",
    "meaning": "생수 한 병 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 가져다 드리겠습니다.",
        "죄송하지만, 컵으로만 제공됩니다."
      ],
      "english": [
        "Yes, I’ll bring you one.",
        "I’m sorry, but we only serve it in cups."
      ]
    }
  },
  {
    "id": 2,
    "audioUrl": "/audio/inflight-requests-2.mp3",
    "text": "Can you bring me a blanket?",
    "meaning": "담요를 가져다 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 잠시만 기다려 주세요.",
        "죄송하지만, 담요가 다 떨어졌습니다."
      ],
      "english": [
        "Yes, please wait a moment.",
        "I’m sorry, but we’ve run out of blankets."
      ]
    }
  },
  {
    "id": 3,
    "audioUrl": "/audio/inflight-requests-3.mp3",
    "text": "Can I have an extra pillow?",
    "meaning": "베개를 하나 더 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 하나 더 드리겠습니다.",
        "죄송하지만, 모든 베개가 사용 중입니다."
      ],
      "english": [
        "Yes, I’ll bring you another one.",
        "I’m sorry, but all pillows are in use."
      ]
    }
  },
  {
    "id": 4,
    "audioUrl": "/audio/inflight-requests-4.mp3",
    "text": "Can you adjust the temperature?",
    "meaning": "온도를 조절해 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 조금 조정해 드리겠습니다.",
        "죄송하지만, 온도 조절이 어렵습니다."
      ],
      "english": [
        "Yes, I’ll adjust it a bit.",
        "I’m sorry, but we can’t change the temperature."
      ]
    }
  },
  {
    "id": 5,
    "audioUrl": "/audio/inflight-requests-5.mp3",
    "text": "Can I get a cup of tea?",
    "meaning": "차 한 잔 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 차를 가져다 드리겠습니다.",
        "죄송하지만, 차가 준비되지 않았습니다."
      ],
      "english": [
        "Yes, I’ll bring you some tea.",
        "I’m sorry, but we don’t have tea available."
      ]
    }
  },
  {
    "id": 6,
    "audioUrl": "/audio/inflight-requests-6.mp3",
    "text": "Can I change my seat?",
    "meaning": "좌석을 바꿀 수 있을까요?",
    "answers": {
      "korean": [
        "네, 빈 좌석이 있으면 이동 가능합니다.",
        "죄송하지만, 모든 좌석이 만석입니다."
      ],
      "english": [
        "Yes, if there’s an available seat.",
        "I’m sorry, but all seats are taken."
      ]
    }
  },
  {
    "id": 7,
    "audioUrl": "/audio/inflight-requests-7.mp3",
    "text": "Do you have noise-canceling headphones?",
    "meaning": "노이즈 캔슬링 헤드폰이 있나요?",
    "answers": {
      "korean": [
        "네, 하나 가져다 드리겠습니다.",
        "죄송하지만, 일반 이어폰만 제공됩니다."
      ],
      "english": [
        "Yes, I’ll bring you one.",
        "I’m sorry, but we only provide regular earphones."
      ]
    }
  },
  {
    "id": 8,
    "audioUrl": "/audio/inflight-requests-8.mp3",
    "text": "Can you help me store my luggage?",
    "meaning": "짐을 보관하는 걸 도와주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 선반에 올려 드리겠습니다.",
        "죄송하지만, 승무원은 짐을 들어 올려 드릴 수 없습니다."
      ],
      "english": [
        "Yes, I’ll place it in the overhead bin.",
        "I’m sorry, but we’re not allowed to lift luggage."
      ]
    }
  },
  {
    "id": 9,
    "audioUrl": "/audio/inflight-requests-9.mp3",
    "text": "Can I use my laptop?",
    "meaning": "노트북을 사용할 수 있나요?",
    "answers": {
      "korean": [
        "네, 비행 중에는 사용 가능합니다.",
        "이륙 및 착륙 시에는 사용이 제한됩니다."
      ],
      "english": [
        "Yes, you can use it during the flight.",
        "You need to turn it off during takeoff and landing."
      ]
    }
  },
  {
    "id": 10,
    "audioUrl": "/audio/inflight-requests-10.mp3",
    "text": "Can I borrow a pen?",
    "meaning": "펜을 빌릴 수 있을까요?",
    "answers": {
      "korean": [
        "네, 여기 있습니다.",
        "죄송하지만, 펜이 없습니다."
      ],
      "english": [
        "Yes, here you go.",
        "I’m sorry, but we don’t have any pens."
      ]
    }
  },
  {
    "id": 11,
    "audioUrl": "/audio/inflight-requests-11.mp3",
    "text": "Can I have a window seat?",
    "meaning": "창가 좌석으로 바꿀 수 있을까요?",
    "answers": {
      "korean": [
        "네, 빈 좌석이 있으면 가능합니다.",
        "죄송하지만, 창가 좌석이 없습니다."
      ],
      "english": [
        "Yes, if there’s an available seat.",
        "I’m sorry, but there are no window seats left."
      ]
    }
  },
  {
    "id": 12,
    "audioUrl": "/audio/inflight-requests-12.mp3",
    "text": "Can I have a meal now?",
    "meaning": "지금 식사를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 바로 가져다 드리겠습니다.",
        "죄송하지만, 식사 시간이 아직 아닙니다."
      ],
      "english": [
        "Yes, I’ll bring it right away.",
        "I’m sorry, but it’s not meal time yet."
      ]
    }
  },
  {
    "id": 13,
    "audioUrl": "/audio/inflight-requests-13.mp3",
    "text": "Can I have a vegetarian meal?",
    "meaning": "채식 메뉴를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 채식 메뉴를 준비해 드리겠습니다.",
        "죄송하지만, 사전 주문이 필요합니다."
      ],
      "english": [
        "Yes, I’ll get you a vegetarian meal.",
        "I’m sorry, but it requires a pre-order."
      ]
    }
  },
  {
    "id": 14,
    "audioUrl": "/audio/inflight-requests-14.mp3",
    "text": "Can I get a second meal?",
    "meaning": "식사를 한 번 더 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 남은 식사가 있다면 제공해 드리겠습니다.",
        "죄송하지만, 추가 식사는 불가능합니다."
      ],
      "english": [
        "Yes, if we have extras, I’ll bring one.",
        "I’m sorry, but we can’t offer extra meals."
      ]
    }
  },
  {
    "id": 15,
    "audioUrl": "/audio/inflight-requests-15.mp3",
    "text": "Can I get some medicine for a headache?",
    "meaning": "두통약을 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 진통제를 드리겠습니다.",
        "죄송하지만, 기내에서는 약을 제공할 수 없습니다."
      ],
      "english": [
        "Yes, I’ll bring you some painkillers.",
        "I’m sorry, but we can’t provide medication."
      ]
    }
  },
  {
    "id": 16,
    "audioUrl": "/audio/inflight-requests-16.mp3",
    "text": "Can I have a drink?",
    "meaning": "음료를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 어떤 음료를 원하시나요?",
        "죄송하지만, 음료 서비스 시간이 아닙니다."
      ],
      "english": [
        "Yes, what would you like to drink?",
        "I’m sorry, but beverage service is not available right now."
      ]
    }
  },
  {
    "id": 17,
    "audioUrl": "/audio/inflight-requests-17.mp3",
    "text": "Can I get some hot water?",
    "meaning": "뜨거운 물을 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 가져다 드리겠습니다.",
        "죄송하지만, 뜨거운 물이 준비되지 않았습니다."
      ],
      "english": [
        "Yes, I’ll bring you some.",
        "I’m sorry, but we don’t have hot water available."
      ]
    }
  },
  {
    "id": 18,
    "audioUrl": "/audio/inflight-requests-18.mp3",
    "text": "Can I use the restroom now?",
    "meaning": "지금 화장실을 사용할 수 있나요?",
    "answers": {
      "korean": [
        "네, 지금 사용하셔도 됩니다.",
        "죄송하지만, 현재 사용이 제한됩니다."
      ],
      "english": [
        "Yes, you can use it now.",
        "I’m sorry, but it’s restricted at the moment."
      ]
    }
  },
  {
    "id": 19,
    "audioUrl": "/audio/inflight-requests-19.mp3",
    "text": "Can I get an immigration form?",
    "meaning": "입국 신고서를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 신고서를 가져다 드리겠습니다.",
        "죄송하지만, 승무원에게 직접 요청해야 합니다."
      ],
      "english": [
        "Yes, I’ll bring you one.",
        "I’m sorry, but you need to ask a flight attendant."
      ]
    }
  },
  {
    "id": 20,
    "audioUrl": "/audio/inflight-requests-20.mp3",
    "text": "Can I get a child meal for my kid?",
    "meaning": "아이용 식사를 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 아이 식사를 준비해 드리겠습니다.",
        "죄송하지만, 사전 요청이 필요합니다."
      ],
      "english": [
        "Yes, I’ll bring a child meal.",
        "I’m sorry, but it requires a pre-order."
      ]
    }
  },
  {
    "id": 21,
    "audioUrl": "/audio/inflight-requests-21.mp3",
    "text": "Can I buy duty-free items?",
    "meaning": "면세품을 구매할 수 있나요?",
    "answers": {
      "korean": [
        "네, 기내 면세품 판매가 가능합니다.",
        "죄송하지만, 이번 비행에서는 면세품 판매가 없습니다."
      ],
      "english": [
        "Yes, in-flight duty-free shopping is available.",
        "I’m sorry, but there’s no duty-free sale on this flight."
      ]
    }
  },
  {
    "id": 22,
    "audioUrl": "/audio/inflight-requests-22.mp3",
    "text": "Can I get a sleeping mask?",
    "meaning": "수면 안대를 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 안대를 가져다 드리겠습니다.",
        "죄송하지만, 수면 안대가 없습니다."
      ],
      "english": [
        "Yes, I’ll bring you one.",
        "I’m sorry, but we don’t have sleeping masks."
      ]
    }
  },
  {
    "id": 23,
    "audioUrl": "/audio/inflight-requests-23.mp3",
    "text": "Can I request a different meal option?",
    "meaning": "다른 식사 옵션을 요청할 수 있나요?",
    "answers": {
      "korean": [
        "네, 가능한 식사를 확인해 드리겠습니다.",
        "죄송하지만, 모든 식사가 준비된 상태입니다."
      ],
      "english": [
        "Yes, I’ll check what’s available.",
        "I’m sorry, but all meals are pre-set."
      ]
    }
  },
  {
    "id": 24,
    "audioUrl": "/audio/inflight-requests-24.mp3",
    "text": "Can I use my own headphones?",
    "meaning": "제가 가져온 헤드폰을 사용할 수 있나요?",
    "answers": {
      "korean": [
        "네, 기내 엔터테인먼트 시스템에 연결 가능합니다.",
        "죄송하지만, 특정 모델만 지원됩니다."
      ],
      "english": [
        "Yes, you can connect them to the entertainment system.",
        "I’m sorry, but only certain models are supported."
      ]
    }
  },
  {
    "id": 25,
    "audioUrl": "/audio/inflight-requests-25.mp3",
    "text": "Can I move to an aisle seat?",
    "meaning": "통로 좌석으로 이동할 수 있나요?",
    "answers": {
      "korean": [
        "네, 빈 좌석이 있으면 가능합니다.",
        "죄송하지만, 모든 좌석이 예약되었습니다."
      ],
      "english": [
        "Yes, if there’s an open seat.",
        "I’m sorry, but all seats are booked."
      ]
    }
  },
  {
    "id": 26,
    "audioUrl": "/audio/inflight-requests-26.mp3",
    "text": "Can I have extra napkins?",
    "meaning": "냅킨을 더 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 몇 장 가져다 드리겠습니다.",
        "죄송하지만, 현재 냅킨이 부족합니다."
      ],
      "english": [
        "Yes, I’ll bring you some.",
        "I’m sorry, but we are running low on napkins."
      ]
    }
  },
  {
    "id": 27,
    "audioUrl": "/audio/inflight-requests-27.mp3",
    "text": "Can I change my drink order?",
    "meaning": "음료 주문을 변경할 수 있나요?",
    "answers": {
      "korean": [
        "네, 어떤 음료로 변경하시겠어요?",
        "죄송하지만, 이미 제공된 음료는 변경할 수 없습니다."
      ],
      "english": [
        "Yes, what would you like instead?",
        "I’m sorry, but we can’t change drinks after serving."
      ]
    }
  },
  {
    "id": 28,
    "audioUrl": "/audio/inflight-requests-28.mp3",
    "text": "Can I request a special meal?",
    "meaning": "특별식을 요청할 수 있나요?",
    "answers": {
      "korean": [
        "네, 어떤 종류의 특별식을 원하시나요?",
        "죄송하지만, 모든 식사가 사전 준비되었습니다."
      ],
      "english": [
        "Yes, what kind of special meal do you need?",
        "I’m sorry, but all meals are pre-set."
      ]
    }
  },
  {
    "id": 29,
    "audioUrl": "/audio/inflight-requests-29.mp3",
    "text": "Can I get assistance when landing?",
    "meaning": "착륙할 때 도움이 필요합니다.",
    "answers": {
      "korean": [
        "네, 착륙 후 승무원이 도와드리겠습니다.",
        "죄송하지만, 공항에서 직접 도움을 요청하셔야 합니다."
      ],
      "english": [
        "Yes, a crew member will assist you after landing.",
        "I’m sorry, but you need to request assistance at the airport."
      ]
    }
  },
  {
    "id": 30,
    "audioUrl": "/audio/inflight-requests-30.mp3",
    "text": "Can I get help with my luggage upon arrival?",
    "meaning": "도착 후 짐을 옮기는 데 도움을 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 도착 후 승무원이 안내해 드릴 수 있습니다.",
        "죄송하지만, 공항 직원에게 직접 요청하셔야 합니다."
      ],
      "english": [
        "Yes, a crew member can assist you after arrival.",
        "I’m sorry, but you need to ask the airport staff directly."
      ]
    }
  },
  // [Add remaining 28 request-related questions]
];