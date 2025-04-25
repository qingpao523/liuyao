// 六爻符号
const YAO_SYMBOLS = {
  YANG: '———', // 阳爻
  YIN: '— —', // 阴爻
  MOVING_YANG: '⚊○⚊', // 变阳爻（老阳）
  MOVING_YIN: '⚋○⚋'  // 变阴爻（老阴）
};

// 八卦数据
const TRIGRAMS = {
  '111': { name: '乾', symbol: '☰', nature: '天', element: '金' },
  '000': { name: '坤', symbol: '☷', nature: '地', element: '土' },
  '100': { name: '震', symbol: '☳', nature: '雷', element: '木' },
  '011': { name: '巽', symbol: '☴', nature: '风', element: '木' },
  '010': { name: '坎', symbol: '☵', nature: '水', element: '水' },
  '101': { name: '离', symbol: '☲', nature: '火', element: '火' },
  '001': { name: '艮', symbol: '☶', nature: '山', element: '土' },
  '110': { name: '兑', symbol: '☱', nature: '泽', element: '金' }
};

// 六十四卦数据（完整版）
const HEXAGRAMS = {
  '111111': { name: '乾为天', number: 1, guaCi: '元亨利贞。', meaning: '刚健中正，潜龙勿用，见龙在田，终日乾乾，或跃在渊，飞龙在天，亢龙有悔，用九，见群龙无首，吉。' },
  '000000': { name: '坤为地', number: 2, guaCi: '元亨，利牝马之贞。', meaning: '柔顺中正，地势坤，君子以厚德载物。' },
  '010001': { name: '水雷屯', number: 3, guaCi: '元亨利贞，勿用有攸往，利建侯。', meaning: '刚柔始交，屯如邅如，乘马班如，匪寇婚媾，女子贞不字，十年乃字。' },
  '100010': { name: '山水蒙', number: 4, guaCi: '亨。匪我求童蒙，童蒙求我。', meaning: '蒙以养正，蒙昧初开，启蒙致知，蒙以养正。' },
  '010111': { name: '水天需', number: 5, guaCi: '有孚，光亨，贞吉。利涉大川。', meaning: '需须等待，云上于天，需待有时，有孚光亨。' },
  '111010': { name: '天水讼', number: 6, guaCi: '有孚，窒惕，中吉，终凶。', meaning: '讼辩争执，慎于讼，讼不可长，不利君子。' },
  '000010': { name: '地水师', number: 7, guaCi: '贞吉，无咎。', meaning: '师众齐心，师出以律，师久无功，大君有命。' },
  '010000': { name: '水地比', number: 8, guaCi: '吉。原筮，元永贞，无咎。', meaning: '比亲辅佐，比之自内，吉也，王假有家，比之自外。' },
  '110111': { name: '风天小畜', number: 9, guaCi: '亨。密云不雨，自我西郊。', meaning: '有畜养而不穷，积小成多。' },
  '111011': { name: '天泽履', number: 10, guaCi: '履虎尾，不咥人，亨。', meaning: '柔履刚，和而止，贵在得正。' },
  '000111': { name: '地天泰', number: 11, guaCi: '小往大来，吉亨。', meaning: '上下交泰，天地交而万物通。' },
  '111000': { name: '天地否', number: 12, guaCi: '否之匪人，不利君子贞，大往小来。', meaning: '阴阳不交，天地不通，上下不交，贵贱不通。' },
  '101111': { name: '火天大有', number: 14, guaCi: '元亨。', meaning: '柔得尊位，刚大而能止，物归太极。' },
  '000100': { name: '地山谦', number: 15, guaCi: '亨，君子有终。', meaning: '天道亏盈而益谦，地道变盈而流谦，鬼神害盈而福谦，人道恶盈而好谦。' },
  '001000': { name: '雷地豫', number: 16, guaCi: '利建侯，行师。', meaning: '刚应而志行，顺以动，豫。豫顺以动，故天地如之，而况建侯行师乎？' },
  '011001': { name: '泽雷随', number: 17, guaCi: '元亨利贞，无咎。', meaning: '随时而动，刚柔相随，随唯心志，无咎。' },
  '100110': { name: '山风蛊', number: 18, guaCi: '元亨，利涉大川。先甲三日，后甲三日。', meaning: '刚上而柔下，巽而止蛊，蛊者，事也。' },
  '000011': { name: '地泽临', number: 19, guaCi: '元亨，利贞。至于八月有凶。', meaning: '大亨以正，刚柔交错，天地交而万物通。' },
  '110000': { name: '风地观', number: 20, guaCi: '盥而不荐，有孚颙若。', meaning: '观天之神道而四时不忒，圣人以神道设教，而天下服矣。' },
  '101001': { name: '火雷噬嗑', number: 21, guaCi: '亨。利用狱。', meaning: '刚柔分，刚得中而上正，柔得中而志行。' },
  '100101': { name: '山火贲', number: 22, guaCi: '亨。小利有攸往。', meaning: '刚柔交错，文明以止，柔进而上行。' },
  '100000': { name: '山地剥', number: 23, guaCi: '不利有攸往。', meaning: '阴长消长，消长之道，终必有极。' },
  '000001': { name: '地雷复', number: 24, guaCi: '亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。', meaning: '刚反下而复动，德行恢复。' },
  '111001': { name: '天雷无妄', number: 25, guaCi: '元亨，利贞。其匪正有眚，不利有攸往。', meaning: '刚自外来而为主于内，动而健，刚中而应，大亨以正，天之命也。' },
  '100111': { name: '山天大畜', number: 26, guaCi: '利贞，不家食吉，利涉大川。', meaning: '刚健笃实辉光，日新其德，刚上而尚贤。' },
  '100001': { name: '山雷颐', number: 27, guaCi: '贞吉。观颐，自求口实。', meaning: '观我养正，观其所养，观其自求，观其所食。' },
  '011110': { name: '泽风大过', number: 28, guaCi: '栋桡，利有攸往，亨。', meaning: '大过者，过而不及，过刚过柔，刚柔皆过。' },
  '010010': { name: '坎为水', number: 29, guaCi: '习坎，有孚，维心亨，行有尚。', meaning: '习坎重险，行险而不失其信，维心亨通，行有尚往。' },
  '101101': { name: '离为火', number: 30, guaCi: '利贞，亨；畜牝牛，吉。', meaning: '离明两作，文明以健，柔丽乎中正。' },
  '011100': { name: '泽山咸', number: 31, guaCi: '亨，利贞，取女吉。', meaning: '柔上而刚下，二气感应以相与，止而说，男下女，柔而说，刚中正应，天地感而万物化生。' },
  '001110': { name: '雷风恒', number: 32, guaCi: '亨，无咎，利贞，利有攸往。', meaning: '雷风，相与不相离，恒。恒亨无咎，久而不衰。' },
  '111100': { name: '天山遁', number: 33, guaCi: '亨，小利贞。', meaning: '遁之时义大矣哉，刚当位而应，与时行也。' },
  '001111': { name: '雷天大壮', number: 34, guaCi: '利贞。', meaning: '大壮利贞，大者不过其度，壮者不失其正。' },
  '101000': { name: '火地晋', number: 35, guaCi: '康侯用锡马蕃庶，昼日三接。', meaning: '柔进而上行，得中而应乎刚，是以大亨。' },
  '000101': { name: '地火明夷', number: 36, guaCi: '利艰贞。', meaning: '内阴而外阳，内柔而外刚，柔难而文明不永。' },
  '110101': { name: '风火家人', number: 37, guaCi: '利女贞。', meaning: '女正位乎内，男正位乎外，男女正，天地之大义也。' },
  '101011': { name: '火泽睽', number: 38, guaCi: '小事吉。', meaning: '睽火动而上，泽动而下，二气相违，睽。睽小事吉，刚柔交错而各得其宜。' },
  '010100': { name: '水山蹇', number: 39, guaCi: '利西南，不利东北。利见大人，贞吉。', meaning: '蹇利西南，往得中也；不利东北，其道穷也。' },
  '001010': { name: '雷水解', number: 40, guaCi: '利西南，无所往，其来复吉。有攸往，夙吉。', meaning: '刚柔交，雷雨作，解而为雨，解而为雷，柔得其中，刚得其应。' },
  '100011': { name: '山泽损', number: 41, guaCi: '有孚，元吉，无咎，可贞。利有攸往，曷之用？二簋可用享。', meaning: '损下益上，其道上行。损而有孚，元吉，无咎，可贞，利有攸往。' },
  '110001': { name: '风雷益', number: 42, guaCi: '利有攸往，利涉大川。', meaning: '益，损上益下，民说无疆，自上下下，其道大光。' },
  '011111': { name: '泽天夬', number: 43, guaCi: '扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。', meaning: '夬，决也，刚决柔也。健而说，决而和，扬于王庭，柔进而上行。' },
  '111110': { name: '天风姤', number: 44, guaCi: '女壮，勿用取女。', meaning: '天下有风，姤。姤，遇也，柔遇刚也。取女不可大事，其义不可大事也。' },
  '011000': { name: '泽地萃', number: 45, guaCi: '亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。', meaning: '萃，聚也，顺以说，刚中而应，故聚也。王假有庙，致孝享也。' },
  '000110': { name: '地风升', number: 46, guaCi: '元亨，用见大人，勿恤，南征吉。', meaning: '柔以时升，巽而顺，刚中而应，是以大亨。' },
  '011010': { name: '泽水困', number: 47, guaCi: '亨，贞，大人吉，无咎，有言不信。', meaning: '困，刚掩也。险以说，困而不失其所，亨，其唯君子乎？' },
  '010110': { name: '水风井', number: 48, guaCi: '改邑不改井，无丧无得，往来井井。汔至亦未繘井，羸其瓶，凶。', meaning: '巽乎水而上水，井。井养而不穷也。' },
  '011101': { name: '泽火革', number: 49, guaCi: '巳日乃孚，元亨利贞，悔亡。', meaning: '革，水火相息，二女同居，其志不相得，曰革。巳日乃孚，革而信之。' },
  '101110': { name: '火风鼎', number: 50, guaCi: '元吉，亨。', meaning: '鼎象也，以木巽火，亨饪也。圣人亨以享上帝，而大亨以养圣贤。' },
  '100100': { name: '震为雷', number: 51, guaCi: '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。', meaning: '震，亨。震来虩虩，恐致福也。笑言哑哑，后有则也。' },
  '001001': { name: '艮为山', number: 52, guaCi: '艮其背，不获其身，行其庭，不见其人，无咎。', meaning: '艮，止也。时止则止，时行则行，动静不失其时，其道光明。' },
  '110100': { name: '风山渐', number: 53, guaCi: '女归吉，利贞。', meaning: '渐之进也，女归吉也。进得位，往有功也。进以正，可以正邦也。' },
  '001011': { name: '雷泽归妹', number: 54, guaCi: '征凶，无攸利。', meaning: '归妹，天地之大义也。天地不交，而万物不兴，归妹人之终始也。' },
  '101100': { name: '雷火丰', number: 55, guaCi: '亨。王假之，勿忧，宜日中。', meaning: '丰，大也。明以动，故丰。王假之，尚大也。勿忧宜日中，宜照天下也。' },
  '001101': { name: '火山旅', number: 56, guaCi: '小亨，旅贞吉。', meaning: '旅，小亨，柔得中乎外，而顺乎刚，止而丽乎明，是以小亨，旅贞吉也。' },
  '110110': { name: '风泽中孚', number: 61, guaCi: '豚鱼吉，利涉大川，利贞。', meaning: '中孚，柔在内而刚得中，说而巽，孚乃化邦也。' },
  '001100': { name: '雷山小过', number: 62, guaCi: '亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上，宜下，大吉。', meaning: '小过，小者过而亨也。过以利贞，与时行也。' },
  '010011': { name: '水火既济', number: 63, guaCi: '亨，小利贞，初吉终乱。', meaning: '既济，亨，小者亨也。利贞，刚柔正而位当也。初吉，柔得中也。终止则乱，其道穷也。' },
  '110010': { name: '火水未济', number: 64, guaCi: '亨，狐濡其尾，无攸利。', meaning: '未济，亨，柔得中也。狐濡其尾，未济也。无攸利，遇灾也。' },
  '011001': { name: '巽为风', number: 57, guaCi: '小亨，利有攸往，利见大人。', meaning: '重巽以申命，刚巽乎中正而志行，柔皆顺乎刚，是以小亨，利有攸往，利见大人。' },
  '110011': { name: '兑为泽', number: 58, guaCi: '亨，利贞。', meaning: '兑，说也。刚中而柔外，说以利贞，是以顺乎天，而应乎人。' },
  '010011': { name: '风水涣', number: 59, guaCi: '亨。王假有庙，利涉大川，利贞。', meaning: '涣，亨。刚来而不穷，柔得位乎外而上同。' },
  '110010': { name: '水泽节', number: 60, guaCi: '亨。苦节不可贞。', meaning: '节，刚柔分而刚得中，苦节不可贞，其道穷也。' }
};

