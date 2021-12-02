import "@/styles/globals.css";
import { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay";
import { useEnvironment } from "@/lib/relay";

function MyApp({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.initialRecords);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  )
}

export default MyApp
