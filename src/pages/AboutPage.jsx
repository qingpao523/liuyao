import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title">关于易经与六爻预测</h1>
        
        <section className="about-section">
          <h2>易经简介</h2>
          <div className="about-content">
            <div className="about-text">
              <p>《易经》，又称《周易》，是中国最古老的经典之一，被誉为"群经之首"。它不仅是一部占卜之书，更是一部包含哲学、宇宙观、人生观的百科全书。</p>
              <p>易经以"易"为核心，"易"有三义：简易、变易、不易。它通过阴阳、八卦、六十四卦等符号系统，揭示宇宙万物的变化规律和内在联系。</p>
              <p>作为中华文化的重要组成部分，《易经》对中国哲学、科学、医学、文学等领域产生了深远影响，也是道家、儒家思想的重要来源。</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1584449881974-74a5be124c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="古籍易经" />
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>六爻预测的起源与发展</h2>
          <div className="about-content reverse">
            <div className="about-text">
              <p>六爻预测术源于《周易》，是中国传统占卜方法之一。"爻"是构成卦象的基本单位，一个完整的卦由六个爻组成，故称"六爻"。</p>
              <p>六爻预测术在汉代得到系统化发展，至宋代形成了较为完备的理论体系。明清时期，六爻预测进一步普及，并出现了多个流派。</p>
              <p>现代六爻预测继承了传统理论，同时融合了现代科学思维和心理学知识，使这一古老的智慧在当代社会仍具有实用价值。</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1623680805526-3ca2b5d9e192?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="六爻预测" />
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>八卦与六十四卦</h2>
          <div className="triagrams-content">
            <div className="triagrams-intro">
              <p>八卦是易经的基础符号系统，由三爻组成，分别代表天、地、雷、风、水、火、山、泽。八卦两两组合，形成六十四卦，涵盖了宇宙万象的变化。</p>
            </div>
            
            <div className="bagua-diagram">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bagua-name-earlier.svg/500px-Bagua-name-earlier.svg.png" alt="八卦图" />
              <p className="image-caption">伏羲八卦图</p>
            </div>
            
            <div className="triagrams-table">
              <h3>八卦基本属性</h3>
              <table>
                <thead>
                  <tr>
                    <th>卦名</th>
                    <th>符号</th>
                    <th>自然现象</th>
                    <th>方位</th>
                    <th>五行</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>乾</td>
                    <td>☰</td>
                    <td>天</td>
                    <td>西北</td>
                    <td>金</td>
                  </tr>
                  <tr>
                    <td>坤</td>
                    <td>☷</td>
                    <td>地</td>
                    <td>西南</td>
                    <td>土</td>
                  </tr>
                  <tr>
                    <td>震</td>
                    <td>☳</td>
                    <td>雷</td>
                    <td>东</td>
                    <td>木</td>
                  </tr>
                  <tr>
                    <td>巽</td>
                    <td>☴</td>
                    <td>风</td>
                    <td>东南</td>
                    <td>木</td>
                  </tr>
                  <tr>
                    <td>坎</td>
                    <td>☵</td>
                    <td>水</td>
                    <td>北</td>
                    <td>水</td>
                  </tr>
                  <tr>
                    <td>离</td>
                    <td>☲</td>
                    <td>火</td>
                    <td>南</td>
                    <td>火</td>
                  </tr>
                  <tr>
                    <td>艮</td>
                    <td>☶</td>
                    <td>山</td>
                    <td>东北</td>
                    <td>土</td>
                  </tr>
                  <tr>
                    <td>兑</td>
                    <td>☱</td>
                    <td>泽</td>
                    <td>西</td>
                    <td>金</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>六爻预测的基本原理</h2>
          <div className="principle-content">
            <div className="principle-text">
              <p>六爻预测基于以下几个核心原理：</p>
              <ol>
                <li><strong>阴阳五行</strong>：万物皆由阴阳五行构成，相生相克，循环往复。</li>
                <li><strong>卦爻象</strong>：通过卦象和爻象来反映事物的状态和变化趋势。</li>
                <li><strong>时空对应</strong>：特定时空中起卦，能反映该时空中的事物特征。</li>
                <li><strong>象数结合</strong>：结合数理和象义，全面解读卦象含义。</li>
              </ol>
              <p>六爻预测通过"动爻"和"静爻"分析事物的变化，动爻反映变化因素，静爻代表稳定状态。预测时还需考虑世爻、应爻、卦变等多种因素。</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>六爻预测的应用领域</h2>
          <div className="applications-grid">
            <div className="application-card">
              <div className="application-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>事业决策</h3>
              <p>评估职业发展方向、创业时机、职场人际关系等，为事业决策提供参考。</p>
            </div>
            
            <div className="application-card">
              <div className="application-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>情感婚姻</h3>
              <p>分析感情发展趋势、伴侣相容性、婚姻质量等，帮助理清情感问题。</p>
            </div>
            
            <div className="application-card">
              <div className="application-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3>财务投资</h3>
              <p>预测财运变化、投资时机、理财方向等，辅助财务决策。</p>
            </div>
            
            <div className="application-card">
              <div className="application-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>健康状况</h3>
              <p>评估身体状况、疾病趋势、康复前景等，提供健康管理建议。</p>
            </div>
            
            <div className="application-card">
              <div className="application-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>居住环境</h3>
              <p>分析住宅风水、搬迁时机、环境适宜性等，指导居住选择。</p>
            </div>
            
            <div className="application-card">
              <div className="application-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3>人际关系</h3>
              <p>解读人际互动、合作前景、冲突化解等，优化人际关系。</p>
            </div>
          </div>
        </section>
        
        <div className="cta-section">
          <h2>探索您的命运密码</h2>
          <p>通过六爻预测，洞察人生走向，做出明智决策</p>
          <Link to="/divination" className="btn cta-btn">立即起卦</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
