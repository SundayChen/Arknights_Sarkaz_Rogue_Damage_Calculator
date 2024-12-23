export interface Skill {
  id: number;
  label: string;
  dmg: (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => number;
}
