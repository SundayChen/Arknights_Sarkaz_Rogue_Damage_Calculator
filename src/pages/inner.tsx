import ItemCard from "@/components/item-card";
import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import { Item } from "@/models/item";
import { Box, HStack, Text, Wrap } from "@chakra-ui/react";
import { useContext } from "react";

const InnerPage = () => {
  const dataCtx = useContext(DataContext);
  const itemCtx = useContext(ItemContext);

  const onInnerCheckChange = (item: Item, index: number) => {
    if (itemCtx.innerItems[index].possesion) {
      dataCtx.setInner(dataCtx.inner - item.data * (item.inputNumber ?? 1));
    } else {
      dataCtx.setInner(dataCtx.inner + item.data * (item.inputNumber ?? 1));
    }
    itemCtx.setInnerItems(
      itemCtx.innerItems.map((i, idx) => {
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

  const onSkillRecoveryCheckChange = (item: Item, index: number) => {
    if (itemCtx.skillRecoveryItems[index].possesion) {
      dataCtx.setSkillRecovery(dataCtx.skillRecovery - item.data);
    } else {
      dataCtx.setSkillRecovery(dataCtx.skillRecovery + item.data);
    }
    itemCtx.setSkillRecoveryItems(
      itemCtx.skillRecoveryItems.map((i, idx) => {
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

  const onInnerNumberInputChange = (value: string, index: number) => {
    if (!Number.parseInt(value)) return;
    const old_inner =
      dataCtx.inner -
      itemCtx.innerItems[index].data *
        (itemCtx.innerItems[index].inputNumber ?? 0);
    itemCtx.setInnerItems(
      itemCtx.innerItems.map((i, idx) => {
        if (idx === index) {
          return {
            ...i,
            inputNumber: Number.parseInt(value),
          };
        }
        return i;
      })
    );
    dataCtx.setInner(
      old_inner + itemCtx.innerItems[index].data * Number.parseInt(value)
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
        {itemCtx.innerItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onInnerCheckChange}
            onNumberInputChange={onInnerNumberInputChange}
          />
        ))}

        {itemCtx.skillRecoveryItems.map((item, index) => (
          <ItemCard
            item={item}
            index={index}
            onCheckChange={onSkillRecoveryCheckChange}
          />
        ))}
      </Wrap>

      <HStack mt="auto" fontSize={24} spacing={10}>
        <Text>局内加攻: {dataCtx.inner}%</Text>
        <Text>技力回复：+{dataCtx.skillRecovery / 100}</Text>
      </HStack>
    </Box>
  );
};

export default InnerPage;
