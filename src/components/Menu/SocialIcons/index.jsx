import Image from "next/image";
import s from './style'

const ICONDATA = [
  { name: "twitter", imgUrl: "/images/twitter.svg" },
];

const SocialIcons = () => {
  return (
    <>
      <s.SocialIconsContainer>
        {ICONDATA.map((data, index) => (
          <s.IconContainer key={index}>
            <Image src={data.imgUrl} layout="fill" alt={data.name} />
          </s.IconContainer>
        ))}
      </s.SocialIconsContainer>
    </>
  );
};

export default SocialIcons;
