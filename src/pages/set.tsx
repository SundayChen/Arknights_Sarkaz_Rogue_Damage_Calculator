import EnemyContext from "@/contexts/enemy";
import EnemySetContext from "@/contexts/enemy-set";
import { Enemy } from "@/models/enemy";
import {
  Box,
  HStack,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";

const EnemySetPage = () => {
  const enemyCtx = useContext(EnemyContext);
  const setCtx = useContext(EnemySetContext);

  const tips_lv5_boss =
    "注：五层Boss属性默认已获得四结局藏品，攻防生命均分别提升至130%(一结局)、125%(二结局)，但是不包含阿纳萨羯磨的50%(需在敌人属性页选上该藏品)";
  const tips_define =
    "注：敌人的基础属性即在prts中直接能查到的属性，未经难度或其他加成(仅紧急关卡需要输入经紧急提升后的)";
  const tips_thereis = "这里简单地等效为增加最大生命，若有真伤等情况请手动修正";
  const tips_defPercent =
    "局内干员百分比减防后的最终防御比例，如流星减防-35%(*0.65)，最终这里的值为65";
  const tips_resPercent =
    "局内干员百分比削抗后的最终法抗比例，如异德削抗-30%(*0.7)，棘刺削抗-50%(*0.5)，最终这里的值为35。异德等参与输出计算的干员，造成的削抗效果会自动填写于此";

  const enemyList: Enemy[] = [
    {
      id: 0,
      name: "奎隆，摩诃萨埵权化",
      baseHP: 360000,
      baseDef: 2400,
      baseRes: 75,
    },
    {
      id: 1,
      name: "特雷西斯，黑冠尊主",
      baseHP: 150000,
      baseDef: 2500,
      baseRes: 60,
    },
    {
      id: 2,
      name: "弗莱蒙特，诸思之解答",
      baseHP: 130000,
      baseDef: 1950,
      baseRes: 80,
    },
    {
      id: 3,
      name: "自定义敌人",
      baseHP: setCtx.definedHP,
      baseDef: setCtx.definedDef,
      baseRes: setCtx.definedRes,
    },
  ];

  const TheresisDmgReductionList = [
    {
      label: "90%",
      data: 90,
    },
    {
      label: "75%",
      data: 75,
    },
    {
      label: "60%",
      data: 60,
    },
    {
      label: "50%",
      data: 50,
    },
    {
      label: "35%",
      data: 35,
    },
  ];

  return (
    <VStack p={6} spacing={4}>
      <Text>敌人设置</Text>
      <Select
        value={setCtx.selectedEnemy}
        onChange={(e) => {
          setCtx.setSelectedEnemy(Number(e.target.value));
          enemyCtx.setName(enemyList[Number(e.target.value)].name);
          enemyCtx.setDef(enemyList[Number(e.target.value)].baseDef);
          enemyCtx.setRes(enemyList[Number(e.target.value)].baseRes);
          if (Number(e.target.value) === 1 && !setCtx.isTheresis) {
            enemyCtx.setHP(
              (enemyList[1].baseHP * 100) / (100 - setCtx.TheresisDmgReduction)
            );
            setCtx.setIsTheresis(true);
          } else {
            enemyCtx.setHP(enemyList[Number(e.target.value)].baseHP);
            if (Number(e.target.value) !== 1 && setCtx.isTheresis)
              setCtx.setIsTheresis(false);
          }
        }}
        borderColor="gray.400"
        size="sm"
        w="25%"
      >
        {enemyList.map((enemy) => (
          <option value={enemy.id}>{enemy.name}</option>
        ))}
      </Select>

      {(setCtx.selectedEnemy === 1 || setCtx.selectedEnemy === 2) && (
        <Text mx={24}>{tips_lv5_boss}</Text>
      )}

      {setCtx.selectedEnemy === 1 && (
        <HStack>
          <Tooltip label={tips_thereis} bg="gray.600">
            <Box as="span" textDecoration="underline" fontWeight="black" w={28}>
              大特减伤
            </Box>
          </Tooltip>
          <Select
            value={setCtx.TheresisDmgReduction}
            onChange={(e) => {
              setCtx.setTheresisDmgReduction(Number(e.target.value));
              enemyCtx.setHP(
                (enemyList[1].baseHP * 100) / (100 - Number(e.target.value))
              );
            }}
            borderColor="gray.400"
            size="sm"
          >
            {TheresisDmgReductionList.map((red) => (
              <option value={red.data}>{red.label}</option>
            ))}
          </Select>
        </HStack>
      )}

      {setCtx.selectedEnemy === 3 && (
        <VStack spacing={4}>
          <Text>{tips_define}</Text>

          <HStack>
            <Text>基础生命：</Text>
            <NumberInput
              borderColor="gray.400"
              min={1}
              value={setCtx.definedHP}
              onChange={(value) => {
                setCtx.setDefinedHP(Number(value));
                enemyCtx.setHP(Number(value));
              }}
            >
              <NumberInputField />
            </NumberInput>
          </HStack>

          <HStack>
            <Text>基础防御：</Text>
            <NumberInput
              borderColor="gray.400"
              min={0}
              value={setCtx.definedDef}
              onChange={(value) => {
                setCtx.setDefinedDef(Number(value));
                enemyCtx.setDef(Number(value));
              }}
            >
              <NumberInputField />
            </NumberInput>
          </HStack>

          <HStack>
            <Text>基础法抗：</Text>
            <NumberInput
              borderColor="gray.400"
              min={0}
              value={setCtx.definedRes}
              onChange={(value) => {
                setCtx.setDefinedRes(Number(value));
                enemyCtx.setRes(Number(value));
              }}
            >
              <NumberInputField />
            </NumberInput>
          </HStack>
        </VStack>
      )}

      <HStack>
        <Text>干员数值减防：</Text>
        <NumberInput
          borderColor="gray.400"
          min={0}
          value={enemyCtx.defReduceNum}
          onChange={(value) => {
            enemyCtx.setDefReduceNum(Number(value));
          }}
        >
          <NumberInputField />
        </NumberInput>
      </HStack>

      <HStack>
        <Text>
          <Tooltip label={tips_defPercent} bg="gray.600">
            <Box as="span" textDecoration="underline">
              叠乘防御比例
            </Box>
          </Tooltip>
          ：
        </Text>
        <NumberInput
          borderColor="gray.400"
          min={0}
          value={enemyCtx.defPercent}
          onChange={(value) => {
            enemyCtx.setDefPercent(Number(value));
          }}
        >
          <NumberInputField />
        </NumberInput>
      </HStack>

      <HStack>
        <Text>干员数值削抗：</Text>
        <NumberInput
          borderColor="gray.400"
          min={0}
          value={enemyCtx.resReduceNum}
          onChange={(value) => {
            enemyCtx.setResReduceNum(Number(value));
          }}
        >
          <NumberInputField />
        </NumberInput>
      </HStack>

      <HStack>
        <Text>
          <Tooltip label={tips_resPercent} bg="gray.600">
            <Box as="span" textDecoration="underline">
              叠乘法抗比例
            </Box>
          </Tooltip>
          ：
        </Text>
        <NumberInput
          borderColor="gray.400"
          min={0}
          value={enemyCtx.resPercent}
          onChange={(value) => {
            enemyCtx.setResPercent(Number(value));
          }}
        >
          <NumberInputField />
        </NumberInput>
      </HStack>
    </VStack>
  );
};

export default EnemySetPage;
