import { Question } from '../types';

// 택시 탈 때 질문들 (5_1taxi_phrases_final)
export const taxiPhrases: Question[] = [
  {
   "id": 1,
    "audioUrl": "/audio/taxi-1.mp3",
    "text": "Where can I find a taxi?",
    "meaning": "택시는 어디에서 탈 수 있나요?",
    "answers": {
      "korean": [
        "저쪽 택시 승강장에서 탈 수 있습니다.",
        "길에서 손을 들어 택시를 잡을 수 있습니다."
      ],
      "english": [
        "You can get one at the taxi stand over there.",
        "You can hail a taxi on the street."
      ]
    }
  },
  {
    "id": 2,
    "audioUrl": "/audio/taxi-2.mp3",
    "text": "Can you take me to this address?",
    "meaning": "이 주소로 가주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 바로 출발하겠습니다.",
        "죄송하지만, 그곳으로는 갈 수 없습니다."
      ],
      "english": [
        "Yes, I’ll take you there.",
        "I’m sorry, but I can’t go to that location."
      ]
    }
  },
  {
    "id": 3,
    "audioUrl": "/audio/taxi-3.mp3",
    "text": "How much will the fare be?",
    "meaning": "요금이 얼마나 나올까요?",
    "answers": {
      "korean": [
        "대략 20달러 정도 나올 것입니다.",
        "미터기로 측정됩니다."
      ],
      "english": [
        "It will be around $20.",
        "It depends on the meter."
      ]
    }
  },
  {
    "id": 4,
    "audioUrl": "/audio/taxi-4.mp3",
    "text": "Can you take me to the airport?",
    "meaning": "공항까지 가주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 공항까지 모셔다 드리겠습니다.",
        "죄송하지만, 공항까지 운행하지 않습니다."
      ],
      "english": [
        "Yes, I’ll take you to the airport.",
        "I’m sorry, but I don’t go to the airport."
      ]
    }
  },
  {
    "id": 5,
    "audioUrl": "/audio/taxi-5.mp3",
    "text": "How long will it take to get there?",
    "meaning": "거기까지 얼마나 걸릴까요?",
    "answers": {
      "korean": [
        "약 30분 정도 걸릴 것입니다.",
        "교통 상황에 따라 달라질 수 있습니다."
      ],
      "english": [
        "It will take about 30 minutes.",
        "It depends on the traffic."
      ]
    }
  },
  {
    "id": 6,
    "audioUrl": "/audio/taxi-6.mp3",
    "text": "Do you take credit cards?",
    "meaning": "신용카드 결제가 가능한가요?",
    "answers": {
      "korean": [
        "네, 신용카드로 결제할 수 있습니다.",
        "죄송하지만, 현금만 받습니다."
      ],
      "english": [
        "Yes, you can pay by credit card.",
        "I’m sorry, but we only accept cash."
      ]
    }
  },
  {
    "id": 7,
    "audioUrl": "/audio/taxi-7.mp3",
    "text": "Please use the meter.",
    "meaning": "미터기를 사용해 주세요.",
    "answers": {
      "korean": [
        "네, 미터기를 켜겠습니다.",
        "죄송하지만, 미터기 없이 정액 요금입니다."
      ],
      "english": [
        "Sure, I’ll turn on the meter.",
        "I’m sorry, but we use a fixed fare."
      ]
    }
  },
  {
    "id": 8,
    "audioUrl": "/audio/taxi-8.mp3",
    "text": "Can you drive a bit faster?",
    "meaning": "조금 더 빨리 가주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 안전하게 빨리 가겠습니다.",
        "죄송하지만, 제한 속도를 준수해야 합니다."
      ],
      "english": [
        "Sure, I’ll drive a bit faster.",
        "I’m sorry, but I have to follow the speed limit."
      ]
    }
  },
  {
    "id": 9,
    "audioUrl": "/audio/taxi-9.mp3",
    "text": "Can you take the shortest route?",
    "meaning": "가장 빠른 길로 가주세요.",
    "answers": {
      "korean": [
        "네, 최단 경로로 가겠습니다.",
        "교통 상황을 보고 결정하겠습니다."
      ],
      "english": [
        "Yes, I’ll take the shortest route.",
        "I’ll check the traffic first."
      ]
    }
  },
  {
    "id": 10,
    "audioUrl": "/audio/taxi-10.mp3",
    "text": "Can I pay with cash?",
    "meaning": "현금으로 결제할 수 있나요?",
    "answers": {
      "korean": [
        "네, 현금 결제가 가능합니다.",
        "죄송하지만, 카드 결제만 가능합니다."
      ],
      "english": [
        "Yes, cash is fine.",
        "I’m sorry, but we only accept card payments."
      ]
    }
  },
  {
    "id": 11,
    "audioUrl": "/audio/taxi-11.mp3",
    "text": "Can you take me to the city center?",
    "meaning": "시내 중심가로 가주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 시내 중심까지 모셔다 드리겠습니다.",
        "죄송하지만, 현재 시내로 가는 택시는 없습니다."
      ],
      "english": [
        "Yes, I’ll take you to the city center.",
        "I’m sorry, but taxis are not available for downtown now."
      ]
    }
  },
  {
    "id": 12,
    "audioUrl": "/audio/taxi-12.mp3",
    "text": "How much is the fare to downtown?",
    "meaning": "시내까지 요금이 얼마인가요?",
    "answers": {
      "korean": [
        "약 15달러 정도 나올 것입니다.",
        "미터기로 측정됩니다."
      ],
      "english": [
        "It will be around $15.",
        "It depends on the meter."
      ]
    }
  },
  {
    "id": 13,
    "audioUrl": "/audio/taxi-13.mp3",
    "text": "Can you wait for me here?",
    "meaning": "여기서 잠시 기다려 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 추가 요금이 부과됩니다.",
        "죄송하지만, 대기할 수 없습니다."
      ],
      "english": [
        "Yes, but there will be a waiting charge.",
        "I’m sorry, but I can’t wait."
      ]
    }
  },
  {
    "id": 14,
    "audioUrl": "/audio/taxi-14.mp3",
    "text": "Do you charge extra for luggage?",
    "meaning": "짐 추가 요금이 있나요?",
    "answers": {
      "korean": [
        "아니요, 추가 요금은 없습니다.",
        "네, 추가 가방당 5달러 부과됩니다."
      ],
      "english": [
        "No, there’s no extra charge.",
        "Yes, there’s a $5 charge per extra bag."
      ]
    }
  },
  {
    "id": 15,
    "audioUrl": "/audio/taxi-15.mp3",
    "text": "Can you take me to this hotel?",
    "meaning": "이 호텔까지 가주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 호텔까지 모셔다 드리겠습니다.",
        "죄송하지만, 해당 지역에는 운행하지 않습니다."
      ],
      "english": [
        "Yes, I’ll take you to the hotel.",
        "I’m sorry, but I don’t go to that area."
      ]
    }
  },
  {
    "id": 16,
    "audioUrl": "/audio/taxi-16.mp3",
    "text": "Do you know the way to this address?",
    "meaning": "이 주소로 가는 길을 아시나요?",
    "answers": {
      "korean": [
        "네, 잘 알고 있습니다.",
        "아니요, 내비게이션을 사용하겠습니다."
      ],
      "english": [
        "Yes, I know the way.",
        "No, I’ll use GPS."
      ]
    }
  },
  {
    "id": 17,
    "audioUrl": "/audio/taxi-17.mp3",
    "text": "Can I share a taxi with someone?",
    "meaning": "다른 사람과 함께 타도 되나요?",
    "answers": {
      "korean": [
        "네, 합승 가능합니다.",
        "죄송하지만, 합승은 허용되지 않습니다."
      ],
      "english": [
        "Yes, you can share a taxi.",
        "I’m sorry, but sharing is not allowed."
      ]
    }
  },
  {
    "id": 18,
    "audioUrl": "/audio/taxi-18.mp3",
    "text": "Do you have a fixed fare to the airport?",
    "meaning": "공항까지 정액 요금이 있나요?",
    "answers": {
      "korean": [
        "네, 공항까지 30달러입니다.",
        "아니요, 미터기로 계산됩니다."
      ],
      "english": [
        "Yes, it's a fixed fare of $30 to the airport.",
        "No, the fare is based on the meter."
      ]
    }
  },
  {
    "id": 19,
    "audioUrl": "/audio/taxi-19.mp3",
    "text": "Can you pick me up later?",
    "meaning": "나중에 다시 픽업해 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 원하시는 시간에 맞춰 오겠습니다.",
        "죄송하지만, 예약 서비스는 제공되지 않습니다."
      ],
      "english": [
        "Yes, I can pick you up at your requested time.",
        "I’m sorry, but we don’t offer reservation services."
      ]
    }
  },
  {
    "id": 20,
    "audioUrl": "/audio/taxi-20.mp3",
    "text": "Can I book a taxi in advance?",
    "meaning": "사전에 택시를 예약할 수 있나요?",
    "answers": {
      "korean": [
        "네, 전화로 예약할 수 있습니다.",
        "죄송하지만, 사전 예약은 불가능합니다."
      ],
      "english": [
        "Yes, you can book a taxi by phone.",
        "I’m sorry, but we don’t take advance bookings."
      ]
    }
  },
  {
    "id": 21,
    "audioUrl": "/audio/taxi-21.mp3",
    "text": "Can I sit in the front seat?",
    "meaning": "앞자리에 앉아도 될까요?",
    "answers": {
      "korean": [
        "네, 앞자리에 앉으셔도 됩니다.",
        "죄송하지만, 뒤에 앉아 주셔야 합니다."
      ],
      "english": [
        "Yes, you can sit in the front.",
        "I’m sorry, but you have to sit in the back."
      ]
    }
  },
  {
    "id": 22,
    "audioUrl": "/audio/taxi-22.mp3",
    "text": "Please take the scenic route.",
    "meaning": "경치 좋은 길로 가 주세요.",
    "answers": {
      "korean": [
        "네, 아름다운 경로로 가겠습니다.",
        "죄송하지만, 최단 거리로 가겠습니다."
      ],
      "english": [
        "Sure, I’ll take the scenic route.",
        "I’m sorry, but I’ll take the shortest way."
      ]
    }
  },
  {
    "id": 23,
    "audioUrl": "/audio/taxi-23.mp3",
    "text": "Can I pay via mobile payment?",
    "meaning": "모바일 결제가 가능한가요?",
    "answers": {
      "korean": [
        "네, 모바일 결제가 가능합니다.",
        "죄송하지만, 현금 또는 카드만 가능합니다."
      ],
      "english": [
        "Yes, mobile payment is accepted.",
        "I’m sorry, but we only take cash or card."
      ]
    }
  },
  {
    "id": 24,
    "audioUrl": "/audio/taxi-24.mp3",
    "text": "Please drop me off here.",
    "meaning": "여기에서 내려 주세요.",
    "answers": {
      "korean": [
        "네, 여기서 세워 드리겠습니다.",
        "죄송하지만, 이곳은 정차 금지 구역입니다."
      ],
      "english": [
        "Sure, I’ll stop here.",
        "I’m sorry, but stopping here is not allowed."
      ]
    }
  },
  {
    "id": 25,
    "audioUrl": "/audio/taxi-25.mp3",
    "text": "Do you have change for a $50 bill?",
    "meaning": "50달러 지폐 거스름돈이 있나요?",
    "answers": {
      "korean": [
        "네, 거스름돈을 드릴 수 있습니다.",
        "죄송하지만, 거스름돈이 없습니다."
      ],
      "english": [
        "Yes, I can give you change.",
        "I’m sorry, but I don’t have change."
      ]
    }
  },
  {
    "id": 26,
    "audioUrl": "/audio/taxi-26.mp3",
    "text": "Can I request a receipt?",
    "meaning": "영수증을 받을 수 있을까요?",
    "answers": {
      "korean": [
        "네, 영수증을 드리겠습니다.",
        "죄송하지만, 영수증이 없습니다."
      ],
      "english": [
        "Yes, here’s your receipt.",
        "I’m sorry, but I don’t have receipts."
      ]
    }
  },
  {
    "id": 27,
    "audioUrl": "/audio/taxi-27.mp3",
    "text": "How do I report a lost item?",
    "meaning": "분실물을 신고하려면 어떻게 하나요?",
    "answers": {
      "korean": [
        "택시 회사에 연락해 주세요.",
        "경찰서에 분실 신고를 하셔야 합니다."
      ],
      "english": [
        "Please contact the taxi company.",
        "You need to report it to the police."
      ]
    }
  },
  {
    "id": 28,
    "audioUrl": "/audio/taxi-28.mp3",
    "text": "Can I request a female driver?",
    "meaning": "여성 운전사를 요청할 수 있나요?",
    "answers": {
      "korean": [
        "네, 여성 운전사 배정을 도와드리겠습니다.",
        "죄송하지만, 특정 운전사 요청은 어렵습니다."
      ],
      "english": [
        "Yes, we can arrange a female driver.",
        "I’m sorry, but we can’t assign specific drivers."
      ]
    }
  },
  {
    "id": 29,
    "audioUrl": "/audio/taxi-29.mp3",
    "text": "Thank you, have a great day!",
    "meaning": "감사합니다, 좋은 하루 보내세요!",
    "answers": {
      "korean": [
        "네, 좋은 하루 되세요!",
        "감사합니다. 안전한 여행 되세요!"
      ],
      "english": [
        "Yes, have a great day!",
        "Thank you! Have a safe trip!"
      ]
    }
  },
  {
    "id": 30,
    "audioUrl": "/audio/taxi-30.mp3",
    "text": "Can you recommend a good taxi app?",
    "meaning": "좋은 택시 앱을 추천해 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, Uber나 Lyft를 사용해 보세요.",
        "죄송하지만, 특정 앱 추천은 어렵습니다."
      ],
      "english": [
        "Yes, try using Uber or Lyft.",
        "I'm sorry, but I can't recommend a specific app."
      ]
    }
  }
];

