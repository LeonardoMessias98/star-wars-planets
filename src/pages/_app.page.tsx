import type { AppProps } from "next/app";

import LayoutWrapper from "@/shared/providers/Layout";
import GlobalStyle from "@/shared/styles/GlobalStyle";
import { FilterContextProvider } from "@/shared/providers/contexts/FilterContexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <FilterContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </FilterContextProvider>
    </LayoutWrapper>
  );
}
