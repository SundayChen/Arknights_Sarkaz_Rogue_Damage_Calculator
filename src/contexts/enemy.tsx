import React, { createContext, useState } from "react";

interface EnemyContextProps {
  name: string;
  HP: number;
  def: number;
  res: number;

  defPercent: number;
  defReduceNum: number;
  resPercent: number;
  resReduceNum: number;

  setName: (name: string) => void;
  setHP: (HP: number) => void;
  setDef: (def: number) => void;
  setRes: (res: number) => void;

  setDefPercent: (defReducePercent: number) => void;
  setDefReduceNum: (defReduceNum: number) => void;
  setResPercent: (resReducePercent: number) => void;
  setResReduceNum: (resReduceNum: number) => void;

  clear: () => void;
}

const EnemyContext = createContext<EnemyContextProps>({
  name: "",
  HP: 0,
  def: 0,
  res: 0,
  defPercent: 0,
  defReduceNum: 0,
  resPercent: 0,
  resReduceNum: 0,

  setName: () => {},
  setHP: () => {},
  setDef: () => {},
  setRes: () => {},
  setDefPercent: () => {},
  setDefReduceNum: () => {},
  setResPercent: () => {},
  setResReduceNum: () => {},

  clear: () => {},
});

export const EnemyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>("奎隆");
  const [HP, setHP] = useState<number>(360000);
  const [def, setDef] = useState<number>(2400);
  const [res, setRes] = useState<number>(75);

  const [defPercent, setDefPercent] = useState<number>(100);
  const [defReduceNum, setDefReduceNum] = useState<number>(0);
  const [resPercent, setResPercent] = useState<number>(100);
  const [resReduceNum, setResReduceNum] = useState<number>(0);

  const clear = () => {
    setName("奎隆");
    setHP(360000);
    setDef(2400);
    setRes(75);

    setDefPercent(100);
    setDefReduceNum(0);
    setResPercent(100);
    setResReduceNum(0);
  };

  const contextValue = {
    name,
    HP,
    def,
    res,

    defPercent,
    defReduceNum,
    resPercent,
    resReduceNum,

    setName,
    setHP,
    setDef,
    setRes,

    setDefPercent,
    setDefReduceNum,
    setResPercent,
    setResReduceNum,

    clear,
  };

  return (
    <EnemyContext.Provider value={contextValue}>
      {children}
    </EnemyContext.Provider>
  );
};

export default EnemyContext;
