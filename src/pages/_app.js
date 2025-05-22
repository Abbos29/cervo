import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";
import Feedback from "@/components/layout/Feedback/Feedback";
import Footer from "@/components/layout/Footer/Footer";
import '../i18n'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Feedback />
      <Footer />
    </>
  );
}
