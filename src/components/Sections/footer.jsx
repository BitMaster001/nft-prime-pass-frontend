import s from '../Menu/SocialIcons/style';
import { Text } from 'components/Text'
import Image from 'next/image'

const Footer = () => {
  return (
    <section id="footer" className="bg-black px-4 py-8">
      <div className="flex flex-col gap-8 items-center text-center">
        {/* <Text>primepassnft@gmail.com</Text> */}

        <s.IconContainer href="https://twitter.com/PrimePassNFT" target="_blank" rel="noreferrer">
          <Image src="/images/twitter.svg" layout="fill" alt="" />
        </s.IconContainer>

        <Text>©2022 by Prime Pass NFT</Text>
      </div>
    </section>
  );
};

export default Footer;
