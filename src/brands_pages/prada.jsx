import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_Prada1.png'
import image2 from '../images/Product/P_Prada2.png'


// 主應用組件
export const Prada = () => {

  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置
    document.title = "Prada手袋 | 高價收購閒置Prada手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'The Luxe Vault專業收購閒置Prada手袋，提供高價即時估價，安全交易即日過數。了解Prada手袋回收價值，輕鬆將閒置奢侈品變現。'
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      'Prada手袋回收, Prada回收, 名牌手袋回收, 高價收購Prada, 香港Prada回收, 閒置Prada手袋出售'
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
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Prada</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">購售閒置的 Prada 手袋，實現奢華資產的最大價值</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              當前，消費需求在奢侈品市場中愈發旺盛，尤其是在香港等地，名牌手袋如 Prada 的熱度持續上升。擁有一個 Prada 手袋不僅是時尚的象徵，更是提升個人形象和地位的利器。然而，隨著款式的更新換代，一些手袋可能會逐漸被閒置。在這樣的情況下，通過 The Luxe Vault 將您的閒置 Prada 手袋轉售，為您帶來更多的現金回報，並讓這些奢華手袋在新的主人手中繼續閃耀。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">了解 Prada 品牌的珍貴性</h3>
            <p className="text-sm leading-relaxed mb-8">
              Prada 作為意大利奢侈品牌的佼佼者，一直以其精湛的手工藝和創新設計而聞名。其手袋不僅在時尚界擁有無可比擬的地位，還在二手市場中具有極高的保值潛力。根據市場趨勢，許多經典款式的 Prada 手袋在二手交易中仍能保持高價，甚至出現增值現象。因此，將閒置手袋出售，您將能獲得相應的回報，同時減少浪費，支持可持續的時尚消費理念。
            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">消費者對二手手袋的興趣增加</h3>
            <p className="text-sm leading-relaxed mb-8">
              隨著環保意識增強以及價格考量，消費者對二手奢侈品的需求明顯上升。越來越多的消費者選擇尋找質量上乘的二手 Prada 手袋，因為這不僅能節省開支，還能支持可持續時尚的趨勢。市場上對於二手商品的興趣愈發高漲，這顯示了經典和限量版手袋在二手市場中仍具吸引力。這正是您出售閒置的 Prada 設計手袋的最佳時機，以利用日益增長的市場需求。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">市場趨勢的持續變化</h3>
            <p className="text-sm leading-relaxed mb-8">
              在奢侈品行業，消費者喜愛在購買前進行詳盡的資訊查詢，以確保做出明智的選擇。因此，了解每個品牌的手袋特點和價位成為了消費者的一項重要任務。香港作為全球知名的奢侈品購物市場，消費者對奢侈品品牌手袋的需求非常旺盛，這使得 Prada 手袋的回收價值持續上升。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">多樣化的產品需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              消費者對各類奢侈手袋、袋子以及手包等產品類型的需求，體現出市場的多樣化特徵。無論是經典的 Prada 手袋還是當前流行的款式，各種設計都滿足了不同消費者的需求。選擇出售您的閒置手袋，不僅能獲得合理的報價，還能幫助新擁有者找到心儀的產品，這樣的互動促進了整個市場的健康發展。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">信任與專業的回收服務</h3>
            <p className="text-sm leading-relaxed mb-8">
              在 The Luxe Vault，我們明白品牌形象與產品定位的重要性。我們的專業團隊擁有豐富的名牌手袋鑑定知識，能夠準確評估您的 Prada 手袋的市場價值，並提供公正透明的報價。我們重視每位客戶的信任，承諾不收取隱藏費用，讓您在交易過程中感受到安全和保障。這樣的專業服務將幫助您實現手袋的最佳價值，讓您毫無保留地享受回收的樂趣。
            </p>

            {/* 第七段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">現在就開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed">
              無論您希望釋放閒置的手袋，還是想在奢侈品市場中獲得現金回報，The Luxe Vault 都是您值得信賴的選擇。立即聯繫我們，開始您轉售 Prada 手袋的旅程，實現奢華資產的最大化價值。我們的專業團隊期待為您提供高效、友善的服務，協助您在不斷變化的市場中，找到最合適的交易方案！
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

export default Prada;