import DamageCalculator from "@/components/damage-calculator";
import DataContext from "@/contexts/data";
import { Box, Flex, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { LuGithub } from "react-icons/lu";

const HomePage = () => {
  const dataCtx = useContext(DataContext);

  const outter: string =
    "几丁质刺刃、无惧之刃、佣兵的饰物、生还者合约、空羽兽(召唤物)";
  const inner: string =
    "绿叶菜罐头、叙拉古人的愤怒、《光耀卡西米尔》、《归来》、空羽兽(干员)、荣耀绶带、探索者背包、黑色郁金香";
  const hand: string =
    "需要进入关卡触发条件的为局内加攻(如轰鸣之手)，否则为局外加攻(如进入关卡前就能确认效果的携带加攻)";
  const added: string =
    "“增伤乘区”页之外的增伤藏品全为叠乘，如Scout的狙击镜、奴隶猎捕器、“文明的存续”。紧急活性剂、疗养体验卡、疗养特供卡等其他藏品自行处理";

  return (
    <Flex direction="column" h="100%" justify="flex-start" align="center" p={3}>
      <HStack fontSize="sm">
        <Text>局外加攻: {dataCtx.outter}%</Text>
        <Text>近战加攻: {dataCtx.meleeOutter}%</Text>
        <Text>远程加攻: {dataCtx.rangedOutter}%</Text>
        <Text>局内加攻: {dataCtx.inner}%</Text>
        <Text>攻速加成: +{dataCtx.atkSpeed}</Text>
      </HStack>
      <HStack fontSize="sm">
        <Text>技力回复: +{dataCtx.skillRecovery / 100}</Text>
        <Text>物理伤害: {parseFloat(dataCtx.ADBoost.toFixed(3))}%</Text>
        <Text>法术伤害: {parseFloat(dataCtx.APBoost.toFixed(3))}%</Text>
        <Text>敌人生命: {parseFloat(dataCtx.enemyHP.toFixed(3))}%</Text>
        <Text>敌人防御: {parseFloat(dataCtx.enemyDef.toFixed(3))}%</Text>
      </HStack>

      <HStack mt={2} mb={4} px={3}>
        <Text>
          不便全局统一计算的
          <Tooltip label={outter} bg="gray.600">
            <Box as="span" fontWeight="bold" textDecoration="underline">
              局外加攻藏品
            </Box>
          </Tooltip>
          、
          <Tooltip label={inner} bg="gray.600">
            <Box as="span" fontWeight="bold" textDecoration="underline">
              局内加攻藏品
            </Box>
          </Tooltip>
          、
          <Tooltip label={hand} bg="gray.600">
            <Box as="span" fontWeight="bold" textDecoration="underline">
              职业书手
            </Box>
          </Tooltip>
          、
          <Tooltip label={added} bg="gray.600">
            <Box as="span" fontWeight="bold" textDecoration="underline">
              其他部分藏品
            </Box>
          </Tooltip>
          ，以及灵感、局内干员buff，需要在此页单独处理(在后面页面选择的藏品不需要在此页重复输入)。历史重构(科技树)20%局外加攻、难度debuff(加血减伤)默认生效
        </Text>
      </HStack>

      <DamageCalculator />

      <HStack bottom={3} position="absolute">
        <Text fontSize="xs" textAlign="center">
          B站
          <a
            href="https://space.bilibili.com/326801433?spm_id_from=333.1007.0.0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            @Sunday
          </a>
        </Text>
        <a
          href="https://github.com/SundayChen/Arknights_Sarkaz_Rogue_Damage_Calculator"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          <IconButton
            aria-label="github"
            icon={<LuGithub />}
            size="xs"
            colorScheme="blackAlpha"
            variant="link"
          ></IconButton>
        </a>
      </HStack>
    </Flex>
  );
};

export default HomePage;
