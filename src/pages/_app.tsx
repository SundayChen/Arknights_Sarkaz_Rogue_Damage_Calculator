import chakraExtendTheme from "@/chakra-theme";
import { Fade } from "@/components/transition";
import MainLayout from "@/layouts/main-layout";
import "@/styles/globals.css";
import { isProd } from "@/utils/env";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // forbid right mouse menu of webview
    if (isProd) {
      document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
    }
  }, []);

  //   const layoutMappings: {
  //     prefix: string;
  //     layouts: React.ComponentType<{ children: React.ReactNode }>[];
  //   }[] = [
  //     { prefix: "/settings", layouts: [SettingsLayout] },
  //     { prefix: "/games/instance", layouts: [GamesLayout, InstanceLayout] },
  //     { prefix: "/games", layouts: [GamesLayout] },
  //   ]; // not nest MainLayout to avoid tab flashing

  //   let SpecLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  //     <>{children}</>
  //   );

  //   for (const mapping of layoutMappings) {
  //     if (router.pathname.startsWith(mapping.prefix)) {
  //       SpecLayout = ({ children }) =>
  //         mapping.layouts.reduceRight(
  //           (nestedChildren, Layout) => <Layout>{nestedChildren}</Layout>,
  //           children
  //         );
  //       break;
  //     }
  //   }

  return (
    <ChakraProvider theme={chakraExtendTheme}>
      <MainLayout>
        <Fade key={router.pathname.split("/")[1] || ""} in>
          {/* <SpecLayout> */}
          <Component {...pageProps} />
          {/* </SpecLayout> */}
        </Fade>
      </MainLayout>
    </ChakraProvider>
  );
}
