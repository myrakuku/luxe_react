import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_Fendi1.png'
import image2 from '../images/Product/P_Fendi2.png'


// 主應用組件
export const Fendi = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
      useEffect(() => {
      // 基礎 SEO 配置 - 替換為 Celine 專屬
      document.title = "Fendi手袋 | 高價收購閒置Fendi手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        'The Luxe Vault專業收購閒置Fendi手袋，提供高價即時估價，安全交易即日過數。了解Fendi手袋回收價值，輕鬆將閒置奢侈品變現。'
      );
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
        'Fendi手袋回收, Fendi回收, 名牌手袋回收, 高價收購Fendi, 香港Fendi回收, 閒置Fendi手袋出售'
      );
    }, []);

  return (
    <div className="bg-white mx-auto">
      <Navbar />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* 左側：文字內容區（可滾動） */}
        <div className="w-full md:w-2/3 px-6 md:px-12 py-12 overflow-y-auto">
          <div className="max-w-xl">
            {/* 頁面標題 */}
            <h2 className="text-3xl md:text-4xl font-light mb-2 text-center md:text-left font-playfair">What Brand?</h2>
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Fendi</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">將閒置的 Fendi 手袋轉售，實現奢華資產的高回報</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              在奢侈品牌中，Fendi 手袋以其創新的設計和卓越的質量著稱，成為了時尚界的經典之一。擁有一個 Fendi 手袋 不僅彰顯個人品味，更是一項重要的投資。然而，隨著風格的變化，某些手袋可能會逐漸閒置。透過 The Luxe Vault，您可以輕鬆將這些閒置的 Fendi 手袋 賣出，不僅能獲得現金回報，還能讓這些奢華的設計在新主人手中繼續閃耀。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">二手市場對 Fendi 手袋的需求持續上升</h3>
            <p className="text-sm leading-relaxed mb-8">
              隨著環保意識抬頭和消費觀念的改變，越來越多的消費者開始重視二手奢侈品的購買。尤其是 二手 Fendi 手袋，因為其獨特的設計和品牌價值，受到了時尚愛好者的青睞。這一趨勢使得二手市場變得更加繁榮。作為賣家，您可以利用這一機會，將自己的閒置手袋轉售，獲得可觀的回報，並為市場的可持續發展貢獻一份力量。
            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">消費者在購買奢侈品時的研究不可忽視</h3>
            <p className="text-sm leading-relaxed mb-8">
              當今的消費者在選擇像 Fendi 這樣的高端品牌時，通常會進行仔細的市場調查。他們希望了解品牌的歷史、手袋的設計特點及其在市場上的表現。為此，提供清晰而詳細的產品資訊將大大增加您手袋的吸引力。透過 The Luxe Vault，您將能獲得豐富的市場資訊，幫助您做出明智的銷售決策，增加轉售成功的機會。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">Fendi 手袋的設計多樣性滿足各類需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              市場顯示，消費者對各類手袋的需求日益多樣化，尤其是 Fendi 手袋。這個品牌以其獨特的設計風格和創新理念而著稱，從經典款到限量版，都有其特定的市場需求。擁有各種款式的閒置 Fendi 手袋 能夠吸引不同的消費者，讓您找到合適的買家，從而實現最佳的銷售回報。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">專業鑑定，保障交易的公正性</h3>
            <p className="text-sm leading-relaxed mb-8">
              在 The Luxe Vault，我們擁有專業的鑑定團隊，致力於為每位賣家提供準確且公正的市場評估。我們理解 Fendi 手袋 的品牌價值，並根據市場狀況進行價格評估。我們的透明報價流程確保每位客戶獲得公平的對待，並保證交易的安全性，讓您在整個過程中感到放心和安心。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">立即開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed mb-8">
              如果您擁有閒置的 Fendi 手袋，現在就是轉售的最佳時機。透過 The Luxe Vault，您可以輕鬆實現手袋的價值，獲得理想的現金回報。我們的專業團隊隨時準備為您提供支持，幫助您獲得最佳的銷售體驗。立即聯繫我們，開啟您的 Fendi 手袋 轉售之旅，讓您的奢華資產再度煥發光彩！
            </p>
          </div>

            {/* how to sell */}
            <div className='mt-5 flex justify-center md:justify-start' >
              <a href='/howtosell'
            className='bg-nav-bg rounded-md py-1 px-5' >如何出售？</a>
            </div>
        </div>

        {/* 右側：固定圖片區（不隨滾動移動） */}
        <div className="flex justify-center mx-auto w-1/2  md:block md:w-1/3 overflow-hidden mb-20">
          <div className="h-full flex flex-col-4 md:flex-col">
            <div className="h-1/3 md:h-1/2">
              <img
                src={image1}
                alt="Prada 手袋展示 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/3 md:h-1/2 border-t border-white">
              <img
                src={image2}
                alt="Prada 手袋展示 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fendi;