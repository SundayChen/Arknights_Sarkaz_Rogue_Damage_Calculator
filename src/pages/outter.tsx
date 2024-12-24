import ItemCard from "@/components/item-card";
import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import { Item } from "@/models/item";
import { Box, HStack, Text, Wrap } from "@chakra-ui/react";
import { useContext } from "react";

const OutterPage = () => {
  const dataCtx = useContext(DataContext);
  const itemCtx = useContext(ItemContext);

  const onOutterCheckChange = (item: Item, index: number) => {
    if (itemCtx.outterItems[index].possesion) {
      dataCtx.setOutter(dataCtx.outter - item.data * (item.inputNumber ?? 1));
    } else {
      dataCtx.setOutter(dataCtx.outter + item.data * (item.inputNumber ?? 1));
    }
    itemCtx.setOutterItems(
      itemCtx.outterItems.map((i, idx) => {
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

  const onMeleeOutterCheckChange = (item: Item, index: number) => {
    if (itemCtx.meleeOutterItems[index].possesion) {
      dataCtx.setMeleeOutter(dataCtx.meleeOutter - item.data);
    } else {
      dataCtx.setMeleeOutter(dataCtx.meleeOutter + item.data);
    }
    itemCtx.setMeleeOutterItems(
      itemCtx.meleeOutterItems.map((i, idx) => {
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

  const onRangedOutterCheckChange = (item: Item, index: number) => {
    if (itemCtx.rangedOutterItems[index].possesion) {
      dataCtx.setRangedOutter(dataCtx.rangedOutter - item.data);
    } else {
      dataCtx.setRangedOutter(dataCtx.rangedOutter + item.data);
    }
    itemCtx.setRangedOutterItems(
      itemCtx.rangedOutterItems.map((i, idx) => {
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

  const onOutterNumberInputChange = (value: string, index: number) => {
    if (!Number.parseInt(value)) return;
    const old_outter =
      dataCtx.outter -
      itemCtx.outterItems[index].data *
        (itemCtx.outterItems[index].inputNumber ?? 0);
    itemCtx.setOutterItems(
      itemCtx.outterItems.map((i, idx) => {
        if (idx === index) {
          return {
            ...i,
            inputNumber: Number.parseInt(value),
          };
        }
        return i;
      })
    );
    dataCtx.setOutter(
      old_outter + itemCtx.outterItems[index].data * Number.parseInt(value)
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      h="100%"
      w="100%"
      p={3}
      alignItems="center"
      justifyContent="center"
    >
      <Wrap flex={1}>
        {itemCtx.outterItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onOutterCheckChange}
            onNumberInputChange={onOutterNumberInputChange}
          />
        ))}

        {itemCtx.meleeOutterItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onMeleeOutterCheckChange}
          />
        ))}

        {itemCtx.rangedOutterItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onRangedOutterCheckChange}
          />
        ))}
      </Wrap>

      <HStack mt="auto" fontSize={24} spacing={10}>
        <Text>局外加攻: {dataCtx.outter}%</Text>
        <Text>近战加攻：{dataCtx.meleeOutter}%</Text>
        <Text>远程加攻：{dataCtx.rangedOutter}%</Text>
      </HStack>
    </Box>
  );
};

export default OutterPage;
