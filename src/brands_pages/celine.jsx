import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_Celine1.png'
import image2 from '../images/Product/P_Celine2.png'


// 主應用組件
export const Celine = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    document.title = "Celine手袋 | 高價收購閒置Celine手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'The Luxe Vault專業收購閒置Celine手袋，提供高價即時估價，安全交易即日過數。了解Celine手袋回收價值，輕鬆將閒置奢侈品變現。'
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      'Celine手袋回收, Celine回收, 名牌手袋回收, 高價收購Celine, 香港Celine回收, 閒置Celine手袋出售'
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
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Celine</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">將閒置的 Celine 手袋轉售，實現奢華資產的高回報</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              Celine 手袋以其簡約而優雅的設計而聞名，成為時尚界無可替代的奢侈品。擁有一個 Celine 手袋 不僅是時尚的象徵，也是個人品味的體現。然而，隨著風格的變化，某些手袋可能會變得閒置。透過 The Luxe Vault，您可以輕鬆將這些閒置的 Celine 手袋 賣出，獲得現金回報，讓這些精美的設計在新主人手中繼續發光。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">二手市場對 Celine 手袋的需求持續上升</h3>
            <p className="text-sm leading-relaxed mb-8">
              伴隨著可持續時尚的興起，越來越多的消費者開始關注二手奢侈品的購買。在這個背景下，二手 Celine 手袋 的需求正在穩步增長。許多時尚愛好者都希望以合理的價格擁有這些優雅手袋。作為賣家，您可以充分利用這一市場趨勢，將自己的閒置手袋轉售，從中獲取可觀的回報，為環保做出一份貢獻。
            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">消費者購買時的研究十分重要</h3>
            <p className="text-sm leading-relaxed mb-8">
              在當今的奢侈品市場中，消費者在選擇像 Celine 這樣的高端品牌時，往往會進行徹底的市場調查。他們希望了解產品的獨特性、品牌歷史以及其他用戶的評價。提供詳細且透明的產品資訊是成功銷售的關鍵。透過 The Luxe Vault，您將能獲得最新的市場情報，幫助您做出明智的銷售決策，並提升手袋的銷售潛力。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">Celine 手袋的設計多樣性吸引不同消費者</h3>
            <p className="text-sm leading-relaxed mb-8">
              市場的需求顯示，消費者對各類型手袋的口味日益多樣化，尤其是對於 Celine 手袋。從經典款到新品，這些手袋不僅滿足了實用性需求，更展現了獨特的時尚風格。若您擁有各類型的閒置 Celine 手袋，那麼您將有更大的機會吸引潛在買家，並為這些奢華的手袋找到合適的新主人，以實現更高的銷售回報。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">專業鑑定，保障交易的公正性</h3>
            <p className="text-sm leading-relaxed mb-8">
              在 The Luxe Vault，我們理解每一個 Celine 手袋 都擁有其獨特的價值，因此我們提供專業的鑑定服務。我們的專業團隊將為您的手袋提供準確、公正的市場估價，並確保整個交易過程的透明與安全。這不僅能保障您的權益，還能讓每位賣家感到信任與安心，促進雙方的良好合作。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">立即開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed mb-8">
              如果您擁有閒置的 Celine 手袋，現在是您轉售的最佳時機。透過 The Luxe Vault，您可以輕鬆實現手袋的價值，獲得理想的現金回報。我們的專業團隊隨時準備為您提供支持與服務，助您順利完成銷售。立即聯繫我們，開啟您的 Celine 手袋 轉售之旅，讓奢華資產再次煥發光彩！
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

export default Celine;