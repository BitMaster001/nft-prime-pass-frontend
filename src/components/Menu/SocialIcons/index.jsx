import Image from "next/image";
import s from './style'

const ICONDATA = [
  { name: "twitter", imgUrl: "/images/twitter.svg", link: "https://twitter.com/PrimePassNFT" },
];

const SocialIcons = () => {
  return (
    <>
      <s.SocialIconsContainer>
        {ICONDATA.map((data, index) => (
          <s.IconContainer key={index} href={data.link} target="_blank" rel="noreferrer">
            <Image src={data.imgUrl} layout="fill" alt={data.name} />
          </s.IconContainer>
        ))}
      </s.SocialIconsContainer>
    </>
  );
};

export default SocialIcons;
