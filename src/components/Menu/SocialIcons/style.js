import tw from "tailwind-styled-components";

const s = {
  SocialIconsContainer: tw.div`
    flex justify-center items-center gap-[15px]
  `,
  IconContainer: tw.div`
    relative cursor-pointer

    mobile:w-[20px] 
    mobile:h-[16px] 
    
    desktop:w-[20px] 
    desktop:h-[16px] 
  `
};

export default s;