import Head from "next/head";
import Image from "next/image";
import Header from "components/Header";
import Footer from "components/Footer";
import ReactMarkdown from "react-markdown";
import fs from "fs";
const fsAsync = fs.promises;

export default function ApiInfo({ data }) {
  //  console.log(data);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid justify-center mt-4 p-3">
        <div className="prose overflow-x-auto">
          <ReactMarkdown children={data.md} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const markdown = await fsAsync.readFile("api-info.md", "utf8");
  // console.log(markdown);
  return {
    props: { data: {md: markdown }}
  }
}

