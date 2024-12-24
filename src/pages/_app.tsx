import chakraExtendTheme from "@/chakra-theme";
import { Fade } from "@/components/transition";
import { DataContextProvider } from "@/contexts/data";
import { EnemyContextProvider } from "@/contexts/enemy";
import { ExtraContextProvider } from "@/contexts/extra";
import { ItemContextProvider } from "@/contexts/item";
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

  return (
    <ChakraProvider theme={chakraExtendTheme}>
      <DataContextProvider>
        <ItemContextProvider>
          <ExtraContextProvider>
            <EnemyContextProvider>
              <MainLayout>
                <Fade key={router.pathname.split("/")[1] || ""} in>
                  <Component {...pageProps} />
                </Fade>
              </MainLayout>
            </EnemyContextProvider>
          </ExtraContextProvider>
        </ItemContextProvider>
      </DataContextProvider>
    </ChakraProvider>
  );
}
