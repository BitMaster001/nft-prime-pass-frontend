import Image from "next/image";
import tw from "tailwind-styled-components";
import { Text } from 'components/Text'

const s = {
  P1: tw.p`
    text-[42px]
    font-bold
    max-w-[300px]
  `
};

const Home = () => {
  return (
    <section id="home" className="mobile:p-0 ipad:p-11 flex mobile:flex-col ipad:flex-row bg-[#19191E]">
      <div className="basis-1/2">
        <Image src="/images/prereveal.webp" width={1140} height={1260} alt="" />
      </div>
      <div className="basis-1/2 flex flex-col justify-center items-center text-center px-4 py-8">
        <s.P1>Prime Pass NFT</s.P1>

        <Text className="max-w-[500px]">A NFT collection of 1000 MetaCards heading towards Opensea! The project with the BEST utility and art made just for you!</Text>
      </div>
    </section>
  );
};

export default Home;
