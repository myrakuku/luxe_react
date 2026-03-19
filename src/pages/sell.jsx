import React, { useEffect } from 'react';
import Navbar from '../components/Nav'

import Image1 from '../images/Whatsapp/1.jpeg'
import Image2 from '../images/Whatsapp/2.jpeg'
import Image3 from '../images/Whatsapp/3.jpeg'
import Image4 from '../images/Whatsapp/4.jpeg'

// 主應用組件
export const Sell = () => {

  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    document.title = "如何放售｜名牌手袋回收流程｜The Luxe Vault";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      "The Luxe Vault 名牌手袋放售教學，簡單3步驟：線上估價、預約交收、即日收款。輕鬆安全放售閒置奢侈品手袋。"
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      "如何放售, 手袋放售, 名牌手袋回收, 放售流程, 線上估價, 即日收款, 奢侈品放售"
    );
  }, []);

  // 品牌數據配置（可替換為真實圖片鏈接和路由）
  const brandList = [
    { imgUrl: Image1},
    { imgUrl: Image2},
    { imgUrl: Image3},
    { imgUrl: Image4},
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="min-h-screen bg-white px-6 md:px-12 py-12 max-w-3xl mx-auto font-sans text-[#666666]">
      {/* 頁面標題 */}
      <div className="mb-16">
        <p className="text-2xl md:text-3xl font-light opacity-50 mb-2">如何出售?</p>
        <h1 className="text-3xl font-light font-playfair">
          What <span className="text-4xl md:text-5xl font-normal opacity-30">Step</span> ?
        </h1>
      </div>

      {/* Step 1 */}
      <div className="mb-16 flex flex-col md:flex-row items-start md:items-center">
        <span className="text-[12rem] md:text-[15rem] font-light text-gray-200 leading-none md:mr-6 md:-mt-8 font-playfair">1</span>
        <div className="md:-ml-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">WhatsApp 即時估價</h2>
          <p className="text-sm md:text-base leading-relaxed">
            想知道您的手袋值多少？操作非常簡單！首先，請拍幾張清晰的手袋照片，包括正面、側面、內部和序號，以便我們進行準確的評估。接下來，提供手袋的基本資料，例如品牌、型號、購買年份以及使用狀況。如果您還有原裝盒和收據，請一同上傳，這能幫助我們為您提供更高的估價。我們的專業鑑定師將在最快的時間內查看您的資料，確保估價快準可靠，您甚至無需親自到店！立即WhatsApp我們，快速獲取手袋估價！
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-16 flex flex-col md:flex-row items-end md:items-center">
        <span className="text-[12rem] md:text-[15rem] font-light text-gray-200 leading-none md:ml-auto md:mr-0 md:-mt-8 order-1 md:order-2 font-playfair">2</span>
        <div className="md:mr-12 text-right order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">確認報價・安排收袋</h2>
          <p className="text-sm md:text-base leading-relaxed">
            當您對報價滿意後，請隨時行動，將您的手袋變現，輕鬆獲得現金！我們提供專業的收袋服務，您可以在安全的公開場所，如咖啡店，進行交易。這讓您能夠在舒適的環境中完成手袋的出售，確保整個過程的安全性和可靠性。在交易過程中，我們的鑑定師會仔細檢查手袋的真偽、使用狀況及附件，並確保報價的準確性與公道性。報價確認無誤後，我們將立即進行付款，幫助您快速實現現金交易，無需長時間的等待。
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="mb-16 flex flex-col md:flex-row items-start md:items-center">
        <span className="text-[12rem] md:text-[15rem] font-light text-gray-200 leading-none md:mr-6 md:-mt-8 font-playfair">3</span>
        <div className="md:-ml-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">即日付款・完成交易</h2>
          <p className="text-sm md:text-base leading-relaxed">
            經過檢查和確認報價後，您將能夠立即收到款項！我們提供即日轉帳服務，款項會立即過數至您指定的銀行戶口，快速且安全。付款方式靈活多樣，支持 FPS、銀行轉帳、支付寶HK、PayMe 或 WeChat Pay，讓您方便快捷地獲取現金。最重要的是，我們全程注重安全與保密，確保交易過程透明，手袋與您的個人資料均受到保護，讓您可以安心交易。
          </p>
        </div>
      </div>

      {/* 小提示 */}
      <div className="mb-10 pt-6 border-t border-gray-100">
        <h3 className="text-sm font-medium mb-4">小提示</h3>
        <p className="text-sm leading-relaxed mb-4">
          擁有原裝盒、塵袋和收據能增加回收價值；即使您的手袋有輕微的使用痕跡，我們也會進行公平的估價。最重要的是，您無需支付任何手續費或評估費，讓回收過程更加無憂。
        </p>
        <ul className="text-sm space-y-2">
          <li className="flex items-start">
            <span className="mr-2">📸</span>
            <span>清晰拍攝手袋：包括正面、側面、內裡、序號</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📝</span>
            <span>提供手袋資料：品牌、型號、購買年份和使用狀況</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📦</span>
            <span>如有原裝盒、塵袋、收據可增加回收價</span>
          </li>
        </ul>
      </div>

      {/* 真實名牌袋圖片網格 */}
      <div className="max-w-7xl mx-5 grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
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
          </div>
        ))}
      </div>

      {/* 為何選擇 The Luxe Vault */}
      <div className="pt-6 border-t border-gray-100 mb-10">
        <h3 className="text-sm font-medium mb-4">為何選擇 The Luxe Vault ?</h3>
        <p className="text-sm leading-relaxed">
          只需三個簡單步驟，您就能夠輕鬆將名牌手袋轉換為現金：Step 1 WhatsApp 即時估價；<br/>
          Step 2 安排專人上門收袋；Step 3 即日收款完成交易。滿意的報價即可意味著現金到手，快速、安全又無煩惱！
        </p>
      </div>
    </div>
    </div>
  );
}

export default Sell;