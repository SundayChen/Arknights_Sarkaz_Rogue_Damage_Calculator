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
    const hits = 32 + Math.round(((30 * 30) / interval - 16) * 4);
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
      107 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 107 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((1.3 * 30) / totalAtkSpeed) * 100);
    const hits_1 = Math.floor((12.5 * 30) / interval);
    const hits_2 = Math.floor((12.5 * 30 * 4) / interval);
    return (
      (attack * 1.25 * 2 - 3 * bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits_1 +
      (attack * 2 - 3 * bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits_2 +
      (attack * 1.85 - bossDef) * Math.round((hits_1 + hits_2) * 0.2775)
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
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const attack =
      Math.round(874 * totalRangedOutter) *
        (2.8 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    return (
      (attack * 2.2 * 1.25 * 2 - bossDef * 3) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        6 +
      (attack * 1.85 - bossDef) * 6
    );
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
      const hits = Math.ceil((30 * 30) / interval);

      const singleHitDmg =
        ((attack * (0.6 * 0.65 + 1) + 165 * 1.6) *
          (100 - bossRes) *
          (dataCtx.APBoost / 100) *
          (extraBoost / 100)) /
        100;
      const darkInjureTakeUp = Math.ceil(25000 / singleHitDmg);
      const darkInjureTimes =
        hits < darkInjureTakeUp
          ? 0
          : (darkInjureTakeUp - 1) * interval * 2 < 15 * 30
          ? 2
          : 1;
      const darkInjurePeroid =
        darkInjureTimes === 0
          ? 0
          : darkInjureTimes === 2
          ? 30 * 30 - 2 * (darkInjureTakeUp - 1) * interval
          : darkInjureTakeUp * interval < 15 * 30
          ? 15 * 30
          : 30 * 30 - (darkInjureTakeUp - 1) * interval;

      return (
        singleHitDmg * hits +
        attack * 0.6 * 0.6 * Math.ceil(darkInjurePeroid / interval) +
        (800 * darkInjurePeroid) / 30
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
    const hits = Math.ceil(((20 * 30) / interval / 4) * 10);
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
      1.1 *
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
    const attack =
      Math.round(454 * totalRangedOutter) *
        (1.8 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((1.3 * 30) / totalAtkSpeed) * 100);
    const hits = Math.round((30 * 30) / interval);
    const explodeTimes = Math.round(hits * 0.1);

    return (
      ((attack *
        (1.1 * (hits - (explodeTimes + 1) * 5) +
          0.65 * 5 * (explodeTimes + 1) +
          explodeTimes * 3.75) *
        (118 - bossRes > 100 ? 100 : 118 - bossRes)) /
        100) *
      (dataCtx.APBoost / 100) *
      (extraBoost / 100) *
      3
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
      8 + Math.round(((16 * 30 - 8 * interval) / (12 + interval * 2)) * 2);
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
    const totalMeleeOutter =
      1 + (dataCtx.outter + dataCtx.meleeOutter + extraOutter) / 100;
    const attack =
      Math.round(410 * totalMeleeOutter) *
        (5 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round((36 / totalAtkSpeed) * 100);
    const hits = Math.round((28 * 30) / interval);
    return (
      (attack * 1.13 * 1.8 - bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits +
      attack * 0.12 * (extraBoost / 100) * hits
    );
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
    const totalMeleeOutter =
      1 + (dataCtx.outter + dataCtx.meleeOutter + extraOutter) / 100;
    const attack =
      Math.round(1831 * totalMeleeOutter) *
        (1 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((2.5 * 30) / totalAtkSpeed) * 100);
    const hits = Math.round((30 * 30) / interval);
    const skillHits = Math.floor(hits / 3);
    return (
      (attack * 1.1 - bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        1.1 *
        (hits - skillHits) +
      (attack * 1.1 * 2.6 - bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        1.1 *
        skillHits
    );
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
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const attack =
      Math.round(870 * totalRangedOutter) *
        (1.08 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      107 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 107 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((2.1 * 30) / totalAtkSpeed) * 100);
    const hits = Math.round((30 * 30) / interval);
    const skillHits = Math.floor(hits / 3);
    return (
      (attack * 1.5 - (bossDef < 165 ? 0 : bossDef - 165) * 2) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits +
      (((attack * 1.8 * skillHits + attack * hits) * (100 - bossRes)) / 100) *
        (dataCtx.APBoost / 100) *
        (extraBoost / 100)
    );
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
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const attack =
      Math.round(870 * totalRangedOutter) *
        (1.63 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      107 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 107 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((2.1 * 1.5 * 30) / totalAtkSpeed) * 100);
    const hits = Math.round((40 * 30) / interval);
    return (
      (attack * 2.5 - (bossDef < 165 ? 0 : bossDef - 165) * 2) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits +
      ((attack * (100 - bossRes)) / 100) *
        (dataCtx.APBoost / 100) *
        (extraBoost / 100) *
        hits
    );
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
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const attack =
      Math.round(460 * totalRangedOutter) *
        (1.8 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      110 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 110 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((1.3 * 30) / totalAtkSpeed) * 100);
    const hits = Math.round((40 * 30) / interval);
    const wolfHits = Math.round((40 * 30 - 49) / interval);

    return (
      ((attack *
        (hits + 4 * 1.21 * (wolfHits - 5) + 4 * 0.65 * 5 + 1.2 * 38) *
        (100 - bossRes)) /
        100) *
      (dataCtx.APBoost / 100) *
      (extraBoost / 100)
    );
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
    label: "逻各斯3(Boss)",
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
    label: "拉普兰德3(4狼)",
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
