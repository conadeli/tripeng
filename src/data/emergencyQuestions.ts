import { Question } from '../types';

// 여권 분실 신고 질문들 (6_1passport_loss_questions)
export const passportLossQuestions: Question[] = [
  {
  "id": 1,
    "audioUrl": "/audio/passport-loss-1.mp3",
    "text": "I lost my passport. Can you help me?",
    "meaning": "여권을 잃어버렸어요. 도와주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 신고 절차를 도와드리겠습니다.",
        "여권을 마지막으로 본 곳이 어디인가요?"
      ],
      "english": [
        "Yes, we’ll assist you with the report.",
        "Where was the last place you saw your passport?"
      ]
    }
  },
  {
    "id": 2,
    "audioUrl": "/audio/passport-loss-2.mp3",
    "text": "Where is the nearest police station?",
    "meaning": "가장 가까운 경찰서는 어디인가요?",
    "answers": {
      "korean": [
        "이 길을 따라가면 경찰서가 있습니다.",
        "도움이 필요하시면 경찰을 불러드릴까요?"
      ],
      "english": [
        "There is a police station down this street.",
        "Would you like me to call the police for you?"
      ]
    }
  },
  {
    "id": 3,
    "audioUrl": "/audio/passport-loss-3.mp3",
    "text": "I need to report a lost passport.",
    "meaning": "여권 분실 신고를 하고 싶어요.",
    "answers": {
      "korean": [
        "네, 여권 정보를 알려 주세요.",
        "여권 분실 사유를 설명해 주세요."
      ],
      "english": [
        "Sure, please provide your passport details.",
        "Can you explain how you lost your passport?"
      ]
    }
  },
  {
    "id": 4,
    "audioUrl": "/audio/passport-loss-4.mp3",
    "text": "What should I do after losing my passport?",
    "meaning": "여권을 잃어버리면 어떻게 해야 하나요?",
    "answers": {
      "korean": [
        "가장 먼저 경찰서에 신고하세요.",
        "대사관에 연락하여 새 여권을 신청하세요."
      ],
      "english": [
        "First, report it to the police.",
        "Contact your embassy to apply for a new passport."
      ]
    }
  },
  {
    "id": 5,
    "audioUrl": "/audio/passport-loss-5.mp3",
    "text": "Do I need a police report to get a new passport?",
    "meaning": "새 여권을 발급받으려면 경찰 보고서가 필요하나요?",
    "answers": {
      "korean": [
        "네, 경찰서에서 발급한 분실 신고서를 가져가셔야 합니다.",
        "경우에 따라 대사관에서 직접 처리가 가능합니다."
      ],
      "english": [
        "Yes, you need a police report for the embassy.",
        "Sometimes, the embassy can process it directly."
      ]
    }
  },
  {
    "id": 6,
    "audioUrl": "/audio/passport-loss-6.mp3",
    "text": "Can I get a copy of the police report?",
    "meaning": "경찰 보고서 사본을 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 처리 후 사본을 제공해 드리겠습니다.",
        "죄송하지만, 사본 발급이 불가능합니다."
      ],
      "english": [
        "Yes, we’ll provide a copy after processing.",
        "I’m sorry, but we can’t issue a copy."
      ]
    }
  },
  {
    "id": 7,
    "audioUrl": "/audio/passport-loss-7.mp3",
    "text": "How long does it take to get a new passport?",
    "meaning": "새 여권을 받는 데 얼마나 걸리나요?",
    "answers": {
      "korean": [
        "대략 3~5일 소요됩니다.",
        "긴급 여권은 당일 발급 가능합니다."
      ],
      "english": [
        "It usually takes 3-5 days.",
        "An emergency passport can be issued the same day."
      ]
    }
  },
  {
    "id": 8,
    "audioUrl": "/audio/passport-loss-8.mp3",
    "text": "Can I travel without a passport?",
    "meaning": "여권 없이 여행할 수 있나요?",
    "answers": {
      "korean": [
        "임시 여행 증명서를 받으셔야 합니다.",
        "대사관에서 특별 허가를 받아야 합니다."
      ],
      "english": [
        "You need to get a temporary travel document.",
        "You must get special permission from the embassy."
      ]
    }
  },
  {
    "id": 9,
    "audioUrl": "/audio/passport-loss-9.mp3",
    "text": "Do I need to pay a fee for a new passport?",
    "meaning": "새 여권 발급에 비용이 발생하나요?",
    "answers": {
      "korean": [
        "네, 여권 재발급 비용이 있습니다.",
        "긴급 여권은 추가 비용이 있습니다."
      ],
      "english": [
        "Yes, there is a fee for passport replacement.",
        "Emergency passports have an additional charge."
      ]
    }
  },
  {
    "id": 10,
    "audioUrl": "/audio/passport-loss-10.mp3",
    "text": "What documents do I need to replace my passport?",
    "meaning": "여권을 재발급받으려면 어떤 서류가 필요한가요?",
    "answers": {
      "korean": [
        "신분증과 경찰 신고서를 제출해야 합니다.",
        "여권 사진 두 장이 필요합니다."
      ],
      "english": [
        "You need to provide an ID and a police report.",
        "You need two passport-sized photos."
      ]
    }
  },
  {
    "id": 11,
    "audioUrl": "/audio/passport-loss-11.mp3",
    "text": "Can I get a temporary passport?",
    "meaning": "임시 여권을 발급받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 대사관에서 임시 여권을 신청할 수 있습니다.",
        "임시 여권은 여행 일정이 있는 경우에만 발급됩니다."
      ],
      "english": [
        "Yes, you can apply for a temporary passport at the embassy.",
        "Temporary passports are only issued if you have travel plans."
      ]
    }
  },
  {
    "id": 12,
    "audioUrl": "/audio/passport-loss-12.mp3",
    "text": "Where is my country’s embassy?",
    "meaning": "제 나라 대사관은 어디에 있나요?",
    "answers": {
      "korean": [
        "이 주소로 가시면 됩니다.",
        "가장 가까운 대사관은 시내에 있습니다."
      ],
      "english": [
        "You can go to this address.",
        "The nearest embassy is in the city center."
      ]
    }
  },
  {
    "id": 13,
    "audioUrl": "/audio/passport-loss-13.mp3",
    "text": "How do I contact my embassy?",
    "meaning": "대사관에 어떻게 연락하나요?",
    "answers": {
      "korean": [
        "대사관 전화번호를 알려드릴게요.",
        "대사관 웹사이트에서 연락처를 확인하세요."
      ],
      "english": [
        "I can give you the embassy’s phone number.",
        "Check the embassy’s website for contact details."
      ]
    }
  },
  {
    "id": 14,
    "audioUrl": "/audio/passport-loss-14.mp3",
    "text": "Can I apply for a new passport online?",
    "meaning": "온라인으로 새 여권을 신청할 수 있나요?",
    "answers": {
      "korean": [
        "아니요, 대사관에 직접 방문해야 합니다.",
        "일부 국가는 온라인 신청을 지원합니다."
      ],
      "english": [
        "No, you need to visit the embassy in person.",
        "Some countries allow online applications."
      ]
    }
  },
  {
    "id": 15,
    "audioUrl": "/audio/passport-loss-15.mp3",
    "text": "What should I do if my visa was in the lost passport?",
    "meaning": "여권에 비자가 있었는데 어떻게 해야 하나요?",
    "answers": {
      "korean": [
        "대사관과 이민국에 문의하세요.",
        "새 여권을 받은 후 비자를 다시 신청해야 합니다."
      ],
      "english": [
        "Contact your embassy and immigration office.",
        "You need to reapply for a visa after getting a new passport."
      ]
    }
  },
  {
    "id": 16,
    "audioUrl": "/audio/passport-loss-16.mp3",
    "text": "Can I track my new passport application?",
    "meaning": "새 여권 신청 상태를 확인할 수 있나요?",
    "answers": {
      "korean": [
        "네, 대사관 웹사이트에서 확인할 수 있습니다.",
        "대사관에 직접 문의하셔야 합니다."
      ],
      "english": [
        "Yes, you can check it on the embassy’s website.",
        "You need to contact the embassy directly."
      ]
    }
  },
  {
    "id": 17,
    "audioUrl": "/audio/passport-loss-17.mp3",
    "text": "Do I need to go to court for a lost passport?",
    "meaning": "여권 분실 시 법원에 가야 하나요?",
    "answers": {
      "korean": [
        "아니요, 경찰 신고만 하면 됩니다.",
        "일부 국가는 법적 절차가 필요할 수 있습니다."
      ],
      "english": [
        "No, you only need to file a police report.",
        "Some countries may require legal procedures."
      ]
    }
  },
  {
    "id": 18,
    "audioUrl": "/audio/passport-loss-18.mp3",
    "text": "How can I prove my identity without a passport?",
    "meaning": "여권 없이 신원을 어떻게 증명하나요?",
    "answers": {
      "korean": [
        "운전면허증이나 다른 신분증을 사용하세요.",
        "대사관에서 임시 신분증을 발급받을 수 있습니다."
      ],
      "english": [
        "Use your driver’s license or another ID.",
        "You can get a temporary ID from the embassy."
      ]
    }
  },
  {
    "id": 19,
    "audioUrl": "/audio/passport-loss-19.mp3",
    "text": "Can I still check into my hotel without a passport?",
    "meaning": "여권 없이 호텔 체크인이 가능한가요?",
    "answers": {
      "korean": [
        "네, 다른 신분증을 제시하시면 됩니다.",
        "일부 호텔은 여권이 꼭 필요합니다."
      ],
      "english": [
        "Yes, you can use another form of ID.",
        "Some hotels require a passport."
      ]
    }
  },
  {
    "id": 20,
    "audioUrl": "/audio/passport-loss-20.mp3",
    "text": "How do I replace a lost passport if I’m on a tour?",
    "meaning": "여행 중에 여권을 잃어버렸다면 어떻게 해야 하나요?",
    "answers": {
      "korean": [
        "가이드에게 도움을 요청하세요.",
        "가장 가까운 경찰서에 신고하세요."
      ],
      "english": [
        "Ask your tour guide for assistance.",
        "Report it to the nearest police station."
      ]
    }
  },
  {
    "id": 21,
    "audioUrl": "/audio/passport-loss-21.mp3",
    "text": "What happens if someone finds my lost passport?",
    "meaning": "누군가 제 여권을 찾으면 어떻게 되나요?",
    "answers": {
      "korean": [
        "경찰서에 맡길 가능성이 높습니다.",
        "대사관에 연락하여 분실 신고를 유지하세요."
      ],
      "english": [
        "They will likely turn it into the police.",
        "Keep your lost passport report active with the embassy."
      ]
    }
  },
  {
    "id": 22,
    "audioUrl": "/audio/passport-loss-22.mp3",
    "text": "Can I still take my flight without a passport?",
    "meaning": "여권 없이 비행기를 탈 수 있나요?",
    "answers": {
      "korean": [
        "임시 여행 증명서가 필요합니다.",
        "대사관에서 승객 식별 허가를 받아야 합니다."
      ],
      "english": [
        "You need a temporary travel document.",
        "The embassy must approve your identification for travel."
      ]
    }
  },
  {
    "id": 23,
    "audioUrl": "/audio/passport-loss-23.mp3",
    "text": "How do I cancel my lost passport?",
    "meaning": "분실된 여권을 취소하려면 어떻게 하나요?",
    "answers": {
      "korean": [
        "대사관에 분실 신고를 하셔야 합니다.",
        "온라인으로 분실 신고를 할 수도 있습니다."
      ],
      "english": [
        "Report it to your embassy.",
        "Some countries allow online passport cancellation."
      ]
    }
  },
  {
    "id": 24,
    "audioUrl": "/audio/passport-loss-24.mp3",
    "text": "Can I get an emergency passport in one day?",
    "meaning": "하루 안에 긴급 여권을 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 추가 비용을 내면 당일 발급이 가능합니다.",
        "보통 하루에서 이틀이 소요됩니다."
      ],
      "english": [
        "Yes, you can get one for an extra fee.",
        "It usually takes one to two days."
      ]
    }
  },
  {
    "id": 25,
    "audioUrl": "/audio/passport-loss-25.mp3",
    "text": "What if I lose my new passport again?",
    "meaning": "새 여권도 또 잃어버리면 어떻게 되나요?",
    "answers": {
      "korean": [
        "다시 경찰에 신고해야 합니다.",
        "여러 번 분실하면 추가 심사가 필요할 수 있습니다."
      ],
      "english": [
        "You must report it to the police again.",
        "Multiple losses may require extra verification."
      ]
    }
  },
  {
    "id": 26,
    "audioUrl": "/audio/passport-loss-26.mp3",
    "text": "Can someone else pick up my new passport?",
    "meaning": "다른 사람이 제 새 여권을 대신 수령할 수 있나요?",
    "answers": {
      "korean": [
        "네, 위임장을 작성하면 가능합니다.",
        "아니요, 본인이 직접 수령해야 합니다."
      ],
      "english": [
        "Yes, with a signed authorization letter.",
        "No, you must pick it up in person."
      ]
    }
  },
  {
    "id": 27,
    "audioUrl": "/audio/passport-loss-27.mp3",
    "text": "Do I need an appointment to apply for a new passport?",
    "meaning": "새 여권 신청을 위해 예약이 필요한가요?",
    "answers": {
      "korean": [
        "네, 미리 예약해야 합니다.",
        "아니요, 직접 방문하시면 됩니다."
      ],
      "english": [
        "Yes, you need to book an appointment.",
        "No, you can walk in without an appointment."
      ]
    }
  },
  {
    "id": 28,
    "audioUrl": "/audio/passport-loss-28.mp3",
    "text": "Can I expedite the passport process?",
    "meaning": "여권 발급을 빠르게 할 수 있나요?",
    "answers": {
      "korean": [
        "네, 긴급 신청이 가능합니다.",
        "추가 비용이 발생할 수 있습니다."
      ],
      "english": [
        "Yes, you can apply for expedited processing.",
        "It may cost extra."
      ]
    }
  },
  {
    "id": 29,
    "audioUrl": "/audio/passport-loss-29.mp3",
    "text": "How do I get a new visa after losing my passport?",
    "meaning": "여권을 잃어버린 후 새 비자를 받으려면 어떻게 해야 하나요?",
    "answers": {
      "korean": [
        "대사관에서 여권을 발급받은 후 다시 신청해야 합니다.",
        "이민국에 문의하세요."
      ],
      "english": [
        "You must get a new passport first.",
        "Contact the immigration office."
      ]
    }
  },
  {
    "id": 30,
    "audioUrl": "/audio/passport-loss-30.mp3",
    "text": "Can I travel to another country with a temporary passport?",
    "meaning": "임시 여권으로 다른 나라를 여행할 수 있나요?",
    "answers": {
      "korean": [
        "네, 일부 국가에서는 임시 여권으로 입국할 수 있습니다.",
        "아니요, 임시 여권은 특정 목적(귀국)만 가능합니다."
      ],
      "english": [
        "Yes, some countries accept temporary passports.",
        "No, temporary passports are usually for return trips only."
      ]
    }
  },
  // [Include all 30 passport loss questions here]
];

