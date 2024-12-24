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
      dataCtx.setADBoostFlat(dataCtx.ADBoostFlat - item.data);
    } else {
      dataCtx.setADBoostFlat(dataCtx.ADBoostFlat + item.data);
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
      dataCtx.setAPBoostFlat(dataCtx.APBoostFlat - item.data);
    } else {
      dataCtx.setAPBoostFlat(dataCtx.APBoostFlat + item.data);
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

  const onAPBoostMultiCheckChange = (item: Item, index: number) => {
    if (itemCtx.APBoostMultiItems[index].possesion) {
      dataCtx.setAPBoostMulti(
        dataCtx.APBoostMulti / (1 + (item.data * (item.inputNumber ?? 1)) / 100)
      );
    } else {
      dataCtx.setAPBoostMulti(
        dataCtx.APBoostMulti * (1 + (item.data * (item.inputNumber ?? 1)) / 100)
      );
    }
    itemCtx.setAPBoostMultiItems(
      itemCtx.APBoostMultiItems.map((i, idx) => {
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
      dataCtx.setAPBoostMulti(dataCtx.APBoostMulti / (1 + item.data / 100));
      dataCtx.setADBoostMulti(dataCtx.ADBoostMulti / (1 + item.data / 100));
    } else {
      dataCtx.setAPBoostMulti(dataCtx.APBoostMulti * (1 + item.data / 100));
      dataCtx.setADBoostMulti(dataCtx.ADBoostMulti * (1 + item.data / 100));
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

  const onAPBoostMultiInputNumberChange = (value: string, index: number) => {
    if (!Number.parseInt(value)) return;
    const old_APBoostMulti =
      dataCtx.APBoostMulti /
      (1 +
        (itemCtx.APBoostMultiItems[index].data / 100) *
          (itemCtx.APBoostMultiItems[index].inputNumber ?? 0));
    itemCtx.setAPBoostMultiItems(
      itemCtx.APBoostMultiItems.map((i, idx) => {
        if (idx === index) {
          return {
            ...i,
            inputNumber: Number.parseInt(value),
          };
        }
        return i;
      })
    );
    dataCtx.setAPBoostMulti(
      old_APBoostMulti *
        (1 +
          (itemCtx.APBoostMultiItems[index].data * Number.parseInt(value)) /
            100)
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

        {itemCtx.APBoostMultiItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onAPBoostMultiCheckChange}
            onNumberInputChange={onAPBoostMultiInputNumberChange}
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
