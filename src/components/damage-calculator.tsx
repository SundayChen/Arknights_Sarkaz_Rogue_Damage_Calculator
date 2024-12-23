import DataContext from "@/contexts/data";
import ExtraContext from "@/contexts/extra";
import { Skill } from "@/models/skill";
import {
  Flex,
  HStack,
  NumberInput,
  NumberInputField,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";

const DamageCalculator = () => {
  const dataCtx = useContext(DataContext);
  const extraCtx = useContext(ExtraContext);

  const ela3_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    return (
      ((Math.round(755 * totalRangedOutter) *
        (1.9 + (dataCtx.inner + extraInner) / 100) +
        extraAdd) *
        1.8 -
        bossDef) *
      (dataCtx.ADBoost / 100) *
      (extraBoost / 100) *
      1.35 *
      40
    );
  };

  const kroos2_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((0.625 * 30) / totalAtkSpeed) * 100);
    const hits = 32 + (Math.round((30 * 30) / interval) - 16) * 4;
    return (
      ((Math.round(608 * totalRangedOutter) *
        (1 + (dataCtx.inner + extraInner) / 100) +
        extraAdd) *
        (0.8 + 0.2 * 1.75) -
        bossDef) *
      (dataCtx.ADBoost / 100) *
      (extraBoost / 100) *
      hits
    );
  };

  const ew2_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => {
    const totalRangedOutter =
      1 + (dataCtx.outter + dataCtx.rangedOutter + extraOutter) / 100;
    const attack =
      Math.round(874 * totalRangedOutter) *
        (1.35 + (dataCtx.inner + extraInner) / 100) +
      extraAdd;
    const totalAtkSpeed =
      100 + dataCtx.atkSpeed + extraAtkSpeed > 600
        ? 600
        : 100 + dataCtx.atkSpeed + extraAtkSpeed;
    const interval = Math.round(((1.3 * 30) / totalAtkSpeed) * 100);
    const hits_1 = Math.ceil((12.5 * 30) / interval);
    const hits_2 = Math.ceil((12.5 * 30 * 4) / interval);
    return (
      (attack * 1.25 * 2 - 3 * bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits_1 +
      (attack * 2 - 3 * bossDef) *
        (dataCtx.ADBoost / 100) *
        (extraBoost / 100) *
        hits_2 +
      (attack * 1.85 - bossDef) * ((hits_1 + hits_2) * 0.2775)
    );
  };

  const empty_calc = (
    extraOutter: number,
    extraInner: number,
    extraAdd: number,
    bossDef: number,
    bossRes: number,
    extraAtkSpeed: number,
    extraBoost: number
  ) => 0;

  const bossHP = 360000 * (dataCtx.enemyHP / 100);
  const bossDef = 2400 * (dataCtx.enemyDef / 100);
  const bossRes =
    ((75 - extraCtx.resReduceNum) * (100 - extraCtx.resReducePercent)) / 100;

  const Ela3: Skill = {
    id: 0,
    label: "艾拉3",
    dmg: ela3_calc,
  };

  const Kroos2: Skill = {
    id: 1,
    label: "寒芒克洛丝2",
    dmg: kroos2_calc,
  };

  const Ew2: Skill = {
    id: 2,
    label: "维什戴尔2",
    dmg: ew2_calc,
  };

  const Logo3: Skill = {
    id: 3,
    label: "逻各斯3(近似)",
    dmg: empty_calc,
  };

  const Yato1: Skill = {
    id: 4,
    label: "夜刀1",
    dmg: empty_calc,
  };

  const Texas2: Skill = {
    id: 5,
    label: "德克萨斯2",
    dmg: empty_calc,
  };

  const Tachanka2: Skill = {
    id: 6,
    label: "战车2(理论)",
    dmg: empty_calc,
  };

  const Vina3: Skill = {
    id: 7,
    label: "维娜3",
    dmg: empty_calc,
  };

  const Goldenglow3: Skill = {
    id: 8,
    label: "澄闪3",
    dmg: empty_calc,
  };

  const skills: Skill[] = [
    Ela3,
    Kroos2,
    Ew2,
    Logo3,
    Yato1,
    Texas2,
    Tachanka2,
    Vina3,
    Goldenglow3,
  ];

  return (
    <Flex direction="column" justify="flex-start" align="center">
      <HStack>
        <Text>奎隆生命值：{parseFloat(bossHP.toFixed(3))}</Text>
      </HStack>

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
            {Array.from({ length: 5 }).map((_, index) => (
              <Tr key={index}>
                <Td>
                  <Select
                    placeholder="选择干员技能"
                    value={extraCtx.selectedSkill[index]}
                    onChange={(e) => {
                      let cur = extraCtx.selectedSkill;
                      cur[index] = Number.parseInt(e.target.value);
                      extraCtx.setSelectedSkill([...cur]);
                      if (e.target.value === "3") extraCtx.setResReduceNum(10);
                      if (e.target.value === "5")
                        extraCtx.setResReducePercent(30);
                    }}
                    borderColor="gray.400"
                    size="sm"
                  >
                    {skills.map((skill) => (
                      <option value={skill.id}>{skill.label}</option>
                    ))}
                  </Select>
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
    </Flex>
  );
};

export default DamageCalculator;