// 병원 방문 질문들 (6_2hospital_visit_questions)
export const hospitalVisitQuestions: Question[] = [
  {
"id": 1,
    "audioUrl": "/audio/hospital-1.mp3",
    "text": "I need to see a doctor.",
    "meaning": "의사를 만나야 해요.",
    "answers": {
      "korean": [
        "네, 접수해 드리겠습니다.",
        "어떤 증상이 있으신가요?"
      ],
      "english": [
        "Yes, I’ll register you.",
        "What symptoms do you have?"
      ]
    }
  },
  {
    "id": 2,
    "audioUrl": "/audio/hospital-2.mp3",
    "text": "Do I need an appointment?",
    "meaning": "예약이 필요한가요?",
    "answers": {
      "korean": [
        "네, 사전 예약이 필요합니다.",
        "아니요, 바로 진료 가능합니다."
      ],
      "english": [
        "Yes, you need an appointment.",
        "No, you can see the doctor right away."
      ]
    }
  },
  {
    "id": 3,
    "audioUrl": "/audio/hospital-3.mp3",
    "text": "Where is the nearest hospital?",
    "meaning": "가장 가까운 병원이 어디인가요?",
    "answers": {
      "korean": [
        "이 길을 따라가면 있습니다.",
        "택시를 타고 10분 거리입니다."
      ],
      "english": [
        "It’s down this street.",
        "It’s a 10-minute taxi ride away."
      ]
    }
  },
  {
    "id": 4,
    "audioUrl": "/audio/hospital-4.mp3",
    "text": "What are your clinic hours?",
    "meaning": "진료 시간이 어떻게 되나요?",
    "answers": {
      "korean": [
        "오전 9시부터 오후 6시까지 운영합니다.",
        "응급실은 24시간 운영됩니다."
      ],
      "english": [
        "We’re open from 9 AM to 6 PM.",
        "The emergency room is open 24 hours."
      ]
    }
  },
  {
    "id": 5,
    "audioUrl": "/audio/hospital-5.mp3",
    "text": "I have a fever and a headache.",
    "meaning": "열이 나고 두통이 있어요.",
    "answers": {
      "korean": [
        "언제부터 증상이 시작되었나요?",
        "기침이나 다른 증상도 있나요?"
      ],
      "english": [
        "When did the symptoms start?",
        "Do you have a cough or any other symptoms?"
      ]
    }
  },
  {
    "id": 6,
    "audioUrl": "/audio/hospital-6.mp3",
    "text": "I think I have food poisoning.",
    "meaning": "식중독에 걸린 것 같아요.",
    "answers": {
      "korean": [
        "어떤 음식을 드셨나요?",
        "복통과 설사가 있나요?"
      ],
      "english": [
        "What did you eat?",
        "Do you have stomach pain and diarrhea?"
      ]
    }
  },
  {
    "id": 7,
    "audioUrl": "/audio/hospital-7.mp3",
    "text": "Do you have any allergies?",
    "meaning": "알레르기가 있나요?",
    "answers": {
      "korean": [
        "네, 땅콩 알레르기가 있어요.",
        "아니요, 없습니다."
      ],
      "english": [
        "Yes, I’m allergic to peanuts.",
        "No, I don’t have any allergies."
      ]
    }
  },
  {
    "id": 8,
    "audioUrl": "/audio/hospital-8.mp3",
    "text": "Can you prescribe some medicine?",
    "meaning": "약을 처방해 주실 수 있나요?",
    "answers": {
      "korean": [
        "네, 처방전을 드리겠습니다.",
        "추가 검사가 필요합니다."
      ],
      "english": [
        "Yes, I’ll write you a prescription.",
        "You need further tests."
      ]
    }
  },
  {
    "id": 9,
    "audioUrl": "/audio/hospital-9.mp3",
    "text": "Where is the pharmacy?",
    "meaning": "약국이 어디에 있나요?",
    "answers": {
      "korean": [
        "병원 옆에 있습니다.",
        "이 건물 1층에 있습니다."
      ],
      "english": [
        "It’s next to the hospital.",
        "It’s on the first floor of this building."
      ]
    }
  },
  {
    "id": 10,
    "audioUrl": "/audio/hospital-10.mp3",
    "text": "Do I need to take this medicine with food?",
    "meaning": "이 약을 식사 후에 먹어야 하나요?",
    "answers": {
      "korean": [
        "네, 식사 후에 복용하세요.",
        "아니요, 공복에 드시면 됩니다."
      ],
      "english": [
        "Yes, take it after meals.",
        "No, take it on an empty stomach."
      ]
    }
  },
  {
    "id": 11,
    "audioUrl": "/audio/hospital-11.mp3",
    "text": "I feel dizzy and weak.",
    "meaning": "어지럽고 힘이 없어요.",
    "answers": {
      "korean": [
        "언제부터 그러셨나요?",
        "혈압을 체크해 보겠습니다."
      ],
      "english": [
        "When did it start?",
        "Let’s check your blood pressure."
      ]
    }
  },
  {
    "id": 12,
    "audioUrl": "/audio/hospital-12.mp3",
    "text": "I have a sore throat.",
    "meaning": "목이 아파요.",
    "answers": {
      "korean": [
        "감기 증상이 있으신가요?",
        "편도선이 부어있습니다."
      ],
      "english": [
        "Do you have cold symptoms?",
        "Your tonsils are swollen."
      ]
    }
  },
  {
    "id": 13,
    "audioUrl": "/audio/hospital-13.mp3",
    "text": "I think I have the flu.",
    "meaning": "독감에 걸린 것 같아요.",
    "answers": {
      "korean": [
        "열과 근육통이 있나요?",
        "독감 검사를 해보겠습니다."
      ],
      "english": [
        "Do you have fever and muscle pain?",
        "Let’s do a flu test."
      ]
    }
  },
  {
    "id": 14,
    "audioUrl": "/audio/hospital-14.mp3",
    "text": "Can I get a COVID-19 test?",
    "meaning": "코로나 검사를 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, PCR 검사 또는 신속 검사를 선택할 수 있습니다.",
        "검사 결과는 24시간 이내에 나옵니다."
      ],
      "english": [
        "Yes, you can choose a PCR or rapid test.",
        "Results will be available within 24 hours."
      ]
    }
  },
  {
    "id": 15,
    "audioUrl": "/audio/hospital-15.mp3",
    "text": "Do I need an X-ray?",
    "meaning": "엑스레이를 찍어야 하나요?",
    "answers": {
      "korean": [
        "네, 폐 상태를 확인해야 합니다.",
        "아니요, 증상만으로 진단 가능합니다."
      ],
      "english": [
        "Yes, we need to check your lungs.",
        "No, we can diagnose based on symptoms."
      ]
    }
  },
  {
    "id": 16,
    "audioUrl": "/audio/hospital-16.mp3",
    "text": "I have chest pain.",
    "meaning": "가슴이 아파요.",
    "answers": {
      "korean": [
        "언제부터 아팠나요?",
        "심전도 검사를 해보겠습니다."
      ],
      "english": [
        "When did it start?",
        "Let’s do an ECG test."
      ]
    }
  },
  {
    "id": 17,
    "audioUrl": "/audio/hospital-17.mp3",
    "text": "I was in an accident.",
    "meaning": "사고를 당했어요.",
    "answers": {
      "korean": [
        "어디가 다치셨나요?",
        "구급차를 불러드릴까요?"
      ],
      "english": [
        "Where are you hurt?",
        "Do you need an ambulance?"
      ]
    }
  },
  {
    "id": 18,
    "audioUrl": "/audio/hospital-18.mp3",
    "text": "I think I broke my arm.",
    "meaning": "팔이 부러진 것 같아요.",
    "answers": {
      "korean": [
        "엑스레이를 찍어보겠습니다.",
        "통증이 심한가요?"
      ],
      "english": [
        "Let’s take an X-ray.",
        "Is the pain severe?"
      ]
    }
  },
  {
    "id": 19,
    "audioUrl": "/audio/hospital-19.mp3",
    "text": "Can I get stitches?",
    "meaning": "상처를 꿰매야 하나요?",
    "answers": {
      "korean": [
        "네, 상처가 깊어서 봉합이 필요합니다.",
        "아니요, 밴드로 치료 가능합니다."
      ],
      "english": [
        "Yes, the wound is deep and needs stitches.",
        "No, a bandage will be enough."
      ]
    }
  },
  {
    "id": 20,
    "audioUrl": "/audio/hospital-20.mp3",
    "text": "Can I get a tetanus shot?",
    "meaning": "파상풍 주사를 맞을 수 있나요?",
    "answers": {
      "korean": [
        "네, 상처가 깊으면 예방 접종이 필요합니다.",
        "최근 5년 내에 맞으셨나요?"
      ],
      "english": [
        "Yes, if the wound is deep, you need a shot.",
        "Did you get one in the last 5 years?"
      ]
    }
  },
  {
    "id": 21,
    "audioUrl": "/audio/hospital-21.mp3",
    "text": "I have a rash on my skin.",
    "meaning": "피부에 발진이 있어요.",
    "answers": {
      "korean": [
        "알레르기 반응일 수 있습니다.",
        "연고를 처방해 드리겠습니다."
      ],
      "english": [
        "It could be an allergic reaction.",
        "I’ll prescribe a cream for you."
      ]
    }
  },
  {
    "id": 22,
    "audioUrl": "/audio/hospital-22.mp3",
    "text": "Can I get a blood test?",
    "meaning": "혈액 검사를 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 검사 결과는 내일 나옵니다.",
        "금식 후 검사를 받으셔야 합니다."
      ],
      "english": [
        "Yes, the results will be ready tomorrow.",
        "You need to fast before the test."
      ]
    }
  },
  {
    "id": 23,
    "audioUrl": "/audio/hospital-23.mp3",
    "text": "I have high blood pressure.",
    "meaning": "혈압이 높아요.",
    "answers": {
      "korean": [
        "규칙적으로 혈압을 체크하세요.",
        "식단 조절이 필요합니다."
      ],
      "english": [
        "Monitor your blood pressure regularly.",
        "You need to adjust your diet."
      ]
    }
  },
  {
    "id": 24,
    "audioUrl": "/audio/hospital-24.mp3",
    "text": "Can I get a prescription refill?",
    "meaning": "처방전을 다시 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 추가로 30일치 처방해 드리겠습니다.",
        "의사 상담 후 가능합니다."
      ],
      "english": [
        "Yes, I’ll give you a 30-day refill.",
        "You need to consult the doctor first."
      ]
    }
  },
  {
    "id": 25,
    "audioUrl": "/audio/hospital-25.mp3",
    "text": "I feel anxious and can’t sleep.",
    "meaning": "불안하고 잠이 오지 않아요.",
    "answers": {
      "korean": [
        "불안 증상이 자주 나타나나요?",
        "심리 상담을 받아보시는 게 좋겠습니다."
      ],
      "english": [
        "Do you often feel anxious?",
        "You should consider seeing a counselor."
      ]
    }
  },
  {
    "id": 26,
    "audioUrl": "/audio/hospital-26.mp3",
    "text": "Can I get a vaccination?",
    "meaning": "백신을 맞을 수 있나요?",
    "answers": {
      "korean": [
        "네, 백신 접종이 가능합니다.",
        "사전 예약이 필요합니다."
      ],
      "english": [
        "Yes, you can get vaccinated.",
        "You need to make an appointment."
      ]
    }
  },
  {
    "id": 27,
    "audioUrl": "/audio/hospital-27.mp3",
    "text": "Is it okay to take this medicine while pregnant?",
    "meaning": "임신 중에 이 약을 먹어도 괜찮나요?",
    "answers": {
      "korean": [
        "이 약은 임산부에게 안전합니다.",
        "다른 대체 약을 처방해 드리겠습니다."
      ],
      "english": [
        "This medication is safe for pregnancy.",
        "I’ll prescribe an alternative medication."
      ]
    }
  },
  {
    "id": 28,
    "audioUrl": "/audio/hospital-28.mp3",
    "text": "How long will it take to recover?",
    "meaning": "회복하는 데 얼마나 걸리나요?",
    "answers": {
      "korean": [
        "대략 1~2주 정도 걸릴 것입니다.",
        "회복 속도는 개인차가 있습니다."
      ],
      "english": [
        "It will take about 1-2 weeks.",
        "Recovery time varies by individual."
      ]
    }
  },
  {
    "id": 29,
    "audioUrl": "/audio/hospital-29.mp3",
    "text": "Do I need a follow-up appointment?",
    "meaning": "추가 진료가 필요한가요?",
    "answers": {
      "korean": [
        "네, 다음 주에 다시 방문해 주세요.",
        "증상이 좋아지지 않으면 다시 오세요."
      ],
      "english": [
        "Yes, come back next week.",
        "If symptoms persist, visit us again."
      ]
    }
  },
  {
    "id": 30,
    "audioUrl": "/audio/hospital-30.mp3",
    "text": "Can I get a doctor's note for work?",
    "meaning": "회사에 제출할 진단서를 받을 수 있나요?",
    "answers": {
      "korean": [
        "네, 진단서를 발급해 드리겠습니다.",
        "아니요, 특정 조건에서만 발급 가능합니다."
      ],
      "english": [
        "Yes, I’ll issue a doctor’s note for you.",
        "No, it’s only available under certain conditions."
      ]
    }
  },
  // [Include all 30 hospital visit questions here]
];