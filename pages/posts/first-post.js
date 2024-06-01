
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Albert G Mirasol Jr.</p>
        <p>
         BSCS - 3B1
        </p>
        <p>
         This is my Next.js Website
        </p>
        <h2>
         <Link href="/">← Back to home</Link>
       </h2>
      </section>
    </Layout>
  );
}