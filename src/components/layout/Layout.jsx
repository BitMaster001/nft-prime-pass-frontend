import Head from "next/head";
import Menu from "components/Menu";

export default function Layout({ children }) {

  return (
    <>
      <Head>
        
      </Head>
      <Menu />
      <main className="mobile:mt-[71px] ipad:mt-[90px] desktop:mt-[108px]">{children}</main>
    </>
  );
}
