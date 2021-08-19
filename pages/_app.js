import "../styles/globals.css";
import Head from "next/head";
import styled from "styled-components";
import NavBar from "../src/components/NavBar";
const Container = styled.div`
  direction: rtl;
  background-color: #f8f8f8;
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ترپیا | فروشگاه محصولات پزشکی</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
