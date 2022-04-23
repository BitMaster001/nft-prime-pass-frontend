import tw from "tailwind-styled-components";
import { SectionTitle } from "./SectionTitle";
import { Text } from 'components/Text'

const Faq = () => {
  return (
    <section id="faq" className="bg-[#3A3A40] mobile:px-4 mobile:py-8 ipad:px-11 ipad:py-[100px]">
      <SectionTitle>FAQ</SectionTitle>
      <div className="flex flex-col gap-8">
        <Text>What is Prime Pass? Prime Pass is a NFT Project with the best utility and very good art!</Text>

        <Text>When is the mint date and what is the price? The mint date is April 23rd at 6am PST and the price is 0.08 ETH.</Text>

        <Text>What do I need to have to mint a NFT? Just make sure you have a crypto wallet like MetaMask with ETH in it. You can buy ETH on many exchanges like Coinbase, Binance, or Crypto.com.</Text>

        <Text>Why are you building on Ethereum? Won&apos;t gas fees be high? Ethereum is the main blockchain for nfts, we will do our best and make sure gas fees are as low as we can make them.</Text>

        <Text>Is there rarity? Why should I buy more than 1? No, each nft will have the same privileges, but if you own more than 1 nft you will get another vote in what we do next. There will also be more benefits in the future.</Text>

        <Text>What does Prime Pass have that other Alpha groups don’t? Prime Pass is not just your regular Alpha group because of the big amount of utility, it is in roadmap. Check it out!</Text>

        <Text>Will there be a reveal and how long? No, the nft will go straight to your wallet with the art!</Text>

        <Text>Will there be a Public mint? Yes, there will be a WL and Public mint, the time between them is TBA as of now.</Text>
      </div>
    </section>
  );
};

export default Faq;
