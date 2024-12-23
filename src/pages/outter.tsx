import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import {
  Box,
  Card,
  CardBody,
  Checkbox,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { useContext } from "react";

const OutterPage = () => {
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
        {itemCtx.outterItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
                      if (itemCtx.outterItems[index].possesion) {
                        dataCtx.setOutter(
                          dataCtx.outter - item.data * (item.inputNumber ?? 1)
                        );
                      } else {
                        dataCtx.setOutter(
                          dataCtx.outter + item.data * (item.inputNumber ?? 1)
                        );
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
                      if (!Number.parseInt(value)) return;
                      const old_outter =
                        dataCtx.outter - item.data * (item.inputNumber ?? 0);
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
                        old_outter + item.data * Number.parseInt(value)
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

        {itemCtx.meleeOutterItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
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
                    }}
                  />
                </HStack>
              </CardBody>
            </Card>
          );
        })}

        {itemCtx.rangedOutterItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
                      if (itemCtx.rangedOutterItems[index].possesion) {
                        dataCtx.setRangedOutter(
                          dataCtx.rangedOutter - item.data
                        );
                      } else {
                        dataCtx.setRangedOutter(
                          dataCtx.rangedOutter + item.data
                        );
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
                    }}
                  />
                </HStack>
              </CardBody>
            </Card>
          );
        })}
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
