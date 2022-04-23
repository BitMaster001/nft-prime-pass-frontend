import { SectionTitle } from "./SectionTitle";
import { Text } from 'components/Text'

const Roadmap = () => {
  return (
    <section id="roadmap" className="bg-black mobile:px-4 mobile:py-8 ipad:px-11 ipad:py-[100px]">
      <SectionTitle>ROADMAP</SectionTitle>
      <div className="flex flex-col gap-8">
        <Text>PHASE 1: Prime Pass sells out and all TBA nfts get launched onto the
          Ethereum blockchain. </Text>
        <Text>PHASE 2: The Prime Pass team will immediately
        start to activate the utility and invest the funds into growing the
          community by establishing partnerships in the NFT space. </Text>
        <Text>PHASE 3: The
        utility gives holders access to exclusive stock, crypto, options, and
        nft signals. On top of that holders will get WL giveaways in upcoming
        hyped projects and a private chat/AMAs. Our signals are buy and sell
          cues, NFA and DYOR. </Text>
        <Text>PHASE 4: We will start a newsletter about crypto,
        nfts, stocks, and everything business. So our holders will not have to
        do their own research, they just have to look at the daily newsletter
          and BOOM! Easy as that! </Text>
        <Text>PHASE 5: Also, 1 nft = 1 vote in what our
        project does next. It could be a Crypto coin, merch store/other items,
        etc. You holders vote and decide on the future. Furthermore, 5% of
        primary mint and 25% of all secondary market royalty will go to a pot
          that you holders can vote on what to do with.</Text>
        <Text>PHASE 6: The community
        will become tight-knit and a family, we will all make profits
        together, WAGMI! PHASE 7: Roadmap 2.0 will be introduced. (The holders
          decide the future of Prime Pass.)</Text>
      </div>
    </section>
  )
}
export default Roadmap;