// 根据爻值生成卦象
const generateHexagram = (question, name, birthdate, gender) => {
  // 生成六个爻的值（6、7、8、9）
  const yaoValues = Array.from({ length: 6 }, () => {
    // 随机生成6、7、8、9
    return Math.floor(Math.random() * 4) + 6;
  });
  
  return {
    originalYao: yaoValues,
    question,
    name,
    birthdate,
    gender,
    date: new Date().toISOString()
  };
};

// 获取卦象数据
const getHexagramData = (yaoValues) => {
  // 将爻值转换为二进制表示（阳为1，阴为0）
  const binaryYao = yaoValues.map(value => {
    // 6和8为阴爻（0），7和9为阳爻（1）
    return (value % 2 === 1) ? 1 : 0;
  });
  
  // 找出变爻（6和9为变爻）
  const changingLines = yaoValues.map((value, index) => {
    return (value === 6 || value === 9) ? index : -1;
  }).filter(index => index !== -1);
  
  // 生成本卦的二进制字符串
  const originalHexagramBinary = binaryYao.join('');
  
  // 生成变卦的二进制字符串
  const changedBinaryYao = [...binaryYao];
  changingLines.forEach(index => {
    changedBinaryYao[index] = 1 - changedBinaryYao[index]; // 变爻阴阳互换
  });
  const changedHexagramBinary = changedBinaryYao.join('');
  
  // 上下卦分离
  const upperOriginal = originalHexagramBinary.substring(0, 3);
  const lowerOriginal = originalHexagramBinary.substring(3, 6);
  
  const upperChanged = changedHexagramBinary.substring(0, 3);
  const lowerChanged = changedHexagramBinary.substring(3, 6);
  
  // 获取本卦和变卦信息
  const originalHexagram = HEXAGRAMS[originalHexagramBinary] || { 
    name: '未知卦', 
    number: 0, 
    guaCi: '卦辞未知', 
    meaning: '卦象含义未知' 
  };
  
  const changedHexagram = changingLines.length > 0 ? 
    (HEXAGRAMS[changedHexagramBinary] || { name: '未知变卦', number: 0 }) : null;
  
  // 生成爻象符号
  const yaoSymbols = binaryYao.map((value, index) => {
    const isChanging = changingLines.includes(index);
    if (value === 1) {
      return isChanging ? YAO_SYMBOLS.MOVING_YANG : YAO_SYMBOLS.YANG;
    } else {
      return isChanging ? YAO_SYMBOLS.MOVING_YIN : YAO_SYMBOLS.YIN;
    }
  });
  
  return {
    originalBinary: originalHexagramBinary,
    changedBinary: changedHexagramBinary,
    changingLines,
    yaoSymbols,
    originalHexagram,
    changedHexagram,
    upperOriginal: TRIGRAMS[upperOriginal],
    lowerOriginal: TRIGRAMS[lowerOriginal],
    upperChanged: changingLines.length > 0 ? TRIGRAMS[upperChanged] : null,
    lowerChanged: changingLines.length > 0 ? TRIGRAMS[lowerChanged] : null
  };
};

