import {
  Card,
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  LuBone,
  LuCrown,
  LuSkull,
  LuSparkles,
  LuSquirrel,
} from "react-icons/lu";
import { TbGlassCocktail } from "react-icons/tb";

const HeadNavBar = () => {
  const router = useRouter();

  const navList = [
    { icon: LuSquirrel, label: "伤害计算", path: "/home" },
    { icon: LuBone, label: "局外加攻", path: "/outter" },
    { icon: LuCrown, label: "局内加攻", path: "/inner" },
    { icon: TbGlassCocktail, label: "攻速藏品", path: "/atkspeed" },
    { icon: LuSparkles, label: "增伤乘区", path: "/dmgboost" },
    { icon: LuSkull, label: "敌人属性", path: "/enemy" },
  ];

  const selectedIndex = navList.findIndex((item) =>
    router.pathname.startsWith(item.path)
  );

  return (
    <Flex justify="center" p={4}>
      <Card className="content-blur-bg" px={8} py={2}>
        <HStack spacing={4}>
          <Tabs
            variant="soft-rounded"
            size="sm"
            index={selectedIndex}
            onChange={(index) => {
              router.push(navList[index].path);
            }}
          >
            <TabList>
              {navList.map((item, index) => (
                <Tab
                  key={item.path}
                  fontWeight={selectedIndex === index ? "600" : "normal"}
                >
                  <HStack spacing={2}>
                    <Icon as={item.icon} />
                    <Text>{item.label}</Text>
                  </HStack>
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </HStack>
      </Card>
    </Flex>
  );
};

export default HeadNavBar;
