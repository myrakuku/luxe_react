import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Product/P_Hermes1.png'
import image2 from '../images/Product/P_Hermes2.png'


// 主應用組件
export const Hermes = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
  // 基礎 SEO 配置 - 替換為 Celine 專屬
  document.title = "Hermes手袋 | 高價收購閒置Hermes手袋 專業二手名牌收購 放售或購買名牌手袋 | The Luxe Vault";
  document.querySelector('meta[name="description"]')?.setAttribute('content', 
    'The Luxe Vault專業收購閒置Hermes手袋，提供高價即時估價，安全交易即日過數。了解Hermes手袋回收價值，輕鬆將閒置奢侈品變現。'
  );
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
    'Hermes手袋回收, Hermes回收, 名牌手袋回收, 高價收購Hermes, 香港Hermes回收, 閒置Hermes手袋出售'
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
            <p className="text-sm text-center md:text-left mb-10 text-gray-500">Hermes</p>
            <h1 className="text-base font-medium mb-6 text-center md:text-left">將閒置的 Hermes 手袋轉售，實現奢華資產的高回報</h1>

            {/* 第一段 */}
            <p className="text-sm leading-relaxed mb-8">
              在奢侈品市場上，消費需求持續增長，尤其是在關注名牌手袋的消費者中。Hermes 手袋因其卓越的工藝和獨特的品牌形象而倍受青睞。擁有一個 Hermes 手袋不僅是時尚的象徵，也是投資的明智選擇。然而，隨著款式和需求的變化，您可能會發現某些手袋開始閒置。在這樣的情況下，透過 The Luxe Vault 將您的閒置 Hermes 手袋 轉售，不僅能夠為您增添現金流，還能讓這些奢華手袋在新的主人手中繼續發揮其獨特的魅力。
            </p>

            {/* 第二段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">二手市場對 Hermes 手袋的興趣持續上升</h3>
            <p className="text-sm leading-relaxed mb-8">
              隨著環保意識的提升和經濟考量，消費者對二手奢侈品的需求急劇增加，特別是 Hermes 等高端品牌的手袋。許多消費者尋求質量優良的 二手 Hermes 手袋，因為這不僅讓他們可以省下開支，還能支持可持續時尚的理念。這種二手商品的潛在價值體現了市場對於 *Hermes 手袋的重視，尤其是在香港等奢侈品購物熱點，為賣家提供了極佳的機會。
            </p>

            {/* 第三段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">市場趨勢反映消費者偏好</h3>
            <p className="text-sm leading-relaxed mb-8">
              在奢侈品市場中，消費者日益喜愛進行深入的資訊查詢，以充分了解 Hermes 品牌及其手袋的特性。香港作為重要的奢侈品購物市場所表現出的旺盛需求，使得該市場對 Hermes 手袋 的回收至關重要。如今的消費者更希望在購買之前獲取全面的信息，從而做出明智的選擇。透過 The Luxe Vault，您可以輕鬆查詢到有關各個品牌手袋的最新動態及市場評估，幫助您制定最佳的轉售策略。
            </p>

            {/* 第四段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">消費者對手袋類型的多樣需求</h3>
            <p className="text-sm leading-relaxed mb-8">
              在當前的市場環境中，消費者對手袋、袋子和手包等各類產品的需求顯示出市場的多樣性。不同款式、顏色和設計的 Hermes 手袋 可以滿足不同消費者的偏好。隨著市場的進一步細分，選擇出售您的閒置手袋，將能使其獲得合適的報價，並為新的擁有者帶來價值，實現資源的有效利用，這將對整個市場的健康發展起到積極作用。
            </p>

            {/* 第五段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">專業鑑定，保障您的回收利益</h3>
            <p className="text-sm leading-relaxed mb-8">
              在 The Luxe Vault，我們的專業團隊對奢侈品手袋的鑑定具有豐富經驗。我們理解品牌形象和市場定位的重要性，因此對 Hermes 手袋的評估相當嚴謹，能夠為您提供準確的市場報價和透明的交易過程。無論您擁有的是經典款還是限量版手袋，我們都致力於保障每位客戶的權益，讓您在交易中感受到安全和信任。
            </p>

            {/* 第六段標題 + 內容 */}
            <h3 className="text-sm font-medium mb-3 text-center md:text-left">現在就開始您的手袋回收旅程</h3>
            <p className="text-sm leading-relaxed mb-8">
              無論您希望釋放閒置的 Hermes 手袋，還是想要在奢侈品市場中獲得可觀的現金回報，The Luxe Vault 都是您值得信賴的選擇。立即聯繫我們，開啟您的 Hermes 手袋 轉售之旅。讓我們協助您實現奢華資產的增值，並以專業的服務和透明的流程為您提供最佳的回收體驗！
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

export default Hermes;