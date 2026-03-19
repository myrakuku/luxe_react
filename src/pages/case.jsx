import React, { useEffect } from 'react';
import Navbar from '../components/Nav'

import Hermes1 from '../images/Whatsapp/Hermes1.jpeg'
import Hermes2 from '../images/Whatsapp/Hermes2.jpeg'
import Hermes3 from '../images/Whatsapp/Hermes3.jpeg'
import Hermes4 from '../images/Other/2.png'
import Chanel from '../images/Whatsapp/Chanel.jpeg'
import Chanel2 from '../images/Whatsapp/1.jpeg'
import Chanel3 from '../images/Other/3.png'
import Dior from '../images/Whatsapp/Dior.jpeg'
import LV1 from '../images/Other/1.png'


// 主應用組件
export const Case = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
useEffect(() => {
    document.title = "真實高價成交案例｜香港名牌手袋收購｜The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      "The Luxe Vault 香港真實高價收購名牌手袋案例，實際成交Hermes、Chanel、Celine等手袋高價記錄，專業鑑定+透明報價，真實案例見證高價收購實力。"
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      "真實高價成交案例, 香港手袋收購金額, Celine高價收購, 名牌手袋實際成交價, 奢侈品收購案例, 高價收購手袋, 香港手袋收購"
    );
}, []);

  // 品牌數據配置（可替換為真實圖片鏈接和路由）
  const brandList = [
    { name: 'Hermes', imgUrl: Hermes1 },
    { name: 'Hermes', imgUrl: Hermes2 },
    { name: 'Hermes', imgUrl: Hermes3 },
    { name: 'Chanel', imgUrl: Chanel },
    { name: 'Chanel', imgUrl: Chanel2 },
    { name: 'Dior', imgUrl: Dior },
    { name: 'Hermes', imgUrl: Hermes4 },
    { name: 'Chanel', imgUrl: Chanel3 },
    { name: 'Louis Vuitton', imgUrl: LV1 },
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="min-h-screen bg-white px-6 md:px-12 py-12 max-w-5xl mx-auto font-sans text-text-primary">
      {/* 最後區塊 */}
      <div className="border-t border-gray-100 pt-8 mb-12">
        <h1 className="text-2xl md:text-3xl font-light mb-4">廣泛回收名牌手袋 | 真實交易案例 </h1>
        <p className="text-sm md:text-base leading-relaxed">
          不僅限於頂級奢侈品牌，我們的回收服務同樣涵蓋中價及平價名牌手袋。我們收到的手袋會通過市場排名篩選，適合所有希望升級手袋的朋友。從便宜入門款到知名的奢侈名牌，我們為您提供免費的專業行情估價服務，幫助您掌握名牌手袋的回收價。立即聯繫我們，開始無憂的手袋回收之旅！
        </p>
      </div>

      {/* 真實名牌袋圖片網格 */}
      <div className="max-w-7xl mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
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
    </div>
  );
}

export default Case;