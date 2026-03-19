import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_Goyard1.png'
import image2 from '../images/Product/P_Goyard2.png'


// 主應用組件
export const Goyard = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
      useEffect(() => {
      // 基礎 SEO 配置 - 替換為 Celine 專屬
      document.title = "Goyard手袋 | 高價收購閒置Goyard手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        'The Luxe Vault專業收購閒置Goyard手袋，提供高價即時估價，安全交易即日過數。了解Goyard手袋回收價值，輕鬆將閒置奢侈品變現。'
      );
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
        'Goyard手袋回收, Goyard回收, 名牌手袋回收, 高價收購Goyard, 香港Goyard回收, 閒置Goyard手袋出售'
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
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Goyard</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">將閒置的 Goyard 手袋轉售，實現奢華資產的高回報</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              作為奢侈品牌的代表，Goyard 手袋以其獨特的設計和卓越的工藝而聞名。擁有一個 Goyard 手袋 不僅是時尚的象徵，更是一種身份的象徵。然而，隨著時間的推移，一些手袋可能會變得閒置。透過 The Luxe Vault，您可以將這些閒置的 Goyard 手袋 賣出，不僅能夠獲得現金回報，還能讓這些奢華的設計在新主人手中繼續發光發熱。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">二手市場對 Goyard 手袋的興趣不斷上升</h3>
            <p className="text-sm leading-relaxed mb-8">
              隨著環保意識的提高和可持續消費的日益關注，消費者對 二手 Goyard 手袋 的需求獲得了驚人的增長。許多消費者希望以相對優惠的價格購買奢華品牌，這促使二手市場的繁榮發展。作為擁有者，您可以利用這一趨勢，從自己的閒置手袋中獲得可觀的回報。市場對 Goyard 的需求將有助於促進交易的順利進行。


            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">消費者在購買前的研究變得越來越重要</h3>
            <p className="text-sm leading-relaxed mb-8">
              當消費者考慮購買奢侈品時，尤其是 Goyard 這樣的高端品牌，他們會進行詳細的市場調查。他們渴望了解商品的獨特性、品牌的歷史以及其他買家的評價。這使得提供詳細且透明的產品信息變得至關重要。透過 The Luxe Vault，您可以輕鬆獲得最新的市場趨勢和產品資訊，幫助您做出明智的銷售決策，提高您的手袋銷售成功率。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">手袋設計的多樣性滿足消費者的需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              目前的市場顯示，消費者對各類型手袋的需求日益多樣化，尤其是對於 Goyard 手袋 這一品牌。其獨特的設計和款式讓它在奢侈品市場中獨樹一幟。因此，擁有各類型的 Goyard 手袋 的賣家，都能從中找到合適的買家。無論是經典款還是限量版，這些閒置的手袋都具備良好的市場價值，並能夠為賣家帶來可觀的回報。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">專業鑑定，保障交易的公正性</h3>
            <p className="text-sm leading-relaxed mb-8">
              在 The Luxe Vault，我們擁有一支專業的手袋鑑定團隊，致力於為每位賣家提供準確且公正的市場評估。我們了解 Goyard 手袋 的品牌價值與市場趨勢，因此提供透明的報價過程，讓每位賣家都能獲得公平待遇。在整個交易過程中，我們將提供專業支持，確保您的權益得到保障，讓您在交易中感到信任與安心。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">立即開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed mb-8">
              如果您擁有閒置的 Goyard 手袋，現在就是轉售的最佳時機。透過 The Luxe Vault，您可以輕鬆實現手袋的價值，獲得理想的回報。我們的專業團隊隨時準備為您提供支持，幫助您獲得最佳的銷售體驗。立即聯繫我們，開啟您的 Goyard 手袋 轉售之旅，讓奢華重新回到市場！
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

export default Goyard;