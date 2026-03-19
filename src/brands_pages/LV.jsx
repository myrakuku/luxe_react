import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_LV1.png'
import image2 from '../images/Product/P_LV2.png'


// 主應用組件
export const LouisVuitton = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    document.title = "Louis Vuitton手袋 | 高價收購閒置 Louis Vuitton 手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'The Luxe Vault專業收購閒置Louis Vuitton手袋，提供高價即時估價，安全交易即日過數。了解Louis Vuitton手袋回收價值，輕鬆將閒置奢侈品變現。'
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      'LouisVuitton手袋回收, LouisVuitton回收, 名牌手袋回收, 高價收購LouisVuitton, 香港LouisVuitton回收, 閒置LouisVuitton手袋出售'
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
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Louis Vuitton</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">轉售閒置的 Louis Vuitton 手袋，實現奢華資產的最大價值</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              在奢侈品市場上，消費需求持續增長，特別是在對名牌手袋高需求的地區，如香港，Louis Vuitton 手袋不僅是時尚的代表，更是身份的象徵。隨著搭配潮流的變化，您可能會發現某些手袋逐漸閒置。在這種情況下，通過 The Luxe Vault 將您的閒置 Louis Vuitton 手袋 轉售，不僅可以為您帶來額外的現金流，還能為欣賞奢華品味的新主人找到理想的手袋。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">增長的二手市場需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              隨著環保意識的提升和經濟考量的影響，消費者對二手奢侈品的興趣顯著增加，特別是 Louis Vuitton 的手袋。許多人選擇認購質量良好的 二手 Louis Vuitton 手袋，這不僅能夠節省開支，還能支持可持續和負責任的消費理念。隨著市場對於二手商品的需求增長，這為賣家提供了極佳的出售機會，特別是在活躍的市場氛圍中。
            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">消費者的買前研究</h3>
            <p className="text-sm leading-relaxed mb-8">
              在當前奢侈品市場中，消費者在購買之前通常會進行詳細的資訊查詢，特別是對於 Louis Vuitton 等大牌手袋。他們期望了解品牌的歷史、產品的特點及其市場價位。香港作為全球知名的奢侈品購物中心，消費者對這些手袋的需求旺盛。如果您希望出售的手袋得到高價，提供產品的詳細資訊能顯著提升其市場競爭力。透過 The Luxe Vault 的專業團隊，您可以輕鬆獲得最新的市場動向和品牌介紹，幫助您做出明智的決策。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">多樣化的產品和消費者需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              當前的市場環境顯示，消費者對手袋、袋子和手包等多種款式的需求日益多樣化。各種不同設計的 Louis Vuitton 手袋 可以滿足消費者的不同偏好與需求。您可以選擇出售的閒置手袋不僅能夠獲得公平的報價，還能幫助新顧客找到心儀的產品，共同促進市場的健康循環。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">專業鑑定，保障您的回收利益</h3>
            <p className="text-sm leading-relaxed mb-8">
              The Luxe Vault 擁有一支專業的手袋鑑定團隊，負責評估 Louis Vuitton 手袋的具體價值。我們了解品牌形象和市場定位的重要性，從而能夠提供準確的報價及透明的交易過程。我們重視每位客戶的信任，承諾所有的評估過程都毫無隱藏費用，讓您在交易中感受到安全和保障。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">現在就開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed mb-8">
              無論您希望釋放閒置的 Louis Vuitton 手袋，還是想在奢侈品市場中獲得理想的現金回報，The Luxe Vault 都是您值得信賴的選擇。立即聯繫我們，開始您的 Louis Vuitton 手袋 轉售之旅。讓我們幫助您實現奢華資產的最大化價值，並為您提供專業的服務和透明的流程！
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

export default LouisVuitton;