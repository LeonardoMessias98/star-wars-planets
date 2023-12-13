import type { AppProps } from "next/app";

import LayoutWrapper from "@/shared/providers/Layout";
import GlobalStyle from "@/shared/styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
      <GlobalStyle />
    </LayoutWrapper>
  );
}
