import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import banner from '../../src/images/Luxe_mainbanner.png';
import Hermes1 from '../images/Whatsapp/Hermes1.jpeg'
import Hermes2 from '../images/Whatsapp/Hermes2.jpeg'
import Hermes3 from '../images/Whatsapp/Hermes3.jpeg'
import Chanel from '../images/Whatsapp/Chanel.jpeg'
import Dior from '../images/Whatsapp/Dior.jpeg'


// 通用區塊組件
const Section = ({ title, children }) => (
  <div className="max-w-3xl mx-auto py-10 px-6 md:px-0">
    <h2 className="text-xl font-playfair font-bold text-text-primary mb-6 text-center">
      {title}
    </h2>
    <div className="text-text-primary leading-relaxed text-center font-extralight">
      {children}
    </div>
  </div>
);

// 服務項組件
const ServiceItem = ({ icon, text }) => (
  <div className="flex flex-col items-center mb-6">
    <div className="text-2xl mb-2 text-text-primary">{icon}</div>
    <p className="text-lg text-text-primary text-center italic">{text}</p>
  </div>
);

// 主應用組件
export const Home = () => {

  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    document.title = "The Luxe Vault | 香港名牌手袋回收專家 | 高價收購二手奢侈品手袋";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'The Luxe Vault專注香港名牌手袋回收，提供Hermes、Chanel、Dior、Gucci等奢侈品高價即時估價，安全交易即日過數，靈活配合交易地點，輕鬆將閒置手袋變現。'
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      '香港名牌手袋回收, 二手奢侈品回收, Hermes回收, Chanel回收, Dior回收, Gucci回收, 高價收購手袋, 即日過數'
    );
  }, []);

  // 品牌數據配置（可替換為真實圖片鏈接和路由）
  const brandList = [
    { name: '收購 Hermes', imgUrl: Hermes1, link: '/brands/hermes' },
    // { name: 'Hermes', imgUrl: Hermes2, link: '/brands/hermes' },
    // { name: 'Hermes', imgUrl: Hermes3, link: '/brands/hermes' },
    { name: '收購 Chanel', imgUrl: Chanel, link: '/brands/chanel' },
    { name: '收購 Dior', imgUrl: Dior, link: '/brands/dior' }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
            <main className="">
              <img src={banner} width={1200} height={600} layout="responsive" className="w-full h-auto" alt="" />
            </main>
        </div>
      </div>

      {/* 發現奢華的價值 */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-playfair text-gray-400 opacity-50">
          Discover the value of luxury
        </h2>
        <h3 className="text-xl md:text-2xl text-text-primary tracking-[10px] my-4">
          發現奢華的價值
        </h3>
        <p className="text-text-primary font-medium italic max-w-2xl mx-auto mt-10">
          "專業收購閒置名牌手袋，讓每一件珍品重新誕生"
        </p>
      </div>

      {/* 關於 The Luxe Vault */}
      <Section title="關於 The Luxe Vault">
        <p className="mb-4">
          在香港，我們致力於成為您閒置奢華手袋和背袋交易的最佳夥伴。我們深知，奢侈品不僅承載著美學和設計，更是每位顧客獨特性和品味的體現。當您手中有不再使用的二手名牌手袋時，我們希望您能看到其背後的潛在價值。
        </p>
        <p className="mb-4">
          在這裡，我們為您提供一個安全、透明且便捷的名牌手袋回收平台，幫助您將閒置的奢侈品透過高價回收，輕鬆快速套現。我們的專業團隊擁有豐富的奢侈品鑑定經驗，緊貼香港二手名牌市場行情，能精準評估您的商品，確保為您提供最公正、最具競爭力的回收報價。
        </p>
        <p>
          選擇 The Luxe Vault，讓您的閒置珍藏發揮最大價值。我們的名牌回收流程簡便高效，無論您是首次放售還是經驗豐富的賣家，我們都將為您提供一站式的貼心支援。立即將您不再使用的名牌手袋交給我們，輕鬆轉換為豐厚的現金回報！
        </p>
      </Section>

      {/* 我們的服務 */}
      <Section title="我們的服務">
        <div className="grid grid-cols-1 gap-6">
          <ServiceItem
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
            text="專業團隊鑑定，真偽保障。"
          />
          <ServiceItem
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
            text="公正的估價，確保您獲得合理的回報。"
          />
          <ServiceItem
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            text="安心售出您的心儀商品"
          />
        </div>
      </Section>

      {/* 公司理念 */}
      <Section title="公司理念">
        <p className="mb-4">
          我們的使命是透過精確、高效和透明的回收流程。每一件放售的奢侈品都代表著它背後的故事與價值，我們希望將這些故事傳遞給新的擁有者，讓它們繼續閃耀光芒。The Luxe Vault 致力於創建一個信任的交易環境，塑造良好的二手奢侈品市場，讓每位顧客都能感受到我們對品質和服務的承諾。
        </p>
        <p>
          我們執著於專業的鑑定流程，確保每一件商品的真實性和品質，並提供公平合理的估價。我們相信只有在誠信提供專業的基礎上，才能贏得顧客的信任和支持。
        </p>
      </Section>

      {/* 收購閒置名牌手袋 */}
      <Section title="收購閒置名牌手袋">
        <p className="mb-4">
          在 The Luxe Vault，我們專注於回收高品質的手袋和背袋，並歡迎名牌產品(包括 Hermes, Gucci, Louis Vuitton, Chanel, Prada, Goyard, Fendi, Celine, Dior)。
        </p>
        <p className="mb-4">
          手袋和背袋是時尚的永恆象徵，能夠顯示出您的獨特品味。我們相信，您的每一件名牌手袋都有其特有的故事，而在您決定出售的那一刻，它又將成為別人的美好回憶。我們的回收服務僅限於手袋和背袋，這使我們能夠專注於每一件商品的價值評估，確保我們為放售的顧客提供最具競爭力的價格。
        </p>
        <p className="mb-4">
          無論是經典的 Hermes Birkin 手袋，還是時尚的 Gucci 背袋，The Luxe Vault 都是您放售奢侈品的理想之地。您只需提供基本信息，我們的專業團隊將迅速為您提供評估與報價。我們承諾，提供簡單透明的交易過程，確保您可以無憂將舊奢侈品的價值轉化為現實的回報。讓我們幫助您將不再需要的奢侈品找到新主人！
        </p>
      </Section>
      {/* 真實名牌袋圖片網格 */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {brandList.map((brand, index) => (
          <div 
            key={index} 
            className="group relative block overflow-hidden rounded-lg h-[350px] "
          >
            {/* 品牌圖片 */}
            <img 
              src={brand.imgUrl} 
              alt={brand.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            
            {/* Hover 遮罩 + 文字 */}
            <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-playfair font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {brand.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;