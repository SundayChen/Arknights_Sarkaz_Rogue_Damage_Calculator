import HeadNavBar from "@/components/head-navbar";
import { Card, Flex } from "@chakra-ui/react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      direction="column"
      h="100vh"
      bgImg={`url('/images/background.png')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <HeadNavBar />
      <Card
        className="content-blur-bg"
        h="100%"
        overflow="auto"
        mt={1}
        mb={4}
        mx={4}
      >
        {children}
      </Card>
    </Flex>
  );
};

export default MainLayout;
