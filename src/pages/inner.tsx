import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import {
  Wrap,
  Card,
  CardBody,
  HStack,
  Checkbox,
  Box,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useContext } from "react";

const InnerPage = () => {
  const dataCtx = useContext(DataContext);
  const itemCtx = useContext(ItemContext);

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
        {itemCtx.innerItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
                      if (itemCtx.innerItems[index].possesion) {
                        dataCtx.setInner(
                          dataCtx.inner - item.data * (item.inputNumber ?? 1)
                        );
                      } else {
                        dataCtx.setInner(
                          dataCtx.inner + item.data * (item.inputNumber ?? 1)
                        );
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
                    }}
                  />
                </HStack>
                {item.inputNumber !== undefined && item.possesion && (
                  <NumberInput
                    mt={1}
                    borderColor="gray.400"
                    size="sm"
                    min={0}
                    value={item.inputNumber}
                    onChange={(value) => {
                      const old_inner =
                        dataCtx.inner - item.data * (item.inputNumber ?? 0);
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
                        old_inner + item.data * Number.parseInt(value)
                      );
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                )}
              </CardBody>
            </Card>
          );
        })}

        {itemCtx.skillRecoveryItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
                      if (itemCtx.skillRecoveryItems[index].possesion) {
                        dataCtx.setSkillRecovery(
                          dataCtx.skillRecovery - item.data
                        );
                      } else {
                        dataCtx.setSkillRecovery(
                          dataCtx.skillRecovery + item.data
                        );
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
                    }}
                  />
                </HStack>
              </CardBody>
            </Card>
          );
        })}
      </Wrap>
      <HStack mt="auto" fontSize={24} spacing={10}>
        <Text>局内加攻: {dataCtx.inner}%</Text>
        <Text>技力回复：+{dataCtx.skillRecovery / 100}</Text>
      </HStack>
    </Box>
  );
};

export default InnerPage;