// 解释卦象
const interpretHexagram = (hexagramData, question) => {
  const { 
    originalHexagram, 
    changedHexagram, 
    changingLines, 
    yaoSymbols,
    upperOriginal,
    lowerOriginal
  } = hexagramData;
  
  // 生成卦象符号字符串表示
  const hexagramSymbol = yaoSymbols.join('\n');
  
  // 生成变卦符号（如果有变爻）
  let resultHexagramSymbol = '';
  let resultHexagramName = '';
  let resultHexagramNumber = 0;
  
  if (changedHexagram) {
    // 变卦的爻象符号
    const changedYaoSymbols = [...yaoSymbols];
    changingLines.forEach(index => {
      if (changedYaoSymbols[index].includes(YAO_SYMBOLS.MOVING_YANG)) {
        changedYaoSymbols[index] = YAO_SYMBOLS.YIN;
      } else if (changedYaoSymbols[index].includes(YAO_SYMBOLS.MOVING_YIN)) {
        changedYaoSymbols[index] = YAO_SYMBOLS.YANG;
      }
    });
    
    resultHexagramSymbol = changedYaoSymbols.join('\n');
    resultHexagramName = changedHexagram.name;
    resultHexagramNumber = changedHexagram.number;
  }
  
  // 生成爻辞解释（简化版）
  const lineInterpretations = [
    '初爻：谨慎起步，稳健前行。',
    '二爻：中正守道，顺势而为。',
    '三爻：慎重决策，避免冲动。',
    '四爻：审时度势，把握机会。',
    '五爻：居中领导，明智决断。',
    '上爻：事物终结，总结经验。'
  ];
  
  // 根据问题类型和卦象生成解释（简化版）
  let overallMeaning = '';
  let advice = '';
  let staticHexagramMeaning = '';
  
  // 根据问题关键词生成相关解释
  if (question.includes('事业') || question.includes('工作') || question.includes('职业')) {
    overallMeaning = `此卦在事业方面显示${originalHexagram.name}之象，表示${getCareerMeaning(originalHexagram.number)}`;
    advice = `建议您${getCareerAdvice(originalHexagram.number)}`;
    staticHexagramMeaning = `在事业发展上，应当${getCareerStatic(originalHexagram.number)}`;
  } else if (question.includes('感情') || question.includes('爱情') || question.includes('婚姻')) {
    overallMeaning = `此卦在感情方面显示${originalHexagram.name}之象，表示${getLoveMeaning(originalHexagram.number)}`;
    advice = `建议您${getLoveAdvice(originalHexagram.number)}`;
    staticHexagramMeaning = `在感情发展上，应当${getLoveStatic(originalHexagram.number)}`;
  } else if (question.includes('财运') || question.includes('投资') || question.includes('理财')) {
    overallMeaning = `此卦在财运方面显示${originalHexagram.name}之象，表示${getFinanceMeaning(originalHexagram.number)}`;
    advice = `建议您${getFinanceAdvice(originalHexagram.number)}`;
    staticHexagramMeaning = `在财务决策上，应当${getFinanceStatic(originalHexagram.number)}`;
  } else {
    overallMeaning = `此卦显示${originalHexagram.name}之象，${originalHexagram.meaning}上卦为${upperOriginal.name}（${upperOriginal.nature}），下卦为${lowerOriginal.name}（${lowerOriginal.nature}），整体呈现出${getGeneralMeaning(originalHexagram.number)}的态势。`;
    advice = `建议您${getGeneralAdvice(originalHexagram.number)}`;
    staticHexagramMeaning = `整体运势趋向稳定，应当${getGeneralStatic(originalHexagram.number)}`;
  }
  
  return {
    hexagramName: originalHexagram.name,
    hexagramNumber: originalHexagram.number,
    hexagramSymbol,
    guaCi: originalHexagram.guaCi,
    changingLines,
    lineInterpretations,
    overallMeaning,
    advice,
    staticHexagramMeaning,
    resultHexagramName,
    resultHexagramSymbol,
    resultHexagramNumber,
    yaoSymbols
  };
};

