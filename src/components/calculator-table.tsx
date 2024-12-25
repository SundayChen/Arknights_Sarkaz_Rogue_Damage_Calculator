import DataContext from "@/contexts/data";
import EnemyContext from "@/contexts/enemy";
import ExtraContext from "@/contexts/extra";
import { Skill } from "@/models/skill";
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  NumberInput,
  NumberInputField,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";

interface CaculatorTableProps {
  skills: Skill[];
}

const CaculatorTable: React.FC<CaculatorTableProps> = ({ skills }) => {
  const extraCtx = useContext(ExtraContext);
  const enemyCtx = useContext(EnemyContext);
  const dataCtx = useContext(DataContext);

  const bossHP = enemyCtx.HP * (dataCtx.enemyHP / 100);
  const bossDef =
    enemyCtx.def < enemyCtx.defReduceNum
      ? 0
      : (((enemyCtx.def - enemyCtx.defReduceNum) * enemyCtx.defPercent) / 100) *
        (dataCtx.enemyDef / 100);
  const bossRes =
    enemyCtx.res < enemyCtx.resReduceNum
      ? 0
      : ((enemyCtx.res - enemyCtx.resReduceNum) * enemyCtx.resPercent) / 100;

  return (
    <TableContainer w="100%" my={3}>
      <Table variant="simple" colorScheme="blackAlpha" w="100%" size="sm">
        <Thead>
          <Tr>
            <Th>干员技能</Th>
            <Th>局外加攻%</Th>
            <Th>局内加攻%</Th>
            <Th>最终加算</Th>
            <Th>攻速</Th>
            <Th>增伤叠乘%</Th>
            <Th isNumeric>总伤</Th>
            <Th isNumeric>比例</Th>
          </Tr>
        </Thead>

        <Tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <Tr key={index}>
              <Td>
                {/* <Select
                  placeholder="选择干员技能"
                  value={extraCtx.selectedSkill[index]}
                  onChange={(e) => {
                    let cur = extraCtx.selectedSkill;
                    cur[index] = Number.parseInt(e.target.value);
                    extraCtx.setSelectedSkill([...cur]);
                  }}
                  borderColor="gray.400"
                  size="sm"
                  maxHeight="200px"
                  overflow="auto"
                >
                  {skills.map((skill) => (
                    <option value={skill.id}>{skill.label}</option>
                  ))}
                </Select> */}
                <Menu closeOnSelect={true}>
                  <MenuButton
                    as={Button}
                    variant="unstyled"
                    rightIcon={<FiChevronDown />}
                    w={32}
                    style={{ textAlign: "left" }}
                  >
                    {extraCtx.selectedSkill[index] !== undefined
                      ? skills[extraCtx.selectedSkill[index]].label
                      : "选择干员技能"}
                  </MenuButton>
                  <MenuList h="200px" overflowY="auto">
                    <MenuOptionGroup
                      type="radio"
                      onChange={(value) => {
                        let cur = extraCtx.selectedSkill;
                        cur[index] = Number.parseInt(value as string);
                        extraCtx.setSelectedSkill([...cur]);
                      }}
                    >
                      {skills.map((skill) => (
                        <MenuItemOption value={skill.id.toString()}>
                          {skill.label}
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Td>

              <Td>
                <NumberInput
                  borderColor="gray.400"
                  size="sm"
                  min={0}
                  w={20}
                  value={extraCtx.extraOutters[index]}
                  onChange={(value) => {
                    let cur = extraCtx.extraOutters;
                    cur[index] = Number.parseInt(value);
                    extraCtx.setExtraOutters([...cur]);
                  }}
                >
                  <NumberInputField />
                </NumberInput>
              </Td>

              <Td>
                <NumberInput
                  borderColor="gray.400"
                  size="sm"
                  min={0}
                  w={20}
                  value={extraCtx.extraInners[index]}
                  onChange={(value) => {
                    let cur = extraCtx.extraInners;
                    cur[index] = Number.parseInt(value);
                    extraCtx.setExtraInners([...cur]);
                  }}
                >
                  <NumberInputField />
                </NumberInput>
              </Td>

              <Td>
                <NumberInput
                  borderColor="gray.400"
                  size="sm"
                  min={0}
                  w={20}
                  value={extraCtx.extraAdds[index]}
                  onChange={(value) => {
                    let cur = extraCtx.extraAdds;
                    cur[index] = Number.parseInt(value);
                    extraCtx.setExtraAdds([...cur]);
                  }}
                >
                  <NumberInputField />
                </NumberInput>
              </Td>

              <Td>
                <NumberInput
                  borderColor="gray.400"
                  size="sm"
                  min={0}
                  w={20}
                  value={extraCtx.extraAtkSpeeds[index]}
                  onChange={(value) => {
                    let cur = extraCtx.extraAtkSpeeds;
                    cur[index] = Number.parseInt(value);
                    extraCtx.setExtraAtkSpeeds([...cur]);
                  }}
                >
                  <NumberInputField />
                </NumberInput>
              </Td>

              <Td>
                <NumberInput
                  borderColor="gray.400"
                  size="sm"
                  min={0}
                  w={20}
                  value={extraCtx.extraBoosts[index]}
                  onChange={(value) => {
                    let cur = extraCtx.extraBoosts;
                    cur[index] = Number.parseInt(value);
                    extraCtx.setExtraBoosts([...cur]);
                  }}
                >
                  <NumberInputField />
                </NumberInput>
              </Td>

              <Td isNumeric>
                {parseFloat(
                  skills[extraCtx.selectedSkill[index]]
                    ?.dmg(
                      extraCtx.extraOutters[index],
                      extraCtx.extraInners[index],
                      extraCtx.extraAdds[index],
                      bossDef,
                      bossRes,
                      extraCtx.extraAtkSpeeds[index],
                      extraCtx.extraBoosts[index]
                    )
                    .toFixed(3)
                )}
              </Td>

              <Td isNumeric>
                {parseFloat(
                  (
                    (skills[extraCtx.selectedSkill[index]]?.dmg(
                      extraCtx.extraOutters[index],
                      extraCtx.extraInners[index],
                      extraCtx.extraAdds[index],
                      bossDef,
                      bossRes,
                      extraCtx.extraAtkSpeeds[index],
                      extraCtx.extraBoosts[index]
                    ) /
                      bossHP) *
                    100
                  ).toFixed(3)
                )}
                %
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CaculatorTable;
