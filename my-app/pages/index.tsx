import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <Head>
        <title>トップページ</title>
        <meta property="og:title" content="タイトル" />
        <meta property="og:type" content="website　または　blog　または　article" />
        <meta property="og:description" content="ページの簡単な説明" />
        <meta property="og:url" content="ページのURL" />
        <meta property="og:site_name" content="サイトのタイトル" />
        <meta property="og:image" content="サムネイル画像のURL" />
      </Head>
      <h1>Hello Next.js</h1>
      <Image src="/00005 - icon.png" width={300} height={300} />

    </div>
  );
}
