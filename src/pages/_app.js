import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
