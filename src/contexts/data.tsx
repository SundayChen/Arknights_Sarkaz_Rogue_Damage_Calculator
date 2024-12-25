import React, { createContext, useEffect, useState } from "react";

interface DataContextProps {
  outter: number;
  meleeOutter: number;
  rangedOutter: number;
  inner: number;
  skillRecovery: number;
  atkSpeed: number;
  ADBoost: number;
  APBoost: number;
  enemyHP: number;
  enemyDef: number;

  ADBoostFlat: number;
  ADBoostMulti: number;
  APBoostFlat: number;
  APBoostMulti: number;

  setOutter: (value: number) => void;
  setMeleeOutter: (value: number) => void;
  setRangedOutter: (value: number) => void;
  setInner: (value: number) => void;
  setSkillRecovery: (value: number) => void;
  setAtkSpeed: (value: number) => void;
  setADBoost: (value: number) => void;
  setAPBoost: (value: number) => void;
  setEnemyHP: (value: number) => void;
  setEnemyDef: (value: number) => void;

  setADBoostFlat: (value: number) => void;
  setADBoostMulti: (value: number) => void;
  setAPBoostFlat: (value: number) => void;
  setAPBoostMulti: (value: number) => void;
}

const DataContext = createContext<DataContextProps>({
  outter: 0,
  meleeOutter: 0,
  rangedOutter: 0,
  inner: 0,
  skillRecovery: 0,
  atkSpeed: 0,
  ADBoost: 0,
  APBoost: 0,
  enemyHP: 0,
  enemyDef: 0,

  ADBoostFlat: 0,
  ADBoostMulti: 0,
  APBoostFlat: 0,
  APBoostMulti: 0,

  setOutter: () => {},
  setMeleeOutter: () => {},
  setRangedOutter: () => {},
  setInner: () => {},
  setSkillRecovery: () => {},
  setAtkSpeed: () => {},
  setADBoost: () => {},
  setAPBoost: () => {},
  setEnemyHP: () => {},
  setEnemyDef: () => {},

  setADBoostFlat: () => {},
  setADBoostMulti: () => {},
  setAPBoostFlat: () => {},
  setAPBoostMulti: () => {},
});

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [outter, setOutter] = useState<number>(0);
  const [meleeOutter, setMeleeOutter] = useState<number>(0);
  const [rangedOutter, setRangedOutter] = useState<number>(0);
  const [inner, setInner] = useState<number>(0);
  const [skillRecovery, setSkillRecovery] = useState<number>(0);
  const [atkSpeed, setAtkSpeed] = useState<number>(0);
  const [ADBoost, setADBoost] = useState<number>(100);
  const [APBoost, setAPBoost] = useState<number>(100);
  const [enemyHP, setEnemyHP] = useState<number>(120 / 0.9);
  const [enemyDef, setEnemyDef] = useState<number>(100);

  const [ADBoostFlat, setADBoostFlat] = useState<number>(0);
  const [ADBoostMulti, setADBoostMulti] = useState<number>(100);
  const [APBoostFlat, setAPBoostFlat] = useState<number>(0);
  const [APBoostMulti, setAPBoostMulti] = useState<number>(100);

  useEffect(() => {
    setADBoost(((100 + ADBoostFlat) * ADBoostMulti) / 100);
  }, [ADBoostFlat, ADBoostMulti]);

  useEffect(() => {
    setAPBoost(((100 + APBoostFlat) * APBoostMulti) / 100);
  }, [APBoostFlat, APBoostMulti]);

  const contextValue = {
    outter,
    meleeOutter,
    rangedOutter,
    inner,
    skillRecovery,
    atkSpeed,
    ADBoost,
    APBoost,
    enemyHP,
    enemyDef,

    ADBoostFlat,
    ADBoostMulti,
    APBoostFlat,
    APBoostMulti,

    setOutter,
    setMeleeOutter,
    setRangedOutter,
    setInner,
    setSkillRecovery,
    setAtkSpeed,
    setADBoost,
    setAPBoost,
    setEnemyHP,
    setEnemyDef,

    setADBoostFlat,
    setADBoostMulti,
    setAPBoostFlat,
    setAPBoostMulti,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContext;
