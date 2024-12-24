import ItemCard from "@/components/item-card";
import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import { Item } from "@/models/item";
import { Box, HStack, Text, Wrap } from "@chakra-ui/react";
import { useContext } from "react";

const EnemyPage = () => {
  const dataCtx = useContext(DataContext);
  const itemCtx = useContext(ItemContext);

  const onEnemyHPCheckChange = (item: Item, index: number) => {
    if (itemCtx.enemyHPItems[index].possesion) {
      dataCtx.setEnemyHP(
        dataCtx.enemyHP / (1 + item.data / 100) ** (item.inputNumber ?? 1)
      );
    } else {
      dataCtx.setEnemyHP(
        dataCtx.enemyHP * (1 + item.data / 100) ** (item.inputNumber ?? 1)
      );
    }
    itemCtx.setEnemyHPItems(
      itemCtx.enemyHPItems.map((i, idx) => {
        if (idx === index) {
          return {
            ...i,
            possesion: !i.possesion,
          };
        }
        return i;
      })
    );
  };

  const onEnemyDefCheckChange = (item: Item, index: number) => {
    if (itemCtx.enemyDefItems[index].possesion) {
      dataCtx.setEnemyDef(dataCtx.enemyDef / (1 + item.data / 100));
    } else {
      dataCtx.setEnemyDef(dataCtx.enemyDef * (1 + item.data / 100));
    }
    itemCtx.setEnemyDefItems(
      itemCtx.enemyDefItems.map((i, idx) => {
        if (idx === index) {
          return {
            ...i,
            possesion: !i.possesion,
          };
        }
        return i;
      })
    );
  };

  const onEnemyHPNumberInputChange = (value: string, index: number) => {
    if (!Number.parseInt(value)) return;
    const old_HP =
      dataCtx.enemyHP /
      (1 + itemCtx.enemyHPItems[index].data / 100) **
        (itemCtx.enemyHPItems[index].inputNumber ?? 0);
    itemCtx.setEnemyHPItems(
      itemCtx.enemyHPItems.map((i, idx) => {
        if (idx === index) {
          return {
            ...i,
            inputNumber: Number.parseInt(value),
          };
        }
        return i;
      })
    );
    dataCtx.setEnemyHP(
      old_HP *
        (1 + itemCtx.enemyHPItems[index].data / 100) ** Number.parseInt(value)
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      h="100%"
      w="100%"
      p={6}
      alignItems="center"
      justifyContent="center"
    >
      <Wrap flex={1}>
        {itemCtx.enemyHPItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onEnemyHPCheckChange}
            onNumberInputChange={onEnemyHPNumberInputChange}
          />
        ))}

        {itemCtx.enemyDefItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onEnemyDefCheckChange}
          />
        ))}
      </Wrap>

      <HStack mt="auto" fontSize={24} spacing={10}>
        <Text>敌人生命: {parseFloat(dataCtx.enemyHP.toFixed(3))}%</Text>
        <Text>敌人防御：{parseFloat(dataCtx.enemyDef.toFixed(3))}%</Text>
      </HStack>
    </Box>
  );
};

export default EnemyPage;