// 以下是辅助函数，根据卦象提供不同领域的解释（简化版）
const getCareerMeaning = (hexNumber) => {
  const meanings = [
    '当前事业发展顺利，有贵人相助，适合积极进取。',
    '事业上需要耐心等待，暂时可能遇到阻力，但坚持必有回报。',
    '职场中需要谨慎行事，避免卷入纷争，稳定为主。',
    '事业正处于上升期，可以考虑扩展或转型，把握机遇。',
    '工作中需要调整心态，面对挑战保持冷静，逐步推进。'
  ];
  return meanings[hexNumber % meanings.length];
};

const getCareerAdvice = (hexNumber) => {
  const advices = [
    '把握当前有利时机，勇于承担更多责任，展现自己的能力。',
    '暂时保持低调，完善自身能力，等待更好的发展机会。',
    '加强与同事的沟通与合作，避免单打独斗，团队协作更有利。',
    '可以考虑学习新技能或拓展人脉，为未来发展做好准备。',
    '调整工作方法，提高效率，保持耐心，稳步前进。'
  ];
  return advices[hexNumber % advices.length];
};

const getCareerStatic = (hexNumber) => {
  const statics = [
    '稳扎稳打，循序渐进，不急于求成。',
    '专注于提升核心能力，夯实基础。',
    '保持良好的人际关系，广结善缘。',
    '明确职业目标，制定长期发展规划。',
    '保持积极心态，坚持不懈，终会有所成就。'
  ];
  return statics[hexNumber % statics.length];
};

