import DataContext from "@/contexts/data";
import { Skill } from "@/models/skill";
import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import CaculatorTable from "./calculator-table";
import EnemyCard from "./enemy-card";

const DamageCalculator = () => {
  const dataCtx = useContext(DataContext);

  const ela3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    return (
      ((Math.round(755 * totalRangedOutter) *
        (1.9 + (dataCtx.inner + extraInner) / 100) +
        extraAdd) *
        1.8 -
        bossDef) *
      (dataCtx.ADBoost / 100) *
      (extraBoost / 100) *
      1.35 *
      40
    );
  };

  const kroos2_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((0.625 * 30) / totalAtkSpeed) * 100);
    const hits = 32 + (Math.round((30 * 30) / interval) - 16) * 4;
    return (
      ((Math.round(608 * totalRangedOutter) *
        (1 + (dataCtx.inner + extraInner) / 100) +
        extraAdd) *
        (0.8 + 0.2 * 1.75) -
        bossDef) *
      (dataCtx.ADBoost / 100) *
      (extraBoost / 100) *
      hits
    );
  };

  const ew2_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const attack =
      Math.round(874 * totalRangedOutter) *
        (1.35 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((1.3 * 30) / totalAtkSpeed) * 100);
    const hits_1 = Math.round((12.5 * 30) / interval);
    const hits_2 = Math.round((12.5 * 30 * 4) / interval);
    return (
      (attack * 1.25 * 2 - 3 * bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits_1 +
      (attack * 2 - 3 * bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits_2 +
      (attack * 1.85 - bossDef) * ((hits_1 + hits_2) * 0.2775)
    );
  };

  const ew3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    return 0;
  };

  const logo3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    {
      const totalRangedOutter =
        1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
      const attack =
        Math.round(855 * totalRangedOutter) *
          (4 + (dataCtx.inner + extraInner) / 100) +
        extraAdd;
      const totalAtkSpeed =
        100 + dataCtx.atkSpeed + extraAtkSpeed > 600
          ? 600
          : 100 + dataCtx.atkSpeed + extraAtkSpeed;
      const interval = Math.round(((1.6 * 30) / totalAtkSpeed) * 100);
      const hits = Math.round((30 * 30) / interval);

      const singleHitDmg =
        ((attack * (0.6 * 0.65 + 1) + 165 * 1.6) * (100 - bossRes)) / 100;
      const darkInjureTakeUp = Math.ceil(12500 / singleHitDmg) * 2;

      return (
        singleHitDmg * (dataCtx.APBoost / 100) * (extraBoost / 100) * hits +
        attack * 0.6 * 0.6 * (hits - darkInjureTakeUp) +
        24000
      );
    }
  };

  const yato1_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalMeleeOutter =
      1 + (dataCtx.outter + dataCtx.meleeOutter + extraOutter) / 100;
    const attack =
      Math.round(725 * totalMeleeOutter) *
        (1.23 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      200 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 200 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((0.93 * 30) / totalAtkSpeed) * 100);
    const hits = (Math.round((20 * 30) / interval) / 4) * 10;
    return (
      (attack - bossDef) * (dataCtx.ADBoost / 100) * (extraBoost / 100) * hits +
      ((attack * 0.2 * (100 - bossRes)) / 100) *
        (dataCtx.APBoost / 100) *
        (extraBoost / 100) *
        hits
    );
  };

  const texas2_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalMeleeOutter =
      1 + (dataCtx.outter + dataCtx.meleeOutter + extraOutter) / 100;
    const attack =
      Math.round(746 * totalMeleeOutter) *
        (1.28 + 0.55 + 0.1 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      110 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 110 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((0.93 * 30) / totalAtkSpeed) * 100);
    const hits = Math.round((10 * 30 * 2) / interval);
    return (
      (((attack * 2.4 + attack * hits) * (100 - bossRes)) / 100) *
      (dataCtx.APBoost / 100) *
      (extraBoost / 100)
    );
  };

  const tachanka2_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalMeleeOutter =
      1 + (dataCtx.outter + dataCtx.meleeOutter + extraOutter) / 100;
    const attack =
      Math.round(716 * totalMeleeOutter) *
        (1 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round((5.85 / totalAtkSpeed) * 100);
    const hits = Math.round((4 * 30) / interval);
    return (
      (attack * (0.15 * 2 + 0.85) - bossDef) *
      (dataCtx.ADBoost / 100) *
      (extraBoost / 100) *
      hits
    );
  };

  const vina3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalMeleeOutter =
      1 + (dataCtx.outter + dataCtx.meleeOutter + extraOutter) / 100;
    const attack =
      Math.round(829 * totalMeleeOutter) *
        (2.9 + 0.08 * 3 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      108 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 108 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round((30 / totalAtkSpeed) * 100);
    const hits = Math.round((25 * 30) / interval);
    return attack * (extraBoost / 100) * hits;
  };

  const goldenglow3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((1.3 * 30) / totalAtkSpeed) * 100);
    const hits = Math.round((30 * 30) / interval) * 3;
    return (
      (((Math.round(454 * totalRangedOutter) *
        (1.8 + (dataCtx.inner + extraInner) / 100) +
        extraAdd) *
        (0.9 + 0.1 * 3.75) *
        (118 - bossRes > 100 ? 100 : 118 - bossRes)) /
        100) *
      (dataCtx.APBoost / 100) *
      (extraBoost / 100) *
      (1.1 * hits * 0.9 + 0.65 * hits * 0.1)
    );
  };

  const ray3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const attack =
      Math.round(1299 * totalRangedOutter) *
        (1.27 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((1.6 * 30) / totalAtkSpeed) * 100);
    const hits =
      8 + Math.floor((16 * 30 - 7 * interval) / (12 + interval * 2)) * 2;
    return (
      (attack * 3.3 * 1.2 - bossDef) *
      1.2 *
      (dataCtx.ADBoost / 100) *
      (extraBoost / 100) *
      hits
    );
  };

  const mlynar3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    return 0;
  };

  const hdl1_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    return 0;
  };

  const ros1_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    return 0;
  };

  const ros2_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    return 0;
  };

  const lappland3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    return 0;
  };

  const Ela3: Skill = {
    id: 0,
    label: "艾拉3(用雷)",
    dmg: ela3_calc,
  };

  const Kroos2: Skill = {
    id: 1,
    label: "寒芒克洛丝2",
    dmg: kroos2_calc,
  };

  const Ew2: Skill = {
    id: 2,
    label: "维什戴尔2",
    dmg: ew2_calc,
  };

  const Ew3: Skill = {
    id: 3,
    label: "维什戴尔3",
    dmg: ew3_calc,
  };

  const Logo3: Skill = {
    id: 4,
    label: "逻各斯3(近似)",
    dmg: logo3_calc,
  };

  const Yato1: Skill = {
    id: 5,
    label: "夜刀1",
    dmg: yato1_calc,
  };

  const Texas2: Skill = {
    id: 6,
    label: "德克萨斯2",
    dmg: texas2_calc,
  };

  const Tachanka2: Skill = {
    id: 7,
    label: "战车2(理论)",
    dmg: tachanka2_calc,
  };

  const Vina3: Skill = {
    id: 8,
    label: "维娜3(3狮)",
    dmg: vina3_calc,
  };

  const Goldenglow3: Skill = {
    id: 9,
    label: "澄闪3",
    dmg: goldenglow3_calc,
  };

  const Ray3: Skill = {
    id: 10,
    label: "莱伊3",
    dmg: ray3_calc,
  };

  const Mlynar3: Skill = {
    id: 11,
    label: "玛恩纳3",
    dmg: mlynar3_calc,
  };

  const Hdl1: Skill = {
    id: 12,
    label: "赫德雷1(30s)",
    dmg: hdl1_calc,
  };

  const Ros1: Skill = {
    id: 13,
    label: "迷迭香1(30s)",
    dmg: ros1_calc,
  };

  const Ros2: Skill = {
    id: 14,
    label: "迷迭香2",
    dmg: ros2_calc,
  };

  const Lappland3: Skill = {
    id: 15,
    label: "拉普兰德3",
    dmg: lappland3_calc,
  };

  const skills: Skill[] = [
    Ela3,
    Kroos2,
    Ew2,
    Ew3,
    Logo3,
    Yato1,
    Texas2,
    Tachanka2,
    Vina3,
    Goldenglow3,
    Ray3,
    Mlynar3,
    Hdl1,
    Ros1,
    Ros2,
    Lappland3,
  ];

  return (
    <Flex direction="column" justify="flex-start" align="center">
      <EnemyCard />
      <CaculatorTable skills={skills} />
    </Flex>
  );
};

export default DamageCalculator;
