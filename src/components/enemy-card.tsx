import DataContext from "@/contexts/data";
import EnemyContext from "@/contexts/enemy";
import ExtraContext from "@/contexts/extra";
import { Box, HStack, Text, Tooltip, VStack } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

const EnemyCard = () => {
  const enemyCtx = useContext(EnemyContext);
  const dataCtx = useContext(DataContext);
  const extraCtx = useContext(ExtraContext);

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

  const HP_item = "藏品影响后的生命值比例";
  const def_item = "藏品影响后的防御值比例";
  const def_flat = "局内干员的数值减防";
  const def_percent = "局内干员的百分比减防后的比例";
  const res_flat = "局内干员的数值削抗";
  const res_percent = "局内干员的百分比削抗后的比例";

  useEffect(() => {
    if (extraCtx.selectedSkill.includes(4)) {
      if (!extraCtx.existsLogos) {
        enemyCtx.setResReduceNum(enemyCtx.resReduceNum + 10);
        extraCtx.setExistsLogos(true);
      }
    } else {
      if (extraCtx.existsLogos) {
        enemyCtx.setResReduceNum(enemyCtx.resReduceNum - 10);
        extraCtx.setExistsLogos(false);
      }
    }
    if (extraCtx.selectedSkill.includes(6)) {
      if (!extraCtx.existsTexas) {
        enemyCtx.setResPercent(enemyCtx.resPercent * 0.7);
        extraCtx.setExistsTexas(true);
      }
    } else {
      if (extraCtx.existsTexas) {
        enemyCtx.setResPercent(enemyCtx.resPercent / 0.7);
        extraCtx.setExistsTexas(false);
      }
    }
  }, [extraCtx.selectedSkill]);

  return (
    <VStack mb={2} spacing={0}>
      <Text fontWeight="black" fontSize="xl">
        {enemyCtx.name}
      </Text>

      <HStack spacing={8}>
        <Text>
          生命值: {parseFloat(bossHP.toFixed(3))}{" "}
          <Tooltip label={HP_item} bg="gray.600">
            (
            <Box as="span" textDecoration="underline">
              {parseFloat(dataCtx.enemyHP.toFixed(3))}%
            </Box>
            )
          </Tooltip>
        </Text>

        <Text>
          防御: {parseFloat(bossDef.toFixed(3))}{" "}
          <Tooltip label={def_flat} bg="gray.600">
            (
            <Box as="span" textDecoration="underline">
              -{enemyCtx.defReduceNum}
            </Box>
            )
          </Tooltip>
          <Tooltip label={def_percent} bg="gray.600">
            (
            <Box as="span" textDecoration="underline">
              {parseFloat(enemyCtx.defPercent.toFixed(3))}%
            </Box>
            )
          </Tooltip>
          <Tooltip label={def_item} bg="gray.600">
            (
            <Box as="span" textDecoration="underline">
              {parseFloat(dataCtx.enemyDef.toFixed(3))}%
            </Box>
            )
          </Tooltip>
        </Text>

        <Text>
          法抗: {parseFloat(bossRes.toFixed(3))}{" "}
          <Tooltip label={res_flat} bg="gray.600">
            (
            <Box as="span" textDecoration="underline">
              -{enemyCtx.resReduceNum}
            </Box>
            )
          </Tooltip>
          <Tooltip label={res_percent} bg="gray.600">
            (
            <Box as="span" textDecoration="underline">
              {parseFloat(enemyCtx.resPercent.toFixed(3))}%
            </Box>
            )
          </Tooltip>
        </Text>
      </HStack>
    </VStack>
  );
};

export default EnemyCard;
