export interface Item {
  name: string;
  data: number;
  possesion: boolean;
  inputNumber?: number;
}

export const _outterItems: Item[] = [
  { name: "橙味风暴", data: 7, possesion: false },
  { name: "尖叫樱桃", data: 8, possesion: false },
  { name: "皮特水果什锦", data: 7, possesion: false },
  { name: "解约协议", data: 7, possesion: false },
  { name: "死仇时代的恨意", data: 20, possesion: false },
  { name: "统帅肖像", data: 10, possesion: false },
  { name: "统帅肖像(Boss)", data: 30, possesion: false },
  { name: "宁静之谜", data: -25, possesion: false },
  { name: "老蒲扇", data: 10, possesion: false, inputNumber: 0 },
  { name: "束灵骨", data: 3, possesion: false, inputNumber: 0 },
  { name: "生命熔炉之薪", data: 5, possesion: false, inputNumber: 0 },
  { name: "圆石祭坛", data: 5, possesion: false, inputNumber: 0 },
];

export const _meleeOutterItems: Item[] = [
  { name: "皇帝的恩宠", data: 15, possesion: false },
  { name: "贵族刺剑", data: 25, possesion: false },
  { name: "老近卫军之锋", data: 35, possesion: false },
];

export const _rangedOutterItems: Item[] = [
  { name: "显圣吊坠", data: 25, possesion: false },
  { name: "银餐叉", data: 25, possesion: false },
  { name: "损坏的左轮弹巢", data: 35, possesion: false },
];

export const _innerItems: Item[] = [
  { name: "古乔治营养原浆", data: 30, possesion: false },
  { name: "诸王的冠冕(<3)", data: 50, possesion: false },
  { name: "诸王的冠冕(>=3)", data: 150, possesion: false },
  { name: "岩角号", data: 20, possesion: false, inputNumber: 0 },
];

export const _skillRecoveryItems: Item[] = [
  { name: "香草沙士汽水", data: 20, possesion: false },
  { name: "羽兽肝酱", data: 35, possesion: false },
  { name: "迷梦香精", data: 50, possesion: false },
  { name: "国王的延伸", data: 50, possesion: false },
];

export const _atkSpeedItems: Item[] = [
  { name: "凉拌海草", data: 7, possesion: false },
  { name: "咖啡平原咖啡糖", data: 8, possesion: false },
  { name: "古旧乐谱残章", data: 6, possesion: false },
  { name: "国王的新枪", data: 50, possesion: false },
  { name: "私人巫术终端", data: 35, possesion: false },
  { name: "丝契之谜", data: 50, possesion: false },
  { name: "Friston.P", data: 5, possesion: false, inputNumber: 0 },
  { name: "投币玩具", data: 3, possesion: false, inputNumber: 0 },
  { name: "骑士戒律·新编", data: 5, possesion: false, inputNumber: 0 },
  { name: "金酒之杯", data: 7, possesion: false, inputNumber: 0 },
];

export const _ADBoostItems: Item[] = [
  { name: "锈蚀刀片", data: 15, possesion: false },
  { name: "赶车夫的长鞭", data: 25, possesion: false },
  { name: "“复仇者”", data: 35, possesion: false },
];

export const _APBoostItems: Item[] = [
  { name: "制式防暴用具", data: 20, possesion: false },
  { name: "皇帝的收藏", data: 30, possesion: false },
  { name: "“璀璨悲泣”", data: 40, possesion: false },
  { name: "讴歌者面纱", data: 10, possesion: false },
  { name: "灾难之源", data: 20, possesion: false },
];

export const _dmgBoostItems: Item[] = [
  { name: "文学的开端", data: 50, possesion: false },
];

export const _enemyHPItems: Item[] = [
  { name: "“黑夜呢喃”", data: -10, possesion: false },
  { name: "镶金骨骰", data: -15, possesion: false },
  { name: "《大静谧》", data: -20, possesion: false },
  { name: "“苦痛的快乐”", data: -15, possesion: false },
  { name: "血税之谜", data: -35, possesion: false },
  { name: "滚动先祖", data: 30, possesion: false },
  { name: "阿纳萨羯磨", data: 50, possesion: false },
  { name: "奇观年代", data: 50, possesion: false },
  { name: "探索层数", data: 20, possesion: false, inputNumber: 1 },
];

export const _enemyDefItems: Item[] = [
  { name: "残破合影", data: -12, possesion: false },
  { name: "恐鱼干", data: -21, possesion: false },
  { name: "迷迭香之拥", data: -30, possesion: false },
];
