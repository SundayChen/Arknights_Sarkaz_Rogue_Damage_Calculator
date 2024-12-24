import ItemCard from "@/components/item-card";
import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import { Item } from "@/models/item";
import { Box, HStack, Text, Wrap } from "@chakra-ui/react";
import { useContext } from "react";

const DamageBoostPage = () => {
  const dataCtx = useContext(DataContext);
  const itemCtx = useContext(ItemContext);

  const onADBoostCheckChange = (item: Item, index: number) => {
    if (itemCtx.ADBoostItems[index].possesion) {
      dataCtx.setADBoost(dataCtx.ADBoost - item.data);
    } else {
      dataCtx.setADBoost(dataCtx.ADBoost + item.data);
    }
    itemCtx.setADBoostItems(
      itemCtx.ADBoostItems.map((i, idx) => {
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

  const onAPBoostCheckChange = (item: Item, index: number) => {
    if (itemCtx.APBoostItems[index].possesion) {
      dataCtx.setAPBoost(dataCtx.APBoost - item.data);
    } else {
      dataCtx.setAPBoost(dataCtx.APBoost + item.data);
    }
    itemCtx.setAPBoostItems(
      itemCtx.APBoostItems.map((i, idx) => {
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

  const onDmgBoostCheckChange = (item: Item, index: number) => {
    if (itemCtx.dmgBoostItems[index].possesion) {
      dataCtx.setAPBoost(dataCtx.APBoost / (1 + item.data / 100));
      dataCtx.setADBoost(dataCtx.ADBoost / (1 + item.data / 100));
    } else {
      dataCtx.setAPBoost(dataCtx.APBoost * (1 + item.data / 100));
      dataCtx.setADBoost(dataCtx.ADBoost * (1 + item.data / 100));
    }
    itemCtx.setDmgBoostItems(
      itemCtx.dmgBoostItems.map((i, idx) => {
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
        {itemCtx.ADBoostItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onADBoostCheckChange}
          />
        ))}

        {itemCtx.APBoostItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onAPBoostCheckChange}
          />
        ))}

        {itemCtx.dmgBoostItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onDmgBoostCheckChange}
          />
        ))}
      </Wrap>

      <HStack mt="auto" fontSize={24} spacing={10}>
        <Text>物理伤害: {parseFloat(dataCtx.ADBoost.toFixed(3))}%</Text>
        <Text>法术伤害：{parseFloat(dataCtx.APBoost.toFixed(3))}%</Text>
      </HStack>
    </Box>
  );
};

export default DamageBoostPage;
