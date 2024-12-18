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
} from "@chakra-ui/react";
import { useContext } from "react";

const DamageBoostPage = () => {
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
        {itemCtx.ADBoostItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
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
                    }}
                  />
                </HStack>
              </CardBody>
            </Card>
          );
        })}

        {itemCtx.APBoostItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
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
                    }}
                  />
                </HStack>
              </CardBody>
            </Card>
          );
        })}

        {itemCtx.dmgBoostItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
                      if (itemCtx.dmgBoostItems[index].possesion) {
                        dataCtx.setAPBoost(
                          dataCtx.APBoost / (1 + item.data / 100)
                        );
                        dataCtx.setADBoost(
                          dataCtx.ADBoost / (1 + item.data / 100)
                        );
                      } else {
                        dataCtx.setAPBoost(
                          dataCtx.APBoost * (1 + item.data / 100)
                        );
                        dataCtx.setADBoost(
                          dataCtx.ADBoost * (1 + item.data / 100)
                        );
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
                    }}
                  />
                </HStack>
              </CardBody>
            </Card>
          );
        })}
      </Wrap>
      <HStack mt="auto" fontSize={24} spacing={10}>
        <Text>物理伤害: {parseFloat(dataCtx.ADBoost.toFixed(3))}%</Text>
        <Text>法术伤害：{parseFloat(dataCtx.APBoost.toFixed(3))}%</Text>
      </HStack>
    </Box>
  );
};

export default DamageBoostPage;
