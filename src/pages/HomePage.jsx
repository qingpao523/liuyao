import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>传统六爻预测</h1>
          <p>探索古老的智慧，解读命运的密码</p>
          <Link to="/divination" className="btn hero-btn">开始起卦</Link>
        </div>
      </section>
      
      <section className="features container">
        <h2 className="section-title">六爻占卜的智慧</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <h3>源自《周易》</h3>
            <p>六爻预测术源自中国古代经典《周易》，有着数千年的历史传承，是中华文化的瑰宝。</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <h3>阴阳变化</h3>
            <p>通过阴阳五行的变化规律，揭示事物发展的内在联系和未来趋势。</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-compass"></i>
            </div>
            <h3>指引方向</h3>
            <p>在人生重要抉择时刻，提供参考和指引，帮助你做出更明智的决策。</p>
          </div>
        </div>
      </section>
      
      <section className="how-it-works container">
        <h2 className="section-title">如何进行六爻预测</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>设定问题</h3>
              <p>明确你想要预测的问题和方向，心中默念你的疑问。</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>起卦</h3>
              <p>通过我们的系统随机生成六爻卦象，或选择传统的方式掷钱币。</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>解卦</h3>
              <p>系统将根据卦象提供详细的解析，揭示问题的本质和未来走向。</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/divination" className="btn">立即起卦</Link>
        </div>
      </section>
      
      <section className="testimonials container">
        <h2 className="section-title">用户体验</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"通过六爻预测，我在事业选择上得到了很好的指引，结果与预测惊人地吻合。"</p>
            </div>
            <div className="testimonial-author">
              <div className="testimonial-name">张先生</div>
              <div className="testimonial-title">企业家</div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"起初我很怀疑，但在一次重要决策前进行了预测，结果让我对传统文化有了新的认识。"</p>
            </div>
            <div className="testimonial-author">
              <div className="testimonial-name">李女士</div>
              <div className="testimonial-title">教师</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
