import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>六爻算命</h3>
            <p>传统易经六爻预测，源自《周易》，千年智慧的结晶。</p>
          </div>
          
          <div className="footer-section">
            <h3>快速链接</h3>
            <ul>
              <li><a href="#/">首页</a></li>
              <li><a href="#/divination">起卦</a></li>
              <li><a href="#/about">关于易经</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>联系我们</h3>
            <p><i className="fas fa-envelope"></i> contact@liuyao.com</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-weixin"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-weibo"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} 六爻算命 - 传统易经占卜网站</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
