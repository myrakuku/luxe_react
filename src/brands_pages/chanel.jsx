import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_Chanel1.png'
import image2 from '../images/Product/P_Chanel2.png'


// 主應用組件
export const Chanel = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
      useEffect(() => {
      // 基礎 SEO 配置 - 替換為 Celine 專屬
      document.title = "Chanel手袋 | 高價收購閒置Chanel手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        'The Luxe Vault專業收購閒置Chanel手袋，提供高價即時估價，安全交易即日過數。了解Chanel手袋回收價值，輕鬆將閒置奢侈品變現。'
      );
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
        'Chanel手袋回收, Chanel回收, 名牌手袋回收, 高價收購Chanel, 香港Chanel回收, 閒置Chanel手袋出售'
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
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Chanel</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">將閒置的 Chanel 手袋轉售，實現奢華資產的高回報</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              在奢侈品市場中，Chanel 手袋因其獨特的設計和卓越的品質而受到廣泛追捧。作為奢華品牌的代表，Chanel 手袋不僅是時尚風格的象徵，更是一項重要的投資。隨著時尚潮流的變化，您可能會發現一些手袋逐漸閒置。透過 The Luxe Vault，您可以輕鬆將這些閒置的 Chanel 手袋 賣出，不僅能獲得現金回報，還能讓這些美麗的作品在新主人手中繼續發光發熱。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">二手市場對 Chanel 手袋的興趣不斷上升</h3>
            <p className="text-sm leading-relaxed mb-8">
              隨著可持續時尚的日益關注和高端二手市場的蓬勃發展，消費者對 二手 Chanel 手袋 的興趣與日俱增。許多時尚愛好者都希望以相對較低的價格擁有這些豪華手袋，這使得二手市場的需求穩步增長。如今的消費者不僅重視商品的品質，更關心品牌的故事和價值。這為賣家提供了絕佳的機會，讓您能夠從自己的閒置手袋中獲得可觀的回報。
            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">購買前研究成為消費者的新常態</h3>
            <p className="text-sm leading-relaxed mb-8">
              在購買奢侈品時，消費者通常會進行深入的市場調查，對於 Chanel 這樣的品牌尤為如此。他們渴望了解產品的獨特性、設計理念及其他消費者的評價。這使得提供詳盡的產品資訊變得至關重要，尤其是在競爭激烈的奢侈品市場中。透過 The Luxe Vault 的平台，您將能夠接觸到更多關於市場趨勢和需求的寶貴資訊，幫助您做出明智的銷售決策。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">手袋款式的多樣性迎合消費者需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              當前市場顯示，消費者對各類型手袋的需求呈現出多樣化的趨勢。隨著 Chanel 手袋 設計的多元化，從經典的 2.55 到最新的限量款式，都能滿足不同消費者的個性需求。從而，使得閒置的 Chanel 手袋 具有更高的市場價值，您可以藉此機會尋找合適的買家，不僅是釋放閒置資產的好方法，也是提振市場活力的良好機會。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">專業鑑定，保障交易的公正性</h3>
            <p className="text-sm leading-relaxed mb-8">
              在 The Luxe Vault，我們理解奢侈品牌的重要性，因此我們的專業團隊提供準確且公正的手袋鑑定服務。我們確保所有 Chanel 手袋 的估價都建立在市場環境和商品狀況的基礎上，並全程保持透明。這樣的服務不僅保障了您的權益，也使得每位賣家在交易過程中感到信任與安心。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">立即開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed mb-8">
              如果您有閒置的 Chanel 手袋，不妨考慮通過 The Luxe Vault 開始您的轉售之旅。我們將協助您獲得理想的回報，讓您的奢華資產得以充分利用。隨時聯繫我們，以獲取更多資訊和專業支持，實現您手袋的真正價值！
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

export default Chanel;