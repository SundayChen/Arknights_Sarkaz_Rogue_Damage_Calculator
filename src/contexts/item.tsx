import {
  Item,
  _ADBoostItems,
  _APBoostItems,
  _APBoostMultiItems,
  _atkSpeedItems,
  _dmgBoostItems,
  _enemyDefItems,
  _enemyHPItems,
  _innerItems,
  _meleeOutterItems,
  _outterItems,
  _rangedOutterItems,
  _skillRecoveryItems,
} from "@/models/item";
import React, { createContext, useState } from "react";

interface ItemContextProps {
  outterItems: Item[];
  meleeOutterItems: Item[];
  rangedOutterItems: Item[];
  innerItems: Item[];
  skillRecoveryItems: Item[];
  atkSpeedItems: Item[];
  ADBoostItems: Item[];
  APBoostItems: Item[];
  APBoostMultiItems: Item[];
  dmgBoostItems: Item[];
  enemyHPItems: Item[];
  enemyDefItems: Item[];

  setOutterItems: (items: Item[]) => void;
  setMeleeOutterItems: (items: Item[]) => void;
  setRangedOutterItems: (items: Item[]) => void;
  setInnerItems: (items: Item[]) => void;
  setSkillRecoveryItems: (items: Item[]) => void;
  setAtkSpeedItems: (items: Item[]) => void;
  setADBoostItems: (items: Item[]) => void;
  setAPBoostItems: (items: Item[]) => void;
  setAPBoostMultiItems: (items: Item[]) => void;
  setDmgBoostItems: (items: Item[]) => void;
  setEnemyHPItems: (items: Item[]) => void;
  setEnemyDefItems: (items: Item[]) => void;
}

const ItemContext = createContext<ItemContextProps>({
  outterItems: [],
  meleeOutterItems: [],
  rangedOutterItems: [],
  innerItems: [],
  skillRecoveryItems: [],
  atkSpeedItems: [],
  ADBoostItems: [],
  APBoostItems: [],
  APBoostMultiItems: [],
  dmgBoostItems: [],
  enemyHPItems: [],
  enemyDefItems: [],

  setOutterItems: () => {},
  setMeleeOutterItems: () => {},
  setRangedOutterItems: () => {},
  setInnerItems: () => {},
  setSkillRecoveryItems: () => {},
  setAtkSpeedItems: () => {},
  setADBoostItems: () => {},
  setAPBoostItems: () => {},
  setAPBoostMultiItems: () => {},
  setDmgBoostItems: () => {},
  setEnemyHPItems: () => {},
  setEnemyDefItems: () => {},
});

export const ItemContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [outterItems, setOutterItems] = useState<Item[]>(_outterItems);
  const [meleeOutterItems, setMeleeOutterItems] =
    useState<Item[]>(_meleeOutterItems);
  const [rangedOutterItems, setRangedOutterItems] =
    useState<Item[]>(_rangedOutterItems);
  const [innerItems, setInnerItems] = useState<Item[]>(_innerItems);
  const [skillRecoveryItems, setSkillRecoveryItems] =
    useState<Item[]>(_skillRecoveryItems);
  const [atkSpeedItems, setAtkSpeedItems] = useState<Item[]>(_atkSpeedItems);
  const [ADBoostItems, setADBoostItems] = useState<Item[]>(_ADBoostItems);
  const [APBoostItems, setAPBoostItems] = useState<Item[]>(_APBoostItems);
  const [APBoostMultiItems, setAPBoostMultiItems] =
    useState<Item[]>(_APBoostMultiItems);
  const [dmgBoostItems, setDmgBoostItems] = useState<Item[]>(_dmgBoostItems);
  const [enemyHPItems, setEnemyHPItems] = useState<Item[]>(_enemyHPItems);
  const [enemyDefItems, setEnemyDefItems] = useState<Item[]>(_enemyDefItems);

  const contextValue = {
    outterItems,
    meleeOutterItems,
    rangedOutterItems,
    innerItems,
    skillRecoveryItems,
    atkSpeedItems,
    ADBoostItems,
    APBoostItems,
    APBoostMultiItems,
    dmgBoostItems,
    enemyHPItems,
    enemyDefItems,

    setOutterItems,
    setMeleeOutterItems,
    setRangedOutterItems,
    setInnerItems,
    setSkillRecoveryItems,
    setAtkSpeedItems,
    setADBoostItems,
    setAPBoostItems,
    setAPBoostMultiItems,
    setDmgBoostItems,
    setEnemyHPItems,
    setEnemyDefItems,
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export default ItemContext;
