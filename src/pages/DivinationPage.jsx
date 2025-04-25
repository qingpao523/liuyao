import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DivinationPage.css';
import { generateHexagram } from '../utils/hexagramUtils';

const DivinationPage = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [divinationMethod, setDivinationMethod] = useState('auto');
  const [manualYao, setManualYao] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleMethodChange = (e) => {
    setDivinationMethod(e.target.value);
  };

  const handleManualYaoChange = (index, value) => {
    const newYao = [...manualYao];
    newYao[index] = value;
    setManualYao(newYao);
  };

  const validateForm = () => {
    if (!question.trim()) {
      setError('请输入您的问题');
      return false;
    }
    
    if (divinationMethod === 'manual') {
      const isValid = manualYao.every(yao => yao === '6' || yao === '7' || yao === '8' || yao === '9');
      if (!isValid) {
        setError('请为每一爻选择有效的数字（6、7、8或9）');
        return false;
      }
    }
    
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    // 模拟卦象生成过程
    setTimeout(() => {
      let hexagramData;
      
      if (divinationMethod === 'auto') {
        hexagramData = generateHexagram(question, name, birthdate, gender);
      } else {
        // 使用手动输入的爻值
        hexagramData = {
          originalYao: manualYao.map(Number),
          question,
          name,
          birthdate,
          gender,
          date: new Date().toISOString()
        };
      }
      
      // 将卦象数据存储到 sessionStorage
      sessionStorage.setItem('hexagramData', JSON.stringify(hexagramData));
      
      setLoading(false);
      navigate('/result');
    }, 2000);
  };

  return (
    <div className="divination-page">
      <div className="container">
        <h1 className="section-title">六爻起卦</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="divination-form">
          <div className="form-group">
            <label htmlFor="question">您的问题 <span className="required">*</span></label>
            <textarea 
              id="question" 
              value={question} 
              onChange={handleQuestionChange} 
              placeholder="请详细描述您想要解答的问题，如事业、婚姻、健康等方面的疑问"
              required
            ></textarea>
            <small>请在起卦前集中精神，诚心发问</small>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={handleNameChange} 
                placeholder="选填，更准确的预测"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="birthdate">出生日期</label>
              <input 
                type="date" 
                id="birthdate" 
                value={birthdate} 
                onChange={handleBirthdateChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="gender">性别</label>
              <select id="gender" value={gender} onChange={handleGenderChange}>
                <option value="">请选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>起卦方式</label>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="divinationMethod" 
                  value="auto" 
                  checked={divinationMethod === 'auto'} 
                  onChange={handleMethodChange}
                />
                <span>系统自动起卦</span>
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="divinationMethod" 
                  value="manual" 
                  checked={divinationMethod === 'manual'} 
                  onChange={handleMethodChange}
                />
                <span>手动输入爻值</span>
              </label>
            </div>
          </div>
          
          {divinationMethod === 'manual' && (
            <div className="manual-input">
              <h3>手动输入六爻</h3>
              <p>请按从下到上的顺序输入六个爻的数值（初爻在最下方）：</p>
              <div className="yao-inputs">
                {manualYao.map((yao, index) => (
                  <div key={index} className="yao-input-group">
                    <label htmlFor={`yao-${6-index}`}>{`第${6-index}爻`}</label>
                    <select 
                      id={`yao-${6-index}`} 
                      value={yao} 
                      onChange={(e) => handleManualYaoChange(index, e.target.value)}
                      required={divinationMethod === 'manual'}
                    >
                      <option value="">请选择</option>
                      <option value="6">6 - 老阴</option>
                      <option value="7">7 - 少阳</option>
                      <option value="8">8 - 少阴</option>
                      <option value="9">9 - 老阳</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="form-actions">
            <button type="submit" className="btn submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> 起卦中...
                </>
              ) : '开始起卦'}
            </button>
          </div>
        </form>
        
        <div className="divination-notes">
          <h3>起卦须知</h3>
          <ul>
            <li>起卦前应保持心境平和，专注于所问之事</li>
            <li>问题应明确具体，避免模糊或多重问题</li>
            <li>同一问题短期内不宜重复起卦</li>
            <li>卦象解读仅供参考，最终决策应结合实际情况</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DivinationPage;
