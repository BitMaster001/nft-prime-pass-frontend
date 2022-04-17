import s from '../Menu/SocialIcons/style';
import { Text } from 'components/Text'
import Image from 'next/image'

const Footer = () => {
  return (
    <section id="footer" className="bg-black px-4 py-8">
      <div className="flex flex-col gap-8 items-center text-center">
        <Text>primepassnft@gmail.com</Text>

        <s.IconContainer>
          <Image src="/images/twitter.svg" layout="fill" alt="" />
        </s.IconContainer>

        <Text>©2022 by Prime Pass NFT. Proudly created with Wix.com</Text>
      </div>
    </section>
  );
};

export default Footer;
