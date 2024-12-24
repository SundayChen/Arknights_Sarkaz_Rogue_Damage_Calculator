import React, { createContext, useState } from "react";

interface ExtraContextProps {
  selectedSkill: number[];
  extraOutters: number[];
  extraInners: number[];
  extraAdds: number[];
  extraAtkSpeeds: number[];
  extraBoosts: number[];

  setSelectedSkill: (selectedSkill: number[]) => void;
  setExtraOutters: (extraOutters: number[]) => void;
  setExtraInners: (extraInners: number[]) => void;
  setExtraAdds: (extraAdds: number[]) => void;
  setExtraAtkSpeeds: (extraAtkSpeed: number[]) => void;
  setExtraBoosts: (extraBoost: number[]) => void;
}

const ExtraContext = createContext<ExtraContextProps>({
  selectedSkill: [],
  extraOutters: [],
  extraInners: [],
  extraAdds: [],
  extraAtkSpeeds: [],
  extraBoosts: [],

  setSelectedSkill: () => {},
  setExtraOutters: () => {},
  setExtraInners: () => {},
  setExtraAdds: () => {},
  setExtraAtkSpeeds: () => {},
  setExtraBoosts: () => {},
});

export const ExtraContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSkill, setSelectedSkill] = useState<number[]>([]);
  const [extraOutters, setExtraOutters] = useState<number[]>([
    0, 0, 0, 0, 0, 0,
  ]);
  const [extraInners, setExtraInners] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [extraAdds, setExtraAdds] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [extraAtkSpeeds, setExtraAtkSpeeds] = useState<number[]>([
    0, 0, 0, 0, 0, 0,
  ]);
  const [extraBoosts, setExtraBoosts] = useState<number[]>([
    100, 100, 100, 100, 100, 100,
  ]);

  const contextValue = {
    selectedSkill,
    extraOutters,
    extraInners,
    extraAdds,
    extraAtkSpeeds,
    extraBoosts,

    setSelectedSkill,
    setExtraOutters,
    setExtraInners,
    setExtraAdds,
    setExtraAtkSpeeds,
    setExtraBoosts,
  };

  return (
    <ExtraContext.Provider value={contextValue}>
      {children}
    </ExtraContext.Provider>
  );
};

export default ExtraContext;
