import axios from 'axios';

// IdealLab API配置
const IDEALLAB_API_URL = 'https://aistudio.alibaba-inc.com/api/v1/chat/completions';
const APP_CODE = 'BwUkELdbKIU';

/**
 * 获取AI解读卦象
 * @param {Object} hexagramData - 卦象数据
 * @param {string} question - 用户问题
 * @returns {Promise<string>} AI解读结果
 */
export const getAIInterpretation = async (hexagramData, question) => {
  try {
    // 构造请求体
    const prompt = generatePrompt(hexagramData, question);
    
    const requestData = {
      appCode: APP_CODE,
      messages: [
        {
          role: "system",
          content: "你是一位精通易经和六爻预测的大师，能够根据卦象为人们解读命运"
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7
    };

    // 发送请求到IdealLab API
    const response = await axios.post(IDEALLAB_API_URL, requestData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // 返回AI生成的解读内容
    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error('未能获取AI解读结果');
    }
  } catch (error) {
    console.error('AI解读请求失败:', error);
    return '很抱歉，AI解读服务暂时不可用。请稍后再试或参考传统解读。';
  }
};

/**
 * 生成用于AI解读的提示文本
 * @param {Object} hexagramData - 卦象数据
 * @param {string} question - 用户问题
 * @returns {string} 提示文本
 */
const generatePrompt = (hexagramData, question) => {
  const { 
    originalHexagram, 
    changedHexagram, 
    changingLines,
    upperOriginal,
    lowerOriginal
  } = hexagramData;

  // 构建变爻信息
  let changingLinesText = '';
  if (changingLines && changingLines.length > 0) {
    changingLinesText = `变爻位置：${changingLines.map(line => `第${['初', '二', '三', '四', '五', '上'][line]}爻`).join('、')}。\n`;
    changingLinesText += `变卦为：${changedHexagram ? changedHexagram.name : '未知'}。`;
  } else {
    changingLinesText = '无变爻，为静卦。';
  }

  // 构建完整提示文本
  return `
请根据以下六爻卦象信息，为用户提供详细、专业且个性化的解读：

用户问题：${question}

卦象信息：
- 本卦：${originalHexagram.name}，第${originalHexagram.number}卦
- 上卦为${upperOriginal.name}（${upperOriginal.nature}），下卦为${lowerOriginal.name}（${lowerOriginal.nature}）
- ${changingLinesText}

请提供以下内容：
1. 卦象总体意义分析
2. 针对用户问题的具体解读
3. 变爻分析（如有）
4. 吉凶判断
5. 实用建议

请用专业但通俗的语言解释，避免过于玄学的表述，注重实用性和指导意义。
`;
};

/**
 * 模拟本地AI解读（当API不可用时使用）
 * @param {Object} hexagramData - 卦象数据
 * @param {string} question - 用户问题
 * @returns {string} 模拟的AI解读结果
 */
export const getLocalAIInterpretation = (hexagramData, question) => {
  const { originalHexagram } = hexagramData;
  
  // 根据问题类型生成不同的解读内容
  let interpretation = `## 【${originalHexagram.name}】AI智能解读\n\n`;
  
  if (question.includes('事业') || question.includes('工作')) {
    interpretation += getCareerInterpretation(hexagramData);
  } else if (question.includes('感情') || question.includes('爱情') || question.includes('婚姻')) {
    interpretation += getLoveInterpretation(hexagramData);
  } else if (question.includes('财') || question.includes('钱') || question.includes('投资')) {
    interpretation += getFinanceInterpretation(hexagramData);
  } else {
    interpretation += getGeneralInterpretation(hexagramData);
  }
  
  // 添加通用建议
  interpretation += `\n\n### 🌟 卦象启示\n${getAdvice(hexagramData)}`;
  
  return interpretation;
};

// 以下是模拟本地AI解读的辅助函数
function getCareerInterpretation(hexagramData) {
  const { originalHexagram, changingLines } = hexagramData;
  const hasChangingLines = changingLines && changingLines.length > 0;
  
  return `### 💼 事业分析\n
${originalHexagram.name}在事业方面显示出${['稳健发展', '潜在变数', '上升趋势', '调整期', '突破机遇'][originalHexagram.number % 5]}的态势。
${originalHexagram.guaCi}这一卦辞在事业上意味着${['需要坚持不懈，稳步前进', '当前有贵人相助，可大胆施展才华', '需谨慎行事，避免冲动决策', '适合开拓创新，寻求突破', '应当沉稳应对，等待时机'][originalHexagram.number % 5]}。

${hasChangingLines ? '变爻提示你事业即将进入新阶段，需要适应环境变化，调整策略。' : '无变爻表明当前事业发展态势稳定，可继续沿用现有方法，稳步推进。'}

### 📊 职场建议
1. ${['提升专业技能，增强核心竞争力', '扩展人脉关系，寻求合作机会', '保持低调务实，踏实做事', '主动承担责任，展现领导能力', '调整工作方法，提高效率'][originalHexagram.number % 5]}
2. ${['注意与同事的沟通协作，避免单打独斗', '可考虑适当转换工作方向或领域', '维护好与上级的关系，获取支持', '制定清晰的职业规划，有的放矢', '保持耐心，等待合适的晋升机会'][originalHexagram.number % 5]}`;
}

function getLoveInterpretation(hexagramData) {
  const { originalHexagram, changingLines } = hexagramData;
  const hasChangingLines = changingLines && changingLines.length > 0;
  
  return `### ❤️ 感情分析\n
${originalHexagram.name}在感情方面显示出${['和谐稳定', '情感波动', '深化发展', '考验期', '转折点'][originalHexagram.number % 5]}的状态。
${originalHexagram.guaCi}这一卦辞在感情上意味着${['感情基础牢固，可共同规划未来', '需要增进沟通，消除误解', '感情正在升温，可适当表达心意', '需要耐心和包容，共度难关', '关系可能面临选择，需认真思考'][originalHexagram.number % 5]}。

${hasChangingLines ? '变爻显示感情将有新的变化，可能是关系更进一步，也可能面临新的挑战，需要做好准备。' : '无变爻表明感情状态相对稳定，宜珍惜当下，用心经营。'}

### 💝 感情建议
1. ${['真诚表达情感，增进彼此了解', '给予对方足够空间，尊重个体差异', '共同规划未来，建立共同目标', '提升情感沟通质量，避免猜疑', '保持独立人格，同时照顾对方需求'][originalHexagram.number % 5]}
2. ${['创造浪漫惊喜，保持感情新鲜感', '学会换位思考，理解对方立场', '共同成长，相互扶持', '遇到问题冷静处理，避免冲动', '关注精神层面的契合，而非物质条件'][originalHexagram.number % 5]}`;
}

function getFinanceInterpretation(hexagramData) {
  const { originalHexagram, changingLines } = hexagramData;
  const hasChangingLines = changingLines && changingLines.length > 0;
  
  return `### 💰 财运分析\n
${originalHexagram.name}在财运方面显示出${['稳步增长', '波动起伏', '潜在机遇', '节制调整', '转型期'][originalHexagram.number % 5]}的趋势。
${originalHexagram.guaCi}这一卦辞在财务上意味着${['财源稳定，可适度扩大投资', '收支可能不平衡，需控制开支', '有意外收获的可能，但需谨慎把握', '适合储蓄和稳健理财，不宜冒险', '可能需要调整财务结构，优化资源配置'][originalHexagram.number % 5]}。

${hasChangingLines ? '变爻预示财务状况将有变化，可能出现新的收入来源或投资机会，也可能面临额外支出，需灵活应对。' : '无变爻表明财务状况相对稳定，可继续执行现有的理财计划。'}

### 📈 理财建议
1. ${['分散投资，降低风险', '增加储蓄，提高安全边际', '寻找新的收入来源，增加被动收入', '控制不必要的开支，量入为出', '学习财务知识，提高理财能力'][originalHexagram.number % 5]}
2. ${['适当考虑长期投资，如保险或养老计划', '避免冲动消费和高风险投资', '建立应急资金，以应对突发状况', '定期检查财务状况，及时调整策略', '寻求专业理财建议，制定合理规划'][originalHexagram.number % 5]}`;
}

function getGeneralInterpretation(hexagramData) {
  const { originalHexagram, changingLines } = hexagramData;
  const hasChangingLines = changingLines && changingLines.length > 0;
  
  return `### 🔮 整体运势分析\n
${originalHexagram.name}显示出${['积极向上', '稳中有变', '内外平衡', '调整转型', '蓄势待发'][originalHexagram.number % 5]}的整体态势。
${originalHexagram.guaCi}这一卦辞意味着${['当前运势顺畅，可以积极进取', '需要保持平和心态，顺应变化', '内外协调发展，保持平衡', '适合反思调整，为未来做准备', '蕴含潜在机遇，耐心等待时机'][originalHexagram.number % 5]}。

${hasChangingLines ? '变爻显示你的生活即将迎来一些变化，这些变化可能带来新的机遇和挑战，需要灵活应对。' : '无变爻表明目前生活状态相对稳定，可以专注于当前目标，稳步前进。'}

### 🌈 生活建议
1. ${['保持积极心态，相信自己的能力', '顺应变化，保持灵活性', '注重身心平衡，劳逸结合', '制定明确目标，分步实施', '关注自我成长，提升内在修养'][originalHexagram.number % 5]}
2. ${['加强人际交往，扩展社交圈', '培养新的兴趣爱好，丰富生活', '注意健康管理，保持良好习惯', '学习新知识，拓展视野', '关注情绪管理，保持心态平和'][originalHexagram.number % 5]}`;
}

function getAdvice(hexagramData) {
  const { originalHexagram } = hexagramData;
  
  const advices = [
    "本卦提醒你，成功往往来自于持之以恒的努力和正确的方法。当下应保持专注，不为外界干扰所动摇。",
    "卦象显示，当前情况下应当顺势而为，不宜强求。接受现实，调整心态，才能找到最佳解决方案。",
    "此卦启示你，变化是必然的，重要的是如何应对变化。保持开放心态，灵活调整策略，才能转危为机。",
    "卦象提示，当前应该注重积累和准备，为未来的发展打下坚实基础。不急于求成，厚积薄发。",
    "本卦揭示，合作与沟通的重要性。寻求他人的支持和建议，团队协作往往能带来更好的结果。",
    "卦象指引你，在决策时需要全面考虑，权衡利弊。不要被表面现象所迷惑，深入思考才能做出明智选择。",
    "此卦提醒你，适时的退让和等待也是一种智慧。有些事情需要时间发酵，不要急于求成。"
  ];
  
  return advices[originalHexagram.number % advices.length];
}
