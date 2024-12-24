export interface Item {
  id?: string;
  name: string;
  data: number;
  possesion: boolean;
  inputNumber?: number;
}

export const _outterItems: Item[] = [
  { id: "003", name: "橙味风暴", data: 7, possesion: false },
  { id: "005", name: "尖叫樱桃", data: 8, possesion: false },
  { id: "006", name: "皮特水果什锦", data: 7, possesion: false },
  { id: "013", name: "解约协议", data: 7, possesion: false },
  { id: "229", name: "死仇时代的恨意", data: 20, possesion: false },
  { id: "216", name: "统帅肖像", data: 10, possesion: false },
  { id: "216", name: "统帅肖像(Boss)", data: 30, possesion: false },
  { id: "239", name: "宁静之谜", data: -25, possesion: false },
  { id: "119", name: "老蒲扇", data: 10, possesion: false, inputNumber: 0 },
  { id: "217", name: "束灵骨", data: 3, possesion: false, inputNumber: 0 },
  {
    id: "218",
    name: "生命熔炉之薪",
    data: 5,
    possesion: false,
    inputNumber: 0,
  },
  { id: "195", name: "圆石祭坛", data: 5, possesion: false, inputNumber: 0 },
];

export const _meleeOutterItems: Item[] = [
  { id: "079", name: "皇帝的恩宠", data: 15, possesion: false },
  { id: "080", name: "贵族刺剑", data: 25, possesion: false },
  { id: "081", name: "老近卫军之锋", data: 35, possesion: false },
];

export const _rangedOutterItems: Item[] = [
  { id: "082", name: "显圣吊坠", data: 15, possesion: false },
  { id: "083", name: "银餐叉", data: 25, possesion: false },
  { id: "084", name: "损坏的左轮弹巢", data: 35, possesion: false },
];

export const _innerItems: Item[] = [
  { id: "136", name: "古乔治营养原浆", data: 30, possesion: false },
  { id: "193", name: "诸王的冠冕(<3)", data: 50, possesion: false },
  { id: "193", name: "诸王的冠冕(>=3)", data: 150, possesion: false },
  { id: "130", name: "岩角号", data: 20, possesion: false, inputNumber: 0 },
];

export const _skillRecoveryItems: Item[] = [
  { id: "108", name: "香草沙士汽水", data: 20, possesion: false },
  { id: "109", name: "羽兽肝酱", data: 35, possesion: false },
  { id: "110", name: "迷梦香精", data: 50, possesion: false },
  { id: "209", name: "国王的延伸", data: 50, possesion: false },
];

export const _atkSpeedItems: Item[] = [
  { id: "002", name: "凉拌海草", data: 7, possesion: false },
  { id: "004", name: "咖啡平原咖啡糖", data: 8, possesion: false },
  { id: "012", name: "古旧乐谱残章", data: 6, possesion: false },
  { id: "207", name: "国王的新枪", data: 50, possesion: false },
  { id: "210", name: "私人巫术终端", data: 35, possesion: false },
  { id: "240", name: "丝契之谜", data: 50, possesion: false },
  { id: "197", name: "Friston.P", data: 5, possesion: false, inputNumber: 0 },
  { id: "201", name: "投币玩具", data: 3, possesion: false, inputNumber: 0 },
  {
    id: "202",
    name: "骑士戒律·新编",
    data: 5,
    possesion: false,
    inputNumber: 0,
  },
  { id: "192", name: "金酒之杯", data: 7, possesion: false, inputNumber: 0 },
];

export const _ADBoostItems: Item[] = [
  { id: "088", name: "锈蚀刀片", data: 15, possesion: false },
  { id: "089", name: "赶车夫的长鞭", data: 25, possesion: false },
  { id: "090", name: "“复仇者”", data: 35, possesion: false },
];

export const _APBoostItems: Item[] = [
  { id: "091", name: "制式防暴用具", data: 20, possesion: false },
  { id: "092", name: "皇帝的收藏", data: 30, possesion: false },
  { id: "093", name: "“璀璨悲泣”", data: 40, possesion: false },
  { id: "258", name: "讴歌者面纱", data: 10, possesion: false },
  { id: "212", name: "灾难之源", data: 20, possesion: false },
];

export const _dmgBoostItems: Item[] = [
  { id: "141", name: "文学的开端", data: 50, possesion: false },
];

export const _enemyHPItems: Item[] = [
  { id: "074", name: "“黑夜呢喃”", data: -10, possesion: false },
  { id: "073", name: "镶金骨骰", data: -15, possesion: false },
  { id: "075", name: "《大静谧》", data: -20, possesion: false },
  { id: "140", name: "“苦痛的快乐”", data: -15, possesion: false },
  { id: "233", name: "血税之谜", data: -35, possesion: false },
  { id: "232", name: "滚动先祖", data: 30, possesion: false },
  { id: "252", name: "阿纳萨羯磨", data: 50, possesion: false },
  { id: "-1", name: "奇观年代", data: 50, possesion: false },
  { name: "探索层数", data: 20, possesion: false, inputNumber: 1 },
];

export const _enemyDefItems: Item[] = [
  { id: "070", name: "残破合影", data: -12, possesion: false },
  { id: "071", name: "恐鱼干", data: -21, possesion: false },
  { id: "072", name: "迷迭香之拥", data: -30, possesion: false },
];