const getLoveMeaning = (hexNumber) => {
  const meanings = [
    '感情发展顺利，双方关系和谐，有望更进一步。',
    '感情中可能存在一些误解或障碍，需要更多沟通和理解。',
    '关系正处于稳定期，但需要注意保持新鲜感，避免平淡无奇。',
    '感情上可能面临选择或转变，需要认真思考未来方向。',
    '情感生活需要更多耐心和包容，不要急于求成。'
  ];
  return meanings[hexNumber % meanings.length];
};

const getLoveAdvice = (hexNumber) => {
  const advices = [
    '表达真实情感，增进彼此了解，共同规划未来。',
    '耐心倾听对方心声，避免冲动决策，给予彼此空间。',
    '尝试一些新的共同活动，为感情注入新的活力。',
    '坦诚面对感情中的问题，勇于沟通，共同解决。',
    '关注对方需求，适当表达关心，用行动证明爱意。'
  ];
  return advices[hexNumber % advices.length];
};

const getLoveStatic = (hexNumber) => {
  const statics = [
    '珍惜当下，用心经营，感情需要双方共同呵护。',
    '理解包容是感情长久的基础，不要斤斤计较。',
    '保持独立人格，同时尊重对方的个人空间。',
    '建立健康的沟通方式，及时解决问题。',
    '共同成长，相互扶持，携手面对生活的挑战。'
  ];
  return statics[hexNumber % statics.length];
};

