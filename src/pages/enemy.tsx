import DataContext from "@/contexts/data";
import ItemContext from "@/contexts/item";
import {
  Box,
  Card,
  CardBody,
  Checkbox,
  HStack,
  Wrap,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useContext } from "react";

const EnemyPage = () => {
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
        {itemCtx.enemyHPItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
                      if (itemCtx.enemyHPItems[index].possesion) {
                        dataCtx.setEnemyHP(
                          dataCtx.enemyHP /
                            (1 + item.data / 100) ** (item.inputNumber ?? 1)
                        );
                      } else {
                        dataCtx.setEnemyHP(
                          dataCtx.enemyHP *
                            (1 + item.data / 100) ** (item.inputNumber ?? 1)
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
                    }}
                  />
                </HStack>
                {item.inputNumber !== undefined && item.possesion && (
                  <NumberInput
                    mt={1}
                    borderColor="gray.400"
                    size="sm"
                    min={1}
                    value={item.inputNumber}
                    onChange={(value) => {
                      if (!Number.parseInt(value)) return;
                      const old_HP =
                        dataCtx.enemyHP /
                        (1 + item.data / 100) ** (item.inputNumber ?? 0);
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
                        old_HP * (1 + item.data / 100) ** Number.parseInt(value)
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

        {itemCtx.enemyDefItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
                      if (itemCtx.enemyDefItems[index].possesion) {
                        dataCtx.setEnemyDef(
                          dataCtx.enemyDef / (1 + item.data / 100)
                        );
                      } else {
                        dataCtx.setEnemyDef(
                          dataCtx.enemyDef * (1 + item.data / 100)
                        );
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
                    }}
                  />
                </HStack>
              </CardBody>
            </Card>
          );
        })}
      </Wrap>
      <HStack mt="auto" fontSize={24} spacing={10}>
        <Text>敌人生命: {parseFloat(dataCtx.enemyHP.toFixed(3))}%</Text>
        <Text>敌人防御：{parseFloat(dataCtx.enemyDef.toFixed(3))}%</Text>
      </HStack>
    </Box>
  );
};

export default EnemyPage;