// 대중교통 질문들 (5_2public_transport_phrases_final)
export const publicTransportPhrases: Question[] = [
  {
    "id": 1,
    "audioUrl": "/audio/public-transport-1.mp3",
    "text": "Where is the nearest bus stop?",
    "meaning": "가장 가까운 버스 정류장은 어디인가요?",
    "answers": {
      "korean": [
        "저쪽 모퉁이를 돌면 있습니다.",
        "이 길을 따라가면 버스 정류장이 나옵니다."
      ],
      "english": [
        "It’s around the corner.",
        "Just follow this street and you’ll find the bus stop."
      ]
    }
  },
  {
    "id": 2,
    "audioUrl": "/audio/public-transport-2.mp3",
    "text": "How do I get to the subway station?",
    "meaning": "지하철역으로 어떻게 가나요?",
    "answers": {
      "korean": [
        "이 길을 따라 5분 정도 걸어가면 됩니다.",
        "다음 블록에서 오른쪽으로 가세요."
      ],
      "english": [
        "Walk down this street for about 5 minutes.",
        "Go right at the next block."
      ]
    }
  },
  {
    "id": 3,
    "audioUrl": "/audio/public-transport-3.mp3",
    "text": "Which bus goes to the airport?",
    "meaning": "공항으로 가는 버스는 몇 번인가요?",
    "answers": {
      "korean": [
        "공항 가는 버스는 500번입니다.",
        "공항행 버스는 이 정류장에서 탈 수 있습니다."
      ],
      "english": [
        "The 500 bus goes to the airport.",
        "You can catch the airport bus at this stop."
      ]
    }
  },
  {
    "id": 4,
    "audioUrl": "/audio/public-transport-4.mp3",
    "text": "How much is the bus fare?",
    "meaning": "버스 요금이 얼마인가요?",
    "answers": {
      "korean": [
        "2달러입니다.",
        "탑승 시 카드로 결제할 수 있습니다."
      ],
      "english": [
        "It’s $2.",
        "You can pay with a card when you board."
      ]
    }
  },
  {
    "id": 5,
    "audioUrl": "/audio/public-transport-5.mp3",
    "text": "Do I need exact change for the bus?",
    "meaning": "버스 요금은 잔돈을 맞춰야 하나요?",
    "answers": {
      "korean": [
        "네, 정확한 금액을 준비하셔야 합니다.",
        "아니요, 카드로 결제 가능합니다."
      ],
      "english": [
        "Yes, you need exact change.",
        "No, you can pay with a card."
      ]
    }
  },
  {
    "id": 6,
    "audioUrl": "/audio/public-transport-6.mp3",
    "text": "How often do the buses run?",
    "meaning": "버스는 얼마나 자주 오나요?",
    "answers": {
      "korean": [
        "10분마다 한 대씩 옵니다.",
        "러시아워에는 더 자주 운행됩니다."
      ],
      "english": [
        "Every 10 minutes.",
        "They run more frequently during rush hour."
      ]
    }
  },
  {
    "id": 7,
    "audioUrl": "/audio/public-transport-7.mp3",
    "text": "Which subway line should I take to downtown?",
    "meaning": "시내로 가려면 어떤 지하철 노선을 타야 하나요?",
    "answers": {
      "korean": [
        "파란색 노선을 타시면 됩니다.",
        "2호선을 타고 세 정거장 가세요."
      ],
      "english": [
        "Take the blue line.",
        "Take line 2 and go three stops."
      ]
    }
  },
  {
    "id": 8,
    "audioUrl": "/audio/public-transport-8.mp3",
    "text": "Where can I buy a subway ticket?",
    "meaning": "지하철 티켓은 어디서 살 수 있나요?",
    "answers": {
      "korean": [
        "자동판매기에서 구매할 수 있습니다.",
        "티켓 창구에서 구매 가능합니다."
      ],
      "english": [
        "You can buy one at the vending machine.",
        "You can buy it at the ticket counter."
      ]
    }
  },
  {
    "id": 9,
    "audioUrl": "/audio/public-transport-9.mp3",
    "text": "Do I need a transit card for the subway?",
    "meaning": "지하철 이용 시 교통카드가 필요한가요?",
    "answers": {
      "korean": [
        "아니요, 현금으로도 결제할 수 있습니다.",
        "네, 교통카드가 있어야 합니다."
      ],
      "english": [
        "No, you can pay with cash.",
        "Yes, you need a transit card."
      ]
    }
  },
  {
    "id": 10,
    "audioUrl": "/audio/public-transport-10.mp3",
    "text": "How do I transfer between subway lines?",
    "meaning": "지하철 노선 간 환승은 어떻게 하나요?",
    "answers": {
      "korean": [
        "환승역에서 내려서 다른 노선으로 갈아타세요.",
        "같은 역 안에서 노선을 바꿀 수 있습니다."
      ],
      "english": [
        "Get off at the transfer station and switch lines.",
        "You can change lines within the same station."
      ]
    }
  },
  {
    "id": 11,
    "audioUrl": "/audio/public-transport-11.mp3",
    "text": "How do I know when to get off the bus?",
    "meaning": "버스에서 언제 내려야 하는지 어떻게 알 수 있나요?",
    "answers": {
      "korean": [
        "운전기사에게 미리 알려달라고 요청할 수 있습니다.",
        "전광판에서 다음 정거장을 확인하세요."
      ],
      "english": [
        "You can ask the driver to let you know.",
        "Check the next stop on the display."
      ]
    }
  },
  {
    "id": 12,
    "audioUrl": "/audio/public-transport-12.mp3",
    "text": "Does this subway go to the airport?",
    "meaning": "이 지하철이 공항으로 가나요?",
    "answers": {
      "korean": [
        "아니요, 공항행 노선으로 갈아타셔야 합니다.",
        "네, 이 노선은 공항까지 갑니다."
      ],
      "english": [
        "No, you need to transfer to the airport line.",
        "Yes, this line goes to the airport."
      ]
    }
  },
  {
    "id": 13,
    "audioUrl": "/audio/public-transport-13.mp3",
    "text": "Is this the right bus for Central Park?",
    "meaning": "이 버스가 센트럴파크로 가나요?",
    "answers": {
      "korean": [
        "네, 이 버스를 타시면 됩니다.",
        "아니요, 다른 버스를 타야 합니다."
      ],
      "english": [
        "Yes, this is the right bus.",
        "No, you need to take a different bus."
      ]
    }
  },
  {
    "id": 14,
    "audioUrl": "/audio/public-transport-14.mp3",
    "text": "Where do I get off for the museum?",
    "meaning": "박물관에서 내리려면 어디서 내려야 하나요?",
    "answers": {
      "korean": [
        "박물관 정류장에서 내리시면 됩니다.",
        "세 정거장 후에 내리시면 됩니다."
      ],
      "english": [
        "Get off at the museum stop.",
        "Get off in three stops."
      ]
    }
  },
  {
    "id": 15,
    "audioUrl": "/audio/public-transport-15.mp3",
    "text": "Can I use the same ticket for the bus and subway?",
    "meaning": "버스와 지하철에서 같은 티켓을 사용할 수 있나요?",
    "answers": {
      "korean": [
        "네, 환승이 가능합니다.",
        "아니요, 별도의 티켓이 필요합니다."
      ],
      "english": [
        "Yes, transfers are allowed.",
        "No, you need a separate ticket."
      ]
    }
  },
  {
    "id": 16,
    "audioUrl": "/audio/public-transport-16.mp3",
    "text": "How late do the subways run?",
    "meaning": "지하철은 몇 시까지 운행하나요?",
    "answers": {
      "korean": [
        "밤 12시까지 운행합니다.",
        "주말에는 새벽 2시까지 운행합니다."
      ],
      "english": [
        "They run until midnight.",
        "On weekends, they run until 2 AM."
      ]
    }
  },
  {
    "id": 17,
    "audioUrl": "/audio/public-transport-17.mp3",
    "text": "Do I need to tap my card when exiting?",
    "meaning": "출구에서도 교통카드를 찍어야 하나요?",
    "answers": {
      "korean": [
        "네, 출구에서도 카드를 태그해야 합니다.",
        "아니요, 입구에서만 태그하면 됩니다."
      ],
      "english": [
        "Yes, you need to tap when exiting.",
        "No, you only need to tap when entering."
      ]
    }
  },
  {
    "id": 18,
    "audioUrl": "/audio/public-transport-18.mp3",
    "text": "Which platform is for trains going north?",
    "meaning": "북쪽 방향 기차는 어느 플랫폼에서 타나요?",
    "answers": {
      "korean": [
        "플랫폼 3에서 타시면 됩니다.",
        "전광판에서 확인하세요."
      ],
      "english": [
        "Take it from platform 3.",
        "Check the display board."
      ]
    }
  },
  {
    "id": 19,
    "audioUrl": "/audio/public-transport-19.mp3",
    "text": "How do I get to the express train?",
    "meaning": "급행 열차는 어떻게 타나요?",
    "answers": {
      "korean": [
        "이 노선에서 급행 열차가 정차하는 곳에서 타세요.",
        "급행 플랫폼으로 이동하세요."
      ],
      "english": [
        "Take it at the express stop on this line.",
        "Go to the express platform."
      ]
    }
  },
  {
    "id": 20,
    "audioUrl": "/audio/public-transport-20.mp3",
    "text": "What time is the last bus?",
    "meaning": "막차 버스는 몇 시인가요?",
    "answers": {
      "korean": [
        "밤 11시에 마지막 버스가 출발합니다.",
        "막차는 요일에 따라 다릅니다."
      ],
      "english": [
        "The last bus leaves at 11 PM.",
        "The last bus time depends on the day."
      ]
    }
  },
  {
    "id": 21,
    "audioUrl": "/audio/public-transport-21.mp3",
    "text": "Do I need to press the stop button to get off?",
    "meaning": "내릴 때 정류장 버튼을 눌러야 하나요?",
    "answers": {
      "korean": [
        "네, 미리 눌러야 합니다.",
        "아니요, 정류장마다 자동으로 정차합니다."
      ],
      "english": [
        "Yes, you need to press it in advance.",
        "No, the bus stops at every station."
      ]
    }
  },
  {
    "id": 22,
    "audioUrl": "/audio/public-transport-22.mp3",
    "text": "Is there an elevator to the subway?",
    "meaning": "지하철에 엘리베이터가 있나요?",
    "answers": {
      "korean": [
        "네, 입구 근처에 있습니다.",
        "죄송하지만, 엘리베이터가 없습니다."
      ],
      "english": [
        "Yes, it’s near the entrance.",
        "I'm sorry, but there's no elevator."
      ]
    }
  },
  {
    "id": 23,
    "audioUrl": "/audio/public-transport-23.mp3",
    "text": "Can I use a mobile ticket?",
    "meaning": "모바일 티켓을 사용할 수 있나요?",
    "answers": {
      "korean": [
        "네, QR 코드로 승차할 수 있습니다.",
        "아니요, 종이 티켓이 필요합니다."
      ],
      "english": [
        "Yes, you can scan the QR code.",
        "No, you need a paper ticket."
      ]
    }
  },
  {
    "id": 24,
    "audioUrl": "/audio/public-transport-24.mp3",
    "text": "Where can I recharge my transit card?",
    "meaning": "교통카드를 충전할 수 있는 곳이 어디인가요?",
    "answers": {
      "korean": [
        "지하철역 내 충전 기계를 이용하세요.",
        "편의점에서도 충전 가능합니다."
      ],
      "english": [
        "Use the recharge machine inside the station.",
        "You can also recharge at convenience stores."
      ]
    }
  },
  {
    "id": 25,
    "audioUrl": "/audio/public-transport-25.mp3",
    "text": "Can I buy a day pass?",
    "meaning": "하루 이용권을 구매할 수 있나요?",
    "answers": {
      "korean": [
        "네, 하루 이용권은 티켓 창구에서 판매합니다.",
        "아니요, 정기권만 구매 가능합니다."
      ],
      "english": [
        "Yes, you can buy a day pass at the ticket counter.",
        "No, only regular passes are available."
      ]
    }
  },
  {
    "id": 26,
    "audioUrl": "/audio/public-transport-26.mp3",
    "text": "Does this subway go directly to Times Square?",
    "meaning": "이 지하철이 타임스퀘어까지 직행하나요?",
    "answers": {
      "korean": [
        "네, 직행으로 갑니다.",
        "아니요, 한 번 환승해야 합니다."
      ],
      "english": [
        "Yes, it goes directly.",
        "No, you need to transfer once."
      ]
    }
  },
  {
    "id": 27,
    "audioUrl": "/audio/public-transport-27.mp3",
    "text": "Which side do the train doors open?",
    "meaning": "기차 문이 어느 쪽에서 열리나요?",
    "answers": {
      "korean": [
        "왼쪽에서 열립니다.",
        "오른쪽에서 열립니다."
      ],
      "english": [
        "They open on the left side.",
        "They open on the right side."
      ]
    }
  },
  {
    "id": 28,
    "audioUrl": "/audio/public-transport-28.mp3",
    "text": "How do I check the bus schedule?",
    "meaning": "버스 시간을 어떻게 확인하나요?",
    "answers": {
      "korean": [
        "정류장에 있는 전광판에서 확인하세요.",
        "모바일 앱에서 확인 가능합니다."
      ],
      "english": [
        "Check the digital board at the stop.",
        "You can check it on the mobile app."
      ]
    }
  },
  {
    "id": 29,
    "audioUrl": "/audio/public-transport-29.mp3",
    "text": "What’s the fastest way to get to Union Square?",
    "meaning": "유니온 스퀘어로 가는 가장 빠른 방법은 무엇인가요?",
    "answers": {
      "korean": [
        "급행 지하철을 타면 빠릅니다.",
        "버스를 타는 것이 더 빠를 수도 있습니다."
      ],
      "english": [
        "Taking the express subway is the fastest.",
        "The bus might be faster."
      ]
    }
  },
  {
    "id": 30,
    "audioUrl": "/audio/public-transport-30.mp3",
    "text": "What’s the best way to get to the train station?",
    "meaning": "기차역으로 가는 가장 좋은 방법은 무엇인가요?",
    "answers": {
      "korean": [
        "택시를 타는 것이 가장 빠릅니다.",
        "지하철을 타면 편리합니다."
      ],
      "english": [
        "Taking a taxi is the fastest way.",
        "Taking the subway is the most convenient option."
      ]
    }
  }
];