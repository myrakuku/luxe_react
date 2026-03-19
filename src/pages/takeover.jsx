import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import Image1 from '../images/T&A/1.png'
import Image2 from '../images/T&A/2.png'
import Image3 from '../images/T&A/3.png'

import Hermes1 from '../images/Whatsapp/Hermes1.jpeg'
import Hermes2 from '../images/Whatsapp/Hermes2.jpeg'
import Hermes3 from '../images/Whatsapp/Hermes3.jpeg'
import Chanel from '../images/Whatsapp/Chanel.jpeg'
import Dior from '../images/Whatsapp/Dior.jpeg'



// 主應用組件
export const Takeover = () => {

  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    document.title = "收購及鑑定｜專業名牌手袋鑑定｜高價收購｜The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      "The Luxe Vault 擁有資深名牌手袋鑑定團隊，精準鑑定Hermes、Chanel、Dior等奢侈品真偽，高價收購無需等待，專業透明的收購流程讓您安心交易。"
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      "收購及鑑定, 名牌手袋鑑定, 奢侈品鑑定, 真偽鑑定, 高價收購手袋, 專業鑑定團隊, 香港手袋收購"
  );
  }, []);

  // 品牌數據配置（可替換為真實圖片鏈接和路由）
  const brandList = [
    { name: 'Hermes', imgUrl: Hermes1, link: '/brands/hermes' },
    { name: 'Hermes', imgUrl: Hermes2, link: '/brands/hermes' },
    { name: 'Hermes', imgUrl: Hermes3, link: '/brands/hermes' },
    { name: 'Chanel', imgUrl: Chanel, link: '/brands/chanel' },
    { name: 'Dior', imgUrl: Dior, link: '/brands/dior' }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="min-h-screen bg-white px-6 md:px-12 py-12 max-w-5xl mx-auto font-sans text-text-primary">
      {/* 頁面大標題 */}
      <div className="mb-12  font-playfair opacity-30">
        <h1 className="text-4xl md:text-5xl font-light">
          Takeover <span className="\">&</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-light mt-2">Authentication</h2>
      </div>

      {/* 第一段介紹 */}
      <p className="text-sm md:text-base leading-relaxed mb-16 max-w-3xl">
        在 The Luxe Vault，我們提供便捷的名牌手袋回收服務，讓您輕鬆將閒置的奢侈品轉換為現金。無論是 Chanel、Hermes、Dior、Celine、Fendi、Goyard、Prada、Gucci 等知名品牌，我們都歡迎您的放售。透過即時估價和靈活的收藏方式，我們特別適合忙碌的您，無需擔心繁瑣的過程，我們會全程協助您快速、安全地完成交易。
      </p>

      {/* 內容區塊 1 */}
      <div className="flex flex-col md:flex-row items-start mb-16 gap-8">
        <div className="w-full md:w-1/2">
          <img 
            src={Image1}
            alt="Celine 手袋" 
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-light mb-4">即時報價 快速變現手袋價值</h3>
          <p className="text-sm md:text-base leading-relaxed">
            我們的專業團隊根據市場行情，即時為您提供合理的報價。無論您手中的手袋是 Gucci、Hermes 或其他名牌，我們都會為您提供競爭力的報價。客戶只需通過 WhatsApp 提供手袋照片，我們盡快回覆您的報價。經確認後，最快可於當天完成交易並入帳，讓您輕鬆將奢華的價值變現。整個估價流程透明無隱藏費用，確保每位客戶的權益。
          </p>
        </div>
      </div>

      {/* 內容區塊 2 */}
      <div className="flex flex-col md:flex-row items-start mb-16 gap-8">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-light mb-4">安全地點｜靈活配合您的時間</h3>
          <p className="text-sm md:text-base leading-relaxed">
            我們的回收服務提供靈活的地點安排，讓您選擇最安全、最方便的場所進行交易。我們可以在您指定的咖啡店或任何您感到舒適的地點進行手袋的估價和交付，這樣一來，您就能在輕鬆的環境中完成交易。我們的專業鑑定師將提供一對一的服務，從報價到交易的每一步都會清楚解釋，讓您感到安心。此外，我們會根據您的需求進行安排，確保交易過程簡便無壓力，讓您放鬆地享受出售手袋的體驗。
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img 
            src={Image2}
            alt="Chanel 手袋" 
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
      </div>

      {/* 內容區塊 3 */}
      <div className="flex flex-col md:flex-row items-start mb-16 gap-8">
        <div className="w-full md:w-1/2">
          <img 
            src={Image3}
            alt="Dior 手袋" 
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-light mb-4">安全交易｜即日過數</h3>
          <p className="text-sm md:text-base leading-relaxed">
            我們致力於為客戶提供專業、透明且高效的交易體驗。無論是出售閒置的名牌手袋，還是了解市場行情，我們都可幫助您快速變現，靈活資金周轉。我們對名牌手袋有深入研究，能夠提供精確的估價，並高價回收各類產品，包括流行的入門款和稀有款式。
          </p>
        </div>
      </div>

      {/* 最後區塊 */}
      <div className="border-t border-gray-100 pt-8 mb-12">
        <h3 className="text-2xl md:text-3xl font-light mb-4">廣泛回收名牌手袋</h3>
        <p className="text-sm md:text-base leading-relaxed">
          不僅限於頂級奢侈品牌，我們的回收服務同樣涵蓋中價及平價名牌手袋。我們收到的手袋會通過市場排名篩選，適合所有希望升級手袋的朋友。從便宜入門款到知名的奢侈名牌，我們為您提供免費的專業行情估價服務，幫助您掌握名牌手袋的回收價。立即聯繫我們，開始無憂的手袋回收之旅！
        </p>
      </div>
    </div>
    </div>
  );
}

export default Takeover;