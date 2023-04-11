import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <h1>First Post</h1>
      </Head>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
