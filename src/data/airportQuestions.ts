import { Question } from '../types';

// 공항 보안 검색대 질문들 (1_1security_check_questions)
export const securityCheckQuestions: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/question-1.mp3",
    text: "Hello, how are you today?",
    meaning: "안녕하세요, 오늘 어떠세요?",
    answers: {
      korean: [
        "좋아요, 감사합니다. 당신은요?",
        "나쁘지 않아요. 여행이 기대되네요."
      ],
      english: [
        "I'm good, thank you. How about you?",
        "Not bad, just excited for my trip."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/question-2.mp3",
    text: "Please place your belongings on the conveyor belt.",
    meaning: "소지품을 컨베이어 벨트에 올려주세요.",
    answers: {
      korean: [
        "네, 여기 있습니다.",
        "알겠습니다, 잠시만요."
      ],
      english: [
        "Sure, here they are.",
        "Alright, one moment."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/question-3.mp3",
    text: "Do you have any electronic devices in your bag?",
    meaning: "가방 안에 전자기기가 있나요?",
    answers: {
      korean: [
        "네, 노트북과 휴대폰이 있습니다.",
        "태블릿과 이어폰만 있어요."
      ],
      english: [
        "Yes, I have a laptop and a phone.",
        "Just a tablet and earbuds."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/question-4.mp3",
    text: "Please take off your shoes, belt, and jacket.",
    meaning: "신발, 벨트, 재킷을 벗어주세요.",
    answers: {
      korean: [
        "네, 지금 벗겠습니다.",
        "알겠습니다."
      ],
      english: [
        "Of course, I'll do that now.",
        "No problem."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/question-5.mp3",
    text: "Empty your pockets and put everything in the tray.",
    meaning: "주머니를 비우고 모든 물건을 트레이에 넣어주세요.",
    answers: {
      korean: [
        "알겠습니다. 주머니 확인해볼게요.",
        "비어있는 것 같은데, 다시 확인해볼게요."
      ],
      english: [
        "Alright, let me check my pockets.",
        "I think they're empty, but I'll double-check."
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/question-6.mp3",
    text: "Step forward, please.",
    meaning: "앞으로 나와 주세요.",
    answers: {
      korean: [
        "네, 갑니다.",
        "네."
      ],
      english: [
        "Okay, here I go.",
        "Sure."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/question-7.mp3",
    text: "Raise your arms, please.",
    meaning: "팔을 들어주세요.",
    answers: {
      korean: [
        "이렇게요?",
        "네."
      ],
      english: [
        "Like this?",
        "Got it."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/question-8.mp3",
    text: "Face the scanner and stand still.",
    meaning: "스캐너를 바라보고 가만히 서주세요.",
    answers: {
      korean: [
        "알겠습니다.",
        "알겠습니다. 움직이지 않을게요."
      ],
      english: [
        "Understood.",
        "Alright, I won't move."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/question-9.mp3",
    text: "Do you have any liquids, gels, or aerosols?",
    meaning: "액체, 젤, 스프레이류가 있나요?",
    answers: {
      korean: [
        "네, 작은 로션병이 있습니다.",
        "아니요, 액체류는 없습니다."
      ],
      english: [
        "Yes, I have a small bottle of lotion.",
        "No, I don't have any liquids."
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/question-10.mp3",
    text: "All liquids must be under 100 milliliters and placed in a clear plastic bag.",
    meaning: "모든 액체는 100ml 이하이고 투명한 비닐봉지에 넣어야 합니다.",
    answers: {
      korean: [
        "네, 비닐봉지 안에 넣어뒀어요.",
        "아, 몰랐어요. 이거 버려도 될까요?"
      ],
      english: [
        "Got it! I have them in a plastic bag.",
        "Oh, I didn't know that. Can I throw this away?"
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/question-11.mp3",
    text: "Do you have a laptop or tablet?",
    meaning: "노트북이나 태블릿이 있나요?",
    answers: {
      korean: [
        "네, 가방 안에 노트북이 있습니다.",
        "태블릿만 있어요. 꺼내야 하나요?"
      ],
      english: [
        "Yes, I have a laptop in my bag.",
        "Just a tablet, should I take it out?"
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/question-12.mp3",
    text: "Please take your laptop out of the bag and place it in a separate tray.",
    meaning: "노트북을 가방에서 꺼내서 별도의 트레이에 놓아주세요.",
    answers: {
      korean: [
        "네, 여기 있습니다.",
        "네, 잠시만요."
      ],
      english: [
        "Sure, here it is.",
        "Okay, one moment."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/question-13.mp3",
    text: "Are you carrying any sharp objects?",
    meaning: "날카로운 물건을 가지고 있나요?",
    answers: {
      korean: [
        "아니요, 없습니다.",
        "손톱깎이가 있는데 괜찮나요?"
      ],
      english: [
        "No, I don't have any.",
        "I have a nail clipper. Is that okay?"
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/question-14.mp3",
    text: "Is there anything in your pockets?",
    meaning: "주머니에 아무것도 없나요?",
    answers: {
      korean: [
        "한번 확인해볼게요… 네, 없어요.",
        "동전만 있어요. 꺼내야 하나요?"
      ],
      english: [
        "Let me check… No, nothing.",
        "Just some coins. Should I take them out?"
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/question-15.mp3",
    text: "Do you have any prohibited items in your bag?",
    meaning: "가방 안에 금지 물품이 있나요?",
    answers: {
      korean: [
        "아니요, 오기 전에 확인했어요.",
        "없는 것 같은데, 확인해보시겠어요?"
      ],
      english: [
        "No, I made sure to check before coming.",
        "I don't think so. Would you like to check?"
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/question-16.mp3",
    text: "We need to inspect your bag. Please step aside.",
    meaning: "가방을 검사해야 합니다. 옆으로 와주세요.",
    answers: {
      korean: [
        "네, 검사하세요.",
        "뭔가 문제가 있나요?"
      ],
      english: [
        "Sure, go ahead.",
        "Is something wrong?"
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/question-17.mp3",
    text: "Can I check inside your bag?",
    meaning: "가방 안을 확인해도 될까요?",
    answers: {
      korean: [
        "네, 확인하세요.",
        "네, 그러세요."
      ],
      english: [
        "Of course, go ahead.",
        "Yes, please do."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/question-18.mp3",
    text: "Please open your bag for inspection.",
    meaning: "가방을 열어서 검사받아 주세요.",
    answers: {
      korean: [
        "네, 열겠습니다.",
        "여기 있습니다."
      ],
      english: [
        "Sure, let me open it.",
        "Here you go."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/question-19.mp3",
    text: "We need to do a secondary screening. Please follow me.",
    meaning: "추가 검사가 필요합니다. 저를 따라오세요.",
    answers: {
      korean: [
        "네, 이해합니다.",
        "문제가 있나요?"
      ],
      english: [
        "Okay, I understand.",
        "Is there a problem?"
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/question-20.mp3",
    text: "Please spread your arms and stand still.",
    meaning: "팔을 벌리고 가만히 서주세요.",
    answers: {
      korean: [
        "네, 알겠습니다.",
        "이렇게요?"
      ],
      english: [
        "Got it.",
        "Like this?"
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/question-21.mp3",
    text: "We need to pat you down. Is that okay?",
    meaning: "몸 수색을 해야 합니다. 괜찮으신가요?",
    answers: {
      korean: [
        "네, 괜찮습니다.",
        "네, 문제없어요."
      ],
      english: [
        "Yes, go ahead.",
        "No problem."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/question-22.mp3",
    text: "You have been randomly selected for additional screening.",
    meaning: "무작위 추가 검색에 선정되었습니다.",
    answers: {
      korean: [
        "네, 이해합니다.",
        "알겠습니다. 무엇을 해야 하나요?"
      ],
      english: [
        "Okay, I understand.",
        "Alright, what do I need to do?"
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/question-23.mp3",
    text: "You may now collect your belongings.",
    meaning: "이제 소지품을 가져가셔도 됩니다.",
    answers: {
      korean: [
        "감사합니다.",
        "네, 알겠습니다."
      ],
      english: [
        "Thank you.",
        "Alright, got it."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/question-24.mp3",
    text: "You're all set. Have a great flight!",
    meaning: "이상 없습니다. 좋은 여행 되세요!",
    answers: {
      korean: [
        "감사합니다! 당신도요!",
        "감사합니다!"
      ],
      english: [
        "Thank you! You too!",
        "Appreciate it!"
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/question-25.mp3",
    text: "Please put your shoes and belt back on over there.",
    meaning: "저쪽에서 신발과 벨트를 다시 착용하세요.",
    answers: {
      korean: [
        "네, 감사합니다.",
        "알겠습니다."
      ],
      english: [
        "Got it, thanks.",
        "Okay, will do."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/question-26.mp3",
    text: "Thank you for your cooperation.",
    meaning: "협조해 주셔서 감사합니다.",
    answers: {
      korean: [
        "아니에요, 좋은 하루 되세요!",
        "별말씀을요."
      ],
      english: [
        "No problem, have a good day!",
        "You're welcome."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/question-27.mp3",
    text: "Have a safe trip!",
    meaning: "안전한 여행 되세요!",
    answers: {
      korean: [
        "감사합니다! 당신도요!",
        "그럴게요! 감사합니다."
      ],
      english: [
        "Thank you! Same to you!",
        "Will do! Thanks!"
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/question-28.mp3",
    text: "What is this item in your bag?",
    meaning: "가방 안의 이 물건은 무엇인가요?",
    answers: {
      korean: [
        "보조배터리입니다.",
        "제 전기 면도기예요."
      ],
      english: [
        "It's a power bank.",
        "That's my electric razor."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/question-29.mp3",
    text: "Do you speak English?",
    meaning: "영어를 하실 줄 아시나요?",
    answers: {
      korean: [
        "조금 합니다.",
        "네, 합니다."
      ],
      english: [
        "A little bit.",
        "Yes, I do."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/question-30.mp3",
    text: "Can I bring this on the plane?",
    meaning: "이거 기내에 가져갈 수 있나요?",
    answers: {
      korean: [
        "네, 보안 규정을 준수하면 가능합니다.",
        "그럴 것 같은데, 확인해보시는 게 좋을 것 같아요."
      ],
      english: [
        "Yes, as long as it meets the security regulations.",
        "I think so, but you might want to check."
      ]
    }
  }
];

// 비행기 탑승 수속 질문들 (1_2flight_checkin_questions)
export const checkInQuestions: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/question-1.mp3",
    text: "Hello, how are you today?",
    meaning: "안녕하세요, 오늘 어떠세요?",
    answers: {
      korean: [
        "좋아요, 감사합니다. 당신은요?",
        "나쁘지 않아요. 여행이 기대되네요."
      ],
      english: [
        "I'm good, thank you. How about you?",
        "Not bad, just excited for my trip."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/question-2.mp3",
    text: "I'd like to check in for my flight to New York.",
    meaning: "뉴욕행 비행기 체크인을 하려고 합니다.",
    answers: {
      korean: [
        "네, 여권과 항공권을 보여주시겠어요?",
        "네, 여기 있습니다."
      ],
      english: [
        "Sure, may I see your passport and ticket?",
        "Of course, here they are."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/question-3.mp3",
    text: "Do you have any luggage to check in?",
    meaning: "부칠 짐이 있나요?",
    answers: {
      korean: [
        "네, 여행 가방 하나 있습니다.",
        "아니요, 기내 반입 가방만 있습니다."
      ],
      english: [
        "Yes, I have one suitcase.",
        "No, I only have carry-on luggage."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/question-4.mp3",
    text: "Can I have a window or aisle seat?",
    meaning: "창가 좌석이나 통로 좌석으로 받을 수 있나요?",
    answers: {
      korean: [
        "네, 창가 좌석으로 배정해드릴게요.",
        "죄송하지만, 가운데 좌석만 남아 있습니다."
      ],
      english: [
        "Sure, I can assign you a window seat.",
        "I'm sorry, but only middle seats are available."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/question-5.mp3",
    text: "Do you have any carry-on luggage?",
    meaning: "기내 반입 수하물이 있나요?",
    answers: {
      korean: [
        "네, 이 배낭 하나요.",
        "아니요, 모든 짐을 부쳤습니다."
      ],
      english: [
        "Yes, just this backpack.",
        "No, I checked in all my luggage."
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/question-6.mp3",
    text: "Here is your boarding pass.",
    meaning: "탑승권 여기 있습니다.",
    answers: {
      korean: [
        "감사합니다. 제 탑승구 번호는 몇 번인가요?",
        "12번 탑승구입니다. 탑승은 오후 5시 30분에 시작합니다."
      ],
      english: [
        "Thank you. What is my gate number?",
        "It's Gate 12. Boarding starts at 5:30 PM."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/question-7.mp3",
    text: "What time does boarding start?",
    meaning: "탑승은 몇 시에 시작하나요?",
    answers: {
      korean: [
        "출발 45분 전에 탑승이 시작됩니다.",
        "변경 사항은 전광판을 확인해주세요."
      ],
      english: [
        "Boarding starts 45 minutes before departure.",
        "Please check the screens for any updates."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/question-8.mp3",
    text: "Your baggage is overweight.",
    meaning: "수하물 무게가 초과되었습니다.",
    answers: {
      korean: [
        "오, 추가 요금은 얼마인가요?",
        "초과된 무게에 대해 50달러를 내셔야 합니다."
      ],
      english: [
        "Oh, how much do I need to pay?",
        "You need to pay $50 for the excess weight."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/question-9.mp3",
    text: "Do you have any prohibited items in your bag?",
    meaning: "가방 안에 금지 물품이 있나요?",
    answers: {
      korean: [
        "아니요, 오기 전에 다 확인했습니다.",
        "없는 것 같은데, 확인해보시겠어요?"
      ],
      english: [
        "No, I checked everything before coming.",
        "I don't think so. Do you want to check?"
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/question-10.mp3",
    text: "Please place your belongings on the conveyor belt.",
    meaning: "소지품을 컨베이어 벨트에 올려주세요.",
    answers: {
      korean: [
        "네, 여기 있습니다.",
        "알겠습니다, 잠시만요."
      ],
      english: [
        "Sure, here they are.",
        "Alright, one moment."
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/question-11.mp3",
    text: "Do you have any electronic devices in your bag?",
    meaning: "가방 안에 전자기기가 있나요?",
    answers: {
      korean: [
        "네, 노트북과 휴대폰이 있습니다.",
        "태블릿과 이어폰만 있어요."
      ],
      english: [
        "Yes, I have a laptop and a phone.",
        "Just a tablet and earbuds."
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/question-12.mp3",
    text: "Please take off your shoes, belt, and jacket.",
    meaning: "신발, 벨트, 재킷을 벗어주세요.",
    answers: {
      korean: [
        "네, 지금 벗겠습니다.",
        "알겠습니다."
      ],
      english: [
        "Of course, I'll do that now.",
        "No problem."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/question-13.mp3",
    text: "Empty your pockets and put everything in the tray.",
    meaning: "주머니를 비우고 모든 물건을 트레이에 넣어주세요.",
    answers: {
      korean: [
        "알겠습니다. 주머니 확인해볼게요.",
        "비어있는 것 같은데, 다시 확인해볼게요."
      ],
      english: [
        "Alright, let me check my pockets.",
        "I think they're empty, but I'll double-check."
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/question-14.mp3",
    text: "Step forward, please.",
    meaning: "앞으로 나와 주세요.",
    answers: {
      korean: [
        "네, 갑니다.",
        "네."
      ],
      english: [
        "Okay, here I go.",
        "Sure."
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/question-15.mp3",
    text: "Raise your arms, please.",
    meaning: "팔을 들어주세요.",
    answers: {
      korean: [
        "이렇게요?",
        "네."
      ],
      english: [
        "Like this?",
        "Got it."
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/question-16.mp3",
    text: "Face the scanner and stand still.",
    meaning: "스캐너를 바라보고 가만히 서주세요.",
    answers: {
      korean: [
        "알겠습니다.",
        "알겠습니다. 움직이지 않을게요."
      ],
      english: [
        "Understood.",
        "Alright, I won't move."
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/question-17.mp3",
    text: "Do you have any liquids, gels, or aerosols?",
    meaning: "액체, 젤, 스프레이류가 있나요?",
    answers: {
      korean: [
        "네, 작은 로션병이 있습니다.",
        "아니요, 액체류는 없습니다."
      ],
      english: [
        "Yes, I have a small bottle of lotion.",
        "No, I don't have any liquids."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/question-18.mp3",
    text: "Your passport and boarding pass, please.",
    meaning: "여권과 탑승권을 보여주세요.",
    answers: {
      korean: [
        "여기 있습니다.",
        "네, 여기 있습니다."
      ],
      english: [
        "Here you go.",
        "Sure, here they are."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/question-19.mp3",
    text: "Where are you traveling today?",
    meaning: "오늘 어디로 가시나요?",
    answers: {
      korean: [
        "로스앤젤레스에 갑니다.",
        "도쿄로 가는 환승 비행편이 있습니다."
      ],
      english: [
        "I'm going to Los Angeles.",
        "I have a connecting flight to Tokyo."
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/question-20.mp3",
    text: "What is the purpose of your visit?",
    meaning: "여행 목적이 무엇인가요?",
    answers: {
      korean: [
        "출장입니다.",
        "휴가차 왔습니다."
      ],
      english: [
        "I'm traveling for business.",
        "I'm here for vacation."
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/question-21.mp3",
    text: "How long will you be staying?",
    meaning: "얼마나 머무를 예정인가요?",
    answers: {
      korean: [
        "2주 동안 머무를 예정입니다.",
        "5일 동안입니다."
      ],
      english: [
        "I'll be staying for two weeks.",
        "Just for five days."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/question-22.mp3",
    text: "Where will you be staying?",
    meaning: "어디에서 머무를 예정인가요?",
    answers: {
      korean: [
        "시내 호텔에서 머무를 예정입니다.",
        "친구 집에서 머물 예정입니다."
      ],
      english: [
        "I'll be staying at a hotel in downtown.",
        "At my friend's house."
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/question-23.mp3",
    text: "Do you have a return ticket?",
    meaning: "돌아가는 항공권이 있나요?",
    answers: {
      korean: [
        "네, 여기 제 귀국 항공권이 있습니다.",
        "아직 예약하지 않았습니다."
      ],
      english: [
        "Yes, here's my return ticket.",
        "I haven't booked it yet."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/question-24.mp3",
    text: "Have you ever been to this country before?",
    meaning: "이 나라에 와본 적이 있나요?",
    answers: {
      korean: [
        "아니요, 이번이 처음입니다.",
        "네, 작년에 방문했었습니다."
      ],
      english: [
        "No, this is my first time.",
        "Yes, I visited last year."
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/question-25.mp3",
    text: "Do you have anything to declare?",
    meaning: "신고할 물건이 있나요?",
    answers: {
      korean: [
        "아니요, 없습니다.",
        "네, 선물 몇 개 있습니다."
      ],
      english: [
        "No, I don't.",
        "Yes, I have some gifts."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/question-26.mp3",
    text: "You may now collect your belongings.",
    meaning: "이제 소지품을 가져가셔도 됩니다.",
    answers: {
      korean: [
        "감사합니다.",
        "네, 알겠습니다."
      ],
      english: [
        "Thank you.",
        "Alright, got it."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/question-27.mp3",
    text: "You're all set. Have a great flight!",
    meaning: "이상 없습니다. 좋은 여행 되세요!",
    answers: {
      korean: [
        "감사합니다! 당신도요!",
        "감사합니다!"
      ],
      english: [
        "Thank you! You too!",
        "Appreciate it!"
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/question-28.mp3",
    text: "Please put your shoes and belt back on over there.",
    meaning: "저쪽에서 신발과 벨트를 다시 착용하세요.",
    answers: {
      korean: [
        "네, 감사합니다.",
        "알겠습니다."
      ],
      english: [
        "Got it, thanks.",
        "Okay, will do."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/question-29.mp3",
    text: "Thank you for your cooperation.",
    meaning: "협조해 주셔서 감사합니다.",
    answers: {
      korean: [
        "아니에요, 좋은 하루 되세요!",
        "별말씀을요."
      ],
      english: [
        "No problem, have a good day!",
        "You're welcome."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/question-30.mp3",
    text: "Have a safe trip!",
    meaning: "안전한 여행 되세요!",
    answers: {
      korean: [
        "감사합니다! 당신도요!",
        "그럴게요! 감사합니다."
      ],
      english: [
        "Thank you! Same to you!",
        "Will do! Thanks!"
      ]
    }
  }
];