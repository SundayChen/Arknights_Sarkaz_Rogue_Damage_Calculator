import { Item } from "@/models/item";
import {
  Card,
  CardBody,
  Checkbox,
  HStack,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";

interface ItemCardProps {
  item: Item;
  index: number;
  onCheckChange: (item: Item, index: number) => void;
  onNumberInputChange?: (value: string, index: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  index,
  onCheckChange,
  onNumberInputChange = () => {},
}) => {
  return (
    <Card width={180}>
      <CardBody p={3}>
        <HStack>
          {/* <Image src="http://localhost:3000/images/items/001.png" w={10} /> */}
          <Text key={index}>{item.name}</Text>
          <Checkbox
            borderColor="gray.300"
            isChecked={item.possesion}
            onChange={() => {
              onCheckChange(item, index);
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
              onNumberInputChange(value, index);
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
};

export default ItemCard;
