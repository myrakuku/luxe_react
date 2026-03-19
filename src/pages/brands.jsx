import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import Hermes from '../images/brands/Hermes.png'
import Gucci from '../images/brands/Gucci.png'
import LV from '../images/brands/LV.png'
import Chanel from '../images/brands/Chanel.png'
import Prada from '../images/brands/Prada.png'
import Goyard from '../images/brands/Goyard.png'
import Fendi from '../images/brands/Fendi.png'
import Celine from '../images/brands/Celine.png'
import Dior from '../images/brands/Dior.png'

export const Brands = () => {

  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    document.title = "收購閒置名牌手袋介紹｜高價回收奢侈品｜The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      "The Luxe Vault 收購閒置名牌手袋詳細介紹，涵蓋Hermes、Chanel、Dior等多品牌，高價回收、安全交收、即日過數服務，輕鬆將閒置奢侈品轉化為現金，全程透明無隱藏費用。"
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      "收購閒置名牌手袋, 閒置手袋回收, 奢侈品回收介紹, 高價收購手袋, 閒置名牌變現, 多品牌手袋收購, 香港閒置手袋回收"
    );
  }, []);
  
  // 品牌數據配置（可替換為真實圖片鏈接和路由）
  const brandList = [
    { name: '收購 Hermes', imgUrl: Hermes, link: '/brands/hermes' },
    { name: '收購 Gucci', imgUrl: Gucci, link: '/brands/gucci' },
    { name: '收購 Louis Vuitton', imgUrl: LV, link: '/brands/lv' },
    { name: '收購 Chanel', imgUrl: Chanel, link: '/brands/chanel' },
    { name: '收購 Prada', imgUrl: Prada, link: '/brands/prada' },
    { name: '收購 Goyard', imgUrl: Goyard, link: '/brands/goyard' },
    { name: '收購 Fendi', imgUrl: Fendi, link: '/brands/fendi' },
    { name: '收購 Celine', imgUrl: Celine, link: '/brands/celine' },
    { name: '收購 Dior', imgUrl: Dior, link: '/brands/dior' }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white pt-10 px-6 md:px-12">
      {/* 頁面標題 */}
      <div className="min-h-screen bg-white px-6 md:px-12 py-12 max-w-4xl mx-auto font-sans text-text-primary">
      {/* 標題區 */}
      <div className="text-center mb-8">
        <h1 className="text-4xl  font-light mb-2 font-playfair">
          What <span className="text-5xl md:text-6xl font-normal opacity-30">Brand</span> ?
        </h1>
        <h2 className="text-xl font-bold text-text-primary mb-6 text-center">收購閒置名牌手袋包括...</h2>
      </div>

      {/* 品牌介紹文字 */}
      <div className="leading-relaxed text-sm md:text-base font-extralight">
        <p className="mb-12 text-center">
          在 The Luxe Vault，我們專注於回收高品質的手袋和背袋，特別歡迎各大知名品牌的產品。我們提供的回收服務涵蓋了以下頂級奢侈品牌：
        </p>

        <ul className="list-disc pl-5 mb-8 space-y-2 text-sm md:text-base">
          <li><strong className="font-medium">Hermes（愛馬仕）</strong>：以其經典的 Birkin 和 Kelly 手袋聞名，代表著奢華與精緻工藝。</li>
          <li><strong className="font-medium">Gucci（古馳）</strong>：其獨特的設計和創新風格讓每位顧客都能表現出自身的時尚態度，包款如 Dionysus 和 Marmont。</li>
          <li><strong className="font-medium">Louis Vuitton（路易威登）</strong>：LV 的經典 Monogram 手袋，如 Neverfull 和 Speedy，堪稱永恆的時尚標誌。</li>
          <li><strong className="font-medium">Chanel（香奈兒）</strong>：以其經典的 Flap Bag 和 Boy Bag 知名，Chanel 手袋總能引起一陣風潮。</li>
          <li><strong className="font-medium">Prada（普拉達）</strong>：以簡約而前衛的設計著稱，Prada 手袋如 Nylon 和 Saffiano 系列充滿現代感。</li>
          <li><strong className="font-medium">Goyard（戈雅）</strong>：其獨特的 Goyardine 格紋使手袋如 Saint Louis Tote 成為時尚界的寵兒。</li>
          <li><strong className="font-medium">Fendi（芬迪）</strong>：Fendi 的 Baguette 和 Peekaboo 手袋在時尚圈廣受青睞，以其獨特的設計語言吸引眾人目光。</li>
          <li><strong className="font-medium">Celine（思琳）</strong>：Celine 的 Luggage Tote 和 Belt Bag 融合了優雅與前衛的設計。</li>
          <li><strong className="font-medium">Dior（迪奧）</strong>：Couture 品牌 Dior 的 Lady Dior 和 Saddle Bag 則是優雅與經典的完美象徵。</li>
        </ul>

        <p className="text-sm md:text-base">
          手袋和背袋不僅是時尚的永恆象徵，更反映出您的獨特品味。我們相信，您的每一件名牌手袋都有其獨特的故事，當您選擇將其出售時，它又將成為別人的珍貴回憶。The Luxe Vault 是您放售名牌珍品的理想選擇，透過我們的專業服務，您可以輕鬆實現奢華價值的轉換。讓我們一起幫助這些珍品找到新的擁有者吧！
        </p>
      </div>
      {/* 真實名牌袋圖片網格 */}
      <div className="max-w-7xl mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {brandList.map((brand, index) => (
          <a 
            key={index} 
            href={brand.link} 
            className="group relative block overflow-hidden rounded-lg h-[350px] "
          >
            {/* 品牌圖片 */}
            <img 
              src={brand.imgUrl} 
              alt={brand.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            
            {/* Hover 遮罩 + 文字 */}
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-playfair font-medium transition-opacity duration-300">
                {brand.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div> 
    </div>
    </>
  );
};

export default Brands;