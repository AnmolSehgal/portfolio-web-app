import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

type AppPageProps = AppProps & {
  Component: NextPage;
};

const App = ({ Component, pageProps }: AppPageProps) => {
  return <Component {...pageProps} />;
};

export default App;
