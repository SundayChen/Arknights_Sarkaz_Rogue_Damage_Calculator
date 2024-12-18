import React, { createContext, useState } from "react";

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
});

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [outter, setOutter] = useState<number>(20);
  const [meleeOutter, setMeleeOutter] = useState<number>(0);
  const [rangedOutter, setRangedOutter] = useState<number>(0);
  const [inner, setInner] = useState<number>(0);
  const [skillRecovery, setSkillRecovery] = useState<number>(0);
  const [atkSpeed, setAtkSpeed] = useState<number>(0);
  const [ADBoost, setADBoost] = useState<number>(100);
  const [APBoost, setAPBoost] = useState<number>(100);
  const [enemyHP, setEnemyHP] = useState<number>(120 / 0.9);
  const [enemyDef, setEnemyDef] = useState<number>(100);

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
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContext;
