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

const AttackSpeedPage = () => {
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
        {itemCtx.atkSpeedItems.map((item, index) => {
          return (
            <Card width={180}>
              <CardBody p={3}>
                <HStack>
                  <Text key={index}>{item.name}</Text>
                  <Checkbox
                    borderColor="gray.300"
                    isChecked={item.possesion}
                    onChange={() => {
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
                      const old_atkSpeed =
                        dataCtx.atkSpeed - item.data * (item.inputNumber ?? 0);
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
                        old_atkSpeed + item.data * Number.parseInt(value)
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
      </Wrap>
      <Text mt="auto" fontSize={24}>
        攻速: +{dataCtx.atkSpeed}
      </Text>
    </Box>
  );
};

export default AttackSpeedPage;
