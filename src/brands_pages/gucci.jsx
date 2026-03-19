import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_Gucci1.png'
import image2 from '../images/Product/P_Gucci2.png'


// 主應用組件
export const Gucci = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
      useEffect(() => {
      // 基礎 SEO 配置 - 替換為 Celine 專屬
      document.title = "Gucci手袋 | 高價收購閒置Gucci手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        'The Luxe Vault專業收購閒置Gucci手袋，提供高價即時估價，安全交易即日過數。了解Gucci手袋回收價值，輕鬆將閒置奢侈品變現。'
      );
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
        'Gucci手袋回收, Gucci回收, 名牌手袋回收, 高價收購Gucci, 香港Gucci回收, 閒置Gucci手袋出售'
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
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Gucci</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">將閒置的 Gucci 手袋轉售，實現奢華資產的高回報</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              隨著奢侈品市場的持續增長，消費需求對名牌手袋的熱烈關注也愈加明顯。特別是在東京、香港等時尚城市，Gucci 手袋作為奢華和個性化的代名詞，讓擁有者倍感驕傲。然而，手袋的趨勢隨時可能改變，伴隨著消費者的需求，您或許會發現某些閒置的 Gucci 手袋 需要重新評估。透過 The Luxe Vault，將您的閒置手袋出售，不僅能獲得額外的現金，還能讓這些奢華品在新主人手中繼續閃耀。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">二手市場對 Gucci 手袋的興趣不斷上升</h3>
            <p className="text-sm leading-relaxed mb-8">
              隨著環保意識的加強以及經濟因素的考量，越來越多的消費者對於 二手 Gucci 手袋 的需求開始上升。這不僅是因為能夠享受價格優惠，也因為可持續消費的理念受到重視。Gucci 的手袋因其高品質和耐用性而備受青睞，使得二手市場對這些商品的興趣持續增長。如今的賣家可以抓住這一機遇，將自己的高品質 Gucci 手袋 轉手給需求不斷攀升的消費者群體。
            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">消費者更加重視購買前的研究</h3>
            <p className="text-sm leading-relaxed mb-8">
              現在的消費者在購買奢侈品時往往會進行詳盡的市場調查和資訊查詢，特別是在選擇像 Gucci 這樣的知名品牌時。他們想要了解品牌的歷史、設計理念及手袋的獨特之處。香港作為重要的奢侈品市場，消費者對 Gucci 手袋 的需求量大，因此提供詳細的產品資訊將有助於提高您的手袋在市場中的吸引力。透過 The Luxe Vault，您可以輕鬆獲取關於市場動向的最新資訊，幫助您做出明智的交易決策。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">多樣化的產品選擇與消費者需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              在當前市場環境下，消費者對各類手袋、袋子及手包的需求逐漸多樣化。不同設計的 Gucci 手袋 能夠滿足不同消費者的需求與個性化選擇。將閒置的 Gucci 手袋 轉售，有可能為您帶來意想不到的報價，爾後這些產品也能讓新的擁有者找到心儀之物，促進市場的健康流通。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">專業回收保障您的權益</h3>
            <p className="text-sm leading-relaxed mb-8">
              The Luxe Vault 以專業的團隊著稱，對 Gucci 手袋進行精確的市場評估。我們充分理解品牌形象和消費者對品質的重視，因此提供透明的報價過程，伴隨全程的客戶支持。每一位客戶都將獲得公平的評估，無需擔心隱藏費用，讓您在交易中獲得安全感和信任。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">現在就開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed mb-8">
              無論您計劃釋放閒置的 Gucci 手袋，還是在奢侈品市場中獲得理想的現金回報，The Luxe Vault 都是您值得信賴的選擇。立即聯繫我們，開始您的 Gucci 手袋 轉售之旅。讓我們幫助您實現奢華資產的最大價值，並為您提供專業、友好的服務與交易體驗！
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

export default Gucci;