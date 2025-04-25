import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResultPage.css';
import { interpretHexagram, getHexagramData } from '../utils/hexagramUtils';
import { getAIInterpretation, getLocalAIInterpretation } from '../services/aiService';

const ResultPage = () => {
  const navigate = useNavigate();
  const [hexagramData, setHexagramData] = useState(null);
  const [interpretation, setInterpretation] = useState(null);
  const [aiInterpretation, setAiInterpretation] = useState('');
  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  
  useEffect(() => {
    // 从 sessionStorage 获取卦象数据
    const storedData = sessionStorage.getItem('hexagramData');
    
    if (!storedData) {
      // 如果没有数据，重定向到起卦页面
      navigate('/divination');
      return;
    }
    
    try {
      const parsedData = JSON.parse(storedData);
      setHexagramData(parsedData);
      
      // 解析卦象
      const hexInfo = getHexagramData(parsedData.originalYao);
      const interpretationResult = interpretHexagram(hexInfo, parsedData.question);
      setInterpretation(interpretationResult);
      
      // 获取传统解读
      setLoading(false);
      
      // 获取AI解读
      // 获取AI解读
      setAiLoading(true);
      getAIInterpretation(hexInfo, parsedData.question)
        .then(aiResult => {
          setAiInterpretation(aiResult);
        })
        .catch(error => {
          console.error('获取AI解读失败，使用本地解读:', error);
          // 如果API调用失败，使用本地模拟的AI解读
          const localAiResult = getLocalAIInterpretation(hexInfo, parsedData.question);
          setAiInterpretation(localAiResult);
        })
        .finally(() => {
          setAiLoading(false);
        });
    } catch (error) {
      console.error('Error parsing hexagram data:', error);
      navigate('/divination');
    }
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <i className="fas fa-yin-yang fa-spin"></i>
        </div>
        <p>正在解析卦象...</p>
      </div>
    );
  }
  
  if (!hexagramData || !interpretation) {
    return <div className="container">数据加载错误，请<Link to="/divination">重新起卦</Link></div>;
  }
  
  const { 
    hexagramName, 
    hexagramSymbol, 
    hexagramNumber, 
    changingLines, 
    resultHexagramName,
    resultHexagramSymbol,
    resultHexagramNumber
  } = interpretation;
  
  return (
    <div className="result-page">
      <div className="container">
        <h1 className="section-title">卦象解析</h1>
        
        <div className="hexagram-summary">
          <div className="hexagram-info">
            <div className="hexagram-title">
              <h2>{hexagramName}</h2>
              <span className="hexagram-number">第{hexagramNumber}卦</span>
            </div>
            <div className="hexagram-date">
              <i className="far fa-calendar-alt"></i> 起卦时间：
              {new Date(hexagramData.date).toLocaleString('zh-CN')}
            </div>
            <div className="question-box">
              <h3>所问事项：</h3>
              <p>{hexagramData.question}</p>
            </div>
          </div>
          
          <div className="hexagram-symbols">
            <div className="hexagram-display">
              <div className="hexagram-symbol">{hexagramSymbol}</div>
              <div className="hexagram-name">本卦：{hexagramName}</div>
            </div>
            
            {changingLines.length > 0 && (
              <div className="hexagram-arrow">
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
            )}
            
            {changingLines.length > 0 && (
              <div className="hexagram-display">
                <div className="hexagram-symbol">{resultHexagramSymbol}</div>
                <div className="hexagram-name">变卦：{resultHexagramName}</div>
              </div>
            )}
          </div>
        </div>
        
        <div className="hexagram-details">
          <div className="hexagram-yao-display">
            <h3>六爻详情</h3>
            <div className="yao-diagram">
              {interpretation.yaoSymbols.map((yao, index) => (
                <div 
                  key={index} 
                  className={`yao ${changingLines.includes(5-index) ? 'changing' : ''}`}
                >
                  <div className="yao-position">
                    {['上爻', '五爻', '四爻', '三爻', '二爻', '初爻'][index]}
                  </div>
                  <div className="yao-symbol" dangerouslySetInnerHTML={{ __html: yao }}></div>
                  <div className="yao-value">{hexagramData.originalYao[5-index]}</div>
                </div>
              ))}
            </div>
            
            {changingLines.length > 0 && (
              <div className="changing-lines-info">
                <h4>变爻：</h4>
                <ul>
                  {changingLines.map(line => (
                    <li key={line}>
                      第{['初', '二', '三', '四', '五', '上'][line]}爻
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="interpretation-section">
            <h3>卦辞解析</h3>
            <div className="interpretation-content">
              <div className="gua-ci">
                <h4>卦辞</h4>
                <p>{interpretation.guaCi}</p>
              </div>
              
              <div className="overall-meaning">
                <h4>总体解析</h4>
                <p>{interpretation.overallMeaning}</p>
              </div>
              
              {changingLines.length > 0 ? (
                <div className="changing-lines">
                  <h4>变爻解析</h4>
                  {changingLines.map(lineIndex => (
                    <div key={lineIndex} className="line-interpretation">
                      <h5>第{['初', '二', '三', '四', '五', '上'][lineIndex]}爻</h5>
                      <p>{interpretation.lineInterpretations[lineIndex]}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="static-hexagram">
                  <h4>静卦解析</h4>
                  <p>本卦无变爻，为静卦。{interpretation.staticHexagramMeaning}</p>
                </div>
              )}
              
              <div className="divination-advice">
                <h4>卜筮建议</h4>
                <p>{interpretation.advice}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI解读部分 */}
        <div className="ai-interpretation-section">
          <h2 className="section-title">AI智能解读</h2>
          
          <div className="ai-actions">
            <button 
              className="btn ai-btn" 
              onClick={() => {
                // 构建更详细的卦象解析
                const hexDetails = `
【卦象解析】
卦象：${hexagramName}（第${hexagramNumber}卦）
所问事项：${hexagramData.question}
卦辞解析：
卦辞：${interpretation.guaCi}
总体解析：${interpretation.overallMeaning}
${changingLines.length > 0 ? 
  `变爻解析：
${changingLines.map(line => `第${['初', '二', '三', '四', '五', '上'][line]}爻：${interpretation.lineInterpretations[line]}`).join('\n')}` 
  : 
  `静卦解析：${interpretation.staticHexagramMeaning}`}
卜筮建议：${interpretation.advice}
`;
                
                // 复制到剪贴板
                navigator.clipboard.writeText(hexDetails)
                  .then(() => {
                    // 创建自定义弹窗
                    const modal = document.createElement('div');
                    modal.className = 'copy-modal';
                    modal.innerHTML = `
                      <div class="copy-modal-content">
                        <div class="modal-icon">
                          <i class="fas fa-check-circle"></i>
                        </div>
                        <p>已复制卦象，点击请前往AI页面粘贴解读</p>
                        <button class="modal-btn">前往</button>
                      </div>
                    `;
                    document.body.appendChild(modal);
                    
                    // 点击前往按钮跳转
                    const goBtn = modal.querySelector('.modal-btn');
                    goBtn.addEventListener('click', (e) => {
                      e.stopPropagation();
                      window.open('https://aistudio.alibaba-inc.com/aiWorktable#/aistudio/webPage?appCode=BwUkELdbKIU', '_blank');
                      document.body.removeChild(modal);
                    });
                    
                    // 点击弹窗背景关闭
                    modal.addEventListener('click', (e) => {
                      if (e.target === modal) {
                        document.body.removeChild(modal);
                      }
                    });
                    
                    // 3秒后自动关闭
                    setTimeout(() => {
                      if (document.body.contains(modal)) {
                        document.body.removeChild(modal);
                      }
                    }, 3000);
                  })
                  .catch(err => {
                    console.error('复制失败:', err);
                    alert('复制失败，请手动复制卦象信息。');
                  });
              }}
            >
              <i className="fas fa-magic"></i> 获取AI解读
            </button>
          </div>
        </div>
        
        <div className="result-actions">
          <Link to="/divination" className="btn">重新起卦</Link>
          <button className="btn secondary-btn" onClick={() => window.print()}>
            <i className="fas fa-print"></i> 打印结果
          </button>
        </div>
        
        <div className="disclaimer">
          <p>注意：此卦象解析仅供参考，请结合实际情况理性判断。易经预测重在启发思考，最终决策应由个人做出。</p>
          <p>AI解读基于现代算法与传统易学理论，仅作为参考建议，不应替代专业咨询。</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
