import React, { createContext, useState } from "react";

interface EnemySetContextProps {
  definedHP: number;
  definedDef: number;
  definedRes: number;
  selectedEnemy: number;

  isTheresis: boolean;
  TheresisDmgReduction: number;

  setDefinedHP: (HP: number) => void;
  setDefinedDef: (def: number) => void;
  setDefinedRes: (res: number) => void;
  setSelectedEnemy: (selectedEnemy: number) => void;

  setIsTheresis: (isTheresis: boolean) => void;
  setTheresisDmgReduction: (TheresisDmgReduction: number) => void;
}

const EnemySetContext = createContext<EnemySetContextProps>({
  definedHP: 0,
  definedDef: 0,
  definedRes: 0,
  selectedEnemy: 0,

  isTheresis: false,
  TheresisDmgReduction: 0,

  setDefinedHP: () => {},
  setDefinedDef: () => {},
  setDefinedRes: () => {},
  setSelectedEnemy: () => {},

  setIsTheresis: () => {},
  setTheresisDmgReduction: () => {},
});

export const EnemySetContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [definedHP, setDefinedHP] = useState<number>(80000);
  const [definedDef, setDefinedDef] = useState<number>(0);
  const [definedRes, setDefinedRes] = useState<number>(0);
  const [selectedEnemy, setSelectedEnemy] = useState<number>(0);

  const [isTheresis, setIsTheresis] = useState<boolean>(false);
  const [TheresisDmgReduction, setTheresisDmgReduction] = useState<number>(90);

  const contextValue = {
    definedHP,
    definedDef,
    definedRes,
    selectedEnemy,

    isTheresis,
    TheresisDmgReduction,

    setDefinedHP,
    setDefinedDef,
    setDefinedRes,
    setSelectedEnemy,

    setIsTheresis,
    setTheresisDmgReduction,
  };

  return (
    <EnemySetContext.Provider value={contextValue}>
      {children}
    </EnemySetContext.Provider>
  );
};

export default EnemySetContext;