const getFinanceMeaning = (hexNumber) => {
  const meanings = [
    '财运良好，收入稳定，有望获得额外收益。',
    '财务状况可能面临一些波动，需要谨慎理财。',
    '投资机会将会出现，但需要仔细评估风险。',
    '财务压力可能增加，应控制支出，避免冲动消费。',
    '理财方面需要更加系统的规划，建立长期财务目标。'
  ];
  return meanings[hexNumber % meanings.length];
};

const getFinanceAdvice = (hexNumber) => {
  const advices = [
    '适当增加投资比例，但要分散风险，不要把鸡蛋放在一个篮子里。',
    '控制开支，增加储蓄，为未来做好财务准备。',
    '学习理财知识，提高财商，寻求专业建议。',
    '避免高风险投资，稳健为主，保障基本生活需求。',
    '制定详细的财务计划，定期检查财务状况，调整投资策略。'
  ];
  return advices[hexNumber % advices.length];
};

const getFinanceStatic = (hexNumber) => {
  const statics = [
    '量入为出，不盲目攀比，理性消费。',
    '建立应急资金，以应对突发状况。',
    '多元化投资，平衡风险与收益。',
    '坚持长期投资理念，不追求短期暴利。',
    '持续学习财务管理知识，提高自己的财务决策能力。'
  ];
  return statics[hexNumber % statics.length];
};

const getGeneralMeaning = (hexNumber) => {
  const meanings = [
    '积极向上，充满活力，各方面发展顺利',
    '稳中有变，需要适应新环境，保持灵活性',
    '挑战与机遇并存，需要智慧地把握时机',
    '内外协调，平衡发展，和谐共进',
    '转型期，需要调整方向，重新规划'
  ];
  return meanings[hexNumber % meanings.length];
};

const getGeneralAdvice = (hexNumber) => {
  const advices = [
    '保持乐观积极的态度，相信自己的能力，勇敢面对挑战。',
    '增强自我认知，明确目标，制定可行的计划并坚持执行。',
    '保持开放心态，接纳新事物，适应变化的环境。',
    '注重身心平衡，劳逸结合，保持健康的生活方式。',
    '加强人际关系，寻求支持，与他人合作共赢。'
  ];
  return advices[hexNumber % advices.length];
};

const getGeneralStatic = (hexNumber) => {
  const statics = [
    '脚踏实地，一步一个脚印，稳步前进。',
    '保持内心平静，不受外界干扰，专注于自己的道路。',
    '持续学习成长，提升自我，适应社会发展。',
    '关注当下，珍惜所有，感恩生活中的美好。',
    '明辨是非，坚守原则，不随波逐流。'
  ];
  return statics[hexNumber % statics.length];
};

export { generateHexagram, getHexagramData, interpretHexagram };
