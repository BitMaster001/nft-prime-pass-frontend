import Image from "next/image";
import { Text } from 'components/Text'
import * as s from './styled'

const Home = ({ openModal }) => {
  return (
    <section id="home" className="mobile:p-0 ipad:p-11 flex mobile:flex-col ipad:flex-row bg-[#19191E]">
      <div className="basis-1/2">
        <Image src="/images/prereveal.webp" width={1140} height={1260} alt="" />
      </div>
      <div className="basis-1/2 flex flex-col justify-center items-center text-center px-4 py-8">
        <s.P1>Prime Pass NFT</s.P1>

        <Text className="max-w-[500px]">An NFT collection of 1000 MetaCards heading towards Opensea! The project with the BEST utility and art made just for you!</Text>

        <button className="mt-4 px-10 py-2 bg-[#EE2222]/90 hover:bg-[#FF1111] rounded-lg mobile:text-base ipad:text-[30px] font-bold" onClick={openModal}>Mint</button>
      </div>
    </section>
  );
};

export default Home;
