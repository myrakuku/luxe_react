import React, { useEffect } from 'react';
import Navbar from '../components/Nav'
import image1 from '../images/Blog/1.png'
import image2 from '../images/Blog/2.png'
import image3 from '../images/Blog/3.png'
import image4 from '../images/Blog/4.png'
import image5 from '../images/Blog/5.png'


// 主應用組件
export const Blogs = () => {

// 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
  // 基礎 SEO 配置 - 替換為 Celine 專屬
  document.title = "部落格Blog | 名牌手袋市場資訊與回收新知 | The Luxe Vault";
  document.querySelector('meta[name="description"]')?.setAttribute('content', 
    '保持對名牌手袋市場動態的關注，能幫助您做出明智的決策。無論您是想了解最新的市場價值還是計劃轉手閒置的手袋，這都是一個獲得回報的好時機。選擇 The Luxe Vault，我們為您提供專業的服務，助您在當前的名牌手袋市場中找到最佳交易機會。立即聯繫我們，開始您在奢侈品回收的旅程！'
  );
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
    '名牌手袋市場, 手袋回收資訊, 奢侈品回收, 二手名牌手袋, 手袋估價, The Luxe Vault'
  );
}, []);


  // 模擬部落格文章數據
  const blogPosts = [
    { link: 'post5', title: 'CHANEL頻繁加價：2026年價格調整與經典手袋的投資潛力', date: '2026/3', imgUrl: image5 },
    { link: 'post4', title: '奢侈品手袋的價格分化：入門級小廢包穩步增長，中大號手袋潛力無窮', date: '2025/12', imgUrl: image4 },
    { link: 'post3', title: '2025年奢侈品市場趨勢：Celine與Louis Vuitton手袋保值力解析', date: '2025/12', imgUrl: image3 },
    { link: 'post2', title: 'Goyard與Hermès領跑2025年手袋保值市場：最新價格分析與投資指南', date: '2025/12', imgUrl: image2 },
    { link: 'post1', title: 'CHANEL 手袋加價分析 2025', date: '2025/12', imgUrl: image1 },
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="min-h-screen bg-white px-6 md:px-12 py-12 max-w-5xl mx-auto font-sans text-[#666666]">
      {/* 頁面標題區 */}
      <div className="mb-12 text-right md:text-right">
        <h1 className="text-6xl md:text-8xl font-light font-playfair text-gray-200 mb-2">BLOG</h1>
        <div className="inline-block font-playfair">
          <h2 className="text-2xl md:text-3xl font-light inline">What </h2>
          <span className="text-3xl md:text-4xl font-normal opacity-30 inline">NEWS</span>
          <span className="text-2xl md:text-3xl font-light inline"> ?</span>
        </div>
        <p className="text-sm md:text-base mt-4 text-center md:text-right max-w-2xl ml-auto">
          保持對名牌手袋市場動態的關注，能幫助您做出明智的決策。無論您是想了解最新的市場價值還是計劃轉手閒置的手袋，這都是一個獲得回報的好時機。選擇 The Luxe Vault，我們為您提供專業的服務，助您在當前的名牌手袋市場中找到最佳交易機會。立即聯繫我們，開始您在奢侈品回收的旅程！
        </p>
      </div>

      {/* 分隔線與子標題 */}
      <div className="border-t border-gray-200 pt-6 mb-8">
        <p className="text-sm text-center font-medium">
          名牌手袋新聞與市場動態：了解當前趨勢與回收價值
        </p>
      </div>

      {/* 部落格文章網格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {blogPosts.map((post, index) => (
          <a 
            key={index} 
            href={`/blogs/${post.link}`} 
            className=""
          >
            {/* 文章圖片 */}
            <div className="overflow-hidden mb-3">
              <img 
                src={post.imgUrl} 
                alt={post.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* 文章標題與日期 */}
            <h3 className="text-base font-medium mb-1">{post.title}</h3>
            <p className="text-xs text-gray-400">{post.date}</p>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Blogs;