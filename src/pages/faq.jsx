import React, { useState, useEffect } from 'react';
import Navbar from '../components/Nav'



// 主應用組件
export const FAQ = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    document.title = "FAQ | 常見問題｜名牌手袋回收估價服務｜The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'The Luxe Vault 名牌手袋回收常見問題，包括估價、上門收袋、付款方式、驗證流程、個人資料保障等一站式解答。'
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      'FAQ, 常見問題, 手袋回收, 名牌估價, 上門收袋, 即日付款, 奢侈品回收, The Luxe Vault'
    );
  }, []);
  
  const faqList = [
    {
      question: '估價是否需要到店？',
      answer: '不需要！您可以直接通過WhatsApp發送手袋的照片及相關資料，我們的專業鑑定師將即時為您進行估價，無需出門即可完成。'
    },
    {
      question: '估價需要提供哪些資料？',
      answer: '建議提供以下資料：手袋的正面、側面、內襯及序號的照片、品牌、型號、購買年份及使用狀況。如有購買單據、塵袋或包裝，將有助於提供更準確的估價。'
    },
    {
      question: '幾時可以收到估價？',
      answer: '我們將在一天內盡快回覆您，繁忙時段時也會儘快處理。'
    },
    {
      question: '手袋有污漬、退色或刮痕的情況下，是否可以回收？',
      answer: '歡迎您先行WhatsApp發送圖片以便了解具體情況。'
    },
    {
      question: '如果報價我不接受，是否會產生費用？',
      answer: '我們提供的估價服務完全免費，無任何手續費，只有在您接受報價後才會進一步安排交易。'
    },
    {
      question: '是否提供上門收袋服務？',
      answer: '是的，在指定地區我們可安排免費專人上門收袋，保證安全、方便及一對一的跟進服務。'
    },
    {
      question: '上門收袋的過程會如何進行？',
      answer: '鑑定師會在現場檢查手袋的真偽、使用狀況及附件等，確認無誤後會即時完成交易及付款。'
    },
    {
      question: '上門收袋的過程會不會令我感到尷尬？',
      answer: '不會！我們提供低調、安全且保密的服務，全程一對一，整個過程將會非常迅速而簡潔。'
    },
    {
      question: '如何付款？是否會即日到賬？',
      answer: '是的，我們提供即日付款服務，即時完成交易。'
    },
    {
      question: '手袋是否一定需要有購買單據或塵袋才能回收？',
      answer: '並非一定。雖然有購買單據會更好，但即使沒有，我們仍可回收，您只需發送WhatsApp查詢即可。'
    },
    {
      question: '如果我無法親自交付，是否可以委託他人代為交付？',
      answer: '可以！您可以委託家人或朋友代為交付，但需提前通知我們並提供相關聯絡信息。'
    },
    {
      question: '是否接受所有品牌的手袋？',
      answer: '我們專注於名牌手袋，通常接受主流及高端品牌的手袋，具體情況請通過WhatsApp查詢。'
    },
    {
      question: '如何保障我的個人資料安全？',
      answer: '我們非常重視客戶的隱私與資料安全，所有資料將被保密處理，絕不會洩露，以確保交易過程的安全可靠。'
    },
    {
      question: '我需要支付任何附加費用嗎？',
      answer: '不需要！我們提供的估價及上門收袋服務均無隱藏費用，以確保服務透明。'
    },
    {
      question: '如果我的手袋未能通過驗證，將會怎樣？',
      answer: '如驗證未通過，我們會向您解釋原因，您可以選擇自行保留手袋。'
    },
    {
      question: '如何聯繫您的客戶服務團隊？',
      answer: '您可以通過WhatsApp直接聯繫我們，我們將會迅速回覆您的查詢。'
    }
  ];

  // 控制展開/收起狀態
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="min-h-screen bg-white px-6 md:px-12 py-12 mb-12 max-w-4xl mx-auto font-sans text-text-primary">
      {/* 頁面標題區 */}
      <div className="mb-12">
        <h1 className="text-6xl font-playfair md:text-7xl font-light text-gray-200 mb-2">FAQ</h1>
        <p className="text-base font-regular">常見問題</p>
      </div>

      {/* FAQ 列表（手風琴展開/收起） */}
      <div className="space-y-8">
        {faqList.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-6">
            {/* 問題（點擊展開/收起） */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <h2 className="text-2xl md:text-3xl font-light">{item.question}</h2>
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {/* 答案（展開時顯示） */}
            {openIndex === index && (
              <p className="text-sm md:text-base leading-relaxed mt-4">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FAQ;