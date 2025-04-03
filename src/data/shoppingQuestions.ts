import { Question } from '../types';

// 가격 흥정할 때 질문들 (4_1bargaining_phrases_final)
export const bargainingPhrases: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/bargaining-1.mp3",
    text: "Can you give me a discount?",
    meaning: "할인을 해주실 수 있나요?",
    answers: {
      korean: [
        "네, 10% 할인해 드리겠습니다.",
        "죄송하지만, 할인이 어렵습니다."
      ],
      english: [
        "Yes, I can give you a 10% discount.",
        "I'm sorry, but we can't offer a discount."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/bargaining-2.mp3",
    text: "Is this the best price you can offer?",
    meaning: "이게 최저 가격인가요?",
    answers: {
      korean: [
        "네, 최저 가격입니다.",
        "더 할인해 드릴 수 있습니다."
      ],
      english: [
        "Yes, this is the lowest price.",
        "I can give you a better deal."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/bargaining-3.mp3",
    text: "Can you lower the price?",
    meaning: "가격을 낮춰줄 수 있나요?",
    answers: {
      korean: [
        "네, 조금 낮춰드릴 수 있습니다.",
        "죄송하지만, 가격은 고정되어 있습니다."
      ],
      english: [
        "Yes, I can lower it a little.",
        "I'm sorry, but the price is fixed."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/bargaining-4.mp3",
    text: "I found this cheaper at another store.",
    meaning: "다른 가게에서 더 저렴하게 봤어요.",
    answers: {
      korean: [
        "그렇다면 같은 가격으로 맞춰드리겠습니다.",
        "우리 제품은 품질이 더 좋습니다."
      ],
      english: [
        "Then I can match the price.",
        "Our product is of better quality."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/bargaining-5.mp3",
    text: "What's your final price?",
    meaning: "최종 가격이 얼마인가요?",
    answers: {
      korean: [
        "이 가격이 최종입니다.",
        "조금 더 조정해 드릴 수 있습니다."
      ],
      english: [
        "This is my final offer.",
        "I can adjust it a little more."
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/bargaining-6.mp3",
    text: "Can I get a better deal if I buy more?",
    meaning: "더 많이 사면 할인받을 수 있나요?",
    answers: {
      korean: [
        "네, 대량 구매 시 할인이 가능합니다.",
        "아니요, 가격은 동일합니다."
      ],
      english: [
        "Yes, we offer bulk discounts.",
        "No, the price remains the same."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/bargaining-7.mp3",
    text: "That's too expensive for me.",
    meaning: "제게는 너무 비싸요.",
    answers: {
      korean: [
        "그럼 더 저렴한 상품을 보여드릴까요?",
        "최대한 맞춰드리겠습니다."
      ],
      english: [
        "Shall I show you something cheaper?",
        "I'll try to give you the best price."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/bargaining-8.mp3",
    text: "I'm on a budget. Can you help me?",
    meaning: "예산이 한정되어 있어요. 도와주실 수 있나요?",
    answers: {
      korean: [
        "네, 예산에 맞는 제품을 추천해 드릴게요.",
        "죄송하지만, 가격 조정이 어렵습니다."
      ],
      english: [
        "Yes, I'll find something within your budget.",
        "I'm sorry, but we can't lower the price."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/bargaining-9.mp3",
    text: "Can you throw in something extra?",
    meaning: "뭔가 추가로 끼워줄 수 있나요?",
    answers: {
      korean: [
        "네, 작은 선물을 드리겠습니다.",
        "죄송하지만, 추가 제공이 어렵습니다."
      ],
      english: [
        "Yes, I'll include a small gift.",
        "I'm sorry, but we can't add anything extra."
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/bargaining-10.mp3",
    text: "If I pay in cash, can I get a discount?",
    meaning: "현금으로 내면 할인되나요?",
    answers: {
      korean: [
        "네, 현금 결제 시 5% 할인해 드립니다.",
        "죄송하지만, 카드와 동일한 가격입니다."
      ],
      english: [
        "Yes, you get a 5% discount for cash payments.",
        "I'm sorry, but the price is the same for cash or card."
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/bargaining-11.mp3",
    text: "Can you give me a better price?",
    meaning: "좀 더 나은 가격을 제시해 주실 수 있나요?",
    answers: {
      korean: [
        "네, 조금 더 할인해 드릴 수 있습니다.",
        "죄송하지만, 현재 가격이 최저가입니다."
      ],
      english: [
        "Yes, I can give you a little more discount.",
        "I'm sorry, but this is our lowest price."
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/bargaining-12.mp3",
    text: "I really like it, but it's too expensive.",
    meaning: "정말 마음에 드는데 너무 비싸요.",
    answers: {
      korean: [
        "그러면 특별 할인을 해드리겠습니다.",
        "품질을 생각하면 이 가격이 적당합니다."
      ],
      english: [
        "Then I'll give you a special discount.",
        "Considering the quality, this is a fair price."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/bargaining-13.mp3",
    text: "Can I get a discount if I buy two?",
    meaning: "두 개 사면 할인되나요?",
    answers: {
      korean: [
        "네, 10% 할인해 드리겠습니다.",
        "죄송하지만, 개별 가격은 동일합니다."
      ],
      english: [
        "Yes, I can give you a 10% discount.",
        "I'm sorry, but the price is the same."
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/bargaining-14.mp3",
    text: "I saw this for a lower price elsewhere.",
    meaning: "다른 곳에서 더 저렴한 가격을 봤어요.",
    answers: {
      korean: [
        "그렇다면 같은 가격으로 드리겠습니다.",
        "우리 제품은 더 높은 품질을 자랑합니다."
      ],
      english: [
        "Then I can match that price.",
        "Our product has better quality."
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/bargaining-15.mp3",
    text: "That's a bit over my budget.",
    meaning: "제 예산을 조금 초과하네요.",
    answers: {
      korean: [
        "그러면 가격을 좀 낮춰드릴게요.",
        "이 가격이 최종 가격입니다."
      ],
      english: [
        "Then I'll lower the price a bit.",
        "This is the final price."
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/bargaining-16.mp3",
    text: "Can you offer me a special deal?",
    meaning: "특별 할인을 받을 수 있나요?",
    answers: {
      korean: [
        "네, 오늘 특별 할인을 적용해 드립니다.",
        "죄송하지만, 특별 할인은 없습니다."
      ],
      english: [
        "Yes, I can give you a special deal today.",
        "I'm sorry, but we don't have special discounts."
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/bargaining-17.mp3",
    text: "I'll take it if you lower the price.",
    meaning: "가격을 낮춰주시면 살게요.",
    answers: {
      korean: [
        "좋습니다, 할인을 적용해 드리겠습니다.",
        "죄송하지만, 가격을 더 낮출 수 없습니다."
      ],
      english: [
        "Alright, I'll give you a discount.",
        "I'm sorry, but I can't lower the price any further."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/bargaining-18.mp3",
    text: "That's still too expensive for me.",
    meaning: "그래도 너무 비싸요.",
    answers: {
      korean: [
        "그럼 조금 더 할인해 드릴 수 있습니다.",
        "이 가격이 최저가입니다."
      ],
      english: [
        "Then I can offer a little more discount.",
        "This is the best price we can offer."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/bargaining-19.mp3",
    text: "What's the lowest you can go?",
    meaning: "최저 가격이 얼마인가요?",
    answers: {
      korean: [
        "이 가격이 최저 가격입니다.",
        "조금 더 낮춰드릴 수 있습니다."
      ],
      english: [
        "This is the lowest price.",
        "I can lower it just a bit more."
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/bargaining-20.mp3",
    text: "Can you include free shipping?",
    meaning: "무료 배송을 제공해 주실 수 있나요?",
    answers: {
      korean: [
        "네, 무료 배송해 드리겠습니다.",
        "죄송하지만, 배송비는 별도로 청구됩니다."
      ],
      english: [
        "Yes, I'll provide free shipping.",
        "I'm sorry, but shipping costs extra."
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/bargaining-21.mp3",
    text: "If I buy now, can I get a discount?",
    meaning: "지금 사면 할인받을 수 있나요?",
    answers: {
      korean: [
        "네, 지금 구매하시면 5% 할인됩니다.",
        "죄송하지만, 현재 할인은 없습니다."
      ],
      english: [
        "Yes, you'll get a 5% discount if you buy now.",
        "I'm sorry, but we don't have discounts at the moment."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/bargaining-22.mp3",
    text: "Can I get a wholesale price?",
    meaning: "도매가로 구매할 수 있나요?",
    answers: {
      korean: [
        "네, 대량 구매 시 할인이 적용됩니다.",
        "죄송하지만, 도매 가격은 적용되지 않습니다."
      ],
      english: [
        "Yes, we offer bulk discounts.",
        "I'm sorry, but wholesale pricing is not available."
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/bargaining-23.mp3",
    text: "I'd like to negotiate the price.",
    meaning: "가격을 협상하고 싶어요.",
    answers: {
      korean: [
        "네, 협상 가능하니 제안을 주세요.",
        "죄송하지만, 가격은 고정되어 있습니다."
      ],
      english: [
        "Yes, I'm open to negotiation.",
        "I'm sorry, but the price is fixed."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/bargaining-24.mp3",
    text: "Do you have any promotions?",
    meaning: "현재 진행 중인 프로모션이 있나요?",
    answers: {
      korean: [
        "네, 특정 상품에 대한 할인이 있습니다.",
        "현재 특별 할인은 없습니다."
      ],
      english: [
        "Yes, we have discounts on select items.",
        "I'm sorry, but we don't have any promotions now."
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/bargaining-25.mp3",
    text: "Can I get a free gift with my purchase?",
    meaning: "구매하면 사은품을 받을 수 있나요?",
    answers: {
      korean: [
        "네, 작은 선물을 드리겠습니다.",
        "죄송하지만, 사은품 행사는 없습니다."
      ],
      english: [
        "Yes, I'll include a small gift.",
        "I'm sorry, but we don't offer free gifts."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/bargaining-26.mp3",
    text: "How about a buy-one-get-one deal?",
    meaning: "하나 사면 하나 더 받을 수 있나요?",
    answers: {
      korean: [
        "네, 특정 상품에 대해 1+1 행사를 하고 있습니다.",
        "죄송하지만, 1+1 행사는 없습니다."
      ],
      english: [
        "Yes, we have a buy-one-get-one deal on select items.",
        "I'm sorry, but we don't offer such deals."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/bargaining-27.mp3",
    text: "If I pay in advance, can I get a discount?",
    meaning: "선결제하면 할인되나요?",
    answers: {
      korean: [
        "네, 선결제 시 5% 할인해 드립니다.",
        "죄송하지만, 결제 방식에 따른 할인은 없습니다."
      ],
      english: [
        "Yes, you get a 5% discount for early payment.",
        "I'm sorry, but we don't offer discounts based on payment method."
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/bargaining-28.mp3",
    text: "Can I pay in installments?",
    meaning: "할부로 결제할 수 있나요?",
    answers: {
      korean: [
        "네, 3개월 무이자 할부가 가능합니다.",
        "죄송하지만, 할부는 지원되지 않습니다."
      ],
      english: [
        "Yes, we offer 3-month interest-free installments.",
        "I'm sorry, but we don't support installment payments."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/bargaining-29.mp3",
    text: "Is there a student or senior discount?",
    meaning: "학생이나 노인 할인 있나요?",
    answers: {
      korean: [
        "네, 학생과 노인을 위한 10% 할인이 있습니다.",
        "죄송하지만, 특정 할인은 없습니다."
      ],
      english: [
        "Yes, we offer a 10% discount for students and seniors.",
        "I'm sorry, but we don't have specific discounts."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/bargaining-30.mp3",
    text: "Can I get a discount if I refer a friend?",
    meaning: "친구를 소개하면 할인받을 수 있나요?",
    answers: {
      korean: [
        "네, 친구를 소개하면 5% 할인이 적용됩니다.",
        "죄송하지만, 추천 할인은 없습니다."
      ],
      english: [
        "Yes, you get a 5% discount for referring a friend.",
        "I'm sorry, but we don't offer referral discounts."
      ]
    }
  }
];

// 면세점 쇼핑 질문들 (4_2duty_free_phrases_final)
export const dutyFreePhrases: Question[] = [
  {
    id: 1,
    audioUrl: "/audio/duty-free-1.mp3",
    text: "Where is the duty-free shop?",
    meaning: "면세점이 어디에 있나요?",
    answers: {
      korean: [
        "면세점은 출국장 안에 있습니다.",
        "이쪽으로 가시면 면세점이 나옵니다."
      ],
      english: [
        "The duty-free shop is inside the departure area.",
        "If you go this way, you'll find the duty-free store."
      ]
    }
  },
  {
    id: 2,
    audioUrl: "/audio/duty-free-2.mp3",
    text: "Do I need my passport to shop here?",
    meaning: "여기서 쇼핑하려면 여권이 필요한가요?",
    answers: {
      korean: [
        "네, 여권과 탑승권을 제시해야 합니다.",
        "아니요, 일부 제품은 여권 없이 구매할 수 있습니다."
      ],
      english: [
        "Yes, you need to show your passport and boarding pass.",
        "No, some items can be purchased without a passport."
      ]
    }
  },
  {
    id: 3,
    audioUrl: "/audio/duty-free-3.mp3",
    text: "Can I pay in my local currency?",
    meaning: "내 통화로 결제할 수 있나요?",
    answers: {
      korean: [
        "네, 다양한 통화를 받습니다.",
        "죄송하지만, 결제는 달러 또는 유로로만 가능합니다."
      ],
      english: [
        "Yes, we accept various currencies.",
        "I'm sorry, but we only accept USD or EUR."
      ]
    }
  },
  {
    id: 4,
    audioUrl: "/audio/duty-free-4.mp3",
    text: "Do you have any promotions or discounts?",
    meaning: "할인 행사나 프로모션이 있나요?",
    answers: {
      korean: [
        "네, 특정 제품에 대해 10% 할인이 있습니다.",
        "현재 특별 할인 행사는 없습니다."
      ],
      english: [
        "Yes, there is a 10% discount on selected items.",
        "There are no special promotions at the moment."
      ]
    }
  },
  {
    id: 5,
    audioUrl: "/audio/duty-free-5.mp3",
    text: "Is there a limit on how much I can buy?",
    meaning: "구매 제한이 있나요?",
    answers: {
      korean: [
        "네, 한 사람당 2개까지만 구매할 수 있습니다.",
        "아니요, 제한 없이 구매 가능합니다."
      ],
      english: [
        "Yes, you can buy up to two per person.",
        "No, you can purchase as much as you like."
      ]
    }
  },
  {
    id: 6,
    audioUrl: "/audio/duty-free-6.mp3",
    text: "Can I get a tax refund here?",
    meaning: "여기서 세금 환급을 받을 수 있나요?",
    answers: {
      korean: [
        "네, 계산대에서 세금 환급 신청이 가능합니다.",
        "아니요, 세금 환급은 출국장에서 하셔야 합니다."
      ],
      english: [
        "Yes, you can apply for a tax refund at the counter.",
        "No, tax refunds must be done at the airport."
      ]
    }
  },
  {
    id: 7,
    audioUrl: "/audio/duty-free-7.mp3",
    text: "Can I return an item if I change my mind?",
    meaning: "구매 후 환불이 가능한가요?",
    answers: {
      korean: [
        "네, 영수증을 지참하면 가능합니다.",
        "아니요, 면세점 구매는 환불이 불가능합니다."
      ],
      english: [
        "Yes, you can return it with the receipt.",
        "No, duty-free purchases are non-refundable."
      ]
    }
  },
  {
    id: 8,
    audioUrl: "/audio/duty-free-8.mp3",
    text: "How much is this in USD?",
    meaning: "이거 미국 달러로 얼마인가요?",
    answers: {
      korean: [
        "대략 50달러입니다.",
        "현재 환율 기준으로 75달러입니다."
      ],
      english: [
        "It's about 50 USD.",
        "It's 75 USD based on the current exchange rate."
      ]
    }
  },
  {
    id: 9,
    audioUrl: "/audio/duty-free-9.mp3",
    text: "Can I pay with a credit card?",
    meaning: "신용카드로 결제할 수 있나요?",
    answers: {
      korean: [
        "네, 모든 주요 신용카드를 받습니다.",
        "죄송하지만, 현금만 가능합니다."
      ],
      english: [
        "Yes, we accept all major credit cards.",
        "I'm sorry, but we only accept cash."
      ]
    }
  },
  {
    id: 10,
    audioUrl: "/audio/duty-free-10.mp3",
    text: "Can I get a receipt, please?",
    meaning: "영수증을 받을 수 있을까요?",
    answers: {
      korean: [
        "네, 영수증을 드리겠습니다.",
        "죄송하지만, 전자 영수증만 발급됩니다."
      ],
      english: [
        "Yes, here's your receipt.",
        "I'm sorry, but we only provide electronic receipts."
      ]
    }
  },
  {
    id: 11,
    audioUrl: "/audio/duty-free-11.mp3",
    text: "Do you have any special offers?",
    meaning: "특별 할인 상품이 있나요?",
    answers: {
      korean: [
        "네, 특정 향수에 20% 할인이 적용됩니다.",
        "현재 특별 할인이 없습니다."
      ],
      english: [
        "Yes, we have a 20% discount on selected perfumes.",
        "No, we don't have any special discounts at the moment."
      ]
    }
  },
  {
    id: 12,
    audioUrl: "/audio/duty-free-12.mp3",
    text: "Can I try this perfume?",
    meaning: "이 향수를 시향해볼 수 있나요?",
    answers: {
      korean: [
        "네, 테스터가 준비되어 있습니다.",
        "죄송하지만, 시향 테스터가 없습니다."
      ],
      english: [
        "Yes, we have a tester available.",
        "I'm sorry, but we don't have testers."
      ]
    }
  },
  {
    id: 13,
    audioUrl: "/audio/duty-free-13.mp3",
    text: "Do you sell electronics duty-free?",
    meaning: "전자제품도 면세로 판매하나요?",
    answers: {
      korean: [
        "네, 다양한 전자제품을 면세 가격으로 판매합니다.",
        "죄송하지만, 전자제품은 면세로 판매되지 않습니다."
      ],
      english: [
        "Yes, we offer a variety of electronics at duty-free prices.",
        "I'm sorry, but we don't sell electronics duty-free."
      ]
    }
  },
  {
    id: 14,
    audioUrl: "/audio/duty-free-14.mp3",
    text: "What's the return policy for duty-free items?",
    meaning: "면세품의 반품 규정은 어떻게 되나요?",
    answers: {
      korean: [
        "구매 후 30일 이내에 환불 가능합니다.",
        "면세품은 환불이 불가능합니다."
      ],
      english: [
        "You can return it within 30 days.",
        "Duty-free purchases are non-refundable."
      ]
    }
  },
  {
    id: 15,
    audioUrl: "/audio/duty-free-15.mp3",
    text: "Do you have any luxury brand items?",
    meaning: "명품 브랜드 제품이 있나요?",
    answers: {
      korean: [
        "네, 구찌와 루이비통이 있습니다.",
        "죄송하지만, 현재 명품 제품이 없습니다."
      ],
      english: [
        "Yes, we have Gucci and Louis Vuitton.",
        "I'm sorry, but we don't carry luxury brands right now."
      ]
    }
  },
  {
    id: 16,
    audioUrl: "/audio/duty-free-16.mp3",
    text: "Can I buy alcohol at this duty-free shop?",
    meaning: "이 면세점에서 술을 구매할 수 있나요?",
    answers: {
      korean: [
        "네, 주류 코너가 따로 있습니다.",
        "죄송하지만, 술은 판매하지 않습니다."
      ],
      english: [
        "Yes, we have a section for alcohol.",
        "I'm sorry, but we don't sell alcohol."
      ]
    }
  },
  {
    id: 17,
    audioUrl: "/audio/duty-free-17.mp3",
    text: "What is the limit for duty-free alcohol purchases?",
    meaning: "면세 주류 구매 한도가 있나요?",
    answers: {
      korean: [
        "네, 한 사람당 1리터까지 구매 가능합니다.",
        "아니요, 구매 제한이 없습니다."
      ],
      english: [
        "Yes, you can buy up to 1 liter per person.",
        "No, there is no limit on alcohol purchases."
      ]
    }
  },
  {
    id: 18,
    audioUrl: "/audio/duty-free-18.mp3",
    text: "Can I buy cigarettes duty-free?",
    meaning: "면세로 담배를 구매할 수 있나요?",
    answers: {
      korean: [
        "네, 담배 코너가 있습니다.",
        "죄송하지만, 담배는 판매하지 않습니다."
      ],
      english: [
        "Yes, we have a section for cigarettes.",
        "I'm sorry, but we don't sell cigarettes."
      ]
    }
  },
  {
    id: 19,
    audioUrl: "/audio/duty-free-19.mp3",
    text: "What is the cigarette purchase limit?",
    meaning: "담배 구매 한도가 있나요?",
    answers: {
      korean: [
        "네, 한 사람당 10갑까지만 구매 가능합니다.",
        "제한 없이 구매 가능합니다."
      ],
      english: [
        "Yes, you can buy up to 10 packs per person.",
        "No, there is no limit on cigarette purchases."
      ]
    }
  },
  {
    id: 20,
    audioUrl: "/audio/duty-free-20.mp3",
    text: "Do you have a membership program?",
    meaning: "멤버십 프로그램이 있나요?",
    answers: {
      korean: [
        "네, 가입하시면 추가 할인 혜택이 있습니다.",
        "죄송하지만, 멤버십 프로그램은 없습니다."
      ],
      english: [
        "Yes, you get extra discounts if you sign up.",
        "I'm sorry, but we don't have a membership program."
      ]
    }
  },
  {
    id: 21,
    audioUrl: "/audio/duty-free-21.mp3",
    text: "Can I pre-order duty-free items online?",
    meaning: "면세품을 온라인으로 미리 주문할 수 있나요?",
    answers: {
      korean: [
        "네, 온라인 주문 후 공항에서 픽업 가능합니다.",
        "죄송하지만, 온라인 주문은 불가능합니다."
      ],
      english: [
        "Yes, you can order online and pick up at the airport.",
        "I'm sorry, but we don't offer online pre-orders."
      ]
    }
  },
  {
    id: 22,
    audioUrl: "/audio/duty-free-22.mp3",
    text: "Where do I pick up my pre-ordered duty-free items?",
    meaning: "미리 주문한 면세품은 어디서 찾나요?",
    answers: {
      korean: [
        "출국장 내 픽업 데스크에서 찾을 수 있습니다.",
        "구매한 면세점에서 직접 수령해야 합니다."
      ],
      english: [
        "You can pick it up at the pickup desk in the departure area.",
        "You must collect it from the store where you purchased it."
      ]
    }
  },
  {
    id: 23,
    audioUrl: "/audio/duty-free-23.mp3",
    text: "Are cosmetics cheaper here than in my country?",
    meaning: "이곳의 화장품이 제 나라보다 저렴한가요?",
    answers: {
      korean: [
        "네, 면세 가격으로 더 저렴합니다.",
        "환율에 따라 다를 수 있습니다."
      ],
      english: [
        "Yes, they are cheaper at duty-free prices.",
        "It depends on the exchange rate."
      ]
    }
  },
  {
    id: 24,
    audioUrl: "/audio/duty-free-24.mp3",
    text: "Can I exchange an item if it's defective?",
    meaning: "제품이 불량이면 교환이 가능한가요?",
    answers: {
      korean: [
        "네, 영수증을 지참하면 교환 가능합니다.",
        "죄송하지만, 면세품 교환은 어렵습니다."
      ],
      english: [
        "Yes, you can exchange it with the receipt.",
        "I'm sorry, but duty-free items cannot be exchanged."
      ]
    }
  },
  {
    id: 25,
    audioUrl: "/audio/duty-free-25.mp3",
    text: "Do you offer free samples?",
    meaning: "무료 샘플을 제공하나요?",
    answers: {
      korean: [
        "네, 화장품 샘플을 드릴 수 있습니다.",
        "죄송하지만, 샘플 제공은 없습니다."
      ],
      english: [
        "Yes, we can give you cosmetic samples.",
        "I'm sorry, but we don't offer free samples."
      ]
    }
  },
  {
    id: 26,
    audioUrl: "/audio/duty-free-26.mp3",
    text: "Can I use a discount coupon here?",
    meaning: "할인 쿠폰을 사용할 수 있나요?",
    answers: {
      korean: [
        "네, 일부 제품에 적용 가능합니다.",
        "죄송하지만, 쿠폰 사용이 불가능합니다."
      ],
      english: [
        "Yes, it can be applied to selected items.",
        "I'm sorry, but coupons are not accepted."
      ]
    }
  },
  {
    id: 27,
    audioUrl: "/audio/duty-free-27.mp3",
    text: "Is this the final price?",
    meaning: "이 가격이 최종 가격인가요?",
    answers: {
      korean: [
        "네, 면세 가격으로 최저가입니다.",
        "조금 더 할인해 드릴 수 있습니다."
      ],
      english: [
        "Yes, this is the lowest duty-free price.",
        "I can give you a bit more discount."
      ]
    }
  },
  {
    id: 28,
    audioUrl: "/audio/duty-free-28.mp3",
    text: "Can I buy duty-free items on arrival?",
    meaning: "입국 시에도 면세품을 구매할 수 있나요?",
    answers: {
      korean: [
        "네, 입국 면세점이 따로 있습니다.",
        "아니요, 출국할 때만 구매할 수 있습니다."
      ],
      english: [
        "Yes, there is an arrival duty-free shop.",
        "No, duty-free purchases are only for departures."
      ]
    }
  },
  {
    id: 29,
    audioUrl: "/audio/duty-free-29.mp3",
    text: "Can I get free gift wrapping?",
    meaning: "무료 선물 포장이 가능한가요?",
    answers: {
      korean: [
        "네, 무료로 포장해 드립니다.",
        "죄송하지만, 선물 포장 서비스는 없습니다."
      ],
      english: [
        "Yes, we offer free gift wrapping.",
        "I'm sorry, but we don't provide gift wrapping."
      ]
    }
  },
  {
    id: 30,
    audioUrl: "/audio/duty-free-30.mp3",
    text: "Can I get a duty-free shopping bag?",
    meaning: "면세점 쇼핑백을 받을 수 있나요?",
    answers: {
      korean: [
        "네, 무료로 제공해 드립니다.",
        "죄송하지만, 쇼핑백은 별도로 구매하셔야 합니다."
      ],
      english: [
        "Yes, we provide it for free.",
        "I'm sorry, but you need to purchase a shopping bag separately."
      ]
    }
  }
];