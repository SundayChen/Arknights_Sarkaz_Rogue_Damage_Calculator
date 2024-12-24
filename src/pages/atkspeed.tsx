import ItemCard from "@/components/item-card";
import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import { Item } from "@/models/item";
import { Box, Text, Wrap } from "@chakra-ui/react";
import { useContext } from "react";

const AttackSpeedPage = () => {
  const dataCtx = useContext(DataContext);
  const itemCtx = useContext(ItemContext);

  const onAtkSpeedCheckChange = (item: Item, index: number) => {
    if (itemCtx.atkSpeedItems[index].possesion) {
      dataCtx.setAtkSpeed(
        dataCtx.atkSpeed - item.data * (item.inputNumber ?? 1)
      );
    } else {
      dataCtx.setAtkSpeed(
        dataCtx.atkSpeed + item.data * (item.inputNumber ?? 1)
      );
    }
    itemCtx.setAtkSpeedItems(
      itemCtx.atkSpeedItems.map((i, idx) => {
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

  const onAtkSpeedNumberInputChange = (value: string, index: number) => {
    if (!Number.parseInt(value)) return;
    const old_atkSpeed =
      dataCtx.atkSpeed -
      itemCtx.atkSpeedItems[index].data *
        (itemCtx.atkSpeedItems[index].inputNumber ?? 1);
    itemCtx.setAtkSpeedItems(
      itemCtx.atkSpeedItems.map((i, idx) => {
        if (idx === index) {
          return {
            ...i,
            inputNumber: Number.parseInt(value),
          };
        }
        return i;
      })
    );
    dataCtx.setAtkSpeed(
      old_atkSpeed + itemCtx.atkSpeedItems[index].data * Number.parseInt(value)
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
        {itemCtx.atkSpeedItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onAtkSpeedCheckChange}
            onNumberInputChange={onAtkSpeedNumberInputChange}
          />
        ))}
      </Wrap>

      <Text mt="auto" fontSize={24}>
        攻速: +{dataCtx.atkSpeed}
      </Text>
    </Box>
  );
};

export default AttackSpeedPage;
