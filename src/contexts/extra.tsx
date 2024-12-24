import React, { createContext, useState } from "react";

interface ExtraContextProps {
  selectedSkill: number[];
  extraOutters: number[];
  extraInners: number[];
  extraAdds: number[];
  extraAtkSpeeds: number[];
  extraBoosts: number[];

  existsLogos: boolean;
  existsTexas: boolean;

  setSelectedSkill: (selectedSkill: number[]) => void;
  setExtraOutters: (extraOutters: number[]) => void;
  setExtraInners: (extraInners: number[]) => void;
  setExtraAdds: (extraAdds: number[]) => void;
  setExtraAtkSpeeds: (extraAtkSpeed: number[]) => void;
  setExtraBoosts: (extraBoost: number[]) => void;

  setExistsLogos: (existsLogos: boolean) => void;
  setExistsTexas: (existsTexas: boolean) => void;
}

const ExtraContext = createContext<ExtraContextProps>({
  selectedSkill: [],
  extraOutters: [],
  extraInners: [],
  extraAdds: [],
  extraAtkSpeeds: [],
  extraBoosts: [],

  existsLogos: false,
  existsTexas: false,

  setSelectedSkill: () => {},
  setExtraOutters: () => {},
  setExtraInners: () => {},
  setExtraAdds: () => {},
  setExtraAtkSpeeds: () => {},
  setExtraBoosts: () => {},

  setExistsLogos: () => {},
  setExistsTexas: () => {},
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

  const [existsLogos, setExistsLogos] = useState<boolean>(false);
  const [existsTexas, setExistsTexas] = useState<boolean>(false);

  const contextValue = {
    selectedSkill,
    extraOutters,
    extraInners,
    extraAdds,
    extraAtkSpeeds,
    extraBoosts,

    existsLogos,
    existsTexas,

    setSelectedSkill,
    setExtraOutters,
    setExtraInners,
    setExtraAdds,
    setExtraAtkSpeeds,
    setExtraBoosts,

    setExistsLogos,
    setExistsTexas,
  };

  return (
    <ExtraContext.Provider value={contextValue}>
      {children}
    </ExtraContext.Provider>
  );
};

export default ExtraContext;
